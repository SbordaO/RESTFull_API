const libroModel = require('../models/libros.model');

const getLibros = async (req, res) => {
  const libros = await libroModel.obtenerTodos();
  res.json(libros);
};

const getLibroPorId = async (req, res) => {
  const libro = await libroModel.obtenerPorId(parseInt(req.params.id));
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
  res.json(libro);
};

const crearLibro = async (req, res) => {
  const nuevo = await libroModel.crear(req.body);
  res.status(201).json(nuevo);
};

const actualizarLibro = async (req, res) => {
  const actualizado = await libroModel.actualizar(parseInt(req.params.id), req.body);
  res.json(actualizado);
};

const actualizarExistencia = async (req, res) => {
  const actualizado = await libroModel.actualizarExistencia(parseInt(req.params.id), req.body.existencia);
  res.json(actualizado);
};

const eliminarLibro = async (req, res) => {
  await libroModel.eliminar(parseInt(req.params.id));
  res.json({ mensaje: 'Libro eliminado' });
};

module.exports = {
  getLibros,
  getLibroPorId,
  crearLibro,
  actualizarLibro,
  actualizarExistencia,
  eliminarLibro
};
