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
	
	
	$idfacturashabilitadas=$_POST['idabm'];
    $idfacturashabilitadas = utf8_decode($idfacturashabilitadas);
	$NroInicio=$_POST['NroInicio'];
    $NroInicio = utf8_decode($NroInicio);
	$NroFin=$_POST['NroFin'];
    $NroFin = utf8_decode($NroFin);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$nrotimbrado=$_POST['nrotimbrado'];
    $nrotimbrado = utf8_decode($nrotimbrado);
	$fechavencimiento=$_POST['fechavencimiento'];
    $fechavencimiento = utf8_decode($fechavencimiento);
	$codcajaFk=$_POST['codcajaFk'];
    $codcajaFk = utf8_decode($codcajaFk);
	
	$codLocalFk=$_POST['codLocalFk'];
    $codLocalFk = utf8_decode($codLocalFk);
	abm($idfacturashabilitadas,$codLocalFk,$NroInicio,$NroFin,$estado,$nrotimbrado,$fechavencimiento,$codcajaFk,$funt);

}

if($funt=="buscar")
{
$filialorigen=$_POST['filialorigen'];
$filialorigen = utf8_decode($filialorigen);
$nrocaja=$_POST['nrocaja'];
$nrocaja = utf8_decode($nrocaja);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$nroinico=$_POST['nroinico'];
$nroinico = utf8_decode($nroinico);

buscar($filialorigen,$nrocaja,$estado,$nroinico);

}

if($funt=="buscarSelect")
{
$codFilialOrigen=$_POST['codFilialOrigen'];
$codFilialOrigen = utf8_decode($codFilialOrigen);
$codFilialDestino=$_POST['codFilialDestino'];
$codFilialDestino = utf8_decode($codFilialDestino);
buscarSelect($codFilialOrigen,$codFilialDestino);

}



}

function abm($idpuntoexpedicion,$codLocalFk,$NroInicio,$NroFin,$estado,$nrotimbrado,$fechavencimiento,$codcajaFk,$funt)
{
	
	if($NroInicio=="" || $NroFin=="" || $nrotimbrado==""|| $fechavencimiento==""|| $codcajaFk=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();
	$fechahoy=date('Y-m-d');
	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from puntoexpedicion where NroInicio=? and NroFin=? and codcajaFk=? and nrotimbrado=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ssss';
$stmt->bind_param($ss,$NroInicio,$NroFin,$codcajaFk,$nrotimbrado); 


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
	
    $consulta="insert into puntoexpedicion (NroInicio, NroFin, estado, fechaactualizacion,   nrotimbrado, fechavencimiento, codcajaFk,cod_filialFk) values (?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssss';
    $stmt->bind_param($ss,$NroInicio, $NroFin, $estado,$fechahoy,$nrotimbrado,$fechavencimiento,$codcajaFk,$codLocalFk); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update puntoexpedicion set NroInicio=?, NroFin=?,estado=?,fechaactualizacion=?,nrotimbrado=?,fechavencimiento=?,codcajaFk=? ,cod_filialFk=?  where idpuntoexpedicion=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sssssssss';        
    $stmt->bind_param($ss,$NroInicio, $NroFin, $estado,$fechahoy,$nrotimbrado,$fechavencimiento,$codcajaFk,$codLocalFk,$idpuntoexpedicion); 
       
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

function buscar($filialorigen,$nrocaja,$estado,$nroinico)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condicionnrocaja="";
	if($nrocaja!=""){
		$condicionnrocaja=" and lts.nro like '%".$nrocaja."%' ";
	}
	$condicionfilialOrigen="";
	if($filialorigen!=""){
		$condicionfilialOrigen=" and fl1.nombre like '%".$filialorigen."%' ";
	}
	
	$condicionNroInicio="";
	if($nroinico!=""){
		$condicionNroInicio=" and (pe.NroInicio >='$nroinico' and pe.NroInicio <='$nroinico') ";
	}
	
	
		// $sql= "Select nf.idfacturashabilitadas, nf.NroInicio, nf.NroFin, nf.estado, nf.fechaactualizacion, nf.nrotimbrado, nf.fechavencimiento, nf.codcajaFk, lts.nro as nrocaja,
		// fl1.nombre as filial1, fl1.puntoexpedicion
         // from nrodefacturashabilitadas nf inner join listadocaja lts on lts.idcaja=nf.codcajaFk
		 // inner join filial fl1 on fl1.cod_filial=lts.cod_filialFkOrigen 
          // where nf.estado='$estado'
		 // ".$condicionnrocaja.$condicionfilialOrigen.$condicionNroInicio;
		 
		$sql= " Select idpuntoexpedicion,  lts.nro as nrocaja, NroInicio, NroFin, pe.estado, fechaactualizacion, pe.cod_filialFk, codFilialFKPunto, 
		nrotimbrado, fechavencimiento, nombrecaja, codigo, codcajaFk , 
		fl1.nombre as filial1, fl1.puntoexpedicion		
		from  puntoexpedicion pe  inner join listadocaja lts on lts.idcaja=codcajaFk
		inner join filial fl1 on fl1.cod_filial=lts.cod_filialFkOrigen 
		where pe.estado='$estado'  ".$condicionnrocaja.$condicionfilialOrigen.$condicionNroInicio;;
		
		// echo($sql);
		// exit;
		 
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
		  
		  
		  
		      $idpuntoexpedicion=$valor['idpuntoexpedicion'];
		  	  $NroInicio=utf8_encode($valor['NroInicio']);
		  	  $NroFin=utf8_encode($valor['NroFin']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $fechaactualizacion=utf8_encode($valor['fechaactualizacion']);
		  	  $nrotimbrado=utf8_encode($valor['nrotimbrado']);
		  	  $fechavencimiento=utf8_encode($valor['fechavencimiento']);
		  	  $codcajaFk=utf8_encode($valor['codcajaFk']);
		  	  $nrocaja=utf8_encode($valor['nrocaja']);
		  	  $filial1=utf8_encode($valor['filial1']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
			  
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmHabilitarCaja(this)'>
			  <td id='td_id' style='display:none;'>".$idpuntoexpedicion."</td>
			   <td   id='td_datos_1' style='width:15%' >".$filial1."</td>
			   <td   id='td_datos_2' style='width:15%;display:none' ></td>
			   <td   style='width:10%' >".$puntoexpedicion."-".$nrocaja."</td>
			   <td   id='td_datos_3' style='display:none' >".$nrocaja."</td>
			   	<td  id='td_datos_4' style='width:10%' >".$NroInicio."</td>
			   	<td  id='td_datos_5' style='width:10%' >".$NroFin."</td>
			   	<td  id='td_datos_6' style='width:10%' >".$nrotimbrado."</td>
			   	<td  id='td_datos_7' style='width:10%' >".$fechavencimiento."</td>
			  <td  id='td_datos_8' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarSelect($codFilialOrigen,$codFilialDestino)
{
	$mysqli=conectar_al_servidor();

		$sql= "Select idcaja,nro,estado
        from listadocaja where  estado='Activo' and cod_filialFkOrigen='$codFilialOrigen' and  cod_filialFkDestino='$codFilialDestino' order by nro asc";
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