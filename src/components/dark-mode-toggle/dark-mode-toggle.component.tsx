"use client";
import { ReactElement } from "react";
import { useState, useEffect } from "react";
import styles from "./dark-mode-toggle.module.css";
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";

export default function DarkModeToggleComponent(): ReactElement {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem("dark-mode");
    if (storedMode !== null) {
      setDarkMode(storedMode === "true");
    }
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("dark-mode", newMode.toString());
      return newMode;
    });
  };

  return (
    <button className={styles.button} onClick={toggleDarkMode}>
      <div
        className={`${styles.toggle} ${darkMode ? styles.dark : styles.light}`}
      >
        {darkMode ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
      </div>
    </button>
  );
}
