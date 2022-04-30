const Timesheet = require('../models/Timesheet')

exports.getAllTimesheets = async (req, res, next) => {

    try {
        const [timesheets, _] = await Timesheet.getAllTimesheets();
        res.status(200).json(timesheets)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all timesheets route')
}

exports.createTimesheet = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let timesheet = new Timesheet(name);

        timesheet = await timesheet.save();

        res.status(201).json({message: "Timesheets created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getTimesheetById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [timesheet, _] = await Timesheet.getTimesheetById(Id);
        res.status(200).json(timesheet[0])
        // res.status(200).json({timesheet})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editTimesheetById = async (req, res, next) => {
    
    try {
        let {Timesheet_details} = req.body;
        let [timesheet, _] = await Timesheet.editTimesheetById(Timesheet_details);
        res.status(200).json(timesheet)
        // res.status(200).json({timesheet})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteTimesheetById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [timesheet, _] = await Timesheet.deleteTimesheetById(Id);
        res.status(200).json(timesheet)
        // res.status(200).json({timesheet})
    } catch (error) {
        console.log(error)
        next(error)
    }
}