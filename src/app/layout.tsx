import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["latin", "arabic"], display: "swap" });

export const metadata: Metadata = {
  title: "رزور نوبت",
  description: "پلتفرمی یکپارچه برای یافتن پزشک و رزرو آنلاین نوبت ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>{" "}
    </html>
  );
}
