import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: String,
  allocated_amount: Number,
  spent_amount: Number,
});

export default mongoose.model('Budget', BudgetSchema);
