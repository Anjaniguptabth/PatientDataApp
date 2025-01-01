import React, { useState } from 'react';
import './PatientInfo.css';

const PatientInfo = ({ patient }) => {
  const [showAllInfo, setShowAllInfo] = useState(false);

  const handleToggle = () => {
    setShowAllInfo(prevState => !prevState);
  };

  return (
    <div className="patient-info">
      <div className="profile-header">
        <img src={patient.profile_picture} alt={`${patient.name}'s Profile`} className="profile-picture" />
        <p><strong> {patient.name}</strong></p>
      </div>
      <div>
      <p><strong>Age:</strong> {patient.age || 'N/A'}</p>
        <p><strong>Gender:</strong> {patient.gender || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> {patient.date_of_birth || 'N/A'}</p>
      </div>
      {showAllInfo && (
        <div className="additional-info">
          <p><strong>Phone Number:</strong> {patient.phone_number || 'N/A'}</p>
          <p><strong>Emergency Contact:</strong> {patient.emergency_contact || 'N/A'}</p>
          <p><strong>Insurance Type:</strong> {patient.insurance_type || 'N/A'}</p>
        </div>
      )}
      <button onClick={handleToggle} className="show-more-btn">
        {showAllInfo ? 'Hide Information' : 'Show All Information'}
      </button>
    </div>
  );
};

export default PatientInfo;
