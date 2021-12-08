const { Router } = require('express');
const controllers = require('../controllers');
const uploads = require('../utils').multer;
const values = require('../values');
const router = Router();

router.post('/crearDiario', uploads.single(values.diario), controllers.diario.crear);
router.get('/diariosAnimal/:idAnimal', controllers.diario.listar);
router.get('/:idDiario', controllers.diario.obtener);
router.put('/editarDiario/:idDiario', uploads.single(values.diario), controllers.diario.editar);
router.delete('/eliminarDiario', controllers.diario.eliminar);

module.exports = router;