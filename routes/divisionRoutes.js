const express = require('express');
const divisionControllers = require('../controllers/divisionControllers')
const router = express.Router();


//@route GET & POST = /divisions/
router
    .route('/')
    .get(divisionControllers.getAllDivisions)
    .post(divisionControllers.createDivision)
    .put(divisionControllers.editDivision)

router
    .route('/:id')
    .get(divisionControllers.getDivisionById)
    .delete(divisionControllers.deleteDivisionById)

module.exports = router;