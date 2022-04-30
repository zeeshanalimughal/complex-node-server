class Task{

    constructor()
    {

    }

    save()
    {

    }

    static getTaskById(id)
    {
        let sql = `SELECT * FROM Tasks
                   WHERE Task_Id = ${id}
                  `
        return db.execute(sql);
    }

    static getAllTasks()
    {
        let sql = `SELECT * FROM Tasks`
        return db.execute(sql);
    }

    static editTaskById(id, obj)
    {
        let sql = `UPDATE Tasks
                   SET // = ${obj}
                   WHERE Task_Id = ${id}
                  `
        return db.execute(sql);
    }

    static deleteTaskById(id)
    {
        let sql = `DELETE FROM Tasks
                   WHERE Task_Id = ${id}
                  `
        return db.execute(sql);
    }
}

module.exports = Task;