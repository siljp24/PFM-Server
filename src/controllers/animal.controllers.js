const models = require('../models');

const crear = async (req, res) =>{
    try{
        const { nombre, especie, edad, descripcion, foto } = req.body;
        const animal = await models.animal.create({
            nombre, 
            especie,
            edad,
            descripcion,
            foto,
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
            return res.status(404).json({ error: "No se encontró el animal"});
        };
        return res.status(201).json({ animal });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};
const editar = async (req, res) =>{
    try{
        const { nombre, especie, edad, descripcion, foto } = req.body;
        const { idAnimal } = req.params;
        const animal = await models.animal.findById(idAnimal);
        if(!animal){
            return res.status(404).json({ error: "No se encontró el animal"});
        };
        animal.nombre = nombre;
        animal.especie = especie;
        animal.edad = edad;
        animal.descripcion = descripcion;
        animal.foto = foto;
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
            return res.status(404).json({ error: "No se encontró el animal"});
        };
        const diarios = await models.diario.deleteMany({idAnimal});
        await models.animal.deleteOne(animal);
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