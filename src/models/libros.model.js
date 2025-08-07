const pool = require('../config/db');

const obtenerTodos = async () => {
  console.log("DEBUG: Ejecutando obtenerTodos en libros.model.js");
  const [rows] = await pool.query('SELECT * FROM libro');
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM libro WHERE id_libro = ?', [id]);
  return rows[0];
};

const crear = async (data) => {
  const [result] = await pool.query(
    'INSERT INTO libro (titulo, autor, editorial, anio_publicacion, genero, existencias) VALUES (?, ?, ?, ?, ?, ?)',
    [data.titulo, data.autor, data.editorial, data.anio_publicacion, data.genero, data.existencias]
  );
  return { id_libro: result.insertId, ...data };
};

const actualizar = async (id, data) => {
  await pool.query(
    'UPDATE libro SET titulo = ?, autor = ?, editorial = ?, anio_publicacion = ?, genero = ?, existencias = ? WHERE id_libro = ?',
    [data.titulo, data.autor, data.editorial, data.anio_publicacion, data.genero, data.existencias, id]
  );
  return { id_libro: id, ...data };
};

const actualizarExistencia = async (id, existencia) => {
  await pool.query(
    'UPDATE libro SET existencias = ? WHERE id_libro = ?',
    [existencia, id]
  );
  return { id_libro: id, existencia };
};

const eliminar = async (id) => {
  await pool.query('DELETE FROM libro WHERE id_libro = ?', [id]);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  actualizarExistencia,
  eliminar
};
