const nextTranslate = require('next-translate-plugin')


/** @type {import('next').NextConfig} */

module.exports = nextTranslate({
  images: {
    domains: ['images.ctfassets.net', '//images.ctfassets.net', 'downloads.ctfassets.net' ]
  },
  redirects: async() => {
    return[
      {
        source: '/',
        destination: '/blog',
        permanent: true
      }
    ]
  }
})