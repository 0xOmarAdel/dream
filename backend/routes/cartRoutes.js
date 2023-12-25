const router = require("express").Router();
const cartController = require("../controllers/cartController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/add", authenticateUser, cartController.addToCart);
router.put("/edit/:mealId", authenticateUser, cartController.editCartItem);
router.delete(
  "/delete/:mealId",
  authenticateUser,
  cartController.deleteCartItem
);
router.delete("/empty", authenticateUser, cartController.emptyCart);

module.exports = router;
