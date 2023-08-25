const express = require("express");
const router = express.Router();
const fetchUser = require('../middlewares/fetchuser')
const {createUser, loginUser, getUser} = require('../controller/userController');

router.post('/',createUser)
router.post('/login',loginUser)
router.post('/getuser',fetchUser,getUser)
module.exports = router;
