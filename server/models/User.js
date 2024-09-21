import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create and export the User model
export default mongoose.model('User', UserSchema);
