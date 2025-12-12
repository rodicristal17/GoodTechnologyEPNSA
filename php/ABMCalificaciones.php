<?php
include_once('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
include_once("conexion.php");
include_once("verificar_navegador.php");
include_once("buscar_nivel.php");
include_once('quitarseparadormiles.php');
include_once('ABMAsignarDocentes.php');
function verificarCalif($funt)
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


	
if($funt=="crearlista" )
{
	
	$idmalla=$_POST['idmalla'];
    $idmalla = utf8_decode($idmalla);
	$seccion=$_POST['seccion'];
    $seccion = utf8_decode($seccion);
	$turno=$_POST['turno'];
    $turno =  utf8_decode($turno);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$cod_carrera=$_POST['cod_carrera'];
    $cod_carrera = utf8_decode($cod_carrera);
	$cod_filial=$_POST['cod_filial'];
    $cod_filial = utf8_decode($cod_filial);
	$iddocente_catedraFK=$_POST['iddocente_catedraFK'];
    $iddocente_catedraFK = utf8_decode($iddocente_catedraFK);
	

	crearlistacalificacion($idmalla,$seccion,$turno,$anho,$curso,$semestre,$cod_carrera,$cod_filial,$iddocente_catedraFK);

}
if($funt=="buscarvistacarganotas" )
{
	$iddocente_catedra=$_POST['iddocente_catedra'];
    $iddocente_catedra = utf8_decode($iddocente_catedra);
	$calificacion=$_POST['calificacion'];
    $calificacion = utf8_decode($calificacion);
	$cod_AlumnoCalificaciones=$_POST['cod_AlumnoCalificaciones'];
    $cod_AlumnoCalificaciones = utf8_decode($cod_AlumnoCalificaciones);
	
	
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	
	
	buscarvistacarganotas($iddocente_catedra,$calificacion,$cod_AlumnoCalificaciones,$semestre,$curso);

}
if($funt=="buscarprintactas" )
{
	$iddocente_catedra=$_POST['iddocente_catedra'];
    $iddocente_catedra = utf8_decode($iddocente_catedra);
	$calificacion=$_POST['calificacion'];
    $calificacion = utf8_decode($calificacion);
	buscarprintactas($iddocente_catedra,$calificacion);

}

if($funt=="editarcalificacion" )
{
	$totalNro=$_POST['totalNro'];
    $totalNro = utf8_decode($totalNro);
	$controledit=$_POST['controledit'];
    $controledit = utf8_decode($controledit);
	$idnroactaFk=$_POST['idnroactaFk'];
    $idnroactaFk = utf8_decode($idnroactaFk);
	editarcalificacion($totalNro,$controledit,$idnroactaFk);
}

if($funt=="guardarnroacta" )
{
	$nroacta=$_POST['Nro'];
    $nroacta = utf8_decode($nroacta);
	$fecha=$_POST['fecha'];
    $fecha = utf8_decode($fecha);
	$hora=$_POST['hora'];
    $hora = utf8_decode($hora);
	$cod_filialFk=$_POST['cod_filialFk'];
    $cod_filialFk = utf8_decode($cod_filialFk);
	$idmallacurricularFk=$_POST['idmallacurricularFk'];
    $idmallacurricularFk = utf8_decode($idmallacurricularFk);
	$Cod_listadecarrerasFk=$_POST['Cod_listadecarrerasFk'];
    $Cod_listadecarrerasFk = utf8_decode($Cod_listadecarrerasFk);
	$idnroacta=$_POST['idAbm'];
    $idnroacta = utf8_decode($idnroacta);	
	$iddocente_catedraFK=$_POST['iddocente_catedraFK'];
    $iddocente_catedraFK = utf8_decode($iddocente_catedraFK);	
	$calificacion=$_POST['calificacion'];
    $calificacion = utf8_decode($calificacion);	
	insertarrnrodeacta($nroacta,$fecha,$hora,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk,$idnroacta,$iddocente_catedraFK,$calificacion);
}
	
if ($funt == "obtenerNotasAlumno") {
	$idAlumno = $_POST['idAlumno'];
	$idAlumno = utf8_decode($idAlumno);
	$materia = $_POST['materia'];
	$materia = utf8_decode($materia);
	$docente = $_POST['docente'];
	$docente = utf8_decode($docente);
	$anho = $_POST['anho'];
	$anho = utf8_decode($anho);
	$curso = $_POST['curso'];
	$curso = utf8_decode($curso);
	$semestre = $_POST['semestre'];
	$semestre = utf8_decode($semestre);
	$seccion = $_POST['seccion'];
	$seccion = utf8_decode($seccion);
	$idcursosalumno = $_POST['idcursosalumno'];
	$idcursosalumno = utf8_decode($idcursosalumno);

	obtenerNotasAlumno($idcursosalumno,$idAlumno, $materia, $docente, $anho, $curso, $semestre, $seccion);
}	
if ($funt == "buscarListaCalificaciones") {
	
	$idAbmAbmAlumnos = $_POST['idAbmAbmAlumnos'];
	$idAbmAbmAlumnos = utf8_decode($idAbmAbmAlumnos);
	$cod_carreraFK = $_POST['cod_carreraFK'];
	$cod_carreraFK = utf8_decode($cod_carreraFK); 

	buscarListaCalificaciones($idAbmAbmAlumnos,$cod_carreraFK);
}
}

function buscarListaCalificaciones($idAbmAbmAlumnos,$cod_carreraFK)
{
	$mysqli=conectar_al_servidor();
	 $idnroacta='';
	
		$sql= "Select idalumno,ci, nombre, apellido, email, telef, whatsapp, al.estado , al.dir_domicilio , ruc, celpadre , tipodoc 
, al.trabajo,al.encargado, al.estud_cursa,al.premio,al.observacion,al.fechanac
  ,cod_carreraFK,anho,semestre,cr.curso,Cod_listadecarrerasFK,idcursosalumno,
(select nombre from listadecarreras where Cod_listadecarrerasFK=Cod_listadecarreras) as carrera
from alumno  al 
		inner join cursosalumno cr on cr.idalumnoFk=al.idalumno
		inner join carrera car on car.cod_carrera=cr.cod_carreraFK
		where  al.estado='Activo' and cr.estado='Activo'  and idalumno = '".$idAbmAbmAlumnos."' and cod_carreraFK='".$cod_carreraFK."' order by nombre asc";
		 
		
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
		  
		      $anho=$valor['anho'];
		      $curso=$valor['curso'];
		      $semestre=$valor['semestre'];
		      $idcursosalumno=$valor['idcursosalumno'];
		      $ci=$valor['ci'];
		      $nombre=$valor['nombre'];
		      $apellido=$valor['apellido'];
		      $carrera=$valor['carrera'];
			$pagina.=" <p><strong>AÑO:</strong> <b>$anho</b> &nbsp;&nbsp; <strong>Curso:</strong> <b>$curso</b> &nbsp;&nbsp; <strong>Semestre :</strong> <b>$semestre</b> </p>  
	<table class='tableCabeceraRegistro' style='width: 100%;background-color: #9E9E9E;text-align: center; font-size: 14px;' >
				<tr >  
					<td style='width:55%;'>Asignatura</td>
					<td style='width:10%;'>Nota 1</td>
					<td style='width:10%;'>Nota 2</td>
					<td style='width:10%;'>Nota 3</td> 
					<td style='width:15%;'>Observación</th> 
				</tr>
			</table>";
			$pagina.=BuscarCalificacionActa($idcursosalumno,$idAbmAbmAlumnos, $anho, $curso, $semestre);
	  }
	  
 } 
	mysqli_close($mysqli);
	$informacion = array("1" => "exito", "2" => $pagina, "3" => $ci, "4" => $nombre, "5" => $apellido, "6" => $carrera);
	echo json_encode($informacion);
	exit;
}



function BuscarCalificacionActa($idcursosalumno,$idAlumno, $anho, $curso, $semestre) {
	// Agregamos los filtros
	$filtro = "where a.idalumno = $idAlumno and ca.estado='Activo' and  la.cod_alumnoFK = $idAlumno and  ca.idcursosalumno='".$idcursosalumno."' and  mc.anho='".$anho."' and  mc.curso='".$curso."' and  mc.semestre='".$semestre."' ";
 
	
	// Creamos la consulta
	$mysqli = conectar_al_servidor();
	$sql= "select a.idalumno,a.nombre, a.apellido, a.email, a.telef, a.whatsapp,Cod_listadecarreras,
	ifnull(la.calif1,'') as calif1 , la.idnroactaFk1,ifnull(la.calif2,'') as calif2, la.idnroactaFk2,ifnull(la.calif3,'') as calif3, la.idnroactaFk3,ldc.nombre as NombreCarrera,
	ca.anho, ca.curso, ca.semestre, ca .turno, ca.seccion,
	dc.iddocente_catedra, dc.cod_filial, dc.idmallacurricular, c.cod_carrera,
	lp.nombre as nombre_docente, lp.apellido as apellido_docente, lp.nombreapellido as nombre_completo_docente, lp.nrodocumento,
	(select nombre from filial where cod_filial = dc.cod_filial) as nombrefilial,
	(select nombre from listadecarreras where Cod_listadecarreras = c.Cod_listadecarrerasFK) as nombreCarrera,
	(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=mc.idlistadodematerias ) as materia
	from mallacurricular mc 
	join listadecarreras ldc on ldc.Cod_listadecarreras = mc.cod_carrera 
	join carrera c on c.Cod_listadecarrerasFK = ldc.Cod_listadecarreras 
	join cursosalumno ca on ca.cod_carreraFK = c.cod_carrera 
	join docente_catedra dc on dc.idmallacurricular = mc.idmallacurricular 
	join listadoprofesores lp on lp.idlistadoProfesores = dc.idlistadoProfesores 
	join listadoalumnos la on la.iddocente_catedraFK = dc.iddocente_catedra
	join alumno a on ca.idalumnoFk = a.idalumno $filtro group by idmallacurricular asc order by mc.idmallacurricular desc";
	
 // echo($sql);
 // exit;

	$stmt = $mysqli->prepare($sql);
	if ( ! $stmt->execute()) {
		echo "Error";
		exit;
	}

	$result = $stmt->get_result();
	$cant_respuestas = mysqli_num_rows($result);
	$valor= $cant_respuestas;
	$pagina= "";
	if ($valor > 0) {
		$datos = array();
		while ($valor = mysqli_fetch_assoc($result)) {
			$nombre_docente= utf8_encode($valor['nombre_completo_docente']);
			$idnroactaFk1=utf8_encode($valor['idnroactaFk1']);
			$idnroactaFk2=utf8_encode($valor['idnroactaFk2']);
			$idnroactaFk3=utf8_encode($valor['idnroactaFk3']);
			$calif1=utf8_encode($valor['calif1']);
			$calif2=utf8_encode($valor['calif2']);
			$calif3=utf8_encode($valor['calif3']);
			$NombreCarrera=utf8_encode($valor['NombreCarrera']);
			
			$Cod_listadecarreras=utf8_encode($valor['Cod_listadecarreras']);
			$idalumno=utf8_encode($valor['idalumno']);
			if($idnroactaFk1=="0"){
				$idnroactaFk1="";
			}
			if($idnroactaFk2=="0"){
				$idnroactaFk2="";
			}
			if($idnroactaFk3=="0"){
				$idnroactaFk3="";
			}
			
 

// Verificamos si los tres son NO numéricos
if (!is_numeric($calif1) && !is_numeric($calif2) && !is_numeric($calif3)) {
    $resultado = "PENDIENTE";
} else {
    // Inicializamos todas las calificaciones en 0
    $c1 = is_numeric($calif1) ? floatval($calif1) : 0;
    $c2 = is_numeric($calif2) ? floatval($calif2) : 0;
    $c3 = is_numeric($calif3) ? floatval($calif3) : 0;

    // Nueva lógica: si alguna calificación es > 1, Aprobado directamente
    if ($c1 > 1 || $c2 > 1 || $c3 > 1) {
        $resultado = "APROBADO";
    } elseif ($c1 == 1 || $c2 == 1 || $c3 == 1) {
        $resultado = "REPROBADO";
    } else {
        $resultado = "PENDIENTE"; // Todas fueron no numéricas o ceros
    }
}

 

			
			
			
 
		$style="border: solid 1px #656363;font-size: 10px;padding: 0px 0px 0px 10px;";
		
			
			$pagina .= "<table class='tableRegistroSearch' style='width: 100%;text-align: left;height: 25px;' border='0' cellspacing='0' cellpadding='0'>
			<tr id='tbSelecRegistro' >  
				<td  style='width:55%;$style' >".utf8_encode($valor['materia'])."</td>
				<td   style='width:10%;$style' >".utf8_encode($valor['calif1'])."</td>
				<td   style='width:10%;$style' >".utf8_encode($valor['calif2'])."</td>
				<td  style='width:10%;$style' >".utf8_encode($valor['calif3'])."</td>
				<td   style='width:15%;$style' >".$resultado."</td> 
			</tr>
			</table>";
		}
	}
     $pagina .= "<br><br>";
	mysqli_close($mysqli);
	return $pagina;
}








function obtenerNotasAlumno($idcursosalumno,$idAlumno, $materia, $docente, $anho, $curso, $semestre, $seccion) {
	// Agregamos los filtros
	$filtro = "where a.idalumno = $idAlumno and  ca.idcursosalumno='".$idcursosalumno."' and  mc.anho='".$anho."' and  mc.curso='".$curso."' and  mc.semestre='".$semestre."'   ";
	if ($materia != "") {
		$filtro .= " AND upper(materia) like upper('%$materia%')";
	}
	if ($docente != "") {
		$filtro .= " AND upper(dc.nombre) like upper('%$docente%') AND upper(dc.apellido) like upper('%$docente%') ";
	}
	// if ($anho != "") {
		// $filtro .= " AND ca.anho = $anho";
	// }
	// if($curso != "") {
		// $filtro .= " AND ca.curso = $curso";
	// }
	// if ($semestre != "") {
		// $filtro .= " AND ca.semestre = $semestre";
	// }
	// if ($seccion != "") {
		// $filtro .= " AND upper(ca.seccion) like upper('%$seccion%')";
	// }
	
	// Creamos la consulta
	$mysqli = conectar_al_servidor();
	$sql= "select a.idalumno,a.nombre, a.apellido, a.email, a.telef, a.whatsapp,Cod_listadecarreras,
	ifnull(la.calif1,'') as calif1 , la.idnroactaFk1,ifnull(la.calif2,'') as calif2, la.idnroactaFk2,ifnull(la.calif3,'') as calif3, la.idnroactaFk3,ldc.nombre as NombreCarrera,
	mc.anho, mc.curso, mc.semestre, ca.turno, ca.seccion,
	dc.iddocente_catedra, dc.cod_filial, dc.idmallacurricular, c.cod_carrera,
	lp.nombre as nombre_docente, lp.apellido as apellido_docente, lp.nombreapellido as nombre_completo_docente, lp.nrodocumento,
	(select nombre from filial where cod_filial = dc.cod_filial) as nombrefilial,
	(select nombre from listadecarreras where Cod_listadecarreras = c.Cod_listadecarrerasFK) as nombreCarrera,
	(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=mc.idlistadodematerias ) as materia
	from mallacurricular mc 
	join listadecarreras ldc on ldc.Cod_listadecarreras = mc.cod_carrera 
	join carrera c on c.Cod_listadecarrerasFK = ldc.Cod_listadecarreras 
	join cursosalumno ca on ca.cod_carreraFK = c.cod_carrera 
	join docente_catedra dc on dc.idmallacurricular = mc.idmallacurricular 
	join listadoprofesores lp on lp.idlistadoProfesores = dc.idlistadoProfesores 
	join listadoalumnos la on la.iddocente_catedraFK = dc.iddocente_catedra
	join alumno a on ca.idalumnoFk = a.idalumno $filtro group by idmallacurricular asc order by mc.idmallacurricular desc";
	
	
// echo($sql);
// exit;
 
	$stmt = $mysqli->prepare($sql);
	if ( ! $stmt->execute()) {
		echo "Error";
		exit;
	}

	$result = $stmt->get_result();
	$cant_respuestas = mysqli_num_rows($result);
	$valor= $cant_respuestas;
	$pagina= "";
	if ($valor > 0) {
		$datos = array();
		while ($valor = mysqli_fetch_assoc($result)) {
			$nombre_docente= utf8_encode($valor['nombre_completo_docente']);
			$idnroactaFk1=utf8_encode($valor['idnroactaFk1']);
			$idnroactaFk2=utf8_encode($valor['idnroactaFk2']);
			$idnroactaFk3=utf8_encode($valor['idnroactaFk3']);
			$calif1=utf8_encode($valor['calif1']);
			$calif2=utf8_encode($valor['calif2']);
			$calif3=utf8_encode($valor['calif3']);
			$NombreCarrera=utf8_encode($valor['NombreCarrera']);
			
			$Cod_listadecarreras=utf8_encode($valor['Cod_listadecarreras']);
			$idalumno=utf8_encode($valor['idalumno']);
			if($idnroactaFk1=="0"){
				$idnroactaFk1="";
			}
			if($idnroactaFk2=="0"){
				$idnroactaFk2="";
			}
			if($idnroactaFk3=="0"){
				$idnroactaFk3="";
			}
			
			$datosactas = buscardatosnroactas($idnroactaFk1);
			$nroacta = $datosactas[0];
			$horaacta = $datosactas[1];
			$fechaacta = $datosactas[2];
			// if($calif1==""){				
				$opciones = '<span  onclick="VerVistaCargarCalif(this)" ><input type="button" value="CALIF. 1" class="btn4" style="width:30%;background-color: #2196f3;">
			  <p id="p_id_1" style="display:none;">' . utf8_encode($valor['iddocente_catedra']) . '</p>
			  <p id="p_id_2" style="display:none;">' . $nombre_docente . '</p>
			  <p id="p_id_3" style="display:none;">' . utf8_encode($valor['materia']) . '</p>
			  <p id="p_id_4" style="display:none;">' . utf8_encode($valor['turno']) . '</p>
			   <p id="p_id_5" style="display:none;">' . utf8_encode($valor['seccion']) . '</p>
			  <p id="p_id_6" style="display:none;">' . utf8_encode($valor['anho']) . '</p>
			  <p id="p_id_7" style="display:none;">' . utf8_encode($valor['curso']) . '</p>
			  <p id="p_id_8" style="display:none;">' . utf8_encode($valor['semestre']) . '</p>
			  <p id="p_id_9" style="display:none;">' . utf8_encode($valor['cod_filial']) . '</p>
			  <p id="p_id_10" style="display:none;">' . utf8_encode($valor['idmallacurricular']) . '</p>
			  <p id="p_id_11" style="display:none;">CALIFICACION1</p>
			   <p id="p_id_12" style="display:none;">' . utf8_encode($valor['cod_carrera']) . '</p>
			   <p id="p_id_13" style="display:none;">' . utf8_encode($valor['idnroactaFk1']) . '</p>
			   <p id="p_id_14" style="display:none;">' . $nroacta . '</p>
			   <p id="p_id_15" style="display:none;">' . $horaacta . '</p>
			   <p id="p_id_16" style="display:none;">' . $fechaacta . '</p>
			   <p id="p_id_17" style="display:none;">' . utf8_encode($valor['nrodocumento']) . '</p>
			   <p id="p_id_18" style="display:none;">' . utf8_encode($valor['nombrefilial']) . '</p>
			   <p id="p_id_19" style="display:none;">' . utf8_encode($valor['nombreCarrera']) . '</p>
			   <p id="p_id_20" style="display:none;">' . utf8_encode($valor['Cod_listadecarreras']) . '</p>
			   <p id="p_id_21" style="display:none;">' . utf8_encode($valor['idalumno']) . '</p>
			  </span>';
				
			// }else{
				// $opciones= ' <span> <p  style="display:none;">'.$calif1.'</p> </span>';
			// }
			
			$datosactas = buscardatosnroactas($idnroactaFk2);
			$nroacta = $datosactas[0];
			$horaacta = $datosactas[1];
			$fechaacta = $datosactas[2];
			$opciones .= '<span  onclick="VerVistaCargarCalif(this)" ><input type="button" value="CALIF. 2" class="btn4" style="width:30%;background-color: #2196f3;">
			  <p id="p_id_1" style="display:none;">' . utf8_encode($valor['iddocente_catedra']) . '</p>
			  <p id="p_id_2" style="display:none;">' . $nombre_docente . '</p>
			  <p id="p_id_3" style="display:none;">' . utf8_encode($valor['materia']) . '</p>
			  <p id="p_id_4" style="display:none;">' . utf8_encode($valor['turno']) . '</p>
			   <p id="p_id_5" style="display:none;">' . utf8_encode($valor['seccion']) . '</p>
			  <p id="p_id_6" style="display:none;">' . utf8_encode($valor['anho']) . '</p>
			  <p id="p_id_7" style="display:none;">' . utf8_encode($valor['curso']) . '</p>
			  <p id="p_id_8" style="display:none;">' . utf8_encode($valor['semestre']) . '</p>
			  <p id="p_id_9" style="display:none;">' . utf8_encode($valor['cod_filial']) . '</p>
			  <p id="p_id_10" style="display:none;">' . utf8_encode($valor['idmallacurricular']) . '</p>
			   <p id="p_id_11" style="display:none;">CALIFICACION2</p>
			    <p id="p_id_12" style="display:none;">' . utf8_encode($valor['cod_carrera']) . '</p>
			    <p id="p_id_13" style="display:none;">' . utf8_encode($valor['idnroactaFk2']) . '</p>
				  <p id="p_id_14" style="display:none;">' . $nroacta . '</p>
			   <p id="p_id_15" style="display:none;">' . $horaacta . '</p>
			   <p id="p_id_16" style="display:none;">' . $fechaacta . '</p>
			    <p id="p_id_17" style="display:none;">' . utf8_encode($valor['nrodocumento']) . '</p>
				<p id="p_id_18" style="display:none;">' . utf8_encode($valor['nombrefilial']) . '</p>
				<p id="p_id_19" style="display:none;">' . utf8_encode($valor['nombreCarrera']) . '</p>
			   <p id="p_id_20" style="display:none;">' . utf8_encode($valor['Cod_listadecarreras']) . '</p>
			   <p id="p_id_21" style="display:none;">' . utf8_encode($valor['idalumno']) . '</p>
			  </span>';
			$datosactas = buscardatosnroactas($idnroactaFk3);
			$nroacta = $datosactas[0];
			$horaacta = $datosactas[1];
			$fechaacta = $datosactas[2];
			$opciones .= '<span  onclick="VerVistaCargarCalif(this)" ><input type="button" value="CALIF. 3" class="btn4" style="width:30%;background-color: #2196f3;">
			  <p id="p_id_1" style="display:none;">' . utf8_encode($valor['iddocente_catedra']). '</p>
			  <p id="p_id_2" style="display:none;">' . $nombre_docente . '</p>
			  <p id="p_id_3" style="display:none;">' . utf8_encode($valor['materia']) . '</p>
			  <p id="p_id_4" style="display:none;">' . utf8_encode($valor['turno']). '</p>
			   <p id="p_id_5" style="display:none;">' . utf8_encode($valor['seccion']). '</p>
			  <p id="p_id_6" style="display:none;">' . utf8_encode($valor['anho']). '</p>
			  <p id="p_id_7" style="display:none;">' . utf8_encode($valor['curso']). '</p>
			  <p id="p_id_8" style="display:none;">' . utf8_encode($valor['semestre']). '</p>
			  <p id="p_id_9" style="display:none;">' . utf8_encode($valor['cod_filial']). '</p>
			  <p id="p_id_10" style="display:none;">' . utf8_encode($valor['idmallacurricular']). '</p>
			  <p id="p_id_11" style="display:none;">CALIFICACION3</p>
			   <p id="p_id_12" style="display:none;">' . utf8_encode($valor['cod_carrera']). '</p>
			   <p id="p_id_13" style="display:none;">' . utf8_encode($valor['idnroactaFk3']). '</p>
			     <p id="p_id_14" style="display:none;">' . $nroacta . '</p>
			   <p id="p_id_15" style="display:none;">' . $horaacta . '</p>
			   <p id="p_id_16" style="display:none;">' . $fechaacta . '</p>
			    <p id="p_id_17" style="display:none;">' . utf8_encode($valor['nrodocumento']). '</p>
				<p id="p_id_18" style="display:none;">' . utf8_encode($valor['nombrefilial']). '</p>
				<p id="p_id_19" style="display:none;">' . utf8_encode($valor['nombreCarrera']). '</p>
			   <p id="p_id_20" style="display:none;">' . utf8_encode($valor['Cod_listadecarreras']) . '</p>
			   <p id="p_id_21" style="display:none;">' . utf8_encode($valor['idalumno']) . '</p>
			  </span>';
			
			$pagina .= "<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			<tr id='tbSelecRegistro' >
				<td id='td_datos_1' style='display:none;' >".utf8_encode($valor['idmallacurricular'])."</td>
				<td   style='width:15%' >".utf8_encode($valor['NombreCarrera'])."</td>
				<td id='td_datos_2' style='width:20%' >".utf8_encode($valor['materia'])."</td>
				<td id='td_datos_3' style='width:5%' >".utf8_encode($valor['anho'])."</td>
				<td id='td_datos_5' style='width:5%' >".utf8_encode($valor['curso'])."</td>
				<td id='td_datos_4' style='width:5%' >".utf8_encode($valor['semestre'])."</td>
				<td id='td_datos_6' style='width:5%' >".utf8_encode($valor['seccion'])."</td>
				<td id='td_datos_8' style='width:25%' >".$nombre_docente."</td>
				<td  style='width:20%' >".$opciones."</td>
				<td id='td_datos_9' style='display: none' >".utf8_encode($valor['nombre_docente'])."</td>
				<td id='td_datos_10' style='display: none' >".utf8_encode($valor['apellido_docente'])."</td>
			</tr>
			</table>";
		}
	}

	mysqli_close($mysqli);
	$informacion = array("1" => "exito", "2" => $pagina, "3" => $cant_respuestas);
	echo json_encode($informacion);
	exit;
}



function crearlistacalificacion($idmalla,$seccion,$turno,$anho,$curso,$semestre,$cod_carrera,$cod_filial,$iddocente_catedraFK){


if($turno!="TARDE" && $turno!="NOCHE"){
	$turno="MA";
}

$cantidad=0;
$mysqli=conectar_al_servidor();

$sql= "SELECT cur.idcursosalumno
 FROM cursosalumno cur inner join alumno alu on alu.idalumno=cur.idalumnoFk
 inner join carrera car on car.cod_carrera=cur.cod_carreraFK 
where car.cod_filialOringFK='$cod_filial' and cur.anho='$anho' and  cur.semestre='$semestre' and cur.curso='$curso' and cur.seccion='$seccion' and cur.turno like '%".$turno."%' and car.Cod_listadecarrerasFK='$cod_carrera' ";



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
		   
		  $idcursosalumno=$valor['idcursosalumno'];
		  insertarlistado($idcursosalumno,$iddocente_catedraFK,"Pendiente");
		  $cantidad=$cantidad+1;  
 
	  }
	  
 }

  $informacion =array("1" => "exito","2"=>$cantidad);
    echo json_encode($informacion);	
    exit;
	
}


function insertarlistado($idcursosalumnoFk,$iddocente_catedraFK,$estado)
{
	 
	$mysqli=conectar_al_servidor();
	
	$consulta="delete from listadoalumnos where idcursosalumnoFk=? and iddocente_catedraFK=?";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ss';
    $stmt->bind_param($ss,$idcursosalumnoFk,$iddocente_catedraFK); 
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
	
    $consulta="insert into listadoalumnos (idcursosalumnoFk, iddocente_catedraFK, estado1,estado2,estado3) values ($idcursosalumnoFk,$iddocente_catedraFK,'Habilitado','Habilitado','Habilitado')";	
     $stmt = $mysqli->prepare($consulta);

if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 

}


function editarcalificacion($totalRegistro,$controledit,$idnroactaFk)
{
	
	$mysqli=conectar_al_servidor();
	
    if($controledit=="CALIFICACION1"){
	$tableName1="calif1";
	$tableName2="estado1";
	$tableName3="fecha1";
	$tableName4="idnroactaFk1";
	}
	if($controledit=="CALIFICACION2"){
	$tableName1="calif2";
	$tableName2="estado2";
	$tableName3="fecha2";
	$tableName4="idnroactaFk2";
	}
	if($controledit=="CALIFICACION3"){
	$tableName1="calif3";
	$tableName2="estado3";
	$tableName3="fecha3";
	$tableName4="idnroactaFk3";
	}
	

$control=0;	
while($control<$totalRegistro){

$idlista=$_POST['idlista'.$control];
$idlista = utf8_decode($idlista);

$estado=$_POST['estado'.$control];
$estado = utf8_decode($estado);

$calif=$_POST['calif'.$control];
$calif = utf8_decode($calif);

if($calif==""){
$estado="No Figura";	
}
if($calif!=""){
if($estado=="No Figura"){
$estado="Habilitado";	
}
}

$consulta="update  listadoalumnos set $tableName1='$calif', $tableName2='$estado', $tableName4='$idnroactaFk' 
where idlistadoalumnos='$idlista' ";



$stmt1 = $mysqli->prepare($consulta);
if (!$stmt1->execute()) {
	
echo $mysqli->error();
exit;

}
	$control=$control+1;
	
}

	

  mysqli_close($mysqli); 
  
    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function insertarrnrodeacta($nroacta,$fecha,$hora,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk,$idnroacta,$iddocente_catedraFK,$calificacion)
{

$mysqli=conectar_al_servidor();

if($idnroacta==""){

// $control=controlnrodenota($nroacta,$hora,$fecha,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk);	
// $controllistado=controlnroactaalumnos($fecha,$hora,$iddocente_catedraFK,$calificacion);
// if($control>0){
// $informacion =array("1" => "EX");
 // echo json_encode($informacion);	
 // exit;
// }
// if($controllistado==1){
// $informacion =array("1" => "LISEX");
 // echo json_encode($informacion);	
 // exit;
// }


$consulta="insert into nroactahabilitadas (nroacta, hora, fecha, cod_filialFk, idmallacurricularFk,Cod_listadecarrerasFk) values (?,?,?,?,?,?)";	
$stmt = $mysqli->prepare($consulta);
$ss='ssssss';
$stmt->bind_param($ss,$nroacta,$hora,$fecha,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk); 
if (!$stmt->execute()) {	
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}
$idnroacta=buscarultimaidnrodenota($nroacta,$hora,$fecha,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk);
if($calificacion=="CALIFICACION1"){
	$consulta="update listadoalumnos set  idnroactaFk1=? where iddocente_catedraFK=?";	
}
if($calificacion=="CALIFICACION2"){
	$consulta="update listadoalumnos set  idnroactaFk2=? where iddocente_catedraFK=?";	
}
if($calificacion=="CALIFICACION3"){
	$consulta="update listadoalumnos set  idnroactaFk3=? where iddocente_catedraFK=?";	
}
$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$idnroacta,$iddocente_catedraFK); 
if (!$stmt->execute()) {	
echo $mysqli->error();
exit;
}

}else{
$consulta="update nroactahabilitadas set  nroacta=?, hora=?, fecha=? where idnroacta=?";	
$stmt = $mysqli->prepare($consulta);
$ss='ssss';
$stmt->bind_param($ss,$nroacta,$hora,$fecha,$idnroacta); 
if (!$stmt->execute()) {	
echo $mysqli->error();
exit;
}
}
 
mysqli_close($mysqli); 


 $informacion =array("1" => "exito","2" => $idnroacta);
 echo json_encode($informacion);	
 exit;
 
}

function buscarultimaidnrodenota($nroacta,$hora,$fecha,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk)
{
	$mysqli=conectar_al_servidor();
	 $idnroacta='';
	
		$sql= "Select idnroacta from nroactahabilitadas
		where nroacta='$nroacta' and hora='$hora' and fecha='$fecha' and cod_filialFk='$cod_filialFk' 
		and idmallacurricularFk='$idmallacurricularFk' and Cod_listadecarrerasFk='$Cod_listadecarrerasFk'";
		 
		
		 
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
		  
		      $idnroacta=$valor['idnroacta'];
	  
	  }
	  
 } 
return $idnroacta;
}

function controlnrodenota($nroacta,$hora,$fecha,$cod_filialFk,$idmallacurricularFk,$Cod_listadecarrerasFk)
{
	$mysqli=conectar_al_servidor();
	 
		$sql= "Select count(*) from nroactahabilitadas
		where nroacta='$nroacta' and hora='$hora' and fecha='$fecha' and cod_filialFk='$cod_filialFk' 
		and idmallacurricularFk='$idmallacurricularFk' and Cod_listadecarrerasFk='$Cod_listadecarrerasFk'";		
		$stmt = $mysqli->prepare($sql);
if ( ! $stmt->execute()) {
echo "Error";
exit;
}
$result = $stmt->get_result();
$nro_total=$result->fetch_row();
$valor=$nro_total[0];
return $valor;

}


function controlnroactaalumnos($fechacontrol,$horacontrol,$iddocente_catedraFK,$calificacion)
{
	$mysqli=conectar_al_servidor();
	 $control='0';
	if($calificacion=="CALIFICACION1"){
	$sql= "Select hora,fecha
		from listadoalumnos lts inner join nroactahabilitadas nac on nac.idnroacta=lts.idnroactaFk1
		where lts.iddocente_catedraFK='".$iddocente_catedraFK."'";
}
if($calificacion=="CALIFICACION2"){
	$sql= "Select hora,fecha
		from listadoalumnos lts inner join nroactahabilitadas nac on nac.idnroacta=lts.idnroactaFk2
		where lts.iddocente_catedraFK='".$iddocente_catedraFK."'";	
}
if($calificacion=="CALIFICACION3"){
	$sql= "Select hora,fecha
		from listadoalumnos lts inner join nroactahabilitadas nac on nac.idnroacta=lts.idnroactaFk3
		where lts.iddocente_catedraFK='".$iddocente_catedraFK."'";
}
		
		 
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$nrocontador=0;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		  	  $hora=utf8_encode($valor['hora']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  if($horacontrol==$hora && $fechacontrol==$fecha){
				  $control='1';
			  }
			  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $control;

}

function buscarvistacarganotas($iddocente_catedra,$calificacion,$cod_AlumnoCalificaciones,$semestre,$curso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select lts.idlistadoalumnos, lts.idcursosalumnoFk, lts.iddocente_catedraFK, lts.estado1, lts.estado2, lts.estado3,
		alu.ci,concat(alu.nombre,' ',alu.apellido) nombreapellido,lts.calif1,lts.calif2,lts.calif3
		from listadoalumnos lts inner join docente_catedra dtc on dtc.iddocente_catedra=lts.iddocente_catedraFK
		inner join cursosalumno cur on cur.idcursosalumno=lts.idcursosalumnoFk
		inner join alumno alu on alu.idalumno=cur.idalumnoFk
		where lts.iddocente_catedraFK='".$iddocente_catedra."' and cur.idalumnoFk='".$cod_AlumnoCalificaciones."' and cur.semestre='".$semestre."' and cur.curso='".$curso."'  order by nombreapellido asc";
	 
		 
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$nrocontador=0;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		   
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $idlistadoalumnos=utf8_encode($valor['idlistadoalumnos']);
		  	  $iddocente_catedraFK=utf8_encode($valor['iddocente_catedraFK']);
		  	  $estado1=utf8_encode($valor['estado1']);
		  	  $estado2=utf8_encode($valor['estado2']);
		  	  $estado3=utf8_encode($valor['estado3']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombreapellido=utf8_encode($valor['nombreapellido']);
		  	  $calif1=utf8_encode($valor['calif1']);
		  	  $calif2=utf8_encode($valor['calif2']);
		  	  $calif3=utf8_encode($valor['calif3']);
			  $stylecolordefondo="";
			  $ipntCalif="";
			  $ipntfecha="";
			  $inptestado="";
			  $inptnroacta="";
			  $nrocontador=$nrocontador+1; 
			  $styleRegistros="";
			
			  if($calificacion=="CALIFICACION1"){
				  
				   if($estado1=="Habilitado"){
				    $ipntCalif="<td  style='width:7%' id='notascalificacion' name='calif1' >
					<input list='ListCalificacionesCalif'  value='$calif1' style=';width: 110px;text-align: center;' type='text'  class='input3' id='inptCalificacionfinal'   name='calif_focus_".$nrocontador."' 
					onkeyup='if(event.keyCode === 13){next_focus_calif_1($nrocontador)}else{if(event.keyCode === 16){pos_next_focus_calif_1($nrocontador)}else{auto_completar_calif($nrocontador)}}'
					/>
					<p id='idAlumnoLista' style='display:none' >$idlistadoalumnos</p>
					</td>";
					
				   }else{
					$ipntCalif="<td  style='width:7%' id='notascalificacion' name='calif1' >
					<input list='ListCalificacionesCalif'  value='$calif1' style=';width: 110px;text-align: center;' type='text'  class='input3' id='inptCalificacionfinal'   name='calif_focus_".$nrocontador."' 
					onkeyup='if(event.keyCode === 13){next_focus_calif_1($nrocontador)}else{if(event.keyCode === 16){pos_next_focus_calif_1($nrocontador)}else{auto_completar_calif($nrocontador)}}'
					/>
					<p id='idAlumnoLista' style='display:none' >$idlistadoalumnos</p>
					</td>";
					
				   }
				   
				   
				  
					  $styleRegistros="background-color: #fff;"; 
				  

				   if($estado1=="No Figura"){
					  $styleRegistros="background-color: #ffc062;"; 
				   }
				   
			$inptestado="<td  style='width:7%' name='estado1' id='estadocalif' ><input list='ListEstadoCalif' value='$estado1' style='width: 110px;text-align: center;' type='text'  class='input3' id='inptEstado'  /></td>";
			 
				   
			  }
			  if($calificacion=="CALIFICACION2"){
				  
				  
				   if($estado1=="Habilitado"){
				    $ipntCalif="<td  style='width:7%' id='notascalificacion' name='calif1' >
					<input list='ListCalificacionesCalif' value='$calif2' style=';width: 110px;text-align: center;' type='text'  class='input3' id='inptCalificacionfinal'   name='calif_focus_".$nrocontador."' 
					onkeyup='if(event.keyCode === 13){next_focus_calif_1($nrocontador)}else{if(event.keyCode === 16){pos_next_focus_calif_1($nrocontador)}else{auto_completar_calif($nrocontador)}}'
					/>
					<p id='idAlumnoLista' style='display:none' >$idlistadoalumnos</p>
					</td>";
				   }else{
					 $ipntCalif="<td  style='width:7%' id='notascalificacion' name='calif1' >
					<input list='ListCalificacionesCalif' value='$calif2' style='width: 110px;text-align: center;' type='text'  class='input3' id='inptCalificacionfinal'   name='calif_focus_".$nrocontador."' 
					onkeyup='if(event.keyCode === 13){next_focus_calif_1($nrocontador)}else{if(event.keyCode === 16){pos_next_focus_calif_1($nrocontador)}else{auto_completar_calif($nrocontador)}}'
					/>
					<p id='idAlumnoLista' style='display:none' >$idlistadoalumnos</p>
					</td>";
					
				   }
				   
				   
					  $styleRegistros="background-color: #fff;"; 
				  
				   if($estado2=="No Figura"){
					  $styleRegistros="background-color: #ffc062;"; 
				   }
			$inptestado="<td  style='width:7%' name='estado1' id='estadocalif' ><input list='ListEstadoCalif' value='$estado2' style='width: 110px;text-align: center;' type='text'  class='input3' id='inptEstado'  /></td>";
			 
			 
			
			  }
			  
			  if($calificacion=="CALIFICACION3"){
				  
				    if($estado1=="Habilitado"){
				    $ipntCalif="<td  style='width:7%' id='notascalificacion' name='calif1' >
					<input list='ListCalificacionesCalif'  value='$calif3' style='width: 110px;text-align: center;' type='text'  class='input3' id='inptCalificacionfinal'   name='calif_focus_".$nrocontador."' 
					onkeyup='if(event.keyCode === 13){next_focus_calif_1($nrocontador)}else{if(event.keyCode === 16){pos_next_focus_calif_1($nrocontador)}else{auto_completar_calif($nrocontador)}}'
					/>
					<p id='idAlumnoLista' style='display:none' >$idlistadoalumnos</p>
					</td>";
				   }else{
					$ipntCalif="<td  style='width:7%' id='notascalificacion' name='calif1' >
					<input list='ListCalificacionesCalif'  value='$calif3' style='width: 110px;text-align: center;' type='text'  class='input3' id='inptCalificacionfinal'   name='calif_focus_".$nrocontador."' 
					onkeyup='if(event.keyCode === 13){next_focus_calif_1($nrocontador)}else{if(event.keyCode === 16){pos_next_focus_calif_1($nrocontador)}else{auto_completar_calif($nrocontador)}}'
					/>
					<p id='idAlumnoLista' style='display:none' >$idlistadoalumnos</p>
					</td>";
					
				   }
				   
				    
					  $styleRegistros="background-color: #fff;"; 
				  
				   if($estado3=="No Figura"){
					  $styleRegistros="background-color: #ffc062;"; 
				   }
				   
			$inptestado="<td  style='width:7%' name='estado1' id='estadocalif' ><input list='ListEstadoCalif' value='$estado3' style='width: 110px;text-align: center;' type='text'  class='input3' id='inptEstado'  /></td>";
			 
			 				   
			  }
			  
	        
		  	   
			  $pagina.="<table  id='trCaificacion_".$nrocontador."' name='trCalificacione'   class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbCaificacion_".$nrocontador."' style='$styleRegistros'  onclick='obtener_datos_cargar_calif(this)'  >
			  <td id='td_id_1' style='display:none;'>".$idcursosalumnoFk."</td>
			  <td  id='td_datos_1' style='width:5%;background-color: #efeded;color:red' >".$nrocontador."</td>
			  <td  id='td_datos_1' style='width:8%' >".$ci."</td>
			  <td  id='td_datos_2' style='width:15%;text-align:left' >".$nombreapellido."</td>"
			  .$ipntCalif.$inptestado."		
              <td id='$nrocontador' name='tdBuscadorCi' style='display:none'>".$ci."</td>			  
              <td id='$nrocontador' name='tdBuscadorNombre' style='display:none'>".$nombreapellido."</td>			  
			  </tr>
			  </table>";
			 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarprintactas($iddocente_catedra,$calificacion)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select lts.idlistadoalumnos, lts.idcursosalumnoFk, lts.iddocente_catedraFK, lts.estado1, lts.estado2, lts.estado3,
		alu.ci,concat(alu.apellido,' ',alu.nombre) nombreapellido,lts.calif1,lts.calif2,lts.calif3
		from listadoalumnos lts inner join docente_catedra dtc on dtc.iddocente_catedra=lts.iddocente_catedraFK
		inner join cursosalumno cur on cur.idcursosalumno=lts.idcursosalumnoFk
		inner join alumno alu on alu.idalumno=cur.idalumnoFk
		where lts.iddocente_catedraFK='".$iddocente_catedra."' order by nombreapellido asc";
		 
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$nrocontador=0;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $idlistadoalumnos=utf8_encode($valor['idlistadoalumnos']);
		  	  $iddocente_catedraFK=utf8_encode($valor['iddocente_catedraFK']);
		  	  $estado1=utf8_encode($valor['estado1']);
		  	  $estado2=utf8_encode($valor['estado2']);
		  	  $estado3=utf8_encode($valor['estado3']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombreapellido=utf8_encode($valor['nombreapellido']);
		  	  $calif1=utf8_encode($valor['calif1']);
		  	  $calif2=utf8_encode($valor['calif2']);
		  	  $calif3=utf8_encode($valor['calif3']);
			  $stylecolordefondo="";
			  $ipntCalif="";
			  $ipntfecha="";
			  $inptestado="";
			  $inptnroacta="";
			  $nrocontador=$nrocontador+1; 
			  $styleRegistros="background-color: #fff;"; 
			
			  if($calificacion=="CALIFICACION1"){		  
				
				 
			$ipntCalif=$calif1;
			$inptestado=$estado1;
			 
				   
			  }
			  if($calificacion=="CALIFICACION2"){
				  
				  
				  $ipntCalif=$calif2;
			$inptestado=$estado2;
			
			  }
			  
			  if($calificacion=="CALIFICACION3"){
				  
				   $ipntCalif=$calif3;
			$inptestado=$estado3;
			 				   
			  }
			  
	        
		  	   
			  $pagina.="<table class='tableRegistroSearch' >
			  <tr  >
			   <td  i style='width:5%;padding:5px' >".$nrocontador."</td>
			  <td   style='width:40%;text-align:left;border-left:solid 1px #dedede;padding:5px' >".$nombreapellido."</td>	  
			  <td  style='width:20%;border-left:solid 1px #dedede;padding:5px' >".$ci."</td>
			  <td   style='width:40%;padding:5px' >
			  <table style='100%' class='td1'>
			  <tr>
			    <td   style='width:45%;border-left:solid 1px #dedede;padding:8px;text-align:center' >".$ipntCalif."</td>	  
			  <td   style='width:55%;padding:5px;text-align:center' >".$inptestado."</td>	  
			  </tr>
			  </table>
			  </td>	  
			  </tr>
			  </table>";
			 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}


verificarCalif($funt);
?>