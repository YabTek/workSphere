const express = require('express');
const router = express.Router();
const {createClientProfile,deleteClientProfile,updateClientProfile,getClientProfileById} = 
require('../controllers/clientController')

router.route('/').post(createClientProfile);
router.route('/:id').get(getClientProfileById);
router.route('/:id').delete(deleteClientProfile);
router.route('/:id').put(updateClientProfile);


module.exports = router;
