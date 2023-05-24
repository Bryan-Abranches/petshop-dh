const express = require("express");

const LoginController = require("../controllers/LoginController");

const router = express.Router();

router.get("/", LoginController.showLogin);
router.post("/", LoginController.login)

module.exports = router;