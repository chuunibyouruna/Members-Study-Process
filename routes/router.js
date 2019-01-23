const express = require('express');

const router = express.Router();

const userRouter = require('./user-route');
const adminRouter = require('./admin-route');
const guestRouter = require('./guest-route');

router.use('/users',userRouter);
router.use('/admin',adminRouter);
router.use('/',guestRouter);

module.exports = router;