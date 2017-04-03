var path = require("path");

var appConfig = {
  appName: 'oil.js',
  srcPath: 'src',
  testPath: 'test',
  junit: {
    title: 'OptInLayer',
    dir: 'dist/test-reports'
  },
  templatesPath: 'templates',
  distPath: 'dist',
  globals: {
  },
  chunks: {
    name: ['polyfills'].reverse()
  },
  indexFiles: [{
    template: path.resolve(srcPath, 'index.html'),
    chunks: ['app', 'polyfills'],
    chunksSortMode: 'dependency'
  }],
  entry: {
    app: srcPath + '/app.js'
  },
  mangle: {
  },
  proxy: {
  },
  title: 'OIL',
  additionalWebpackOptions: false
};

// export default config
module.exports = appConfig;
