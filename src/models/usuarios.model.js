let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com' },
  { id: 2, nombre: 'Ana', email: 'ana@mail.com' }
];

const obtenerTodos = async () => {
  return usuarios;
};

const obtenerPorId = async (id) => {
  return usuarios.find(u => u.id === id);
};

const crear = async (data) => {
  const nuevo = {
    id: usuarios.length + 1,
    nombre: data.nombre,
    email: data.email
  };
  usuarios.push(nuevo);
  return nuevo;
};

const actualizar = async (id, data) => {
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return null;
  usuario.nombre = data.nombre || usuario.nombre;
  usuario.email = data.email || usuario.email;
  return usuario;
};

const eliminar = async (id) => {
  usuarios = usuarios.filter(u => u.id !== id);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
