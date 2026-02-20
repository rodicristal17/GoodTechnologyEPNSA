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

	// buscarnivel($user,"ASIGNAR CARRERA"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"ASIGNAR CARRERA"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"ASIGNAR CARRERA"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$cod_carrera=$_POST['idabm'];
    $cod_carrera = utf8_decode($cod_carrera);
	$cod_filialOringFK=$_POST['cod_filialOringFK'];
    $cod_filialOringFK = utf8_decode($cod_filialOringFK); 
	$Cod_listadecarrerasFK=$_POST['Cod_listadecarrerasFK'];
    $Cod_listadecarrerasFK = utf8_decode($Cod_listadecarrerasFK);
	$cod_listafacultadFk=$_POST['cod_listafacultadFk'];
    $cod_listafacultadFk = utf8_decode($cod_listafacultadFk);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$NroCaja=$_POST['NroCaja'];
    $NroCaja = utf8_decode($NroCaja);
	abm($cod_carrera,$cod_filialOringFK,$Cod_listadecarrerasFK,$cod_listafacultadFk,$estado,$NroCaja,$funt);

}

if($funt=="buscar")
{
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codFilialFkOrigen=$_POST['codFilialFkOrigen'];
$codFilialFkOrigen = utf8_decode($codFilialFkOrigen);
$codFacultad=$_POST['codFacultad'];
$codFacultad = utf8_decode($codFacultad);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
if($codFilialFkOrigen==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFkOrigen=buscarmifilialFK($user);
		
	}
}

buscar($codCarrera,$estado,$codFilialFkOrigen,$codFacultad,$ordenby);

}
if($funt=="cascadafilialdestino")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);

cascadafilialdestino($estado,$codfilial);

}
if($funt=="cascadaCarrera")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$idFilial=$_POST['idFilial'];
$idFilial = utf8_decode($idFilial);

cascadaCarrera($estado,$idFilial);

}
if($funt=="buscarvista")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);

buscarvista($buscar);

}
if($funt=="buscarSelect")
{

buscarSelect();

}
if($funt=="buscarcarreraporfilial")
{
$buscar=$_POST['codFilial'];
$buscar = utf8_decode($buscar);
buscarcarreraporfilial($buscar);

}
if($funt=="buscarcarreraporfilial2")
{
$buscar=$_POST['codFilial'];
$buscar = utf8_decode($buscar);
buscarcarreraporfilial2($buscar);

}

if($funt=="buscarcarreraporfilial3")
{
$cod_filialFK=$_POST['codFilial'];
$cod_filialFK = utf8_decode($cod_filialFK);
$codFacultad=$_POST['codFacultad'];
$codFacultad = utf8_decode($codFacultad);
buscarcarreraporfilial3($cod_filialFK,$codFacultad);

}




if($funt=="buscarSelectTipo")
{
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
buscarSelectTipo($tipo);

}

	

}

function buscarSelectTipo($tipo)
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	
	
		$sql= "Select cod_listadearanceles,nombre,estado 
        from listadearanceles where  estado='Activo' and tipo='$tipo' order by nombre asc";
		 
   
		 
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
		  
		  
		  
		      $cod_listadearanceles=$valor['cod_listadearanceles'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  	
			   	$pagina.="<option id='$cod_listadearanceles' value='$nombre'  ></option>";
			   
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}


function abm($cod_carrera,$cod_filialOringFK,$Cod_listadecarrerasFK,$cod_listafacultadFk,$estado,$NroCaja,$funt)
{
	
	if($cod_filialOringFK=="" ||  $Cod_listadecarrerasFK==""|| $cod_listafacultadFk=="" || $NroCaja=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from carrera where cod_filialOringFK=? and Cod_listadecarrerasFK=? and cod_listafacultadFk=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='sss';
$stmt->bind_param($ss,$cod_filialOringFK, $Cod_listadecarrerasFK,$cod_listafacultadFk); 


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
	
    $consulta="insert into carrera (cod_filialOringFK, Cod_listadecarrerasFK, cod_listafacultadFk, estado,NroCaja) values (?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sssss';
    $stmt->bind_param($ss,$cod_filialOringFK,$Cod_listadecarrerasFK,$cod_listafacultadFk,$estado,$NroCaja); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update carrera set cod_filialOringFK=?, Cod_listadecarrerasFK=?, cod_listafacultadFk=?, estado=?,NroCaja=?  where cod_carrera=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssssss';        
    $stmt->bind_param($ss,$cod_filialOringFK,$Cod_listadecarrerasFK,$cod_listafacultadFk,$estado,$NroCaja,$cod_carrera); 
       
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

function buscar($codCarrera,$estado,$codFilialFkOrigen,$codFacultad,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="<table style='display:none'>
			  <tr >
			  <td >ID-Carrera</td>
			  <td >ID-Filial-Origen</td>
			  <td >ID-Lista-Carreras</td>
			  <td >ID-Lista-Facultas</td>
			   <td  >Nombre-Carrera</td>
			   <td  >Nombre-Facultad</td>
			   <td >Nombre-Filial-Origen</td>
			   <td >Nro-Caja</td>
			  <td >Estado</td>
			  </tr>
			  </table>";
			  
	 $condicionFiliaOrigen="";
	 $condicionFiliaFacultad="";
	 $condicionCarrera="";
	 if($codFilialFkOrigen!=""){
		 $condicionFiliaOrigen=" and cr.cod_filialOringFK='$codFilialFkOrigen' ";
	 }
	 
	 if($codFacultad!=""){
		  $condicionFiliaFacultad="and cr.cod_listafacultadFk='$codFacultad' ";
	 }
	 if($codCarrera!=""){
		  $condicionCarrera="and lt.Cod_listadecarreras='$codCarrera' ";
	 }
	 
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by lt.nombre asc";
	}
	if($ordenby=="2"){
		$oderby="order by fl1.nombre asc";
	}
	if($ordenby=="3"){
		
	}
	if($ordenby=="4"){
		$oderby="order by cr.NroCaja asc";
	}
	 
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,cr.NroCaja,
		fl1.nombre as nombrefilialOrigen, lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
        inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.estado=? ".$condicionFiliaOrigen.$condicionFiliaFacultad.$condicionCarrera.$oderby;
		 
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
		  
		  
		  
		      $cod_carrera=$valor['cod_carrera'];
		      $cod_filialOringFK=$valor['cod_filialOringFK'];
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		      $cod_listafacultadFk=$valor['cod_listafacultadFk'];
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombreFacultad=utf8_encode($valor['nombreFacultad']);
		  	  $NroCaja=utf8_encode($valor['NroCaja']);
		  	  $estado=utf8_encode($valor['estado']);
			  
			    $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			 
		   	if($ordenby=="1"){
		$styleorden1="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="2"){
		$styleorden2="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="3"){
		$styleorden3="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="4"){
		$styleorden4="color: #000; background-color: #e7e7e7;";
	}
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarCarrera(this)'>
			  <td id='td_id_1' style='display:none;'>".$cod_carrera."</td>
			  <td id='td_id_2' style='display:none;'>".$cod_filialOringFK."</td>
			  <td id='td_id_4' style='display:none;'>".$Cod_listadecarrerasFK."</td>
			  <td id='td_id_5' style='display:none;'>".$cod_listafacultadFk."</td>
			   <td  id='td_datos_1' style='width:20%;".$styleorden1."' >".$nombreCarrera."</td>
			   <td  id='td_datos_2' style='width:20%' >".$nombreFacultad."</td>
			   <td  id='td_datos_3' style='width:20%;".$styleorden2."' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_6' style='width:10%;".$styleorden4."' >".$NroCaja."</td>
			  <td  id='td_datos_4' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function cascadafilialdestino($estado,$codfilial)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
	
		
	 
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.cod_filialDestinoFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,cr.NroCaja,
		fl1.nombre as nombrefilialOrigen,fl2.nombre as nombrefilialDestino,lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
         inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.estado='$estado' and cr.cod_filialOringFK='$codfilial' group by cr.cod_filialDestinoFK order by fl2.nombre asc";
		 
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
		  
		  
		  
		      $cod_carrera=$valor['cod_carrera'];
		      $cod_filialOringFK=$valor['cod_filialOringFK'];
		      $cod_filialDestinoFK=$valor['cod_filialDestinoFK'];
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		      $cod_listafacultadFk=$valor['cod_listafacultadFk'];
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombrefilialDestino=utf8_encode($valor['nombrefilialDestino']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombreFacultad=utf8_encode($valor['nombreFacultad']);
		  	  $NroCaja=utf8_encode($valor['NroCaja']);
		  	  $estado=utf8_encode($valor['estado']);
			  
			
		  	
		  	
				 $pagina.="
			 <p class='divCascada3'  onclick='vercerrarasignarcarreralistacarrera(this)' >
			 <img  id='iconocarpeta' name='iconocarpetaasignarcarreracarrera' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' /> ".$nombrefilialDestino." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_filialDestinoFK</span>
			 </p>
			 <div class='divCascada2' name='div_asignar_carrera_1' id='div_asignar_carrera_".$cod_filialOringFK.$cod_filialDestinoFK."' style='display:none' ></div>";
			  
			
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function cascadaCarrera($estado,$idFilial)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,cr.NroCaja,
		fl1.nombre as nombrefilialOrigen, lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.estado='$estado' and cr.cod_filialOringFK='$idFilial'  order by lt.nombre asc";
		
		// echo($sql);
		// exit;
		 
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
		  
		  
		  
		      $cod_carrera=$valor['cod_carrera'];
		      $cod_filialOringFK=$valor['cod_filialOringFK'];
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		      $cod_listafacultadFk=$valor['cod_listafacultadFk'];
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombreFacultad=utf8_encode($valor['nombreFacultad']);
		  	  $NroCaja=utf8_encode($valor['NroCaja']);
		  	  $estado=utf8_encode($valor['estado']);
			  
			
		  	
		  	
			 $pagina.="
			 <p class='pTituloCascada2' onclick='ObtenerdatosAbmAsignarCarreraCascada(this)' >*".$nombreCarrera."
			  <span id='td_id_1' style='display:none;'>".$cod_carrera."</span>
			  <span id='td_id_2' style='display:none;'>".$cod_filialOringFK."</span>
			  <span id='td_id_4' style='display:none;'>".$Cod_listadecarrerasFK."</span>
			  <span id='td_id_5' style='display:none;'>".$cod_listafacultadFk."</span>
			   <span  id='td_datos_1' style='display:none;' >".$nombreCarrera."</span>
			   <span  id='td_datos_2' style='display:none;' >".$nombreFacultad."</span>
			   <span  id='td_datos_3' style='display:none;' >".$nombrefilialOrigen."</span>
			   <span  id='td_datos_6' style='display:none;'>".$NroCaja."</span>
			  <span  id='td_datos_4' style='display:none' >".$estado."</span>
			 </p>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvista($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select cr.cod_carrera,cr.cod_filialFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,
		fl.nombre as nombrefilial,lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl on fl.cod_filial=cr.cod_filialFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where lt.nombre like ? and cr.estado='Activo' order by lt.nombre asc";
		 
   $stmt = $mysqli->prepare($sql);
  	$s='s';
$buscar1="%".$buscar."%";
//$buscar="".$buscar."";
$stmt->bind_param($s,$buscar1);

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
		  
		  
		  
		      $cod_carrera=$valor['cod_carrera'];
		      $cod_filialFK=$valor['cod_filialFK'];
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		      $cod_listafacultadFk=$valor['cod_listafacultadFk'];
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombreFacultad=utf8_encode($valor['nombreFacultad']);
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAsignarCarrera(this)'>
			  <td id='td_id_1' style='display:none;'>".$cod_carrera."</td>
			  <td id='td_id_2' style='display:none;'>".$cod_filialFK."</td>
			  <td id='td_id_3' style='display:none;'>".$Cod_listadecarrerasFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_listafacultadFk."</td>
			   <td  id='td_datos_1' style='width:33%' >".$nombreCarrera."</td>
			   <td  id='td_datos_2' style='width:33%' >".$nombreFacultad."</td>
			   <td  id='td_datos_3' style='width:33%' >".$nombrefilial."</td>
			  <td  id='td_datos_4' style='display:none' >".$estado."</td>
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
	 $pagina='';
	$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.cod_filialDestinoFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,
		fl1.nombre as nombrefilialOrigen,fl2.nombre as nombrefilialDestino,lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
         inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.estado='Activo'  order by lt.nombre asc";
		 
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
		  
		  
		  
		    
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}

function buscarcarreraporfilial($cod_filialFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,
		fl1.nombre as nombrefilialOrigen,lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$cod_filialFK'  and cr.estado='Activo'  order by lt.nombre asc";
		 
	
		
		 
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
		  
		  
		  
		      $cod_carrera=$valor['cod_carrera'];
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	 
		  	
		  	
			 	$pagina.="<option id='$cod_carrera' value='$nombreCarrera'  ></option>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}

function buscarcarreraporfilial2($cod_filialFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,
		fl1.nombre as nombrefilialOrigen,lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$cod_filialFK'  and cr.estado='Activo'  order by lt.nombre asc";
		 
	
		
		 
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
		  
		  
		  
		      $cod_carrera=$valor['Cod_listadecarrerasFK'];
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	 
		  	
		  	
			 	$pagina.="<option id='$cod_carrera' value='$nombreCarrera'  ></option>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcarreraporfilial3($cod_filialFK,$codFacultad)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	 
	 
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.cod_filialDestinoFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,
		fl1.nombre as nombrefilialOrigen, lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$cod_filialFK'  and cr.estado='Activo'  order by lt.nombre asc";
		 
// echo($sql);
// exit;
		
		 
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
		  
		  
		  
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
			  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	 
		  	
		  	
			 	$pagina.="<option id='$Cod_listadecarrerasFK' name='$cod_carrera' value='$nombreCarrera'  ></option>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}



verificar($funt);
?>