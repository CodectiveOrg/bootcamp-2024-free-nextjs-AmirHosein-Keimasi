"use client";
import React, { ReactElement, useContext } from "react";

import CardComponent from "@/components/card-component/card-component.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";
import { FiltersContext } from "../../providers/filtersProviders";

import styles from "./gender.module.css";

type Option = {
  key: "MaleGender" | "FemaleGender" | "AllGender";
  label: string;
};

type Props = {
  title: string;
  Options: Option[];
};

export default function GenderComponent({
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
            isActive={filters.gender === Option.key}
            onClick={() => changeFilter("gender", Option.key)}
          >
            {Option.label}
          </FilterButtonComponent>
        ))}
      </div>
    </CardComponent>
  );
}
