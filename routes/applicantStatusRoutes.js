const express = require('express');
const router = express.Router();
const applicantStatusController = require('../controllers/applicantStatusController')

router
    .route('/')
    .get(applicantStatusController.getAllApplicantStatuses) //on GET request do something hear


module.exports = router;