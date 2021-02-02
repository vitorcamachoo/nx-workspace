/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
    target: 'serverless',
    env: {
        NEXT_PUBLIC_BRANCH: process.env.VERCEL_GIT_COMMIT_REF,
        NEXT_PUBLIC_COMMIT: process.env.VERCEL_GIT_COMMIT_SHA,
    },
});
