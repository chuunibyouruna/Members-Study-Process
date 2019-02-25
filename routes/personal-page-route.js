const express = require('express');

const router = express.Router();
const UserRouter = require('../controllers/user-controller');

router.get("/",UserRouter.index);
router.post("/edit-profile",UserRouter.postEditProfile);
router.get("/edit-profile/:id",UserRouter.editProfile); 
router.get('/:id/score', UserRouter.getScore);
router.get('/score', UserRouter.getScores);


module.exports = router;