module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'pick-element.js',
    path: __dirname + '/lib'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
}