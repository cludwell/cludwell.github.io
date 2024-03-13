/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define the export path for static HTML files
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // Add other routes as needed
    };
  },
};

export default nextConfig;
