const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/crearDiario', controllers.diario.crear);
router.get('/diariosAnimal/:idAnimal', controllers.diario.listar);
router.get('/:idDiario', controllers.diario.obtener);
router.put('/editarDiario/:idDiario', controllers.diario.editar);
router.delete('/eliminarDiario', controllers.diario.eliminar);

module.exports = router;