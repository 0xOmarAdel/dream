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

    const userReviews = await Review.find({ user: userId }).populate("meal");

    const userOrders = await Order.find({
      user: userId,
      status: "Delivered",
    }).populate("meal");

    const ordersWithRating = userOrders.map((order) => {
      const existingReview = userReviews.find((review) =>
        review.meal._id.equals(order.meal._id)
      );

      return {
        order,
        rating: existingReview ? existingReview.rating : null,
      };
    });

    res.status(200).json({
      ordersWithRating,
    });
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
