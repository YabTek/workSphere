const express = require('express');
const router = express.Router();
const {createJob,deleteJob,updateJob,getAllJobs, getJobById} = 
require('../controllers/jobController')

router.route('/').post(createJob);
router.route('/').get(getAllJobs);
router.route('/:id').get(getJobById);
router.route('/:id').delete(deleteJob);
router.route('/:id').put(updateJob);


module.exports = router;
