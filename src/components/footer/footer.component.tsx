import { ReactElement } from "react";

import MingcuteInstagramFill from "@/icons/MingcuteInstagramFill";
import MingcuteSocialXLine from "@/icons/MingcuteSocialXLine";
import MingcuteGithubFill from "@/icons/MingcuteGithubFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteMailFill from "@/icons/MingcuteMailFill";
import MingcutePhoneFill from "@/icons/MingcutePhoneFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialContainer}>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <MingcuteGithubFill className={styles.icon} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <MingcuteSocialXLine className={styles.icon} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <MingcuteLinkedinFill className={styles.icon} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <MingcuteInstagramFill className={styles.icon} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <MingcuteTelegramFill className={styles.icon} />
          </a>
        </div>
        <div className={styles.socialText}>
          <span>ما را در شبکه‌های اجتماعی دنبال کنید</span>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h6 className={styles.title}>آدرس ما</h6>
            <p className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MingcuteLocationLine className={styles.icon} />
              </span>
              تهران، خیابان آزادی، بلوار کشاورز، پلاک ۱۲۳
            </p>
          </div>

          <div className={styles.gridItem}>
            <h6 className={styles.title}>تماس با ما</h6>

            <p className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MingcuteMailFill className={styles.icon} />
              </span>
              info@example.com
            </p>
            <p className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MingcutePhoneFill className={styles.icon} />
              </span>
              ۰۲۱-۱۲۳۴۵۶۷۸
            </p>
          </div>
          <div className={styles.gridItem}>
            <p className={styles.target}>
              پلتفرمی یکپارچه برای اجاره خودرو و رزرو آنلاین ماشین در سراسر
              ایران
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
