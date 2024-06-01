/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
