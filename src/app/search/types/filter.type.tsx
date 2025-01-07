export type FiltersType = {
  gender?: "MaleGender" | "FemaleGender" | "AllGender";
  appointmentType?:
    | "officeAppointment"
    | "TelephoneConsultation"
    | "textConsultation"
    | "All";
};
