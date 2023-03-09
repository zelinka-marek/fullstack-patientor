import { Female, Male, Transgender } from "@mui/icons-material";
import { Alert, Box, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPatient } from "../services/patients";
import { Gender, type Patient } from "../types";

export function PatientDetailsPage() {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPatient(id)
      .then((patient) => {
        setPatient(patient);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.data && typeof error.response.data === "string") {
            console.error(error.response.data);
            setError(error.response.data);
          } else {
            setError("Unexpected fetching error occured");
          }
        } else {
          console.error("Unexpected error occured", error);
          setError("Unexpected error occured");
        }
      });
  }, [id]);

  if (error) {
    return (
      <Box marginTop={4}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!patient) {
    return (
      <Stack marginTop={4} spacing={3}>
        <Skeleton variant="rounded" width={280} height={40} />
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={180} height={20} />
          <Skeleton variant="rounded" width={240} height={20} />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack marginTop={4} spacing={3}>
      <Typography variant="h5" fontWeight={700}>
        {patient.name}{" "}
        {patient.gender === Gender.Male ? (
          <Male />
        ) : patient.gender === Gender.Female ? (
          <Female />
        ) : (
          <Transgender />
        )}
      </Typography>
      <Box>
        <Typography>ssn: {patient.ssn}</Typography>
        <Typography>occupation: {patient.occupation}</Typography>
      </Box>
    </Stack>
  );
}