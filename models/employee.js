
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var schema= new Schema({
  Username:{type:String, required:true},
  Password:{type:String,required:true}
});

module.exports=mongoose.model('check',schema)
