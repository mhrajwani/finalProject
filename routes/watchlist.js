var express             = require("express");
var router              = express.Router();
var Watchlist           = require("../models/watchlist");
var request = require("request");

router.get("/watchlist", function(req,res){
    res.render("watchlist/new");
});

router.post("/watchlist", function(req,res){
    var cn = req.body.cn;
    cn = cn.toUpperCase();
    var symbol = req.body.symbol;
    var tp = req.body.tp;
    var imd = req.body.imd;
    var an = req.body.an;
    
    var user = {
        id: req.user._id,
        username: req.user.username
    };
    
    var newWatchlist = {company_name:cn, stock_symbol:symbol,target_price:tp,important_dates:imd,additional_notes:an, user:user};
    
    Watchlist.create(newWatchlist, function(err, newCreated){
        if(err){
            console.log(err);
        } else {
            
            res.redirect("/main");
        }
    });
});


router.get("/watchlist/:id/update",function (req,res){
    Watchlist.findById(req.params.id, function(err, found){
        if(err){
            res.redirect("/main");
        } else {
            res.render("watchlist/update", {watchlist: found});
        }
    });
    
});

router.post("/watchlist/:id", function(req, res){

   Watchlist.findByIdAndUpdate(req.params.id, req.body.watchlist, function(err, updated){
      if(err){
          res.redirect("/main");
      }  else {
          res.redirect("/main");
      }
   });
});


router.get("/watchlist/:id", function(req, res){
    
    Watchlist.findById(req.params.id, function(err, fp){
        if(err){
            res.redirect("/main");
        }
        
        var symbol = fp.stock_symbol;
        var url = "https://api.iextrading.com/1.0/stock/"+ symbol + "/batch?types=quote,news,stats,company,logo,chart&range=1m&last=10";
        request(url, function (error, response, body) {
        var sb = JSON.parse(body);
        res.render("watchlist/show", {watchlist: fp, sb:sb});
        });
    });
 });
 
 router.post("/watchlist/:id/delete", function (req,res){
    
   Watchlist.findById(req.params.id, function(err, watchlist){
       if(err){
           console.log(err);
       } else {
           watchlist.remove();
           res.redirect("/main");
       }
   }); 
    
});

//send this is javascript file
router.get("/watchlist2/:id", function(req, res){
    
    Watchlist.findById(req.params.id, function(err, fp){
        if(err){
            res.redirect("/main");
        }
        
        var symbol = fp.stock_symbol;
        var url = "https://api.iextrading.com/1.0/stock/"+ symbol + "/chart";
        request(url, function (error, response, body) {
        var sb = JSON.parse(body);
        res.send(sb);
        });
    });
 });
 module.exports = router;