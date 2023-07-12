const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users.controller');
const userController = new UserController();

router.post('/signup', userController.signupUsers);
router.post('/login', userController.loginUsers);
module.exports = router;
