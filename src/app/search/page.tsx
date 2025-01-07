import { ReactElement } from "react";

import { doctors } from "@/db/doctors";

import Doctorcard from "@/components/doctor-card/doctorcard.component";

import FiltersProvider from "./providers/filtersProviders";
import GenderComponent from "./components/Gender/gender.component";

import FilterDateComponent from "./components/FilterDate/FilterDate.component";
import FilterAppointmentType from "./components/Appointment/FilterAppointmentType.component";
import { AppointmentType } from "@/models/doctor.model";

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
        <div className="">
          {" "}
          <GenderComponent
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
              { key: AppointmentType.OfficeAppointment, label: "نوبت‌دهی مطب" },
              { key: AppointmentType.PhoneConsultation, label: "مشاوره تلفنی" },
              { key: AppointmentType.TextConsultation, label: "مشاوره متنی" },
              { key: "All", label: "همه" },
            ]}
          />
          <FilterDateComponent
            title="اولین نوبت موجود"
            Options={[
              { key: "today", label: "امروز" },
              { key: "tomorrow", label: "فردا" },
              { key: "next-7-days", label: "7 روز آینده" },
              { key: "All", label: "همه" },
            ]}
          />
        </div>
        <Doctorcard doctors={doctors} />
      </div>
    </FiltersProvider>
  );
}
