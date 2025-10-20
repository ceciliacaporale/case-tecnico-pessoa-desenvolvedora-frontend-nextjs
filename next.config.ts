import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Configuração para lidar com erros de fetch durante o build
  // Se a API externa estiver instável, o build não quebra
  typescript: {
    // Durante o build, ignora erros de TypeScript (apenas na Vercel)
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Durante o build, ignora warnings de ESLint
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
