var lang = require('dojo/_base/lang');
var locale = require('locale');
console.log(module)
console.log(__resourceQuery)
var json = {};
var jsonArr = [];

__resourceQuery.substring(1)
  .split(',')
  .forEach(function (name) {
    // var resource = require('dojo/text!../../App_GlobalResources/' + locale.getLocale() + '/' + name);
    var resource = require('xml!../../App_GlobalResources/' + locale.getLocale() + '/' + name + '.resx');

    console.log(name + ' : ' + locale.getLocale());
    console.log(resource);
    lang.mixin(json, resource);
    jsonArr.push(resource);
    //  return resource;
    //  return JSON.parse(resource);
  });

module.exports = json;
// module.exports = {}
