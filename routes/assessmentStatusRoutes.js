const express = require('express');
const router = express.Router();
const assessmentStatusController = require('../controllers/assessmentStatusController')

router
    .route('/')
    .get(assessmentStatusController.getAllAssessmentStatuses) //on GET request do something hear


module.exports = router;