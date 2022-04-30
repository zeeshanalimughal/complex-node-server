class CheckIn{

    constructor()
    {

    }

    save()
    {

    }

    static getCheckInById(id)
    {
        let sql = `SELECT * FROM CheckIns
                   WHERE CheckIn_Id = ${id}
                  `
        return db.execute(sql);
    }

    static getAllCheckIns()
    {
        let sql = `SELECT * FROM CheckIns`
        return db.execute(sql);
    }

    static editCheckInById(id, obj)
    {
        let sql = `UPDATE CheckIns
                   SET // = ${obj}
                   WHERE CheckIn_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteCheckInById(id)
    {
        let sql = `DELETE FROM CheckIns
                   WHERE CheckIn_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = CheckIn;