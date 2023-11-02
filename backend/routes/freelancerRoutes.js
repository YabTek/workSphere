const express = require('express');
const router = express.Router();
const {createFreelancerProfile,deleteFreelancerProfile,updateFreelancerProfile,getFreelancerProfileById} = 
require('../controllers/freelancerController')

router.route('/').post(createFreelancerProfile);
router.route('/:id').get(getFreelancerProfileById);
router.route('/:id').delete(deleteFreelancerProfile);
router.route('/:id').put(updateFreelancerProfile);


module.exports = router;
