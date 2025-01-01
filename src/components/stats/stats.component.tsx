import React, { ReactElement } from "react";
import styles from "./stats.module.css";

export default function StatsComponents(): ReactElement {
  return (
    <ul className={styles.stats}>
      <li>
        <div className={styles.value}>+43,000</div>
        <div className={styles.label}>پزشک</div>
      </li>
      <div className={styles.divider}></div>
      <li>
        <div className={styles.value}>+12,000,000</div>
        <div className={styles.label}>نوبت موفق</div>
      </li>{" "}
      <div className={styles.divider}></div>
      <li>
        <div className={styles.value}>+1,245</div>
        <div className={styles.label}>شهر و روستا</div>
      </li>{" "}
    </ul>
  );
}
