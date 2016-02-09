var mongoose = require('mongoose');


var PhotoSchema = new mongoose.Schema({
  title: {type: String},
  url: {type: String},
  location: {type: String}
});

var Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;


// Add month, year, order, category
