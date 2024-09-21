import mongoose from 'mongoose';

const SavingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: Number,
  date: Date,
});

export default mongoose.model('Savings', SavingsSchema);
