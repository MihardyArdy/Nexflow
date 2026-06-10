import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Hide the Next.js dev-mode indicator badge (the small "N" in the corner).
  devIndicators: false,
  images: {
    // Allowed `quality` values for next/image (85 = visual/size sweet spot).
    qualities: [75, 85],
  },
};

export default nextConfig;
