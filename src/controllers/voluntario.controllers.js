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
        if(!voluntario){
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

const eliminar = (req, res) =>{
    res.json("eliminar voluntario");
};

module.exports = {
    crear,
    eliminar,
    identificar,
}