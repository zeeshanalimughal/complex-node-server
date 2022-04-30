const db = require('../config/db');

class Worker{

    constructor(apple)
    {
        this.apple = apple
    }

    save()
    {
        let sql = ` 
                    INSERT INTO Workers 
                    (First_Name, Surname, Email, Insurance_No, DOB, Mobile, Home_Phone, Payroll_Setup_Id, Payroll_DocType_Id, Division_Id, UTR_No, CIS_No, Umbrella_Id, Company_Name, Company_No, VAT_No, Consultant_Id, Address1, Address2, Postcode, Town_City)
                    VALUES 
                    ('Mike', 'Spiker', 'mike@spike.com', 1111, 'DOB', '1234567','33334567', 1, 2, 1, '1SDWEE', '234FAQ',3, 'Company Name', 1, '111122', 1, 'Line 1', 'Line 2', 'Post 0111', 'Harare')
                    `;

        let sql2 = `INSERT INTO Worker_JobRoles 
                    (Worker_Id, Role_Id)
                    VALUES (2,2);`

        //return  db.execute(sql)
           return Worker.combineStmts(sql, sql2);
    }

    static combineStmts(sql, sql2)
    {
        const ar = [];
        ar.push(db.execute(sql));
        ar.push(db.execute(sql2));
        console.log('ar:' + ar)
        return ar;

    }

    static getWorkerById(id)
    {
        let sql = `SELECT * FROM Workers
                   WHERE Worker_Id = ${id}
                  `
        return db.execute(sql);
    }

    static getAllWorkers()
    {
        let sql = `SELECT * FROM Workers`
        return db.execute(sql);
    }

    static editWorkerById(id, obj)
    {
        let sql = `UPDATE Workers
                   SET // = ${obj}
                   WHERE Worker_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteWorkerById(id)
    {
        let sql = `DELETE FROM Workers
                   WHERE Worker_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Worker;