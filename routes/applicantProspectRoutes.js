const express = require('express');
const router = express.Router();
const applicantProspectController = require('../controllers/applicantProspectController')

router
    .route('/')
    .get(applicantProspectController.getAllApplicantProspects) //on GET request do something hear


module.exports = router;