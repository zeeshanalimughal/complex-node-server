const Shift = require('../models/Shift')

exports.getAllShifts = async (req, res, next) => {

    try {
        const [shifts, _] = await Shift.getAllShifts();
        res.status(200).json(shifts)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all shifts route')
}

exports.createShift = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let shift = new Shift(name);

        shift = await shift.save();

        res.status(201).json({message: "Shifts created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getShiftById = async (req, res, next) => {
    
    try {
        let shift_Id = req.params.id;
        let [shift, _] = await Shift.getShiftById(shift_Id);
        res.status(200).json(shift[0])
        // res.status(200).json({shift})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editShiftById = async (req, res, next) => {
    
    try {
        let {shift_details} = req.body;
        let [shift, _] = await Shift.deleteShiftById(shift_Id, name);
        res.status(200).json(shift)
        // res.status(200).json({shift})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteShiftById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [shift, _] = await Shift.deleteShiftById(Id);
        res.status(200).json(shift)
        // res.status(200).json({shift})
    } catch (error) {
        console.log(error)
        next(error)
    }
}