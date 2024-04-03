import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "vessels-public-assets.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default withNextVideo(nextConfig, {
  provider: "amazon-s3",
  providerConfig: {
    "amazon-s3": {
      endpoint: "https://vessels-course-videos.s3.ap-south-1.amazonaws.com",
    },
  },
});
