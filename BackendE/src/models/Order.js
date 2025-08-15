import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  items: [
    {
      productName: { type: String, required: true },
      image: String,
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  address: {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    addressLine: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.model('orders', orderSchema);
