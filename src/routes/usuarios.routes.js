const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const usuarioController = require('../controllers/usuarios.controller');

// Rutas
router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuarioPorId);
router.post('/', usuarioController.crearUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
