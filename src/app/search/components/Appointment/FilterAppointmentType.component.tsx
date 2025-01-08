"use client";
import React, { ReactElement, useContext } from "react";
import clsx from "clsx";

import CardComponent from "@/components/card-component/card-component.component";
import DropdownButtonComponent from "@/components/dropdown-button/dropdown-button.component";

import { FiltersContext } from "../../providers/filtersProviders";
import { AppointmentType } from "@/models/doctor.model";

import styles from "./FilterAppointmentType.module.css";

type Option = {
  key: AppointmentType | "All";
  label: string;
};

type Props = {
  title: string;
  Options: Option[];
};

export default function FilterAppointmentType({
  title,
  Options,
}: Props): ReactElement {
  const { changeFilter, filters } = useContext(FiltersContext);

  return (
    <CardComponent>
      <div className={styles.title}>{title}</div>
      <DropdownButtonComponent
        options={Options}
        onSelect={(key) => changeFilter("appointmentType", key)}
        selectedKey={filters.appointmentType ?? "All"}
        defaultLabel="انتخاب نوع نوبت‌دهی"
        className={clsx(styles.dropdown)}
      />
    </CardComponent>
  );
}
