require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
})

let sql = "SELECT * from Applicants";

// pool.execute(sql, (err, results) => {
//     if(err) throw err;
//     results.forEach(item => console.log(item['First_Name']))
//     //console.log(results)
// })


module.exports = pool.promise();