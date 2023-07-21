

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: [ 'es' , 'en-US' ],
    defaultLocale: 'es',
  },
  images: {
    domains: ['images.ctfassets.net', '//images.ctfassets.net']
  }
}

module.exports = nextConfig
