const ApplicantProspect = require('../models/ApplicantProspect')

exports.getAllApplicantProspects = async (req, res, next) => {

    try {
        const [applicantsProspects, _] = await ApplicantProspect.getAllApplicantProspects(); 
        res.status(200).json(applicantsProspects)
    } catch (error) {
        console.log(error)
        next(error)
    } 
}