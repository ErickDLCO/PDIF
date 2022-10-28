const express = require('express');
const router = express.Router();
const cervezacontroller = require('../controller/CervezaController')


//RUTAS PARA UNIDAD
router.post('/',cervezacontroller.CrearCerveza);
router.get('/',cervezacontroller.ObtenerCerveza);

module.exports = router;