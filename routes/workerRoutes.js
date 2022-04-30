const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController')

router
    .route('/')
    .get(workerController.getAllWorkers) //on GET request do something hear
    .post(workerController.createWorker) //on GET request do something hear
    .put(workerController.editWorkerById); //on GET request do something hear

router
    .route('/:id')
    .get(workerController.getWorkerById) //on GET request do something and RETURN something
    .delete(workerController.deleteWorkerById);


module.exports = router;