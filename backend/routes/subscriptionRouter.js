const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const { subscribe, getSubscribers } = require('../controllers/subscriptionController');
const { roleAuth } = require('../middleware/roleauthMiddleware');
router.post('/', protectRoute, subscribe);
router.get('/subscribers', protectRoute, roleAuth, getSubscribers)
module.exports = router;