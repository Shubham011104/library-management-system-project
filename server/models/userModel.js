import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            enum: ["Admin", "User"],
            default: "User"
        },
        accountVerified: {
            type: Boolean,
            default: false 
        },
        borrowedBooks: [
            {
                bookId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Borrow"
                },
                returned: {
                    type: Boolean,
                    default: false
                },
                bookTitle: String,
                borrowDate: Date,
                dueDate: Date,
            },
        ],
        avatar: {
            public_id: String,
            url: String
        },
        verificationCode: Number,
        verificationCodeExpire: Date,
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    {
        timestamps: true
    }
);

userSchema.methods.generateVerificationCode = function() {
    function generateRandomFiveDigitNumber() {
        const firstDigit = Math.floor(Math.random() * 9) + 1; // Ensure the first digit is between 1 and 9
        const remainingDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generate the remaining 4 digits
        return parseInt(firstDigit + remainingDigits); // Combine and convert to a number
    }
    const verificationCode = generateRandomFiveDigitNumber();
    this.verificationCode = verificationCode;
    this.verificationCodeExpire = Date.now() + 15 * 60 * 1000; //+15mins
    return verificationCode;
};

export const User = mongoose.model("User", userSchema);