const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  mealId: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
  rating: Number,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
