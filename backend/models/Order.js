const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  meals: [
    {
      mealId: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
      quantity: Number,
      size: String,
      price: Number,
    },
  ],
  address: {
    type: String,
    required: true,
    validate: [notEmptyValidator, "Address cannot be empty"],
  },
  phone: {
    type: String,
    required: true,
    validate: [
      {
        validator: phoneNumberValidator,
        message: "Invalid phone number",
      },
    ],
  },
});

function notEmptyValidator(value) {
  return value.trim().length > 0;
}

function phoneNumberValidator(value) {
  const phoneRegex = /^\d{8,13}$/;
  return phoneRegex.test(value);
}

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
