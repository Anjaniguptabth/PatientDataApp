import React from 'react';
import './DiagnosticsBox.css'; // Add a CSS import for custom styling

const DiagnosticsBox = ({ diagnostics }) => {
  return (
    <div className="diagnostics-box">
      <h3>Diagnostics</h3>
      <div className="diagnostics-header">
        <div className="column-header">Problem/Diagnosis</div>
        <div className="column-header">Description</div>
        <div className="column-header">Status</div>
      </div>
      {diagnostics.map((diagnostic, index) => (
        <div key={index} className="diagnostics-row">
          <div className="diagnostics-column">{diagnostic.name}</div>
          <div className="diagnostics-column">{diagnostic.description}</div>
          <div className="diagnostics-column">{diagnostic.status}</div>
        </div>
      ))}
    </div>
  );
};

export default DiagnosticsBox;
