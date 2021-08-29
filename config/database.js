const mongoose = require('mongoose');
require('dotenv').config({path:'variable.env'});

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true});

//mostrar conexion a la db
mongoose.connection.on('error',(error)=>{
    console.log(error);
});

require('../models/Trabajadores');