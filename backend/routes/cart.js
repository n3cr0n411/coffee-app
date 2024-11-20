const express = require('express');
const Cart = require('../models/Cart');

const router = express.Router();

// Add items to cart
router.post('/', async (req, res) => {
  const { userId, items } = req.body;

  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $push: { items: { $each: items } } },
      { new: true, upsert: true }
    );
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error adding items to cart', error: err.message });
  }
});

// Get cart
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart', error: err.message });
  }
});

// Clear cart
router.delete('/:userId', async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.params.userId });
    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error clearing cart', error: err.message });
  }
});

module.exports = router;
