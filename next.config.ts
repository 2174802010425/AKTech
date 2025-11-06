import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode : true,
  transpilePackages : ['next-sanity'],
  images : {
    dangerouslyAllowSVG : true,
    remotePatterns : [
      {
        protocol : 'https',
        hostname : '*'
      }
    ]
  },
  experimental : {
    esmExternals : false
  }
};

export default nextConfig;
