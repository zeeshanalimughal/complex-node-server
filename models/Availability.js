const db = require('../config/db');

class Availability{

    constructor()
    {

    }

    save()
    {

    }

    static getAvailabilityById(id)
    {
        let sql = `SELECT * FROM Availability
                   WHERE Availability_Id = ${id}
                  `
        return db.execute(sql);
    }

    static getAllAvailability()
    {
        let sql = `SELECT * FROM Availability`
        return db.execute(sql);
    }

    static editAvailabilityById(id, obj)
    {
        let sql = `UPDATE Availability
                   SET // = ${obj}
                   WHERE Availability_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteAvailabilityById(id)
    {
        let sql = `DELETE FROM Availability
                   WHERE Availability_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Availability;