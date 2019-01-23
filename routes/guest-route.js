const express = require('express');

const router = express.Router();

const homePageRouter = require('./homepage-route');


router.use('/',homePageRouter);


module.exports = router;