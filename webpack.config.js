// when you modify webpack config you have to restart webpack
// yarn run build

// node.js script

const path = require('path');

// configuration details for webpack build
module.exports = {
    // what is the main file
    entry: './src/app.js',

    // output the final bundle file - everything the app needs to run
    output: {
        // where to put bundle.js - inside the public folder to serve it to the server
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // loader to use
            loader: 'babel-loader',

            // only when file names pass the regex test 
            // babel will be run through them
            // the file being loaded ends with .js
            test: /\.js$/,

            // don't run babel on these files
            exclude: /node_modules/

        }]
    },
    // type of source map you want: (none), eval, etc from
    // for development check section https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // development server https://webpack.js.org/configuration/dev-server/
    devServer: {
        // Tell the server where to serve content from
        contentBase: path.join(__dirname, 'public'),
    }
};

