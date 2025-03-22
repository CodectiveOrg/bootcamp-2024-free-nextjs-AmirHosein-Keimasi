import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/globall-search-box/globall-search-box.component";

import { FiltersType } from "@/types/filter.type";
import { doctors } from "@/db/doctors";

import ResultsComponent from "./components/results/results.component";
import FiltersSummaryComponent from "./components/filters-summary/filters-summary.component";
import DegreeFilterComponent from "./components/degree-filter/degree-filter.component";
import AppointmentFilterComponent from "./components/appointment-filter/appointment-filter.component";
import ExpertiseFilterComponent from "./components/expertise-filter/expertise-filter.component";
import GenderFilterComponent from "./components/gender-filter/gender-filter.component";
import StatsComponent from "./components/stats/stats.component";
import SortComponent from "./components/sort/sort.component";

import FiltersProvider from "./providers/filtersProviders";
import DoctorsProvider from "./providers/doctors.provider";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: SearchParams;
};

export default  function Page({
  searchParams,
}: Props): ReactElement {
  const defaultFilters = generateDefaultFilters( searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.filters}>
            <FiltersSummaryComponent />
            <ExpertiseFilterComponent />
            <GenderFilterComponent />
            <DegreeFilterComponent />
          </div>
          <div className={styles.toolbar}>
            <SortComponent />
            <AppointmentFilterComponent />
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <div className={styles.results}>
            <ResultsComponent />
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}

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
