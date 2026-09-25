/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: false,
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = false;
      config.optimization.splitChunks = false;
      config.cache = false;
    }
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        '@x402/core/client': false,
        '@x402/svm/exact/client': false,
        '@x402/evm': false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
