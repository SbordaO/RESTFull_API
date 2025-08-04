const pool = require('../config/db');

const obtenerTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM usuarios');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0];
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
    [data.nombre, data.email]
  );
  return { id: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?',
    [data.nombre, data.email, id]
  );
  return { id, ...data };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
