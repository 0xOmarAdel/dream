const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
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
    subtotal: { type: Number, required: true },
    shipping: { type: Number, default: 5 },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipping", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

function notEmptyValidator(value) {
  return value.trim().length > 0;
}

function phoneNumberValidator(value) {
  const phoneRegex = /^\d{8,13}$/;
  return phoneRegex.test(value);
}

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
