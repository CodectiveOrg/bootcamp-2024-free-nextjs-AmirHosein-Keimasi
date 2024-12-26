import { ReactElement } from "react";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import "./globals.css";
import "../styles/typography.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "وقت‌ دکتر",
  description: "پلتفرمی یکپارچه برای یافتن پزشک و رزرو آنلاین نوبت ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          پلتفرمی یکپارچه برای یافتن پزشک و رزرو آنلاین نوبت{" "}
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
