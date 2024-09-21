import mongoose from 'mongoose';

const ExpensesSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: String,
  amount: Number,
  date: Date,
});

export default mongoose.model('Expenses', ExpensesSchema);
