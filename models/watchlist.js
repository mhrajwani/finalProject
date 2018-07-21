var mongoose = require("mongoose");

var watchlistSchema = new mongoose.Schema({
   company_name: String,
   stock_symbol: String,
   target_price: String,
   important_dates:String,
   additional_notes: String,
   user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
});

module.exports = mongoose.model("Watchlist", watchlistSchema);