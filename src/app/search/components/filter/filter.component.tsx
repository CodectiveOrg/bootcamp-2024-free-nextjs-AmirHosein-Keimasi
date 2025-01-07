"use client";
import React, { ReactElement, useContext } from "react";

import CardComponent from "@/components/card-component/card-component.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";
import { FiltersContext } from "../../providers/filtersProviders";
import { FiltersType } from "../../types/filter.type";

import styles from "./filter.module.css";

type Option = {
  key: keyof FiltersType;
  label: string;
};

type Props = {
  title: string;
  Options: Option[];
};

export default function FilterComponent({
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
            isActive={!!filters[Option.key]}
            onClick={() => changeFilter(Option.key, !filters[Option.key])}
          >
            {Option.label}
          </FilterButtonComponent>
        ))}
      </div>
    </CardComponent>
  );
}
