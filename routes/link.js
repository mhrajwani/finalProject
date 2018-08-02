var express = require("express");
var router = express.Router();
var isLoggedIn            = require("../middleware/log");
var linkController = require("../controllers/link.js");

router.post("/links",isLoggedIn,linkController.postAll );

router.post("/link/:id",isLoggedIn,linkController.postOne);

module.exports = router;