const Profile = require('../models/profileModel');

// @desc Create a user Profile
// @route POST /profile/setprofile
// @access Protected 

const setProfile = async (req, res) => {
    const { name, email, phoneno, education, skills, experience, location } = req.body;
    const user = req.user?.id;

    // Trim and validate inputs properly
    if (![name, email, phoneno, education, skills, experience, location, user].every(field => typeof field === 'string' ? field.trim() : true)) {
        return res.status(400).json({ message: "Please enter all the fields properly" });
    }

    try {
        const profileExists = await Profile.findOne({ email: email.trim() });
        if (profileExists) {
            return res.status(400).json({ message: "Profile already exists for this user" });
        }

        const profile = await Profile.create({
            name: name.trim(),
            email: email.trim(),
            phoneno: phoneno.trim(),
            education: education.trim(),
            skills: skills.map(skill => skill.trim()).filter(Boolean),
            experience: Number(experience),
            location: location.map(loc => loc.trim()).filter(Boolean),
            user
        });
        res.status(201).json({ profile });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

// @desc get profile information 
// @route /profile/getinfo
// @access protected

const getProfileInfo = async (req, res) => {
    const profile = await Profile.findOne({ "user": req.user.id }).populate("myJobs");
    if (!profile) {
        return res.status(404).json({
            message: "Profile not found"
        })
    }
    return res.status(200).json({
        profile: profile
    });
}

// @desc Deleting Profile
// @route profile/delete
// @access protected

const deleteProfile = async (req, res) => {
    try {
        const user = req.user.id; // Get user ID from authenticated request

        // Find and delete the profile in one step
        const profile = await Profile.findOneAndDelete({ user });

        if (!profile) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }

        return res.status(200).json({
            message: "Profile deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting profile:", error);
        return res.status(500).json({
            message: "Failed to delete profile"
        });
    }
};

// @desc Updating the Profile
// @route PUT profile/update
// @access protected

const updateProfile = async (req, res) => {
    const user = req.user.id;
    try {
        const updatedProfile = await Profile.findOneAndUpdate({ "user": user }, { $set: req.body }, { new: true });
        if (!updatedProfile) {
            return res.status(404).json({
                message: "Profile not found"
            })
        }
        return res.status(200).json({ profile: updatedProfile })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

module.exports = { setProfile, deleteProfile, updateProfile, getProfileInfo }