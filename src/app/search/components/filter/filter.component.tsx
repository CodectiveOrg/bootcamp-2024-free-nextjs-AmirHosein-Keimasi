import React, { ReactElement } from "react";

import CardComponent from "@/components/card-component/card-component.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import styles from "./filter.module.css";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  Options: Option[];
};

export default function FilterComponent({
  title,
  Options,
}: Props): ReactElement {
  return (
    <CardComponent>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        {Options.map((Option) => (
          <FilterButtonComponent key={Option.value}>
            {Option.label}
          </FilterButtonComponent>
        ))}
      </div>
    </CardComponent>
  );
}
