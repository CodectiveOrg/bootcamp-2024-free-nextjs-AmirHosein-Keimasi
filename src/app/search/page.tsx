import { ReactElement } from "react";


import GlobalSearchBoxComponent from "@/components/globall-search-box/globall-search-box.component";


import { FiltersType } from "@/types/filter.type";
import { doctors } from "@/db/doctors";

// import AppointmentFilterComponent from "@/app/search/components/appointment-filter/appointment-filter.component";
// import DegreeFilterComponent from "@/app/search/components/degree-filter/degree-filter.component";
// import ExpertiseFilterComponent from "@/app/search/components/expertise-filter/expertise-filter.component";
// import FiltersSummaryComponent from "@/app/search/components/filters-summary/filters-summary.component";
// import GenderFilterComponent from "@/app/search/components/gender-filter/gender-filter.component";
// import ResultsComponent from "@/app/search/components/results/results.component";
// import SortComponent from "@/app/search/components/sort/sort.component";
// import StatsComponent from "@/app/search/components/stats/stats.component";

import FiltersProvider from "./providers/filtersProviders";
import DoctorsProvider from "./providers/doctors.provider";

import styles from "./page.module.css";
import ResultsComponent from "./components/results/results.component";



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
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.filters}>
            {/* <FiltersSummaryComponent />
            <ExpertiseFilterComponent />
            <GenderFilterComponent />
            <DegreeFilterComponent /> */}
          </div>
          <div className={styles.toolbar}>
            {/* <SortComponent />
            <AppointmentFilterComponent /> */}
            <div className={styles.stats}>
              {/* <StatsComponent /> */}
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