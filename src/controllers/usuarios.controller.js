const usuarioModel = require('../models/usuarios.model');

// GET /usuarios
const getUsuarios = async (req, res) => {
  const usuarios = await usuarioModel.obtenerTodos();
  res.json(usuarios);
};

// GET /usuarios/:id
const getUsuarioPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = await usuarioModel.obtenerPorId(id);
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(usuario);
};

// POST /usuarios
const crearUsuario = async (req, res) => {
  const nuevo = await usuarioModel.crear(req.body);
  res.status(201).json(nuevo);
};

// PUT /usuarios/:id
const actualizarUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  const actualizado = await usuarioModel.actualizar(id, req.body);
  res.json(actualizado);
};

// DELETE /usuarios/:id
const eliminarUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  await usuarioModel.eliminar(id);
  res.json({ mensaje: 'Usuario eliminado' });
};

module.exports = {
  getUsuarios,
  getUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};
