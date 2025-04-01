"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filter.providers";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function TransmissionFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "transmission", value });
  };

  return (
    <RadioFilterComponent
      title="نوع دنده"
      name="gender"
      options={[
        { value: "اتوماتیک", label: "اتوماتیک" },
        { value: "دستی", label: "دستی" },
      ]}
      value={filters.transmission}
      onChange={changeHandler}
    />
  );
}
