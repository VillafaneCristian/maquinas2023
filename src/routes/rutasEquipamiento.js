const express = require ('express');
const router = express.Router();

const equipamientoController = require ('../controllers/equipamientoController.js');

router.get('/asignacion',equipamientoController.asignacion); 
router.get('/alta',equipamientoController.alta);
router.post('/alta',equipamientoController.crear);


module.exports = router; 