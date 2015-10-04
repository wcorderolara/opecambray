var models = require('./models');
var Schema = models.Schema;

var desaparecidoSchema = Schema({
	id	: {type: String},
	nombre : {type : String},
	edad : {type : Number},
});

var Desaparecido = models.model('desaparecido', desaparecidoSchema);

module.exports = Desaparecido;