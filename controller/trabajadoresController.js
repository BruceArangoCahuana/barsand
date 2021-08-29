const mongoose = require('mongoose');
const Trabajadores = mongoose.model('Trabajadores');

exports.home = (req,res,next) =>{
    res.render('home',{
        nombrePagina:'Inicio',
        fondo:true
    });
}

exports.mostrarlima = async(req,res,next)=>{
    const trabajadores = await Trabajadores.find({lugar:'lima'}).lean();
    //validamos que tenga trabajadores;
    if(!trabajadores){
        return next();
    }
    res.render('lima',{
        nombrePagina:'Representate de ventas Lima',
        trabajadores
    })
}

exports.mostrarprovincia = async(req,res,next) =>{
    const trabajadores = await Trabajadores.find({lugar:'provincia'}).lean();
    //validamos i existe
    if(!trabajadores){
        return next();
    }
    res.render('provincia',{
        nombrePagina:'Representante de  ventas Provincia',
        trabajadores
    })
}

//mostrar por id
exports.mostraporId = async(req,res,next) =>{
    const trabajadores = await Trabajadores.findById(req.params.id).lean();
    //validamos que exista el representate
    if(!trabajadores){
        return next();
    }
    res.render('representante',{
        nombrePagina:'Representante  de venta',
        trabajadores
    })
}

