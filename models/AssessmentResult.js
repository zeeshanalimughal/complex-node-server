const db = require('../config/db');

class AssessmentResult{

    static getAllAssessmentResults()
    {
        let sql = `SELECT * FROM Assessment_Result`
        return db.execute(sql)
    }
    
}

module.exports = AssessmentResult;