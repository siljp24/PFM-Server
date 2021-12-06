const bcrypt = require('bcrypt');

encriptar = async (clave) => {
    return await bcrypt.hash(clave, 10);
};

comparar = async(claveDada, claveEncriptada) => {
    return await bcrypt.compare(claveDada, claveEncriptada);
};

module.exports = {
    encriptar,
    comparar,
}