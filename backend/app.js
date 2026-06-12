const express = require("express");
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

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/products", (req, res) => {
  res.json(productsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
