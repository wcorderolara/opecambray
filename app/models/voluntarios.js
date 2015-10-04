var models = require('./models');
var Schema = models.Schema;

var voluntarioSchema = Schema({
	id	: {type: String},
	nombre : {type : String}
});

var Voluntario = models.model('voluntario', voluntarioSchema);

module.exports = Voluntario;