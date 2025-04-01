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
        doesInclude(car.with_driver, filters.with_driver)
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
