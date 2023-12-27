const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  title: String,
  description: String,
  options: [
    {
      size: String,
      price: Number,
    },
  ],
  image: String,
  categoryName: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
