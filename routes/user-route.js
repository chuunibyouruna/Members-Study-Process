/*const controller = require("../controllers/user-controller");
router.get("/",controller.index);
router.post("/edit-profile",controller.postEditProfile);
router.get("/edit-profile/:id",controller.editProfile);/*

/*var express = require('express');
var controller = require('../controllers/user-controller');

const router = express.Router();

router.get('/', controller.index);*/

const express = require('express');

const router = express.Router();

const exerciseRouter = require('./exercise-page-route');
const gradingRouter = require('./grading-page-route');
const membersRouter = require('./members-page-route');
const personalRouter = require('./personal-page-route');


router.use('/exercise',exerciseRouter);
router.use('/grading',gradingRouter);
router.use('/members',membersRouter);
router.use('/personal',personalRouter); // <- this route with be change to :id after complete login


module.exports = router;