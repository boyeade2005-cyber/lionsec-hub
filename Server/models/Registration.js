// models/Registration.js
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  location: { type: String },
  paymentPlan: { type: String },
  notes: { type: String },
  date: { type: Date, default: Date.now }
});

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
