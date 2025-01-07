export enum AppointmentType {
  OfficeAppointment = "نوبت‌دهی مطب",
  PhoneConsultation = "مشاوره‌ تلفنی",
  TextConsultation = "مشاوره‌ متنی",
}

export interface DoctorModel {
  id: string;
  name: string;
  image: string;
  gender: string;
  averageRating: number;
  totalVotes: number;
  firstAvailableAppointment: string;
  address: string;
  appointmentTypes: AppointmentType[];
  badges: string[];
  brief: string;
}
