import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Entfernte Seiten des alten Auftritts dauerhaft umleiten, damit alte Links nicht ins Leere laufen.
  async redirects() {
    return [
      { source: '/leistungen', destination: '/#angebot', permanent: true },
      { source: '/leistungen/:slug', destination: '/#angebot', permanent: true },
      { source: '/cases', destination: '/', permanent: true },
      { source: '/cases/:slug', destination: '/', permanent: true },
      { source: '/news', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
