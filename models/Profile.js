const db = require('../config/db');

class Profile{

    constructor(Applicant_Id, Worker_Id, Registration_Id)
    {
        this.Applicant_Id = Applicant_Id;
        this.Worker_Id = Worker_Id;
        this.Registration_Id = Registration_Id;
    }
    
    save()
    {
        let sql = `INSERT INTO Profiles 
                    (Applicant_Id, Worker_Id, Registration_Id )
                    VALUES
                    ('${this.Applicant_Id}', '${this.Worker_Id}', '${this.Registration_Id}' )
                    `;

        return db.execute(sql);

    }

    static getAllProfiles()
    {
        let sql = `SELECT * FROM Profiles`
        return db.execute(sql);
    }

    static getProfileById(id)
    {
        let sql = `SELECT * FROM Profiles WHERE Profile_Id = ${id}`
        return db.execute(sql);
    }

    static editProfileById(id, placeholder)
    {
        let sql = `UPADATE Profiles 
                   SET // = ${placeholder}
                   WHERE Profile_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteProfileById(id)
    {
        let sql = `DELETE FROM Profiles
                   WHERE Profile_Id = ${id}
                   `
        return db.execute(sql);
    }

}

module.exports = Profile;