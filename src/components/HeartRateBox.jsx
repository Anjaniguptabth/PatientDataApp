import React from 'react';

const HeartRateBox = ({ heartRate }) => {
  return (
    <div className="heart-rate-box">
      <h3>Heart Rate</h3>
      <div className="heart-rate-details">
        <p><strong>Rate:</strong> {heartRate.value} bpm ({heartRate.levels})</p>
      </div>
    </div>
  );
};

export default HeartRateBox;
