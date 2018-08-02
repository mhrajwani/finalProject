var Link                  = require("../models/link");
var Portfolio             = require("../models/portfolio");
var Watchlist             = require("../models/watchlist");
var Stock                 = require("../models/stock");
var request               = require("request");


module.exports = {

getGame:function(req,res){
    var symbol = "";
        Link.find(({}),function (err1, result1) {
            if(err1){
                console.log(err1);
            }
        Portfolio.find(({}),function (err2, result2) {
            if(err2){
                console.log(err2);
            }
        Watchlist.find(({}),function (err3, result3) {
            if(err3){
                console.log(err3);
            }
        Stock.find(({}),function (err4, result4) {
            if(err3){
                console.log(err4);
            }
            
            result3.forEach(function(wl){
                symbol = symbol+ wl.stock_symbol +",";

            })
            
            result4.forEach(function(wk){
                symbol = symbol+ wk.stock_name +",";

            })
            var url = "https://api.iextrading.com/1.0/stock/market/batch?symbols="+symbol+"&types=quote,news,chart&range=1m&last=5";
            request(url, function (error, response, body) {
            var sb = JSON.parse(body);
            res.render("game", {link : result1, portfolio : result2, watchlist:result3,sb:sb, game : result4});
        });
    });
});
});
});
},



postGame:function(req,res){
    var stock_name = req.body.stock_name;
    var quantity = req.body.quantity;
    var buying_price = req.body.buying_price;
    
    var user = {
        id: req.user._id,
        username: req.user.username
    };
    
    var newStock = {stock_name:stock_name, quantity:quantity,buying_price:buying_price, user:user};
    
    Stock.create(newStock, function(err, newCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/game");
        }
    });
},

postDelete:function (req,res){
    
    Stock.findById(req.params.id, function(err, stock){
        if(err){
            console.log(err);
        } else {
            stock.remove();
            res.redirect("/game");
        }
    }); 
     
 },

 postUpdate:function(req, res){
    Stock.findByIdAndUpdate(req.params.id, req.body.stock, function(err, updated){
       if(err){   
           res.redirect("/game");
       }  else {   
           res.redirect("/game");
       }
    });
 },

};


