const express = require('express');
const router = express.Router();

const controller = require('../controllers/user-controller');

router.get('/:id/score', controller.getScore);

router.get('/score', controller.getScores);
module.exports = router;