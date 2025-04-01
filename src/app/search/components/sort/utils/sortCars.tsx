import { CarsModel } from "@/models/cars.model";

export function sortCars(cars: CarsModel[], sortType: string): CarsModel[] {
  switch (sortType) {
    case "price-to-up": {
      return [...cars].sort(
        (a, b) => a.rental.days_3_to_14 - b.rental.days_3_to_14,
      );
    }
    case "price-to-down": {
      return [...cars].sort(
        (a, b) => b.rental.days_3_to_14 - a.rental.days_3_to_14,
      );
    }
    case "model": {
      return [...cars].sort((a, b) => parseInt(b.model) - parseInt(a.model));
    }
    case "name":
      return [...cars].sort((a, b) => a.name.localeCompare(b.name, "fa"));
    default:
      return cars;
  }
}
