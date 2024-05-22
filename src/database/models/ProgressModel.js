const mongoose = require("mongoose");

// Define the schema
const courseProgressSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  watchedVideosIds: {
    type: [String],
    default: [],
  },
  completedChapters: {
    type: [String],
    default: [],
  },
});

const CourseProgressModel =
  mongoose.models?.CourseProgress ||
  mongoose.model("CourseProgress", courseProgressSchema);

module.exports = CourseProgressModel;
