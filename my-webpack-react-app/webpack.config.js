const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', 
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  
        },
      },
      {
        test: /\.css$/,  
        use: ['style-loader', 'css-loader'],  
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', 
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', 
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),  
    compress: true,
    port: 9000,  
    open: true,
  },
  mode: 'development',
};
