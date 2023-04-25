const mongoose = require("mongoose");

// const incomeSchema = new mongoose.Schema({
//     return ;
// });

const productSchema = new mongoose.Schema({
  
  first_name: {
    type: String,
    required: true,
    unique: true,
  },
  last_name: {
    type: String,
    required: true,
    unique: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
    unique: true,
  },
  income: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    unique: true,
  },

  car: {
    type: String,
    required: true,
    unique: true,
  },
  quote: {
    type: String,
    required: true,
    unique: true,
  },
  phone_price: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
