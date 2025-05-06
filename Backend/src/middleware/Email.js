// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables

// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // true for port 465, false for port 587
//   auth: {
//     user: process.env.EMAIL_USER, // your Gmail address
//     pass: process.env.EMAIL_PASS, // your Gmail app password
//   },
// });



// email.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load env variables

// Create transporter
export const transporter = nodemailer.createTransport({
  service: "gmail", // Simplifies host/port setup
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Optional: Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Email transporter is ready");
  }
});
