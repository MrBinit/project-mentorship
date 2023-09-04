import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt'; // Import only bcrypt
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Enter your MySQL password
  database: 'signup',
});

// Handle POST request for user registration
app.post('/register', (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";

  // Hash the password using bcrypt
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
    if (err) {
      return res.json({ error: 'Error hashing password' });
    }

    const values = [req.body.name, req.body.email, hash];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ error: 'Error inserting data in the server' });
      }

      return res.json({ status: 'Success' });
    });
  });
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
