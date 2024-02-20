const express = require('express');
const path = require('path');
// const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
// const db = mysql.createConnection({
//   host: 'your-mysql-server-host',
//   user: 'your-mysql-username',
//   password: 'your-mysql-password',
//   database: 'your-database-name'
// });

// ... (database connection code)

// Serve React build files
app.use(express.static(path.join(__dirname, '../my-react-app/build')));

// Handle other routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-react-app/build', 'index.html'));
});

// Handle API routes (for example)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
