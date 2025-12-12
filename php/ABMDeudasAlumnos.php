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

	// buscarnivel($user,"DEUDASALUMNOS"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"DEUDASALUMNOS"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"DEUDASALUMNOS"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$iddeudaspendientes=$_POST['idabm'];
    $iddeudaspendientes = utf8_decode($iddeudaspendientes);
	$monto=$_POST['monto'];
    $monto = quitarseparadormiles($monto);
	$idalumnoFK=$_POST['idalumnoFK'];
    $idalumnoFK = utf8_decode($idalumnoFK);
	$Cod_listadecarrerasFk=$_POST['Cod_listadecarrerasFk'];
    $Cod_listadecarrerasFk = utf8_decode($Cod_listadecarrerasFk);
	abm($iddeudaspendientes,$monto,$idalumnoFK,$Cod_listadecarrerasFk,$funt);

}

if($funt=="buscar")
{
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$codFilialFk=$_POST['codFilialFk'];
$codFilialFk = utf8_decode($codFilialFk);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
if($codFilialFk==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFk=buscarmifilialFK($user);
		
	}
}
buscar($nombre,$documento,$codFilialFk,$ordenby);

}

if($funt=="buscarcuentas")
{
$idAsignarAlumnosFk=$_POST['idAsignarAlumnosFk'];
$idAsignarAlumnosFk = utf8_decode($idAsignarAlumnosFk);
buscarcuentas($idAsignarAlumnosFk);

}








	

}

function abm($iddeudaspendientes,$monto,$idalumnoFK,$Cod_listadecarrerasFk,$funt)
{
	
	if($monto=="" && $idalumnoFK=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from deudaspendientes where idalumnoFK=? and Cod_listadecarrerasFk=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$idalumnoFK,$Cod_listadecarrerasFk); 


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
	
    $consulta="insert into deudaspendientes (monto, idalumnoFK,Cod_listadecarrerasFk) values (?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sss';
    $stmt->bind_param($ss,$monto,$idalumnoFK,$Cod_listadecarrerasFk); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update deudaspendientes set monto=?, idalumnoFK=?, Cod_listadecarrerasFk=?  where iddeudaspendientes=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssss';        
    $stmt->bind_param($ss,$monto,$idalumnoFK,$Cod_listadecarrerasFk,$iddeudaspendientes); 
       
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

function buscar($nombre,$documento,$codFilialFk,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	
$stmt = $mysqli->prepare("select count(al1.idalumnoFK) from deudaspendientes al1 ");
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$result = $stmt->get_result();
$nro_total=$result->fetch_row();
$TotalAlumno=$nro_total[0];


$oderby="";
	if($ordenby=="1"){
		$oderby="order by al.nombre asc";
	}
	
	$condicionnombre="";
	$condiciondocumento="";
	if($documento!=""){
		$condiciondocumento=" and al.ci = '".$documento."' ";
	}
	if($nombre!=""){
		$condicionnombre="and concat(al.nombre,' ',al.apellido) like '%".$nombre."%' ";
	}

$sql= "Select al.ci, concat(al.nombre,' ',al.apellido) as nombreapellido,
dp.iddeudaspendientes,dp.monto,dp.idalumnoFK,
(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=dp.Cod_listadecarrerasFk) as nombreCarrera,
IFNULL((select sum(monto) from facturaspagadas fac inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk where cur.idalumnoFk=al.idalumno and fac.cod_arancelFk='0'  limit 1),0) as totalpagado
        from alumno al inner join deudaspendientes dp on dp.idalumnoFK=al.idalumno
		where al.ci!='0'  ".$condiciondocumento.$condicionnombre.$condicionnombre." ".$oderby." limit 250";

	if($codFilialFk!=""){
	$sql= "Select al.ci, concat(al.nombre,' ',al.apellido) as nombreapellido,
	(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=dp.Cod_listadecarrerasFk) as nombreCarrera,
IFNULL((select sum(monto) from facturaspagadas fac inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk where cur.idalumnoFk=al.idalumno and fac.cod_arancelFk='0'  limit 1),0) as totalpagado,
	dp.iddeudaspendientes,dp.monto,dp.idalumnoFK
        from alumno al inner join deudaspendientes dp on dp.idalumnoFK=al.idalumno
         inner join cursosalumno cr on cr.idalumnoFk=al.idalumno
		inner join carrera car on car.cod_carrera=cr.cod_carreraFK
		where al.ci!='0' ".$condiciondocumento.$condicionnombre.$condicionnombre." and car.cod_filialOringFK='".$codFilialFk."' ".$oderby;
	}
	

		 
 $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totaldeuda=0;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idalumnoFK=$valor['idalumnoFK'];
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombre=utf8_encode($valor['nombreapellido']);
		  	  $iddeudaspendientes=utf8_encode($valor['iddeudaspendientes']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $totalpagado=utf8_encode($valor['totalpagado']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	 $totalpendient=$monto-$totalpagado;
		  	if($totalpendient<0){
				$totalpendient=0;
			}
		  	  $styleorden1="";
			
		  	if($ordenby=="1"){
		$styleorden1="color: #000; background-color: #e7e7e7;";
	}
	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmDeudasAlumnos(this)'>
			  <td id='td_id' style='display:none;'>".$iddeudaspendientes."</td>
			   <td  id='td_datos_5' style='width:10%;' >".$nombreCarrera."</td>
			   <td  id='td_datos_1' style='width:10%;' >".$ci."</td>
			   <td  id='td_datos_2'  style='width:20%;".$styleorden1."' >".$nombre."</td>
			   <td  id='td_datos_3'style='width:10%;' >".number_format($monto,'0',',','.')."</td>
			   <td  id=' ' style='width:10%;' >".number_format($totalpagado,'0',',','.')."</td>
			   <td  id='' style='width:10%;' >".number_format($totalpendient,'0',',','.')."</td>
			   <td  id='td_datos_4' style='display:none' >".$idalumnoFK."</td>
			  </tr>
			  </table>";
			 $totaldeuda=$totaldeuda+$totalpendient;   	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=>  number_format($TotalAlumno,'0',',','.'),"5"=>  number_format($totaldeuda,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function buscarcuentas($idAsignarAlumnosFk)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
$sql= "Select al.ci, concat(al.nombre,' ',al.apellido) as nombreapellido,
dp.iddeudaspendientes,dp.monto,dp.idalumnoFK,
IFNULL((select sum(monto) from facturaspagadas fac inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk where cur.idalumnoFk=al.idalumno and fac.cod_arancelFk='0'  limit 1),0) as totalpagado
        from alumno al inner join deudaspendientes dp on dp.idalumnoFK=al.idalumno
		where al.idalumno='".$idAsignarAlumnosFk."' limit 1";		 
 $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totaldeuda=0;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  	  $monto=utf8_encode($valor['monto']);
		  	  $totalpagado=utf8_encode($valor['totalpagado']);
		  	 $totalpendient=$monto-$totalpagado;
		  	if($totalpendient<0){
				$totalpendient=0;
			}
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_3'style='width:10%;' >".number_format($monto,'0',',','.')."</td>
			   <td  id=' ' style='width:10%;' >".number_format($totalpagado,'0',',','.')."</td>
			   <td  id='' style='width:10%;' >".number_format($totalpendient,'0',',','.')."</td>
			  </tr>
			  </table>";
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina );
echo json_encode($informacion);	
exit;


}


verificar($funt);
?>