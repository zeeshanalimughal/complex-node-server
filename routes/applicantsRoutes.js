const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

router
    .route('/')
    .get(applicantController.getAllApplicants)
    .post(applicantController.createApplicant)
    .put(applicantController.editApplicantById)

router
    .route('/:id')
    .get(applicantController.getApplicantById)
    .delete(applicantController.deleteApplicantById) 

module.exports = router;