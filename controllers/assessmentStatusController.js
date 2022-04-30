const AssessmentStatus = require('../models/AssessmentStatus')

exports.getAllAssessmentStatuses = async (req, res, next) => {

    try {
        const [assessmentStatuses, _] = await AssessmentStatus.getAllAssessmentStatuses(); 
        res.status(200).json(assessmentStatuses)
    } catch (error) {
        console.log(error)
        next(error)
    } 
}