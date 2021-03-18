const express = require('express')
const app = express();
const dd = http.createserver(app);
const path = require('path');
const cors=require('cors');


app.use(cors());
app.use(express.json())
app.use(require('./server/routes/index'));

require('./server/database/db');
app.set('port', process.env.PORT || 3000);

app.get('/',function(req,res){
console.log("hola")
res.send(200);

})

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
dd.listen(app.get('port'), () => {
    console.log("Escuchando en puerto tal o 3000");
})

