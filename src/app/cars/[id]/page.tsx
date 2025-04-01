import React, { ReactElement } from "react";
import { notFound } from "next/navigation";

import { cars } from "@/db/cars";

import styles from "./page.module.css";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const car = cars.find((x) => x.id === params.id);
  if (!car) {
    return notFound();
  }
  return (
    <>
      <div className={styles.page}>
        <div className={styles.Price}> </div>
        <div className={styles.info}>
          <div className={styles.imageWrapper}>
            <Image
              src={`https://cafeerent.com/storage/www/cars/single/${car.img}`}
              alt={`${car.name} - ${car.model}`}
              className={styles.image}
              width={500}
              height={350}
              priority={false}
            />
            <div className={styles.name}>{car.name}</div>
            <div className={styles.model}>{car.model}</div>
            <div className={styles.model}>{car.features.chassis_type}</div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
