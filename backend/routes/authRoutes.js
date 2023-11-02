const express = require('express');
const router = express.Router();
const {registerUser, loginUser, forgetPassword, resetPassword} = 
require('../controllers/authController')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/forgetPassword').post(forgetPassword);
router.route('/resetPassword').post(resetPassword);


module.exports = router;
