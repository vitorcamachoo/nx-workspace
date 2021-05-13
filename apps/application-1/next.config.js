// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const config = require('../../next.base.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  withNx({
    ...config,
    pwa: {
      disable: !isProduction,
      dest: 'public',
      runtimeCaching,
    },
  })
);
