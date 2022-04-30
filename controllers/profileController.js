const Profile = require('../models/Profile')

exports.getAllProfiles = async (req, res, next) => {
 
    try {

        const [profiles, _] = await Profile.getAllProfiles();
        res.status(200).json(profiles);
        
    } catch (error) {
        console.log(error)
        next(error)
    }

}

exports.getProfileById = async (req, res, next) => {

    try {

        const profile_id = req.params.id;
        const [profile, _] = await Profile.getProfileById(profile_id);
        res.status(200).json(profile);
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.createProfile = async (req, res, next) => {

    try {
        
        const {Applicant_Id, Worker_Id, Registration_Id} = req.body;
        const profile_instance = new Profile(Applicant_Id, Worker_Id, Registration_Id);
        const [] = await profile_instance.save();
        res.status(201).json({message: 'Profile successfully created'});

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editProfileById = async (req, res, next) => {

    try {
        
        const {id} = req.body; // want to extract the ID and NEW INFO from this route
        const [profile, _] = await Profile.editProfileById(profile_id);
        res.status(200).json(profile)

    } catch (error) {
        console.log(error)
        next(error)
    }

}

exports.deleteProfileById = async (req, res, next) => {

    try {
        const profile_id = req.params.id;
        const [profile, _] = await Profile.deleteProfileById(profile_id);
        res.status(200).json(profile);

    } catch (error) {
        console.log(error)
        next(error)
    }
}