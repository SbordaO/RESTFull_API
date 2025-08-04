CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  autor VARCHAR(100),
  existencia INT
);

CREATE TABLE prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_libro INT,
  fecha_prestamo DATE,
  fecha_devolucion DATE
);

CREATE TABLE reseñas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_libro INT,
  contenido TEXT,
  puntuacion INT
);