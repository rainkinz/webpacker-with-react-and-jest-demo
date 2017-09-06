const { environment } = require('@rails/webpacker')

environment.loaders.set('ignore', {
  test:  /__tests__/,
  loader: 'ignore-loader'
})

module.exports = environment
