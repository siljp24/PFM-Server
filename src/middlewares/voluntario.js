const jwt = require('jsonwebtoken');
const config = require('../config');

const token = (req, res, next) => {
    const { token } = req.headers;
    if(!token){
        return res.status(401).json({ error: "No tienes acceso"});
    }
    const data = jwt.verify( token, config.jwt.secret);
    if(!data){
        return res.status(401).json({ error: "No tienes acceso"});
    } 
    next();
};

module.exports = {
    token,
}