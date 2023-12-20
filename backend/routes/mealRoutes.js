const router = require("express").Router();
const {
  createMeal,
  getAllMeals,
  getSingleMeal,
  editMeal,
  deleteMeal,
} = require("../controllers/mealController");

router.post("/", createMeal);
router.get("/", getAllMeals);
router.get("/:id", getSingleMeal);
router.put("/:id", editMeal);
router.delete("/:id", deleteMeal);

module.exports = router;
