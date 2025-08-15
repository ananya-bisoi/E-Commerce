import express from 'express';
import Order from '../models/Order.js';
import auth from '../middleware/authOrder.js';

const router = express.Router();

// 🔹 POST /api/orders/create
router.post('/create', auth, async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ msg: 'Unauthorized. Please login first.' });
  }

  const { items, totalAmount, address, paymentMethod } = req.body;

  try {
    const order = new Order({
      userId: req.user.id,
      items,
      totalAmount,
      address,
      paymentMethod
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error('Order creation error:', err);
    res.status(500).json({ msg: 'Failed to place order', error: err.message });
  }
});

// 🔹 GET /api/orders/my
router.get('/my', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch orders' });
  }
});

// 🔹 DELETE /api/orders/cancel/:orderId
router.delete('/cancel/:orderId', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) return res.status(404).json({ msg: 'Order not found' });
    if (order.userId.toString() !== req.user.id)
      return res.status(403).json({ msg: 'Unauthorized' });

    await Order.findByIdAndDelete(order._id);
    res.json({ msg: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
