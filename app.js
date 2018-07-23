var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local");
    
    
var portfolioRoutes       = require("./routes/portfolio"),
    linksRoutes           = require("./routes/link"),
    indexRoutes           = require("./routes/index"),
    watchlistRoutes       = require("./routes/watchlist");
    
mongoose.connect("mongodb://ucfapp:hpl1940t@ds243441.mlab.com:43441/ucfstockapp");

var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Mohamed Rajwani",
    resave: false,
    saveUninitialized: false
}));

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

app.listen(process.env.PORT,process.env.IP, function(){
    
    console.log("server has started on :")
})