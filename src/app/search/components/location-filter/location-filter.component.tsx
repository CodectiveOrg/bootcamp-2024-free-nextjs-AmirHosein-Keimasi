"use client";

import { ReactElement, useContext } from "react";

import CardComponent from "@/components/card-component/card-component";

import { FiltersContext } from "../../providers/filter.providers";

import styles from "./location-filter.module.css";

const options: string[] = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مركزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

export default function LocationFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);

  const buttonClickHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "location", value });
  };

  return (
    <CardComponent>
      <div className={styles["title"]}>استان</div>
      <ul className={styles["location-filter"]}>
        {options.map((x) => (
          <li key={x}>
            <button type="button" onClick={() => buttonClickHandler(x)}>
              {x}
            </button>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
