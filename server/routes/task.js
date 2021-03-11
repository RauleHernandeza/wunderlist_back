
const express = require('express');
const task = require('../helpers/task');

const app=express();
app.post('/', function (req, res) {
    let info=req.query;
    console.log("este es el body"+JSON.stringify(info))
  
    // Look for email coincidence
   

   task.createTask(info).then(rest=>{

        console.log(rest)
        res.send(rest);
      })
})

app.get('/',function(req,res){


let info=req.query;


task.selectTask(info).then(rest=>{

res.send(rest)

})

})

app.put('/',function(req,res){

let info=req.query;
task.updateTask(info).then(rest=>{

res.send(rest);

})


})
app.delete('/',function (req,res){

    let info=req.query;
       task.deleteTask(info).then(rest=>{

        res.send(rest);
       })

})

module.exports=app