const nextConfig = {
  output: "export",
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  turbopack: {
    root: __dirname
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
