const express = require('express');
const router = express.Router();
const  trabajadoresController = require('../controller/trabajadoresController');

module.exports= ()=>{
    //mostrar todos
    router.get('/',trabajadoresController.home);
    router.get('/lima',trabajadoresController.mostrarlima);
    router.get('/provincia',trabajadoresController.mostrarprovincia);
    //redirecccionar por representante
    router.get('/representante/:id',trabajadoresController.mostraporId);
    
    return router;
}