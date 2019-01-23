const express = require("express");
const router = express.Router();
const controller = require("../controllers/user-controller");
router.get("/",controller.index);
router.post("/edit-profile",controller.postEditProfile);
router.get("/edit-profile/:id",controller.editProfile);
module.exports = router;