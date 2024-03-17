import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(nextConfig, {
  provider: "amazon-s3",
  providerConfig: {
    "amazon-s3": {
      endpoint: "https://vessels-course-videos.s3.ap-south-1.amazonaws.com",
    },
  },
});
