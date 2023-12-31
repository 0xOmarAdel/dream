const Reservation = require("../models/Reservation");

const createReservation = async (req, res) => {
  try {
    const { name, email, phone, guests, resDate, resTime } = req.body;

    if (!name || !email || !phone || !guests || !resDate || !resTime) {
      return res.status(400).json({
        status: "error",
        message: "Please provide all required fields.",
      });
    }

    const userId = req.user._id;

    const reservation = await Reservation.create({
      user: userId,
      name,
      email,
      phone,
      guests,
      resDate,
      resTime,
    });

    res.status(201).json({ status: "success", data: reservation });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createReservation,
};
