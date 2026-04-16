import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Legacy URL redirects from the original epicstorageny.com so existing
  // backlinks and Google index entries don't 404 when DNS cuts over.
  async redirects() {
    return [
      { source: "/pages/rent", destination: "/rent", permanent: true },
      { source: "/pages/contact", destination: "/contact", permanent: true },
      { source: "/pages/map", destination: "/contact#map", permanent: true },
      {
        source: "/pages/self-storage-units-clarence-ny",
        destination: "/locations/clarence-center",
        permanent: true,
      },
      {
        source: "/pages/storage-units-clarence-ny-epic-storage",
        destination: "/locations/clarence-center",
        permanent: true,
      },
      {
        source: "/pages/epic-storage",
        destination: "/locations/clarence-center",
        permanent: true,
      },
      {
        source: "/pages/epicstorageniagara",
        destination: "/locations/buffalo-niagara",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
