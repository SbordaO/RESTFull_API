const express = require('express');
const router = express.Router();
const reseniaController = require('../controllers/reseñas.controller');

router.get('/', reseniaController.getResenias);
router.get('/:id', reseniaController.getReseniaPorId);
router.get('/libro/:id_libro', reseniaController.getReseniasPorLibro);
router.post('/', reseniaController.crearResenia);
router.put('/:id', reseniaController.actualizarResenia);
router.delete('/:id', reseniaController.eliminarResenia);

module.exports = router;
