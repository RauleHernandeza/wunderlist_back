const express = require('express');
const bcrypt = require('bcryptjs');
const user =require('../helpers/user')

const app = express();
app.post('/', function (req, res) {
    let info=req.query;
    console.log(info)
  
    // Look for email coincidence
   
  user.login(info).then(rest=>{

        
      res.send(rest);
    })

})




module.exports=app;