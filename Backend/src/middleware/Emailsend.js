// // import { transporter } from "./Email.js";

// // export const Sendmessage = async (Email, adminmessage) => {
// //     try {
// //         const info = await transporter.sendMail({
// //             from: '"Dev Pandey Developer" <dpandey6200@gmail.com>', 
// //             to: Email, 
// //             subject: "Hello ✔", 
// //             text: "Hello world?", 
// //             html: `<p>${adminmessage}</p>`, 
// //         });

// //         console.log("Email sent successfully:", info);
// //         return { success: true, message: "Email sent successfully!" }; 

// //     } catch (error) {
// //         console.error("Error sending message:", error); 
// //         return { success: false, message: "Failed to send email." }; 
// //     }
// // };


// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "dpandey6200@gmail.com",
//     pass: "zfsw lylm lobd wyjg",
//   },
// });

// export const Sendmessage = async (to, subject, text) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Message sent: %s", info.messageId);
//   } catch (error) {
//     console.error("Error sending message:", error);
//   }
// };


import nodemailer from "nodemailer";

// Create the transporter (use your own credentials or app password)
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dpandey6200@gmail.com',  // Your email
    pass: 'zfsw lylm lobd wyjg',  // Your Gmail App Password (not regular Gmail password)
  }
});

// Sendmessage function
export const Sendmessage = async (toEmail, messageContent) => {
  try {
    const mailOptions = {
      from: 'dpandey6200@gmail.com',  // Sender's email address
      to: toEmail,                   // Recipient email address
      subject: "Message from Admin",  // Subject
      text: messageContent,          // Message content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Return success if the message is sent
    if (info.accepted.length > 0) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
