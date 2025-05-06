// import { Sendmessage } from "../middleware/Emailsend.js";

// export const Adminmessage = async (req, res) => {
//     const { Email, adminmessage } = req.body;

//     if (!Email || !adminmessage) {
//         console.log("adminmessage:", adminmessage);
//         console.log("Email:", Email);
//         return res.status(400).json({ success: false, message: "Email and message are required" });
//     }

//     try {
//         const result = await Sendmessage(Email, adminmessage); 

//         if (result.success) {
//             return res.status(200).json({ success: true, message: "Email sent successfully!" });
//         } else {
//             return res.status(500).json({ success: false, message: "Failed to send email" });
//         }
//     } catch (error) {
//         console.error("Error in Adminmessage:", error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };



//
import { Sendmessage } from "../middleware/Emailsend.js";  // Import the Sendmessage function from middleware

export const Adminmessage = async (req, res) => {
    const { Email, adminmessage } = req.body;  // Destructure the email and message from request body

    // Input validation
    if (!Email || !adminmessage) {
        console.log("adminmessage:", adminmessage);
        console.log("Email:", Email);
        return res.status(400).json({ success: false, message: "Email and message are required" });
    }

    try {
        // Call the Sendmessage function to send the email
        const result = await Sendmessage(Email, adminmessage);

        // Check if the result from Sendmessage is successful
        if (result.success) {
            return res.status(200).json({ success: true, message: "Email sent successfully!" });
        } else {
            return res.status(500).json({ success: false, message: "Failed to send email" });
        }
    } catch (error) {
        // Catch any errors and return a generic server error
        console.error("Error in Adminmessage:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
