const models = require('../models');
const config = require('../config');
const values = require('../values');

const crear = async (req, res) =>{
    try{
        const { nombre, especie, edad, descripcion } = req.body;
        const file = req.file;
        const animal = await models.animal.create({
            nombre, 
            especie,
            edad,
            descripcion,
            foto: config.hostname + values.animal + '/' + file.filename,
        });
        return res.status(201).json({ animal });
    }catch(err){
        return res.status(500).json({ error: err });
    }
};
const listar = async (req, res) =>{
    try{
        const animales = await models.animal.find();
        return res.status(201).json({ animales });
    }catch(err){
        return res.status(500).json({ error: err });
    }
};
const obtener = async (req, res) =>{
    try{
        const { idAnimal } = req.params;
        const animal = await models.animal.findById(idAnimal);
        if(!animal){
            return res.status(404).json({ error: "No se encontrĂ³ el animal"});
        };
        return res.status(201).json({ animal });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};
const editar = async (req, res) =>{
    try{
        const { nombre, especie, edad, descripcion } = req.body;
        const file = req.file;
        const { idAnimal } = req.params;
        const animal = await models.animal.findById(idAnimal);
        if(!animal){
            return res.status(404).json({ error: "No se encontrĂ³ el animal"});
        };
        animal.nombre = nombre;
        animal.especie = especie;
        animal.edad = edad;
        animal.descripcion = descripcion;
        if(file !== undefined){
            animal.foto = config.hostname + values.animal + '/' + file.filename;
        }
        await animal.save();
        return res.status(201).json({ animal });
    }catch(err){
        return res.status(500).json({ error: err });
    }
};
const eliminar = async (req, res) =>{
    try{
        const { idAnimal } = req.body;
        const animal = await models.animal.findById(idAnimal);
        if(!animal){
            return res.status(404).json({ error: "No se encontrĂ³ el animal"});
        };
        await models.diario.remove({ 'idAnimal': animal._id});
        await models.animal.findByIdAndDelete(animal._id);
        const animales = await models.animal.find();
        return res.status(200).json({ animales });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};

module.exports = {
    crear,
    listar,
    obtener,
    editar,
    eliminar,
}