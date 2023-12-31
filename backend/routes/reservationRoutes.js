const router = require("express").Router();
const reservationController = require("../controllers/reservationController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", authenticateUser, reservationController.createReservation);
router.get("/", authenticateUser, reservationController.getReservations);

module.exports = router;
