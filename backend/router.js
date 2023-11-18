const express = require("express");
const router = express.Router();
const MailController = require("./controller");

router.post("/", MailController.SendMailController);

module.exports = router;
