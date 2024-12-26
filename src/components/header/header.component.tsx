"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import DarkModeToggleComponent from "../dark-mode-toggle/dark-mode-toggle.component";

import clsx from "clsx";

import styles from "./header.module.css";

const links = [
  { href: "/", title: "خانه" },
  { href: "/search", title: "جستجو" },
];

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(pathname === link.href && styles.active)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.cta}>ورود | ثبت‌نام</button>
      <DarkModeToggleComponent />
    </header>
  );
}
