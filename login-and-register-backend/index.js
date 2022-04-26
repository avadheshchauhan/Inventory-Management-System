const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/loginRegisterDB', () => {
  console.log('DB connected');
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model('User', userSchema);

// Routes
app.post('/login', (req, res) => {
  res.send('My API login');
});

app.post('/register', (req, res) => {
  res.send('My API register');
});

app.listen(port, () => {
  console.log(`App is runnung at Port ${port}`);
});
