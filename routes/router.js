const express = require('express');

const router = express.Router();

const userRouter = require('./user-route');
const adminRouter = require('./admin-route');
const guestRouter = require('./guest-route');
const authRouter = require('./auth-route');
const homeRouter = require("./home-route");

router.use('/users', userRouter);
router.use('/admin', adminRouter);
router.use('/', guestRouter);
router.use('/auth', authRouter);
router.use("/home", homeRouter);

module.exports = router;