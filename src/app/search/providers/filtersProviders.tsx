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
  chengeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ) => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  chengeFilter: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setfilter] = useState<FiltersType>({});

  const chengeFilter = <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ): void => {
    setfilter((old) => ({ ...old, [key]: value }));
  };

  return (
    <FiltersContext.Provider value={{ filters, chengeFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}
