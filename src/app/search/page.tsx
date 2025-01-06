import { ReactElement } from "react";

import { doctors } from "@/db/doctors";
import Doctorcard from "@/components/doctor-card/doctorcard.component";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <Doctorcard doctors={doctors} />
    </div>
  );
}
