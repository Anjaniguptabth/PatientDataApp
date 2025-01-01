import React from 'react';
import './LabResultsBox.css'; // Assuming the CSS file is saved with this name

const LabResultsBox = ({ labResults }) => {
  return (
    <div className="lab-results-box">
      <div className="lab-results-header">
        <div className="lab-results-column-header">
          <h3>Lab Results</h3>
        </div>
      </div>
      <div className="lab-results-row">
        <div className="lab-results-column">
          <ul>
            {labResults.map((result, index) => (
              <li key={index}><strong>{result}</strong></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabResultsBox;
