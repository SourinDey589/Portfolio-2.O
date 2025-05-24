import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent bundling of Node.js specific modules on the client.
      // 'async_hooks' is a Node.js built-in module and not available in the browser.
      // OpenTelemetry (used by Genkit) might attempt to import it.
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}), // Preserve existing fallbacks
        async_hooks: false, // Tell webpack to replace 'async_hooks' with an empty module for client builds
      };
    }
    return config;
  },
};

export default nextConfig;
