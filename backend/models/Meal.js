const mongoose = require("mongoose");
const Review = require("./Review");

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
  reviews: [Review.schema],
  rating: [{ type: Number, default: 0 }],
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
