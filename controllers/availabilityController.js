const Availability = require('../models/Availability')

exports.getAllAvailabilities = async (req, res, next) => {

    try {
        const [availabilities, _] = await Availability.getAllAvailabilities();
        res.status(200).json(availabilities)
        //res.end();
        
    } catch (error) {
        console.log(error)
        
        next(error)
        
    }
    //res.send('Get all availabilities route')
}

exports.createAvailability = async (req, res, next) => {
    
    try {
        let {name} = req.body;
        let availability = new Availability(name);

        availability = await availability.save();

        res.status(201).json({message: "Availability created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

exports.getAvailabilityById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [availability, _] = await Availability.getAvailabilityById(Id);
        res.status(200).json(availability[0])
        // res.status(200).json({availability})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editAvailabilityById = async (req, res, next) => {
    
    try {
        let {Availability_details} = req.body;
        let [availability, _] = await Availability.editAvailabilityById(Availability_details);
        res.status(200).json(availability)
        // res.status(200).json({availability})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteAvailabilityById = async (req, res, next) => {
    
    try {
        let Id = req.params.id;
        let [availability, _] = await Availability.deleteAvailabilityById(Id);
        res.status(200).json(availability)
        // res.status(200).json({availability})
    } catch (error) {
        console.log(error)
        next(error)
    }
}