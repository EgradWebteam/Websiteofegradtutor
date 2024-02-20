import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')  // Corrected URL
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <div>
      <h1>Your React App</h1>
      <p>Server Data: {data ? data.message : 'Loading...'}</p>
    </div>
  );
}

export default App;
