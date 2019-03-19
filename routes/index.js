var express = require('express');
var router = express.Router();
const TaskController = require('../controllers/TaskController');

/* GET home page. */
router.get('/',TaskController.taskPage);
router.get('/addTask',TaskController.addTask);
router.post('/add',TaskController.createTask);

module.exports = router;
