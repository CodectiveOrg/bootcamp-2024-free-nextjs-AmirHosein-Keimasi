import React from "react";
import { MingcuteHospitalFill } from "@/icons/MingcuteHospitalFill";
import { MingcutePhoneFill } from "@/icons/MingcutePhoneFill";
import { MingcuteChat3Fill } from "@/icons/MingcuteChat3Fill";

import styles from "./appointment-types.module.css";

interface AppointmentTypesProps {
  appointmentTypes: string[];
}

export default function AppointmentTypes({
  appointmentTypes,
}: AppointmentTypesProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {appointmentTypes.includes("نوبت‌دهی مطب") && (
          <li className={styles.item}>
            <MingcuteHospitalFill className={styles.icon} />
            نوبت‌دهی مطب
          </li>
        )}
        {appointmentTypes.includes("مشاوره‌ تلفنی") && (
          <li className={styles.item}>
            <MingcutePhoneFill className={styles.icon} />
            مشاوره تلفنی
          </li>
        )}
        {appointmentTypes.includes("مشاوره‌ متنی") && (
          <li className={styles.item}>
            <MingcuteChat3Fill className={styles.icon} />
            مشاوره متنی
          </li>
        )}
      </ul>
    </div>
  );
}
