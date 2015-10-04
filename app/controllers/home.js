var Centro = require('../models/centroacopio');
var Desaparecido = require('../models/desaparecido');
var Fallecido = require('../models/fallecido');
var Empresa = require('../models/empresacolabora');
var Noticia = require('../models/noticia');
var _ = require('underscore');


var homeController = function(app){
	console.log("Home Controller is Load");

	app.get('/', function (req,res){
		res.render('index');
	});

	app.get('/centrosAcopio', function (req,res){
		Centro.find()
		.exec(function (err, centros){
			var centroJson = _.map(centros, function(centro){
				return centro.toJSON();
			});

			res.render('centros',{
				centros : centroJson
			});
		});
	});

	app.get('/add/centro', function (req,res){
		res.render('addCentro');
	})

	app.get('/desaparecidos', function (req,res){
		Desaparecido.find()
		.exec(function (err, desaparecidos){
			var desaparecidoJson = _.map(desaparecidos, function(desaparecido){
				return desaparecido.toJSON();
			});

			res.render('desaparecidos', {
				desaparecidos : desaparecidoJson
			});
		});
	});

	app.get('/add/desaparecido', function (req,res){
		res.render('addDesaparecido');
	})

	app.get('/fallecidos', function (req,res){
		Fallecido.find()
		.exec(function (err, fallecidos){
			var fallecidoJson = _.map(fallecidos, function(fallecido){
				return fallecido.toJSON();	
			});

			res.render('fallecidos',{
				fallecidos : fallecidoJson
			});
		});
	});

	app.get('/add/fallecido', function (req,res){
		res.render('addFallecido');
	})

	app.get('/empresasApoyan', function(req, res){
		Empresa.find()
		.exec(function (err, empresas){
			var empresaJson = _.map(empresas, function(empresa){
				return empresa.toJSON();
			});

			res.render('empresas', {
				empresas : empresaJson
			});
		});
	
	});

	app.get('/add/empresa', function (req,res){
		res.render('addEmpresa');
	})

	app.get('/quellevar', function (req,res){
		res.render('quellevar');
	})

	app.get('/noticias', function (req,res){
		Noticia.find()
		.exec(function (err, noticias){
			var noticiaJson = _.map(noticias, function (noticia){
				return noticia.toJSON();
			});

			res.render('noticias', {
				noticias : noticiaJson
			});
		});
	})

	app.get('/add/noticia', function (req,res){
		res.render('addNoticias');
	})

};

module.exports = homeController;
