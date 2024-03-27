const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan user MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'login' // Nama database yang telah dibuat
});

db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// Endpoint untuk login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Username or password is incorrect" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
