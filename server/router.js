const express = require('express');
const router = express.Router();
const controller = require('./controller/todoController');

router.get('/todo', controller.get);
router.post('/todo', controller.post);

module.exports = router;