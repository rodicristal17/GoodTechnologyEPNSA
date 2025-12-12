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

	// buscarnivel($user,"DATOFILIAL"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"DATOFILIAL"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"DATOFILIAL"," buscar='SI' ");
// }





	
if($funt=="nuevo")
{
	
	
	$idcronograma=$_POST['idabm'];
    $idcronograma = utf8_decode($idcronograma);
	$fechainicio=$_POST['fechainicio'];
    $fechainicio = utf8_decode($fechainicio);
	$fechafin=$_POST['fechafin'];
    $fechafin = utf8_decode($fechafin);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	insertarperiodos($idcronograma,$fechainicio,$fechafin,$anho,$funt);

}

if($funt=="buscarcarreras")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarcarreras($buscar);

}
if($funt=="buscarhistorial")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarhistorial($buscar);

}
if($funt=="buscarperiodoporcarrera")
{
$buscar=$_POST['codCarrera'];
$buscar = utf8_decode($buscar);
buscarperiodoporcarrera($buscar);

}
if($funt=="buscarperiodosdesdematriculacion")
{
$buscar=$_POST['codCarrera'];
$buscar = utf8_decode($buscar);
buscarperiodosdesdematriculacion($buscar);

}






	

}

function insertarperiodos($idcronograma,$fechainicio,$fechafin,$anho,$funt)
{
	
	if($fechainicio=="" || $fechafin=="" || $anho==""){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

$mysqli=conectar_al_servidor();

$fechahoy=date('Y-m-d');

$totalsemetres=$_POST['totalsemetres'];
$totalsemetres = utf8_decode($totalsemetres);
	
$totalcarreras=$_POST['totalcarreras'];
$totalcarreras = utf8_decode($totalcarreras);	

$nrocontrolCarreras=1;
while($nrocontrolCarreras<=$totalcarreras){	
$cod_carreraFk=$_POST['cod_carreraFk'.$nrocontrolCarreras];
$cod_carreraFk = utf8_decode($cod_carreraFk);	
$nrocontrolSemestre=1;
while($nrocontrolSemestre<=$totalsemetres){
$semestre=$_POST['semestre'.$nrocontrolSemestre];
$semestre = utf8_decode($semestre);	
$curso=$_POST['curso'.$nrocontrolSemestre];
$curso = utf8_decode($curso);	
if($funt=="nuevo")
{

$consulta= "update periodoacademico set estado='Inactivo' where cod_carreraFk=? and semestre=? and anho=? and curso=? ";
$stmt = $mysqli->prepare($consulta);
$ss='ssss';
$stmt->bind_param($ss,$cod_carreraFk,$semestre,$anho,$curso); 
if ( ! $stmt->execute()) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}
}

if($funt=="nuevo")
{
$estado='Activo';
$consulta="insert into periodoacademico (semestre,anho, curso, fechainicio, fechafin, cod_carreraFk, estado, fechaactualizacion) values (?,?,?,?,?,?,?,?)";	
$stmt = $mysqli->prepare($consulta);
$ss='ssssssss';
$stmt->bind_param($ss,$semestre,$anho,$curso,$fechainicio,$fechafin,$cod_carreraFk,$estado,$fechahoy); 

	
if ( ! $stmt->execute() ) {
	echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}

 }
$nrocontrolSemestre=$nrocontrolSemestre+1;
}	
$nrocontrolCarreras=$nrocontrolCarreras+1;
}
 mysqli_close($mysqli); 
$informacion =array("1" => "exito");
echo json_encode($informacion);	
exit;

}

function buscarcarreras($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK,cr.cod_filialDestinoFK,cr.Cod_listadecarrerasFK,cr.cod_listafacultadFk,cr.estado,
		fl1.nombre as nombrefilialOrigen,fl2.nombre as nombrefilialDestino,lt.nombre nombreCarrera,ldf.nombre as nombreFacultad
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
         inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK='$buscar' and cr.estado='Activo'  order by lt.nombre asc";
		 
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
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			  <td id='td_id_1' style='display:none;'>".$cod_carrera."</td>
			   <td  id='td_datos_1' style='width:10%' ><input name='checkboxCarreraPeriodoAcademico' type='checkbox' id='$cod_carrera'  /></td>
			   <td  id='td_datos_1' style='width:90%' >".$nombreCarrera."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarhistorial($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "select per.idcronograma, per.semestre, per.anho, per.curso, per.fechainicio, per.fechafin, per.cod_carreraFk, per.estado,
lt.nombre nombreCarrera
from periodoacademico per inner join carrera cr on cr.cod_carrera=per.cod_carreraFk
inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK='$buscar' and per.estado='Activo'  order by lt.nombre asc";
		 
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
		  
		  
		  
		      $idcronograma=$valor['idcronograma'];
		      $semestre=$valor['semestre'];
		      $anho=$valor['anho'];
		      $curso=$valor['curso'];
		      $fechainicio=$valor['fechainicio'];
		      $fechafin=$valor['fechafin'];
		      $cod_carreraFk=$valor['cod_carreraFk'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			  <td id='td_id_1' style='display:none;'>".$idcronograma."</td>
			  <td  id='td_datos_1' style='width:20%' >".$nombreCarrera."</td>
			  <td  id='td_datos_2' style='width:10%' >".$anho."</td>
			  <td  id='td_datos_3' style='width:10%' >".$curso."</td>
			  <td  id='td_datos_4' style='width:10%' >".$semestre."</td>
			  <td  id='td_datos_5' style='width:10%' >".$fechainicio."</td>
			  <td  id='td_datos_6' style='width:10%' >".$fechafin."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarperiodoporcarrera($cod_carreraFk)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "select per.idcronograma, per.semestre, per.anho, per.curso, per.fechainicio, per.fechafin, per.cod_carreraFk, per.estado,
lt.nombre nombreCarrera
from periodoacademico per inner join carrera cr on cr.cod_carrera=per.cod_carreraFk
inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where per.cod_carreraFk='$cod_carreraFk' and per.estado='Activo'  order by lt.nombre asc";
		 
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
		  
		  
		  
		      $idcronograma=$valor['idcronograma'];
		      $semestre=$valor['semestre'];
		      $anho=$valor['anho'];
		      $curso=$valor['curso'];
		      $fechainicio=$valor['fechainicio'];
		      $fechafin=$valor['fechafin'];
		      $cod_carreraFk=$valor['cod_carreraFk'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr name='tr_periodo_".$idcronograma."'  id='trPeriodosAcademicos' onclick='obtenerDatosPeriodosAcademicosAsignarArancel(this)' >
			  <td id='td_id_1' style='display:none;'>".$idcronograma."</td>
			  <td  id='td_datos_1' style='display:none' >".$nombreCarrera."</td>
			  <td  id='td_datos_2' style='display:none' ><input name='checkboxCarreraAsignarPeriodo' type='checkbox' id='$idcronograma'    /></td>
			  <td  id='td_datos_2' style='width:10%' >".$anho."</td>
			  <td  id='td_datos_4' style='width:10%' >".$semestre."</td>
			  <td  id='td_datos_3' style='width:10%' >".$curso."</td>
			  <td  id='td_datos_7' style='width:12%' ><input type='text'  class='input3td' id='inptMonto' name='$idcronograma'  onkeyup='calcularTotalCuota(this)' value='0'   /></td>
			  <td  id='td_datos_8' style='width:12%' ><input type='text'  class='input3td' id='inptCantidad' name='$idcronograma' onkeyup='calcularTotalCuota(this)' value='1'  /></td>
			  <td  id='td_datos_9' style='width:12%' ><input type='text'  class='input3td' id='inptTotal' value='0'   disabled /></td>
			  <td  id='td_datos_5' style='display:none' >".$fechainicio."</td>
			  <td  id='td_datos_6' style='display:none' >".$fechafin."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarperiodosdesdematriculacion($cod_carreraFk)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "select per.idcronograma, per.semestre, per.anho, per.curso, per.fechainicio, per.fechafin, per.cod_carreraFk, per.estado,
lt.nombre nombreCarrera
from periodoacademico per inner join carrera cr on cr.cod_carrera=per.cod_carreraFk
inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where per.cod_carreraFk='$cod_carreraFk' and per.estado='Activo'  order by lt.nombre asc";
		 
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
		  
		  
		  
		      $idcronograma=$valor['idcronograma'];
		      $semestre=$valor['semestre'];
		      $anho=$valor['anho'];
		      $curso=$valor['curso'];
		      $fechainicio=$valor['fechainicio'];
		      $fechafin=$valor['fechafin'];
		      $cod_carreraFk=$valor['cod_carreraFk'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr  >
			  <td id='td_id_1' style='display:none;'>".$idcronograma."</td>
			  <td  id='td_datos_1' style='display:none' >".$nombreCarrera."</td>
			  <td  id='td_datos_2' style='width:5%' ><input name='checkboxPeriodoMatriculacion' type='checkbox' id='$idcronograma'    /></td>
			  <td  id='td_datos_2' style='width:10%' >".$anho."</td>
			  <td  id='td_datos_4' style='width:10%' >".$semestre."</td>
			  <td  id='td_datos_3' style='width:10%' >".$curso."</td>
			  <td  id='td_datos_5' style='display:none' >".$fechainicio."</td>
			  <td  id='td_datos_6' style='display:none' >".$fechafin."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


verificar($funt);
?>