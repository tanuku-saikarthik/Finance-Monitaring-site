import mongoose from 'mongoose';

const InvestmentsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: String,
  amount: Number,
  date: Date,
});

export default mongoose.model('Investments', InvestmentsSchema);
