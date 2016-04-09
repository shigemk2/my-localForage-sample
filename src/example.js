var localforage = require("localforage");
localforage.setItem('one', '1');
console.log(localforage.getItem('one'));
localforage.getItem('one', function (err, value) {
  console.log(value);
});
localforage.iterate(function(value, key, iterationNumber) {
    console.log([key, value]);
}).then(function() {
    console.log('Iteration has completed');
});


localforage.setItem('two', '2');
localforage.setItem('three', '3');
localforage.iterate(function(value, key, iterationNumber) {
    console.log([key, value]);
}).then(function() {
    console.log('Iteration has completed');
});










