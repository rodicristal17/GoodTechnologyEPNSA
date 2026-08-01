SET @db_name := DATABASE();

SET @sql := (
  SELECT IF(COUNT(*) > 0,
    'ALTER TABLE `gastos` DROP COLUMN `arreglo`',
    'SELECT ''gastos.arreglo ya no existe''')
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = @db_name
    AND TABLE_NAME = 'gastos'
    AND COLUMN_NAME = 'arreglo'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
  SELECT IF(COUNT(*) > 0,
    'ALTER TABLE `gastos` DROP COLUMN `idcategoria_gastoFK`',
    'SELECT ''gastos.idcategoria_gastoFK ya no existe''')
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = @db_name
    AND TABLE_NAME = 'gastos'
    AND COLUMN_NAME = 'idcategoria_gastoFK'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
  SELECT IF(COUNT(*) > 0,
    'ALTER TABLE `gastos` DROP COLUMN `idsubcategoria_gastoFK`',
    'SELECT ''gastos.idsubcategoria_gastoFK ya no existe''')
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = @db_name
    AND TABLE_NAME = 'gastos'
    AND COLUMN_NAME = 'idsubcategoria_gastoFK'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

DROP TABLE IF EXISTS `subcategoria_gasto`;
DROP TABLE IF EXISTS `categoria_gasto`;
DROP TABLE IF EXISTS `descripcion_arreglo_gasto`;
