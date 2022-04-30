const db = require('../config/db');

class Applicant{

    constructor({first_name, surname, email, application_date, mobile,
                home_phone, division, role, rating,
                prospect, status})
    {
        
        this.first_name = first_name;
        this.surname = surname;
        this.email = email;
        this.application_date = application_date;
        this.mobile = mobile;
        this.home_phone = home_phone;
        this.division_id = division;
        this.job_role_id = role;
        this.applicant_rating = rating;
        this.applicant_prospect_id = prospect;
        this.applicant_status_id = status;
    }

    save()
    {
        let d = new Date(), yyyy = d.getFullYear(), mm = d.getMonth(),  dd = d.getDay();
        let created_date = `${yyyy}-${mm}-${dd}`;

        let sql = `INSERT INTO Applicants 
                   ( First_Name, Surname, Email, Application_Date, 
                     Mobile, Home_Phone, Division_Id, Job_Role_Id, Applicant_Rating, 
                     Applicant_Prospect_Id, Applicant_Status_Id
                   )
                   VALUES 
                   ('${this.first_name}', '${this.surname}', '${this.email}', '${created_date}', '${this.mobile}', '${this.home_phone}',
                    '${this.division_id}', '${this.job_role_id}', '${this.applicant_rating}', '${this.applicant_prospect_id}', '${this.applicant_status_id}'
                    )
                   `
        
        return db.execute(sql)
    }

    static getAllApplicants()
    {
        let sql = `SELECT * FROM Applicants`
        return db.execute(sql)
    }

    static getApplicantById(id)
    { 
        let sql =  `SELECT * FROM Applicants WHERE Applicant_Id = ${id}`
        return db.execute(sql)
    }

    static editApplicantById(id, placeholder)
    {
        let sql = `UPDATE Applicants
                   SET // = ${placeholder}
                   WHERE Applicant_Id = ${id}
                  `

        return db.execute(sql);
    }

    static deleteApplicantById(id)
    {
        let sql = `DELETE FROM Applicants
                   WHERE Applicant_Id = ${id}
                  `

        return db.execute(sql);
    }

    
}

module.exports = Applicant;