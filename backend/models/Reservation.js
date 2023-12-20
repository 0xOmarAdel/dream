const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  id: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  day: Date,
  startTime: String,
  endTime: String,
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
