var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost');
mongoose.connect('mongodb://cambraydb:cambraydb@ds029224.mongolab.com:29224/cambrayop');

module.exports = mongoose;