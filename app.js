const express = require('express');
const app = express();
const puerto = 8080;

app.use(express.json());

const usuariosRoutes = require('./routes/usuarios');
const librosRoutes = require('./routes/libros');
const prestamosRoutes = require('./routes/prestamos');
const reseñasRoutes = require('./routes/reseñas');

app.use('/libros', librosRoutes);
app.use('/prestamos', prestamosRoutes);
app.use('/resenias', reseñasRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(puerto, () => {
  console.log(`Server is running on http://localhost:${puerto}`);
});