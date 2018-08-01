var express             = require("express");
var router              = express.Router();
var stockController     = require("../controllers/game.js");

router.get("/game", stockController.getGame);

router.post("/game", stockController.postGame);

router.post("/game/:id/delete", stockController.postDelete);


module.exports = router;