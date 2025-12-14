const Sweet = require("../models/Sweet");

// ADD SWEET
exports.addSweet = async (req, res) => {
  try {
    const sweet = await Sweet.create(req.body);
    res.status(201).json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Failed to add sweet" });
  }
};

// GET ALL SWEETS
exports.getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sweets" });
  }
};

// SEARCH SWEETS
exports.searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const filter = {};

    if (name) filter.name = { $regex: name, $options: "i" };
    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const sweets = await Sweet.find(filter);
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: "Search failed" });
  }
};

// UPDATE SWEET
exports.updateSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// DELETE SWEET (ADMIN)
exports.deleteSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndDelete(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.json({ message: "Sweet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};
// PURCHASE SWEET
exports.purchaseSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: "Out of stock" });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.json({
      message: "Sweet purchased successfully",
      remainingQuantity: sweet.quantity
    });
  } catch (error) {
    res.status(500).json({ message: "Purchase failed" });
  }
};

// RESTOCK SWEET (ADMIN)
exports.restockSweet = async (req, res) => {
  try {
    const { amount } = req.body;

    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    sweet.quantity += Number(amount);
    await sweet.save();

    res.json({
      message: "Sweet restocked successfully",
      newQuantity: sweet.quantity
    });
  } catch (error) {
    res.status(500).json({ message: "Restock failed" });
  }
};
