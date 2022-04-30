const express = require('express');
const router = express.Router();
const jobRoleController = require('../controllers/jobRoleController')

router
    .route('/')
    .get(jobRoleController.getAllJobRoles) //on GET request do something hear


module.exports = router;