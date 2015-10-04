var express = require('express.io');
var http = require('http');
var app = express();
var path = require('path');

app.http().io();

var desaparecidos = [];

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.use(express.cookieParser());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


//Controllers

var homeController = require('./app/controllers/home');
var appController = require('./app/controllers/app');

homeController(app);
appController(app);

http.createServer(app).listen(app.get('port'), function(){
   console.log("init app");
});
