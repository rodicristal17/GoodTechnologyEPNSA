CREATE TABLE categoria_gasto (
  id_categoria_gasto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo ENUM('Ingreso','Egreso') NOT NULL,
  estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo'
);

CREATE TABLE subcategoria_gasto (
  id_subcategoria_gasto INT AUTO_INCREMENT PRIMARY KEY,
  id_categoria_gastoFK INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo'
);