import type { NextConfig } from "next";

const nextConfig: NextConfig = {};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
    ],
  },
};
export default nextConfig;
