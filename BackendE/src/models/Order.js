import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', // Assuming you have a products model
      },
      quantity: Number,
      price: Number,
    }
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

export default mongoose.model('orders', orderSchema);
