const pool = require('../config/db');

const obtenerTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM libros');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);
  return rows[0];
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO libros (titulo, autor, existencia) VALUES (?, ?, ?)',
    [data.titulo, data.autor, data.existencia]
  );
  return { id: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE libros SET titulo = ?, autor = ?, existencia = ? WHERE id = ?',
    [data.titulo, data.autor, data.existencia, id]
  );
  return { id, ...data };
};

const actualizarExistencia = async (id, existencia) => {
  await pool.query(
    'UPDATE libros SET existencia = ? WHERE id = ?',
    [existencia, id]
  );
  return { id, existencia };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM libros WHERE id = ?', [id]);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  actualizarExistencia,
  eliminar
};