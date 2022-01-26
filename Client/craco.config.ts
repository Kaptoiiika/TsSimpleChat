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
    allowedHosts: [
        '.amazonaws.com',
        "ns1.jino.ru",
        "0.0.0.0"
    ]
  },
  
   
}
