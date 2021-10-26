const { Schema, model } = require('mongoose');

const padrinoSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    contraseña:{
        type:String,
        required:true,
    }, 
    nombre:{
        type:String,
        required: true,
    },
    apadrinados:{
        type:[],
        required:true,
    }
    },
    {
        versionKey: false,
        timestamps:true,
    }
);

module.exports = model('Padrino', padrinoSchema);