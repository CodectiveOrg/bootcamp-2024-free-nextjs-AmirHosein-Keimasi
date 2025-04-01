"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useReducer,
} from "react";

import { FiltersType } from "@/types/filter.type";

import { FiltersAction, filtersReducer } from "../reducers/filters.reducer";

type Value = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
