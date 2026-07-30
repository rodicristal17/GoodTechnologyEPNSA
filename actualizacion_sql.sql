CREATE TABLE IF NOT EXISTS categoria_gasto (
  id_categoria_gasto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo ENUM('Ingreso','Egreso') NOT NULL,
  estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo'
);

CREATE TABLE IF NOT EXISTS subcategoria_gasto (
  id_subcategoria_gasto INT AUTO_INCREMENT PRIMARY KEY,
  id_categoria_gastoFK INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  estado ENUM('Activo','Inactivo') NOT NULL DEFAULT 'Activo'
);

INSERT INTO categoria_gasto (id_categoria_gasto, nombre, tipo, estado)
SELECT 1, 'GENERAL', 'Egreso', 'Activo'
FROM DUAL
WHERE NOT EXISTS (
  SELECT 1 FROM categoria_gasto WHERE id_categoria_gasto = 1
);

INSERT INTO subcategoria_gasto (id_subcategoria_gasto, id_categoria_gastoFK, nombre, estado)
SELECT 1, 1, 'GENERAL', 'Activo'
FROM DUAL
WHERE NOT EXISTS (
  SELECT 1 FROM subcategoria_gasto WHERE id_subcategoria_gasto = 1
);

ALTER TABLE `gastos` 
ADD COLUMN `idcategoria_gastoFK` INT NOT NULL DEFAULT 1 AFTER `cod_usuario`,
ADD COLUMN `idsubcategoria_gastoFK` INT NOT NULL DEFAULT 1 AFTER `idcategoria_gastoFK`;
