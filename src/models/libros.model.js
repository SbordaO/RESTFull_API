let libros = [
  { id: 1, titulo: '1984', autor: 'George Orwell', existencia: 4 },
  { id: 2, titulo: 'Dune', autor: 'Frank Herbert', existencia: 2 }
];

const obtenerTodos = async () => libros;
const obtenerPorId = async (id) => libros.find(l => l.id === id);
const crear = async (data) => {
  const nuevo = { id: libros.length + 1, ...data };
  libros.push(nuevo);
  return nuevo;
};
const actualizar = async (id, data) => {
  const libro = libros.find(l => l.id === id);
  if (!libro) return null;
  libro.titulo = data.titulo || libro.titulo;
  libro.autor = data.autor || libro.autor;
  libro.existencia = data.existencia || libro.existencia;
  return libro;
};
const actualizarExistencia = async (id, existencia) => {
  const libro = libros.find(l => l.id === id);
  if (!libro) return null;
  libro.existencia = existencia;
  return libro;
};
const eliminar = async (id) => {
  libros = libros.filter(l => l.id !== id);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  actualizarExistencia,
  eliminar
};
