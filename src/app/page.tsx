import { ReactElement } from "react";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";
import GlobalSearchBoxComponent from "@/components/globall-search-box/globall-search-box.component";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        وقت‌ دکتر{" "}
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
