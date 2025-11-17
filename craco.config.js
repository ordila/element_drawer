const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/ui": path.resolve(__dirname, "src/ui"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/containers": path.resolve(__dirname, "src/containers"),
      "@/elements": path.resolve(__dirname, "src/elements"),
    },
  },
};
