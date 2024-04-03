import mongoose from "mongoose";

// Mongoose schema for blog posts and export the model

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 10,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    // author: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    S3Key: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);

const BlogModel =
  mongoose.models.Blog || mongoose.model("Blog", blogPostSchema);

export default BlogModel;
