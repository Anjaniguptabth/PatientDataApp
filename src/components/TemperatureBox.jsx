import React from 'react';

const TemperatureBox = ({ temperature }) => {
  return (
    <div className="temperature-box">
      <h3>Temperature</h3>
      <div className="temperature-details">
        <p><strong>Temperature:</strong> {temperature.value} °F ({temperature.levels})</p>
      </div>
    </div>
  );
};

export default TemperatureBox;
