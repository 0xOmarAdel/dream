const Meal = require("../models/Meal");

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

module.exports = {
  createMeal,
  getAllMeals,
  getSingleMeal,
  editMeal,
  deleteMeal,
};
