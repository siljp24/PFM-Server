const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/crearAnimal', controllers.animal.crear);
router.get('/animal', controllers.animal.obtener);
router.get('/listaAnimales', controllers.animal.listar);
router.put('/editarAnimal', controllers.animal.editar);
router.delete('/eliminarAnimal', controllers.animal.eliminar);

module.exports = router;