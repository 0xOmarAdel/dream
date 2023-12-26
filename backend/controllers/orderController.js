const Order = require("../models/Order");
const User = require("../models/User");

const createOrder = async (req, res) => {
  try {
    const { address, phone } = req.body;
    const userId = req.user._id;

    if (!userId || !address || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = await User.findById(userId).populate("cart.mealId");

    const meals = user.cart.map((cartItem) => {
      const mealPrice = cartItem.mealId.options.find(
        (opt) => opt.size === cartItem.option
      ).price;

      const subtotal = cartItem.quantity * mealPrice;

      return {
        mealId: cartItem.mealId._id,
        quantity: cartItem.quantity,
        size: cartItem.option,
        price: mealPrice,
        subtotal,
      };
    });

    if (!meals || meals.length === 0) {
      return res.status(400).json({ error: "No items in the cart" });
    }

    const subtotal = meals.reduce((acc, meal) => acc + meal.subtotal, 0);
    const shipping = 5;
    const total = subtotal + shipping;

    const newOrder = await Order.create({
      userId,
      meals,
      address,
      phone,
      subtotal,
      shipping,
      total,
    });

    await User.findByIdAndUpdate(userId, { $set: { cart: [] } });

    await User.findByIdAndUpdate(userId, { $push: { orders: newOrder._id } });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId }).populate({
      path: "meals.mealId",
      model: "Meal",
      select: "title image",
    });

    const formattedOrders = orders.map((order) => ({
      ...order.toObject(),
      meals: order.meals.map((meal) => ({
        title: meal.mealId.title,
        image: meal.mealId.image,
        quantity: meal.quantity,
        size: meal.size,
        price: meal.price,
      })),
    }));

    res.status(200).json(formattedOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const order = await Order.findOne({ _id: id, userId });

    if (!order) {
      return res.status(404).json({ error: "Order not found or unauthorized" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editOrder = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const existingOrder = await Order.findOne({ _id: id, userId });

    if (!existingOrder) {
      return res.status(404).json({ error: "Order not found or unauthorized" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const deletedOrder = await Order.findOneAndDelete({ _id: id, userId });

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found or unauthorized" });
    }

    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  editOrder,
  deleteOrder,
};
