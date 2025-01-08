"use client";
import React, { ReactElement, useState } from "react";
import clsx from "clsx";

import { MingcuteArrowDownFill } from "@/icons/MingcuteArrowDownFill";

import styles from "./dropdown-button.module.css";

type Option = {
  key: string;
  label: string;
};
type DropdownProps = {
  options: Option[];
  selectedKey: string;
  onSelect: (key: string) => void;
  defaultLabel: string;
  className?: string;
};
export default function DropdownButtonComponent({
  options,
  selectedKey,
  onSelect,
  defaultLabel,
  className,
}: DropdownProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={clsx(styles.dropdownContainer, className)}>
      <button
        className={clsx(
          styles.dropdownButton,
          selectedKey && styles.selected,
          isOpen && styles.active,
        )}
        onClick={toggleDropdown}
      >
        <span className={styles.buttonLabel}>
          {options.find((option) => option.key === selectedKey)?.label ||
            defaultLabel}
        </span>
        <MingcuteArrowDownFill
          className={clsx(styles.arrowIcon, isOpen && styles.arrowOpen)}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdownList}>
          {options.map((option) => (
            <button
              key={option.key}
              className={styles.dropdownItem}
              onClick={() => {
                onSelect(option.key);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
