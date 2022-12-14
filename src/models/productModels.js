const mongoose = require("mongoose");

//*************************[πProduct Model Creationπ]**************************//
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is Required",
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: "Description is Required",
      trim: true,
    },
    price: {
      type: Number,
      required: "Price is Required",
    },
    currencyId: {
      type: String,
      required: "CurrencyId is Required",
      trim: true,
      dafault: "INR",
    },
    currencyFormat: {
      type: String,
      required: "CurrencyFormat is Required",
      trim: true,
      default: "βΉ",
    },
    isFreeShipping: {
      type: Boolean,
      default: false,
    },
    productImage: {
      type: String,
      required: "ProductImage is Required",
      trim: true,
    }, // s3 link
    style: {
      type: String,
      trim: true,
    },
    availableSizes: [
      {
        type: String,
        trim: true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"],
      },
    ],

    installments: {
      type: Number,
    },
    deletedAt: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//**********************[πConnection Creation & export modelπ]*****************//
module.exports = mongoose.model("Product", productSchema);

//πππππππ[Thank You Mr Dkyadav Product-Schema End]ππππππππ//
