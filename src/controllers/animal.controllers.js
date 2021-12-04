const crear = (req, res) =>{
    res.json("crear animal");
};
const listar = (req, res) =>{
    res.json("lista de animales");
};
const obtener = (req, res) =>{
    res.json("obtener animal");
};
const editar = (req, res) =>{
    res.json("editar animal");
};
const eliminar = (req, res) =>{
    res.json("eliminar animal");
};

module.exports = {
    crear,
    listar,
    obtener,
    editar,
    eliminar,
}