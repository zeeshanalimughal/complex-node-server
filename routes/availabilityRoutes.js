const express = require('express');
const router = express.Router();
const availabilityController = require('../controllers/availabilityController')

router
    .route('/')
    .get(availabilityController.getAllAvailabilities) //on GET request do something hear
    .post(availabilityController.createAvailability) //on GET request do something hear
    .put(availabilityController.editAvailabilityById); //on GET request do something hear

router
    .route('/:id')
    .get(availabilityController.getAvailabilityById) //on GET request do something and RETURN something
    .delete(availabilityController.deleteAvailabilityById);


module.exports = router;