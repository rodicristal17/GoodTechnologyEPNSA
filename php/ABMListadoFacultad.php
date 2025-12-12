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


	
	//CONTROL DE ACCESO
// if($funt=="nuevo"){

	// buscarnivel($user,"FACULTAD"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"FACULTAD"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"FACULTAD"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$cod_listafacultad=$_POST['idabm'];
    $cod_listafacultad = utf8_decode($cod_listafacultad);
	$nombre=$_POST['nombre'];
    $nombre = utf8_decode($nombre);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	abm($cod_listafacultad,$nombre,$estado,$funt);

}

if($funt=="buscar")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscar($buscar,$estado);

}

if($funt=="buscarSelect")
{

buscarSelect();

}





	

}

function abm($cod_listafacultad,$nombre,$estado,$funt)
{
	
	if($nombre=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from listafacultad where nombre=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='s';
$stmt->bind_param($ss,$nombre); 


if ( ! $stmt->execute()) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

$valor = 0;
$stmt->bind_result($valor);
while ($stmt->fetch()) { 
   
	 $valor =$valor;
}

if($valor>0)
{
	$informacion =array("1" => "EX");
	echo json_encode($informacion);	
	exit;
}   
	}
	
	if($funt=="nuevo")
	{
	
    $consulta="insert into listafacultad (nombre, estado) values (upper(?),?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ss';
    $stmt->bind_param($ss,$nombre,$estado); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update listafacultad set nombre=upper(?),  estado=?  where cod_listafacultad=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sss';        
    $stmt->bind_param($ss,$nombre,$estado,$cod_listafacultad); 
       
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

function buscar($buscar,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select cod_listafacultad,nombre,estado 
        from listafacultad where nombre like ? and estado=?  order by nombre asc";
		 
   $stmt = $mysqli->prepare($sql);
  	$s='ss';
$buscar1="%".$buscar."%";
//$buscar="".$buscar."";
$stmt->bind_param($s,$buscar1,$estado);

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totalArancel=-1;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $cod_listafacultad=$valor['cod_listafacultad'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmListaFacultad(this)'>
			  <td id='td_id' style='display:none;'>".$cod_listafacultad."</td>
			   <td  id='td_datos_1' style='width:60%' >".$nombre."</td>
			  <td  id='td_datos_2' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarSelect()
{
	$mysqli=conectar_al_servidor();

		$sql= "Select cod_listafacultad,nombre,estado
        from listafacultad where  estado='Activo'  order by nombre asc";
		 $pagina="";
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totalArancel=-1;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $cod_listafacultad=$valor['cod_listafacultad'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  
		  	
		  	$pagina.="<option id='$cod_listafacultad' value='$nombre'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


verificar($funt);
?>