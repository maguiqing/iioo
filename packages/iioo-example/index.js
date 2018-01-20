var iioo = require('iioo')


var runner = iioo({
  logLevel: 'debug',
  open: true,
  entry: {
    appA: './entry/a.js',
    appB: './entry/b.js'
  }
})

runner.start()

runner.on('each-webpackConfig', function (config) {
  console.log(config.entry)
})
