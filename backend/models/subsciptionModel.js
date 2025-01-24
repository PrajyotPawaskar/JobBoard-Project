const mongoose = require('mongoose')

const subcriberSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    }
});

module.exports = mongoose.model('Subscription',subcriberSchema)