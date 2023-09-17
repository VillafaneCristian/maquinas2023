const expres = require ('express');
const router = expres.Router();

const dependenciasController = require ('../controllers/dependenciasController.js');

router.get('/alta',dependenciasController.alta);
router.post('/alta',dependenciasController.crear); 

router.get('/listar',dependenciasController.listar);

router.get('/editar/:id',dependenciasController.editar); 

module.exports = router; 