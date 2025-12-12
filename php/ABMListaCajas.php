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

	// buscarnivel($user,"CARRERA"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"CARRERA"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"CARRERA"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$idcaja=$_POST['idabm'];
    $idcaja = utf8_decode($idcaja);
	$nro=$_POST['nro'];
    $nro = utf8_decode($nro);
	$cod_filialFkOrigen=$_POST['cod_filialFkOrigen'];
    $cod_filialFkOrigen = utf8_decode($cod_filialFkOrigen);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	abm($idcaja,$nro,$estado,$cod_filialFkOrigen,$funt);

}
if($funt=="nuevocajacarrera" || $funt=="editarcajarcarrera")
{
	
	
	$iddetallescajascarreras=$_POST['idabm'];
    $iddetallescajascarreras = utf8_decode($iddetallescajascarreras);
	$cod_carrera=$_POST['cod_carrera'];
    $cod_carrera = utf8_decode($cod_carrera);
	$idcajaFk=$_POST['idcajaFk'];
    $idcajaFk = utf8_decode($idcajaFk);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	abmasignarcarreracaja($iddetallescajascarreras,$cod_carrera,$idcajaFk,$estado,$funt);

}

if($funt=="buscar")
{
$filialorigen=$_POST['filialorigen'];
$filialorigen = utf8_decode($filialorigen);
$filialdestino=$_POST['filialdestino'];
$filialdestino = utf8_decode($filialdestino);
$nrocaja=$_POST['nrocaja'];
$nrocaja = utf8_decode($nrocaja);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);

buscar($filialorigen,$filialdestino,$nrocaja,$estado);

}

if($funt=="buscarSelect")
{
$codFilialOrigen=$_POST['codFilialOrigen'];
$codFilialOrigen = utf8_decode($codFilialOrigen);
buscarSelect($codFilialOrigen);

}
if($funt=="buscarasignaciondecarreras")
{
$idcajaFk=$_POST['idcajaFk'];
$idcajaFk = utf8_decode($idcajaFk);
buscarasignaciondecarreras($idcajaFk);

}





	

}

function abm($idcaja,$nro,$estado,$cod_filialFkOrigen,$funt)
{
	
	if($nro=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from listadocaja where nro=? and cod_filialFkOrigen=?   ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$nro,$cod_filialFkOrigen); 


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
	
    $consulta="insert into listadocaja (nro, estado,cod_filialFkOrigen) values (upper(?),?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sss';
    $stmt->bind_param($ss,$nro,$estado,$cod_filialFkOrigen); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update listadocaja set nro=upper(?),  estado=?, cod_filialFkOrigen=? where idcaja=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssss';        
    $stmt->bind_param($ss,$nro,$estado,$cod_filialFkOrigen,$idcaja); 
       
	}
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

if($funt=="nuevo"){
	$idcaja=buscarultimaidCaja($cod_filialFkOrigen);
}

 mysqli_close($mysqli); 

    $informacion =array("1" => "exito","2"=>$idcaja);
    echo json_encode($informacion);	
    exit;
	
}

function abmasignarcarreracaja($iddetallescajascarreras,$cod_carrera,$idcajaFk,$estado,$funt)
{
	
	if($cod_carrera=="" || $idcajaFk=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from detallescajascarreras where estado='Activo' and cod_carrera=? and idcajaFk=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$cod_carrera,$idcajaFk); 


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
	
	if($funt=="nuevocajacarrera")
	{
	
    $consulta="insert into detallescajascarreras (estado, idcajaFk,cod_carrera) values (?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sss';
    $stmt->bind_param($ss,$estado,$idcajaFk,$cod_carrera); 
 
	}
	
	if($funt=="editarcajarcarrera")
	{
        
    $consulta="Update detallescajascarreras set estado=? where iddetallescajascarreras=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ss';        
    $stmt->bind_param($ss,$estado,$iddetallescajascarreras); 
       
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

function buscarultimaidCaja($codFilialOrigen)
{
	$mysqli=conectar_al_servidor();

		$sql= "Select idcaja
        from listadocaja where estado='Activo' and cod_filialFkOrigen='$codFilialOrigen' order by idcaja desc limit 1";
		 $idcaja="";
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
		  
		      $idcaja=$valor['idcaja'];
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $idcaja;


}




function buscar($filialorigen,$filialdestino,$nrocaja,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condicionnrocaja="";
	if($nrocaja!=""){
		$condicionnrocaja=" and suc.nro like '%".$nrocaja."%' ";
	}
	$condicionfilialOrigen="";
	if($filialorigen!=""){
		$condicionfilialOrigen=" and fl1.nombre like '%".$filialorigen."%' ";
	}
	
	
		$sql= "Select suc.idcaja,suc.nro,suc.estado,suc.cod_filialFkOrigen,	
		fl1.nombre as filial1,
		fl1.puntoexpedicion
        from listadocaja suc inner join filial fl1 on fl1.cod_filial=suc.cod_filialFkOrigen 
        where suc.estado=? ".$condicionnrocaja.$condicionfilialOrigen." order by fl1.cod_filial,suc.nro asc";
		 
		
		 
   $stmt = $mysqli->prepare($sql);
  	$s='s';
$stmt->bind_param($s,$estado);

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$controltitulo="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idcaja=$valor['idcaja'];
		  	  $nro=utf8_encode($valor['nro']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_filialFkOrigen=utf8_encode($valor['cod_filialFkOrigen']);
		  	  $filial1=utf8_encode($valor['filial1']);
		  	 
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
			  
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmListaCajas(this)'>
			  <td id='td_id' style='display:none;'>".$idcaja."</td>
			   <td   style='width:25%' >".$filial1."</td>
			   <td   style='width:25%' >".$puntoexpedicion."</td>
			   	<td  id='td_datos_1' style='width:25%' >".$nro."</td>
			   <td  id='td_datos_4' style='display:none' >".$filial1."</td>
			  <td  id='td_datos_2' style='display:none' >".$estado."</td>
			  <td  id='td_datos_3' style='display:none' >".$cod_filialFkOrigen."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarasignaciondecarreras($idcajaFk)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	
		$sql= "Select dts.iddetallescajascarreras,dts.estado,dts.idcajaFk,dts.cod_carrera,
		lts.nombre  as carrera,ltc.nro as nrocaja,fl2.puntoexpedicion
		from detallescajascarreras dts inner join carrera cr on cr.cod_carrera=dts.cod_carrera 
		inner join listadecarreras lts on lts.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadocaja ltc on ltc.idcaja=dts.idcajaFk
		inner join  filial fl2 on fl2.cod_filial=ltc.cod_filialFkDestino where dts.estado='Activo' and dts.idcajaFk='$idcajaFk' ";
		 
		
		 
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$controltitulo="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $iddetallescajascarreras=$valor['iddetallescajascarreras'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $idcajaFk=utf8_encode($valor['idcajaFk']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $carrera=utf8_encode($valor['carrera']);
		  	  $nrocaja=utf8_encode($valor['nrocaja']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
			  
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarCarreraCajas(this)'>
			  <td id='td_id' style='display:none;'>".$iddetallescajascarreras."</td>
			   <td  id='td_datos_1' style='width:50%' >".$carrera."</td>
			   <td  style='width:25%' >".$nrocaja."</td>
			   <td  style='width:25%' >".$puntoexpedicion."-".$nrocaja."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarSelect($codFilialOrigen)
{
	$mysqli=conectar_al_servidor();

		$sql= "Select idcaja,nro,estado
        from listadocaja where  estado='Activo' and cod_filialFkOrigen='$codFilialOrigen'  order by nro asc";
		 $pagina="";
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
		  
		  
		  
		      $idcaja=$valor['idcaja'];
		  	  $nro=utf8_encode($valor['nro']);
		  	  
		  	
		  	$pagina.="<option id='$idcaja' value='$nro'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}




verificar($funt);
?>