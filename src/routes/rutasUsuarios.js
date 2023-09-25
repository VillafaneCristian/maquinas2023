const express = require ('express');
const router = express.Router();

const usuariosController = require ('../controllers/usuariosController.js')

router.get('/listar',usuariosController.listar);


router.get('/alta',usuariosController.alta);
router.post('/alta',usuariosController.crear);

router.get('/edit/:id', usuariosController.userEditForm);



module.exports = router;