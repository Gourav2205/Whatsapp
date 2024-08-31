/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 763604376,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "c76a2cc2290208bfa264516fe9bf8437",
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
