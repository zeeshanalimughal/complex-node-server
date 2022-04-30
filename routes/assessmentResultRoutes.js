const express = require('express');
const router = express.Router();
const assessmentResultController = require('../controllers/assessmentResultController')

router
    .route('/')
    .get(assessmentResultController.getAllAssessmentResults) //on GET request do something hear


module.exports = router;