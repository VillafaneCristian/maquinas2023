const expres = require ('express');
const router = expres.Router();

const {body} = require ('express-validator');

const validacionesAltaDepedencias = [
    body('codigoDependencia').notEmpty().withMessage('Debes completar el codigo de la dependencia'),
    body('dependencia').notEmpty().withMessage('Debes ingresar el nombre de la dependencia'),
    body('ubicacion').notEmpty().withMessage('Debes ingresar la ubicacion de la dependencia')
];

const dependenciasController = require ('../controllers/dependenciasController.js');

router.get('/alta',dependenciasController.alta);

router.post('/alta',validacionesAltaDepedencias,dependenciasController.crear); 

module.exports = router; 