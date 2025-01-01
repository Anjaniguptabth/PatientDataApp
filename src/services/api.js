import axios from 'axios';

const API_BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

// Fetch username and password from environment variables
const username = 'coalition';
const password = 'skills-test';

export const fetchPatientData = async () => {
  try {
    // Encode username and password to Base64 for Basic Authentication
    const auth = btoa(`${username}:${password}`);
    console.log('Authorization Header:', `Basic ${auth}`); // Debugging log

    // Make the API request
    const response = await axios.get(`${API_BASE_URL}/patients`, {
      headers: {
        Authorization: `Basic ${auth}`, // Pass the Authorization header
      },
    });

    // Find and return data for Jessica Taylor
    return response.data.find((patient) => patient.name === 'Jessica Taylor');
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};
