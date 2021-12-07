const models = require('../models');

const crear = async (req, res) =>{
    try{
        const { idAnimal, foto, descripcion, fecha  } = req.body;
        const existe = await models.animal.findById(idAnimal);
        if(!existe){
            return res.status(404).json({ error: "No se encontró el animal"});
        };
        const diario = await models.diario.create({
            idAnimal,
            foto,
            descripcion,
            fecha,
        });
        return res.status(201).json({ diario });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};
const obtener = async (req, res) =>{
    try{
        const { idDiario } = req.params;
        const diario = await models.diario.findById(idDiario);
        if(!diario){
            return res.status(404).json({ error: "No se encontró el diario"});
        };
        return res.status(201).json({ diario });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};
const listar = async (req, res) =>{
    try{
        const idAnimal = req.params.idAnimal;
        const animal = await models.animal.findById(idAnimal);
        if(!animal){
            return res.status(404).json({ error: "no se encontró el animal"});
        };
        const diarios = await models.diario.find({idAnimal});
        if(!diarios){
            return res.status(404).json({error: "No se encontraron diarios"});
        };
        return res.status(201).json({ diarios });
    }catch(err){
        return res.status(500).json({ error: err });
    }
};
const editar = async (req, res) =>{
    try{
        const { idAnimal, foto, descripcion, fecha } = req.body;
        const idDiario = req.params.idDiario;
        const animal = await models.animal.findById(idAnimal);
        if(!animal){
            return res.status(404).json({ error: "No se encontró el animal"});
        };
        const diario = await models.diario.findById(idDiario);
        if(!diario){
            return res.status(404).json({ error: "No se encontró el diario"});
        };
        diario.foto = foto;
        diario.descripcion = descripcion;
        diario.fecha = fecha;
        await diario.save();
        return res.status(201).json({ diario });
    }catch(err){
        return res.status(500).json({error: err});
    }
};
const eliminar = async (req, res) =>{
    try{
        const { idDiario, idAnimal } = req.body;
        const diario = await models.diario.findById(idDiario);
        if(!diario){
            return res.status(404).json({ error: "No se encontró el diario"});
        };
        await models.diario.deleteOne({ diario });
        const diarios = await models.diario.find({idAnimal});
        return res.status(200).json({ diarios });
    }catch(err){
        return res.status(500).json({ error: err });
    }
};

module.exports = {
    crear,
    obtener,
    listar,
    editar,
    eliminar,
}
