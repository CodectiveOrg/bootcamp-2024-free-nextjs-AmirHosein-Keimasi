import { ReactElement } from "react";

import { doctors } from "@/db/doctors";

import GenderComponent from "./components/Gender/gender.component";
import Doctorcard from "@/components/doctor-card/doctorcard.component";
import FiltersProvider from "./providers/filtersProviders";

import MingcuteFilter3Fill from "@/icons/MingcuteFilter3Fill";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <FiltersProvider>
      <div className="">
        <div className={styles.header}>
          <MingcuteFilter3Fill />
          <h3>فیلتر ها</h3>
        </div>
        <div className={styles.page}>
          <GenderComponent
            title="جنسیت پزشک"
            Options={[
              { key: "MaleGender", label: "اقا" },
              { key: "FemaleGender", label: "خانم" },
              { key: "AllGender", label: " اقا و خانم" },
            ]}
          />

          <Doctorcard doctors={doctors} />
        </div>
      </div>
    </FiltersProvider>
  );
}
