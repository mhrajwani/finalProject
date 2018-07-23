var express               = require("express");
var router                = express.Router();
var isLoggedIn            = require("../middleware/log");
var indexController       = require("../controllers/index.js");

router.get("/",indexController.home );

router.get("/main",isLoggedIn,indexController.main);

router.get("/login", indexController.getLogin);

router.get("/register", indexController.getRegister);

router.post("/register", indexController.postRegister);

router.post("/login", indexController.postLogin);

router.get("/logout", indexController.getLogout);

module.exports = router;