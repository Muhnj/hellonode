const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  produceName: {
    type: String,
  },
  category: {
    type: String,
    trim: true,
  },
  quantity: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Sale", SaleSchema);
