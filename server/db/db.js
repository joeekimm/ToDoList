const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const uri = 'mongodb://user:user@ds062059.mlab.com:62059/practiceproject';

mongoose.connect(uri, (err) => {
  err ? console.log('Err: ', err) : console.log('DB connected');
});

const db = mongoose.connection;
autoIncrement.initialize(db);

module.exports = db;