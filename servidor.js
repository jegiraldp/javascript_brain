const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cua = require('./public/js/uno.js');

//
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));


app.get('/inicio',(req,res)=> {
  res.render('index.ejs',{salida:"",rta:""});
});


app.post('/inicio',(req,res)=> {
  const nume1 = req.body.txtNum1;
  const nume2 = req.body.txtNum2;
  const itera = req.body.txtIte;
  const capas=req.body.txtCap
  const rta=cua.calcular(nume1,nume2,itera,capas);

  const salida=cua.salida;
  res.render('index.ejs',{salida:salida,rta:rta});
});

var port = process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("server ok -- :) -- ");
});
