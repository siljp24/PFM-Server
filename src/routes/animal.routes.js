const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();


router.post('/crearAnimal', controllers.animal.crear);
router.get('/listaAnimales', controllers.animal.listar);
router.get('/:idAnimal', controllers.animal.obtener);
router.put('/editarAnimal/:idAnimal', controllers.animal.editar);
router.delete('/eliminarAnimal', controllers.animal.eliminar);

module.exports = router;