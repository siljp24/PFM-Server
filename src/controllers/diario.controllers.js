const crear = (req, res) =>{
    res.json("diario creado");
};
const obtener = (req, res) =>{
    res.json("diario obtenido");
};
const listar = (req, res) =>{
    res.json("lista de diarios");
};
const editar = (req, res) =>{
    res.json("diario editado");
};
const eliminar = (req, res) =>{
    res.json("diario eliminado");
};

module.exports = {
    crear,
    obtener,
    listar,
    editar,
    eliminar,
}
