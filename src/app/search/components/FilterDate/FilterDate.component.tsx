"use client";
import React, { ReactElement, useContext } from "react";
import { FiltersContext } from "../../providers/filtersProviders";

import CardComponent from "@/components/card-component/card-component.component";
import DropdownButtonComponent from "@/components/dropdown-button/dropdown-button.component";

import styles from "./FilterDate.module.css";

type Option = {
  key: "today" | "tomorrow" | "next-7-days" | "All";
  label: string;
};

type Props = {
  title: string;
  options: Option[];
};

export default function FilterDateComponent({
  title,
  options,
}: Props): ReactElement {
  const { changeFilter, filters } = useContext(FiltersContext);

  const handleSelect = (key: string) => {
    changeFilter("dateFilter", key);
  };

  return (
    <CardComponent>
      <div className={styles.title}>{title}</div>
      <DropdownButtonComponent
        options={options}
        selectedKey={filters.dateFilter}
        onSelect={handleSelect}
        defaultLabel="همه"
      />
    </CardComponent>
  );
}
