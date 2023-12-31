const Order = require("../models/Order");
const Review = require("../models/Review");
const User = require("../models/User");
const yup = require("yup");

const userUpdateSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const reviewWithOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    const userOrders = await Order.find({
      userId,
      status: "Delivered",
    }).populate("meals.mealId");

    const uniqueMealIds = new Set();
    const mealsOfOrders = [];

    for (const order of userOrders) {
      for (const meal of order.meals) {
        const mealIdObject = meal.mealId.toObject();

        const userReview = mealIdObject.reviews.find(
          (review) => String(review.user) === String(userId)
        );

        const mealObject = {
          _id: mealIdObject._id,
          title: mealIdObject.title,
          image: mealIdObject.image,
          rating: userReview ? userReview.rating : null,
        };

        if (!uniqueMealIds.has(mealObject._id)) {
          uniqueMealIds.add(mealObject._id);
          mealsOfOrders.push(mealObject);
        }
      }
    }

    res.status(200).json(mealsOfOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    await userUpdateSchema.validate(userData, { abortEarly: false });

    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { reviewWithOrders, updateUser };
