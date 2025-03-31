import { ReactElement } from "react";
import Image from "next/image";
import notFoundImage from "@/assets/illustrations/404.png";
import styles from "./not-found.module.css";
import GlobalSearchBoxComponent from "@/components/globall-search-box/globall-search-box.component";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles["writings"]}>
        <h1>صفحه‌ی مورد نظر پیدا نشد!</h1>
        <p>
          با عرض پوزش، صفحه مورد نظر شما در <span>کا‌‌‌‌رِمون</span> پیدا نشد،
          لطفاً ماشین یا ویژگی مورد نظر خود را جستجو کنید.
        </p>
      </div>

      <div className={styles["visuals"]}>
        <Image src={notFoundImage} alt="Not Found" width={300} />
      </div>

      <div className={styles["search"]}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
