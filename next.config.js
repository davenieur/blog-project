const { languages } = require('./constants');
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog/',
  i18n: {
    locales: [ languages.es.route , languages.en.route ],
    defaultLocale: languages.es.route,
  },
  images: {
    domains: ['images.ctfassets.net', '//images.ctfassets.net']
  }
}

module.exports = nextConfig
