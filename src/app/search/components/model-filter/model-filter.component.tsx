"use client";

import { ReactElement, useContext } from "react";

import RadioFilterComponent from "../radio-filter/radio-filter.component";

import { FiltersContext } from "../../providers/filter.providers";

export default function ModelFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "model", value });
  };

  return (
    <RadioFilterComponent
      title="مدل (سال)"
      name="degree"
      options={[
        { value: "2024-1403", label: "1403 - 2024" },
        { value: "2023-1402", label: "1402 - 2023" },
        { value: "2022-1401", label: "1401 - 2022" },
        { value: "2021-1400", label: "1400 - 2021" },
        { value: "2020-1399", label: "1399 - 2020" },
        { value: "2019-1398", label: "1398 - 2019" },
        { value: "2018-1397", label: "1397 - 2018" },
        { value: "2017-1396", label: "1396 - 2017" },
      ]}
      value={filters.model}
      onChange={changeHandler}
    />
  );
}
