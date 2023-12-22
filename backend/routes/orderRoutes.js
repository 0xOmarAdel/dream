const router = require("express").Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  editOrder,
  deleteOrder,
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.put("/:id", editOrder);
router.delete("/:id", deleteOrder);
