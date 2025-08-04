import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true  // adds createdAt and updatedAt fields automatically
});

export default mongoose.model('users', userSchema);
