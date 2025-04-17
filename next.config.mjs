/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/movies/:id",
        destination: "/films/:id",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL(
        "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/**"
      ),
    ],
  },
};

export default nextConfig;
