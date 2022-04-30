const ApplicantProfile = require('../models/ApplicantProfile')

exports.getAllApplicantProfiles = async (req, res, next) => {

        try {
            const [applicantProfiles, _] = await ApplicantProfile.getAllApplicantProfiles(); 
            res.status(200).json(applicantProfiles)
        } catch (error) {
            console.log(error)
            next(error)
        } 
}

exports.getApplicantProfileById = async (req, res, next) => {

    try {
        let applicant_Id = req.params.id;
        const [applicant, _] = await ApplicantProfile.getApplicantProfileById(applicant_Id);
        res.status(200).json(applicant[0])
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}
 

exports.createApplicantProfile = async (req, res, next) => {
    try {
        let {applicant_Id, registration} = req.body;

        let applicantProfile = new ApplicantProfile(applicant_Id, registration);
        // let applicant = new ApplicantProfile(name);

        applicantProfile = await applicantProfile.save();

        res.status(201).json({message: "Applicant Profile created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editApplicantProfileById = async (req, res, next) => {

}

exports.deleteApplicantProfileById = async (req, res, next) => {

}