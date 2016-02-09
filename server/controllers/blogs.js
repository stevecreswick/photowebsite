var express     =        require('express'),
    path        =        require('path');

var BlogsController = express.Router();

var Blog = require('../models/blog');

BlogsController.get('/', function(req, res){
  Blog.find({}, function(err, blog){
    res.json(blog);
  });
});

BlogsController.get('/:id', function(req, res){
  var blog = Blog.findById(id, function(err, blog){
    res.json(blog);
  });
});

BlogsController.get('/edit/:id', function(req, res){
  var id = req.params.id;
  Blog.findById(id, function(err, blog){
    res.sendFile(path.join(__dirname, '../../client', 'edit-blog.html'));
  });
});

BlogsController.post('/', function(req, res){
  var blog = new Blog(req.body);
  blog.save(function(err, blog){
    res.json(blog);
  });
});

BlogsController.patch('/:id', function(req, res){
  Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedBlog){
    res.json(updatedBlog);
  });
});

BlogsController.delete('/:id', function(req, res){
  var id = req.params.id;
  Blog.findByIdAndRemove(id, function(){
    res.json({status: 202, message: "success"});
  });
});

module.exports = BlogsController;
