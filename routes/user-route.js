const express = require('express');

const router = express.Router();

const exerciseRouter = require('./exercise-page-route');
const gradingRouter = require('./grading-page-route');
const membersRouter = require('./members-page-route');
const personalRouter = require('./personal-page-route');
const homepageRouter = require('./homepage-route');


router.use('/exercise',exerciseRouter);
router.use('/grading',gradingRouter);
router.use('/members',membersRouter);
router.use('/homepage',homepageRouter);
router.use('/personal',personalRouter); // <- this route with be change to :id after complete login


module.exports = router;  