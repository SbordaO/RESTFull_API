const pool = require('../config/db');

const obtenerTodas = async () => {
  const [rows] = await pool.query('SELECT * FROM resenia');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM resenia WHERE id_resenia = ?', [id]);
  return rows[0];
};

const obtenerPorLibro = async (id_libro) => {
  const [rows] = await pool.query('SELECT * FROM resenia WHERE id_libro = ?', [id_libro]);
  return rows;
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO resenia (id_usuario, id_libro, texto_resenia, calificacion) VALUES (?, ?, ?, ?)',
    [data.id_usuario, data.id_libro, data.texto_resenia, data.calificacion]
  );
  return { id_resenia: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE resenia SET id_usuario = ?, id_libro = ?, texto_resenia = ?, calificacion = ? WHERE id_resenia = ?',
    [data.id_usuario, data.id_libro, data.texto_resenia, data.calificacion, id]
  );
  return { id_resenia: id, ...data };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM resenia WHERE id_resenia = ?', [id]);
};

module.exports = {
  obtenerTodas,
  obtenerPorId,
  obtenerPorLibro,
  crear,
  actualizar,
  eliminar
};