import Accordion from "@/components/Accordion/Accordion.component";
import { faqData, faqGuest } from "./data/faqData";
import styles from "./page.module.css";

export default function page() {
  return (
    <main className="container">
      <h2 className={styles.h2}>سوالات متداول</h2>
      <Accordion items={faqData} />
      <h2 className={styles.container}>مهمان (اجاره‌گیرنده)</h2>
      <Accordion items={faqGuest} />
    </main>
  );
}
