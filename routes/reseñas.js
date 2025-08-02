const express = require('express');
const router = express.Router();

let reseñas = [
  { id: 1, id_libro: 2, contenido: "Muy bueno", puntuacion: 5 }
];

// GET /reseñas
router.get('/', (req, res) => {
  res.json(reseñas);
});

// GET /reseñas/:id
router.get('/:id', (req, res) => {
  const resenia = reseñas.find(r => r.id === parseInt(req.params.id));
  if (!resenia) return res.status(404).json({ error: "Reseña no encontrada" });
  res.json(resenia);
});

// GET /reseñas/libro/:id_libro
router.get('/libro/:id_libro', (req, res) => {
  const filtro = reseñas.filter(r => r.id_libro === parseInt(req.params.id_libro));
  res.json(filtro);
});

// POST /reseñas
router.post('/', (req, res) => {
  const nueva = {
    id: reseñas.length + 1,
    id_libro: req.body.id_libro,
    contenido: req.body.contenido,
    puntuacion: req.body.puntuacion
  };
  reseñas.push(nueva);
  res.status(201).json(nueva);
});

// PUT /reseñas/:id
router.put('/:id', (req, res) => {
  const resenia = reseñas.find(r => r.id === parseInt(req.params.id));
  if (!resenia) return res.status(404).json({ error: "Reseña no encontrada" });

  resenia.contenido = req.body.contenido || resenia.contenido;
  resenia.puntuacion = req.body.puntuacion || resenia.puntuacion;

  res.json(resenia);
});

// DELETE /reseñas/:id
router.delete('/:id', (req, res) => {
  reseñas = reseñas.filter(r => r.id !== parseInt(req.params.id));
  res.json({ mensaje: "Reseña eliminada" });
});

module.exports = router;
