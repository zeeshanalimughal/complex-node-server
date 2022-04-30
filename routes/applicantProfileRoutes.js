const express = require('express');
const router = express.Router();
const applicantProfileController = require('../controllers/applicantProfileController');

router
    .route('/')
    .get(applicantProfileController.getAllApplicantProfiles)
    .post(applicantProfileController.createApplicantProfile)
    .put(applicantProfileController.editApplicantProfileById)

router
    .route('/:id')
    .get(applicantProfileController.getApplicantProfileById)
    .delete(applicantProfileController.deleteApplicantProfileById) 

module.exports = router;