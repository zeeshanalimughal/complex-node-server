
const Assessment = require('../models/Assessment');


exports.getAllAssessments = async (req, res, next) => {

    try { 
        const [assessments, _] = await Assessment.getAllAssessments()
        res.status(200).json(assessments);
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getAssessmentId = async (req, res, next) => {

    try {

        const assessment_Id = req.params.id;
        const [assessment, _] = await Assessment.getAllAssessmentId(assessment_Id);
        res.status(200).json(assessment);
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createAssessment = async (req, res, next) => {

    try {

        const new_assessment_obj = req.body;
        const assessment_instance = new Assessment(new_assessment_obj);
        const [] = await assessment_instance.save();
        res.status(201).json({message: 'Assessment successfully created'});
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.editAssessmentById = async (req, res, next) => {

    try {

        const {id, ...other} = req.body;
        const [assessment, _] = await Assessment.editAssessmentById(id, ...other);
        res.status(201).json(assessment);
        
    } catch (error) {
        console.log(error)
        next(error);
    }
}

exports.deleteAssessmentById = async (req, res, next) => {

    try {

        const assessment_Id = req.params.id;
        const [assessment, _] = await Assessment.deleteAssessment(assessment_Id);
        res.status(201).json(assessment);
        
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}