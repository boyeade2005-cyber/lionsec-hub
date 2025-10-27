// routes/registrationRoutes.js
import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

// POST /api/register — handle form submissions
router.post("/", async (req, res) => {
  try {
    const { fullname, email, phone, course, location, paymentPlan, notes } = req.body;

    if (!fullname || !email || !phone || !course) {
      return res.status(400).json({ message: "Full name, email, phone, and course are required." });
    }

    const newRegistration = new Registration({
      fullname,
      email,
      phone,
      course,
      location: location || "",
      paymentPlan: paymentPlan || "",
      notes: notes || "",
    });

    await newRegistration.save();
    res.status(201).json({ message: "Registration received successfully!" });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
