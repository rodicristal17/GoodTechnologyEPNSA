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

	// buscarnivel($user,"FILIAL"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"FILIAL"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"FILIAL"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$cod_filial=$_POST['idabm'];
    $cod_filial = utf8_decode($cod_filial);
	$nombre=$_POST['nombre'];
    $nombre = utf8_decode($nombre);
	$ciudad=$_POST['ciudad'];
    $ciudad = utf8_decode($ciudad);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$puntoexpedicion=$_POST['puntoexpedicion'];
    $puntoexpedicion = utf8_decode($puntoexpedicion);
	$cod_local=$_POST['cod_local'];
    $cod_local = utf8_decode($cod_local);
	
	abm($cod_filial,$nombre,$ciudad,$puntoexpedicion,$cod_local,$estado,$funt);

}

if($funt=="buscar")
{
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$ciudad=$_POST['ciudad'];
$ciudad = utf8_decode($ciudad);
$nroexpe=$_POST['nroexpe'];
$nroexpe = utf8_decode($nroexpe);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$ordenby=$_POST['ordenby'];
    $ordenby = utf8_decode($ordenby);
buscar($nombre,$ciudad,$nroexpe,$estado,$ordenby);

}
if($funt=="cascadaasignarcarrera")
{

cascadaasignarcarrera($user);

}
if($funt=="buscarcascadafilialArancelesAsignados")
{

buscarcascadafilialArancelesAsignados($user);

}
if($funt=="buscarcascadafilialReportMatriculados")
{

buscarcascadafilialReportMatriculados($user);

}
if($funt=="buscarSelect")
{
buscarSelect($user);

}	




	

}

function abm($cod_filial,$nombre,$ciudad,$puntoexpedicion,$cod_local,$estado,$funt)
{
	
	if($nombre=="" || $ciudad=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from filial where nombre=? and ciudad=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$nombre,$ciudad); 


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
	
    $consulta="insert into filial (nombre, ciudad, estado,puntoexpedicion,codigofilial) values (upper(?),upper(?),?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sssss';
    $stmt->bind_param($ss,$nombre,$ciudad,$estado,$puntoexpedicion,$cod_local); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update filial set nombre=upper(?), ciudad=upper(?), estado=?,puntoexpedicion=?,codigofilial=?  where cod_filial=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssssss';        
    $stmt->bind_param($ss,$nombre,$ciudad,$estado,$puntoexpedicion,$cod_local,$cod_filial); 
       
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

function buscar($nombre,$ciudad,$nroexpe,$estado,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$oderby="";
	if($ordenby=="1"){
		$oderby="order by nombre asc";
	}
	if($ordenby=="2"){
		$oderby="order by ciudad asc";
	}
	if($ordenby=="3"){
		$oderby="order by puntoexpedicion asc";
	}
	$condicionnombre="";
	$condicionciudad="";
	$condicionexpe="";
	if($nombre!=""){
		$condicionnombre=" and nombre like '%".$nombre."%' ";
	}
	if($ciudad!=""){
		$condicionnombre=" and ciudad like '%".$ciudad."%' ";
	}
	if($nroexpe!=""){
		$condicionnombre=" and puntoexpedicion like '%".$nroexpe."%' ";
	}
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion,codigofilial
        from filial where estado=? ".$condicionnombre.$condicionnombre.$condicionnombre.$oderby;
		 
   $stmt = $mysqli->prepare($sql);
  	$s='s';
$stmt->bind_param($s,$estado);

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
		  	  $codigofilial=utf8_encode($valor['codigofilial']);
		  	 $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
		  	if($ordenby=="1"){
		$styleorden1="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="2"){
		$styleorden2="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="3"){
		$styleorden3="color: #000; background-color: #e7e7e7;";
	}
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAbmFilial(this)'>
			  <td id='td_id' style='display:none;'>".$cod_filial."</td>
			   <td  id='td_datos_5' style='width:10%;' >".$codigofilial."</td>
			   <td  id='td_datos_1' style='width:30%;".$styleorden1."' >".$nombre."</td>
			  <td  id='td_datos_2' style='width:30%;".$styleorden2."'  >".$ciudad."</td>
			  <td  id='td_datos_3' style='display:none' >".$estado."</td>
			  <td  id='td_datos_4' style='width:30%;".$styleorden3."'  >".$puntoexpedicion."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarSelect($user)
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	$paginaoption="";
	
	$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFK=buscarmifilialFK($user);
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion 
        from filial where  estado='Activo' and cod_filial='$codFilialFK'  order by nombre asc";
	}else{
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion 
        from filial where  estado='Activo'  order by nombre asc";
	}
		
		 
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

function cascadaasignarcarrera($user)
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	
	
	$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFK=buscarmifilialFK($user);
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion,
	    (Select count(cod_filialOringFK) from carrera where cod_filialOringFK=cod_filial) as registro
        from filial where  estado='Activo' and cod_filial='$codFilialFK'  order by nombre asc";
	}else{
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion,
		(Select count(cod_filialOringFK) from carrera where cod_filialOringFK=cod_filial) as registro
        from filial where  estado='Activo'  order by nombre asc";
	}
		
		 
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
		  	  $registro=utf8_encode($valor['registro']);
		  	
		  	
			 $pagina.="<div class='divCascada1' >
			 <p class='pTituloCascada' id='$cod_filial' onclick='vercerrarasignarcarreralistacarrera(this)' >
			 <img id='iconocarpeta' name='iconocarpetafilialorigencarrera' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />".$nombre."</p>
			 <div class='divCascada2' name='div_asignar_carrera_filial_1' id='div_asignar_carrera_filial_".$cod_filial."' style='display:none' ></div>
			 </div>";
			
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}

function buscarcascadafilialArancelesAsignados($user)
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	
	
	$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFK=buscarmifilialFK($user);
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion
        from filial where  estado='Activo' and cod_filial='$codFilialFK'  order by nombre asc";
	}else{
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion
        from filial where  estado='Activo'  order by nombre asc";
	}
		
		 
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
		  	  
		  	
		  	
			 $pagina.="<div class='divCascada1' >
			 <p class='pTituloCascada' id='$cod_filial' onclick='vercerrarcascadaasignararancelcarrera(this)' >
			  <span id='span1' style='display:none' >$cod_filial</span>
			 <img id='iconocarpeta' name='iconocarpetafilialasignararancel' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />".$nombre."</p>
			 <div class='divCascada2' name='div_asignar_arancel_carrera_1' id='div_asignar_arancel_carrera_".$cod_filial."' style='display:none' ></div>
			 </div>";
			
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}

function buscarcascadafilialReportMatriculados($user)
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	
	
	$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFK=buscarmifilialFK($user);
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion
        from filial where  estado='Activo' and cod_filial='$codFilialFK'  order by nombre asc";
	}else{
		$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion
        from filial where  estado='Activo'  order by nombre asc";
	}
		
		 
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
		  	 
		  	
		  	
			 $pagina.="<div class='divCascada1' >
			 <p class='pTituloCascada' id='$cod_filial' onclick='vercerrarcascadareportmatriculadoscarrera(this)' >
			  <span id='span1' style='display:none' >$cod_filial</span>
			 <img id='iconocarpeta' name='iconocarpetafilialreportmatriculados' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />".$nombre."</p>
			 <div class='divCascada2' name='div_repor_matriculados_carrera_1' id='div_repor_matriculados_carrera_".$cod_filial."' style='display:none' ></div>
			 </div>";
			
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}





verificar($funt);
?>