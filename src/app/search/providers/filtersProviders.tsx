"use client";
import {
  ReactElement,
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import { FiltersType } from "../types/filter.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ) => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilter] = useState<FiltersType>({ gender: "AllGender" });

  const changeFilter = <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ): void => {
    setFilter((old) => ({ ...old, [key]: value }));
  };

  return (
    <FiltersContext.Provider value={{ filters, changeFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}
