const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const ROOT_PATH = path.join(__dirname, '..')

const getPath = (filePath) => path.resolve(ROOT_PATH, filePath)

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  entry: getPath('./src/index.js'),
  plugins: [
    new HTMLWebpackPlugin({
      template: getPath('./index.html'),
    }),
  ],
}
