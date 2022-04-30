require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
//Vconst bodyParser = require('body-parser');

//const bodyParser = require('body-parser');

app.use(cors({
    origin: '*',
}))

//MIDDLEWARE
app.use(express.json()) // parse json bodies in the request object
//app.use(bodyParser.urlencoded({extended: true}));

app.use('/divisions', require('./routes/divisionRoutes'))
app.use('/applicants', require('./routes/applicantsRoutes'))
app.use('/assessments', require('./routes/assessmentsRoutes'));
app.use('/profiles', require('./routes/profileRoutes'));
app.use('/applicantprofiles', require('./routes/applicantProfileRoutes'));
app.use('/timesheets', require('./routes/timesheetRoutes'));
app.use('/availability', require('./routes/availabilityRoutes'));
app.use('/checkIns', require('./routes/checkInRoutes'));
app.use('/workers', require('./routes/workerRoutes'));
app.use('/tasks', require('./routes/taskRoutes'));

//
app.use('/applicantstatuses', require('./routes/applicantStatusRoutes'));
app.use('/applicantprospects', require('./routes/applicantProspectRoutes'));
app.use('/assessmenttypes', require('./routes/assessmentTypeRoutes'));
app.use('/assessmentstatuses', require('./routes/assessmentStatusRoutes'));
app.use('/assessmentresults', require('./routes/assessmentResultRoutes'));
app.use('/jobroles', require('./routes/jobRoleRoutes'));
app.use('/staff', require('./routes/staffRoutes'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: 'Something went wrong'
    })
})




//app.use(bodyParser.json());
// app.get('/divisions', (req, res)=> {

//         res.send('Hello world')
// })


const PORT = process.env
app.listen(3001, ()=> {
    console.log('Server is running on 3001')
})


// app.get('/divisions', (req, res)=> {

//     const insert_Division = "SELECT * FROM Divisions";
//     //const insert_Division = "INSERT INTO `complex_db`.`job_role` (`role_Id`, `name`) VALUES ('3', 'Constructions'); ";
//     console.log('There is a problem somewhere, Moreme')
//     db.getConnection((err, connection) => {
//         //if(err) throw err
//         console.log(`Connected as Id ${connection.threadId}`);

//         connection.query(insert_Division, (err, rows) => {
//             connection.release()

//             if(!err)
//             {
//                 res.send(rows)
//             }
//             else 
//             {
//                 console.log('There is a problem somewhere, Moreme')
//                 console.log(err)
//             }
//         })
//     })
    
// })