import { generateVerificationOtpEmailTemplate } from "./utils/emailTemplates.js";
import { sendEmail } from "./utils/sendEmail.js";

export async function sendVerificationCode(verificationCode, email, res) {
    try {
        const message = generateVerificationOtpEmailTemplate(verificationCode);
        sendEmail({
            email,
            subject: "Verification Code (Bookware Library Management System)",
            message,
        });
        res.status(200).json({
            success: true,
            message: "Verification code sent to email successfully."
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to send verification code. Please try again later."
        });
    }
}