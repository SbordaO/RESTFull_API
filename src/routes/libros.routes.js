const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libros.controller');

router.get('/', libroController.getLibros);
router.get('/:id', libroController.getLibroPorId);
router.post('/', libroController.crearLibro);
router.put('/:id', libroController.actualizarLibro);
router.put('/:id/existencia', libroController.actualizarExistencia);
router.delete('/:id', libroController.eliminarLibro);

module.exports = router;
