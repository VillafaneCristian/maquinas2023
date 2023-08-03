const express = require ('express');
const router = express.Router();

const incidentesController = require ('../controllers/incidentesController');


router.get('/alta',incidentesController.alta);


module.exports = router;