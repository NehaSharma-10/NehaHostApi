require('dotenv').config()
const connectDB = require("./db/connect");
const Product = require("./models/product");
const dataJson = require('./product.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(dataJson);
    console.log("success");
  } catch (err) {
    console.log(err.message);
  }
};

start(); 