const crear = (req, res) =>{
    try{

    }catch(err){
        return res.json({ })
    }
    res.json("crear voluntario");
};
const identificar = (req, res) =>{
    res.json("voluntario identificado");
}
const eliminar = (req, res) =>{
    res.json("eliminar voluntario");
};

module.exports = {
    crear,
    eliminar,
    identificar,
}