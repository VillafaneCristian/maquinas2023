const express = require ('express');
const router = express.Router();


/************************Controller Require***** ***************************/
const usuariosController = require ('../controllers/usuariosController.js')

/*************************GET ALL USERS*************************************/

router.get('/listar',usuariosController.listar);

/**************************CREATE ONE USER**********************************/

router.get('/alta',usuariosController.alta);
router.post('/alta',usuariosController.crear);


/***************************EDIT ONE USER***********************************/
router.get('/edit/:id', usuariosController.editar);



module.exports = router;