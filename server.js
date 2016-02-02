
var express     =       require('express'),
    bodyParser  =       require('body-parser'),
    mongoose    =       require('mongoose'),
    morgan      =       require('morgan');



mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/photo-data');

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

var PhotosController = require('./server/controllers/photos')
app.use('/api/photos', PhotosController);

// var UsersController = require('./server/controllers/users');
// app.use('/api/users', UsersController);

var port = process.env.PORT || '8080';

app.listen(port, function(){
  console.log('...listening');
});
