CREATE TABLE `historialdescargabd` (
  `idhistorialdescargabd` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `cod_usuario` int(11) DEFAULT NULL,
  `cod_filial` int(11) DEFAULT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idhistorialdescargabd`)
) ENGINE=InnoDB