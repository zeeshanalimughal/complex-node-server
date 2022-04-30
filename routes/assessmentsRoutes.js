const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController')

router
    .route('/')
    .get(assessmentController.getAllAssessments) //on GET request do something hear
    .post(assessmentController.createAssessment) //on GET request do something hear
    .put(assessmentController.editAssessmentById); //on GET request do something hear

router
    .route('/:id')
    .get(assessmentController.getAssessmentId) //on GET request do something and RETURN something
    .delete(assessmentController.deleteAssessmentById);


module.exports = router;