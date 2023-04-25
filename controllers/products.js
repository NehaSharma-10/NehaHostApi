const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    city,
    car,
    quote,
    phone_price,
  } = req.query;
  const queryObject = {};

  if (first_name) {
    queryObject.first_name = { $regex: first_name, $options: "i" };
  }
  if (last_name) {
    queryObject.last_name = { $regex: last_name, $options: "i" };
  }
  if (email) {
    queryObject.email = { $regex: email, $options: "i" };
  }
  if (gender) {
    queryObject.gender = { $regex: gender, $options: "i" };
  }
  if (city) {
    queryObject.city = { $regex: city, $options: "i" };
  }
  if (car) {
    queryObject.car = { $regex: car, $options: "i" };
  }
  if (quote) {
    queryObject.quote = { $regex: quote, $options: "i" };
  }
  if (phone_price) {
    queryObject.phone_price = { $regex: phone_price, $options: "i" };
  }
  console.log(queryObject);
  const myData = await Product.find(queryObject);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts };
