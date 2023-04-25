require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const PORT = process.env.PORT || 8080;

const product_route = require("./routes/products.js");

app.get("/", (req, res) => {
  res.send("Hi I am live");
});

//middleware or to set router
app.use("/api/products", product_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL)
    app.listen(PORT, () => {
      console.log(`${PORT} yes i am connected`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
