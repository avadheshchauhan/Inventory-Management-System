const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Admin@123',
  database: 'loginsystem',
});

app.post('/register', (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    'INSERT INTO userdata (fname, lname, email, password) VALUES (?, ?, ?, ?)',
    [fname, lname, email, password],
    (err, result) => {
      console.log(err + 'line number 25');
    }
  );
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    'SELECT * FROM userdata WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: 'Wrong username/password combination!' });
      }
    }
  );
});

app.listen(8080, () => console.log(`App is running at port 8080`));
