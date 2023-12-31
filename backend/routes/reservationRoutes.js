const router = require("express").Router();
const reservationController = require("../controllers/reservationController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", authenticateUser, reservationController.createReservation);

module.exports = router;
