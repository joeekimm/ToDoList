const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');
const parser = require('body-parser');
const port = 8080;

const db = require('./db/db');

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, '../client/')));
app.use('/', router);

app.listen(port, err => { err ? console.log('Err: ', err) : console.log('Connection Established'); });