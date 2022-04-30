const express = require('express');
const profileController = require('../controllers/profileController')
const router = express.Router();


router
    .route('/')
    .get(profileController.getAllProfiles)
    .post(profileController.createProfile)
    .put(profileController.editProfileById)

router
    .route('/:id')
    .get(profileController.getProfileById)
    .delete(profileController.deleteProfileById)

module.exports = router;


    