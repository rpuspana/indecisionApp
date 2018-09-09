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

            // only when file names pass the regex specified in test
            // babel will be run through them
            // the file being loaded ends with .js
            test: /\.js$/,

            // don't run babel on these files
            exclude: /node_modules/
        },
        // load files with .css or .scss extensions
        {
            test: /\.s?css$/,

            // use an array of loaders
            // Idea: setup loading scss files and compile them to css files in React
            // sass loader : when you encounter a new SCSS file load it(sass-loader)
            // and compile it to CSS code(sass-loader calls node-sass)
            // when webpack encounters a .css file,
            // it's gonna read that file in (css-loader)
            // and dump it's contents into the DOM in a style tag(style-loader)
            // End result: our styles showing up in the app
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
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

