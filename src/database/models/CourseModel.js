const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    assetS3Key: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);
const VideoSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  S3Key: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  thumbnail_S3Key: {
    type: String,
    default: null,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  assets: [AssetSchema],
});

const courseSchema = new mongoose.Schema(
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

    videos: [VideoSchema],

    prerequisites: [String],
  },
  {
    timestamps: true,
  }
);

const CourseModel =
  mongoose.models["course"] || mongoose.model("course", courseSchema);

export default CourseModel;
