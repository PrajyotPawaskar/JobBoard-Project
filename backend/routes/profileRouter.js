const express = require('express');
const router = express.Router();
const { setProfile, deleteProfile, updateProfile, getProfileInfo } = require('../controllers/profileController');
const { protectRoute } = require('../middleware/authMiddleware')
router.post('/setprofile', protectRoute, setProfile);
router.delete('/delete', protectRoute, deleteProfile);
router.put('/update', protectRoute, updateProfile);
router.get('/getinfo', protectRoute, getProfileInfo)
module.exports = router;