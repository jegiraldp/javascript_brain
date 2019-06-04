const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cua = require('./uno.js');

//settings
app.set('appName','Server One');
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/inicio',(req,res)=> {
  const rta=cua.calcular();
  const salida=cua.salida;
  res.render('index.ejs',{salida:salida,rta:rta});
});

/*app.get('/calcuadrado',(req,res)=> {
  //const nume=req.query.txtNum;
  const cuadrado=0;
  res.render('cuadrado.ejs',{cuadrado:cuadrado});
});*/

const server = app.listen(3000,()=>{
    console.log("server ok -- :) -- "+app.get('appName')+' presiona Ctrl-C para terminar.' );
});
