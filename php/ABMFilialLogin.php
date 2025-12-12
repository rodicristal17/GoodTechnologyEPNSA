<?php
include('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
require("conexion.php");

function verificar($funt)
{
	
	
	
if($funt=="buscarSelect")
{
buscarSelect();

}	




	

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
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $paginaoption);
echo json_encode($informacion);	
exit;


}





verificar($funt);
?>