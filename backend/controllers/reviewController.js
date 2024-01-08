const { default: mongoose } = require("mongoose");
const Review = require("../models/Review");
const Meal = require("../models/Meal");

const createReview = async (req, res) => {
  try {
    const { rating, mealId } = req.body;
    const userId = req.user._id;

    if (!rating || !mealId) {
      return res
        .status(400)
        .json({ error: "Both rating and mealId are required" });
    }

    const user = req.user;
    const meal = await Meal.findById(mealId);

    if (!user || !meal) {
      return res.status(404).json({ error: "User or Meal not found" });
    }

    const existingReview = await Review.findOne({ user: userId, meal: mealId });

    if (existingReview) {
      return res
        .status(400)
        .json({ error: "User has already reviewed this meal" });
    }

    const newReview = await Review.create({
      user: userId,
      meal: mealId,
      rating,
    });

    meal.reviews.push(newReview);
    await meal.save();

    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error in createReview:", error);
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: "Resource not found" });
    } else if (error.response && error.response.status === 400) {
      return res.status(400).json({ error: "Bad request" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleReview = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid review ID" });
    }

    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    const sanitizedReview = {
      _id: review._id,
      userId: review.userId,
      mealId: review.mealId,
      rating: review.rating,
    };

    res.status(200).json(sanitizedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editReview = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "Unauthorized to edit this review" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this review" });
    }

    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  editReview,
  deleteReview,
};
