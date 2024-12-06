/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001",
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://bank-app-server-69ir.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
