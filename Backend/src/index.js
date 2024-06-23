
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// use cookie-parser
app.use(cookieParser());

// CORS
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// connect database
const db = require('./config/db');
db.connect();

app.use(express.urlencoded({extended: true})); // middleware xu li du lieu gui dang form
app.use(express.json()); // xu li khi gui du kieu k phai form vd nhu axios
app.use(morgan('combined'));

// config template engine
app.set('views', './src/views');
app.set('view engine', 'pug');

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



