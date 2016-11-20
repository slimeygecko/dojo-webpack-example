var lang = require('dojo/_base/lang');
var locale = require('locale');
var json = {};

__resourceQuery.substring(1)
  .split(',')
  .forEach(function (name) {
    var resource = require('dojo/text!../../App_GlobalResources/' + locale.getLocale() + '/' + name + '.resx');

    json[name] = resource;
  });

module.exports = json;
