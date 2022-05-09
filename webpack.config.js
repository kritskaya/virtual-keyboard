const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "src/style.css", to: "style.css" },
          { from: "src/index.html", to: "index.html" },
          { from: "src/assets", to: "assets" },
        ],
      }),
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
