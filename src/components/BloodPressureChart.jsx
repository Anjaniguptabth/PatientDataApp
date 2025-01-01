import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register the necessary components in Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const BloodPressureChart = ({ diagnosisHistory }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  // Function to check if diagnosisHistory has valid blood pressure data
  const hasValidData = (history) => {
    return history && history.length > 0 && history[0].blood_pressure;
  };

  useEffect(() => {
    if (hasValidData(diagnosisHistory)) {
      const months = diagnosisHistory.map((entry) => entry.month);
      const systolicValues = diagnosisHistory.map((entry) => entry.blood_pressure.systolic.value);
      const diastolicValues = diagnosisHistory.map((entry) => entry.blood_pressure.diastolic.value);

      setChartData({
        labels: months,
        datasets: [
          {
            label: 'Systolic Blood Pressure',
            data: systolicValues,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,  // Enabling fill
          },
          {
            label: 'Diastolic Blood Pressure',
            data: diastolicValues,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,  // Enabling fill
          },
        ],
      });
    }
  }, [diagnosisHistory]);

  useEffect(() => {
    // Force chart update if the data changes
    if (chartData && chartRef.current) {
      chartRef.current.update();
    }
  }, [chartData]);

  if (!chartData) {
    return 
  }

  return (
    <div className="blood-pressure-chart">
      <Line
        ref={chartRef}
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Blood Pressure Over Time',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              type: 'category', // 'category' scale for the months
            },
            y: {
              type: 'linear', // 'linear' scale for the blood pressure values
            },
          },
        }}
      />
    </div>
  );
};

export default BloodPressureChart;
