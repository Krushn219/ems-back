const express = require("express");
const { LogIn } = require("../controller/LoginController");
const router = express.Router();

router.route("/login").post(LogIn);

module.exports = router;
