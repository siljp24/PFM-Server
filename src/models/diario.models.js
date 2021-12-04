const { Schema, model } = require('mongoose');

const diarioSchema = new Schema({
    idAnimal:{
        type:Schema.Types.ObjectId,
        ref:'Animal',
        required: true,
    }, 
    foto:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required: true,
    },
    fecha:{
        type:String,
        required:true,
    }
},
{
    versionKey:false,
    timestamps:true,
})

module.exports = model.apply('Diario', diarioSchema);