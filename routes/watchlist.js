var express             = require("express");
var router              = express.Router();
var watchlistController = require("../controllers/watchlist.js");

router.get("/watchlist", watchlistController.getShow);

router.post("/watchlist", watchlistController.postAll);

router.get("/watchlist/:id/update",watchlistController.getUpdate);

router.post("/watchlist/:id", watchlistController.postOne);

router.get("/watchlist/:id", watchlistController.getOne);
 
router.post("/watchlist/:id/delete", watchlistController.postDelete);

//send this is javascript file
router.get("/watchlist2/:id", watchlistController.getScript);

module.exports = router;