const Division = require('../models/Division')

exports.getAllDivisions = async (req, res, next) => {

    try {
        const [divisions, _] = await Division.getAllDivisions();
        res.status(200).json(divisions)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all divisions route')
}

exports.createDivision = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let division = new Division(name);

        division = await division.save();

        res.status(201).json({message: "Division created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getDivisionById = async (req, res, next) => {
    
    try {
        let division_Id = req.params.id;
        let [division, _] = await Division.getDivisionById(division_Id);
        res.status(200).json(division[0])
        // res.status(200).json({division})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editDivision = async (req, res, next) => {
    
    try {
        let {division_Id, name} = req.body;
        let [division, _] = await Division.deleteDivisionById(division_Id, name);
        res.status(200).json(division)
        // res.status(200).json({division})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteDivisionById = async (req, res, next) => {
    
    try {
        let division_Id = req.params.id;
        let [division, _] = await Division.deleteDivisionById(division_Id);
        res.status(200).json(division)
        // res.status(200).json({division})
    } catch (error) {
        console.log(error)
        next(error)
    }
}