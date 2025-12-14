const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const admin = require("../middleware/admin.middleware");

const {
  addSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} = require("../controllers/sweet.controller");

router.post("/", auth, admin, addSweet);
router.post("/:id/purchase", auth, purchaseSweet);
router.post("/:id/restock", auth, admin, restockSweet);
router.get("/", auth, getAllSweets);
router.get("/search", auth, searchSweets);
router.put("/:id", auth, admin, updateSweet);
router.delete("/:id", auth, admin, deleteSweet);

module.exports = router;