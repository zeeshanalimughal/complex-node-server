const JobRole = require('../models/JobRole')

exports.getAllJobRoles = async (req, res, next) => {

    try {
        const [jobRoles, _] = await JobRole.getAllJobRoles(); 
        res.status(200).json(jobRoles)
    } catch (error) {
        console.log(error)
        next(error)
    } 
}