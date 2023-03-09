import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Diagnose } from "../types";

export async function getAllDiagnosis() {
  const { data } = await axios.get<Diagnose[]>(`${apiBaseUrl}/diagnosis`);

  return data;
}
