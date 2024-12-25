import { ReactElement } from "react";

import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteSearchLine from "@/icons/MingcuteSearchLine";

import styles from "./globall-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
