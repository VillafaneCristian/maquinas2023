const express = require ('express');
const router = express.Router();

const usuariosController = require ('../controllers/usuariosController.js')

router.get('/alta',usuariosController.alta);
router.post('/alta',usuariosController.crear);




module.exports = router;