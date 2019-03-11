const express = require('express');

const router = express.Router();
const UserController = require('../controllers/user-controller');

// router.get('/state/:course',UserController.stateExercise);
router.get('/:course/:lession', UserController.stateExercise);

router.post('/post-link',UserController.postExcercise);
module.exports = router;
