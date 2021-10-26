const { Schema, model } = require('mongoose');

const diarioSchema = new Schema({
    animal:{
        type:Schema.Types.ObjectId,
        ref:'Animal',
        required: true,
    }, 
    suceso:{
        type:String,
        required: true,
    }
},
{
    versionKey:false,
    timestamps:true,
})

module.exports = model.apply('Diario', diarioSchema);