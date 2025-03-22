import { ReactElement } from "react";

import { FiltersType } from "@/types/filter.type";
import { doctors } from "@/db/doctors";

import Doctorcard from "@/components/doctor-card/doctorcard.component";

import MingcuteFilter3Fill from "@/icons/MingcuteFilter3Fill";

import styles from "./page.module.css";
import FiltersProvider from "./providers/filtersProviders";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <div className={styles.header}>
        <MingcuteFilter3Fill />

        <h3>فیلتر ها</h3>
      </div>
      <div className={styles.page}>
        <div className=""></div>
        <Doctorcard doctors={doctors} />
      </div>
    </FiltersProvider>
  );

  function generateDefaultFilters(searchParams: SearchParams): FiltersType {
    const { query, expertise, gender, degree } = searchParams;

    return {
      query: normalizeFilter(query),
      expertise: normalizeFilter(expertise),
      gender: normalizeFilter(gender),
      degree: normalizeFilter(degree),
    };
  }

  function normalizeFilter(
    value: string | string[] | undefined,
  ): string | undefined {
    if (Array.isArray(value)) {
      return value[0];
    }

    return value;
  }
}
