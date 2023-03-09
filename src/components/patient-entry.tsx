import { Box, Typography } from "@mui/material";
import { Diagnose, Entry } from "../types";

export function PatientEntry(props: { entry: Entry; diagnosis: Diagnose[] }) {
  const { entry, diagnosis } = props;

  return (
    <Box>
      <Typography>
        {entry.date}{" "}
        <Typography component="em" variant="subtitle2" fontStyle="italic">
          {entry.description}
        </Typography>
      </Typography>
      {entry.diagnosisCodes && (
        <ul>
          {entry.diagnosisCodes.map((diagnoseCode, index) => {
            const diagnose = diagnosis.find(
              (diagnose) => diagnose.code === diagnoseCode
            );

            return (
              <li key={index}>
                {diagnoseCode} {diagnose?.name}
              </li>
            );
          })}
        </ul>
      )}
    </Box>
  );
}
