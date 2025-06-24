import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_ROOT_PATH ? `/${process.env.NEXT_PUBLIC_ROOT_PATH}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;
