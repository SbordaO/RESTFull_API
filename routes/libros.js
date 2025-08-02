const express = require('express');
const router = express.Router();

// Simulación de base de datos
let libros = [
  { id: 1, titulo: "1984", autor: "Orwell", existencia: 3 },
  { id: 2, titulo: "Dune", autor: "Frank Herbert", existencia: 5 }
];

// GET /libros
router.get('/', (req, res) => {
  res.json(libros);
});

// GET /libros/:id
router.get('/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
});

// POST /libros
router.post('/', (req, res) => {
  const nuevo = {
    id: libros.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor,
    existencia: req.body.existencia
  };
  libros.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /libros/:id
router.put('/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });

  libro.titulo = req.body.titulo || libro.titulo;
  libro.autor = req.body.autor || libro.autor;
  libro.existencia = req.body.existencia || libro.existencia;

  res.json(libro);
});

// PUT /libros/:id/existencia
router.put('/:id/existencia', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });

  libro.existencia = req.body.existencia;
  res.json(libro);
});

// DELETE /libros/:id
router.delete('/:id', (req, res) => {
  libros = libros.filter(l => l.id !== parseInt(req.params.id));
  res.json({ mensaje: "Libro eliminado" });
});

module.exports = router;
