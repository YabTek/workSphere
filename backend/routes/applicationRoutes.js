const express = require('express');
const router = express.Router();
const {createApplication,deleteApplication,updateApplicationStatus,getApplicationById} = 
require('../controllers/applicationController')

router.route('/').post(createApplication);
router.route('/:id').get(getApplicationById);
router.route('/:id').delete(deleteApplication);
router.route('/:id').put(updateApplicationStatus);


module.exports = router;
