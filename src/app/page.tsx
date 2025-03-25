import { ReactElement } from "react";

import CarmonLogo from "@/logo/CarmonLogo";

import GlobalSearchBoxComponent from "@/components/globall-search-box/globall-search-box.component";
import StatsComponents from "@/components/stats/stats.component";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <CarmonLogo />
        کارِ مون{" "}
      </h1>
      <GlobalSearchBoxComponent />
      <StatsComponents />
    </div>
  );
}
