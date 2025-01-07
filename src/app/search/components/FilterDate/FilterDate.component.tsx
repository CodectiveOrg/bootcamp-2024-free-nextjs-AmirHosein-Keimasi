"use client";
import React, { ReactElement, useContext } from "react";
import { FiltersContext } from "../../providers/filtersProviders";
import CardComponent from "@/components/card-component/card-component.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import styles from "./FilterDate.module.css";

type Option = {
  key: "today" | "tomorrow" | "next-7-days" | "All";
  label: string;
};

type Props = {
  title: string;
  Options: Option[];
};

export default function FilterDateComponent({
  title,
  Options,
}: Props): ReactElement {
  const { changeFilter, filters } = useContext(FiltersContext);

  return (
    <CardComponent>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        {Options.map((Option) => (
          <FilterButtonComponent
            key={Option.key}
            isActive={filters.dateFilter === Option.key}
            onClick={() => changeFilter("dateFilter", Option.key)}
          >
            {Option.label}
          </FilterButtonComponent>
        ))}
      </div>
    </CardComponent>
  );
}
