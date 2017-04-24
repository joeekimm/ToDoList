const mongoose = require('mongoose');
const Todo = require('../models/todoModel').Todo;

const todoController = {
  get: (req, res) => {
    console.log('this is req.data: ', req.data);
    Todo.find({}, (err, data) => {
      if (err) {
        console.log('Err: ', err);
        res.status(404);
      } else {
        console.log('Get request success');
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {
    console.log('This is req.body', req.body);
    var newTodo = new Todo(req.body);
    newTodo.save((err) => {
      if (err) {
        console.log('Err: ', err);
        res.status(404);
      } else {
        console.log('Post request successful');
        res.status(201).json({
          todo: req.body.todo,
          due: req.body.time
        });
      }
    });
  }
};

module.exports = todoController;