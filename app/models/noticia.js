var models = require('./models');
var Schema = models.Schema;

var noticiaSchema = Schema({
	id	: {type: String},
	titulo : {type : String},
	contenido : {type : String}
});

var Noticia = models.model('noticia', noticiaSchema);

module.exports = Noticia;