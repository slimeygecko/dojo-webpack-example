// Example from: http://dgrid.io/tutorials/1.0/hello_dgrid/
var declare = require('dojo/_base/declare');
var Grid = require('dgrid/Grid');
var Keyboard = require('dgrid/Keyboard');
var Selection = require('dgrid/Selection');



/****** look in the console for json ******/
var text = require('util/nls!resource1,resource2');
console.log(text);



/****** the rest of the dgrid example code ******/

var data = [
    { first: 'Bob', last: 'Barker', age: 89 },
    { first: 'Vanna', last: 'White', age: 55 },
    { first: 'Pat', last: 'Sajak', age: 65 }
];

// Create a new constructor by mixing in the components
var CustomGrid = declare([ Grid, Keyboard, Selection ]);

// Now, create an instance of our custom grid which
// have the features we added!
var grid = new CustomGrid({
    columns: {
        first: 'First Name',
        last: 'Last Name',
        age: 'Age'
    },
    // for Selection; only select a single row at a time
    selectionMode: 'single',
    // for Keyboard; allow only row-level keyboard navigation
    cellNavigation: false
}, 'grid');
grid.renderArray(data);

/****** check the console for domReady! test results ******/
require('domready')(function() {
    console.log('test that prints AFTER dom is ready');
});
require(['util/testModule'], function(testModule) {});
console.log('test that prints BEFORE dom is ready');
