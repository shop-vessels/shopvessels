import mongoose, { Schema } from "mongoose";

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  S3Key: {
    type: String,
    required: true,
    trim: true,
  },
});

const Lesson = new Schema({
  videos: [VideoSchema],
  textContent: {
    type: String,
  },
  files: [
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      S3Key: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  externalLink: [{
    title: {
      type: String,
    }

  }]
});

const LessonDay = new Schema({
  title: String,
  lesson: Lesson,
});

const CourseChapter = new Schema({
  title: String,
  days: [LessonDay],
});

const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    S3Key: {
      type: String,
    },
    enrollmentStatus: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    coursePrice: {
      type: Number,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Intermediate",
    },
    language: {
      type: String,
      default: "English",
    },
    providesCertificate: {
      type: Boolean,
      default: false,
    },
    totalDuration: {
      type: String,
    },
    chapters: [CourseChapter],
    prerequisites: [String],
  },
  {
    timestamps: true,
  }
);

const CourseModel =
  mongoose.models["course"] || mongoose.model("course", CourseSchema);

export default CourseModel;
