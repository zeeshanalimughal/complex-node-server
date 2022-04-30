const db = require('../config/db');

class JobRole{

    static getAllJobRoles()
    {
        let sql = `SELECT * FROM Job_Roles`
        return db.execute(sql)
    }
    
}

module.exports = JobRole;