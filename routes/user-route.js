const express = require('express');

const router = express.Router();
const userRouter = require('../controllers/user-controller');

router.get('/',userRouter.index);

module.exports = router;