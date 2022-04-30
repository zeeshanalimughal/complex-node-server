const Staff = require('../models/Staff')

exports.getAllStaff = async (req, res, next) => {

    try {
        const [staff, _] = await Staff.getAllStaff();
        res.status(200).json(staff)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all staff route')
}

exports.createStaff = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let staff = new Staff(name);

        staff = await staff.save();

        res.status(201).json({message: "Staff created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getStaffById = async (req, res, next) => {
    
    try {
        let staff_Id = req.params.id;
        let [staff, _] = await Staff.getStaffById(staff_Id);
        res.status(200).json(staff[0])
        // res.status(200).json({staff})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editStaffById = async (req, res, next) => {
    
    try {
        let {staff_details} = req.body;
        let [staff, _] = await Staff.deleteStaffById(staff_Id, name);
        res.status(200).json(staff)
        // res.status(200).json({staff})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteStaffById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [staff, _] = await Staff.deleteStaffById(Id);
        res.status(200).json(staff)
        // res.status(200).json({staff})
    } catch (error) {
        console.log(error)
        next(error)
    }
}