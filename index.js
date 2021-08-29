const mongoose = require('mongoose');
require('./config/database');

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require("./routes");
const cookieparser = require('cookie-parser');
const createError = require('http-errors');
const session = require('express-session');
const Mongostore = require('connect-mongo')(session);
require('dotenv').config({path:'variable.env'})
const app = express();


//habilitando handlebars
app.engine('handlebars',
    exphbs({defaultLayout:'layout'})
)
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieparser());
app.use(session({
    secret:process.env.SECRETO,
    key:process.env.KEY,
    resave:false,
    saveUninitialized:false,
    store:new Mongostore({
        mongooseConnection:mongoose.connection
    })
}));

app.use('/',router());

//pagina no encontrada 404
app.use((req,res,next)=>{
    next(createError(404,'Pagina no encontrada'));
})
//administrar error
app.use((error,req,res,next)=>{
    res.locals.mensaje = error.message;

    res.render('error',{
        nombrePagina:'Pagina no encontrada',
        fondo:true
    });
})
//heroku asigne el puerto
const host = '0.0.0.0';
const port = process.env.PUERTO; 
app.listen( port,host,()=>{
    console.log("Servidor listo");
})