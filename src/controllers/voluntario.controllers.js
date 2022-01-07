const models = require('../models');
const utils = require('../utils');
const jwt = require('jsonwebtoken');
const config = require('../config');

const crear = async (req, res) =>{
    try{
        const { email, clave, nombre } = req.body;
        const voluntario = await models.voluntario.findOne({ email });
        if(voluntario){
            return res.status(403).json({ error: 'Voluntario ya registrado'});
        };
        const claveBcrypt = await utils.bcrypt.encriptar(clave);
        const newVoluntario = {
            email,
            clave: claveBcrypt,
            nombre,
        }
        const data = await models.voluntario.create(newVoluntario);
        return res.status(201).json({ data });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};
const identificar = async (req, res) =>{
    try{
        const { email, clave } = req.body;
        const voluntario = await models.voluntario.findOne({ email });
        if(!voluntario.flag){
            return res.status(403).json({ error: "Voluntario no registrado o clave incorrecta"});
        };
        const comparar = await utils.bcrypt.comparar( clave, voluntario.clave);
        if(!comparar){
            return res.status(403).json({ error: "Voluntario no registrado o contraseña incorrecta"});
        };
        const token = jwt.sign({ voluntario }, config.jwt.secret);
        return res.status(201).json({ voluntario, token });
    }catch(err){
        return res.status(500).json({ error: err });
    }
};

const eliminar = async (req, res) =>{
    try{
        const idVoluntario = req.headers;
        if(!idVoluntario){
            return res.status(403).json({ error: "Voluntario no encontrado"});
        };
        const remove = await models.voluntario.findByIdAndDelete(idVoluntario);
        res.json("voluntario eliminado");
    }catch(err){
        return res.status(500).json({ error: err});
    }
};

const actualizar = async (req, res) =>{
    try{
        const { email, clave, nombre, telefono, direccion } = req.body;
        const voluntario = await models.voluntario.findOne({ email });
        if(!voluntario){
            return res.status(403).json({ error: 'Voluntario no existe'});
        };
        const claveBcrypt = await utils.bcrypt.encriptar(clave);
        const newVoluntario = {
            clave: claveBcrypt,
            nombre,
            direccion,
            telefono
        }
        const data = await models.voluntario.updateOne({_id: voluntario._id }, newVoluntario);
        return res.status(201).json({ data });
    }catch(err){
        return res.status(500).json({ error: err});
    }
};

module.exports = {
    crear,
    eliminar,
    identificar,
    actualizar,
}