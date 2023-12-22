const router = require("express").Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  editOrder,
  deleteOrder,
} = require("../controllers/orderController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", createOrder);
router.get("/", authenticateUser, getAllOrders);
router.get("/:id", authenticateUser, getOrderById);
router.put("/:id", editOrder);
router.delete("/:id", authenticateUser, deleteOrder);

module.exports = router;
