import mongoose from 'mongoose';

const IncomeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  source: String,
  amount: Number,
  date: Date,
});

export default mongoose.model('Income', IncomeSchema);
