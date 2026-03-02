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

  

	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	
	$idcursosalumno=$_POST['idAbm'];
    $idcursosalumno = utf8_decode($idcursosalumno);
	$idalumnoFk=$_POST['idalumnoFk'];
    $idalumnoFk = utf8_decode($idalumnoFk);
	$cod_carreraFK=$_POST['cod_carreraFK'];
    $cod_carreraFK = utf8_decode($cod_carreraFK);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$turno=$_POST['turno'];
    $turno = utf8_decode($turno);
	$seccion=$_POST['seccion'];
    $seccion = utf8_decode($seccion);
	$convalidacion=$_POST['convalidacion'];
    $convalidacion = utf8_decode($convalidacion);
	$anhoregistro=$_POST['anhoregistro'];
    $anhoregistro = utf8_decode($anhoregistro);
	
	$fechaInicio=$_POST['fechaInicio'];
    $fechaInicio = utf8_decode($fechaInicio);
	
	$fechaMatriculacion=$_POST['fechaMatriculacion'];
    $fechaMatriculacion = utf8_decode($fechaMatriculacion);
	
	$nroMatriculacion=$_POST['nroMatriculacion'];
    $nroMatriculacion = utf8_decode($nroMatriculacion);

	
	$tipo=$_POST['tipo'];
    $tipo = utf8_decode($tipo);
	
	abm($tipo,$nroMatriculacion,$fechaMatriculacion,$fechaInicio,$idcursosalumno,$idalumnoFk,$cod_carreraFK,$estado,$anho,$anhoregistro,$semestre,$curso,$turno,$seccion,$convalidacion,$funt);

}
if($funt=="editamatriculacion" )
{
	 
	$idcursosalumno=$_POST['idAbm'];
    $idcursosalumno = utf8_decode($idcursosalumno);
	$controledit=$_POST['controledit'];
    $controledit = utf8_decode($controledit);
	$valor=$_POST['valor'];
    $valor = utf8_decode($valor);
	editamatriculacion($idcursosalumno,$controledit,$valor);

}

if($funt=="buscar")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscar($buscar,$estado);

}
if($funt=="buscarvista")
{

$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$alumno=$_POST['alumno'];
$alumno = utf8_decode($alumno);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
	
		$codFilial=buscarmifilialFK($user);
		
		
	}
buscarvista($documento,$alumno,$curso,$anho,$semestre,$codCarrera,$codFilial,$ordenby);

}
if($funt=="buscarDatosPorCi")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$codFilialFK="";
$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
	
		$codFilialFK=buscarmifilialFK($user);
		
		
	}
buscarDatosPorCi($buscar,$codFilialFK,$anho);

}
if($funt=="buscarvistinformes")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarvistinformes($buscar);

}
if($funt=="buscarcascadaCarrerasReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);

buscarcascadaCarrerasReportMatriculacion($codfilial,$estado);

}
if($funt=="buscarcascadaAnhoReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
buscarcascadaAnhoReportMatriculacion($codfilial,$codcarrera,$estado);

}
if($funt=="buscarcascadacursoReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
buscarcascadacursoReportMatriculacion($codfilial,$codcarrera,$anho,$estado);

}
if($funt=="buscarcascadaSemestreReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
buscarcascadaSemestreReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$estado);

}
if($funt=="buscarcascadaTurnoReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
buscarcascadaTurnoReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$semestre,$estado);

}
if($funt=="buscarcascadaSeccionReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$turno=$_POST['turno'];
$turno = utf8_decode($turno);
buscarcascadaSeccionReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$semestre,$turno,$estado);

}
if($funt=="buscarcascadaAlumnosReportMatriculacion")
{
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$turno=$_POST['turno'];
$turno = utf8_decode($turno);
$seccion=$_POST['seccion'];
$seccion = utf8_decode($seccion);
buscarcascadaAlumnosReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$semestre,$turno,$seccion,$estado);

}
if($funt=="buscarreport")
{
$nrodocumento=$_POST['nrodocumento'];
$nrodocumento = utf8_decode($nrodocumento);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$anhoregistro=$_POST['anhoregistro'];
$anhoregistro = utf8_decode($anhoregistro);
$convalidado=$_POST['convalidado'];
$convalidado = utf8_decode($convalidado);
$turno=$_POST['turno'];
$turno = utf8_decode($turno);
$seccion=$_POST['seccion'];
$seccion = utf8_decode($seccion);
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
buscarreport($nrodocumento,$codFilial,$codCarrera,$curso,$anhoregistro,$anho,$semestre,$nombre,$estado,$convalidado,$turno,$seccion,$ordenby);

}


if($funt=="crearlistadoparaarchivos")
{
$nrodocumento=$_POST['nrodocumento'];
$nrodocumento = utf8_decode($nrodocumento);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$nombreapellido=$_POST['nombreapellido'];
$nombreapellido = utf8_decode($nombreapellido);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);

if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
crearlistadoparaarchivos($nrodocumento,$codFilial,$codCarrera,$nombreapellido,$ordenby);

}
if($funt=="crearlistadoparaarchivosposgrado")
{
$nrodocumento=$_POST['nrodocumento'];
$nrodocumento = utf8_decode($nrodocumento);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$nombreapellido=$_POST['nombreapellido'];
$nombreapellido = utf8_decode($nombreapellido);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);

if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
crearlistadoparaarchivosposgrado($nrodocumento,$codFilial,$codCarrera,$nombreapellido,$ordenby);

}



if($funt=="buscarmateriascursadas")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarmateriascursadas($buscar);

}
if($funt=="buscarMiHistorial")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
buscarMiHistorial($buscar,$user,$estado,$codFilial);

}
if($funt=="buscarMiHistorial2")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarMiHistorial2($buscar);

}
if($funt=="buscaranhosql")
{

 buscaranhosql();

}



	

}




function abm($tipo,$nroMatriculacion,$fechaMatriculacion,$fechaInicio,$idcursosalumno,$idalumnoFk,$cod_carreraFK,$estado,$anho,$anhoregistro,$semestre,$curso,$turno,$seccion,$convalidacion,$funt)
{
	
	if($idalumnoFk=="" && $cod_carreraFK==""&& $anho==""&& $anhoregistro==""&& $semestre==""&& $curso=="" && $turno==""&& $seccion=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();
     
	 if($funt=="nuevo")
	{
				$consulta= "Select count(*) from cursosalumno where idalumnoFk=?  and cod_carreraFK=? and anho=? and semestre=? and curso=?";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='sssss';
$stmt->bind_param($ss,$idalumnoFk,$cod_carreraFK,$anho,$semestre,$curso); 


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
	
    $consulta="insert into cursosalumno ( idalumnoFk, cod_carreraFK, estado, anho,anhoregistro, semestre, curso,turno,seccion,convalidacion,fechaInicio,codigomatriculacion,fechaMatriculacion,tipo_alumno) values ($idalumnoFk,$cod_carreraFK,'$estado','$anho','$anhoregistro','$semestre','$curso','$turno','$seccion','$convalidacion','$fechaInicio','$nroMatriculacion','$fechaMatriculacion','$tipo')";	
 
     $stmt = $mysqli->prepare($consulta);
   
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

function editamatriculacion($idcursosalumno,$controledit,$valor)
{
	
	if($idcursosalumno=="" && $valor=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();
     
	if($controledit=="anho"){
    $consulta="update  cursosalumno set anho='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="fechaInicio"){
    $consulta="update  cursosalumno set fechaInicio='$valor' where idcursosalumno='$idcursosalumno' ";
	}
    if($controledit=="anhoregistro"){
    $consulta="update  cursosalumno set anhoregistro='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="semestre"){
    $consulta="update  cursosalumno set semestre='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="curso"){
    $consulta="update  cursosalumno set curso='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="estado"){
    $consulta="update  cursosalumno set estado='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="Convalidacion"){
    $consulta="update  cursosalumno set convalidacion='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="seccion"){
    $consulta="update  cursosalumno set seccion='$valor' where idcursosalumno='$idcursosalumno' ";
	}
	if($controledit=="turno"){
    $consulta="update  cursosalumno set turno='$valor' where idcursosalumno='$idcursosalumno' ";
	}


     $stmt = $mysqli->prepare($consulta);
  
	
	
	
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

function buscarMiHistorial($buscar,$user,$estado,$codFilial)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "SELECT cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,convalidacion,cur.seccion,cur.turno,cur.fechaInicio,
		alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.anhoregistro,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where  cur.idalumnoFk='$buscar' and cur.estado='$estado' and car.cod_filialOringFK='$codFilial' order by cur.anho desc";
		 
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totalArancel=-1;
$totales=0;
 	$controlacc=controlaccesos($user,"EDITARMATRICULACION"," acus.accion='SI' ");
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $fechaInicio=utf8_encode($valor['fechaInicio']);
		  	  
		 
		  	if($controlacc>0){
			  
			$anhoregistro="<input list='ListAnho' onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$anhoregistro' style='width: 95%;text-align: center;' type='text'  class='input3' id='$idcursosalumno' name='anhoregistro' />";
			$anho="<input list='ListAnho'  onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$anho' style='width: 95%;text-align: center;' type='text'  class='input3' id='$idcursosalumno' name='anho' />";
			$semestre="<input list='ListSemestre'  onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$semestre' style='width: 95%;text-align: center;' type='text'  class='input3' id='$idcursosalumno' name='semestre' />";
			$curso="<input list='ListCurso'  onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$curso' style='width: 95%;text-align: center;' type='text'  class='input3' id='$idcursosalumno' name='curso' />";
			$seccion="<input list='ListSeccion'  onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$seccion' style='width: 95%;text-align: center;' type='text'  class='input3' id='$idcursosalumno' name='seccion' />";
			$turno="<input list='ListTurno' onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$turno' style='width: 95%;text-align: center;' type='text'  class='input3' id='$idcursosalumno' name='turno' />";
			
			$fechaInicio="<input   onkeyup='if(event.keyCode == 13){EditarCursoSemestreAnho(this)}' value='$fechaInicio' style='width: 90%;text-align: center;' type='Date'  class='input3' id='$idcursosalumno' name='fechaInicio' />";
			
			if($estado=="Activo"){
			$estado="<select value='$estado' class='input3select' style='width:95%'  onchange='EditarCursoSemestreAnho(this)'  id='$idcursosalumno' name='estado'>
<option value='Activo'>Activo</option>
<option value='Inactivo'>Inactivo</option>
<option value='Eliminado'>Eliminado</option>
</select>";
			}else{
				$estado="<select value='$estado' class='input3select' style='width:95%'  onchange='EditarCursoSemestreAnho(this)'  id='$idcursosalumno' name='estado'>
<option value='Inactivo'>Inactivo</option>
<option value='Activo'>Activo</option>
<option value='Eliminado'>Eliminado</option>
</select>";
			}

			if($convalidacion=="Si"){
			$convalidacion="<select value='Si' class='input3select' style='width:95%'  onchange='EditarCursoSemestreAnho(this)'  id='$idcursosalumno' name='Convalidacion'>
<option value='Si'>Si</option>
<option value='No'>No</option>
</select>";
			}else{
				$convalidacion="<select value='No' class='input3select' style='width:95%' onchange='EditarCursoSemestreAnho(this)'  id='$idcursosalumno' name='Convalidacion'>
<option value='No'>No</option>
<option value='Si'>Si</option>
</select>";
			}
				
			}
			    $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:10%;display:none;' >".$nombrecarrera."</td>
			   <td  id='td_datos_2' style='width:10%;display:none;' >".$anhoregistro."</td>
			   <td  id='td_datos_2' style='width:10%' >".$anho."</td>
			    <td  id='td_datos_3' style='width:10%;display:none;'>".$semestre."</td>
			    <td  id='td_datos_3' style='width:10%'>".$fechaInicio."</td>
			   <td  id='td_datos_4' style='width:10%' >".$curso."</td>
			   <td  id='td_datos_4' style='width:10%' >".$turno."</td>
			    <td  id='td_datos_4' style='width:10%' >".$seccion."</td>
			   <td  id='td_datos_7' style='width:10%;display:none;' >".$convalidacion."</td>
			   <td  id='td_datos_7' style='width:10%' >".$estado."</td>
			  </tr>
			  </table>";	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarMiHistorial2($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "SELECT cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,
alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.turno,cur.seccion,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where  cur.idalumnoFk='$buscar' and cur.estado='Activo'  order by cur.anho desc";
		 
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
		  
		  
		  
		      $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='' style='width:15%' >".$nombrefilial."</td>
			   <td  id='' style='width:15%' >".$nombrecarrera."</td>
			   <td  id='' style='width:5%' >".$anho."</td>
			    <td  id='' style='width:5%'>".$semestre."</td>
			   <td  id='' style='width:5%' >".$curso."</td>			 
			   <td  id='' style='width:5%' >".$turno."</td>			 
			   <td  id='' style='width:5%' >".$seccion."</td>			 
			 			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvista($documento,$alumno,$curso,$anho,$semestre,$codCarrera,$codFilial,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionFilial="";
	 $condicionCarrera="";
	 if($codCarrera!=""){
		  $condicionCarrera=" and car.Cod_listadecarrerasFK='$codCarrera' ";
	 } 
	 if($codFilial!=""){
		  $condicionFilial=" and car.cod_filialOringFK='$codFilial' ";
	 }
	 $condiciondocumento="";
	 if($documento!=""){
		  $condiciondocumento=" and alu.ci='$documento' ";
	 }
	 $condicionalumno="";
	 if($alumno!=""){
		  $condicionalumno=" and concat(alu.nombre,' ',alu.apellido) like '%".$alumno."%' ";
	 }
	 $condicioncurso="";
	 if($curso!=""){
		  $condicioncurso=" and cur.curso like '%".$curso."%' ";
	 }
	 $condicionanho="";
	 if($anho!=""){
		  $condicionanho=" and cur.anho='$anho' ";
	 }
	
	 $condicionsemestre="";
	 if($semestre!=""){
		  $condicionsemestre=" and cur.semestre='$semestre' ";
	 }
	 
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by ci asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombrealumno asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombrecarrera asc";
	}
	if($ordenby=="4"){
		$oderby="order by cur.curso desc";
	}
	if($ordenby=="5"){
		$oderby="order by cur.anho asc";
	}
	if($ordenby=="6"){
		$oderby="order by nombrefilial asc";
	}
	
	 
		$sql= "SELECT cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.seccion,cur.turno,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,alu.telef,cur.anhoregistro,
		ltc.nombre as nombrecarrera,ltc.anhos as duracion, alu.encargado , alu.ruc ,
		fil.nombre as nombrefilial
 FROM cursosalumno cur 
 inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where cur.estado='Activo' ".$condicionCarrera.$condicionFilial.$condiciondocumento.$condicionalumno.$condicioncurso.$condicionanho.$condicionsemestre.$oderby." limit 250";


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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $telef=utf8_encode($valor['telef']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $duracion=utf8_encode($valor['duracion']);
		  	  $encargado=utf8_encode($valor['encargado']);
		  	  $ruc=utf8_encode($valor['ruc']);
		  	
		  	$styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
			  $styleorden6="";
			  $styleorden7="";
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
	if($ordenby=="5"){
		$styleorden5="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="6"){
		$styleorden6="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="7"){
		$styleorden7="color: #000; background-color: #e7e7e7;";
	}
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAsignarAlumnos(this)'>
			  <td id='td_id_1' style='display:none;'>".$idcursosalumno."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carreraFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filialOringFK."</td>
			   <td  id='td_datos_1' style='width:10%;".$styleorden1."' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%;".$styleorden2."' >".$nombrealumno." ".$apellido."</td>
			    <td  id='td_datos_3' style='width:10%;".$styleorden3."'>".$nombrecarrera."</td>
			   <td  id='td_datos_15' style='display:none".$styleorden7."' >".$anhoregistro."</td>			   
			   	<td  id='td_datos_4' style='width:7%;".$styleorden4."' >".$curso."</td>
				<td  id='td_datos_6' style='width:7%;".$styleorden5."' >".$anho."</td>
			   <td  id='td_datos_7' style='display:none' >".$semestre."</td>		  
			  <td  id='td_datos_5' style='display:none' >".$turno."</td>		  
			   <td  id='td_datos_12' style='display:none' >".$seccion."</td>		  
			   <td  id='td_datos_10' style='display:none".$styleorden6."' >".$nombrefilial."</td>
			   <td  id='td_datos_11' style='display:none' >".$estado."</td>
			   <td  id='td_datos_13' style='display:none' >".$telef."</td>
			   <td  id='td_datos_14' style='display:none' >".$duracion."</td>
			   <td  id='td_datos_16' style='display:none' >".$encargado."</td>
			   <td  id='td_datos_17' style='display:none' >".$ruc."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarDatosPorCi($buscar,$codFilialFK,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionFilial="";
	 if($codFilialFK!=""){
		  $condicionFilial=" and fil.cod_filial='$codFilialFK' ";
	 }
		$sql= "SELECT cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.turno,cur.seccion,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,ltc.anhos as duracion,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where  alu.ci='$buscar' and cur.estado='Activo' and cur.anhoregistro='$anho' ".$condicionFilial."  order by alu.nombre asc,cur.anho desc ";
		 
		
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $duracion=utf8_encode($valor['duracion']);
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAsignarAlumnos(this)' name='tdDatosAlumnosMatriculados'>
			  <td id='td_id_1' style='display:none;'>".$idcursosalumno."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carreraFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filialOringFK."</td>
			   <td  id='td_datos_1' style='width:10%' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%' >".$nombrealumno." ".$apellido."</td>
			    <td  id='td_datos_3' style='width:10%'>".$nombrecarrera."</td>
			   <td  id='td_datos_4' style='width:7%' >".$curso."</td>
			   <td  id='td_datos_6' style='width:7%' >".$anho."</td>
			   <td  id='td_datos_7' style='width:7%' >".$semestre."</td>		  
			   <td  id='td_datos_5' style='display:none' >".$turno."</td>		  
			   <td  id='td_datos_12' style='display:none' >".$seccion."</td>		  
			   <td  id='td_datos_10' style='width:7%' >".$nombrefilial."</td>
			   <td  id='td_datos_11' style='display:none' >".$estado."</td>
			   <td  id='td_datos_13' style='display:none' >".$duracion."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvistinformes($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "SELECT cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where concat(alu.ci,' ',alu.nombre,' ',alu.apellido) like ? and cur.estado='Activo' group by alu.idalumno  order by alu.nombre asc,cur.anho desc limit 250";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAsignarAlumnos(this)'>
			  <td id='td_id_1' style='display:none;'>".$idcursosalumno."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carreraFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filialOringFK."</td>
			   <td  id='td_datos_1' style='width:10%' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%' >".$nombrealumno." ".$apellido."</td>
			    <td  id='td_datos_3' style='width:10%'>".$nombrecarrera."</td>
			   <td  id='td_datos_4' style='display:none' >".$curso."</td>
			   <td  id='td_datos_6' style='display:none' >".$anho."</td>
			   <td  id='td_datos_7' style='display:none' >".$semestre."</td>		  
			   <td  id='td_datos_5' style='display:none' >No-Definido</td>		  
			   <td  id='td_datos_10' style='display:none' >".$nombrefilial."</td>
			   <td  id='td_datos_11' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarreport($nrodocumento,$codFilial,$codCarrera,$curso,$anhoregistro,$anho,$semestre,$nombre,$estado,$convalidado,$turno,$seccion,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  
			  
	 $condicionCi="";
	 if($nrodocumento!=""){
		$condicionCi=" and alu.ci='$nrodocumento' "; 
	 }
	 $condicionFilial="";
	 if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' "; 
	 }
	  $condicionCarrera="";
	 if($codCarrera!=""){
		$condicionCarrera=" and ltc.Cod_listadecarreras='$codCarrera' "; 
	 }
	 $condicioncurso="";
	 if($curso!=""){
		$condicioncurso=" and cur.curso='$curso' "; 
	 }
	 $condicionanho="";
	 if($anho!=""){
		$condicionanho=" and cur.anho='$anho' "; 
	 }
	 $condicionsemestre="";
	 if($semestre!=""){
		$condicionsemestre=" and cur.semestre='$semestre' "; 
	 }
	 $condicionseccionnombre="";
	 if($nombre!=""){
		$condicionseccionnombre=" and concat(alu.nombre,' ',alu.apellido) like '%".$nombre."%' "; 
	 }
	 $condicionconvalidado="";
	 if($convalidado!=""){
		$condicionconvalidado=" and cur.convalidacion ='".$convalidado."' "; 
	 }
	 $condicionanhoregistro="";
	 if($anhoregistro!=""){
		$condicionanhoregistro=" and cur.anhoregistro ='".$anhoregistro."' "; 
	 }
	 $condicionturno="";
	 if($turno!=""){
		$condicionturno=" and cur.turno ='".$turno."' "; 
	 }
	 $condicionseccion="";
	 if($seccion!=""){
		$condicionseccion=" and cur.seccion ='".$seccion."' "; 
	 }
	 $condicionestado="";
	 if($estado!=""){
		$condicionestado=" and cur.estado ='".$estado."' "; 
	 }else{
		 $condicionestado=" and cur.estado <> 'Academico' "; 
	 }
	
	 
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by apellido asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombrecarrera asc";
	}
	if($ordenby=="4"){
		$oderby="order by cur.anho desc";
	}
	if($ordenby=="5"){
		$oderby="order by cur.semestre asc";
	}
	if($ordenby=="6"){
		$oderby="order by cur.anhoregistro asc";
	}
	if($ordenby=="7"){
		$oderby="order by cur.turno asc";
	}
	if($ordenby=="8"){
		$oderby="order by cur.seccion asc";
	}
	 
	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.convalidacion,cur.turno,cur.seccion,car.Cod_listadecarrerasFK,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK, whatsapp,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where cur.idalumnoFk!='-1' ".$condicionestado.$condicionseccionnombre.$condicionseccion.$condicionturno.$condicionanhoregistro.$condicionconvalidado.$condicionCi.$condicionFilial.$condicionCarrera.$condicioncurso.$condicionanho.$condicionsemestre.$condicionseccion."  ".$oderby." ";

		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		  $whatsapp=$valor['whatsapp'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $Cod_listadecarrerasFK=utf8_encode($valor['Cod_listadecarrerasFK']);
		  	 $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
			  $styleorden6="";
			  $styleorden7="";
			  $styleorden8="";
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
	if($ordenby=="5"){
		$styleorden5="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="6"){
		$styleorden6="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="7"){
		$styleorden7="color: #000; background-color: #e7e7e7;";
	}
    if($ordenby=="8"){
		$styleorden8="color: #000; background-color: #e7e7e7;";
	}
	$stylosestados="";
		  	if($estado=="Inactivo"){
				$stylosestados="background-color: #ffeb3b;color:#000";
			}
			if($estado=="Eliminado"){
				$stylosestados="background-color: #f44336; color: #fff;";
			}
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosReportAlumnosMatriculados(this)' style='".$stylosestados."'>
			  <td id='td_id_1' style='display:none;'>".$idcursosalumno."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carreraFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filialOringFK."</td>
			  <td  id='td_datos_10' style='display:none;".$styleorden2."' >".$nombrefilial."</td>
			  <td  id='td_datos_3' style='width:10%".$styleorden3."'>".$nombrecarrera."</td>
			  <td  id='td_datos_1' style='width:7%' >".$ci."</td>
			  <td  id='td_datos_2' style='width:15%;".$styleorden1."' >".$apellido." ".$nombrealumno."</td>	
			  <td  id='td_datos_20' style='width:5%;'>".$whatsapp."</td>	
  				<td  id='td_datos_4' style='width:5%;".$styleorden5."' >".$curso."</td>		
			   <td  id='td_datos_7' style='display:none;' >".$semestre."</td>
			    <td  id='td_datos_15' style='width:5%;".$styleorden8."' >".$seccion."</td>		  
				<td  id='td_datos_14' style='width:5%;".$styleorden7."' >".$turno."</td>	
				<td  id='td_datos_12'  style='display:none;' >".$convalidacion."</td>
				<td  id='td_datos_13' style='display:none;".$styleorden6."' >".$anhoregistro."</td>
				<td  id='td_datos_6' style='width:5%;".$styleorden4."' >".$anho."</td>		  		  
			   <td  id='td_datos_5' style='display:none' >No-Definido</td>				  
			   <td  id='td_datos_11' style='display:none' >".$estado."</td>
			   <td  id='td_datos_16' style='display:none' >".$Cod_listadecarrerasFK."</td>
			   
			  </tr>
			  </table>";
			
		  	//modificaranhosregistros($idcursosalumno,$anho);
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function crearlistadoparaarchivos($nrodocumento,$codFilial,$codCarrera,$nombreapellido,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  			  
	 $condicionCi="";
	 if($nrodocumento!=""){
		$condicionCi=" and alu.ci='$nrodocumento' "; 
	 }
	 $condicionFilial="";
	 if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' "; 
	 }
	  $condicionCarrera="";
	 if($codCarrera!=""){
		$condicionCarrera=" and ltc.Cod_listadecarreras='$codCarrera' "; 
	 }
	 $condicionnombreapellido="";
	 if($nombreapellido!=""){
		$condicionnombreapellido=" and concat(alu.nombre,' ',alu.apellido) like '%".$nombreapellido."%' "; 
	 }
	

	 
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombrecarrera asc";
	}
	if($ordenby=="3"){
		$oderby="order by alu.ci asc";
	}
	if($ordenby=="4"){
		$oderby="order by nombrealumno desc";
	}
	
	
		$sql= "SELECT  alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.idcursosalumno,cur.idalumnoFk,car.Cod_listadecarrerasFK,
		ltc.nombre as nombrecarrera,fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where cur.estado='Activo' and car.cod_listafacultadFk!='8'  ".$condicionCi.$condicionFilial.$condicionCarrera.$condicionnombreapellido." group by cur.idalumnoFk,car.Cod_listadecarrerasFK ".$oderby." ";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];		   
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $Cod_listadecarrerasFK=utf8_encode($valor['Cod_listadecarrerasFK']);
		  	
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
	
		  	$datosarchivos=buscardatosarchivosgrado($idalumnoFk,$Cod_listadecarrerasFK);
			$idarchivos_alumnos=$datosarchivos[0];
			$certificado_nac=$datosarchivos[1];
			$foto_tipo_carnet=$datosarchivos[2];
			$ficha_academica=$datosarchivos[3];
			$contrato_matriculacion=$datosarchivos[4];
			$solicitud_matriculacion=$datosarchivos[5];
			$copia_autenticada_de_titulo_bachiller=$datosarchivos[6];
			$certif_de_estudio_de_bachillerato_orinal_visado=$datosarchivos[7];
			$copia_de_cedula_autenticada=$datosarchivos[8];
			$certif_de_estudio_de_bachillerato_orinal_visado_fisico=$datosarchivos[9];
			$copia_de_cedula_autenticada_fisico=$datosarchivos[10];
			$ubicacion=$datosarchivos[11];
		  

			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosListadoCargarArchivos(this)'>
			  <td id='td_id_1' style='display:none;'>".$idarchivos_alumnos."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$Cod_listadecarrerasFK."</td>
			   <td  id='td_datos_1' style='width:6%;".$styleorden1."' >".$nombrefilial."</td>
			   <td  id='td_datos_2' style='width:10%;".$styleorden2."'>".$nombrecarrera."</td>
			   <td  id='td_datos_3' style='width:7%;".$styleorden3."' >".$ci."</td>
			   <td  id='td_datos_4' style='width:10%;".$styleorden4."' >".$nombrealumno." ".$apellido."</td>	
               <td  id='td_datos_9' style='width:5%' >".$solicitud_matriculacion."</td>	
			   <td  id='td_datos_8' style='width:5%' >".$contrato_matriculacion."</td>
               <td  id='td_datos_6' style='width:5%' >".$foto_tipo_carnet."</td>
               <td  id='td_datos_7' style='width:5%' >".$ficha_academica."</td>	
               <td  id='td_datos_12' style='width:5%' >".$copia_de_cedula_autenticada."</td>				   
			   <td  id='td_datos_13' style='width:5%' >".$copia_de_cedula_autenticada_fisico."</td>	
			   <td  id='td_datos_10' style='width:5%' >".$copia_autenticada_de_titulo_bachiller."</td>		  
			   <td  id='td_datos_11' style='width:5%' >".$certif_de_estudio_de_bachillerato_orinal_visado."</td>
              <td  id='td_datos_14' style='width:5%' >".$certif_de_estudio_de_bachillerato_orinal_visado_fisico."</td>					   
			   <td  id='td_datos_5' style='width:5%' >".$certificado_nac."</td>		   	  
	           <td  id='td_datos_15' style='width:5%' >".$ubicacion."</td>		  	  
	           <td   style='width:5%' >
			   <input type='button' value='Guardar' class='btn15' onclick='Aplicar_Cambios_Archivos_grado()' style='width:80px;'>
			   </td>		  	  
			  </tr>
			  </table>";
			
		  	//modificaranhosregistros($idcursosalumno,$anho);
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function crearlistadoparaarchivosposgrado($nrodocumento,$codFilial,$codCarrera,$nombreapellido,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  			  
	 $condicionCi="";
	 if($nrodocumento!=""){
		$condicionCi=" and alu.ci='$nrodocumento' "; 
	 }
	 $condicionFilial="";
	 if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' "; 
	 }
	  $condicionCarrera="";
	 if($codCarrera!=""){
		$condicionCarrera=" and ltc.Cod_listadecarreras='$codCarrera' "; 
	 }
	 $condicionnombreapellido="";
	 if($nombreapellido!=""){
		$condicionnombreapellido=" and concat(alu.nombre,' ',alu.apellido) like '%".$nombreapellido."%' "; 
	 }
	

	 
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombrecarrera asc";
	}
	if($ordenby=="3"){
		$oderby="order by alu.ci asc";
	}
	if($ordenby=="4"){
		$oderby="order by nombrealumno desc";
	}
	
	
		$sql= "SELECT  alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.idcursosalumno,cur.idalumnoFk,car.Cod_listadecarrerasFK,
		ltc.nombre as nombrecarrera,fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where cur.estado='Activo' and car.cod_listafacultadFk='8' ".$condicionCi.$condicionFilial.$condicionCarrera.$condicionnombreapellido." group by cur.idalumnoFk,car.Cod_listadecarrerasFK ".$oderby." ";


		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];		   
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $Cod_listadecarrerasFK=utf8_encode($valor['Cod_listadecarrerasFK']);
		  	
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
	
		  	$datosarchivos=buscardatosarchivosposgrado($idalumnoFk,$Cod_listadecarrerasFK);


			$idarchivos_alumnos=$datosarchivos[0];
			$certificado_nac=$datosarchivos[1];
			$foto_tipo_carnet=$datosarchivos[2];
			$ficha_academica=$datosarchivos[3];
			$contrato_matriculacion=$datosarchivos[4];
			$solicitud_matriculacion=$datosarchivos[5];
			$copia_autenticada_de_titulo_grado=$datosarchivos[6];
			$certif_de_estudio_de_grado=$datosarchivos[7];
			$copia_de_cedula_autenticada=$datosarchivos[8];
			$certif_de_estudio_de_grado_fisico=$datosarchivos[9];
			$copia_de_cedula_autenticada_fisico=$datosarchivos[10];
			$copia_autenticada_de_titulo_grado_fisico=$datosarchivos[11];
			$ubicacion=$datosarchivos[12];
		  

			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosListadoCargarArchivos(this)'>
			  <td id='td_id_1' style='display:none;'>".$idarchivos_alumnos."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$Cod_listadecarrerasFK."</td>
			   <td  id='td_datos_1' style='width:6%;".$styleorden1."' >".$nombrefilial."</td>
			   <td  id='td_datos_2' style='width:10%;".$styleorden2."'>".$nombrecarrera."</td>
			   <td  id='td_datos_3' style='width:7%;".$styleorden3."' >".$ci."</td>
			   <td  id='td_datos_4' style='width:10%;".$styleorden4."' >".$nombrealumno." ".$apellido."</td>			      		  	  
			   <td  id='td_datos_5' style='width:5%' >".$contrato_matriculacion."</td>		  
			   <td  id='td_datos_6' style='width:5%' >".$solicitud_matriculacion."</td>		
			   <td  id='td_datos_7' style='width:5%' >".$foto_tipo_carnet."</td>
				<td  id='td_datos_8' style='width:5%' >".$ficha_academica."</td>				   	  
			   <td  id='td_datos_9' style='width:5%' >".$copia_de_cedula_autenticada."</td>		  
			   <td  id='td_datos_10' style='width:5%' >".$copia_de_cedula_autenticada_fisico."</td>
               <td  id='td_datos_11' style='width:5%' >".$copia_autenticada_de_titulo_grado."</td>
               <td  id='td_datos_12' style='width:5%' >".$copia_autenticada_de_titulo_grado_fisico."</td>			   
			   <td  id='td_datos_13' style='width:5%' >".$certif_de_estudio_de_grado."</td>				   
			   <td  id='td_datos_14' style='width:5%' >".$certif_de_estudio_de_grado_fisico."</td>	
               <td  id='td_datos_15' style='width:5%' >".$certificado_nac."</td>					   
			   <td  id='td_datos_16' style='width:5%' >".$ubicacion."</td>		
               <td   style='width:5%' >
			   <input type='button' value='Guardar' class='btn15' onclick='Aplicar_Cambios_Archivos_pos_grado()' style='width:80px;'>
			   </td>			   
			  </tr>
			  </table>";
			
		  	//modificaranhosregistros($idcursosalumno,$anho);
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscardatosarchivosgrado($idalumnoFK,$Cod_listadecarrerasFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idarchivos_alumnos, certificado_nac, certificado_nac_url, foto_tipo_carnet, foto_tipo_carnet_url, ficha_academica, ficha_academica_url, contrato_matriculacion, contrato_matriculacion_url, solicitud_matriculacion, solicitud_matriculacion_url, copia_autenticada_de_titulo_bachiller, copia_autenticada_de_titulo_bachiller_url, certif_de_estudio_de_bachillerato_orinal_visado_fisico,copia_de_cedula_autenticada_fisico,certif_de_estudio_de_bachillerato_orinal_visado, certif_de_estudio_de_bachillerato_orinal_visado_url, copia_de_cedula_autenticada, copia_de_cedula_autenticada_url, idalumnoFK, Cod_listadecarrerasFK,ubicacion
        from archivos_alumnos_carreras_grado where idalumnoFK='$idalumnoFK' and Cod_listadecarrerasFK='$Cod_listadecarrerasFK' ";
		 
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$datos;
$certificado_nac="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certificado_nac'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' name='certificado_nac' />";	

			$foto_tipo_carnet="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_foto_tipo_carnet' name='foto_tipo_carnet'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";			 
							 
			$ficha_academica="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_ficha_academica' name='ficha_academica'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}'  />";	
			
			$contrato_matriculacion="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_contrato_matriculacion' name='contrato_matriculacion'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}'  />";	

			$solicitud_matriculacion="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_solicitud_matriculacion' name='solicitud_matriculacion' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";	
			
			$copia_autenticada_de_titulo_bachiller="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_autenticada_de_titulo_bachiller'  name='copia_autenticada_de_titulo_bachiller'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";			 

			$certif_de_estudio_de_bachillerato_orinal_visado="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_bachillerato_orinal_visado_1'  name='certif_de_estudio_de_bachillerato_orinal_visado'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}'  />";	
			
			$certif_de_estudio_de_bachillerato_orinal_visado_fisico="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_bachillerato_orinal_visado_fisico'  name='certif_de_estudio_de_bachillerato_orinal_visado_fisico' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";	
			
			$copia_de_cedula_autenticada="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada' name='copia_de_cedula_autenticada' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";			
			
			
			$copia_de_cedula_autenticada_fisico="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada_fisico' name='copia_de_cedula_autenticada_fisico'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";
			
			$ubicacion="<input  value='' style='width: 130px;text-align: center;' type='text'  class='input3' id='inp_ubicacion' name='ubicacion' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";
			
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idarchivos_alumnos=$valor['idarchivos_alumnos'];
		      $idalumnoFK=$valor['idalumnoFK'];
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		  	  $certificado_nac=utf8_encode($valor['certificado_nac']);
		  	  $certificado_nac_url=utf8_encode($valor['certificado_nac_url']);
		  	  $foto_tipo_carnet=utf8_encode($valor['foto_tipo_carnet']);
		  	  $foto_tipo_carnet_url=utf8_encode($valor['foto_tipo_carnet_url']);
		  	  $ficha_academica=utf8_encode($valor['ficha_academica']);
		  	  $ficha_academica_url=utf8_encode($valor['ficha_academica_url']);
		  	  $contrato_matriculacion=utf8_encode($valor['contrato_matriculacion']);
		  	  $contrato_matriculacion_url=utf8_encode($valor['contrato_matriculacion_url']);
		  	  $solicitud_matriculacion=utf8_encode($valor['solicitud_matriculacion']);
		  	  $solicitud_matriculacion_url=utf8_encode($valor['solicitud_matriculacion_url']);
		  	  $copia_autenticada_de_titulo_bachiller=utf8_encode($valor['copia_autenticada_de_titulo_bachiller']);
		  	  $copia_autenticada_de_titulo_bachiller_url=utf8_encode($valor['copia_autenticada_de_titulo_bachiller_url']);
		  	  $certif_de_estudio_de_bachillerato_orinal_visado=utf8_encode($valor['certif_de_estudio_de_bachillerato_orinal_visado']);
		  	  $certif_de_estudio_de_bachillerato_orinal_visado_url=utf8_encode($valor['certif_de_estudio_de_bachillerato_orinal_visado_url']);
		  	  $copia_de_cedula_autenticada=utf8_encode($valor['copia_de_cedula_autenticada']);
		  	  $copia_de_cedula_autenticada_url=utf8_encode($valor['copia_de_cedula_autenticada_url']);
		  	  $certif_de_estudio_de_bachillerato_orinal_visado_fisico=utf8_encode($valor['certif_de_estudio_de_bachillerato_orinal_visado_fisico']);
		  	  $copia_de_cedula_autenticada_fisico=utf8_encode($valor['copia_de_cedula_autenticada_fisico']);
		  	  $ubicacion=utf8_encode($valor['ubicacion']);
		  	  		    	 
					   
			$certificado_nac="<input list='ListEstadosArchivos' value='$certificado_nac' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certificado_nac'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' name='certificado_nac' />";	

			$foto_tipo_carnet="<input list='ListEstadosArchivos' value='$foto_tipo_carnet' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_foto_tipo_carnet' name='foto_tipo_carnet'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";			 
							 
			$ficha_academica="<input list='ListEstadosArchivos' value='$ficha_academica' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_ficha_academica' name='ficha_academica'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}'  />";	
			
			$contrato_matriculacion="<input list='ListEstadosArchivos' value='$contrato_matriculacion' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_contrato_matriculacion' name='contrato_matriculacion'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}'  />";	

			$solicitud_matriculacion="<input list='ListEstadosArchivos' value='$solicitud_matriculacion' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_solicitud_matriculacion' name='solicitud_matriculacion' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";	
			
			$copia_autenticada_de_titulo_bachiller="<input list='ListEstadosArchivos' value='$copia_autenticada_de_titulo_bachiller' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_autenticada_de_titulo_bachiller'  name='copia_autenticada_de_titulo_bachiller'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";			 

			$certif_de_estudio_de_bachillerato_orinal_visado="<input list='ListEstadosArchivos' value='$certif_de_estudio_de_bachillerato_orinal_visado' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_bachillerato_orinal_visado'  name='certif_de_estudio_de_bachillerato_orinal_visado'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}'  />";	
			
			$certif_de_estudio_de_bachillerato_orinal_visado_fisico="<input list='ListEstadosArchivos' value='$certif_de_estudio_de_bachillerato_orinal_visado_fisico' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_bachillerato_orinal_visado_fisico'  name='certif_de_estudio_de_bachillerato_orinal_visado_fisico' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";	
			
			$copia_de_cedula_autenticada="<input list='ListEstadosArchivos' value='$copia_de_cedula_autenticada' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada' name='copia_de_cedula_autenticada' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";			
			
			
			$copia_de_cedula_autenticada_fisico="<input list='ListEstadosArchivos' value='$copia_de_cedula_autenticada_fisico' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada_fisico' name='copia_de_cedula_autenticada_fisico'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";
			
			$ubicacion="<input  value='$ubicacion' style='width: 130px;text-align: center;' type='text'  class='input3' id='inp_ubicacion' name='ubicacion' onkeyup='if(event.keyCode === 13){editarExistenciaarchivogrado(this)}' />";
							 
$datos[0]=$idarchivos_alumnos;
$datos[1]=$certificado_nac;
$datos[2]=$foto_tipo_carnet;
$datos[3]=$ficha_academica;
$datos[4]=$contrato_matriculacion;
$datos[5]=$solicitud_matriculacion;
$datos[6]=$copia_autenticada_de_titulo_bachiller;
$datos[7]=$certif_de_estudio_de_bachillerato_orinal_visado;
$datos[8]= $copia_de_cedula_autenticada;
$datos[9]=$certif_de_estudio_de_bachillerato_orinal_visado_fisico;
$datos[10]=$copia_de_cedula_autenticada_fisico;
$datos[11]=$ubicacion;
			  
			  
	  }
	  
 }else{
	   	$datos[0]="";
$datos[1]=$certificado_nac;
$datos[2]=$foto_tipo_carnet;
$datos[3]=$ficha_academica;
$datos[4]=$contrato_matriculacion;
$datos[5]=$solicitud_matriculacion;
$datos[6]=$copia_autenticada_de_titulo_bachiller;
$datos[7]=$certif_de_estudio_de_bachillerato_orinal_visado;
$datos[8]= $copia_de_cedula_autenticada;
$datos[9]=$certif_de_estudio_de_bachillerato_orinal_visado_fisico;
$datos[10]=$copia_de_cedula_autenticada_fisico;
$datos[11]=$ubicacion;
 }
 
  mysqli_close($mysqli); 
  
return $datos;


}

function buscardatosarchivosposgrado($idalumnoFK,$Cod_listadecarrerasFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idarchivos_alumnos, certificado_nac, certificado_nac_url, foto_tipo_carnet, foto_tipo_carnet_url, ficha_academica, ficha_academica_url, contrato_matriculacion, contrato_matriculacion_url, solicitud_matriculacion, solicitud_matriculacion_url, copia_autenticada_de_titulo_grado, copia_autenticada_de_titulo_grado_url, certif_de_estudio_de_grado, certif_de_estudio_de_grado_url, copia_de_cedula_autenticada, copia_de_cedula_autenticada_url, idalumnoFK, Cod_listadecarrerasFK, certif_de_estudio_de_grado_fisico, copia_de_cedula_autenticada_fisico, copia_autenticada_de_titulo_grado_fisico,ubicacion
        from archivos_alumnos_carreras_grado_pos where idalumnoFK='$idalumnoFK' and Cod_listadecarrerasFK='$Cod_listadecarrerasFK' ";
		 
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$datos;
$certificado_nac="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certificado_nac'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' name='certificado_nac' />";	

			$foto_tipo_carnet="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_foto_tipo_carnet' name='foto_tipo_carnet' onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";			 
							 
			$ficha_academica="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_ficha_academica' name='ficha_academica' onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'  />";	
			
			$contrato_matriculacion="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_contrato_matriculacion' name='contrato_matriculacion' onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'  />";	

			$solicitud_matriculacion="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_solicitud_matriculacion' name='solicitud_matriculacion'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";	
			
			$copia_autenticada_de_titulo_grado="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_autenticada_de_titulo_bachiller'  name='copia_autenticada_de_titulo_grado'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";			 

			$certif_de_estudio_de_grado="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_grado'  name='certif_de_estudio_de_grado'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'  />";	
						
			$copia_de_cedula_autenticada="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada' name='copia_de_cedula_autenticada'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'  />";		
			
			$certif_de_estudio_de_grado_fisico="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_grado_fisico'  name='certif_de_estudio_de_grado_fisico'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";	
			
			$copia_de_cedula_autenticada_fisico="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada_fisico' name='copia_de_cedula_autenticada_fisico'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";
			
			$copia_autenticada_de_titulo_grado_fisico="<input list='ListEstadosArchivos' value='' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_autenticada_de_titulo_grado_fisico' name='copia_autenticada_de_titulo_grado_fisico'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";
			
			
			$ubicacion="<input  style='width: 100px;text-align: center;' type='text'  class='input3' id='inp_ubicacion' name='ubicacion'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";
			
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idarchivos_alumnos=$valor['idarchivos_alumnos'];
		      $idalumnoFK=$valor['idalumnoFK'];
		      $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		  	  $certificado_nac=utf8_encode($valor['certificado_nac']);
		  	  $foto_tipo_carnet=utf8_encode($valor['foto_tipo_carnet']);
		  	  $ficha_academica=utf8_encode($valor['ficha_academica']);
		  	  $contrato_matriculacion=utf8_encode($valor['contrato_matriculacion']);
		  	  $solicitud_matriculacion=utf8_encode($valor['solicitud_matriculacion']);
		  	  $copia_autenticada_de_titulo_grado=utf8_encode($valor['copia_autenticada_de_titulo_grado']);
		  	  $certif_de_estudio_de_grado=utf8_encode($valor['certif_de_estudio_de_grado']);
		  	  $copia_de_cedula_autenticada=utf8_encode($valor['copia_de_cedula_autenticada']);
		  	  $certif_de_estudio_de_grado_fisico=utf8_encode($valor['certif_de_estudio_de_grado_fisico']);
		  	  $copia_de_cedula_autenticada_fisico=utf8_encode($valor['copia_de_cedula_autenticada_fisico']);
		  	  $copia_autenticada_de_titulo_grado_fisico=utf8_encode($valor['copia_autenticada_de_titulo_grado_fisico']);
		  	  $ubicacion=utf8_encode($valor['ubicacion']);
		  	
		  	  		    	 
					   
			$certificado_nac="<input list='ListEstadosArchivos' value='$certificado_nac' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certificado_nac' name='certificado_nac' onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'   />";	

			$foto_tipo_carnet="<input list='ListEstadosArchivos' value='$foto_tipo_carnet' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_foto_tipo_carnet' name='foto_tipo_carnet' onchange='editarExistenciaarchivoposgrado(this)' onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";			 
							 
			$ficha_academica="<input list='ListEstadosArchivos' value='$ficha_academica' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_ficha_academica' name='ficha_academica' onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'  />";	
			
			$contrato_matriculacion="<input list='ListEstadosArchivos' value='$contrato_matriculacion' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_contrato_matriculacion' name='contrato_matriculacion'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";	

			$solicitud_matriculacion="<input list='ListEstadosArchivos' value='$solicitud_matriculacion' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_solicitud_matriculacion'  name='solicitud_matriculacion'    onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";	
			
			$copia_autenticada_de_titulo_grado="<input list='ListEstadosArchivos' value='$copia_autenticada_de_titulo_grado' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_autenticada_de_titulo_bachiller' name='copia_autenticada_de_titulo_grado'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";			 

			$certif_de_estudio_de_grado="<input list='ListEstadosArchivos' value='$certif_de_estudio_de_grado' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_grado' name='certif_de_estudio_de_grado'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'  />";	
			
			$copia_de_cedula_autenticada="<input list='ListEstadosArchivos' value='$copia_de_cedula_autenticada' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada'  name='copia_de_cedula_autenticada'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}' />";	

			$certif_de_estudio_de_grado_fisico="<input list='ListEstadosArchivos' value='$certif_de_estudio_de_grado_fisico' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_certif_de_estudio_de_grado_fisico'  name='certif_de_estudio_de_grado_fisico'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'   />";		
			
			$copia_de_cedula_autenticada_fisico="<input list='ListEstadosArchivos' value='$copia_de_cedula_autenticada_fisico' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_de_cedula_autenticada_fisico' 
            name='copia_de_cedula_autenticada_fisico'   onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'
			/>";	
			
			$copia_autenticada_de_titulo_grado_fisico="<input list='ListEstadosArchivos' value='$copia_autenticada_de_titulo_grado_fisico' style='width: 70px;text-align: center;' type='text'  class='input3' id='inp_copia_autenticada_de_titulo_grado_fisico' 
            name='copia_autenticada_de_titulo_grado_fisico'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'
			/>";	
			
			$ubicacion="<input  value='$ubicacion' style='width: 100px;text-align: center;' type='text'  class='input3' id='inp_ubicacion' 
            name='ubicacion'  onkeyup='if(event.keyCode === 13){editarExistenciaarchivoposgrado(this)}'
			/>";			 
							 
$datos[0]=$idarchivos_alumnos;
$datos[1]=$certificado_nac;
$datos[2]=$foto_tipo_carnet;
$datos[3]=$ficha_academica;
$datos[4]=$contrato_matriculacion;
$datos[5]=$solicitud_matriculacion;
$datos[6]=$copia_autenticada_de_titulo_grado;
$datos[7]=$certif_de_estudio_de_grado;
$datos[8]= $copia_de_cedula_autenticada;
$datos[9]=$certif_de_estudio_de_grado_fisico;
$datos[10]=$copia_de_cedula_autenticada_fisico;
$datos[11]=$copia_autenticada_de_titulo_grado_fisico;
$datos[12]=$ubicacion;
			  
			  
	  }
	  
 }else{
$datos[0]="";
$datos[1]=$certificado_nac;
$datos[2]=$foto_tipo_carnet;
$datos[3]=$ficha_academica;
$datos[4]=$contrato_matriculacion;
$datos[5]=$solicitud_matriculacion;
$datos[6]=$copia_autenticada_de_titulo_grado;
$datos[7]=$certif_de_estudio_de_grado;
$datos[8]= $copia_de_cedula_autenticada;
$datos[9]=$certif_de_estudio_de_grado_fisico;
$datos[10]=$copia_de_cedula_autenticada_fisico;
$datos[11]=$copia_autenticada_de_titulo_grado_fisico;
$datos[12]=$ubicacion;
			  
 }
 
  mysqli_close($mysqli); 
  
return $datos;


}




function buscarcascadaCarrerasReportMatriculacion($codfilial,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina=""; 
	 $condicionestado="";
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.convalidacion,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where ".$condicionestado." car.cod_filialOringFK='$codfilial' group by car.Cod_listadecarrerasFK order by ltc.nombre asc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $pagina.="
			 <p class='divCascada3'  onclick='vercerrarreportmatriculadosanho(this)' >
			 <img  id='iconocarpeta' name='iconocarpetareportmatroculadoanho' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' /> ".$nombrecarrera." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 </p>
			 <div class='divCascada2' name='div_anho_report_matriculados_1' id='div_anho_report_matriculados_".$cod_filialOringFK.$cod_carreraFK."' style='display:none' ></div>";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcascadaAnhoReportMatriculacion($codfilial,$codcarrera,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  
		$condicionestado="";	  
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }
	 
	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.convalidacion,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where ".$condicionestado." car.cod_filialOringFK='$codfilial' and  cur.cod_carreraFK='$codcarrera' group by cur.anho order by cur.anho desc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $pagina.="
			 <p class='divCascada3'  onclick='vercerrarreportmatriculadoscurso(this)' >
			 <img  id='iconocarpeta' name='iconocarpetareportmatroculadocurso' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Año: ".$anho." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 </p>
			 <div class='divCascada2' name='div_curso_report_matriculados_1' id='div_curso_report_matriculados_".$cod_filialOringFK.$cod_carreraFK.$anho."' style='display:none' ></div>";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcascadacursoReportMatriculacion($codfilial,$codcarrera,$anho,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  
			$condicionestado="";	  
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }  
	
	 
	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.convalidacion,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where ".$condicionestado." car.cod_filialOringFK='$codfilial' and  cur.cod_carreraFK='$codcarrera' and cur.anho='$anho' group by cur.curso order by cur.curso asc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $pagina.="
			 <p class='divCascada3'  onclick='vercerrarreportmatriculadossemestre(this)' >
			 <img  id='iconocarpeta' name='iconocarpetareportmatroculadosemestre' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Curso : ".$curso." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 <span id='span4' style='display:none' >$curso</span>
			 </p>
			 <div class='divCascada2' name='div_semestre_report_matriculados_1' id='div_semestre_report_matriculados_".$cod_filialOringFK.$cod_carreraFK.$anho.$curso."' style='display:none' ></div>";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcascadaSemestreReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  
			  
		$condicionestado="";	  
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }  
	 
	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.convalidacion,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where ".$condicionestado."  car.cod_filialOringFK='$codfilial' and  cur.cod_carreraFK='$codcarrera' and cur.anho='$anho' and cur.curso='$curso' group by cur.semestre order by cur.semestre asc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $pagina.="
			 <p class='divCascada3'  onclick='vercerrarreportmatriculadosturno(this)' >
			 <img  id='iconocarpeta' name='iconocarpetareportmatroculadoturno' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Semestre : ".$semestre." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 <span id='span4' style='display:none' >$curso</span>
			 <span id='span5' style='display:none' >$semestre</span>
			 </p>
			 <div class='divCascada2' name='div_turno_report_matriculados_1' id='div_turno_report_matriculados_".$cod_filialOringFK.$cod_carreraFK.$anho.$curso.$semestre."' style='display:none' ></div>";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcascadaTurnoReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$semestre,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  
			  
	 $condicionestado="";
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }
	 
	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,cur.convalidacion,cur.turno,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where  ".$condicionestado." car.cod_filialOringFK='$codfilial' and  cur.cod_carreraFK='$codcarrera' and cur.anho='$anho' and cur.curso='$curso' and cur.semestre='$semestre' group by cur.turno order by cur.turno asc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $pagina.="
			 <p class='divCascada3'  onclick='vercerrarreportmatriculadosseccion(this)' >
			 <img  id='iconocarpeta' name='iconocarpetareportmatroculadoseccion' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Turno : ".$turno." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 <span id='span4' style='display:none' >$curso</span>
			 <span id='span5' style='display:none' >$semestre</span>
			 <span id='span6' style='display:none' >$turno</span>
			 </p>
			 <div class='divCascada2' name='div_seccion_report_matriculados_1' id='div_seccion_report_matriculados_".$cod_filialOringFK.$cod_carreraFK.$anho.$curso.$semestre.$turno."' style='display:none' ></div>";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcascadaSeccionReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$semestre,$turno,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
				 $condicionestado="";
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }  	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre,cur.seccion, cur.curso,cur.convalidacion,cur.turno,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where ".$condicionestado." car.cod_filialOringFK='$codfilial' and  cur.cod_carreraFK='$codcarrera' and cur.anho='$anho' and cur.curso='$curso' and cur.semestre='$semestre' and cur.turno='$turno' group by cur.seccion order by cur.seccion asc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $pagina.="
			 <p class='divCascada3'  onclick='vercerrarreportmatriculadosalumnos(this)' >
			 <img  id='iconocarpeta' name='iconocarpetareportmatroculadoalumnos' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Sección : ".$seccion." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 <span id='span4' style='display:none' >$curso</span>
			 <span id='span5' style='display:none' >$semestre</span>
			 <span id='span6' style='display:none' >$turno</span>
			 <span id='span7' style='display:none' >$seccion</span>
			 </p>
			 <div class='divCascada2' name='div_alumnos_report_matriculados_1' id='div_alumnos_report_matriculados_".$cod_filialOringFK.$cod_carreraFK.$anho.$curso.$semestre.$turno.$seccion."' style='display:none' ></div>";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcascadaAlumnosReportMatriculacion($codfilial,$codcarrera,$anho,$curso,$semestre,$turno,$seccion,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
			  			 $condicionestado="";
	 if($estado==""){
		 $condicionestado=" (cur.estado='Activo' or cur.estado='Academico') and ";
	 }else{
		 $condicionestado=" cur.estado='$estado' and ";
	 }  	
		$sql= "SELECT cur.anhoregistro,cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre,cur.seccion, cur.curso,cur.convalidacion,cur.turno,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where ".$condicionestado." car.cod_filialOringFK='$codfilial' and  cur.cod_carreraFK='$codcarrera' and cur.anho='$anho' and cur.curso='$curso' and cur.semestre='$semestre' and cur.turno='$turno' and cur.seccion='$seccion'  order by nombrealumno asc";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $convalidacion=utf8_encode($valor['convalidacion']);
		  	  $anhoregistro=utf8_encode($valor['anhoregistro']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	   	
		 $pagina.="
			<table class='tableRegistroCascada' border='0' cellspacing='0' cellpadding='0'>
			  <tr  onclick='ObtenerdatosReportAlumnosMatriculadosCascada(this)' >			
			   <td   style='width:5%;' >*</td>
			   <td   style='width:10%;text-align:left' >".$ci."</td>
			   <td   style='width:20%;text-align:left' >".$nombrealumno."</td>
			   <td   style='width:20%;text-align:left' >".$apellido."</td>
			  <td   style='width:10%' >".$convalidacion ."</td>
			  <td   style='width:10%' >".$anhoregistro."</td>	 
			
			  <td id='td_id_1' style='display:none;'>".$idcursosalumno."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumnoFk."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carreraFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filialOringFK."</td>
			   <td  id='td_datos_10'  style='display:none;'>".$nombrefilial."</td>
			   <td  id='td_datos_3'  style='display:none;'>".$nombrecarrera."</td>
			   <td  id='td_datos_1'  style='display:none;' >".$ci."</td>
			   <td  id='td_datos_2' style='display:none;' >".$nombrealumno." ".$apellido."</td>			    
				<td  id='td_datos_13'  style='display:none;' >".$anhoregistro."</td>
				<td  id='td_datos_6'  style='display:none;' >".$anho."</td>
			   <td  id='td_datos_4'  style='display:none;' >".$curso."</td>
			   <td  id='td_datos_7' style='display:none;' >".$semestre."</td>		  
			   <td  id='td_datos_5' style='display:none' >No-Definido</td>				  
			   <td  id='td_datos_11' style='display:none' >".$estado."</td>
			   <td  id='td_datos_12'   style='display:none;'>".$convalidacion."</td>			  
			  </tr>
			  </table>
			 ";
			  
			 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function modificaranhosregistros($idcursosalumno,$valor)
{
	
	

	$mysqli=conectar_al_servidor();
     
	
	
    $consulta="update  cursosalumno set anhoregistro='$valor' where idcursosalumno='$idcursosalumno' ";
	


     $stmt = $mysqli->prepare($consulta);
  
	
	
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}



  mysqli_close($mysqli); 
  
   
	
}


function buscarmateriascursadas($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select cur.idcursosalumno,alu.idalumno,alu.ci,concat(alu.nombre,' ',alu.apellido) as nombrealumno,
		cur.curso,cur.semestre,cur.anho,cur.turno,cur.fechainicio,cur.fechafin,cur.estado,cur.cod_carreraFK ,fil.cod_filial,
		ltc.nombre as nombrecarrera,fil.nombre as nombreFilial
        from cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
		inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
		inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
		inner join filial fil on fil.cod_filial=car.cod_filialFK
		where alu.idalumno=? and cur.estado='Activo'  ";
		 
   $stmt = $mysqli->prepare($sql);
  	$s='s';

//$buscar="".$buscar."";
$stmt->bind_param($s,$buscar);

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
		  
		  
		  
		      $idcursosalumno=$valor['idcursosalumno'];
		      $idalumno=$valor['idalumno'];
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $fechainicio=utf8_encode($valor['fechainicio']);
		  	  $fechafin=utf8_encode($valor['fechafin']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombreFilial=utf8_encode($valor['nombreFilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $cod_filial=utf8_encode($valor['cod_filial']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			  <td id='td_id_1' style='display:none;'>".$idcursosalumno."</td>
			  <td id='td_id_2' style='display:none;'>".$idalumno."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carreraFK."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filial."</td>
			  <td  id='td_datos_6' style='width:15%' >".$anho."</td>
			   <td  id='td_datos_3' style='width:20%'>".$nombrecarrera."</td>
			   <td  id='td_datos_10' style='width:20%' >".$nombreFilial."</td>
			   <td  id='td_datos_1' style='display:none' >".$ci."</td>
			   <td  id='td_datos_2' style='display:none' >".$nombrealumno."</td>
			   <td  id='td_datos_11' style='width:15%' >".$estado."</td>
			   <td  id='td_datos_4' style='display:none' >".$curso."</td>
			   
			   <td  id='td_datos_7' style='display:none' >".$semestre."</td>
			   <td  id='td_datos_5' style='display:none' >".$turno."</td>
			   <td  id='td_datos_8' style='display:none' >".$fechainicio."</td>
			   <td  id='td_datos_9' style='display:none' >".$fechafin."</td>			  
			   
			   
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscaranhosql()
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "SELECT cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.estado, cur.anho, cur.semestre, cur.curso,
alu.nombre as nombrealumno,alu.apellido,alu.ci,car.cod_filialOringFK,
		ltc.nombre as nombrecarrera,
		fil.nombre as nombrefilial
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
 inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
 inner join filial fil on fil.cod_filial=car.cod_filialOringFK
where  cur.estado='Activo'  group by cur.anho ";
		 
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
		  
		  
		  $idcursosalumno=$valor['idcursosalumno'];
		      $idalumnoFk=$valor['idalumnoFk'];
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);;
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro'>
			   <td  id='td_datos_1' style='width:10%' ><input name='checkboxAnhoSqlConsulta' type='checkbox' value='$anho'    /></td>
			   <td  id='td_datos_1' style='width:90%' >".$anho."</td>
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