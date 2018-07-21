var express               = require("express");
var router                = express.Router();
var User                  = require("../models/user");
var Link                  = require("../models/link");
var Portfolio             = require("../models/portfolio");
var Watchlist             = require("../models/watchlist");
var passport              = require("passport");
var isLoggedIn            = require("../middleware/log");
var request               = require("request");


router.get("/", function(req,res){
    
    res.render("home");
});

router.get("/main",isLoggedIn,function(req,res){
    
       
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

            })
            var url = "https://api.iextrading.com/1.0/stock/market/batch?symbols="+symbol+"&types=quote,news,chart&range=1m&last=5";
            request(url, function (error, response, body) {
            var sb = JSON.parse(body);
            res.render("main", {link : result1, portfolio : result2, watchlist:result3,sb:sb});
        });
    });
});
});
});

router.get("/login", function(req,res){
    
    res.render("login");
    
});

router.get("/register", function(req,res){
    
    res.render("register");
    
});
router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/main");
        });
    });
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/main",
    failureRedirect: "/login"
}) ,function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


module.exports = router;