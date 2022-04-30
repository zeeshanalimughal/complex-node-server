const express = require('express');
const staffController = require('../controllers/staffController')
const router = express.Router();


//@route GET & POST = /staffs/
router
    .route('/')
    .get(staffController.getAllStaff)
    .post(staffController.createStaff)
    .put(staffController.editStaffById)

router
    .route('/:id')
    .get(staffController.getStaffById)
    .delete(staffController.deleteStaffById)

module.exports = router;