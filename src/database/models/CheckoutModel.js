const mongoose = require("mongoose");
const UserModel = require("./UserModel");
const { default: CourseModel } = require("./CourseModel");

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
    sessionId: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CourseModel,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PurchaseModel =
  mongoose?.models?.Purchase || mongoose.model("Purchase", purchaseSchema);

module.exports = PurchaseModel;
