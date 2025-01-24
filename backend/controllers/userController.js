const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config()

// @desc Register a new user
// @route POST user/register
// @access Public

const register = async (req, res) => {
    const { email, password, role } = req.body;
    if ( !email ||  !password || !role ) {
        return res.status(400).json({ message: 'Please add all fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({
        email,
        password: hashedPassword,
        role
    });

    if (newUser) {
        return res.status(201).json({ newUser });
    } else {
        return res.status(400).json({ message: 'Invalid user data' });
    }
};

// @desc User login
// @route POST user/login
// @access Public

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
        user : {
            _id: user._id,
            email: user.email,
            role: user.role
        },
        token: generateToken(user._id),
    });
};

// @desc A route which is private
// @route GET user/userdata
// @access Protected

const getData = async (req, res) => {
    res.status(200).json(req.user)
}       

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, 
        process.env.JWT_KEY
        , { expiresIn: '30d' });
};

module.exports = {
    register,
    login,
    getData
};
