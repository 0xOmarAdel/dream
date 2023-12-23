const router = require("express").Router();
const reviewController = require("../controllers/reviewController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", authenticateUser, reviewController.createReview);
router.get("/", reviewController.getAllReviews);
router.get("/:id", reviewController.getSingleReview);
router.put("/:id", authenticateUser, reviewController.editReview);
router.delete("/:id", authenticateUser, reviewController.deleteReview);

module.exports = router;
