const router = require("express").Router();
const cartController = require("../controllers/cartController");
const authenticateUser = require("../middleware/authenticateUser");

router.get("/", authenticateUser, cartController.getCartItems);
router.post("/add/:mealId", authenticateUser, cartController.addToCart);
router.put("/edit/:cartItemId", authenticateUser, cartController.editCartItem);
router.delete(
  "/delete/:cartItemId",
  authenticateUser,
  cartController.deleteCartItem
);
router.delete("/empty", authenticateUser, cartController.emptyCart);

module.exports = router;
