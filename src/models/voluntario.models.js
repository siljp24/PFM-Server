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
        flag:{
            type: Boolean,
            //required:true,
            default:false,
        }

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = model('Voluntario', voluntarioSchema);