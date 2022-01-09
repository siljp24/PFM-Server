const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require('../middlewares');
const router = Router();

router.post('/crearVoluntario', controllers.voluntario.crear);
router.get('/obtenerVoluntario', middleware.voluntario.token,controllers.voluntario.obtener);
router.put('/actualizarVoluntario', controllers.voluntario.actualizar);
router.post('/identificarVoluntario', controllers.voluntario.identificar);
router.delete('/eliminarVoluntario', middleware.voluntario.token, controllers.voluntario.eliminar); 

module.exports = router;