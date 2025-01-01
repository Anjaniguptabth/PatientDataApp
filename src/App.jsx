import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import PatientInfo from './components/PatientInfo';
import BloodPressureChart from './components/BloodPressureChart';
import HeartRateBox from './components/HeartRateBox';
import RespiratoryRateBox from './components/RespiratoryRateBox';
import TemperatureBox from './components/TemperatureBox';
import DiagnosticsBox from './components/DiagnosticsBox';
import LabResultsBox from './components/LabResultsBox';
import { fetchPatientData } from './services/api';
import './App.css';

const App = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPatientData();
        setPatient(data);
      } catch (error) {
        console.error('Failed to fetch patient data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!patient) return <div>No patient data found.</div>;

  return (
    <div className="app">
      <Navbar />
      <main>
        <PatientInfo patient={patient} />
        <BloodPressureChart diagnosisHistory={patient.diagnosis_history || []} />

         
         <BloodPressureChart bloodPressureData={patient.diagnosis_history[0].blood_pressure} /><LabResultsBox labResults={patient.lab_results} />


        
         <DiagnosticsBox diagnostics={patient.diagnostic_list} />

         <RespiratoryRateBox respiratoryRate={patient.diagnosis_history[0].respiratory_rate} />
         <HeartRateBox heartRate={patient.diagnosis_history[0].heart_rate} />
         <TemperatureBox temperature={patient.diagnosis_history[0].temperature} />


      </main>
    </div>
  );
};

export default App;
