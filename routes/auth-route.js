
const express = require('express');

const router = express.Router();
const UserRouter = require('../controllers/user-controller');
const AuthRouter = require('../controllers/auth-controller')

router.get('/register', UserRouter.register);
router.post('/register', UserRouter.postRegister);
router.get('/login', AuthRouter.login);
router.post('/login', AuthRouter.postLogin);
router.get('/forgot-password',AuthRouter.forgotPassword)
router.post('/forgot-password',AuthRouter.postForgotPassword);
router.get('/reset-password/:token',AuthRouter.resetPassword);
router.post('/reset-password/:token',AuthRouter.postResetPassword);
module.exports = router;