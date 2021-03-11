const {Schema,model} =require('mongoose');


const TaskShema= new Schema({
title:{type:String, required:true},
 descripcion:{type:String, required:true},
 pinnear:{type:Boolean, required:true},
 images:[],
 tags:[],
 substareas:[],
 fecha_fin:{type:Date, required:true},
 posicion:{type:Number, required:true},
 id_user:{type:String, required:true},
 
})




module.exports=model("task",TaskShema);