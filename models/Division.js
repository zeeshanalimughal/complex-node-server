const db = require('../config/db');


class Division{

    constructor(name)
    {
        this.name = name
    }

    save()
    {
        let d = new Date();

        let sql = 
        `INSERT INTO Divisions 
        (Name)
        VALUES
        ('${this.name}')
        `;

        //const [new_division, _] = await db.execute(sql)
        return db.execute(sql)
    }
    
    static getAllDivisions()
    {
        let sql = `SELECT * FROM Divisions`
        return db.execute(sql);
    } 

    static getDivisionById(id)
    {
        let sql =  `SELECT * FROM Divisions WHERE Division_Id = ${id}`
        return db.execute(sql);
    }

    static editDivisionById(id, name)
    {
        let sql =  `UPDATE Divisions SET Name = ${name} WHERE Division_Id = ${id}`
        return db.execute(sql);
    }

    static deleteDivisionById(id)
    {
        let sql =  `DELETE FROM Divisions WHERE Division_Id = ${id}`
        return db.execute(sql);
    }
}


module.exports = Division;

