const express = require('express');
const bcrypt = require('bcryptjs');
const user=require('../helpers/user');
const { query } = require('express');

const app = express();
app.post('/', function (req, res) {

  let info=JSON.parse(req.body.params);
  console.log(info)
  info.password=bcrypt.hashSync(info.password,10);
  let respuesta=  user.registro(info).then(rest=>{

     console.log(rest)
     res.send(rest);
   })
  
})




module.exports=app;