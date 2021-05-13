const configuration = {
  images: {
    domains: ['cdn.myanimelist.net'],
  },
  target: 'serverless',
  env: {
    NEXT_PUBLIC_BRANCH: process.env.VERCEL_GIT_COMMIT_REF,
    NEXT_PUBLIC_COMMIT: process.env.VERCEL_GIT_COMMIT_SHA,
  },
};

module.exports = configuration;
