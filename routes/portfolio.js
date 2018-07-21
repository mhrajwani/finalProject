var express             = require("express");
var router              = express.Router();
var Portfolio           = require("../models/portfolio");

router.get("/portfolio", function(req,res){
    res.render("portfolio/new");
});

router.post("/portfolio", function(req,res){
    var cash = req.body.cash;
    var stock = req.body.stock;
    var debts = req.body.debt;
    var other_assets = req.body.asset;
    var other_liabilities = req.body.liabilities;
    
    var user = {
        id: req.user._id,
        username: req.user.username
    };
    
    var newPortfolio = {cash:cash, stocks:stock,debts:debts,other_assets:other_assets,other_liabilities:other_liabilities, user:user};
    
    Portfolio.create(newPortfolio, function(err, newCreated){
        if(err){
            console.log(err);
        } else {
            
            res.redirect("/main");
        }
    });
});


router.get("/portfolio/:id/update",function (req,res){
    Portfolio.findById(req.params.id, function(err, found){
        if(err){
            res.redirect("/main");
        } else {
            res.render("portfolio/update", {portfolio: found});
        }
    });
    
});

router.post("/portfolio/:id", function(req, res){

   Portfolio.findByIdAndUpdate(req.params.id, req.body.portfolio, function(err, updated){
      if(err){
          res.redirect("/main");
      }  else {
          res.redirect("/main");
      }
   });
});


router.get("/portfolio/:id", function(req, res){
    Portfolio.findById(req.params.id, function(err, fp){
        if(err){
            res.redirect("/main");
        } else {
            res.render("portfolio/show", {portfolio: fp});
        }
    })
 });

 //will call this in script file
 router.get("/portfolio2/:id", function(req, res){
    Portfolio.findById(req.params.id, function(err, fp){
        if(err){
            res.redirect("/main");
        } else {
            res.send(fp);
        }
    })
 });
 
 module.exports = router;