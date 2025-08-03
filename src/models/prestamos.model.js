let prestamos = [
  { id: 1, id_usuario: 1, id_libro: 2, fecha_prestamo: "2025-08-01", fecha_devolucion: "2025-08-10" }
];

const obtenerTodos = async () => prestamos;
const obtenerPorId = async (id) => prestamos.find(p => p.id === id);

const crear = async (data) => {
  const nuevo = {
    id: prestamos.length + 1,
    id_usuario: data.id_usuario,
    id_libro: data.id_libro,
    fecha_prestamo: data.fecha_prestamo,
    fecha_devolucion: data.fecha_devolucion
  };
  prestamos.push(nuevo);
  return nuevo;
};

const actualizar = async (id, data) => {
  const prestamo = prestamos.find(p => p.id === id);
  if (!prestamo) return null;
  prestamo.fecha_prestamo = data.fecha_prestamo || prestamo.fecha_prestamo;
  prestamo.fecha_devolucion = data.fecha_devolucion || prestamo.fecha_devolucion;
  return prestamo;
};

const eliminar = async (id) => {
  prestamos = prestamos.filter(p => p.id !== id);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
