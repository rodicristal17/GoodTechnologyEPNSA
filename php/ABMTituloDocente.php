<?php
include('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
require("conexion.php");
include("verificar_navegador.php");
include("buscar_nivel.php");
include('quitarseparadormiles.php');
function verificar($funt)
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


	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$cod_titulo_docente=$_POST['cod_titulo_docente'];
    $cod_titulo_docente = utf8_decode($cod_titulo_docente);
	$descripcion=$_POST['descripcion'];
    $descripcion = utf8_decode($descripcion);
	$tipo=$_POST['tipo'];
    $tipo = utf8_decode($tipo);
	$cod_listadoProfesoresFK=$_POST['cod_listadoProfesoresFK'];
    $cod_listadoProfesoresFK = utf8_decode($cod_listadoProfesoresFK);
	$carrera=$_POST['carrera'];
    $carrera = utf8_decode($carrera);
	
	abm($cod_titulo_docente,$descripcion,$tipo,$cod_listadoProfesoresFK,$carrera,$funt);

}

if($funt=="Eliminar")
{	
	$cod_titulo_docente=$_POST['cod_titulo_docente'];
    $cod_titulo_docente = utf8_decode($cod_titulo_docente);

	Eliminar($cod_titulo_docente,$funt);

}

if($funt=="buscar")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscar($buscar);

}


	

}

function abm($cod_titulo_docente,$descripcion,$tipo,$cod_listadoProfesoresFK,$carrera,$funt)
{
	
	if($descripcion=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	
	if($funt=="nuevo")
	{
	
    $consulta="insert into titulo_docente (descripcion,tipo,cod_listadoProfesoresFK,estado,carrera) values 
	(upper(?),?,?,'Activo',?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssss';
    $stmt->bind_param($ss,$descripcion,$tipo,$cod_listadoProfesoresFK,$carrera); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update titulo_docente set descripcion=upper(?),tipo=?,carrera=?  where cod_titulo_docente=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssss';        
    $stmt->bind_param($ss,$descripcion,$tipo,$carrera,$cod_titulo_docente); 
       
	}
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 

    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function buscar($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select cod_titulo_docente , descripcion , upper(tipo) as tipo , carrera
        from titulo_docente where estado='Activo' and cod_listadoProfesoresFK=".$buscar."";
		 
   $stmt = $mysqli->prepare($sql);

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
	$result = $stmt->get_result();
	$valor= mysqli_num_rows($result);
	$totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $cod_titulo_docente=$valor['cod_titulo_docente'];
		  	  $descripcion=utf8_encode($valor['descripcion']);
			  $tipo=utf8_encode($valor['tipo']);
			  $carrera=utf8_encode($valor['carrera']);

			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosTituloDocente(this)'>
			  <td id='td_datos_1' style='display:none;'>".$cod_titulo_docente."</td>
			  <td  id='td_datos_2' style='width:35%;' >".$descripcion."</td>
			  <td  id='td_datos_3' style='width:30%;' >".$tipo."</td>
			  <td  id='td_datos_4' style='width:35%;' >".$carrera."</td>
			  </tr>
			  </table>";
			    	 
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function Eliminar($cod_titulo_docente,$funt)
{
	

	if($cod_titulo_docente=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="Eliminar")
	{
        
    $consulta="Update titulo_docente set estado='Inactivo' where cod_titulo_docente=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='s';        
    $stmt->bind_param($ss,$cod_titulo_docente); 
       
	}
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 

    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}



verificar($funt);
?>