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

export default nextConfig;
