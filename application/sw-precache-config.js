module.exports = {
  staticFileGlobs: [
    'index.html/',
    'manifest.json',
    'data/content.json',
    'bower_components/webcomponentsjs/webcomponents-lite.min.js',
    'images/**/*.*',
    'src/**/*.*'
  ],
  replacePrefix: '.',
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /\/data\/images\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 200,
          name: 'items-cache'
        }
      }
    },
    {
      urlPattern: /\/data\/.*json/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-cache'
        }
      }
    }
  ]
};
