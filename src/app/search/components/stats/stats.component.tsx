"use client";

import { ReactElement, useContext } from "react";

import { CarsContext } from "../../providers/cars.provider";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactElement {
  const { filteredCars } = useContext(CarsContext);
  const persianNumber = new Intl.NumberFormat("fa-IR").format(
    filteredCars.length,
  );
  return (
    <div className={styles.stats}>
      {persianNumber}
      <span>نتیجه</span>
    </div>
  );
}
