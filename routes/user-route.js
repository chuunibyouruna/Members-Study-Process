var express = require('express');
var controller = require('../controllers/user-controller');

const router = express.Router();

router.get('/', controller.index);

module.exports = router;