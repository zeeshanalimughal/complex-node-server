const db = require('../config/db');

class ApplicantProfile{

    constructor(applicant_Id, registration,)
    {
        
        this.applicant_Id = applicant_Id;
        this.registration = registration;
    }

    save()
    {
        let d = new Date();
        let yyyy = d.getFullYear()
        let mm = d.getMonth();
        let dd = d.getDay();

        let created_date = `${yyyy}-${mm}-${dd}`;

        let sql = `INSERT INTO Applicant_Profiles 
                   (Profile_Applicant_Id, Registration)
                   VALUES ('${this.applicant_Id}', '${this.registration}')
                   `
        
        return db.execute(sql)
    }

    static getAllApplicantProfiles()
    {
        let sql = `SELECT * FROM Applicant_Profiles`
        return db.execute(sql)
    }

    static getApplicantProfileById(id)
    { 
        let sql =  `SELECT * FROM ApplicantProfiles WHERE ApplicantProfile_Id = ${id}`
        return db.execute(sql)
    }

    static editApplicantProfileById(id, placeholder)
    {
        let sql = `UPDATE ApplicantProfiles
                   SET // = ${placeholder}
                   WHERE ApplicantProfile_Id = ${id}
                  `

        return db.execute(sql);
    }

    static deleteApplicantProfileById(id)
    {
        let sql = `DELETE FROM ApplicantProfiles
                   WHERE ApplicantProfile_Id = ${id}
                  `

        return db.execute(sql);
    }

    
}

module.exports = ApplicantProfile;