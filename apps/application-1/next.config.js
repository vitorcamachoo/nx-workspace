/* eslint-disable @typescript-eslint/no-var-requires */
const childprocess = require('child_process')
const withNx = require('@nrwl/next/plugins/with-nx');
const commit = childprocess.execSync('git rev-parse HEAD').toString()
const branch = childprocess.execSync('git rev-parse --abbrev-ref HEAD').toString()

module.exports = withNx({
    target: 'experimental-serverless-trace',
    env: {
        NEXT_PUBLIC_BRANCH: branch,
        NEXT_PUBLIC_COMMIT: commit,
    },
});
