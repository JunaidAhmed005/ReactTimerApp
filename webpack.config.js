var webpack = require('webpack');

module.exports = {
  	entry: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
  	output: {
    	path: __dirname,
    	filename: './public/bundle.js'
  	},
  	resolve: {
  		
    	alias: {
	      	Main: __dirname + "/app/components/Main.jsx",
          applicationStyles: __dirname + "/app/styles/app.scss",
          Navigation: __dirname + "/app/components/Navigation.jsx",
          Timer: __dirname + "/app/components/Timer.jsx",
          Countdown: __dirname + "/app/components/Countdown.jsx",
          Clock: __dirname + "/app/components/Clock.jsx",
          CountdownForm: __dirname + "/app/components/CountdownForm.jsx"
    	},
    	extensions: ['.js', '.jsx']
  	},
  	module: {
  		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
  		]
  	},
    devtool: "cheap-module-eval-source-map"
};
