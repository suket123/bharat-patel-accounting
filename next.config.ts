import type { NextConfig } from "next";

// Set this to your repository name for GitHub Pages project sites
const REPO_NAME = 'bharat-patel-accounting';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
// Use the environment variable if set, otherwise fallback to repo name only in GitHub Actions
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${REPO_NAME}` : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: publicBasePath,
  trailingSlash: true,
};

export default nextConfig;
