const express = require('express');
const router = express.Router();

// Simulación de base de datos temporal
let usuarios = [
  { id: 1, nombre: "Juan", email: "juan@mail.com" },
  { id: 2, nombre: "Ana", email: "ana@mail.com" }
];

// GET /usuarios - Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// GET /usuarios/:id - Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(usuario);
});

// POST /usuarios - Crear un nuevo usuario
router.post('/', (req, res) => {
  const nuevo = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email
  };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /usuarios/:id - Actualizar un usuario
router.put('/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

  usuario.nombre = req.body.nombre || usuario.nombre;
  usuario.email = req.body.email || usuario.email;

  res.json(usuario);
});

// DELETE /usuarios/:id - Eliminar un usuario
router.delete('/:id', (req, res) => {
  usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
  res.json({ mensaje: "Usuario eliminado" });
});

module.exports = router;
