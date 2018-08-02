var express             = require("express");
var router              = express.Router();
var isLoggedIn            = require("../middleware/log");
var stockController     = require("../controllers/game.js");

router.get("/game",isLoggedIn, stockController.getGame);

router.post("/game",isLoggedIn, stockController.postGame);

router.post("/game/:id/delete",isLoggedIn, stockController.postDelete);

router.post("/game/:id",isLoggedIn, stockController.postUpdate);


module.exports = router;