var localforage = require("localforage");
localforage.setItem('key', 'value');
console.log(localforage.getItem('key'));
localforage.getItem('key', function (err, value) {
  console.log(value);
});










