import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

process.on("error", (err) => {
  console.error("Process error:", err);
});

process.on("exit", (code) => {
  console.log("Process exit code:", code);
});

export default nextConfig;
