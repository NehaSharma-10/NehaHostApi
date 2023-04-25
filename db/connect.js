// const { default: mongoose } = require('mongoose');
const mongoose = require("mongoose");
// const MONGODB_URL = require('./.env');


const connectDB = (uri) => {
    console.log('connected db');
  return mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;