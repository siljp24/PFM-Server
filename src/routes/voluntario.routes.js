const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/crearVoluntario', controllers.voluntario.crear);
router.post('/identificarVoluntario', controllers.voluntario.identificar);
router.delete('/eliminarVoluntario', controllers.voluntario.eliminar); 

module.exports = router;