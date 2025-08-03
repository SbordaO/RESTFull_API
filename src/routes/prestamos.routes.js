const express = require('express');
const router = express.Router();
const prestamoController = require('../controller/prestamos.controller');

router.get('/', prestamoController.getPrestamos);
router.get('/:id', prestamoController.getPrestamoPorId);
router.post('/', prestamoController.crearPrestamo);
router.put('/:id', prestamoController.actualizarPrestamo);
router.delete('/:id', prestamoController.eliminarPrestamo);

module.exports = router;
