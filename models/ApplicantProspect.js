const db = require('../config/db');

class ApplicantProspect{

    static getAllApplicantProspects()
    {
        let sql = `SELECT * FROM Applicant_Prospect`
        return db.execute(sql)
    }

    

    
}

module.exports = ApplicantProspect;