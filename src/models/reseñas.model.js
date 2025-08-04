const pool = require('../config/db');

const obtenerTodas = async () => {
  const [rows] = await pool.query('SELECT * FROM reseñas');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM reseñas WHERE id = ?', [id]);
  return rows[0];
};

const obtenerPorLibro = async (id_libro) => {
  const [rows] = await pool.query('SELECT * FROM reseñas WHERE id_libro = ?', [id_libro]);
  return rows;
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO reseñas (id_libro, contenido, puntuacion) VALUES (?, ?, ?)',
    [data.id_libro, data.contenido, data.puntuacion]
  );
  return { id: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE reseñas SET contenido = ?, puntuacion = ? WHERE id = ?',
    [data.contenido, data.puntuacion, id]
  );
  return { id, ...data };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM reseñas WHERE id = ?', [id]);
};

module.exports = {
  obtenerTodas,
  obtenerPorId,
  obtenerPorLibro,
  crear,
  actualizar,
  eliminar
};
