const express = require('express');
const userRoute = require('./routes/userRouter');
const jobRoute = require('./routes/jobRouter')
const profileRoute = require('./routes/profileRouter')
const subscriberRoute = require('./routes/subscriptionRouter');
const connectDB = require('./config/db')
const cors = require('cors');

const app = express();
app.use(cors());
connectDB();
app.use(express.json());
app.use('/user', userRoute);
app.use('/profile', profileRoute);
app.use('/jobs', jobRoute);
app.use('/subscribe', subscriberRoute);
app.listen(3000, () => {
    console.log('Server running on port 3000');
})
