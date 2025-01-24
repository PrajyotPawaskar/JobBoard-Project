const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    pay: {
        type: Number,
        required: true
    },
    location: {
        type: [String],
        required: true
    },
    applications: [
        {
            profile: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Profile'
            },
            appliedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ]
})

module.exports = mongoose.model('Job', jobSchema)