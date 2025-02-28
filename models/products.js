const mongoose = require("mongoose");

//Schema for the collection products

let schemaProduct = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

//export
let Products = (module.exports = mongoose.model("products", schemaProduct));

// API to find a product by _id
module.exports.getProductByID = (query, callback) => {
  let filter = { _id: query };
  Products.findById(filter, callback);
};

// API to delete a product by _id
module.exports.deleteProduct = (query, callback) => {
  let filter = { _id: query };
  Products.deleteOne(filter, callback);
};

// API to modify a product using _id
module.exports.modifyProduct = (query, product, callback) => {
  let filter = { _id: query };
  let options = {};
  let newProduct = {
    productName: product.productName,
    type: product.type,
    price: product.price,
    desc: product.desc,
  };
  Products.findOneAndUpdate(filter, newProduct, options, callback);
};