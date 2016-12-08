/// <binding ProjectOpened='sass-watch' />
"use strict";

var gulp = require("gulp");
var path = require("path");
var webpack = require('webpack');
var webpackConfig = require(path.resolve(__dirname, 'webpack.config'));

gulp.task("webpack-build", function (callback) {
    webpack(webpackConfig).run(function (err, stats) {
      if (err)
        console.error(err);

      callback();
    });
});

gulp.start('webpack-build');
