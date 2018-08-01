var mongoose = require("mongoose");

var stockSchema = new mongoose.Schema({
   stock_name: String,
   quantity: Number,
   buying_price: Number,
   created:  { type : Date, default: Date.now },
   user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   
});

module.exports = mongoose.model("Stock", stockSchema);