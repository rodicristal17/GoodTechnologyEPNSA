<?php

$operacion = $_POST['funt'];
$operacion = utf8_decode($operacion);
include('quitarseparadormiles.php');
require("backup.php");
require("conexion.php");
include("verificar_navegador.php");
function verificar($operacion)
{
	
 $user=$_POST['useru'];
    $user = utf8_decode($user);
	$pass=$_POST['passu'];	
	  $pass = str_replace("=","+",$pass);
$navegador=$_POST['navegador'];
$navegador = utf8_decode($navegador);
$resp=verificar_navegador($user,$navegador,$pass);
if($resp!="ok"){
$informacion =array("1" => "UI");
echo json_encode($informacion);	
exit;
}

if($operacion=="buscar")
{
buscar();

}	


if($operacion=="descargarBD")
{
	$cod_local=$_POST['cod_local'];
    $cod_local = utf8_decode($cod_local);
	
descargarBD($cod_local,$user);

}

if($operacion=="eliminarBD")
{
	$nombre_archivo=$_POST['nombre_archivo'];
    $nombre_archivo = utf8_decode($nombre_archivo);
	
	$link = '../php/'.$nombre_archivo;
	
	if(unlink($link)){
		$informacion =array("1" => "exito");
		echo json_encode($informacion);	
		exit;
	}else{
		echo trigger_error('ERROR AL ELIMINAR ARCHIVO', E_USER_NOTICE);
	exit;
	}

}	

	


}

function guardarHistorial($cod_local,$user,$descripcion)
{

$mysqli=conectar_al_servidor();


$fechahoy = date('Y-m-d');

$consulta1="Insert into historialdescargabd (cod_filial,cod_usuario,fecha,descripcion)
values('$cod_local','$user','$fechahoy','$descripcion')";

$stmt = $mysqli->prepare($consulta1);


if (!$stmt->execute()) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}

mysqli_close($mysqli);
}

function buscar()
{
	$mysqli=conectar_al_servidor();
	 $pagina='';

			$sql= "SELECT h.fecha,(SELECT Nombre FROM filial l where l.cod_filial = h.cod_filial) as nombrelocal,
			u.Nombre, u.Apellido FROM historialdescargabd h join usuario u on u.Cod_usuario=h.cod_usuario";
		
   $stmt = $mysqli->prepare($sql);
 
if ( ! $stmt->execute()) {
   echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}
 
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $nroRegistro= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  

		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $usuario=utf8_encode($valor['Nombre']) + " " + utf8_encode($valor['Apellido']);
		  	  $nombrelocal=utf8_encode($valor['nombrelocal']);
		  	
			    	 
		  	  $pagina.="
<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
<tr id='tbSelecRegistro'>
<td  id='' style='width:33%'>".$fecha."</td>
<td  id='' style='width:33%'>".$usuario."</td>
<td  id='' style='width:33%'>".$nombrelocal."</td>
</tr>
</table>";
			  
			  
	  }
 }
 
 
    
$informacion =array("1" => "exito","2" => $pagina,"3" => $nroRegistro);
echo json_encode($informacion);	
exit;


}

function descargarBD($cod_local,$user)
{
	$mysqli = conectar_al_servidor();
    $tables = array();
    $result = $mysqli->query("SHOW TABLES");
    while($row = $result->fetch_row()) {
        $tables[] = $row[0];
    }

	$fechaActual= date('Y-m-d_H-i-s');
	$nombreArchivo= 'backup'.$fechaActual.'.sql';

    $handle = fopen($nombreArchivo,'w+');

    // Deshabilitar las claves foráneas
	fwrite($handle,"SET FOREIGN_KEY_CHECKS=0;\n\n");
	
    foreach($tables as $table) {
		$return = "";
		// Obtiene los atributos de la tabla
        $result = $mysqli->query("SELECT * FROM $table");
        $num_fields = $result->field_count;
        $return .= "DROP TABLE IF EXISTS $table;";
        $row2 = $mysqli->query("SHOW CREATE TABLE $table")->fetch_row();
		$return .= "\n\n" . $row2[1] . ";\n\n";

        for ($i = 0; $i < $num_fields; $i++) {
            while($row = $result->fetch_row()) {
                $return .= "INSERT INTO $table VALUES(";
                for($j=0; $j<$num_fields; $j++) {
					$row[$j] = utf8_encode($row[$j]);
                    $row[$j] = addslashes($row[$j]);
                    $row[$j] = preg_replace("/\n/","\\n",$row[$j]);
                    if (isset($row[$j])) { $return .= '"' . $row[$j] . '"' ; } else { $return .= '""'; }
                    if ($j < ($num_fields-1)) { $return .= ','; }
                }
                $return .= ");\n";
            }
        }
		fwrite($handle,$return);
    }
	
	fwrite($handle,"\nSET FOREIGN_KEY_CHECKS=1;\n\n");
    fclose($handle);

	// Verificar si el archivo existe
	if (file_exists($nombreArchivo)) {
		guardarHistorial($cod_local,$user,$nombreArchivo);
		
		$informacion =array("1" => "exito","2" => '../php/', "3" => $nombreArchivo);
		echo json_encode($informacion);	
		exit;
	} else {
		// Archivo no encontrado
		echo trigger_error('El archivo que intentas descargar no está disponible.', E_USER_NOTICE);
		exit;
	}
}



verificar($operacion);
?>