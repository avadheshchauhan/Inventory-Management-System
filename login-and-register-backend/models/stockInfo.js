const mongoose = require('mongoose');

const stockInfo = mongoose.Schema({
  productname: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,

  },
  price: {
    type: Number,
    required: true,
  },
  totalprice: {
    type: Number,

  },
  totalQuantity: {
    type: Number,

  },
})
const StockInfo = mongoose.model('StockInfo', stockInfo);

module.exports = StockInfo;

