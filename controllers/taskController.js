const Task = require('../models/Task')

exports.getAllTasks = async (req, res, next) => {

    try {
        const [tasks, _] = await Task.getAllTasks();
        res.status(200).json(tasks)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all tasks route')
}

exports.createTask = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let task = new Task(name);

        task = await task.save();

        res.status(201).json({message: "Tasks created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getTaskById = async (req, res, next) => {
    
    try {
        let task_Id = req.params.id;
        let [task, _] = await Task.getTaskById(task_Id);
        res.status(200).json(task[0])
        // res.status(200).json({task})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editTaskById = async (req, res, next) => {
    
    try {
        let {task_Id, name} = req.body;
        let [task, _] = await Task.deleteTaskById(task_Id, name);
        res.status(200).json(task)
        // res.status(200).json({task})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteTaskById = async (req, res, next) => {
    
    try {
        let task_Id = req.params.id;
        let [task, _] = await Task.deleteTaskById(task_Id);
        res.status(200).json(task)
        // res.status(200).json({task})
    } catch (error) {
        console.log(error)
        next(error)
    }
}