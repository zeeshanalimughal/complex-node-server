const ApplicantStatus = require('../models/ApplicantStatus')

exports.getAllApplicantStatuses = async (req, res, next) => {

    try {
        const [applicantsStatuses, _] = await ApplicantStatus.getAllApplicantStatuses(); 
        res.status(200).json(applicantsStatuses)
    } catch (error) {
        console.log(error)
        next(error)
    } 
}