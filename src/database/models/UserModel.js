const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  avatar: String,
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  terms: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "UNVERIFIED"],
    default: "UNVERIFIED",
  },
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const match = await bcrypt.compare(candidatePassword, this.password);
  return match;
};

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = UserModel;
