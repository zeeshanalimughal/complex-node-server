const Applicant = require('../models/Applicant')

exports.getAllApplicants = async (req, res, next) => {

        try {
            const [applicants, _] = await Applicant.getAllApplicants(); 
            res.status(200).json(applicants)
        } catch (error) {
            console.log(error)
            next(error)
        } 
}

exports.getApplicantById = async (req, res, next) => {

    try {
        let applicant_Id = req.params.id;
        const [applicant, _] = await Applicant.getApplicantById(applicant_Id);
        res.status(200).json(applicant[0])
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}
 

exports.createApplicant = async (req, res, next) => {
    try {
        const new_applicant_obj = req.body;

        const applicant = new Applicant(new_applicant_obj);
        // let applicant = new Applicant(name);

        applicant = await applicant.save();

        res.status(201).json({message: "Applicant created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editApplicantById = async (req, res, next) => {

}

exports.deleteApplicantById = async (req, res, next) => {

}