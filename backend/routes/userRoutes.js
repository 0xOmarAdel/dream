const router = require("express").Router();
const userController = require("../controllers/userController");
const authenticateUser = require("../middleware/authenticateUser");

router.get(
  "/reviews-orders",
  authenticateUser,
  userController.reviewWithOrders
);
router.put("/:id", userController.updateUser);

module.exports = router;
