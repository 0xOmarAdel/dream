const Meal = require("../models/Meal");
const Review = require("../models/Review");
const Category = require("../models/Category");

const createMeal = async (req, res) => {
  const { categoryName, ...mealData } = req.body;

  try {
    let category = await Category.findOne({ title: categoryName });

    if (!category) {
      category = await Category.create({ title: categoryName });
    }

    mealData.categoryName = categoryName;

    const existingMeal = await Meal.findOne(mealData);

    if (existingMeal) {
      return res
        .status(400)
        .json({ error: "Meal with the same data already exists." });
    }

    const newMeal = await Meal.create(mealData);
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMeals = async (req, res) => {
  try {
    const {
      featured,
      search,
      category,
      rating,
      size,
      minPrice,
      maxPrice,
      page,
      limit = 24,
    } = req.query;

    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const query = {
      ...(featured === "true" && { featured: true }),
      ...(search && {
        $or: [
          { title: { $regex: new RegExp(search, "i") } },
          { description: { $regex: new RegExp(search, "i") } },
        ],
      }),
      ...(category && {
        categoryName: capitalizeFirstLetter(category.toLowerCase()),
      }),
      ...(size && {
        "options.size": capitalizeFirstLetter(size.toLowerCase()),
      }),
      ...(minPrice && { "options.price": { $gte: parseFloat(minPrice) } }),
      ...(maxPrice && { "options.price": { $lte: parseFloat(maxPrice) } }),
    };

    let meals;

    if (rating) {
      meals = await Meal.find(query)
        .populate("reviews")
        .then((meals) =>
          meals.filter((meal) => {
            const averageRating =
              meal.reviews && meal.reviews.length
                ? meal.reviews.reduce((sum, review) => sum + review.rating, 0) /
                  meal.reviews.length
                : 0;

            if (parseFloat(rating) % 1 === 0) {
              return Math.round(averageRating) === parseFloat(rating);
            } else {
              return (
                averageRating >= parseFloat(rating) &&
                averageRating < parseFloat(rating) + 1
              );
            }
          })
        );
    } else {
      meals = await Meal.find(query).populate("reviews");
    }

    const totalMeals = meals.length;
    const totalPages = Math.ceil(totalMeals / limit);

    let paginatedMeals;

    if (page) {
      paginatedMeals = meals.slice((page - 1) * limit, page * limit);
    } else {
      paginatedMeals = meals;
    }

    const mealsWithAverageRating = paginatedMeals.map((meal) => ({
      ...meal.toObject({ virtuals: true }),
      rating:
        meal.reviews && meal.reviews.length
          ? meal.reviews.reduce((sum, review) => sum + review.rating, 0) /
            meal.reviews.length
          : 0,
    }));

    res.status(200).json({
      meals: mealsWithAverageRating,
      totalPages,
      totalMeals,
    });
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

const editRate = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  const userId = req.user._id;
  try {
    const meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    let existingReview = await Review.findOne({ user: userId, meal: id });

    if (existingReview) {
      existingReview.rating = rating;
      await existingReview.save();

      return res.status(200).json({ message: "Rating updated successfully" });
    } else {
      const newReview = new Review({
        user: userId,
        meal: id,
        rating: rating,
      });

      await newReview.save();

      meal.reviews.push(newReview);
      await meal.save();

      return res.status(200).json({ message: "Rating added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMealRatingInfo = async (req, res) => {
  try {
    const mealId = req.params.mealId;

    const reviews = await Review.find({ mealId });

    const ratings = Array.from({ length: 5 }, (_, index) => ({
      value: 5 - index,
      rating: 0,
    }));

    reviews.forEach((review) => {
      const index = 5 - review.rating;
      ratings[index].rating += 1;
    });

    res.status(200).json(ratings);
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
  editRate,
  getMealRatingInfo,
};
