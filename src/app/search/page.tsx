import { ReactElement } from "react";

import { doctors } from "@/db/doctors";

import Doctorcard from "@/components/doctor-card/doctorcard.component";

import FiltersProvider from "./providers/filtersProviders";
import GenderComponent from "./components/Gender/gender.component";
import FilterAppointmentType from "./components/Appointment/FilterAppointmentType.component";

import MingcuteFilter3Fill from "@/icons/MingcuteFilter3Fill";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <FiltersProvider>

        <div className={styles.header}>
          <MingcuteFilter3Fill />
          <h3>فیلتر ها</h3>
        </div>
        <div className={styles.page}>
       <div className="">   <GenderComponent
            title="جنسیت پزشک"
            Options={[
              { key: "MaleGender", label: "اقا" },
              { key: "FemaleGender", label: "خانم" },
              { key: "AllGender", label: " اقا و خانم" },
            ]}
          />
          <FilterAppointmentType
            title="نوع نوبت‌دهی"
            Options={[
              { key: "officeAppointment", label: "نوبت‌دهی مطب" },
              { key: "TelephoneConsultation", label: "مشاوره تلفنی" },
              { key: "textConsultation", label: "مشاوره متنی" },
              { key: "All", label: "همه" },
            ]}
          /></div>
        <Doctorcard doctors={doctors} />

        </div>

    </FiltersProvider>
  );
}
