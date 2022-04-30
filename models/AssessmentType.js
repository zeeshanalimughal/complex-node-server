const db = require('../config/db');

class AssessmentType{

    static getAllAssessmentTypes()
    {
        let sql = `SELECT * FROM Assessment_Types`
        return db.execute(sql)
    }
    
}

module.exports = AssessmentType;