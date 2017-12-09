const environment = require('./environment')
environment.loaders.set('typescript', {
    test: /\.tsx?$/,
    use: 'awesome-typescript-loader'
  })
module.exports = environment.toWebpackConfig()
