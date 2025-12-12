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

	// buscarnivel($user,"ASIGNAR NRO FACTURA"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar" || $funt=="CambiarDatos"){
	
	// buscarnivel($user,"ASIGNAR NRO FACTURA"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"ASIGNAR NRO FACTURA"," buscar='SI' ");
// }
// if($funt=="buscarreportfacturashabilitadas"){

	// buscarnivel($user,"CONSULTAR NRO DE FACTURAS"," informes='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$idpuntoexpedicion=$_POST['idabm'];
    $idpuntoexpedicion = utf8_decode($idpuntoexpedicion);
	$nrocaja=$_POST['nrocaja'];
    $nrocaja = utf8_decode($nrocaja);
	$cod_filialFk=$_POST['cod_filialFk'];
    $cod_filialFk = utf8_decode($cod_filialFk);
	$NroInicio=$_POST['NroInicio'];
    $NroInicio = utf8_decode($NroInicio);
	$NroFin=$_POST['NroFin'];
    $NroFin = utf8_decode($NroFin);
	$codFilialFKPunto=$_POST['codFilialFKPunto'];
    $codFilialFKPunto = utf8_decode($codFilialFKPunto);
		$Estado=$_POST['Estado'];
    $Estado = utf8_decode($Estado);
	$nrotimbrado=$_POST['nrotimbrado'];
    $nrotimbrado = utf8_decode($nrotimbrado);
	$fechavencimiento=$_POST['fechavencimiento'];
    $fechavencimiento = utf8_decode($fechavencimiento);
	abm($idpuntoexpedicion,$cod_filialFk,$codFilialFKPunto,$nrocaja,$NroInicio,$NroFin,$Estado,$nrotimbrado,$fechavencimiento,$funt);

}
if($funt=="CambiarDatos" )
{
	
	
	$idpuntoexpedicion=$_POST['idAbm'];
    $idpuntoexpedicion = utf8_decode($idpuntoexpedicion);
	$Estado=$_POST['estado'];
    $Estado = utf8_decode($Estado);
	CambiarDatos($idpuntoexpedicion,$Estado);

}

if($funt=="buscar")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscar($buscar,$estado);

}
if($funt=="buscarhistorial")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codCarreraFk=$_POST['codCarreraFk'];
$codCarreraFk = utf8_decode($codCarreraFk);
buscarhistorial($buscar,$estado,$codCarreraFk);

}

if($funt=="buscarreportfacturashabilitadas")
{

$fecha1=$_POST['fecha1'];
$fecha1 = utf8_decode($fecha1);
$fecha2=$_POST['fecha2'];
$fecha2 = utf8_decode($fecha2);
$nrotimbrado=$_POST['nrotimbrado'];
$nrotimbrado = utf8_decode($nrotimbrado);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$codFilialorigen=$_POST['codFilialorigen'];
$codFilialorigen = utf8_decode($codFilialorigen);
$codFilialDestino=$_POST['codFilialDestino'];
$codFilialDestino = utf8_decode($codFilialDestino);
$Estado=$_POST['Estado'];
$Estado = utf8_decode($Estado);
if($codFilialorigen==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialorigen=buscarmifilialFK($user);
		
	}
}
if($codFilialDestino==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialDestino=buscarmifilialFK($user);
		
	}
}
buscarreportfacturashabilitadas($nrotimbrado,$codCarrera,$fecha1,$fecha2,$codFilialorigen,$codFilialDestino,$Estado);

}

if($funt=="buscarnrocajas")
{
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
buscarpuntosexpedicion($codFilial);

}

if($funt=="buscarcarreradefilial")
{
$codFilialDestino=$_POST['codFilialDestino'];
$codFilialDestino = utf8_decode($codFilialDestino);
$codFilialOrigen=$_POST['codFilialOrigen'];
$codFilialOrigen = utf8_decode($codFilialOrigen);
buscarcarreradefilial($codFilialOrigen,$codFilialDestino);

}


}

function abm($idpuntoexpedicion,$cod_filialFk,$codFilialFKPunto,$nrocaja,$NroInicio,$NroFin,$Estado,$nrotimbrado,$fechavencimiento,$funt)
{
	
	if($NroInicio=="" || $NroFin=="" || $cod_filialFk==""||$codFilialFKPunto==""|| $nrocaja==""|| $nrotimbrado==""|| $fechavencimiento=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
$mysqli=conectar_al_servidor();

$totalcarreras=$_POST['totalcarreras'];
$totalcarreras = utf8_decode($totalcarreras);	
$nrocontrol=1;
while($nrocontrol<=$totalcarreras){
	
	
	$fechahoy=date('Y-m-d');
if($funt=="nuevo")
{
	
// $cod_carreraFk=$_POST['cod_carreraFk'.$nrocontrol];
// $cod_carreraFk = utf8_decode($cod_carreraFk);	

// $consulta= "update puntoexpedicion set Estado='Inactivo' where cod_carreraFk=?  and cod_filialFk=? ";
// $stmt = $mysqli->prepare($consulta);
// $ss='ss';
// $stmt->bind_param($ss,$cod_carreraFk,$cod_filialFk); 


// if ( ! $stmt->execute()) {
// echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
// exit;
// }

  
	}
	
	 $cod_carreraFk=$_POST['cod_carreraFk'.$nrocontrol];
     $cod_carreraFk = utf8_decode($cod_carreraFk);	
	
		if($funt=="nuevo")
	{
	
    $consulta="insert into puntoexpedicion (nrotimbrado,fechavencimiento,cod_carreraFk,codFilialFKPunto, cod_filialFk, nrocaja, NroInicio, NroFin, estado, fechaactualizacion) values (?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssss';
    $stmt->bind_param($ss,$nrotimbrado,$fechavencimiento,$cod_carreraFk,$codFilialFKPunto,$cod_filialFk,$nrocaja,$NroInicio,$NroFin,$Estado,$fechahoy); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update puntoexpedicion set nrotimbrado=?,fechavencimiento=?, cod_carreraFk=?, cod_filialFk=?, codFilialFKPunto=?, nrocaja=?, NroInicio=?, NroFin=?, estado=?, fechaactualizacion=?  where idpuntoexpedicion=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sssssssssss';        
    $stmt->bind_param($ss,$nrotimbrado,$fechavencimiento,$cod_carreraFk,$cod_filialFk,$codFilialFKPunto,$nrocaja,$NroInicio,$NroFin,$Estado,$fechahoy,$idpuntoexpedicion); 
       
	}
	
if ( ! $stmt->execute() ) {
	echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}

$nrocontrol=$nrocontrol+1;
	
	
}
	
	 mysqli_close($mysqli); 

    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function CambiarDatos($idpuntoexpedicion,$Estado)
{
	
	if($idpuntoexpedicion=="" || $Estado==""  ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
$mysqli=conectar_al_servidor();
$fechahoy=date('Y-m-d');
	
	$consulta="Update puntoexpedicion set  estado=?,fechaactualizacion=?  where idpuntoexpedicion=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sss';        
    $stmt->bind_param($ss,$Estado,$fechahoy,$idpuntoexpedicion); 
	
	if ( ! $stmt->execute() ) {
	echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}
 mysqli_close($mysqli); 
    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function buscarhistorial($codFilial,$estado,$codCarreraFk)
{
	controldevencimientosfacturas();
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condicionCarrera="";
	if($codCarreraFk!=""){
		$condicionCarrera=" and  lt.Cod_listadecarreras='$codCarreraFk'";
	}
		$sql= "Select put.nrotimbrado,put.fechavencimiento,put.idpuntoexpedicion, put.cod_carreraFk, put.cod_filialFk,put.codFilialFKPunto, put.nrocaja, put.NroInicio, put.NroFin, put.estado, put.fechaactualizacion,
		fl.nombre as nombrefilial ,fl.puntoexpedicion,
		lt.nombre as nombrecarrera,
        fl1.nombre as nombrefilialOrigen,fl2.nombre as nombrefilialDestino
        from puntoexpedicion put inner join filial fl on put.codFilialFKPunto=fl.cod_filial
		inner join carrera car on car.cod_carrera=put.cod_carreraFk
		inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
        inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
        inner join filial fl2 on fl2.cod_filial=car.cod_filialDestinoFK 
		where  put.cod_filialFk='$codFilial' and put.estado='$estado' ".$condicionCarrera."  order by put.fechaactualizacion asc";
		 
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
		  
		  
		  
		      $idpuntoexpedicion=$valor['idpuntoexpedicion'];
		  	  $cod_carreraFk=utf8_encode($valor['cod_carreraFk']);
		  	  $cod_filialFk=utf8_encode($valor['cod_filialFk']);
		  	  $nrocaja=utf8_encode($valor['nrocaja']);
		  	  $NroInicio=utf8_encode($valor['NroInicio']);
		  	  $NroFin=utf8_encode($valor['NroFin']);
		  	  $Estado=utf8_encode($valor['estado']);
		  	  $fechaactualizacion=utf8_encode($valor['fechaactualizacion']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombrefilialDestino=utf8_encode($valor['nombrefilialDestino']);
		  	  $nrotimbrado=utf8_encode($valor['nrotimbrado']);
		  	  $fechavencimiento=utf8_encode($valor['fechavencimiento']);
		  	  $puntoexpedicion1=$puntoexpedicion."-".$nrocaja;
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerDatosFacturaNroDetalles(this)'  >
			  <td id='td_id_1' style='display:none;'>".$idpuntoexpedicion."</td>
			  <td id='td_id_2' style='display:none;'>".$cod_carreraFk."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_filialFk."</td>
			  <td  id='td_datos_6' style='display:none' >".$nombrefilial."</td>
			   <td  id='td_datos_12' style='width:10%' >".$nrotimbrado."</td>
			   <td  id='td_datos_13' style='width:10%' >".$fechavencimiento."</td>
			   <td  id='td_datos_8' style='width:15%' >".$nombrecarrera."</td>
   			  <td  id='td_datos_11' style='width:15%' >".$nombrefilialDestino."</td>
			   <td  id='td_datos_7' style='display:none' >".$puntoexpedicion."</td>
			   <td  id='td_datos_1' style='display:none' >".$nrocaja."</td>
			   <td  id='td_datos_2' style='width:10%' >".$NroInicio."</td>
			   <td  id='td_datos_3' style='width:10%' >".$NroFin."</td>
			   	<td  id='td_datos_9' style='width:10%' >".$puntoexpedicion1."</td>
			  <td  id='td_datos_4' style='display:none' >".$Estado."</td>
			  <td  id='td_datos_5' style='display:none' >".$fechaactualizacion."</td>
			  <td  id='td_datos_10' style='display:none' >".$nombrefilialOrigen."</td>
			    			 
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarreportfacturashabilitadas($nrotimbrado,$codCarrera,$fecha1,$fecha2,$codFilialorigen,$codFilialDestino,$Estado)
{
	controldevencimientosfacturas();
	$mysqli=conectar_al_servidor();
	 $pagina='';	
	$condicionFilialO="";
	if($codFilialorigen!=""){
		$condicionFilialO=" and car.cod_filialOringFK='$codFilialorigen' ";
	}
	$condicionFilialD="";
	if($codFilialDestino!=""){
		$condicionFilialD=" and car.cod_filialDestinoFK='$codFilialDestino' ";
	}
	$condicionCarrera="";
	if($codCarrera!=""){
		$condicionCarrera=" and lt.Cod_listadecarreras='$codCarrera' ";
	}
	$condicionFecha="";
	if($fecha1!=""){
		$condicionFecha=" and put.fechavencimiento>='$fecha1'  ";
	}
	if($fecha1!="" && $fecha2!=""){
		$condicionFecha=" and put.fechavencimiento>='$fecha1' and put.fechavencimiento<='$fecha2' ";
	}
	$condicionNroTimbrado="";
	if($nrotimbrado!=""){
		$condicionNroTimbrado=" and (fl.nrotimbrado like '%".$nrotimbrado."%' ) ";
	}
	$condicionEstado="";
	if($Estado!=""){
		$condicionEstado=" and put.estado='$Estado'  ";
	}
	
		$sql= "Select put.idpuntoexpedicion, put.cod_carreraFk, put.cod_filialFk,put.codFilialFKPunto, put.nrocaja, put.NroInicio, put.NroFin, put.estado, put.fechaactualizacion,
		fl.nombre as nombrefilial ,fl.puntoexpedicion,put.nrotimbrado,put.fechavencimiento,
		lt.nombre as nombrecarrera,
        fl1.nombre as nombrefilialOrigen,fl2.nombre as nombrefilialDestino
        from puntoexpedicion put inner join filial fl on put.codFilialFKPunto=fl.cod_filial
		inner join carrera car on car.cod_carrera=put.cod_carreraFk
		inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
        inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
        inner join filial fl2 on fl2.cod_filial=car.cod_filialDestinoFK 
		where put.idpuntoexpedicion!='0' ".$condicionFilialO.$condicionFilialD.$condicionCarrera.$condicionFecha.$condicionNroTimbrado.$condicionEstado." order by put.fechaactualizacion asc";
		 
	
		 
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
		  
		  
		  
		      $idpuntoexpedicion=$valor['idpuntoexpedicion'];
		  	  $cod_carreraFk=utf8_encode($valor['cod_carreraFk']);
		  	  $cod_filialFk=utf8_encode($valor['cod_filialFk']);
		  	  $nrocaja=utf8_encode($valor['nrocaja']);
		  	  $NroInicio=utf8_encode($valor['NroInicio']);
		  	  $NroFin=utf8_encode($valor['NroFin']);
		  	  $Estado=utf8_encode($valor['estado']);
		  	  $fechaactualizacion=utf8_encode($valor['fechaactualizacion']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombrefilialDestino=utf8_encode($valor['nombrefilialDestino']);
		  	  $nrotimbrado=utf8_encode($valor['nrotimbrado']);
		  	  $fechavencimiento=utf8_encode($valor['fechavencimiento']);
		  	  $puntoexpedicion1=$puntoexpedicion."-".$nrocaja;
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerDatosFacturaHabilitadasRepot(this)' >
			  <td  id='td_id' style='display:none' >".$idpuntoexpedicion."</td>
			  <td  id='td_datos_12' style='width:10%' >".$nrotimbrado."</td>
			  <td  id='td_datos_13' style='width:10%' >".$fechavencimiento."</td>
			  <td  id='td_datos_1' style='width:15%' >".$nombrecarrera."</td>
			  <td  id='td_datos_2' style='width:10%' >".$nombrefilialOrigen."</td>			   
   			  <td  id='td_datos_3' style='width:10%' >".$nombrefilialDestino."</td>
			  <td  id='td_datos_4' style='width:5%' >".$NroInicio."</td>
			  <td  id='td_datos_5' style='width:5%' >".$NroFin."</td>	  
			  <td  id='td_datos_6' style='width:5%' >".$puntoexpedicion1."</td>
			  <td  id='td_datos_7' style='width:10%' >".$fechaactualizacion."</td>
			  <td  id='td_datos_8' style='width:5%' >".$Estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarpuntosexpedicion($codFilial)
{
	controldevencimientosfacturas();
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$paginapuntoexpedicion="";
		$sql= "Select fl2.puntoexpedicion,fl2.cod_filial as codFilial,fl1.nombre as nombrefilialOrigen,fl2.nombre as nombrefilialDestino
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
        inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$codFilial' and cr.estado='Activo' group by cr.cod_filialOringFK,cr.cod_filialDestinoFK  ";
		 
	
		 
   $stmt = $mysqli->prepare($sql);
 

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$controltitulo="0";
$totalArancel=-1;
$nroOrden=1;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  if($nroOrden<10){
	       $tituloORden="00".$nroOrden;
          }else{
			  $tituloORden=$nroOrden;
		  }
		  
		      $puntoexpedicion=$valor['puntoexpedicion'];
		      $codFilial=$valor['codFilial'];
			  $nombrefilialDestino=utf8_encode($valor['nombrefilialDestino']);
		  	  $paginapuntoexpedicion.="<option id='$codFilial'  value='$puntoexpedicion'  >$puntoexpedicion - $nombrefilialDestino</option>";
		  	
			  $nroOrden=$nroOrden+1;
			  
	  }
	  
 }
 

  mysqli_close($mysqli); 
 $informacion =array("1" => "exito","3"=> $paginapuntoexpedicion);
echo json_encode($informacion);	
exit;


}


function buscarnrocajas($codFilialOrigen,$codFilialDestino)
{
	
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$paginapuntoexpedicion="";
		$sql= "Select cr.NroCaja
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
        inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$codFilialOrigen' and cr.cod_filialDestinoFK='$codFilialDestino' and cr.estado='Activo' group by cr.NroCaja  ";
		 
	
		 
   $stmt = $mysqli->prepare($sql);
 

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$controltitulo="0";
$totalArancel=-1;
$nroOrden=1;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		    
		     $NroCaja=$valor['NroCaja'];   
		  	 $pagina.="<option  value='$NroCaja'  >$NroCaja</option>";
		  	 
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
return $pagina;

}

function buscarcarreradefilial($codFilialOrigen,$codFilialDestino)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$paginapuntoexpedicion="";
		$sql= "Select cr.cod_carrera,lt.nombre nombreCarrera,fl1.nombre as nombrefilialOrigen,cr.NroCaja
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
        inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$codFilialOrigen' and cr.cod_filialDestinoFK ='$codFilialDestino' and cr.estado='Activo'  ";
		 
	
	
		 
   $stmt = $mysqli->prepare($sql);
 

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$controltitulo="0";
$totalArancel=-1;
$nroOrden=1;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		     $cod_carrera=$valor['cod_carrera'];
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $NroCaja=utf8_encode($valor['NroCaja']);
		  	  $UltimoNroFactura=obtenerultimonrofactura($cod_carrera);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			  <td id='td_id_1' style='display:none;'>".$cod_carrera."</td>
			   <td  id='td_datos_1' style='width:10%' ><input onclick='' name='checkboxCarreraFacturaNro' type='checkbox' id='$cod_carrera'  checked  /></td>
			   <td  id='td_datos_1' style='width:50%' >".$nombreCarrera."</td>
			   <td  id='td_datos_3' style='display:none' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_3' style='width:10%' >".$NroCaja."</td>
			   <td  id='td_datos_3' style='width:20%' >".$UltimoNroFactura."</td>
			  </tr>
			  </table>";
		  	
			  
	  }
	  
 }
  mysqli_close($mysqli); 
  $paginaNroCaja=buscarnrocajas($codFilialOrigen,$codFilialDestino);

 $informacion =array("1" => "exito","2" => $pagina,"3"=>$paginaNroCaja);
echo json_encode($informacion);	
exit;

}


function obtenerultimonrofactura($cod_carreraFk)
{
	
	
	$mysqli=conectar_al_servidor();

		$sql= "Select NroFin
        from puntoexpedicion where  estado='Activo' and cod_carreraFk='$cod_carreraFk'  order by idpuntoexpedicion desc limit 1";
		 $pagina="";
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$NroFin="";

	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $NroFin=$valor['NroFin'];
		  	
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
  
return $NroFin;


}

function buscarSelect()
{
	controldevencimientosfacturas();
	
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


function controldevencimientosfacturas()
{
	$mysqli=conectar_al_servidor();
	 $fechahoy=date('Y-m-d');
		$sql= "Select put.idpuntoexpedicion
        from puntoexpedicion put
		where put.fechavencimiento<='$fechahoy' and put.estado='Activo'  order by put.fechaactualizacion asc";
		 
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
		  
		  
		  
		      $idpuntoexpedicion=$valor['idpuntoexpedicion'];
		  	 
			    	 
		  	$consulta="Update puntoexpedicion set  estado='Inactivo',fechaactualizacion='$fechahoy'  where idpuntoexpedicion='$idpuntoexpedicion'";	
	$stmt = $mysqli->prepare($consulta);
    	if ( ! $stmt->execute() ) {

}
			  
			  
	  }
	  
 }
 
 mysqli_close($mysqli);

}




verificar($funt);
?>