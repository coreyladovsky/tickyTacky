module.exports = {
  entry: "./start.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
	},
	devtool: "source-map",
  watch: true,
  mode: 'development'
};
