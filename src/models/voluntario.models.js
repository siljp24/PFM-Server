const { Schema, model } = require('mongoose');

const voluntarioSchema = new Schema(
    {
        email:{
            type:String,
            required: true,
        },
        contraseña:{
            type:String,
            required: true,
        },
        nombre:{
            type: String,
            required: true,
        },
        avatar:{
            type:String,
            default: '',
        },
        flag:{
            type: Boolean,
            required:true,
            default:true,
        }

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = model('Voluntario', voluntarioSchema);