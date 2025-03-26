"use client";

import { ReactElement, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CarsContext } from "../../providers/cars.provider";
import MingcuteUser2Fill from "@/icons/MingcuteUser2Fill";
import MingcuteSuitcaseFill from "@/icons/MingcuteSuitcaseFill";
import MingcuteCarWindowFill from "@/icons/MingcuteCarWindowFill";
import MaterialSymbolsAutoTransmission from "@/icons/MaterialSymbolsAutoTransmission";
import MingcuteSettings4Line from "@/icons/MingcuteSettings4Line";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteCheckboxFill from "@/icons/MingcuteCheckboxFill";
import styles from "./results.module.css";

interface CarInfoProps {
  doors: number;
  passengers: number;
  luggage: number;
  transmission: string;
}

const CarInfo = ({
  doors,
  passengers,
  luggage,
  transmission,
}: CarInfoProps) => (
  <div className={styles.info}>
    <span>
      <MingcuteCarWindowFill className={styles.icon} /> {doors}
    </span>
    <span>
      <MingcuteUser2Fill className={styles.icon} /> {passengers}
    </span>
    <span>
      <MingcuteSuitcaseFill className={styles.icon} /> {luggage}
    </span>
    <span>
      <MaterialSymbolsAutoTransmission className={styles.icon} /> {transmission}
    </span>
  </div>
);

interface BadgeProps {
  label: string | boolean | number;
}

const Badge = ({ label }: BadgeProps) => {
  const displayValue =
    typeof label === "boolean" ? (label ? "بله" : "خیر") : label.toString();

  return <div className={styles.badge}>{displayValue}</div>;
};

export default function ResultsComponent(): ReactElement {
  const { filteredCars } = useContext(CarsContext);

  const toPersianNumbers = (num: number | string): string => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const numStr = num.toString();

    if (!/\d/.test(numStr)) {
      return numStr;
    }

    return numStr
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .replace(/\d/g, (d) => persianDigits[parseInt(d, 10)]);
  };

  if (!filteredCars?.length) {
    return <div className={styles.noResults}>نتیجه‌ای یافت نشد</div>;
  }

  return (
    <ul className={styles.results}>
      {filteredCars.map((car) => (
        <li key={car.id} className={styles.card}>
          <div className={styles.locationBadge}>
            <MingcuteLocationLine className={styles.LocIcon} />
            <Badge label={car.location} />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={`https://cafeerent.com/storage/www/cars/single/${car.img}`}
              alt={`${car.name} - ${car.model}`}
              className={styles.image}
              width={270}
              height={160}
              priority={false}
            />
          </div>

          <h3 className={styles.title}>{car.name}</h3>

          <div className={styles.cardModel}>
            <p>مدل</p>
            <p className={styles.model}>{car.model}</p>
          </div>

          <CarInfo
            doors={car.capacity.door}
            passengers={car.capacity.passengers}
            luggage={car.capacity.luggage}
            transmission={car.features.transmission}
          />

          <div className={styles.badges}>
            <Badge label={car.engine.type} />
            <Badge label={car.with_driver} />
            <Badge label={car.features.option_type} />
          </div>

          <div className={styles.rental}>
            <div className={styles.minimum_rental}>
              <span>حداقل اجاره: </span>
              <span className={styles.span2}>
                {toPersianNumbers(car.rental.minimum_rental)} روز
              </span>
            </div>
            <div className={styles.days_3_to_14}>
              <span>۳ تا ۱۴ روز:</span>
              <span>
                <span className={styles.redPrice}>
                  {toPersianNumbers(car.rental.days_3_to_14)}
                </span>{" "}
                تومان
              </span>
            </div>
          </div>

          <Link className={styles.detailsLink} href={`/cars/${car.id}`}>
            بیشتر... <MingcuteSettings4Line />
          </Link>

          <Link className={styles.receiveLink} href={`/reserve/${car.id}`}>
            همین الان رزرو کنید <MingcuteCheckboxFill />
          </Link>
        </li>
      ))}
    </ul>
  );
}
