import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  age: Number,
  occupation: String,
  annual_income: Number,
  financial_goals: String,
});

export default mongoose.model('UserProfile', UserProfileSchema);
