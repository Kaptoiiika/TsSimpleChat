import webpack from "webpack"

module.exports = {
  webpack: {
    configure: {},
  },
  devServer: {
    compress: true,
    inline: true,
    port: '80',
    disableHostCheck: true,
  },
}
