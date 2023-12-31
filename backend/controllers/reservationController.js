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
      reservations = await Reservation.find().populate(
        "user",
        "_id firstName lastName email"
      );
    } else {
      reservations = await Reservation.find({ user: req.user._id }).populate(
        "user",
        "_id firstName lastName email"
      );
    }

    res.status(200).json({ status: "success", data: reservations });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const editReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    const { status } = req.body;

    if (req.user.role !== "admin") {
      return res.status(403).json({
        status: "error",
        message: "Forbidden. Admin access required.",
      });
    }

    if (!reservationId) {
      return res.status(400).json({
        status: "error",
        message: "Reservation ID is required.",
      });
    }

    const existingReservation = await Reservation.findById(reservationId);
    if (!existingReservation) {
      return res.status(404).json({
        status: "error",
        message: "Reservation not found.",
      });
    }

    if (!status || !["pending", "confirmed", "declined"].includes(status)) {
      return res.status(400).json({
        status: "error",
        message:
          "Invalid status. Status must be one of: pending, confirmed, declined.",
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

const deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;

    const reservation = await Reservation.findById(reservationId);

    if (!reservation) {
      return res
        .status(404)
        .json({ status: "error", message: "Reservation not found." });
    }

    console.log(reservation);

    if (req.user._id.toString() !== reservation.user.toString()) {
      return res.status(403).json({
        status: "error",
        message: "Forbidden. You can only delete your own reservations.",
      });
    }

    await Reservation.deleteOne({ _id: reservationId });

    res.status(204).json({ status: "success", data: null });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createReservation,
  getReservations,
  editReservation,
  deleteReservation,
};
