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

const getReservations = async (req, res) => {
  try {
    let reservations;

    if (req.user.role === "admin") {
      reservations = await Reservation.find().populate("user");
    } else {
      reservations = await Reservation.find({ user: req.user._id }).populate(
        "user"
      );
    }

    res.status(200).json({ status: "success", data: reservations });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const editReservation = async (req, res) => {
  try {
    const { reservationId, status } = req.body;

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({
          status: "error",
          message: "Forbidden. Admin access required.",
        });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(
      reservationId,
      { $set: { status } },
      { new: true }
    );

    res.status(200).json({ status: "success", data: updatedReservation });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createReservation,
  getReservations,
  editReservation,
};
