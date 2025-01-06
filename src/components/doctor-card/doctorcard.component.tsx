import React, { ReactElement } from "react";
import styles from "./doctorcard.module.css";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import MingcuteThumbUp2Fill from "@/icons/MingcuteThumbUp2Fill";
import { DoctorModel } from "@/models/doctor.model";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import AppointmentTypes from "./appointment-types/appointment-types.component";

export default function DoctorCard({
  doctors,
}: {
  doctors: DoctorModel[];
}): ReactElement {
  return (
    <div className={styles.cardContainer}>
      {doctors.map((doctor) => (
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
          <div className={styles.ratingContainer}>
            <MingcuteStarFill className={styles.icon} />
            <span>
              امتیاز: {doctor.averageRating} ( {doctor.totalVotes}
              نظر )
            </span>
          </div>
          <div className={styles.appointmentSection}>
            <MingcuteThumbUp2Fill className={styles.icon} />
            <span>وقت آزاد: {doctor.firstAvailableAppointment}</span>
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
