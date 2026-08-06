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

CREATE TABLE IF NOT EXISTS `asistencia_docente` (
  `idasistencia_docente` int(11) NOT NULL AUTO_INCREMENT,
  `iddocente_catedraFK` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `estado_asistencia` varchar(45) NOT NULL DEFAULT 'Pendiente',
  `hora_entrada` varchar(45) DEFAULT NULL,
  `hora_salida` varchar(45) DEFAULT NULL,
  `observacion` varchar(250) DEFAULT NULL,
  `cod_usuario` int(11) NOT NULL DEFAULT '0',
  `editadopor` int(11) NOT NULL DEFAULT '0',
  `fechainser` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaedit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idasistencia_docente`),
  UNIQUE KEY `uq_asistencia_docente_fecha` (`iddocente_catedraFK`,`fecha`),
  KEY `fk_asistencia_docente_docente_catedra_idx` (`iddocente_catedraFK`),
  CONSTRAINT `fk_asistencia_docente_docente_catedra` FOREIGN KEY (`iddocente_catedraFK`) REFERENCES `docente_catedra` (`iddocente_catedra`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
