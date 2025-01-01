import React from 'react';

const RespiratoryRateBox = ({ respiratoryRate }) => {
  return (
    <div className="respiratory-rate-box">
      <h3>Respiratory Rate</h3>
      <div className="respiratory-rate-details">
        <p><strong>Rate:</strong> {respiratoryRate.value} breaths per minute ({respiratoryRate.levels})</p>
      </div>
    </div>
  );
};

export default RespiratoryRateBox;
