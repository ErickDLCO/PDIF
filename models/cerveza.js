const mongoose = require('mongoose');

const EstadosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    CVE_ENT:{
        type:Number
    },

    NOM_ENT:{
        type:String, 
        required:true
    },

    Latitud:{
        type:Number
    },

    Longitud:{
        type:Number
    }
})

    module.exports= mongoose.Schema('Cerveza',EstadosSchema)
