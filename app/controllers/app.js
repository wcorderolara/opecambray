var Centro = require('../models/centroacopio');
var Desaparecido = require('../models/desaparecido');
var Fallecido = require('../models/fallecido');
var Empresa = require('../models/empresacolabora');
var Noticia = require('../models/noticia');
var Voluntario = require('../models/voluntarios');
var _ = require('underscore');
var uuid = require('uuid');
var fs = require('fs');

var multipart = require('connect-multiparty');
var multipartMiddle = multipart();

var appController = function(app){

	app.post('/post/centro', function (req,res){
		var centro = new Centro({
			id: uuid.v1(),
			nombre : req.body.nombre_centro,
			direccion : req.body.direccion_centro,
			municipio : req.body.municipio_centro,
			zona : req.body.zona_centro,
		});

		centro.save(function (err){
			if(err){
				console.log('error');
				console.log(err);
			}else{
				res.redirect('/add/centro');
			}
		});
	});

	app.post('/post/desaparecido', function (req,res){
		var desaparecido = new Desaparecido({
			id: uuid.v1(),
			nombre: req.body.nombre_desaparecido,
			edad: req.body.edad_desaparecido,
		});

		desaparecido.save(function (err){
			if(err){
				console.log('error');
				console.log(err);
			}else{
				res.redirect('/add/desaparecido');
			}
		});
	});

	app.post('/post/fallecido', function (req,res){
		var fallecido = new Fallecido({
			id: uuid.v1(),
			nombre: req.body.nombre_fallecido,
			edad: req.body.edad_fallecido,
		});

		fallecido.save(function (err){
			if(err){
				console.log('error');
				console.log(err);
			}else{
				res.redirect('/add/fallecido');
			}
		});
	});

	app.post('/post/empresa',multipartMiddle, function (req, res){
		var empresa = new Empresa({
			id: uuid.v1(),
			nombre: req.body.nombre_empresa
		});

		empresa.save(function (err){
			if(err){
				console.log(err);
                res.send(500);
                return;
			}

			empresa.uploadImage(req.files.photo_empresa, function (err){
				if (err) {
	                res.send(500);
	                return;
                }
			})

			res.redirect('/add/empresa');

		});
	});

	app.post('/post/noticia', function (req, res){
		var noticia = new Noticia({
			id: uuid.v1(),
			titulo: req.body.titulo_noticia,
			contenido: req.body.contenido_noticia,
		});

		noticia.save(function (err){
			if(err){
				console.log(err);
                res.send(500);
                return;
			}else{
				res.redirect('/add/noticia');
			}
		});
	});

	app.post('/post/voluntario', function (req,res){
		var voluntario = new Voluntario({
			id: uuid.v1(),
			nombre: req.body.nombre_voluntario,
		});

		voluntario.save(function (err){
			if(err){
				console.log(err);
				res.send(500);
				return;
			}else{
				res.redirect('/add/voluntario');
			}
		});
	});
};

module.exports = appController;