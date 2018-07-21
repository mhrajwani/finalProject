var mongoose = require("mongoose");

var portfolioSchema = new mongoose.Schema({
   cash: Number,
   stocks: Number,
   debts: Number,
   other_assets: Number,
   other_liabilities: Number,
   user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);