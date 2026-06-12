const express = require("express");
const mongoose = require("mongoose");

const { Product } = require("./models");

const productsData = require("./productsData");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// setup cors to allow requests from the frontend port 5173
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/productsDB",
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/products", (req, res) => {
  res.json(productsData);
});

app.get("/product", (req, res) => {
  const body = req.body;
  const productId = body.productId;

  const product = productsData.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const filteredProducts = productsData.filter(
    (product) => product.category === category,
  );
  res.json(filteredProducts);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToDatabase();
});

module.exports = app;
