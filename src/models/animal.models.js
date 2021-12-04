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
        descripcion:{
            type:String,
            required:true,
        },
        foto:{
            type:String,
            required: true,
        },
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = model('Animal', animalSchema);