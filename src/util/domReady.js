module.exports = function(content) {
  var regex = /([\"|\']dojo\/domReady![\'|\"]\,)|(\,\s+[\"|\']dojo\/domReady![\'|\"](?!\,))/;
  var modifiedContent = content.replace(regex, '/* $1 */')
  var isModified = content.length !== modifiedContent.length;

  return isModified ? 'require("domready")(function(){' + modifiedContent + '});' : content;
}
