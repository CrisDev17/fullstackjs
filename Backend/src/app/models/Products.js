const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    productName: { type: String , maxLength: 255 , require: true},
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String }
  });

module.exports = mongoose.model('Product',Products);