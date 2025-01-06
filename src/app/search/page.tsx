import { ReactElement } from "react";

import { doctors } from "@/db/doctors";
import FilterComponent from "./components/filter/filter.component";
import Doctorcard from "@/components/doctor-card/doctorcard.component";

import MingcuteFilter3Fill from "@/icons/MingcuteFilter3Fill";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className="">
      <div className={styles.header}>
        <MingcuteFilter3Fill />
        <h3>فیلتر ها</h3>
      </div>
      <div className={styles.page}>
        <FilterComponent
          title="جنسیت پزشک"
          Options={[
            { value: "Man", label: "اقا" },
            { value: "Woman", label: "خانم" },
            { value: "ManAndWoman", label: " اقا و خانم" },
          ]}
        />

        <Doctorcard doctors={doctors} />
      </div>
    </div>
  );
}
