const db = require('../config/db');

class Assessments{

    constructor({subject, applicant, staff, division, type, level, result, status})
    {
        this.applicant = applicant ; 
        this.subject = subject;
        this.staff = staff ; 
        this.division = division; 
        this.type = type; 
        this.level = level; 
        this.result = result; 
        this.status = status; 
    } 
    save()
    {
        let d = new Date(), yyyy = d.getFullYear(), mm = d.getMonth(),  dd = d.getDay();
        let created_date = `${yyyy}-${mm}-${dd}`;

        let sql = `INSERT INTO Assessments
                   ( Applicant_Id, Assessment_Subject, Assessment_Date, Assessment_Type_Id,
                     Level, Assessment_Result_Id, Office_Staff_Id, Assessment_Status_Id
                   ) 
                   VALUES
                   ('${this.applicant}', '${this.subject}','${created_date}','${this.type}',
                    '${this.level}','${this.result}','${this.staff}','${this.status}'
                    )
                   `
        return db.execute(sql);
    }

    static getAllAssessments()
    {
        let sql = `SELECT * FROM Assessments`;
        return db.execute(sql)
    }

    static getAssessmentById(id)
    {
        let sql = `SELECT * FROM Assessments WHERE Assessment_Id = ${id}`;
        return db.execute(sql)
    }

    static editAssessmentById(id, obj)
    {
        let sql = `UPDATE Assessments
                   SET // = ${obj}
                   WHERE Assessment_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteAssessmentById(id)
    {
        let sql = `DELETE FROM Assessments
                   WHERE Assessment_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Assessments;