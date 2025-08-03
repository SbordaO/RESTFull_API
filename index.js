const express = require('express');
const app = express();
const puerto = 8080;

app.use(express.json());

const usuariosRoutes = require('./src/routes/usuarios.routes');
const librosRoutes = require('./src/routes/libros.routes');
const prestamosRoutes = require('./src/routes/prestamos.routes');
const reseñasRoutes = require('./src/routes/reseñas.routes');

app.use('/libros', librosRoutes);
app.use('/prestamos', prestamosRoutes);
app.use('/reseñas', reseñasRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(puerto, () => {
  console.log(`Server is running on http://localhost:${puerto}`);
});