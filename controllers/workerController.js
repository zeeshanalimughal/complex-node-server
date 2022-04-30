const Worker = require('../models/Worker')

exports.getAllWorkers = async (req, res, next) => {

    try {
        const [workers, _] = await Worker.getAllWorkers();
        res.status(200).json(workers)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all workers route')
}

exports.createWorker = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let worker = new Worker(name);

        worker = await worker.save();

        res.status(201).json({message: "Workers created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getWorkerById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [worker, _] = await Worker.getWorkerById(Id);
        res.status(200).json(worker[0])
        // res.status(200).json({worker})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editWorkerById = async (req, res, next) => {
    
    try {
        let {Worker_details} = req.body;
        let [worker, _] = await Worker.editWorkerById(Worker_details);
        res.status(200).json(worker)
        // res.status(200).json({worker})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteWorkerById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [worker, _] = await Worker.deleteWorkerById(Id);
        res.status(200).json(worker)
        // res.status(200).json({worker})
    } catch (error) {
        console.log(error)
        next(error)
    }
}