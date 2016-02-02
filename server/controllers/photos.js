var express = require('express');

var PhotosController = express.Router();

var Photo = require('../models/photo');

PhotosController.get('/', function(req, res){
  Photo.find({}, function(err, photo){
    res.json(photo);
  });
});

PhotosController.post('/', function(req, res){
  var photo = new Photo(req.body);
  photo.save(function(err, photo){
    res.json(photo);
  });
});

PhotosController.delete('/:id', function(req, res){
  var id = req.params.id;
  Photo.findByIdAndRemove(id, function(){
    res.json({status: 202, message: "success"});
  });
});

module.exports = PhotosController;
