const pool = require('../config/db');

const obtenerTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM prestamos');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM prestamos WHERE id = ?', [id]);
  return rows[0];
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO prestamos (id_usuario, id_libro, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)',
    [data.id_usuario, data.id_libro, data.fecha_prestamo, data.fecha_devolucion]
  );
  return { id: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE prestamos SET fecha_prestamo = ?, fecha_devolucion = ? WHERE id = ?',
    [data.fecha_prestamo, data.fecha_devolucion, id]
  );
  return { id, ...data };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM prestamos WHERE id = ?', [id]);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
