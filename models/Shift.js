const db = require('../config/db');

class Shift{

    constructor()
    {

    }

    save()
    {
 
    }

    static getShiftById(id)
    {
        let sql = `SELECT * FROM Shifts
                   WHERE Shift_Id = ${id}
                  `
        return db.execute(sql);
    }

    static getAllShifts()
    {
        let sql = `SELECT * FROM Shifts`
        return db.execute(sql);
    }

    static editShiftById(id, obj)
    {
        let sql = `UPDATE Shifts
                   SET // = ${obj}
                   WHERE Shift_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteShiftById(id)
    {
        let sql = `DELETE FROM Shifts
                   WHERE Shift_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Shift;