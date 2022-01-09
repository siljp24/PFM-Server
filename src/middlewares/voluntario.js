const jwt = require('jsonwebtoken');
const config = require('../config');

const token = (req, res, next) => {
    try{
        const { token } = req.headers;
        if(!token || token === ''){
            return res.status(401).json({ error: "No tienes acceso"});
        }
        const data = jwt.verify( token, config.jwt.secret);
        if(!data){
            return res.status(401).json({ error: "No tienes acceso"});
        } 
        req.headers = data.voluntario._id;
        next();
    }catch(err){
        return res.status(500).json({ error: err });
    }
};


module.exports = {
    token,
}