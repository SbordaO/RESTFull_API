const reseniaModel = require('../model/reseñas.model');

const getResenias = async (req, res) => {
  const resenias = await reseniaModel.obtenerTodas();
  res.json(resenias);
};

const getReseniaPorId = async (req, res) => {
  const resenia = await reseniaModel.obtenerPorId(parseInt(req.params.id));
  if (!resenia) return res.status(404).json({ error: 'Reseña no encontrada' });
  res.json(resenia);
};

const getReseniasPorLibro = async (req, res) => {
  const lista = await reseniaModel.obtenerPorLibro(parseInt(req.params.id_libro));
  res.json(lista);
};

const crearResenia = async (req, res) => {
  const nueva = await reseniaModel.crear(req.body);
  res.status(201).json(nueva);
};

const actualizarResenia = async (req, res) => {
  const actualizada = await reseniaModel.actualizar(parseInt(req.params.id), req.body);
  res.json(actualizada);
};

const eliminarResenia = async (req, res) => {
  await reseniaModel.eliminar(parseInt(req.params.id));
  res.json({ mensaje: 'Reseña eliminada' });
};

module.exports = {
  getResenias,
  getReseniaPorId,
  getReseniasPorLibro,
  crearResenia,
  actualizarResenia,
  eliminarResenia
};
