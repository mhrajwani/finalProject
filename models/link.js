var mongoose = require("mongoose");

var linkSchema = new mongoose.Schema({
   name: String,
   address: String,
   user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
});

module.exports = mongoose.model("Link", linkSchema);