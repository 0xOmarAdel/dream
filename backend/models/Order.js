const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  meals: [
    {
      mealId: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
      amount: Number,
      size: String,
      price: Number,
    },
  ],
  address: String,
  phone: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
