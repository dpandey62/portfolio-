// routes/contact.js or wherever
import express from "express";
import { sendMail } from "../sendEmail.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    await sendMail(email, subject, message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
