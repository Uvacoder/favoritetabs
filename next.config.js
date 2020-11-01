const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withImages(
  withFonts({
    images: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      iconSizes: [],
      domains: [],
      path: '/public/background/',
      loader: 'default',
    },
  })
);
