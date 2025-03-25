"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { FiltersContext } from "./filter.providers";
import { sortCars } from "../components/sort/utils/sortCars";
import { CarsModel } from "@/models/cars.model";

type ContextValue = {
  filteredCars: CarsModel[];
};

export const CarsContext = createContext<ContextValue>({
  filteredCars: [],
});

type Props = PropsWithChildren & {
  cars: CarsModel[];
};

export default function CarsProvider({ children, cars }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);
  const [filteredCars, setFilteredCars] = useState<CarsModel[]>([]);

  const isVisible = useCallback(
    (car: CarsModel): boolean => {
      return (
        doesCarInclude(car, filters.query) &&
        doesInclude(car.model, filters.model) &&
        doesInclude(car.location, filters.location) &&
        doesInclude(car.features.transmission, filters.transmission) &&
        doesInclude(car.with_driver, filters.with_driver) &&
        doesInclude(car.features.option_type, filters.optionType) && // بررسی سطح آپشن‌ها
        isWithinCapacity(car.capacity.passengers, filters.passengers) && // بررسی ظرفیت سرنشین
        isWithinCapacity(car.capacity.luggage, filters.luggage) && // بررسی ظرفیت بار
        isWithinBudget(car.rental, filters.priceRange) && // بررسی محدوده قیمت
        // hasFeatures(car.features, filters.features) && // بررسی امکانات خودرو
        matchesEngineSpecs(car.engine, filters.engine) // بررسی مشخصات موتور
      );
    },
    [filters],
  );

  useEffect(() => {
    let sortedCars = cars.filter(isVisible);

    if (filters.sortType) {
      sortedCars = sortCars(sortedCars, filters.sortType);
    }

    setFilteredCars(sortedCars);
  }, [isVisible, cars, filters.sortType]);

  return (
    <CarsContext.Provider value={{ filteredCars }}>
      {children}
    </CarsContext.Provider>
  );
}

// بررسی اینکه نام، مدل یا سایر ویژگی‌های خودرو شامل کوئری جستجو هست یا نه
function doesCarInclude(car: CarsModel, query?: string): boolean {
  if (!query) return true;
  return doesSomeInclude(
    [car.name, car.model, car.features.transmission, car.features.chassis_type],
    query,
  );
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) return true;
  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) return true;
  return item.toLowerCase().includes(query.toLowerCase());
}

// بررسی ظرفیت سرنشین یا بار
function isWithinCapacity(
  carCapacity: number,
  filterCapacity?: number,
): boolean {
  if (!filterCapacity) return true;
  return carCapacity >= filterCapacity;
}

// بررسی محدوده قیمت اجاره خودرو
function isWithinBudget(
  rental: CarsModel["rental"],
  priceRange?: { min?: number; max?: number },
): boolean {
  if (!priceRange) return true;
  const minPrice = rental.days_3_to_14; // قیمت پایه برای ۳ تا ۱۴ روز
  return (
    (!priceRange.min || minPrice >= priceRange.min) &&
    (!priceRange.max || minPrice <= priceRange.max)
  );
}

// بررسی اینکه آیا امکانات مورد نظر کاربر در خودرو وجود دارد
function hasFeatures(
  carFeatures: CarsModel["features"],
  selectedFeatures?: string[],
): boolean {
  if (!selectedFeatures || selectedFeatures.length === 0) return true;
  return selectedFeatures.every(
    (feature) => carFeatures[feature as keyof typeof carFeatures] === true,
  );
}

// بررسی مشخصات موتور با فیلترهای کاربر
function matchesEngineSpecs(
  engine: CarsModel["engine"],
  filters?: Partial<CarsModel["engine"]>,
): boolean {
  if (!filters) return true;
  return (
    (!filters.type || engine.type === filters.type) &&
    (!filters.capacity || engine.capacity >= filters.capacity) &&
    (!filters.cylinders || engine.cylinders === filters.cylinders) &&
    (!filters.acceleration || engine.acceleration <= filters.acceleration) &&
    (!filters.fuel_consumption ||
      engine.fuel_consumption <= filters.fuel_consumption)
  );
}
