const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController')

router
    .route('/')
    .get(timesheetController.getAllTimesheets) //on GET request do something hear
    .post(timesheetController.createTimesheet) //on GET request do something hear
    .put(timesheetController.editTimesheetById); //on GET request do something hear

router
    .route('/:id')
    .get(timesheetController.getTimesheetById) //on GET request do something and RETURN something
    .delete(timesheetController.deleteTimesheetById);


module.exports = router;