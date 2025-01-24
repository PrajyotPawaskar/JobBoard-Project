const express = require('express')
const { register, login, getData } = require('../controllers/userController')
const { protectRoute } = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/userdata', protectRoute, getData)

module.exports = router