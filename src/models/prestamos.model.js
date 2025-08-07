const pool = require('../config/db');

const obtenerTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM prestamo');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM prestamo WHERE id_prestamo = ?', [id]);
  return rows[0];
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO prestamo (id_usuario, id_libro, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)',
    [data.id_usuario, data.id_libro, data.fecha_prestamo, data.fecha_devolucion]
  );
  return { id_prestamo: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE prestamo SET id_usuario = ?, id_libro = ?, fecha_prestamo = ?, fecha_devolucion = ? WHERE id_prestamo = ?',
    [data.id_usuario, data.id_libro, data.fecha_prestamo, data.fecha_devolucion, id]
  );
  return { id_prestamo: id, ...data };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM prestamo WHERE id_prestamo = ?', [id]);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};