const { Schema, model } = require('mongoose');

const voluntarioSchema = new Schema(
    {
        email:{
            type:String,
            required: true,
        },
        clave:{
            type:String,
            required: true,
        },
        nombre:{
            type: String,
            required: true,
        },
        direccion:{
            type: String,
            required: false,
        },
        telefono:{
            type: Number,
            required: false,
        },
        flag:{
            type: Boolean,
            default:false,
        }

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = model('Voluntario', voluntarioSchema);