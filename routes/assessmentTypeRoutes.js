const express = require('express');
const router = express.Router();
const assessmentTypeController = require('../controllers/assessmentTypeController')

router
    .route('/')
    .get(assessmentTypeController.getAllAssessmentTypes) //on GET request do something hear


module.exports = router;