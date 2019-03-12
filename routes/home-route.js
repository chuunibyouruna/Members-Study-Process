const express = require('express');
const router = express.Router();

const { index } = require("../controllers/user-controller.js");

router.get("/", function (req, res) {
    res.render('home/index', { title: 'Coders.tokyo Cần Thơ - Trang chủ' });
})

module.exports = router;