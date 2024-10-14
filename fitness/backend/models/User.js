const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true, // Google ID is unique and required for users who log in via Gmail
    unique: true, // Ensure that no two users have the same Google ID
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure no two users share the same email
    lowercase: true, // Make email case-insensitive
  },
  name: {
    type: String,
    required: true, // Store the user's name from Google
  },
  profilePic: {
    type: String, // Store the user's profile picture URL from Google
  },
  accessToken: {
    type: String, // Store the Google access token (if needed)
  },
  refreshToken: {
    type: String, // Store the refresh token (if needed for long-term access)
  },
  createdAt: {
    type: Date,
    default: Date.now, // Record when the user was created
  },
});

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
