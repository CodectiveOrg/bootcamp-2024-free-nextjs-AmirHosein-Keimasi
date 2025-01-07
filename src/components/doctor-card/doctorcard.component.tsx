"use client";
import React, { ReactElement, useContext } from "react";
import { DoctorModel, AppointmentType } from "@/models/doctor.model"; // Import AppointmentType enum
import AppointmentTypes from "./appointment-types/appointment-types.component";
import { FiltersContext } from "@/app/search/providers/filtersProviders";
import MingcuteTimeFill from "@/icons/MingcuteTimeFill";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import styles from "./doctorcard.module.css";

type Props = {
  doctors: DoctorModel[];
};

export default function DoctorCard({ doctors }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const filteredDoctors = doctors.filter((doctor) => {
    if (filters.gender && filters.gender !== "AllGender") {
      if (
        (filters.gender === "MaleGender" && doctor.gender !== "Male") ||
        (filters.gender === "FemaleGender" && doctor.gender !== "Female")
      ) {
        return false;
      }
    }

    if (filters.appointmentType && filters.appointmentType !== "All") {
      const appointmentType = filters.appointmentType as AppointmentType;
      if (!doctor.appointmentTypes.includes(appointmentType)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className={styles.cardContainer}>
      {filteredDoctors.map((doctor) => (
        <div key={doctor.id} className={styles.card}>
          <div className={styles.header}>
            <img
              src={`https://cdn.paziresh24.com${doctor.image}`}
              alt={doctor.name}
              className={styles.image}
            />
            <div className={styles.info}>
              <h3 className={styles.name}>{doctor.name}</h3>
              <p className={styles.specialty}>{doctor.brief}</p>
              <p className={styles.gender}>
                جنسیت: {doctor.gender === "زن" ? "خانم" : "آقا"}
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.ratingContainer}>
              <MingcuteStarFill className={styles.icon} />
              <span>
                {doctor.averageRating} ( {doctor.totalVotes} نظر )
              </span>
            </div>
            <div className={styles.appointmentSection}>
              <MingcuteTimeFill className={styles.icon} />
              <span> {doctor.firstAvailableAppointment}</span>
            </div>
          </div>

          <div className={styles.appointmentTypes}>
            <div className={styles.address}>
              <div className={styles.iconContainer}>
                <MingcuteLocationLine />
              </div>
              <div className={styles.addressText}>{doctor.address}</div>
            </div>

            <AppointmentTypes appointmentTypes={doctor.appointmentTypes} />
          </div>
          <div className={styles.badges}>
            {doctor.badges.map((badge, index) => (
              <span key={index} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
