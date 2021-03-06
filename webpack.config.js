module.exports = {
	mode: process.env.NODE_ENV,
	entry: ["./src/main.js"],
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader" 
			},
			{
				test: /\.css$/,
				use: [
				    "style-loader",
				    "css-loader"
				]
			}			
		]
	},
	watch: process.env.NODE_ENV === 'development' ? true : false
}