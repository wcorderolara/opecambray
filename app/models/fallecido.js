var models = require('./models');
var Schema = models.Schema;

var fallecidoSchema = Schema({
	id	: {type: String},
	nombre : {type : String},
	edad : {type : Number},
});

var Fallecido = models.model('fallecido', fallecidoSchema);

module.exports = Fallecido;