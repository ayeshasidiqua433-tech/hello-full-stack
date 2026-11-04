const express = require("express");
const router = express.Router();
const apiKeyAuth = require("../middleware/auth");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// GET sab ke liye khula hai, baaqi sirf API key walon ke liye
router.route("/").get(getProducts).post(apiKeyAuth, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .put(apiKeyAuth, updateProduct)
  .delete(apiKeyAuth, deleteProduct);

module.exports = router;