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
import { DoctorModel } from "@/models/doctor.model";

import { FiltersContext } from "./filter.providers";

import { sortDoctors } from "../components/sort/utils/sortDoctors";

type ContextValue = {
  filteredDoctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
});

type Props = PropsWithChildren & {
  doctors: DoctorModel[];
};

export default function DoctorsProvider({
  children,
  doctors,
}: Props): ReactElement {
  const { filters } = useContext(FiltersContext);
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([]);

  const isVisible = useCallback(
    (doctor: DoctorModel): boolean => {
      return (
        doesDoctorInclude(doctor, filters.query) &&
        doesInclude(doctor.expertise, filters.expertise) &&
        doesInclude(doctor.gender, filters.gender) &&
        doesInclude(doctor.degree, filters.degree) &&
        isAppointmentValid(doctor.appointment, filters.appointment)
      );
    },
    [filters],
  );

  useEffect(() => {
    let sortedDoctors = doctors.filter(isVisible);

    if (filters.sortType) {
      sortedDoctors = sortDoctors(sortedDoctors, filters.sortType);
    }

    setFilteredDoctors(sortedDoctors);
  }, [isVisible, doctors, filters.sortType]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

function doesDoctorInclude(doctor: DoctorModel, query?: string): boolean {
  if (!query) return true;
  return doesSomeInclude([doctor.name, doctor.brief, doctor.address], query);
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) return true;
  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) return true;
  return item.toLowerCase().includes(query.toLowerCase());
}

function isAppointmentValid(
  appointmentValue: string,
  filterValue?: string,
): boolean {
  if (!filterValue || filterValue === "all") return true;

  switch (filterValue) {
    case "today":
      return appointmentValue === "امروز";
    case "tomorrow":
      return appointmentValue === "تا فردا";
    case "inThreeDays":
      return appointmentValue === "تا سه روز";
    case "inFiveDays":
      return appointmentValue === "تا پنج روز";
    case "inSevenDays":
      return appointmentValue === "تا هفت روز";
    default:
      return true;
  }
}
