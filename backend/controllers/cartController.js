const Meal = require("../models/Meal");
const User = require("../models/User");

const addToCart = async (req, res) => {
  try {
    const { mealId } = req.params;
    const userId = req.user._id;

    const meal = await Meal.findById(mealId);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    await User.findByIdAndUpdate(userId, { $push: { cart: mealId } });

    res.status(200).json({ message: "Meal added to the cart successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { mealId } = req.params;
    const { quantity } = req.body;

    const user = await User.findById(userId);

    const cartItem = user.cart.find((item) => item.mealId === mealId);

    if (cartItem) {
      cartItem.quantity = quantity;

      await user.save();

      res.status(200).json({ message: "Item quantity updated successfully" });
    } else {
      res.status(404).json({ error: "Meal not found in the cart" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { mealId } = req.params;

    await User.findByIdAndUpdate(userId, { $pull: { cart: mealId } });

    res
      .status(200)
      .json({ message: "Item removed from the cart successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const emptyCart = async (req, res) => {
  try {
    const userId = req.user._id;

    await User.findByIdAndUpdate(userId, { cart: [] });

    res.status(200).json({ message: "Cart emptied successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addToCart, editCartItem, deleteCartItem, emptyCart };
