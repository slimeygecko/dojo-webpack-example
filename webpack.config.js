var webpack = require("webpack");
var path = require("path");
var DojoResolverPlugin = require("./resolver");

// var entry_list = [
//     "dojo_01_animation",
//     "dojo_02_topic",
//     "dojo_03_keyboard",
//     "dojo_04_request",
//     "dijit_01_key_nav",
//     "dijit_02_layout",
//     "dijit_03_form",
//     "dijit_04_menus",
//     "dijit_05_templated",
//     "dgrid_01_hello",
//     "dgrid_02_stores",
//     "dgrid_03_col_set",
//     "dgrid_04_comp_col",
//     "dgrid_05_single_query",
//     "dgrid_06_summary_row",
//     "dgrid_07_dropdown"
// ];
// var entry = {};
// entry_list.forEach(function(e) { entry[e] = path.resolve(__dirname, "./src/" + e) });

module.exports = {
    entry: './src/dgrid_01_hello',
    resolveLoader: {
      alias: {
        "dojo/text": 'raw-loader'
      },
      modulesDirectories: [
        path.resolve(__dirname, './node_modules/')
        // path.resolve(__dirname, './dojo')
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
        new webpack.NormalModuleReplacementPlugin(/wtl\/nls/, function(result) {
          // wtl/nls!resourceFile,resourceFile2   =>   ../src/wtl/nls?resourceFile,resourceFile2
          result.request = '../src/' + result.request.replace('!', '?')
        })
        // new webpack.BannerPlugin('ENTRY: ', { entryOnly: true })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "dojo-webpack-loader",
            }
            // ,
            // {
            //   test: [/\.xml$/, /\.resx$/], loader: 'xml-loader'
            // }
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
