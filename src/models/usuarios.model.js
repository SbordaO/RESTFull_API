const pool = require('../config/db');

const obtenerTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM usuario');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
  return rows[0];
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO usuario (nombre, apellido, mail, contrasenia, id_rol) VALUES (?, ?, ?, ?, ?)',
    [data.nombre, data.apellido, data.mail, data.contrasenia, data.id_rol]
  );
  return { id_usuario: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE usuario SET nombre = ?, apellido = ?, mail = ?, contrasenia = ?, id_rol = ? WHERE id_usuario = ?',
    [data.nombre, data.apellido, data.mail, data.contrasenia, data.id_rol, id]
  );
  return { id_usuario: id, ...data };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [id]);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};