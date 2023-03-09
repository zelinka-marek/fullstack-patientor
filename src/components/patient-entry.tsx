import { Box, Typography } from "@mui/material";
import { Entry } from "../types";

export function PatientEntry(props: { entry: Entry }) {
  const { entry } = props;

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
          {entry.diagnosisCodes.map((diagnose, index) => (
            <li key={index}>{diagnose}</li>
          ))}
        </ul>
      )}
    </Box>
  );
}
