import { Button, Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { apiBaseUrl } from "./constants";
import { PatientListPage } from "./pages/parient-list";
import { PatientDetailsPage } from "./pages/patient-details";
import { getAllPatients } from "./services/patients";
import { NonSensitivePatient } from "./types";

export function App() {
  const [patients, setPatients] = useState<NonSensitivePatient[]>([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/ping`);

    getAllPatients().then(setPatients);
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Divider hidden />
          <Routes>
            <Route
              path="/"
              element={
                <PatientListPage
                  patients={patients}
                  setPatients={setPatients}
                />
              }
            />
            <Route path="/patients/:id" element={<PatientDetailsPage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}
