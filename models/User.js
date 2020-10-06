const mongoose = require("mongoose");
const { Schema } = mongoose;

// Defines the structure of the database

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
