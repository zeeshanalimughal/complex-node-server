class Timesheet{

    constructor()
    {

    }

    save()
    {

    }

    static getTimesheetById(id)
    {
        let sql = `SELECT * FROM Timesheets
                   WHERE Timesheet_Id = ${id}
                  `
        return db.execute(sql);
    }

    static getAllTimesheets()
    {
        let sql = `SELECT * FROM Timesheets`
        return db.execute(sql);
    }

    static editTimesheetById(id, obj)
    {
        let sql = `UPDATE Timesheets
                   SET // = ${obj}
                   WHERE Timesheet_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteTimesheetById(id)
    {
        let sql = `DELETE FROM Timesheets
                   WHERE Timesheet_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Timesheet;