import { ReactElement } from "react";
import styles from "./doctorcard.module.css";
import { DoctorModel } from "@/models/doctor.model";

export default function Doctorcard({
  doctors,
}: {
  doctors: DoctorModel[];
}): ReactElement {
  return (
    <div className={styles.cardContainer}>
      {doctors.map((doctor) => (
        <div key={doctor.id} className={styles.card}>
          <img
            src={`https://cdn.paziresh24.com${doctor.image}`}
            alt={doctor.name}
            className={styles.image}
          />
          <h3 className={styles.name}>{doctor.name}</h3>
          <p className={styles.brief}>{doctor.brief}</p>
          <p className={styles.address}>{doctor.address}</p>
          <p className={styles.gender}>
            جنسیت: {doctor.gender === "زن" ? "خانم" : "آقا"}
          </p>
          <p className={styles.rating}>
            امتیاز: {doctor.averageRating} | آرا: {doctor.totalVotes}
          </p>
          <div className={styles.badges}>
            {doctor.badges.map((badge, index) => (
              <span key={index} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
          <p className={styles.appointment}>
            وقت آزاد: {doctor.firstAvailableAppointment}
          </p>
          <div className={styles.appointmentTypes}>
            <h4>انواع نوبت‌دهی:</h4>
            <ul>
              {doctor.appointmentTypes.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
