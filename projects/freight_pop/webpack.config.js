module.exports = {
   entry: './src/main.js',
   output: {
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
      ]
   },
   devServer: {
      port: 8080
   }
};
