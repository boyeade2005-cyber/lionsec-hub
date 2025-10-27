// User.js
import mongoose from 'mongoose'; 
 
const userSchema = new mongoose.Schema({ 
  name: { type: String, required: true, trim: true }, 
  email: { type: String, required: true, unique: true, lowercase: true },
  // ADDED THIS LINE:
  password: { type: String, required: true },
  role: { type: String, enum: ['student','admin','instructor'], default: 'student' }, 
  createdAt: { type: Date, default: Date.now } 
}); 
 
// Use "import" syntax for consistency
export default mongoose.model('User', userSchema);