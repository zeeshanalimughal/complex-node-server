const CheckIn = require('../models/CheckIn')

exports.getAllCheckIns = async (req, res, next) => {

    try {
        const [checkIns, _] = await CheckIn.getAllCheckIns();
        res.status(200).json(checkIns)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all checkIns route')
}

exports.createCheckIn = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let checkIn = new CheckIn(name);

        checkIn = await checkIn.save();

        res.status(201).json({message: "CheckIn created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getCheckInById = async (req, res, next) => {
    
    try {
        let CheckIn_Id = req.params.id;
        let [checkIn, _] = await CheckIn.getCheckInById(CheckIn_Id);
        res.status(200).json(checkIn[0])
        // res.status(200).json({checkIn})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editCheckInById = async (req, res, next) => {
    
    try {
        let {CheckIn_Id, name} = req.body;
        let [checkIn, _] = await CheckIn.editCheckInById(CheckIn_Id, name);
        res.status(200).json(checkIn)
        // res.status(200).json({checkIn})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteCheckInById = async (req, res, next) => {
    
    try {
        let CheckIn_Id = req.params.id;
        let [checkIn, _] = await CheckIn.deleteCheckInById(CheckIn_Id);
        res.status(200).json(checkIn)
        // res.status(200).json({checkIn})
    } catch (error) {
        console.log(error)
        next(error)
    }
}