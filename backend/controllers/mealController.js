const Meal = require("../models/Meal");
const Review = require("../models/Review");

const createMeal = async (req, res) => {
  try {
    const newMeal = await Meal.create(req.body);
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleMeal = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editMeal = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedMeal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMeal = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMeal = await Meal.findByIdAndDelete(id);

    if (!deletedMeal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.status(200).json(deletedMeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const rateMeal = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  const userId = req.user._id;
  try {
    const meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    const existingReview = await Review.findOne({ user: userId, meal: id });

    if (existingReview) {
      return res.status(400).json({ error: "User already rated this meal" });
    }

    const newReview = new Review({
      user: userId,
      meal: id,
      rating: rating,
    });

    await newReview.save();

    meal.reviews.push(newReview);
    await meal.save();

    res.status(200).json({ message: "Rating added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMealRatingInfo = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Meal.findById(id).populate("reviews");

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    const totalRatings = meal.reviews.length;
    const averageRating = totalRatings
      ? meal.reviews.reduce((sum, review) => sum + review.rating, 0) /
        totalRatings
      : 0;

    const stars = [0, 0, 0, 0, 0];
    meal.reviews.forEach((review) => {
      stars[review.rating - 1]++;
    });

    res.status(200).json({
      averageRating,
      totalRatings,
      stars,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMeal,
  getAllMeals,
  getSingleMeal,
  editMeal,
  deleteMeal,
  rateMeal,
  getMealRatingInfo,
};
