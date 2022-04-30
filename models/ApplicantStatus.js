const db = require('../config/db');

class ApplicantStatus{

    static getAllApplicantStatuses()
    {
        let sql = `SELECT * FROM Applicant_Status`
        return db.execute(sql)
    }

    

    
}

module.exports = ApplicantStatus;