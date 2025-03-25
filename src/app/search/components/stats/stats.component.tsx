"use client";

import { ReactElement, useContext } from "react";

import { CarsContext } from "../../providers/cars.provider";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactElement {
  const { filteredCars } = useContext(CarsContext);

  return (
    <div className={styles.stats}>
      {filteredCars.length.toLocaleString()} نتیجه
    </div>
  );
}
