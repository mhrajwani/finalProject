var express = require("express");
var router = express.Router();
var linkController = require("../controllers/link.js");

router.post("/links",linkController.postAll );

router.post("/link/:id",linkController.postOne);

module.exports = router;