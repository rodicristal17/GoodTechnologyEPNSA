<?php
include('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
require("conexion.php");
include("verificar_navegador.php");
include("buscar_nivel.php");
include('quitarseparadormiles.php');

function InsertarFacturas()
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion
        from filial where nombre like ? and estado=?  order by nombre asc";
		 
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
		  
		  
		  
		      $cod_filial=$valor['cod_filial'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $ciudad=utf8_encode($valor['ciudad']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAbmFilial(this)'>
			  <td id='td_id' style='display:none;'>".$cod_filial."</td>
			   <td  id='td_datos_1' style='width:33%' >".$nombre."</td>
			  <td  id='td_datos_2' style='width:33%' >".$ciudad."</td>
			  <td  id='td_datos_3' style='display:none' >".$estado."</td>
			  <td  id='td_datos_4' style='width:33%' >".$puntoexpedicion."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarSelect()
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	$paginaoption="";
	
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion 
        from filial where  estado='Activo'  order by nombre asc";
		 
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
		  
		  
		  
		      $cod_filial=$valor['cod_filial'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $ciudad=utf8_encode($valor['ciudad']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
		  	
		  	
			 $pagina.="<option id='$cod_filial' value='$nombre' name='$puntoexpedicion'  ></option>";
			 $paginaoption.="<option id='$cod_filial' value='$cod_filial'   >$nombre</option>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $paginaoption);
echo json_encode($informacion);	
exit;


}





verificar($funt);
?>