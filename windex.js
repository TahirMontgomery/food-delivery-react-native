const Bundle = require('appetizer-bundle');
const bundle = new Bundle('foodDeliveryApp', '../');
bundle.run(function (err, zipfile) {
  if (err) {
    console.log(err);
  }
});
