
/*var express = require('express');
var controller = require('../controllers/user-controller');

const router = express.Router();

router.get('/', controller.index);*/

const express = require('express');

const router = express.Router();
const userRouter = require('../controllers/user-controller');

router.get('/',userRouter.index);


module.exports = router;