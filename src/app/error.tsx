"use client";

import { ReactElement } from "react";

import Image from "next/image";

import errorImage from "@/assets/illustrations/errorImage.png";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles["error"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>مشکل پیش آمده!</div>
        <h1>یک خطای غیرمنتظره رخ داده است.</h1>
        <p>
          با عرض پوزش، لطفاً با تیم پشتیبانی سایت <span>کا‌‌‌‌رِمون</span> تماس
          بگیرید.
        </p>
        <div className={styles.actions}>
          <button onClick={reset}>تلاش مجدد</button>
        </div>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt="" width={250} />
      </div>

      <div className={styles.trace}>
        <details>
          <summary>لاگ خطا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
