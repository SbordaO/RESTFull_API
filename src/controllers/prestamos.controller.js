const prestamoModel = require('../models/prestamos.model');

const getPrestamos = async (req, res) => {
  const prestamos = await prestamoModel.obtenerTodos();
  res.json(prestamos);
};

const getPrestamoPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const prestamo = await prestamoModel.obtenerPorId(id);
  if (!prestamo) return res.status(404).json({ error: 'Préstamo no encontrado' });
  res.json(prestamo);
};

const crearPrestamo = async (req, res) => {
  const nuevo = await prestamoModel.crear(req.body);
  res.status(201).json(nuevo);
};

const actualizarPrestamo = async (req, res) => {
  const actualizado = await prestamoModel.actualizar(parseInt(req.params.id), req.body);
  res.json(actualizado);
};

const eliminarPrestamo = async (req, res) => {
  await prestamoModel.eliminar(parseInt(req.params.id));
  res.json({ mensaje: 'Préstamo eliminado' });
};

module.exports = {
  getPrestamos,
  getPrestamoPorId,
  crearPrestamo,
  actualizarPrestamo,
  eliminarPrestamo
};
