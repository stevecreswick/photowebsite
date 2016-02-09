var mongoose = require('mongoose');


var BlogSchema = new mongoose.Schema({
  title: {type: String},
  message: {type: String},
  date: {type: Date},
  tags: {type: String}
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
