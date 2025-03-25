"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filter.providers";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function WithDriverFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "with_driver", value });
  };

  return (
    <RadioFilterComponent
      title="خدمات اجاره"
      name="with_driver"
      options={[
        { value: "با راننده", label: "با راننده" },
        { value: "بدون راننده", label: "بدون راننده" },
      ]}
      value={filters.with_driver}
      onChange={changeHandler}
    />
  );
}
