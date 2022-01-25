import webpack from "webpack"

module.exports = {
  webpack: {
    configure: {},
  },
  devServer: {
    compress: true,
    inline: true,
    port: '80',
    allowedHosts: [
        '.amazonaws.com',
        "ns1.jino.ru"
    ]
  },
  
   
}
