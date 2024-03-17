const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    enrollmentStatus: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },

    tags: [String],

    language: {
      type: String,
      default: "English",
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "intermediate",
    },

    prerequisites: [String],

    providesCertificate: {
      type: Boolean,
      default: false,
    },

    coursePrice: {
      type: Number,
      required: true,
    },

    totalDuration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CourseModel =
  mongoose.models["course"] || mongoose.model("course", courseSchema);

export default CourseModel;
