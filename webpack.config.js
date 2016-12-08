var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/dgrid_01_hello',
    resolveLoader: {
      alias: {
        "dojo/text": 'raw-loader',
        'domReadyLoader': path.resolve(__dirname, './src/util/domReady')
      },
      modulesDirectories: [
        path.resolve(__dirname, './node_modules/')
      ]
    },
    resolve: {
      alias: {
          "dojo": path.resolve(__dirname, './node_modules/dojo'),
          "dstore": path.resolve(__dirname, './node_modules/dstore'),
          "dijit": path.resolve(__dirname, './node_modules/dijit'),
          "dgrid": path.resolve(__dirname, './node_modules/dgrid')
      },
      root: [
        path.resolve(__dirname, './src'),
      ]
    },
    devtool: 'source-map',
    plugins: [
      //this is used along with the resolveLoader alias to 'dojo/text' to load the nls files
      new webpack.NormalModuleReplacementPlugin(/util\/nls/, function(result) {
        // util/nls!resourceFile,resourceFile2   =>   ../src/util/nls?resourceFile,resourceFile2
        result.request = '../src/' + result.request.replace('!', '?')
      })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["dojo-webpack-loader", 'domReadyLoader']
            },
            {
              test: [/\.resx$/], loader: 'resx-webpack-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'bundle/'),
        publicPath: "bundle/",
        filename: "[name].bundle.js"
    },

    dojoWebpackLoader: {
        // We should specify paths to core and dijit modules because we using both
        dojoCorePath: path.resolve(__dirname, './node_modules/dojo'),
        dojoDijitPath: path.resolve(__dirname, './node_modules/dijit'),

        // Languages for dojo/nls module which will be in result pack.
        includeLanguages: ['en', 'ru', 'fr']
    }
};
