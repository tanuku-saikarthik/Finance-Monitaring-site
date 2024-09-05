import mongoose from 'mongoose';

const LiabilitiesSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: String,
  amount: Number,
  date: Date,
});

export default mongoose.model('Liabilities', LiabilitiesSchema);
