import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Patient, PatientFormValues } from "../types";

export async function getAllPatients() {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
}

export async function createPatient(object: PatientFormValues) {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
}
