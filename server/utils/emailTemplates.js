// This function generates the HTML template
// for sending OTP verification emails

export function generateVerificationOtpEmailTemplate(otpCode) {

    return `
    <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #ffffff;
    ">

        <!-- Heading -->
        <h2 style="
            color: #333;
            text-align: center;
        ">
            Verify Your Email Address
        </h2>

        <!-- Greeting -->
        <p style="
            font-size: 16px;
            color: #555;
        ">
            Dear User,
        </p>

        <!-- Message -->
        <p style="
            font-size: 16px;
            color: #555;
        ">
            To complete your registration or login, please use the following
            verification code:
        </p>

        <!-- OTP Box -->
        <div style="
            text-align: center;
            margin: 20px 0;
        ">
            <span style="
                display: inline-block;
                font-size: 24px;
                font-weight: bold;
                color: #000;
                padding: 10px 20px;
                border: 1px solid #000;
                border-radius: 5px;
                letter-spacing: 3px;
            ">
                ${otpCode}
            </span>
        </div>

        <!-- Instructions -->
        <p style="
            font-size: 16px;
            color: #555;
        ">
            This code is valid for 15 minutes. Please do not share this code
            with anyone.
        </p>

        <p style="
            font-size: 16px;
            color: #555;
        ">
            If you did not request this email, please ignore it.
        </p>

        <!-- Footer -->
        <footer style="
            margin-top: 20px;
            text-align: center;
            font-size: 14px;
            color: #777;
        ">
            <p>Thank you,<br>BookWorm Team</p>

            <p style="
                font-size: 12px;
                color: #999;
            ">
                This is an automated message. Please do not reply.
            </p>
        </footer>

    </div>
    `;
}
