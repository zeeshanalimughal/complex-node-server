const AssessmentResult = require('../models/AssessmentResult')

exports.getAllAssessmentResults = async (req, res, next) => {

    try {
        const [assessmentResults, _] = await AssessmentResult.getAllAssessmentResults(); 
        res.status(200).json(assessmentResults)
    } catch (error) {
        console.log(error)
        next(error)
    } 
}