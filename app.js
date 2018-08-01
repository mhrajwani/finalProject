var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    flash                 = require('connect-flash'),
    LocalStrategy         = require("passport-local");
    
    
var portfolioRoutes       = require("./routes/portfolio"),
    linksRoutes           = require("./routes/link"),
    indexRoutes           = require("./routes/index"),
    gameRoutes            = require("./routes/game"),
    watchlistRoutes       = require("./routes/watchlist"),
    PORT = process.env.PORT || 8080;
    
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userdb";


mongoose.connect(MONGODB_URI);


var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Mohamed Rajwani",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use("/",indexRoutes);
app.use("/",portfolioRoutes);
app.use("/",linksRoutes);
app.use("/",watchlistRoutes);
app.use("/",gameRoutes);

app.listen(PORT,process.env.IP, function(){
    
    console.log("server has started on :" + PORT)
})