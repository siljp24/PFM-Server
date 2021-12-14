const { Router } = require('express');
const controllers = require('../controllers');
const uploads = require('../utils').multer;
const values = require('../values');
const middleware = require('../middlewares');
const router = Router();

router.post('/crearDiario', uploads.single(values.diario), middleware.voluntario.token, controllers.diario.crear);
router.get('/diariosAnimal/:idAnimal', controllers.diario.listar);
router.get('/:idDiario', controllers.diario.obtener);
router.put('/editarDiario/:idDiario', uploads.single(values.diario), middleware.voluntario.token, controllers.diario.editar);
router.delete('/eliminarDiario', middleware.voluntario.token, controllers.diario.eliminar);

module.exports = router;