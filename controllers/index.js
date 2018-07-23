var User                  = require("../models/user");
var Link                  = require("../models/link");
var Portfolio             = require("../models/portfolio");
var Watchlist             = require("../models/watchlist");
var passport              = require("passport");
var request               = require("request");

module.exports = {

home: function(req,res){
    
    res.render("home");
},

main: function(req,res){
    
       
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
            
            var symbol = "";
            result3.forEach(function(wl){
                symbol = symbol+ wl.stock_symbol +",";

            });
            var url = "https://api.iextrading.com/1.0/stock/market/batch?symbols="+symbol+"&types=quote,news,chart&range=1m&last=5";
            request(url, function (error, response, body) {
            var sb = JSON.parse(body);
            res.render("main", {link : result1, portfolio : result2, watchlist:result3,sb:sb});
        });
    });
});
});
},

getLogin: function(req,res){
    
    res.render("login");
    
},

getRegister: function(req,res){
    
    res.render("register");
    
},

postRegister: function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/main");
        });
    });
},

postLogin: passport.authenticate("local", {
    successRedirect: "/main",
    failureRedirect: "/login"
}) ,function(req, res){
},

getLogout: function(req, res){
    req.logout();
    res.redirect("/");
},

};