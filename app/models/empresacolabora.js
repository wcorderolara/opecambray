var models = require('./models'),
    move   = require('file-move'),
    path   = require('path'),
    crypto = require('crypto'),
    format = require('util').format
var Schema = models.Schema;

var DIR_STATIC_IMAGE = path.join(__dirname, '../../public/img/empresas/');

var empresaSchema = Schema({
	id	: {type: String},
	nombre : {type : String},
	photo: {type : String}
});

function randomHash(str){
	var hash = (Math.random().toString(16).slice(2) + Date.now().toString() + str);
    return crypto.createHash('sha256').update(hash).digest('hex');
}

empresaSchema.methods.uploadImage = function (imageObj, next) {
    var doc       = this;
    var type      = imageObj.type.split('/')[1];
    var nameImage = randomHash([doc.get('name'), imageObj.name].join(''));
    nameImage     = format('%s.%s', nameImage, type);
    var dest      = path.join(DIR_STATIC_IMAGE, nameImage);
    var newImage  = imageObj;

    // console.log(newImage); return false;

    move(imageObj.path, dest, function (err) {
        if ( err ) { return next(err); }
        doc.set('photo', nameImage);
        doc.save(function ( err ) {
            next(err);
        });
    });
};

var CentroAcopio = models.model('empresa', empresaSchema);

module.exports = CentroAcopio;