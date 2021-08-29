const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const trabajoresSchemas = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    ocupacion:{
        type:String,
        trim:true
    },
    lugar:{
        type:String,
        trim:true
    },
    zona:{
        type:String,
        trim:true
    },
    imagen:{
        type:String
    },
    celular:{
        type:Number
    }
});
//crear un indice
trabajoresSchemas.index({nombre:'text'});
module.exports= mongoose.model('Trabajadores',trabajoresSchemas)