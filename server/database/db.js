const mongoose=require('mongoose');



mongoose.connect('mongodb+srv://newuser123:newuser123@cluster0.tldww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
useCreateIndex:true,
useFindAndModify:false,
useNewUrlParser:true


})
.then(db=>{
    console.log("conectado")
}).catch(err=>{
    console.log(err)
})

