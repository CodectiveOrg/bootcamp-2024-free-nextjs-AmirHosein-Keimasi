import { AppointmentType } from "@/models/doctor.model";

export type FiltersType = {
  gender?: "MaleGender" | "FemaleGender" | "AllGender";
  appointmentType?: AppointmentType | "All";
  dateFilter: "today" | "tomorrow" | "next-7-days" | "All";
};
