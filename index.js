var path = require('path')

var framework = function(files) {
  files.unshift({
    pattern: path.join(__dirname, 'karma-calling.js'),
    included: true,
    served: true,
    watched: false
  })
}

framework.$inject = ['config.files']

module.exports = {
  'framework:calling': ['factory', framework]
}
