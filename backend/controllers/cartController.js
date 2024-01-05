const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const Meal = require("../models/Meal");
const User = require("../models/User");

const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;

    const cartItems = await User.aggregate([
      { $match: { _id: new ObjectId(userId) } },
      { $unwind: "$cart" },
      {
        $lookup: {
          from: "meals",
          localField: "cart.mealId",
          foreignField: "_id",
          as: "meal",
        },
      },
      { $unwind: "$meal" },
      {
        $project: {
          _id: 0,
          id: "$cart._id",
          mealId: "$meal._id",
          title: "$meal.title",
          categoryName: "$meal.categoryName",
          price: "$meal.options",
          size: "$cart.option",
          image: "$meal.image",
          quantity: "$cart.quantity",
        },
      },
    ]);

    const transformedCartItems = cartItems.map((item) => ({
      ...item,
      price: item.price.find((opt) => opt.size === item.size).price,
    }));

    res.status(200).json(transformedCartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { mealId } = req.params;
    const { option } = req.body;
    const userId = req.user._id;

    const meal = await Meal.findById(mealId);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    const selectedOption = meal.options.find((opt) => opt.size === option);

    if (!selectedOption) {
      return res.status(400).json({ error: "Invalid option selected" });
    }

    const existingCartItem = await User.findOne({
      _id: userId,
      "cart.mealId": new mongoose.Types.ObjectId(mealId),
      "cart.size": selectedOption.size,
    });

    if (existingCartItem) {
      return res.status(400).json({
        error: "Meal already exists in the cart with the same size",
      });
    }

    const cartItem = {
      mealId,
      option,
      quantity: 1,
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: { cart: cartItem },
      },
      { new: true }
    );

    const addedCartItem = updatedUser.cart.find(
      (item) =>
        item.mealId.equals(new mongoose.Types.ObjectId(mealId)) &&
        item.option === option
    );

    res.status(200).json({
      message: "Meal added to the cart successfully",
      cartItemId: addedCartItem._id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    const user = await User.findById(userId);

    const cartItem = user.cart.find(
      (item) => item._id.toString() === cartItemId
    );

    if (cartItem) {
      cartItem.quantity = quantity;

      await user.save();

      res.status(200).json({ message: "Item quantity updated successfully" });
    } else {
      res.status(404).json({ error: "Cart item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { cartItemId } = req.params;

    await User.findByIdAndUpdate(userId, {
      $pull: { cart: { _id: cartItemId } },
    });

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

module.exports = {
  getCartItems,
  addToCart,
  editCartItem,
  deleteCartItem,
  emptyCart,
};
