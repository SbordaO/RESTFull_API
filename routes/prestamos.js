const express = require('express');
const router = express.Router();

let prestamos = [
  { id: 1, id_usuario: 1, id_libro: 2, fecha_prestamo: "2025-08-01", fecha_devolucion: "2025-08-10" }
];

// GET /prestamos
router.get('/', (req, res) => {
  res.json(prestamos);
});

// GET /prestamos/:id
router.get('/:id', (req, res) => {
  const prestamo = prestamos.find(p => p.id === parseInt(req.params.id));
  if (!prestamo) return res.status(404).json({ error: "Préstamo no encontrado" });
  res.json(prestamo);
});

// POST /prestamos
router.post('/', (req, res) => {
  const nuevo = {
    id: prestamos.length + 1,
    id_usuario: req.body.id_usuario,
    id_libro: req.body.id_libro,
    fecha_prestamo: req.body.fecha_prestamo,
    fecha_devolucion: req.body.fecha_devolucion
  };
  prestamos.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /prestamos/:id
router.put('/:id', (req, res) => {
  const prestamo = prestamos.find(p => p.id === parseInt(req.params.id));
  if (!prestamo) return res.status(404).json({ error: "Préstamo no encontrado" });

  prestamo.fecha_prestamo = req.body.fecha_prestamo || prestamo.fecha_prestamo;
  prestamo.fecha_devolucion = req.body.fecha_devolucion || prestamo.fecha_devolucion;

  res.json(prestamo);
});

// DELETE /prestamos/:id
router.delete('/:id', (req, res) => {
  prestamos = prestamos.filter(p => p.id !== parseInt(req.params.id));
  res.json({ mensaje: "Préstamo eliminado" });
});

module.exports = router;
