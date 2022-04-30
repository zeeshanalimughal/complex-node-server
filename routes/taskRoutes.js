const express = require('express');
const taskController = require('../controllers/taskController')
const router = express.Router();


router
    .route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask)
    .put(taskController.editTaskById)

router
    .route('/:id')
    .get(taskController.getTaskById)
    .delete(taskController.deleteTaskById)

module.exports = router;


    