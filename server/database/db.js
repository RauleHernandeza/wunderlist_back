const mongoose=require('mongoose');



mongoose.connect('mongodb://localhost/wunderlist',{
useCreateIndex:true,
useFindAndModify:false,
useNewUrlParser:true


})
.then(db=>{
    console.log("conectado")
}).catch(err=>{
    console.log(err)
})

