const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoModel = new Schema({
  todo: String,
  due: String
});

const Todo = mongoose.model('Todo', todoModel);

module.exports = Todo;