const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "pdf"],
  esModule: true,
  webpack(config, options) {
    return config
  }
})