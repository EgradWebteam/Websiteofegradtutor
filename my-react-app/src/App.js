import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log('apiUrl:', apiUrl);
    axios.get(`${apiUrl}/api/data`)  // Use template literals to interpolate apiUrl
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);  // Add apiUrl as a dependency to useEffect to avoid eslint warnings

  return (
    <div>
      <h1>Your React App</h1>
      <p>Server Data: {data ? data.message : 'Loading...'}</p>
    </div>
  );
}

export default App;
