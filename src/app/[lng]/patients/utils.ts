import { defaultUserData } from "../users_and_groups/utils";
import { Patient, PatientStatus } from "./types";

export const defaultPatientsData: Patient[] = [
  {
    first_name: "Juan",
    last_name: "Dela Cruz",
    uid: "XYZ3214",
    status: PatientStatus.NEXT_IN_LINE_FOR_CONSULTATION,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
  },
  {
    first_name: "Theodora",
    last_name: "Martinez",
    uid: "ABC4321",
    status: PatientStatus.NEXT_IN_LINE_FOR_CONSULTATION,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
  },
  {
    first_name: "Augustina",
    last_name: "Ignacio",
    uid: "DEF5678",
    status: PatientStatus.IN_TRIAGE,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
    triage_with: defaultUserData[0],
  },
  {
    first_name: "Tonio",
    last_name: "Alcantara",
    uid: "UVX6789",
    status: PatientStatus.NEXT_IN_LINE_FOR_TRIAGE,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
  },
  {
    first_name: "Maribeth",
    last_name: "Nestor",
    uid: "BCD4567",
    status: PatientStatus.WAITING_IN_LINE,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
  },
  {
    first_name: "Augustina",
    last_name: "Ignacio",
    uid: "DEF5678",
    status: PatientStatus.WAITING_IN_LINE,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
  },
  {
    first_name: "Maribeth",
    last_name: "Nestor",
    uid: "BCD4567",
    status: PatientStatus.WAITING_IN_LINE,
    img_url: "https://i.mydramalist.com/v7AbZ_5c.jpg",
  },
];
