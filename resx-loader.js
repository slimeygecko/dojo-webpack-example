var jsonfromresx = require('jsonfromresx');

module.exports = function(content) {
    var callback = this.async();
    // if(!callback) return someSyncOperation(content);

    console.log(this.resourcePath)
    console.log(jsonfromresx)
    debugger;
    jsonfromresx.convert(this.resourcePath, null, {}, function(result, err) {
      debugger;
        if(err) return callback(err);
        console.log('-- RESULT --')
        console.log(result)
        // emitFile();
        callback(null, result);
    });
};
