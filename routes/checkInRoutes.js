const express = require('express');
const router = express.Router();
const checkInController = require('../controllers/checkInController')

router
    .route('/')
    .get(checkInController.getAllCheckIns) //on GET request do something hear
    .post(checkInController.createCheckIn) //on GET request do something hear
    .put(checkInController.editCheckInById); //on GET request do something hear

router
    .route('/:id')
    .get(checkInController.getCheckInById) //on GET request do something and RETURN something
    .delete(checkInController.deleteCheckInById);


module.exports = router;