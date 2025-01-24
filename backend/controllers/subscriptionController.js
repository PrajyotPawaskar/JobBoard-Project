const Subscription = require('../models/subsciptionModel');
const User = require('../models/userModel');

// @desc Add user email to subscription db to subscribe for email notifications
// @route POST /subscribe 
// @access protected

const subscribe = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }
        const userEmail = user.email;
        if (!userEmail) {
            return res.status(400).json({
                message: "User email not found"
            })
        }

        // Check if already subscribed

        const emailExists = await Subscription.findOne({ "email": userEmail });
        if (emailExists) {
            return res.status(400).json({
                message: "Subscription already added"
            })
        }
        const newEntry = await Subscription.create({ "email": userEmail });
        if (newEntry) {
            return res.status(201).json({
                message: "Subscription added"
            })
        }
        else {
            return res.status(400).json({
                message: "Subscription not added"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong"
        })
    }
}

// @desc Get all subscibers
// @route GET /subscribe/subscribers
// @access protected

const getSubscribers = async (req, res) => {
    const subscriberList = await Subscription.find({});
    const list = [];
    for(i=0;i<subscriberList.length;i++){
        const arr = subscriberList[i].email;
        list.push(arr);
    }
    console.log(list);
    try {
        if (!subscriberList) {
            return res.status(400).json({
                message: "No subscribers found"
            })
        }
        return res.status(200).json({
            subscribers: subscriberList
        })
    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong"
        })
    }
}


module.exports = { subscribe, getSubscribers };