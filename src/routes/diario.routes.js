const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/crearDiario', controllers.diario.crear);
router.get('/diario', controllers.diario.obtener);
router.get('/listaDiarios', controllers.diario.listar);
router.put('/editarDiario', controllers.diario.editar);
router.delete('/eliminarDiario', controllers.diario.eliminar);

module.exports = router;