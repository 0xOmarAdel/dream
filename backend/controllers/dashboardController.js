const Order = require("../models/Order");
const Category = require("../models/Category");
const Meal = require("../models/Meal");
const Reservation = require("../models/Reservation");
const User = require("../models/User");

exports.getAdminDashboardData = async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(401)
      .json("You don't have permissions to enter admin dashboard");
  }
  try {
    const ordersCount = await getOrdersCount();
    const categoriesCount = await getCategoriesCount();
    const mealsCount = await getMealsCount();
    const reservationsCount = await getReservationsCount();
    const usersCount = await getUsersCount();
    const totalAmountOfCompletedOrders =
      await getTotalAmountOfCompletedOrders();

    const dashboardData = {
      ordersCount,
      categoriesCount,
      mealsCount,
      reservationsCount,
      usersCount,
      totalAmountOfCompletedOrders,
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const getOrdersCount = async () => {
  return await Order.countDocuments();
};

const getCategoriesCount = async () => {
  return await Category.countDocuments();
};

const getMealsCount = async () => {
  return await Meal.countDocuments();
};

const getReservationsCount = async () => {
  return await Reservation.countDocuments();
};

const getUsersCount = async () => {
  return await User.countDocuments();
};

const getTotalAmountOfCompletedOrders = async () => {
  try {
    const result = await Order.aggregate([
      { $match: { status: { $ne: "Pending" } } },
      { $group: { _id: null, totalAmount: { $sum: "$total" } } },
      { $project: { _id: 0, totalAmount: { $round: ["$totalAmount", 2] } } },
    ]);

    if (result.length > 0) {
      return result[0].totalAmount;
    } else {
      return 0;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
