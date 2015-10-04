var models = require('./models');
var Schema = models.Schema;

var centroAcopioSchema = Schema({
	id	: {type: String},
	nombre : {type : String},
	direccion : {type : String},
	municipio : {type : String},
	zona : {type : String}
});

var CentroAcopio = models.model('centroacopio', centroAcopioSchema);

module.exports = CentroAcopio;