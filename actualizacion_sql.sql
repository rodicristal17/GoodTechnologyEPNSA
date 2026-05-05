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

ALTER TABLE `gastos` 
ADD COLUMN `idcategoria_gastoFK` INT NOT NULL DEFAULT 1 AFTER `cod_usuario`,
ADD COLUMN `idsubcategoria_gastoFK` INT NOT NULL DEFAULT 1 AFTER `idcategoria_gastoFK`;
