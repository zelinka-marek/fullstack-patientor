import axios from "axios";
import { apiBaseUrl } from "../constants";
import { NonSensitivePatient, Patient, PatientFormValues } from "../types";

export async function getAllPatients() {
  const { data } = await axios.get<NonSensitivePatient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
}

export async function getPatient(id: string | undefined) {
  const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);

  return data;
}

export async function createPatient(object: PatientFormValues) {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
}
