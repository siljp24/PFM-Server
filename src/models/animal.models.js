const { Schema, model } = require('mongoose');

const animalSchema = new Schema(
    {
        nombre:{
            type:String,
            required:true,
        },
        especie:{
            type:String,
            required:true,
        },
        edad:{
            type:Number,
            default: 0,
        },
        reseña:{
            type:String,
            required:true,
        },
        avatar:{
            type:String,
            required: true,
        },
        coleccion:{
            type: [],
            required:false,
        }

    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = model('Animal', animalSchema);