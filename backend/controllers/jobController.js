const Profile = require('../models/profileModel')
const Job = require("../models/jobModel");

// @desc Post a job
// @route jobs/postjob
// @access protected

const postJob = async (req, res) => {
    const { company, role, skills, experience, pay, location } = req.body;
    if (!company || !role || !skills || !experience || !pay || !location) {
        return res.status(400).json({
            message: "Please enter all fields"
        });
    }
    const job = await Job.create({ company, role, skills, experience, pay, location });

    if (job) {
        return res.status(201).json({
            "job": job
        })
    }
    else {
        return res.status(400).json({
            message: "Invalid Job detail"
        })
    }
}

// @desc Get Jobs List 
// @route jobs/getjobs
// @access protected

const getJob = async (req, res) => {
    const jobs = await Job.find();
    return res.status(200).json({
        "jobs": jobs
    })
}

// @desc Get Single Job data
// @route GET jobs/:jobId
// @access protected

const getsingleJob = async (req, res) => {
    try {
        const jobId = req.params.jobId;

        // Validate the jobId (optional)
        if (!jobId) {
            return res.status(400).json({ message: "Job ID is required" });
        }

        // Find the job by ID and populate the applications field
        const job = await Job.findById(jobId)
            .populate('applications.profile')
            .exec();

        // If no job is found, return a 404 response
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        // Return the job with populated applications
        return res.status(200).json({
            jobs: job
        });
    } catch (err) {
        // If there is any error in the process, catch it and return a 500 status with the error message
        console.error(err);
        return res.status(500).json({
            message: "An error occurred while fetching the job",
            error: err.message
        });
    }
};

// @desc Apply for a job
// @route POST jobs/:jobId
// @access protected

const applyJob = async (req, res) => {
    try {
        const jobId = req.params.jobId;
        const userId = req.user.id;

        console.log(jobId, userId);

        // Find the profile of the user
        const profile = await Profile.findOne({ "user": userId });
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        const profileId = profile.id;


        console.log("profileId",profileId);


        // Find the job by ID
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        console.log("job",job);
        

        // Check if the user has already applied to the job
        const profilePresent = job.applications.some(application => application.profile.toString() === profileId);
        if (profilePresent) {
            return res.status(400).json({
                message: "Already applied to this job"
            });
        }

        // Add the application
        job.applications.push({ profile: profileId });
        await job.save();

        // Add job to profile 
        profile.myJobs.push(jobId);
        await profile.save();

        return res.status(201).json({
            message: "Application submitted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "Something went wrong"
        });
    }
};

module.exports = { postJob, getJob, applyJob, getsingleJob }