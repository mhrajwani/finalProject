var Link    = require("../models/link");

module.exports = {
    postAll: function (req, res){
    var name = req.body.link;
    name = name.toUpperCase();
    var address = req.body.address;
    var user = {
        id: req.user._id,
        username: req.user.username
    };
    var newLink = {name:name, address:address, user:user};
    
    Link.create(newLink, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            
            res.redirect("/main");
        }
    });
},

postOne: function (req,res){
    
   Link.findById(req.params.id, function(err, link){
       if(err){
           console.log(err);
       } else {
           link.remove();
           res.redirect("/main");
       }
   }); 
    
},
    
    
    
    
    
};