require(['./testModuleB', 'dojo/domReady!'], function() {
  console.log('test that prints AFTER dom is ready');

  return {
    someFunction: function() {
      var a = 'domReadyAliasString';
      console.log('this is someFunction');
    }
  };
});
