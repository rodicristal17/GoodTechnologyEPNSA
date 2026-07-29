<?php

function conectar_al_servidor(){

/*SERVIDOR,NOMBRE USUARIO,CONTRASEÑA USUARIO,NOMBRE DE LA BASE DE DATOS*/	
$mysqli = new mysqli('localhost','root','','syscvxco_epnsa');  
$mysqli->set_charset("latin1");	

return  $mysqli;

}
 
?>