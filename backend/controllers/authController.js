const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this email already exists." });
  }
  try {
    const newUser = new User({ name, email, password, role });
    const user = await newUser.save();
    res.status(201).json({
      message: "Registration successful",
      token: user.generateToken(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      const token = user.generateToken();
      res.status(200).json({ token: token, userId: user._id });
    } else {
      res.status(404).json({ message: "invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User with this email does not exist." });
    }

    const resetToken = user.generateToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

    const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Password Reset",
          text: `Click the following link to reset your password: http://localhost:3000/resetPassword/${resetToken}`,
        };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    const info = jwt.verify(resetToken, process.env.JWT_SECRET_KEY);
    const userId = info.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "Invalid reset token" });
    }

    if (await user.comparePassword(newPassword)) {
      return res.status(400).json({ message: "Enter a password that is different from the previous one" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    await User.findByIdAndUpdate(userId, { $set: { password: hashedPassword } });

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser, forgetPassword, resetPassword };
