import {
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { type PatientFormValues } from "../types";
import { AddPatientForm } from "./add-patient-form";

export function AddPatientModal(props: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: PatientFormValues) => void;
  error?: string;
}) {
  const { open, onClose, onSubmit, error } = props;

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>Add a new patient</DialogTitle>
      <Divider />
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        <AddPatientForm onSubmit={onSubmit} onCancel={onClose} />
      </DialogContent>
    </Dialog>
  );
}
