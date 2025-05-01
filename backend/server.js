// backend/server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'admin',
  password: 'prachitasrivastava',
  database: 'ecommerce'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
