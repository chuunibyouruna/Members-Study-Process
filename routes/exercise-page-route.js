const express = require('express');

const router = express.Router();
const UserRouter = require('../controllers/user-controller');
const EceriseController = require('../controllers/exercise-controller');
router.get('/state',EceriseController.stateExercise);
router.get('/submit-exercise',EceriseController.submitExercise);
module.exports = router;