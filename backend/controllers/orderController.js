const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
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
