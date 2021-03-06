const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ronnie Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Ronsong', // Alternative Site title for SEO
  siteTitleShort: 'Ronsong', // short_name for manifest
  siteHeadline: 'Ronnie`s Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://ronsong.ml', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Ronnie`s Portfolio',
  author: 'Ronnie Song', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ronnie_song', // Twitter Username
  ogSiteName: 'Ronnie Song', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-145019695-2',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
