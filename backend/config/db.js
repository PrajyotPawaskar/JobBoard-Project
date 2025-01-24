const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
// URL = "mongodb+srv://prajyotpawaskar2001:12345@cluster0.tsac4.mongodb.net/jobBoard?retryWrites=true&w=majority&appName=Cluster0"
// URL = "mongodb+srv://prajyotpawaskar2001:12345@cluster0.tsac4.mongodb.net/jobs"
URL = process.env.MONGODB_URL
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URL)
        console.log(`Database connected`);
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB;