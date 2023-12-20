const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
  editCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.post("/", createCategory);
router.get("/", getAllCategories);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
