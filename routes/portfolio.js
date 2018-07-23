var express             = require("express");
var router              = express.Router();
var portfolioController = require("../controllers/portfolio.js");

router.get("/portfolio", portfolioController.getShow);

router.post("/portfolio", portfolioController.postAll);

router.get("/portfolio/:id/update",portfolioController.getUpdate);

router.post("/portfolio/:id", portfolioController.postone);

router.get("/portfolio/:id", portfolioController.getOne);

 //will call this in script file
router.get("/portfolio2/:id",portfolioController.getScript);
  
module.exports = router;