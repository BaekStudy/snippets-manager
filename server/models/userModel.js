const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    email: { type: String, require: true },
    passwordHash: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userModel);
