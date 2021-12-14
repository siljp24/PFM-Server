const { Router } = require('express');
const controllers = require('../controllers');
const uploads = require('../utils').multer;
const values = require('../values');
const middleware = require('../middlewares');
const router = Router();


router.post('/crearAnimal', uploads.single(values.animal), middleware.voluntario.token, controllers.animal.crear);
router.get('/listaAnimales', controllers.animal.listar);
router.get('/:idAnimal', controllers.animal.obtener);
router.put('/editarAnimal/:idAnimal', uploads.single(values.animal), middleware.voluntario.token, controllers.animal.editar);
router.delete('/eliminarAnimal', middleware.voluntario.token, controllers.animal.eliminar);

module.exports = router;