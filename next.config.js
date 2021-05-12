// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = {
  images: {
    domains: ['cdn.myanimelist.net'],
  },
  target: 'serverless',
};
