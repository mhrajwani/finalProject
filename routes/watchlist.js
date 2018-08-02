var express             = require("express");
var router              = express.Router();
var isLoggedIn            = require("../middleware/log");
var watchlistController = require("../controllers/watchlist.js");

router.get("/watchlist",isLoggedIn, watchlistController.getShow);

router.post("/watchlist",isLoggedIn, watchlistController.postAll);

router.get("/watchlist/:id/update",isLoggedIn,watchlistController.getUpdate);

router.post("/watchlist/:id",isLoggedIn, watchlistController.postOne);

router.get("/watchlist/:id",isLoggedIn, watchlistController.getOne);
 
router.post("/watchlist/:id/delete",isLoggedIn, watchlistController.postDelete);

//send this is javascript file
router.get("/watchlist2/:id",isLoggedIn, watchlistController.getScript);

module.exports = router;