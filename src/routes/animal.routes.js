const { Router } = require('express');
const controllers = require('../controllers');
const uploads = require('../utils').multer;
const values = require('../values');
const router = Router();


router.post('/crearAnimal', uploads.single(values.animal), controllers.animal.crear);
router.get('/listaAnimales', controllers.animal.listar);
router.get('/:idAnimal', controllers.animal.obtener);
router.put('/editarAnimal/:idAnimal', uploads.single(values.animal), controllers.animal.editar);
router.delete('/eliminarAnimal', controllers.animal.eliminar);

module.exports = router;