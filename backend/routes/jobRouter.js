const express = require('express')
const { protectRoute } = require('../middleware/authMiddleware');
const { postJob, getJob, applyJob, getsingleJob } = require('../controllers/jobController');
const { roleAuth } = require('../middleware/roleauthMiddleware');
const router = express.Router()
router.post('/postjob', protectRoute, roleAuth, postJob);
router.get('/getjobs', protectRoute, getJob);
router.post('/:jobId', protectRoute, applyJob);
router.get('/:jobId', protectRoute, getsingleJob);

module.exports = router