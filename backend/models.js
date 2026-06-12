const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
