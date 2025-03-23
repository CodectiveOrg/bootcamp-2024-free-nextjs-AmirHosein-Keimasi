import { DoctorModel } from "@/models/doctor.model";

export function sortDoctors(
  doctors: DoctorModel[],
  sortType: string,
): DoctorModel[] {
  switch (sortType) {
    case "rating":
      return [...doctors].sort((a, b) => b.averageRating - a.averageRating);
    case "popularity":
      return [...doctors].sort((a, b) => b.totalVotes - a.totalVotes);
    case "appointment": {
      const appointmentPriority: Record<string, number> = {
        "امروز": 1,
        "تا فردا": 2,
        "تا سه روز": 3,
        "تا پنج روز": 4,
        "تا هفت روز": 5,
      };

      return [...doctors].sort((a, b) => {
        const aPriority = appointmentPriority[a.appointment] || 999;
        const bPriority = appointmentPriority[b.appointment] || 999;
        return aPriority - bPriority;
      });
    }
    case "name":
      return [...doctors].sort((a, b) => a.name.localeCompare(b.name, "fa"));
    default:
      return doctors;
  }
}
