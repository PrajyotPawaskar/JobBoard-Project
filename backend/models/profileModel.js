const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    phoneno: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{10}$/
    },
    education: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true,
        default: []
    },
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: [String],
        required: true,
        default: []
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    myJobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job'
        }
    ]
})

module.exports = mongoose.model('Profile', profileSchema)