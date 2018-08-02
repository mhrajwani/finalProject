var express             = require("express");
var router              = express.Router();
var isLoggedIn            = require("../middleware/log");
var portfolioController = require("../controllers/portfolio.js");

router.get("/portfolio",isLoggedIn, portfolioController.getShow);

router.post("/portfolio",isLoggedIn, portfolioController.postAll);

router.get("/portfolio/:id/update",isLoggedIn,portfolioController.getUpdate);

router.post("/portfolio/:id",isLoggedIn, portfolioController.postone);

router.get("/portfolio/:id",isLoggedIn, portfolioController.getOne);

 //will call this in script file
router.get("/portfolio2/:id",portfolioController.getScript);
  
module.exports = router;