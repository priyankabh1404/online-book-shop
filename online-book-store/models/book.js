var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id:{type:Number, required:true},
    imagePath:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true},
    count:{type:Number, required:true},
});

module.exports = mongoose.model('book', schema);