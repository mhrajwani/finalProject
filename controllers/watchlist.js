var Watchlist           = require("../models/watchlist");
var request             = require("request");

module.exports = {
    
    getShow:function(req,res){
    res.render("watchlist/new");
},
    
    
    postAll:function(req,res){
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
},
    
    
    
    getUpdate:function (req,res){
    Watchlist.findById(req.params.id, function(err, found){
        if(err){
            res.redirect("/main");
        } else {
            res.render("watchlist/update", {watchlist: found});
        }
    });
    
},
    
    
    
    
    postOne:function(req, res){
    Watchlist.findByIdAndUpdate(req.params.id, req.body.watchlist, function(err, updated){
      if(err){
          res.redirect("/main");
      }  else {
          res.redirect("/main");
      }
   });
},
    
    
    
    getOne:function(req, res){
    
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
 },
    
    
    
    postDelete:function (req,res){
    
   Watchlist.findById(req.params.id, function(err, watchlist){
       if(err){
           console.log(err);
       } else {
           watchlist.remove();
           res.redirect("/main");
       }
   }); 
    
},
    
    
    
    getScript:function(req, res){
    
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
 },
    
};

