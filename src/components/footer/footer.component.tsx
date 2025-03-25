import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import idkLogo from "@/assets/logo/idk.svg";
import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";

import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>کارِ مون</div>
        <p className={styles.description}>
          بهترین تجربه اجاره خودرو با شرایط آسان و قیمت‌های مناسب در سراسر ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="مجوز کسب و کار" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="گواهی کیفیت خدمات" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="نماد اعتماد الکترونیکی" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://telegram.im/@rentcar" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rentcar" target="_blank">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com/rentcar" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق این وب‌سایت و خدمات آن متعلق به <span>کارِ مون</span>{" "}
        می‌باشد.
      </p>
    </footer>
  );
}
