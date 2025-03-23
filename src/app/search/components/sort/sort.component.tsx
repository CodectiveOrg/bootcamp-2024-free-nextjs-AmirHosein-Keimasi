"use client";

import { ReactElement, useContext, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

import { FiltersContext } from "../../providers/filter.providers";

const options: SelectOptionType[] = [
  { value: "rating", label: "بهترین" },
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "appointment", label: "نزدیک‌ترین نوبت" },
  { value: "name", label: "حروف الفبا" },
];

export default function SortComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0],
  );

  const handleSortChange = (option: SelectOptionType) => {
    setSelectedOption(option);
    dispatchFilters({
      type: "updated_filter",
      key: "sortType",
      value: option.value,
    });
  };

  return (
    <SelectComponent
      floating
      title="مرتب‌سازی"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={handleSortChange}
    />
  );
}
