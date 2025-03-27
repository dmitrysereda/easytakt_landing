const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'standalone',
  // Enable static exports
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig); 