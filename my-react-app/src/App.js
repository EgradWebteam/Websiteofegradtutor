import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log('apiUrl:', apiUrl);
    axios.get(`${apiUrl}/api/data`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <div>
      <h1>Your React App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Server Data: {data ? data.message : 'No data available.'}</p>
      )}
    </div>
  );
}

export default App;
