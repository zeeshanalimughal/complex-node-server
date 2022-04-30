const AssessmentType = require('../models/AssessmentType')

exports.getAllAssessmentTypes = async (req, res, next) => {

    try {
        const [assessmentTypes, _] = await AssessmentType.getAllAssessmentTypes(); 
        res.status(200).json(assessmentTypes)
    } catch (error) {
        console.log(error)
        next(error)
    } 
}