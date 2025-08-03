let resenias = [
  { id: 1, id_libro: 2, contenido: "Excelente libro", puntuacion: 5 }
];

const obtenerTodas = async () => resenias;
const obtenerPorId = async (id) => resenias.find(r => r.id === id);
const obtenerPorLibro = async (id_libro) => resenias.filter(r => r.id_libro === id_libro);

const crear = async (data) => {
  const nueva = {
    id: resenias.length + 1,
    id_libro: data.id_libro,
    contenido: data.contenido,
    puntuacion: data.puntuacion
  };
  resenias.push(nueva);
  return nueva;
};

const actualizar = async (id, data) => {
  const resenia = resenias.find(r => r.id === id);
  if (!resenia) return null;
  resenia.contenido = data.contenido || resenia.contenido;
  resenia.puntuacion = data.puntuacion || resenia.puntuacion;
  return resenia;
};

const eliminar = async (id) => {
  resenias = resenias.filter(r => r.id !== id);
};

module.exports = {
  obtenerTodas,
  obtenerPorId,
  obtenerPorLibro,
  crear,
  actualizar,
  eliminar
};
