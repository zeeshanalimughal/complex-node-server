const db = require('../config/db');

class AssessmentStatus{

    static getAllAssessmentStatuses()
    {
        let sql = `SELECT * FROM Assessment_Status`
        return db.execute(sql)
    }

    

    
}

module.exports = AssessmentStatus;