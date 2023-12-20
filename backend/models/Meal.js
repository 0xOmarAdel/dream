const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  options: [
    {
      size: String,
      price: Number,
    },
  ],
  image: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
