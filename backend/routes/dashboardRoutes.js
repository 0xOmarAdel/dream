const router = require("express").Router();
const dashboardController = require("../controllers/dashboardController");
const authenticateUser = require("../middleware/authenticateUser");

router.get(
  "/dashboard",
  authenticateUser,
  dashboardController.getAdminDashboardData
);

module.exports = router;
