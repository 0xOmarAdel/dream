const router = require("express").Router();
const {
  createMeal,
  getAllMeals,
  getSingleMeal,
  editMeal,
  deleteMeal,
  rateMeal,
  getMealRatingInfo,
  editRate,
} = require("../controllers/mealController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", createMeal);
router.get("/", getAllMeals);
router.get("/:id", getSingleMeal);
router.put("/:id", editMeal);
router.delete("/:id", deleteMeal);
router.post("/:id/rate", authenticateUser, rateMeal);
router.get("/:id/rating-info", getMealRatingInfo);
router.put("/:id/edit-rate", authenticateUser, editRate);

module.exports = router;
