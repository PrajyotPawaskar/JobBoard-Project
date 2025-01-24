const mongoose = require('mongoose')

URL = "mongodb+srv://prajyotpawaskar2001:12345@cluster0.tsac4.mongodb.net/jobBoard?retryWrites=true&w=majority&appName=Cluster0"
// URL = "mongodb+srv://prajyotpawaskar2001:12345@cluster0.tsac4.mongodb.net/jobs"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URL)
        console.log(`Database connected`);
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB;