const db = require('../config/db');

class Staff{


    static getStaffById(id)
    {
        let sql = `SELECT * FROM Staff
                   WHERE Staff_Id = ${id}
                  ` 
        return db.execute(sql);
    }

    static getAllStaff()
    {
        let sql = `SELECT * FROM Staff`
        return db.execute(sql);
    }

    static editStaffById(id, obj)
    {
        let sql = `UPDATE Staff
                   SET // = ${obj}
                   WHERE Staff_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteStaffById(id)
    {
        let sql = `DELETE FROM Staff
                   WHERE Staff_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Staff;