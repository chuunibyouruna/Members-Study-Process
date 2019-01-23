const express = require('express');

const router = express.Router();
const UserRouter = require('../controllers/user-controller');

router.get('/', UserRouter.indexMembersPage);

module.exports = router;