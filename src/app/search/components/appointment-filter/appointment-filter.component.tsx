"use client";

import { ReactElement, useContext, useState } from "react";
import { FiltersContext } from "../../providers/filter.providers";
import SelectComponent from "@/components/select/select.component";
import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { value: "all", label: "هر زمان" },
  { value: "today", label: "امروز" },
  { value: "tomorrow", label: "تا فردا" },
  { value: "inThreeDays", label: "تا سه روز" },
  { value: "inFiveDays", label: "تا پنج روز" },
  { value: "inSevenDays", label: "تا هفت روز" },
];

export default function AppointmentFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options.find((option) => option.value === filters.appointment) ||
      options[0],
  );

  const changeHandler = (option: SelectOptionType): void => {
    setSelectedOption(option);
    dispatchFilters({
      type: "updated_filter",
      key: "appointment",
      value: option.value,
    });
  };

  return (
    <SelectComponent
      floating
      title="نزدیک‌ترین نوبت"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={changeHandler}
    />
  );
}
