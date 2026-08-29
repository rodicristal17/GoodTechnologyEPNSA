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
	
	
	$idfacturaspagadas=$_POST['idabm'];
    $idfacturaspagadas = utf8_decode($idfacturaspagadas);
	$nrofactura=$_POST['nrofactura'];
    $nrofactura = utf8_decode($nrofactura);
	$cf=$_POST['cf'];
    $cf = utf8_decode($cf);
	$monto=$_POST['monto'];
    $monto = quitarseparadormiles($monto);
	$idcursosalumnoFk=$_POST['idcursosalumnoFk'];
    $idcursosalumnoFk = utf8_decode($idcursosalumnoFk);
	$fecha=$_POST['fecha'];
    $fecha = utf8_decode($fecha);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$cod_arancelFk=$_POST['cod_arancelFk'];
    $cod_arancelFk = utf8_decode($cod_arancelFk);
	$puntoexpedicionfk=$_POST['puntoexpedicionfk'];
    $puntoexpedicionfk = utf8_decode($puntoexpedicionfk);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$semestre=$_POST['semetre'];
    $semestre = utf8_decode($semestre);
	$controlcodext=$_POST['controlcodext'];
    $controlcodext = utf8_decode($controlcodext);
	$detallesfactura=$_POST['detallesfactura'];
    $detallesfactura = utf8_decode($detallesfactura);
	$estadofactura=$_POST['estadofactura'];
    $estadofactura = utf8_decode($estadofactura);
	$controlnrofactura=$_POST['controlnrofactura'];
    $controlnrofactura = utf8_decode($controlnrofactura);
   
  

	if($cod_arancelFk=="0" and $estadofactura=='Activo'){
		$cod_carreraFK=obtenercodcarrerafk($idcursosalumnoFk);
		$idalumnoFk=obtenercodcodAlumnofk($idcursosalumnoFk);
		$idcursosalumnoFk1=controldeudaanterio($idalumnoFk,$cod_carreraFK,$anho,$semestre,$curso);
		if($idcursosalumnoFk1==""){			
			$estado='Activo';
			$turno="NF";
			$seccion="NF";
		$mysqli=conectar_al_servidor();   
	    $consulta="insert into cursosalumno ( idalumnoFk, cod_carreraFK, estado, anho, semestre, curso,turno,seccion) values (?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssss';
    $stmt->bind_param($ss,$idalumnoFk, $cod_carreraFK, $estado, $anho, $semestre, $curso,$turno,$seccion); 
		
if ( ! $stmt->execute() ) {
	$informacion =array("1" => $mysqli->error);
	echo json_encode($informacion);	
	exit;
}
     mysqli_close($mysqli); 
	 
	 $idcursosalumnoFk=controldeudaanterio($idalumnoFk,$cod_carreraFK,$anho,$semestre,$curso);
	 
		}else{
		$idcursosalumnoFk=$idcursosalumnoFk1;
		}
	}
	
	

	
	abm($anho, $semestre, $curso,$controlnrofactura,$detallesfactura,$idfacturaspagadas,$estadofactura,$nrofactura,$cf,$monto,$idcursosalumnoFk,$fecha,$estado,$cod_arancelFk,$puntoexpedicionfk,$controlcodext,$funt);

}
if($funt=="cargarcobranzas")
{
	
	$nrofactura=$_POST['nrofactura'];
    $nrofactura = utf8_decode($nrofactura);
	$cf=$_POST['cf'];
    $cf = utf8_decode($cf);
	$idcursosalumnoFk=$_POST['idcursosalumnoFk'];
    $idcursosalumnoFk = utf8_decode($idcursosalumnoFk);
	$fecha=$_POST['fecha'];
    $fecha = utf8_decode($fecha);
	$puntoexpedicionfk=$_POST['puntoexpedicionfk'];
    $puntoexpedicionfk = utf8_decode($puntoexpedicionfk);
	$estadofactura=$_POST['estadofactura'];
    $estadofactura = utf8_decode($estadofactura);
	$controlnrofactura=$_POST['controlnrofactura'];
    $controlnrofactura = utf8_decode($controlnrofactura);
	
	$tipoComprobante=$_POST['tipoComprobante'];
    $tipoComprobante = utf8_decode($tipoComprobante);
	
	$codApertura=$_POST['codApertura'];
    $codApertura = utf8_decode($codApertura);
	
	cargarcobranzas($codApertura,$tipoComprobante,$controlnrofactura,$nrofactura,$cf,$idcursosalumnoFk,$fecha,$puntoexpedicionfk,$estadofactura);

}

if($funt=="eliminarfactura")
{
$idfactura=$_POST['idfactura'];
$idfactura = utf8_decode($idfactura);
eliminarfactura($idfactura);
}

if($funt=="buscarhistorial")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarhistorial($buscar);
}

if($funt=="facturaspagadaspor")
{
$codigo=$_POST['codigo'];
$codigo = utf8_decode($codigo);
buscarfacturaspagadaspor($codigo);

}
if($funt=="facturasporcarrera")
{
$codigo=$_POST['codigo'];
$codigo = utf8_decode($codigo);
facturasporcarrera($codigo);

}

if($funt=="facturasporanho")
{
$codigo=$_POST['codigo'];
$codigo = utf8_decode($codigo);
facturasporanho($codigo);
}

if($funt=="buscarreportfacturascargadas")
{
$fecha1=$_POST['fecha1'];
$fecha1 = utf8_decode($fecha1);
$fecha2=$_POST['fecha2'];
$fecha2 = utf8_decode($fecha2);
$nrofactura=$_POST['nrofactura'];
$nrofactura = utf8_decode($nrofactura);
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$alumno=$_POST['alumno'];
$alumno = utf8_decode($alumno);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codArancel=$_POST['codArancel'];
$codArancel = utf8_decode($codArancel);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$estadofactura=isset($_POST['estadofactura']) ? $_POST['estadofactura'] : "Activo";
$estadofactura = utf8_decode($estadofactura);
if($estadofactura!="Activo" && $estadofactura!="Anulado" && $estadofactura!=""){
	$estadofactura="Activo";
}
$estado=isset($_POST['estado']) ? $_POST['estado'] : "Activo";
$estado = utf8_decode($estado);
if($estado!="Activo" && $estado!="Eliminado" && $estado!=""){
	$estado="Activo";
}
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
buscarreportfacturascargadas($anho,$curso,$semestre,$nrofactura,$documento,$alumno,$fecha1,$fecha2,$codFilial,$codArancel,$codCarrera,$estadofactura,$estado,$ordenby);

}
if($funt=="historialvistacobranza")
{
$buscar=isset($_POST['buscar']) ? $_POST['buscar'] : "";
$buscar = preparar_variables(utf8_decode($buscar));
$filtro=isset($_POST['filtro']) ? $_POST['filtro'] : "1";
$filtro = preparar_variables(utf8_decode($filtro));
$fecha1=isset($_POST['fecha1']) ? $_POST['fecha1'] : "";
$fecha1 = preparar_variables(utf8_decode($fecha1));
$fecha2=isset($_POST['fecha2']) ? $_POST['fecha2'] : "";
$fecha2 = preparar_variables(utf8_decode($fecha2));
$fecha1=normalizarFechaFiltroHistorialCobranza($fecha1);
$fecha2=normalizarFechaFiltroHistorialCobranza($fecha2);
$codFilial="";
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);

	}
}
historialvistacobranza($buscar,$filtro,$codFilial,$fecha1,$fecha2);

}
if($funt=="buscarbalancegeneral")
{
$fecha1=$_POST['fecha1'];
$fecha1 = utf8_decode($fecha1);
$fecha2=$_POST['fecha2'];
$fecha2 = utf8_decode($fecha2);
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$alumno=$_POST['alumno'];
$alumno = utf8_decode($alumno);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codArancel=$_POST['codArancel'];
$codArancel = utf8_decode($codArancel);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
buscarbalancegeneral($curso,$semestre,$fecha1,$fecha2,$tipo,$anho,$documento,$alumno,$codFilial,$codArancel,$codCarrera,$ordenby);

}
if($funt=="buscarbalancegeneralporcriterio")
{
$criteriocuota=$_POST['criteriocuota'];
$criteriocuota = utf8_decode($criteriocuota);
$criteriomateria=$_POST['criteriomateria'];
$criteriomateria = utf8_decode($criteriomateria);
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
$criteriomatricula=$_POST['criteriomatricula'];
$criteriomatricula = utf8_decode($criteriomatricula);
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$alumno=$_POST['alumno'];
$alumno = utf8_decode($alumno);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
buscarbalancegeneralporcriterio($anho,$curso,$semestre,$criteriocuota,$criteriomateria,$tipo,$criteriomatricula,$documento,$alumno,$codFilial,$codCarrera,$ordenby);

}
if($funt=="buscarInformePagosFaltantes")
{
$codCarrera=isset($_POST['codCarrera']) ? $_POST['codCarrera'] : "";
$codCarrera = preparar_variables(utf8_decode($codCarrera));
$anho=isset($_POST['anho']) ? $_POST['anho'] : "";
$anho = preparar_variables(utf8_decode($anho));
$seccion=isset($_POST['seccion']) ? $_POST['seccion'] : "";
$seccion = preparar_variables(utf8_decode($seccion));
$ci=isset($_POST['ci']) ? $_POST['ci'] : "";
$ci = preparar_variables(utf8_decode($ci));
$alumno=isset($_POST['alumno']) ? $_POST['alumno'] : "";
$alumno = preparar_variables(utf8_decode($alumno));
$curso=isset($_POST['curso']) ? $_POST['curso'] : "";
$curso = preparar_variables(utf8_decode($curso));
$codFilial="";
$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
	}
buscarInformePagosFaltantes($codFilial,$codCarrera,$anho,$seccion,$ci,$alumno,$curso);

}
if($funt=="buscarDetalleInformePagosFaltantes")
{
$idcursosalumno=isset($_POST['idcursosalumno']) ? $_POST['idcursosalumno'] : "";
$idcursosalumno = preparar_variables(utf8_decode($idcursosalumno));
$codFilial="";
$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
	}
buscarDetalleInformePagosFaltantes($codFilial,$idcursosalumno);

}
if($funt=="buscarpuntoexpedicion")
{
$idFilialFactura=$_POST['idFilialFactura'];
$idFilialFactura = utf8_decode($idFilialFactura);
$idCarreraFactura=$_POST['idCarreraFactura'];
$idCarreraFactura = utf8_decode($idCarreraFactura);
buscarpuntoexpedicion($idFilialFactura,$idCarreraFactura);

}	

if($funt=="controlnrofactura")
{
$nrofacturacontrol=$_POST['nrofacturacontrol'];
$nrofacturacontrol = utf8_decode($nrofacturacontrol);
$nrofactura=$_POST['nrofactura'];
$nrofactura = utf8_decode($nrofactura);
$codPuntoExpe=$_POST['codPuntoExpe'];
$codPuntoExpe = utf8_decode($codPuntoExpe);
$nrofacturab=$_POST['nrofacturab'];
$nrofacturab = utf8_decode($nrofacturab);
controlnrofactura($nrofacturacontrol,$nrofactura,$nrofacturab,$codPuntoExpe);

}		

if($funt=="consultarporalumnos")
{
$idAlumnosFk=$_POST['idAlumnosFk'];
$idAlumnosFk = utf8_decode($idAlumnosFk);
$Nombrealumno=$_POST['Nombrealumno'];
$Nombrealumno = utf8_decode($Nombrealumno);
$NroDocumento=$_POST['NroDocumento'];
$NroDocumento = utf8_decode($NroDocumento);
$filtro=$_POST['filtro'];
$filtro = utf8_decode($filtro);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$sqlAranceles=$_POST['sqlAranceles'];
$sqlAranceles = utf8_decode($sqlAranceles);
$sqlAnho=$_POST['sqlAnho'];
$sqlAnho = utf8_decode($sqlAnho);
$sqlCurso=$_POST['sqlCurso'];
$sqlCurso = utf8_decode($sqlCurso);
consultarporalumnos($idAlumnosFk,$Nombrealumno,$NroDocumento,$codFilial,$filtro,$sqlAranceles,$sqlAnho,$sqlCurso);

}	

if($funt=="consultaindividual")
{
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$NrodeFactura=$_POST['NrodeFactura'];
$NrodeFactura = utf8_decode($NrodeFactura);
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$NroDocumento=$_POST['NroDocumento'];
$NroDocumento = utf8_decode($NroDocumento);
$CodCarreraSeleccionado=$_POST['CodCarreraSeleccionado'];
$CodCarreraSeleccionado = utf8_decode($CodCarreraSeleccionado);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$sqlAranceles=$_POST['sqlAranceles'];
$sqlAranceles = utf8_decode($sqlAranceles);
$sqlAnho=$_POST['sqlAnho'];
$sqlAnho = utf8_decode($sqlAnho);
$sqlCurso=$_POST['sqlCurso'];
$sqlCurso = utf8_decode($sqlCurso);
consultaindividual($anho,$nombre,$NrodeFactura,$NroDocumento,$CodCarreraSeleccionado,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso);

}	

if($funt=="consultarpornrofactura")
{
$NrodeFactura=$_POST['NrodeFactura'];
$NrodeFactura = utf8_decode($NrodeFactura);
$CodConceptoSeleccionado=$_POST['CodConceptoSeleccionado'];
$CodConceptoSeleccionado = utf8_decode($CodConceptoSeleccionado);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$filtro=$_POST['filtro'];
$filtro = utf8_decode($filtro);
$sqlAranceles=$_POST['sqlAranceles'];
$sqlAranceles = utf8_decode($sqlAranceles);
$sqlAnho=$_POST['sqlAnho'];
$sqlAnho = utf8_decode($sqlAnho);
$sqlCurso=$_POST['sqlCurso'];
$sqlCurso = utf8_decode($sqlCurso);
consultarpornrofactura($NrodeFactura,$CodConceptoSeleccionado,$codFilial,$filtro,$sqlAranceles,$sqlAnho,$sqlCurso);

}
if($funt=="ConsultaMasivo")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$filial=$_POST['filial'];
$filial = utf8_decode($filial);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$codArancel=$_POST['codArancel'];
$codArancel = utf8_decode($codArancel);
consultamultiple($documento,$codCarrera,$filial,$curso,$semestre,$anho,$codArancel);
}	

/*En Des uso*/
if($funt=="ConsultaMasivoAnterior")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$filial=$_POST['filial'];
$filial = utf8_decode($filial);
$sqlAranceles=$_POST['sqlAranceles'];
$sqlAranceles = utf8_decode($sqlAranceles);
$sqlAnho=$_POST['sqlAnho'];
$sqlAnho = utf8_decode($sqlAnho);
$sqlCurso=$_POST['sqlCurso'];
$sqlCurso = utf8_decode($sqlCurso);
consultamultipleanterior($documento,$filial,$sqlAranceles,$sqlAnho,$sqlCurso);

}	

if($funt=="BuscadorMasivofacturaDetalles")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$filial=$_POST['filial'];
$filial = utf8_decode($filial);
$carrera=$_POST['carrera'];
$carrera = utf8_decode($carrera);
$sqlAranceles=$_POST['sqlAranceles'];
$sqlAranceles = utf8_decode($sqlAranceles);
$sqlAnho=$_POST['sqlAnho'];
$sqlAnho = utf8_decode($sqlAnho);
$sqlCurso=$_POST['sqlCurso'];
$sqlCurso = utf8_decode($sqlCurso);
BuscadorMasivofacturaDetalles($carrera,$documento,$filial,$sqlAranceles,$sqlAnho,$sqlCurso);

}	


if($funt=="BuscadorMasivoConsultaBalances")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$filial=$_POST['filial'];
$filial = utf8_decode($filial);
$carrera=$_POST['carrera'];
$carrera = utf8_decode($carrera);
$sqlAranceles=$_POST['sqlAranceles'];
$sqlAranceles = utf8_decode($sqlAranceles);
$sqlAnho=$_POST['sqlAnho'];
$sqlAnho = utf8_decode($sqlAnho);
$sqlCurso=$_POST['sqlCurso'];
$sqlCurso = utf8_decode($sqlCurso);
BuscadorMasivoConsultaBalances($carrera,$documento,$filial,$sqlAranceles,$sqlAnho,$sqlCurso);

}	

if($funt=="buscarhistorialDocumento")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$nrofactura=$_POST['nrofactura'];
$nrofactura = utf8_decode($nrofactura);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);

buscarhistorialDocumento($documento,$codCarrera,$nrofactura,$anho);

}	

if($funt=="historialAgrupadoPorCarrera")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$nrofactura=$_POST['nrofactura'];
$nrofactura = utf8_decode($nrofactura);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);

historialAgrupadoPorCarrera($documento,$codCarrera,$nrofactura,$anho);

}	

if($funt=="historialAgrupadoPorConcepto")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$nrofactura=$_POST['nrofactura'];
$nrofactura = utf8_decode($nrofactura);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);

historialAgrupadoPorConcepto($documento,$codCarrera,$nrofactura,$anho);

}	

if($funt=="buscarBalanceporanho")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$nrofactura=$_POST['nrofactura'];
$nrofactura = utf8_decode($nrofactura);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);

buscarBalanceporanho($documento,$codCarrera,$nrofactura,$anho);

}	

if($funt=="buscarnrofacturas")
{
$puntoexpedicion=$_POST['puntoexpedicion'];
$puntoexpedicion = utf8_decode($puntoexpedicion);
buscarnrofacturas($puntoexpedicion);

}
if($funt=="buscarcuotasapagadas")
{

$idcursosalumnoFk=$_POST['idcursosalumnoFk'];
$idcursosalumnoFk= utf8_decode($idcursosalumnoFk);
$codArancel=$_POST['codArancel'];
$codArancel= utf8_decode($codArancel);
$idalumnofk=$_POST['idalumnofk'];
$idalumnofk = utf8_decode($idalumnofk);
$cod_filialFK=$_POST['cod_filialFK'];
$cod_filialFK = utf8_decode($cod_filialFK);
buscarcuotasapagadas($idcursosalumnoFk,$codArancel,$idalumnofk,$cod_filialFK);

}		



if($funt=="anularfactura")
{
$idfactura=$_POST['idfactura'];
$idfactura = utf8_decode($idfactura);
anularfactura($idfactura,$user);
}
	

}

function anularfactura($idfactura,$user)
{
	
	if($idfactura==""  ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
		$mysqli=conectar_al_servidor();
   

$consulta="update facturaspagadas set anho='',semestre='',curso='',monto='0',Detalles='Anulado',cod_arancelFk='0',estadofactura='Anulado',usuario_edicion='$user',fecha_edicion=CURRENT_TIMESTAMP where idfacturaspagadas='$idfactura' ";

// echo($consulta);
// exit;

     $stmt = $mysqli->prepare($consulta);	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}


function abm($anho, $semestre, $curso,$controlnrofactura,$detallesfactura,$idfacturaspagadas,$estadofactura,$nrofactura,$cf,$monto,$idcursosalumnoFk,$fecha,$estado,$cod_arancelFk,$puntoexpedicionfk,$controlcodext,$funt)
{
	
	
	if($nrofactura=="" || $monto=="" || $idcursosalumnoFk=="" || $fecha==""|| $cod_arancelFk==""|| $puntoexpedicionfk=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from facturaspagadas where nrofactura=? and cf=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$nrofactura,$cf); 


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
		

    $consulta="insert into facturaspagadas (anho,semestre,curso,controlnrofactura,Detalles,estadofactura,nrofactura, cf, monto, idcursosalumnoFk, fecha, estado, cod_arancelFk, puntoexpedicionfk) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssssss';
    $stmt->bind_param($ss,$anho, $semestre, $curso,$controlnrofactura,$detallesfactura,$estadofactura,$nrofactura, $cf, $monto, $idcursosalumnoFk, $fecha, $estado, $cod_arancelFk, $puntoexpedicionfk); 
 
	}
	
	// if($funt=="editar")
	// {
        
    // $consulta="Update facturaspagadas set controlnrofactura=?,Detalles=?, estadofactura=?,  nrofactura=?, cf=?, monto=?, idcursosalumnoFk=?, fecha=?, estado=?, cod_arancelFk=?, puntoexpedicionfk=?  where idfacturaspagadas=?";	
	// $stmt = $mysqli->prepare($consulta);
    // $ss='ssssssssssss';        
    // $stmt->bind_param($ss,$controlnrofactura,$detallesfactura,$estadofactura , $nrofactura, $cf, $monto, $idcursosalumnoFk, $fecha, $estado, $cod_arancelFk, $puntoexpedicionfk,$idfacturaspagadas); 
       
	// }
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

if($controlcodext>=0){
	$codFactura=buscarultimaidfacturas($nrofactura,$cf,$puntoexpedicionfk,$monto);
	$control=0;
$totalRegistro=$controlcodext;
while($control<=$totalRegistro){

$cod_fk_detalle=$_POST['cod_fk_detalle_'.$control];
$cod_fk_detalle = utf8_decode($cod_fk_detalle);

$tipo=$_POST['tipo_'.$control];
$tipo = utf8_decode($tipo);

if($cod_fk_detalle!="" || $tipo!=""  ){

 $consulta="insert into detallefacturas (codfk, tipo, idfacturaspagadas,codigoarancel) values (?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssss';
    $stmt->bind_param($ss,$cod_fk_detalle, $tipo, $codFactura,$cod_arancelFk); 
if (!$stmt->execute()) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}
}
$control=$control+1;
}

}



    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function eliminarfactura($idfactura)
{
	
	if($idfactura==""  ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
		$mysqli=conectar_al_servidor();
   

$consulta="update facturaspagadas set estado='Eliminado' where idfacturaspagadas='$idfactura' ";
     $stmt = $mysqli->prepare($consulta);	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function cargarcobranzas($codApertura,$tipoComprobante,$controlnrofactura,$nrofactura,$cf,$idcursosalumnoFk,$fecha,$puntoexpedicionfk,$estadofactura)
{
	
	if( $idcursosalumnoFk=="" || $fecha==""   ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
	

if($nrofactura==""){
	$nrofactura=buscarnrofactura();
}
	
$idcursosalumnoFkCopia=$idcursosalumnoFk;
$mysqli=conectar_al_servidor();
$consulta= "Select count(*) from facturaspagadas where nrofactura=? and cf=?  ";
$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$nrofactura,$cf); 
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
	
	
$control=0;
$totalRegistro=$_POST['nrototal'];
$totalRegistro = utf8_decode($totalRegistro);
while($control<=$totalRegistro){

$cod_arancelFk=$_POST['cod_ArancelFK'.$control];
$cod_arancelFk = utf8_decode($cod_arancelFk);

$detalles=$_POST['detalles'.$control];
$detalles = utf8_decode($detalles);



$cod_fk_detalle=$_POST['codextra'.$control];
$cod_fk_detalle = utf8_decode($cod_fk_detalle);

$curso=$_POST['curso'.$control];
$curso = utf8_decode($curso);

$anho=$_POST['anho'.$control];
$anho = utf8_decode($anho);

$semestre=$_POST['semestre'.$control];
$semestre = utf8_decode($semestre);

$tipo=$_POST['tipo'.$control];
$tipo = utf8_decode($tipo);

$cantidad=$_POST['cantidad'.$control];


$monto=$_POST['precio'.$control];
$monto = quitarseparadormiles($monto);

$subtotal=$_POST['subtotal'.$control];
$subtotal = quitarseparadormiles($subtotal);


$descuento=$_POST['descuento'.$control];
$descuento = quitarseparadormiles($descuento);

$monto = $monto - $descuento;
$estado='Activo';

if($cantidad!="" || $cod_ArancelFK!=""  ){
	
	
	
		if($cod_arancelFk=="0"){
		$cod_carreraFK=obtenercodcarrerafk($idcursosalumnoFk);
		$idalumnoFk=obtenercodcodAlumnofk($idcursosalumnoFk);
		$idcursosalumnoFk1=controldeudaanterio($idalumnoFk,$cod_carreraFK,$anho,$semestre,$curso);
		if($idcursosalumnoFk1==""){			
			$estado='Activo';
			$turno="NF";
			$seccion="NF";
		$mysqli=conectar_al_servidor();   
	    $consulta="insert into cursosalumno ( idalumnoFk, cod_carreraFK, estado, anho, semestre, curso,turno,seccion) values (?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssss';
    $stmt->bind_param($ss,$idalumnoFk, $cod_carreraFK, $estado, $anho, $semestre, $curso,$turno,$seccion); 
		
if ( ! $stmt->execute() ) {
	$informacion =array("1" => $mysqli->error);
	echo json_encode($informacion);	
	exit;
}
     
	 
	 $idcursosalumnoFk=controldeudaanterio($idalumnoFk,$cod_carreraFK,$anho,$semestre,$curso);
	 
		}else{
		$idcursosalumnoFk=$idcursosalumnoFk1;
		}
	}else{
		$idcursosalumnoFk=$idcursosalumnoFkCopia;
	}
	
	

 $consulta="insert into facturaspagadas (tipo_comprobante,curso,anho,semestre,controlnrofactura,estadofactura,Detalles, nrofactura, cf, monto, idcursosalumnoFk, fecha, estado, cod_arancelFk, puntoexpedicionfk,cod_puntoexpedicionFK,descuento,codApertura) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssssssssss';
    $stmt->bind_param($ss,$tipoComprobante,$curso,$anho,$semestre,$controlnrofactura,$estadofactura, $detalles ,$nrofactura, $cf, $monto, $idcursosalumnoFk, $fecha, $estado, $cod_arancelFk, $puntoexpedicionfk, $puntoexpedicionfk,$descuento,$codApertura); 
if (!$stmt->execute()) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}
if($tipo!=""){
$codFactura=buscarultimaidfacturas($nrofactura,$cf,$puntoexpedicionfk,$monto);	
 $consulta="insert into detallefacturas (codfk, tipo, idfacturaspagadas,codigoarancel) values (?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssss';
    $stmt->bind_param($ss,$cod_fk_detalle, $tipo, $codFactura,$cod_arancelFk); 
if (!$stmt->execute()) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}


}


}

$control=$control+1;
$controlnrofactura=$controlnrofactura+1;
	
}

$informacion =array("1" => "exito","2" => $nrofactura);
echo json_encode($informacion);	
exit;
	
}







function buscarnrofactura()
{
	
	
	$mysqli=conectar_al_servidor();
	 $sql= "Select count(*) as nro from facturaspagadas where tipo_comprobante='BOLETA' limit 1";
   $stmt = $mysqli->prepare($sql);

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
  $result = $stmt->get_result();
 $valor= mysqli_num_rows($result);

$NroFactura=1;

 if ($valor>0){
	  while ($valor= mysqli_fetch_assoc($result))
		{
			 $NroFactura=$valor['nro'];
			 $NroFactura ++;
		}
 
 } 
  
  
  
 if($NroFactura<10){
	 $NroFactura="000000".$NroFactura;
 }
 if($NroFactura<100 && $NroFactura>=10){
	 $NroFactura="00000".$NroFactura;
 }
 if($NroFactura<1000 && $NroFactura>=100){
	 $NroFactura="0000".$NroFactura;
  } 
  
  if($NroFactura<10000 && $NroFactura>=1000){
	 $NroFactura="000".$NroFactura;
  } 
  
  if($NroFactura<100000 && $NroFactura>=10000){
	 $NroFactura="00".$NroFactura;
  } 
  if($NroFactura<1000000 && $NroFactura>=100000){
	 $NroFactura="0".$NroFactura;
  } 
 
 
  mysqli_close($mysqli); 
  
 return $NroFactura;


}









function buscarhistorial($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select fac.nrofactura,fac.fecha,fac.monto,lta.nombre as arancel,fac.cf
        from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where fac.idcursosalumnoFk = ? and fac.estado='Activo'  order by fac.fecha asc";
		 
   $stmt = $mysqli->prepare($sql);
  	$s='s';
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
		  
		  
		  
		      $nrofactura=$valor['nrofactura'];
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $cf=utf8_encode($valor['cf']);
		  	 $totales=$totales+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:20%' >".$nrofactura."-".$cf."</td>
			   <td  id='td_datos_1' style='width:20%' >".$fecha."</td>
			   <td  id='td_datos_1' style='width:20%' >". number_format($monto,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:20%' >".$arancel."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function buscarfacturaspagadaspor($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select IFNULL(sum(fac.monto),0) as  monto,cur.idalumnoFk,fac.nrofactura,fac.cf,fac.Detalles,fac.fecha
,alu.nombre as nombrealumno,alu.apellido,alu.ci,fac.anho,fac.semestre,fac.curso
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.total as totalapagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and fac.estadofactura='Activo' and  cur.idalumnoFk='$buscar' group by fac.idfacturaspagadas order by fac.fecha desc ";

 
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totalArancel=-1;
$totales=0;
$controlanho="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $nrofactura=$valor['nrofactura'];
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $Detalles=utf8_encode($valor['Detalles']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	 $totales=$totales+$monto;
			 $tituloanho="";
			 if($controlanho==""){
				 $controlanho=$anho;
				 $tituloanho="<p class='pTituloDetallesTab' >Año: ".$anho."</p>";
			 }
			 
			 if($controlanho!=$anho){
				$tituloanho="<p class='pTituloDetallesTab' >Año: ".$anho."</p>";
			 }
		  	
			  $pagina.=$tituloanho."<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td   style='width:10%' >".$nrofactura."-".$cf."</td>
			   <td   style='width:10%' >".$fecha."</td>
			   <td   style='width:10%' >".$arancel."</td>
			   <td   style='width:10%' >".$Detalles."</td>
			   <td   style='width:5%' >". number_format($monto,'0',',','.') ."</td>
			    <td   style='width:5%' >".$curso."</td>
				<td   style='width:5%' >".$semestre."</td>
				<td   style='width:10%' >".$nombreCarrera."</td>
				<td   style='width:10%' >".$nombrefilialOrigen."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function facturasporcarrera($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select IFNULL(sum(fac.monto),0) as  monto,cur.idalumnoFk,fac.nrofactura,fac.cf,fac.Detalles,fac.fecha
,alu.nombre as nombrealumno,alu.apellido,alu.ci,fac.anho,fac.semestre,fac.curso
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,sum(ar.total) as totalapagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and fac.estadofactura='Activo' and  cur.idalumnoFk='$buscar' group by car.cod_carrera order by fac.fecha desc ";

 
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totalArancel=-1;
$totales=0;
$controlCarrera="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $nrofactura=$valor['nrofactura'];
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $Detalles=utf8_encode($valor['Detalles']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $totalapagar=utf8_encode($valor['totalapagar']);
		  	 $totales=$totales+$monto;
			 $titulocarrera="";
			 if($controlCarrera==""){
				 $controlCarrera=$nombreCarrera;
				 $titulocarrera="<p class='pTituloDetallesTab' >".$nombreCarrera."</p>";
			 }
			 
			 if($controlCarrera!=$nombreCarrera){
				$titulocarrera="<p class='pTituloDetallesTab' >".$nombreCarrera."</p>";
			 }
		  	$saldo=$totalapagar-$monto;
			  $pagina.=$titulocarrera."<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td   style='width:10%' >".$nombrefilialOrigen."</td>
			   <td   style='width:10%' >".$arancel."</td>
			    <td   style='width:5%' >".$curso."</td>
				<td   style='width:5%' >".$semestre."</td>
				<td   style='width:5%' >". number_format($totalapagar,'0',',','.') ."</td>
				<td   style='width:5%' >". number_format($monto,'0',',','.') ."</td>
				<td   style='width:5%' >". number_format($saldo,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function facturasporanho($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select IFNULL(sum(fac.monto),0) as  monto,cur.idalumnoFk,fac.nrofactura,fac.cf,fac.Detalles,fac.fecha
,alu.nombre as nombrealumno,alu.apellido,alu.ci,fac.anho,fac.semestre,fac.curso
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,sum(ar.total) as totalapagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and fac.estadofactura='Activo' and  cur.idalumnoFk='$buscar' group by car.cod_carrera,fac.anho  ";

 
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$paginaArancel="";
$controltitulo="0";
$totalArancel=-1;
$totales=0;
$controlanho="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $nrofactura=$valor['nrofactura'];
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $Detalles=utf8_encode($valor['Detalles']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $totalapagar=utf8_encode($valor['totalapagar']);
		  	 $totales=$totales+$monto;
			 $tituloanho="";
			 if($controlanho==""){
				 $controlanho=$anho;
				 $tituloanho="<p class='pTituloDetallesTab' >".$anho."</p>";
			 }
			 
			 if($controlanho!=$anho){
				$tituloanho="<p class='pTituloDetallesTab' >".$anho."</p>";
			 }
		  	$saldo=$totalapagar-$monto;
			  $pagina.=$tituloanho."<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td   style='width:10%' >".$nombrefilialOrigen."</td>
			   <td   style='width:10%' >".$nombreCarrera."</td>
			   <td   style='width:10%' >".$arancel."</td>
			    <td   style='width:5%' >".$curso."</td>
				<td   style='width:5%' >".$semestre."</td>
				<td   style='width:5%' >". number_format($totalapagar,'0',',','.') ."</td>
				<td   style='width:5%' >". number_format($monto,'0',',','.') ."</td>
				<td   style='width:5%' >". number_format($saldo,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function buscarultimaidfacturas($facturanro,$control,$puntoexpedicionfk,$monto)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select fac.idfacturaspagadas
        from facturaspagadas fac 
		where fac.nrofactura = '$facturanro' and fac.monto = '$monto' and fac.cf='$control' and fac.puntoexpedicionfk='$puntoexpedicionfk' and fac.estado='Activo'  order by fac.idfacturaspagadas asc limit 1";
		 
   $stmt = $mysqli->prepare($sql);

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$idfacturaspagadas="";

	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	 	    	 
		  	
			  
			  
	  }
	  
 }
 
 
return $idfacturaspagadas;

}


function buscarcuotasapagadas($idcursosalumnoFk,$cod_arancelFk,$idalumnofk,$cod_filialFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	
		$sql= "Select cur.anho, ifnull((select sum(fac.monto + descuento) from facturaspagadas fac where fac.idcursosalumnoFk='$idcursosalumnoFk' and  fac.cod_arancelFk = '$cod_arancelFk' and fac.estado='Activo' and  fac.estadofactura='Activo' ),0) as totalpagado,
		(select total from aranceles where cod_arancel= '$cod_arancelFk' limit 1) as totalapagar,
		(select cod_listadearancelesFk from aranceles where cod_arancel= '$cod_arancelFk' limit 1) as cod_listadearancelesFk,
		(select cantidad from aranceles where cod_arancel='$cod_arancelFk' limit 1) as cantidadapagar,
		(select monto from aranceles where cod_arancel='$cod_arancelFk' limit 1) as montoapagar ,
		MONTH(fechaInicio) as fechaInicio
        from cursosalumno cur  
		
		where cur.idcursosalumno = '$idcursosalumnoFk' ";
		
	
		// echo($sql);
		// exit;
		 
   $stmt = $mysqli->prepare($sql);
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$totalpagado="0";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 
  $contadorPendiente=0;
  
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		$totalpagado=$valor['totalpagado'];
		$totalapagar=$valor['totalapagar'];
		$cantidadapagar=$valor['cantidadapagar'];
		$montoapagar=$valor['montoapagar'];
		$anho=$valor['anho'];
		$cod_listadearancelesFk=$valor['cod_listadearancelesFk'];
		$fechaInicio=$valor['fechaInicio'];
 
		$a=1;
		while ($a<=$cantidadapagar){
			
			$Calcularmes= ($fechaInicio - 1) + $a;
			$MES=caseFecha($Calcularmes);
			
			
			if($totalpagado>$totalapagar){
				$pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' ><input  type='checkbox'  disabled  /></td>
			   <td  id='td_datos_2' style='width:95%' >CUOTA  ".$MES." - PAGADO  </td>
			  </tr>
			  </table>";
			}else{
				
				$control=$totalpagado-$montoapagar;
				
				if($control>=0){					
					$pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0' >
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' ><input  type='checkbox'  disabled  /></td>
			   <td  id='td_datos_2' style='width:95%' >CUOTA  ".$MES." - PAGADO </td>
			  </tr>
			  </table>";
			  $totalpagado=$totalpagado-$montoapagar;
				}else{
					
					$titulop="";
					$restante=$montoapagar;
					if($totalpagado>0){
						 $restante=$montoapagar-$totalpagado;
						$titulop=" PENDIENTE (".number_format($restante,'0',',','.').")";
										
					}
				$contadorPendiente++;	
					$pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' ><input  onclick='selectCuotaPagarCobranzas()' style='$MES' name='checkboxDerechoCuotaArancel' type='checkbox'   value='$restante'  /></td>
			   <td  id='td_datos_2' style='width:75%' >CUOTA  ".$MES." - ".$titulop."</td>
			   <td  id='td_datos_3' style='display:none' >$contadorPendiente</td>
			   <td  id='td_datos_4' style='display:none' > - ".$MES.$titulop."</td>
			   <td  id='td_datos_5' style='width:20%' >".number_format($montoapagar,'0',',','.')."</td>
			  </tr>
			  </table>";
			  $totalpagado=$totalpagado-$montoapagar;
				}
				
			}
			$a=$a+1;
		}
				  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina );
echo json_encode($informacion);	
exit;


}



function caseFecha($nro){

	switch($nro) {
       case "1": return "ENERO"; break;
       case "2": return "FEBRERO"; break;
       case "3": return "MARZO"; break;
       case "4": return "ABRIL"; break;
       case "5": return "MAYO"; break;
       case "6": return "JUNIO"; break;
       case "7": return "JULIO"; break;
       case "8": return "AGOSTO"; break;
       case "9": return "SEPTIEMBRE"; break;
       case "10": return "OCTUBRE"; break;
	   case "11": return "NOVIEMBRE"; break;
	   case "12": return "DICIEMBRE"; break;
	   
	   
	   case "13": return "ENERO"; break;
       case "14": return "FEBRERO"; break;
       case "15": return "MARZO"; break;
       case "16": return "ABRIL"; break;
       case "17": return "MAYO"; break;
       case "18": return "JUNIO"; break;
       case "19": return "JULIO"; break;
       case "20": return "AGOSTO"; break;
       case "21": return "SEPTIEMBRE"; break;
       case "22": return "OCTUBRE"; break;
	   case "23": return "NOVIEMBRE"; break;
	   case "24": return "DICIEMBRE"; break;
	   
   }
}





function buscararancelesespecialesdelalumno($idalumnoFK,$codlisCarrera,$codFilial,$anho,$cod_listadearanceles)
{
	$mysqli=conectar_al_servidor();

		$sql= "Select dte.monto,are.nombre,dte.tipo,dte.operacion
        from becados bc inner join detallesbecados dtb on dtb.idbecadosfk=bc.idbecados
		inner join detallesarancelesespeciales dte on dte.idarancelesepecialesfk=dtb.idarancelesepecialesfk
		inner join listadearanceles lts on lts.cod_listadearanceles=dte.cod_listadearancelesfk
		inner join arancelesepeciales are on are.idarancelesepeciales=dte.idarancelesepecialesfk
		where bc.idalumnofk='$idalumnoFK' and bc.Cod_listadecarrerasfk='$codlisCarrera' and bc.cod_filialfk='$codFilial'
		and bc.anho='$anho' and dte.cod_listadearancelesfk='$cod_listadearanceles' and bc.estado='Activo' and are.estado='Activo' ";


 $datos[0]="";
         $datos[1]="";
         $datos[2]="";
         $datos[3]="";
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
		  
		     
		      $monto=$valor['monto'];  
			  $nombre=utf8_encode($valor['nombre']);
			  $tipo=utf8_encode($valor['tipo']);
			  $operacion=utf8_encode($valor['operacion']);
         $datos[0]=$monto;
         $datos[1]=$nombre;			  
         $datos[2]=$tipo;			  
         $datos[3]=$operacion;			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $datos;


}




function buscarreportfacturascargadas($anho,$curso,$semestre,$nrofactura,$documento,$alumno,$fecha1,$fecha2,$codFilial,$codArancel,$codCarrera,$estadofactura,$estado,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and pt.cod_filialFk='$codFilial' ";
	}	
	$condicionConcepto="";
	if($codArancel!=""){
		$condicionConcepto=" and lta.cod_listadearanceles='$codArancel' ";
	}
	$condicionCarrera="";
	if($codCarrera!=""){
		// $condicionCarrera=" and lt.Cod_listadecarreras='$codCarrera' ";
	}
	$condicionfiltro1="";
	if($documento!=""){
		$condicionfiltro1=" and (alu.ci like '%".$documento."%') ";
	}
	$condicionfiltro2="";
	if($nrofactura!=""){
		$condicionfiltro2=" and (fac.nrofactura like '%".$nrofactura."%' ) ";
	}
	$condicionfiltro3="";
	if($alumno!=""){
		$condicionfiltro3=" and (concat(alu.nombre,' ',alu.apellido) like '%".$alumno."%' ) ";
	}
	$condicionestado="";
	if($estadofactura!=""){
		$condicionestado=" and fac.estadofactura= '".$estadofactura."' ";
	}
	$condicionEstadoRegistro="";
	if($estado!="Activo" && $estado!="Eliminado" && $estado!=""){
		$estado="Activo";
	}
	if($estado!=""){
		$condicionEstadoRegistro=" and fac.estado= '".$estado."' ";
	}
	$condicionanho="";
	if($anho!=""){
		$condicionanho=" and fac.anho= '".$anho."' ";
	}
	$condicioncurso="";
	if($curso!=""){
		$condicioncurso=" and fac.curso= '".$curso."' ";
	}
	$condicionsemestre="";
	if($semestre!=""){
		$condicionsemestre=" and fac.semestre= '".$semestre."' ";
	}
	$condicionfecha="";
	if($fecha1!=""){
		$condicionfecha=" and fac.fecha='$fecha1' ";
	}
	if($fecha2!="" && $fecha1!=""){
		$condicionfecha=" and fac.fecha>='$fecha1' and fac.fecha<='$fecha2' ";
	}
	
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by fac.fecha desc";
	}
	if($ordenby=="2"){
		$oderby="order by nombrefilialOrigen asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombreCarrera asc";
	}
	if($ordenby=="4"){
		$oderby="order by arancel desc";
	}
	if($ordenby=="5"){
		$oderby="order by fac.controlnrofactura asc, fac.cf asc";
	}
	if($ordenby=="6"){
		$oderby="order by fac.anho desc";
	}
	if($ordenby=="7"){
		$oderby="order by fac.curso desc";
	}
	if($ordenby=="8"){
		$oderby="order by fac.semestre desc";
	}
	
		$sql= "Select fac.controlnrofactura,fac.Detalles,fac.idfacturaspagadas, fac.nrofactura, fac.cf, IFNULL(sum(fac.monto),0) as  monto, fac.idcursosalumnoFk, fac.fecha,fac.estadofactura,fac.fecha_insercion,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk,fac.anho,fac.semestre,fac.curso,fac.descuento
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,IFNULL(lta.nombre, fac.Detalles) as arancel
,fl1.nombre as nombrefilialOrigen
from facturaspagadas fac 
left join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join puntoexpedicion pt on pt.idpuntoexpedicion=fac.puntoexpedicionfk
left join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join filial fl1 on fl1.cod_filial=pt.cod_filialFk 
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where 1=1 ".$condicionEstadoRegistro.$condicionsemestre.$condicioncurso.$condicionanho.$condicionestado.$condicionCarrera.$condicionFilial.$condicionConcepto.$condicionfiltro1.$condicionfiltro2.$condicionfiltro3.$condicionfecha." group by fac.idfacturaspagadas ".$oderby;


// echo($sql);
// exit;

  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
$nrodefacturasiguiente="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
				$fecha_insercion=$valor['fecha_insercion'];
				$descuento=$valor['descuento'];
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $estadofactura=utf8_encode($valor['estadofactura']);
		  	  $Detalles=utf8_encode($valor['Detalles']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $controlnrofactura=utf8_encode($valor['controlnrofactura']);
		  	  $estadoListado=$estadofactura;
		  	  if($estado=="Eliminado"){
		  	  	$estadoListado=$estado;
		  	  }
		  	
		  	 $totales=$totales+$monto;
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
		// $styleorden3="color: #000; background-color: #e7e7e7;";
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
	$styleSalto="";
	if($codFilial!="" && $cf=="1" && $ordenby=="5"){
		if($nrodefacturasiguiente==""){
			$nrodefacturasiguiente=$controlnrofactura;
			$nrodefacturasiguiente=$nrodefacturasiguiente+1;
			
		}else{		
		if($nrodefacturasiguiente!=$controlnrofactura){
			$styleSalto="background-color:#fff176";
			$nrodefacturasiguiente=$controlnrofactura;
			$nrodefacturasiguiente=$nrodefacturasiguiente+1;
		}else{
			$nrodefacturasiguiente=$controlnrofactura;
			$nrodefacturasiguiente=$nrodefacturasiguiente+1;
		}
		}
	}
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosFacturasCargadas(this)'  style='$styleSalto'>
			  <td  id='td_id' style='display:none' >".$idfacturaspagadas."</td>
			  <td  id='' style='width:10%;display:none".$styleorden2."' >".$nombrefilialOrigen."</td>
			   
				 <td  id='td_datos_1' style='width:5%;".$styleorden5."' >".$nrofactura."-".$cf."</td>
			   	<td  id='' style='width:5%;".$styleorden6."' >".$anho."</td>
			   	<td  id='' style='width:5%;".$styleorden7."' >".$curso."</td>
			   	<td  id='' style='width:5%;display:none".$styleorden8."' >".$semestre."</td>			  
			   <td  id='' style='width:5%' >".$ci."</td>
			   <td  id='' style='width:5%' >".$nombrealumno." ".$apellido."</td>

			   <td  id='' style='width:10%;".$styleorden4."' >".$arancel."</td>
			   	<td  id='' style='width:10%' >".$Detalles."</td>

			   <td  id='' style='width:5%;display:none' >".$nombrealumno."</td>
			   <td  id='' style='width:5%;display:none' >".$apellido."</td>
			   <td  id='' style='width:5%;".$styleorden1."' >".$fecha."</td>			   
			   <td  id='' style='width:5%' >". number_format($monto,'0',',','.') ."</td>		   
			   <td  id='' style='width:5%' >". number_format($descuento,'0',',','.') ."</td>		   
			    <td  id='' style='width:5%' >".$estadoListado."</td>
				<td  id='' style='width:5%' >".$fecha_insercion."</td>
			   </tr>
			   </table>";
  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function normalizarFechaFiltroHistorialCobranza($fecha)
{
	if($fecha==""){
		return "";
	}
	$fecha=str_replace("/", "-", $fecha);
	if(preg_match('/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/',$fecha,$partes)){
		$anho=(int)$partes[1];
		$mes=(int)$partes[2];
		$dia=(int)$partes[3];
		if(checkdate($mes,$dia,$anho)){
			return sprintf('%04d-%02d-%02d',$anho,$mes,$dia);
		}
	}
	if(preg_match('/^([0-9]{1,2})-([0-9]{1,2})-([0-9]{4})$/',$fecha,$partes)){
		$dia=(int)$partes[1];
		$mes=(int)$partes[2];
		$anho=(int)$partes[3];
		if(checkdate($mes,$dia,$anho)){
			return sprintf('%04d-%02d-%02d',$anho,$mes,$dia);
		}
	}
	return "";
}

function historialvistacobranza($buscar,$filtro,$codFilial,$fecha1,$fecha2)
{
	$mysqli=conectar_al_servidor();
	$pagina='';
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and pt.cod_filialFk='$codFilial' ";
	}
	$condicionFecha="";
	if($fecha1!="" && $fecha2!=""){
		if($fecha2<$fecha1){
			$fechaTemporal=$fecha1;
			$fecha1=$fecha2;
			$fecha2=$fechaTemporal;
		}
		$condicionFecha=" and DATE(fac.fecha)>='$fecha1' and DATE(fac.fecha)<='$fecha2' ";
	}else if($fecha1!=""){
		$condicionFecha=" and DATE(fac.fecha)>='$fecha1' ";
	}else if($fecha2!=""){
		$condicionFecha=" and DATE(fac.fecha)<='$fecha2' ";
	}
	$condicion="";
	if($buscar!=""){
		if($filtro=="1"){
			$condicion=" and concat(alu.nombre,' ',alu.apellido) like '%".$buscar."%' ";
		}
		if($filtro=="2"){
			$condicion=" and alu.ci like '%".$buscar."%' ";
		}
		if($filtro=="3"){
			$condicion=" and fac.nrofactura like '%".$buscar."%' ";
		}
		if($filtro=="4"){
			$condicion=" and (lta.nombre like '%".$buscar."%' or fac.Detalles like '%".$buscar."%') ";
		}
		if($filtro=="5"){
			$condicion=" and fac.fecha like '%".$buscar."%' ";
		}
	}

	$sql= "Select
	MIN(fac.idfacturaspagadas) as idfacturaspagadas,
	fac.nrofactura,
	fac.cf,
	MAX(fac.tipo_comprobante) as tipo_comprobante,
	MAX(fac.fecha) as fecha,
	MAX(fac.estadofactura) as estadofactura,
	IFNULL(SUM(fac.monto),0) as monto,
	IFNULL(SUM(fac.descuento),0) as descuento,
	MAX(fac.idcursosalumnoFk) as idcursosalumnoFk,
	MAX(fac.anho) as anho,
	MAX(fac.curso) as curso,
	MAX(fac.semestre) as semestre,
	MAX(fac.puntoexpedicionfk) as puntoexpedicionfk,
	MAX(cur.idalumnoFk) as idalumnoFk,
	MAX(cur.cod_carreraFK) as cod_carreraFK,
	MAX(cur.turno) as turno,
	MAX(cur.seccion) as seccion,
	MAX(alu.nombre) as nombrealumno,
	MAX(alu.apellido) as apellido,
	MAX(alu.ci) as ci,
	MAX(lt.nombre) as nombreCarrera,
	MAX(fl1.nombre) as nombrefilialOrigen,
	MAX(fl1.cod_filial) as codfilial,
	IFNULL(CONCAT(MAX(fl1.puntoexpedicion),'-',MAX(lts.nro)),'') as puntoexpediciontexto,
	GROUP_CONCAT(DISTINCT IFNULL(NULLIF(fac.Detalles,''),lta.nombre) SEPARATOR ' / ') as concepto
	from facturaspagadas fac
	inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
	inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
	inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk
	inner join alumno alu on alu.idalumno=cur.idalumnoFk
	left join carrera car on car.cod_carrera=cur.cod_carreraFK
	left join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
	left join puntoexpedicion pt on pt.idpuntoexpedicion=fac.puntoexpedicionfk
	left join filial fl1 on fl1.cod_filial=pt.cod_filialFk
	left join listadocaja lts on lts.idcaja=pt.codcajaFk
	where fac.estado='Activo' and fac.estadofactura='Activo' ".$condicionFilial.$condicion.$condicionFecha."
	group by fac.nrofactura, fac.cf
	order by fecha desc, idfacturaspagadas desc
	limit 100";

	$sqlTotales= "Select IFNULL(count(*),0) as totalregistros, IFNULL(sum(monto),0) as totalmonto from (
	Select IFNULL(SUM(fac.monto),0) as monto
	from facturaspagadas fac
	inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
	inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
	inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk
	inner join alumno alu on alu.idalumno=cur.idalumnoFk
	left join carrera car on car.cod_carrera=cur.cod_carreraFK
	left join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
	left join puntoexpedicion pt on pt.idpuntoexpedicion=fac.puntoexpedicionfk
	left join filial fl1 on fl1.cod_filial=pt.cod_filialFk
	left join listadocaja lts on lts.idcaja=pt.codcajaFk
	where fac.estado='Activo' and fac.estadofactura='Activo' ".$condicionFilial.$condicion.$condicionFecha."
	group by fac.nrofactura, fac.cf
	) as historial";

	$totalresouesta=0;
	$totales=0;
	$stmtTotales = $mysqli->prepare($sqlTotales);
	if(!$stmtTotales){
		error_log("historialvistacobranza total prepare error: ".$mysqli->error);
	}else if(!$stmtTotales->execute()){
		error_log("historialvistacobranza total execute error: ".$stmtTotales->error);
	}else{
		$resultTotales = $stmtTotales->get_result();
		if($valorTotales = mysqli_fetch_assoc($resultTotales)){
			$totalresouesta=$valorTotales['totalregistros'];
			$totales=$valorTotales['totalmonto'];
		}
		$stmtTotales->close();
	}

	$stmt = $mysqli->prepare($sql);
	if(!$stmt){
		error_log("historialvistacobranza prepare error: ".$mysqli->error);
		mysqli_close($mysqli);
		$informacion =array("1" => "error","2" => "No se pudo consultar el historial de cobranzas");
		echo json_encode($informacion);
		exit;
	}
	if ( ! $stmt->execute()) {
		error_log("historialvistacobranza execute error: ".$stmt->error);
		mysqli_close($mysqli);
		$informacion =array("1" => "error","2" => "No se pudo consultar el historial de cobranzas");
		echo json_encode($informacion);
		exit;
	}

	$result = $stmt->get_result();
	$valor= mysqli_num_rows($result);
	$styleName="tableRegistroSearch";
	if ($valor>0)
	{
		while ($valor= mysqli_fetch_assoc($result))
		{
			$idfacturaspagadas=$valor['idfacturaspagadas'];
			$nrofactura=utf8_encode($valor['nrofactura']);
			$cf=utf8_encode($valor['cf']);
			$tipo_comprobante=utf8_encode($valor['tipo_comprobante']);
			$fecha=utf8_encode($valor['fecha']);
			$estadofactura=utf8_encode($valor['estadofactura']);
			$monto=$valor['monto'];
			$descuento=$valor['descuento'];
			$idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
			$anho=utf8_encode($valor['anho']);
			$curso=utf8_encode($valor['curso']);
			$semestre=utf8_encode($valor['semestre']);
			$puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
			$idalumnoFk=utf8_encode($valor['idalumnoFk']);
			$cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
			$turno=utf8_encode($valor['turno']);
			$seccion=utf8_encode($valor['seccion']);
			$nombrealumno=utf8_encode($valor['nombrealumno']);
			$apellido=utf8_encode($valor['apellido']);
			$ci=utf8_encode($valor['ci']);
			$nombreCarrera=utf8_encode($valor['nombreCarrera']);
			$nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
			$codfilial=utf8_encode($valor['codfilial']);
			$puntoexpediciontexto=utf8_encode($valor['puntoexpediciontexto']);
			$concepto=utf8_encode($valor['concepto']);
			$alumno=$nombrealumno." ".$apellido;
			$subtotal=$monto+$descuento;
			if($tipo_comprobante==""){
				if($cf=="0" || $cf==""){
					$tipo_comprobante="BOLETA";
				}else{
					$tipo_comprobante="FACTURA";
				}
			}
			$comprobante=$nrofactura;
			if($cf!=""){
				$comprobante=$nrofactura."-".$cf;
			}
			$fechaVista="";
			if($fecha!=""){
				$fechaVista=date("d-m-Y", strtotime($fecha));
			}
			if($styleName=="tableRegistroSearch"){
				$styleName="tableRegistroSearch2";
			}else{
				$styleName="tableRegistroSearch";
			}
			$detalleCobranza=buscarDetalleHistorialCobranza($nrofactura,$cf);
			$detalleTabla=base64_encode($detalleCobranza[0]);
			$detalleRecibo=base64_encode($detalleCobranza[1]);
			$detalleFactura=base64_encode($detalleCobranza[2]);

			$pagina.="<table class='$styleName' border='0' cellspacing='0' cellpadding='0'>
			<tr id='tbSelecRegistro' onclick='obtenerdatosvistacobranza(this)'>
			<td id='td_id' style='display:none'>".$idfacturaspagadas."</td>
			<td style='width:15%'>".$comprobante."</td>
			<td id='td_datos_1' style='display:none'>".$fecha."</td>
			<td style='width:11%'>".$fechaVista."</td>
			<td id='td_datos_17' style='width:10%'>".$tipo_comprobante."</td>
			<td id='td_datos_2' style='width:29%'>".$alumno."</td>
			<td id='td_datos_3' style='width:15%'>".$ci."</td>
			<td id='td_datos_5' style='width:10%'>".$curso."</td>
			<td id='td_datos_6' style='display:none'>".$anho."</td>
			<td id='td_datos_12' style='display:none'>".$concepto."</td>
			<td id='td_datos_9' style='width:10%'>".number_format($monto,'0',',','.')."</td>
			<td id='td_datos_20' style='display:none'>".$estadofactura."</td>
			<td id='td_datos_4' style='display:none'>".$nombreCarrera."</td>
			<td id='td_datos_7' style='display:none'>".$semestre."</td>
			<td id='td_datos_8' style='display:none'>".$nombrefilialOrigen."</td>
			<td id='td_datos_10' style='display:none'>".number_format($descuento,'0',',','.')."</td>
			<td id='td_datos_11' style='display:none'>".$comprobante."</td>
			<td id='td_datos_13' style='display:none'>".$idcursosalumnoFk."</td>
			<td id='td_datos_14' style='display:none'>".$idalumnoFk."</td>
			<td id='td_datos_15' style='display:none'>".$cod_carreraFK."</td>
			<td id='td_datos_16' style='display:none'>".$codfilial."</td>
			<td id='td_datos_18' style='display:none'>".$puntoexpedicionfk."</td>
			<td id='td_datos_19' style='display:none'>".$cf."</td>
			<td id='td_datos_21' style='display:none'>".$turno."</td>
			<td id='td_datos_22' style='display:none'>".$seccion."</td>
			<td id='td_datos_23' style='display:none'>".$monto."</td>
			<td id='td_datos_24' style='display:none'>".number_format($subtotal,'0',',','.')."</td>
			<td id='td_datos_25' style='display:none'>".$detalleTabla."</td>
			<td id='td_datos_26' style='display:none'>".$detalleRecibo."</td>
			<td id='td_datos_27' style='display:none'>".$detalleFactura."</td>
			<td id='td_datos_28' style='display:none'>".$puntoexpediciontexto."</td>
			</tr>
			</table>";
		}
	}
	mysqli_close($mysqli);
	$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
	echo json_encode($informacion);
	exit;
}

function buscarDetalleHistorialCobranza($nrofactura,$cf)
{
	$mysqli=conectar_al_servidor();
	$tabla='';
	$recibo='';
	$factura='';
	$sql= "Select fac.cod_arancelFk, fac.Detalles, fac.monto, IFNULL(fac.descuento,0) as descuento,
	fac.curso, fac.anho, fac.semestre, lta.nombre as arancel
	from facturaspagadas fac
	inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
	inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
	where fac.estado='Activo' and fac.estadofactura='Activo' and fac.nrofactura=? and fac.cf=?
	order by fac.idfacturaspagadas asc";
	$stmt = $mysqli->prepare($sql);
	if(!$stmt){
		error_log("buscarDetalleHistorialCobranza prepare error: ".$mysqli->error);
		mysqli_close($mysqli);
		$datos[0]=$tabla;
		$datos[1]=$recibo;
		$datos[2]=$factura;
		return $datos;
	}
	$ss='ss';
	$stmt->bind_param($ss,$nrofactura,$cf);
	if ( ! $stmt->execute()) {
		error_log("buscarDetalleHistorialCobranza execute error: ".$stmt->error);
		mysqli_close($mysqli);
		$datos[0]=$tabla;
		$datos[1]=$recibo;
		$datos[2]=$factura;
		return $datos;
	}
	$result = $stmt->get_result();
	$valor= mysqli_num_rows($result);
	if ($valor>0)
	{
		while ($valor= mysqli_fetch_assoc($result))
		{
			$cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
			$detalle=utf8_encode($valor['Detalles']);
			$arancel=utf8_encode($valor['arancel']);
			$monto=$valor['monto'];
			$descuento=$valor['descuento'];
			$curso=utf8_encode($valor['curso']);
			$anho=utf8_encode($valor['anho']);
			$semestre=utf8_encode($valor['semestre']);
			if($detalle==""){
				$detalle=$arancel;
			}
			$precio=$monto+$descuento;
			$tabla.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			<tr id='tbSelecRegistro' name='tdDetalleCobranzasHistorial'>
			<td id='td_id_1' style='display:none'>".$cod_arancelFk."</td>
			<td id='td_datos_1' style='width:20%;'>".$detalle."</td>
			<td id='td_datos_3' style='width:10%'>".number_format($precio,'0',',','.')."</td>
			<td id='td_datos_9' style='width:5%'>".number_format($descuento,'0',',','.')."</td>
			<td id='td_datos_4' style='width:5%'>1</td>
			<td id='td_datos_5' style='width:10%'>".number_format($monto,'0',',','.')."</td>
			<td id='td_datos_6' style='display:none'></td>
			<td id='td_datos_7' style='display:none'></td>
			<td id='td_datos_10' style='display:none'>".$curso."</td>
			<td id='td_datos_11' style='display:none'>".$anho."</td>
			<td id='td_datos_12' style='display:none'>".$semestre."</td>
			</tr>
			</table>";
			$recibo.="<table class='tableRegistroFactura' style='width:100%' ><tbody><tr>
			<td style='text-align: left; width: 60%;'>".$detalle."</td>
			<td style='text-align: left; width: 20%;'>".number_format($descuento,'0',',','.')."</td>
			<td style='text-align: left; width: 20%;'>".number_format($monto,'0',',','.')."</td>
			</tr></tbody></table>";
			$factura.="<table class='tableRegistroFactura'><tbody><tr>
			<td style='text-align: center; width: 10%;'>".$cod_arancelFk."</td>
			<td class='TdCantidadFactura'>1</td>
			<td class='TdDescripcionFactura'>".$detalle."</td>
			<td style='width: 10%;'>".number_format($monto,'0',',','.')."</td>
			<td style='width: 50%;'>".number_format($monto,'0',',','.')."</td>
			</tr></tbody></table>";
		}
	}
	mysqli_close($mysqli);
	$datos[0]=$tabla;
	$datos[1]=$recibo;
	$datos[2]=$factura;
	return $datos;
}

function buscarbalancegeneral($cursofiltro,$semestrefiltro,$fecha1,$fecha2,$tipo,$anhofiltro,$documento,$alumno,$codFilial,$codArancel,$codCarrera,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' ";
	}	
	$condicionConcepto="";
	if($codArancel!=""){
		$condicionConcepto=" and lta.cod_listadearanceles='$codArancel' ";
	}
	$condicionCarrera="";
	if($codCarrera!=""){
		$condicionCarrera=" and lt.Cod_listadecarreras='$codCarrera' ";
	}
	$condicionfiltro1="";
	if($documento!=""){
		$condicionfiltro1=" and (alu.ci like '%".$documento."%') ";
	}
	$condicionfiltro2="";
	if($tipo!=""){
		$condicionfiltro2=" and (ar.tipo = '".$tipo."' ) ";
	}
	$condicionfiltro3="";
	if($alumno!=""){
		$condicionfiltro3=" and (concat(alu.nombre,' ',alu.apellido) like '%".$alumno."%' ) ";
	}
	
	$condicionanho="";
	if($anhofiltro!=""){
		$condicionanho=" and cur.anho= '".$anhofiltro."' ";
	}
	$condicioncurso="";
	if($cursofiltro!=""){
		$condicioncurso=" and cur.curso= '".$cursofiltro."' ";
	}
	$condicionsemestre="";
	if($semestrefiltro!=""){
		$condicionsemestre=" and cur.semestre= '".$semestrefiltro."' ";
	}
	$condicionfecha="";
	if($fecha1!=""){
		$condicionfecha=" and fac.fecha='$fecha1' ";
	}
	if($fecha2!="" && $fecha1!=""){
		$condicionfecha=" and fac.fecha>='$fecha1' and fac.fecha<='$fecha2' ";
	}
	
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by nombrefilialOrigen asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombreCarrera asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombrealumno asc";
	}
	if($ordenby=="4"){
		$oderby="order by totalapagar desc";
	}
	if($ordenby=="6"){
		$oderby="order by cur.anho desc";
	}
	if($ordenby=="7"){
		$oderby="order by cur.curso desc";
	}
	if($ordenby=="8"){
		$oderby="order by cur.semestre desc";
	}
	
		$sql= "Select IFNULL(sum(fac.monto),0) as  monto,cur.idalumnoFk,car.Cod_listadecarrerasFK
,alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.anho,cur.semestre,cur.curso,cur.cod_carreraFK
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,sum(ar.total) as totalapagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and fac.estadofactura='Activo' ".$condicionanho.$condicioncurso.$condicionsemestre.$condicionCarrera.$condicionFilial.$condicionConcepto.$condicionfiltro1.$condicionfiltro2.$condicionfiltro3.$condicionfecha." group by car.cod_carrera,cur.idalumnoFk ".$oderby;

  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
$totalpagar=0;
$totalpagado=0;
$totalapagar2=0;
$totalsaldo=0;
$controlcargar="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      
		  	  $totalapagararancel=utf8_encode($valor['totalapagar']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $idalumnoFk=utf8_encode($valor['idalumnoFk']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $Cod_listadecarrerasFK=utf8_encode($valor['Cod_listadecarrerasFK']);
		  	 if($codArancel==""){
				 $arancel="TODOS";
			 }
			 // if($anhofiltro==""){
				 // $anho="TODO";
			 // }
			 // if($cursofiltro==""){
				 // $curso="TODO";
			 // }
			 // if($semestrefiltro==""){
				 // $semestre="TODO";
			 // }
		  	
			 $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden6="";
			  $styleorden7="";
			  $styleorden8="";
			  $styletotal="background-color: #009688;color: #fff;";
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
	if($ordenby=="6"){
		$styleorden6="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="7"){
		$styleorden7="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="8"){
		$styleorden8="color: #000; background-color: #e7e7e7;";
	}
	if($codArancel==""){
			 $totalapagararancel=buscartotalpagarfacturas($anho,$curso,$semestre,$cod_carreraFK);
			 $totalapagararancel=$totalapagararancel+(buscartotalpagarfacturasdeudasanterior($idalumnoFk,$Cod_listadecarrerasFK));
	}
		  	 $totales=$totales+$monto;			
		   $totalapagar2=$totalapagararancel+$totalapagar2;
				 $saldo=$totalapagararancel-$monto;
				 $totalsaldo=$totalsaldo+$saldo;
				 $stylesaldos="";
				 if($saldo<0){
					  $stylesaldos="background-color:red;color:#fff";
				 }
				 if($saldo==0){
					  $stylesaldos="background-color:#009606;color:#fff";
				 }
				 if($saldo>0){
					  $stylesaldos="background-color:#2196f3;color:#fff";
				 }
				 
				
				 
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosReporBalanceGeneral(this)' >
			  <td  id='td_datos_1'  style='display:none' >".$idalumnoFk."</td>
			  <td  id='' style='width:7%;".$styleorden1."' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%;".$styleorden2."' >".$nombreCarrera."</td>
			   <td  id='td_datos_3' style='width:10%' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%;".$styleorden3."' >".$nombrealumno." ".$apellido."</td>
			    <td  id='' style='width:10%' >".$arancel."</td>		   
			    <td  id='' style='width:5%;".$styleorden6."' >".$anho."</td>		   
			    <td  id='' style='width:5%;".$styleorden7."' >".$curso."</td>		   
			    <td  id='' style='width:5%;".$styleorden8."' >".$semestre."</td>		   
			   <td  id='' style='width:5%;".$styleorden4."' >". number_format($totalapagararancel,'0',',','.') ."</td>		   
			   <td  id='' style='width:5%' >". number_format($monto,'0',',','.') ."</td>		   
			   <td  id='' style='width:5%;".$stylesaldos."' >". number_format($saldo,'0',',','.') ."</td>		   
			   </tr>
			   </table>";
			
			 
			 
	
		  	
			
			    	 
		  	
			  
			  
	  }
	  
	 
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') ,"5"=> number_format($totalapagar2,'0',',','.') ,"6"=> number_format($totalsaldo,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function texto_informe_pagos_faltantes($valor)
{
	if($valor==null){
		$valor="";
	}
	return htmlspecialchars(utf8_encode($valor), ENT_QUOTES, "UTF-8");
}

function formato_numero_informe_pagos_faltantes($valor)
{
	if($valor==null || $valor==""){
		$valor=0;
	}
	return number_format($valor,'0',',','.');
}

function inicializar_meses_informe_pagos_faltantes()
{
	return array(
		1 => 0,
		2 => 0,
		3 => 0,
		4 => 0,
		5 => 0,
		6 => 0,
		7 => 0,
		8 => 0,
		9 => 0,
		10 => 0,
		11 => 0,
		12 => 0
	);
}

function obtener_pago_arancel_informe_pagos_faltantes($mysqli,$idcursosalumno,$nombreArancel)
{
	$idcursosalumno=$mysqli->real_escape_string($idcursosalumno);
	$nombreArancel=$mysqli->real_escape_string($nombreArancel);
	$sql="Select IFNULL(sum(fac.monto),0) as pagado
	from facturaspagadas fac
	inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
	inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
	where fac.estado='Activo' and fac.estadofactura='Activo'
	and fac.idcursosalumnoFk='$idcursosalumno'
	and upper(lta.nombre) like '$nombreArancel%' ";
	$stmt=$mysqli->prepare($sql);
	if(!$stmt->execute()){
		echo "Error";
		exit;
	}
	$pagado=0;
	$result=$stmt->get_result();
	if(mysqli_num_rows($result)>0){
		while($valor=mysqli_fetch_assoc($result)){
			$pagado=$valor['pagado'];
		}
	}
	return $pagado;
}

function obtener_configuracion_cuota_informe_pagos_faltantes($mysqli,$codCarrera,$anho,$semestre,$curso)
{
	$codCarrera=$mysqli->real_escape_string($codCarrera);
	$anho=$mysqli->real_escape_string($anho);
	$semestre=$mysqli->real_escape_string($semestre);
	$curso=$mysqli->real_escape_string($curso);
	if($semestre==""){
		$semestre="1";
	}
	$configuracion=array("monto" => 0, "cantidad" => 0, "total" => 0);
	$sql="Select ar.monto, ar.cantidad, ar.total
	from aranceles ar
	inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
	where ar.estado='Activo'
	and ar.cod_carreraFK='$codCarrera'
	and upper(lta.nombre) like 'CUOTA%'
	and (
		(ar.anho='$anho' and ar.semestre='$semestre' and ar.curso='$curso')
		or (ar.anho='NF' and ar.semestre='NF' and ar.curso='NF')
	)
	order by case when ar.anho='$anho' and ar.semestre='$semestre' and ar.curso='$curso' then 0 else 1 end, ar.cod_arancel desc
	limit 1";
	$stmt=$mysqli->prepare($sql);
	if(!$stmt->execute()){
		echo "Error";
		exit;
	}
	$result=$stmt->get_result();
	if(mysqli_num_rows($result)>0){
		while($valor=mysqli_fetch_assoc($result)){
			$configuracion["monto"]=$valor['monto'];
			$configuracion["cantidad"]=$valor['cantidad'];
			$configuracion["total"]=$valor['total'];
		}
	}
	return $configuracion;
}

function obtener_pagos_cuota_por_fecha_informe_pagos_faltantes($mysqli,$idcursosalumno)
{
	$meses=inicializar_meses_informe_pagos_faltantes();
	$idcursosalumno=$mysqli->real_escape_string($idcursosalumno);
	$sql="Select MONTH(fac.fecha) as mes, IFNULL(sum(fac.monto),0) as pagado
	from facturaspagadas fac
	inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
	inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
	where fac.estado='Activo' and fac.estadofactura='Activo'
	and fac.idcursosalumnoFk='$idcursosalumno'
	and upper(lta.nombre) like 'CUOTA%'
	group by MONTH(fac.fecha)";
	$stmt=$mysqli->prepare($sql);
	if(!$stmt->execute()){
		echo "Error";
		exit;
	}
	$result=$stmt->get_result();
	if(mysqli_num_rows($result)>0){
		while($valor=mysqli_fetch_assoc($result)){
			$mes=(int)$valor['mes'];
			if($mes>=1 && $mes<=12){
				$meses[$mes]=$valor['pagado'];
			}
		}
	}
	return $meses;
}

function distribuir_cuotas_informe_pagos_faltantes($totalPagado,$montoCuota,$cantidadCuotas,$mesInicio)
{
	$meses=inicializar_meses_informe_pagos_faltantes();
	$totalPagado=(float)$totalPagado;
	$montoCuota=(float)$montoCuota;
	$cantidadCuotas=(int)$cantidadCuotas;
	$mesInicio=(int)$mesInicio;
	if($cantidadCuotas<=0 || $montoCuota<=0){
		return $meses;
	}
	if($mesInicio<1 || $mesInicio>12){
		$mesInicio=2;
	}
	$restante=$totalPagado;
	$ultimoMes=$mesInicio;
	for($a=1;$a<=$cantidadCuotas;$a++){
		$mes=(($mesInicio+$a-2)%12)+1;
		$ultimoMes=$mes;
		$montoMes=0;
		if($restante>0){
			if($restante>=$montoCuota){
				$montoMes=$montoCuota;
			}else{
				$montoMes=$restante;
			}
			$restante=$restante-$montoMes;
		}
		$meses[$mes]=$meses[$mes]+$montoMes;
	}
	if($restante>0){
		$meses[$ultimoMes]=$meses[$ultimoMes]+$restante;
	}
	return $meses;
}

function fila_informe_pagos_faltantes($styleName,$idcursosalumno,$ci,$alumno,$anho,$curso,$matricula,$meses)
{
	$pagina="<table class='$styleName tablaReporteFinanciero tablaPagosPorMes' border='0' cellspacing='0' cellpadding='0'>
	<tr id='tbSelecRegistro' name='trInformePagosFaltantes' onclick='seleccionarInformePagosFaltantes(this)'>
	<td id='td_id_curso_alumno' style='display:none'>".$idcursosalumno."</td>
	<td id='td_datos_ci' class='reporteColCantidad' style='width:72px'>".$ci."</td>
	<td id='td_datos_alumno' class='reporteColTexto' style='width:165px' title='".$alumno."'>".$alumno."</td>
	<td class='reporteColCantidad' style='width:55px'>".$anho."</td>
	<td class='reporteColCantidad' style='width:65px'>".$curso."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($matricula)."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[1])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[2])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[3])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[4])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[5])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[6])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[7])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[8])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[9])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[10])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[11])."</td>
	<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($meses[12])."</td>
	</tr>
	</table>";
	return $pagina;
}

function buscarInformePagosFaltantes($codFilial,$codCarrera,$anho,$seccion,$ci,$alumno,$curso)
{
	$mysqli=conectar_al_servidor();
	$codFilial=$mysqli->real_escape_string($codFilial);
	$codCarrera=$mysqli->real_escape_string($codCarrera);
	$anho=$mysqli->real_escape_string($anho);
	$seccion=$mysqli->real_escape_string($seccion);
	$ci=$mysqli->real_escape_string($ci);
	$alumno=$mysqli->real_escape_string($alumno);
	$curso=$mysqli->real_escape_string($curso);
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' ";
	}
	$condicionCarrera="";
	if($codCarrera!=""){
		$condicionCarrera=" and ltc.Cod_listadecarreras='$codCarrera' ";
	}
	$condicionAnho="";
	if($anho!=""){
		$condicionAnho=" and cur.anho='$anho' ";
	}
	$condicionSeccion="";
	if($seccion!=""){
		$condicionSeccion=" and cur.seccion='$seccion' ";
	}
	$condicionCi="";
	if($ci!=""){
		$condicionCi=" and alu.ci like '%$ci%' ";
	}
	$condicionAlumno="";
	if($alumno!=""){
		$condicionAlumno=" and (concat(alu.apellido,' ',alu.nombre) like '%$alumno%' or concat(alu.nombre,' ',alu.apellido) like '%$alumno%') ";
	}
	$condicionCurso="";
	if($curso!=""){
		$condicionCurso=" and cur.curso='$curso' ";
	}
	$sql="Select cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.anho, cur.semestre, cur.curso, cur.seccion,
	MONTH(cur.fechaInicio) as mesInicio,
	alu.nombre as nombrealumno, alu.apellido, alu.ci,
	ltc.nombre as nombrecarrera,
	fil.nombre as nombrefilial
	from cursosalumno cur
	inner join alumno alu on alu.idalumno=cur.idalumnoFk
	inner join carrera car on car.cod_carrera=cur.cod_carreraFK
	inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
	inner join filial fil on fil.cod_filial=car.cod_filialOringFK
	where cur.idalumnoFk!='-1' and cur.estado='Activo' ".$condicionFilial.$condicionCarrera.$condicionAnho.$condicionSeccion.$condicionCi.$condicionAlumno.$condicionCurso."
	order by cur.anho desc, cur.curso asc, cur.seccion asc, alu.apellido asc, alu.nombre asc";
	$stmt=$mysqli->prepare($sql);
	if(!$stmt->execute()){
		echo "Error";
		exit;
	}
	$pagina="";
	$contador=0;
	$totalMatricula=0;
	$totalCuotas=0;
	$totalGeneral=0;
	$totalesMeses=inicializar_meses_informe_pagos_faltantes();
	$result=$stmt->get_result();
	$totalresouesta=mysqli_num_rows($result);
	if($totalresouesta>0){
		while($valor=mysqli_fetch_assoc($result)){
			$contador++;
			$idcursosalumno=$valor['idcursosalumno'];
			$cod_carreraFK=$valor['cod_carreraFK'];
			$anhoAlumno=$valor['anho'];
			$semestreAlumno=$valor['semestre'];
			$cursoAlumno=$valor['curso'];
			$mesInicio=$valor['mesInicio'];
			$ci=texto_informe_pagos_faltantes($valor['ci']);
			$alumno=texto_informe_pagos_faltantes($valor['apellido']." ".$valor['nombrealumno']);
			$anhoAlumnoTexto=texto_informe_pagos_faltantes($anhoAlumno);
			$cursoAlumnoTexto=texto_informe_pagos_faltantes($cursoAlumno);
			$matricula=obtener_pago_arancel_informe_pagos_faltantes($mysqli,$idcursosalumno,"MATRIC");
			$totalPagadoCuota=obtener_pago_arancel_informe_pagos_faltantes($mysqli,$idcursosalumno,"CUOTA");
			$configCuota=obtener_configuracion_cuota_informe_pagos_faltantes($mysqli,$cod_carreraFK,$anhoAlumno,$semestreAlumno,$cursoAlumno);
			if($configCuota["monto"]>0 && $configCuota["cantidad"]>0){
				$meses=distribuir_cuotas_informe_pagos_faltantes($totalPagadoCuota,$configCuota["monto"],$configCuota["cantidad"],$mesInicio);
			}else{
				$meses=obtener_pagos_cuota_por_fecha_informe_pagos_faltantes($mysqli,$idcursosalumno);
			}
			$totalFila=$matricula;
			for($m=1;$m<=12;$m++){
				$totalFila=$totalFila+$meses[$m];
				$totalesMeses[$m]=$totalesMeses[$m]+$meses[$m];
			}
			$totalMatricula=$totalMatricula+$matricula;
			$totalCuotas=$totalCuotas+$totalPagadoCuota;
			$totalGeneral=$totalGeneral+$totalFila;
			$styleName="tableRegistroSearch";
			if(($contador%2)==0){
				$styleName="tableRegistroSearch2";
			}
			$pagina.=fila_informe_pagos_faltantes($styleName,$idcursosalumno,$ci,$alumno,$anhoAlumnoTexto,$cursoAlumnoTexto,$matricula,$meses);
		}
		$pagina.="<table class='tableRegistroSearch2 tablaReporteFinanciero tablaPagosPorMes' border='0' cellspacing='0' cellpadding='0'>
		<tr id='tbSelecRegistro' style='font-weight:bold'>
		<td class='reporteColCantidad' style='width:72px'>TOTALES</td>
		<td class='reporteColTexto' style='width:165px'></td>
		<td class='reporteColCantidad' style='width:55px'></td>
		<td class='reporteColCantidad' style='width:65px'></td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalMatricula)."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[1])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[2])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[3])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[4])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[5])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[6])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[7])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[8])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[9])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[10])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[11])."</td>
		<td class='reporteColMonto' style='width:64px'>".formato_numero_informe_pagos_faltantes($totalesMeses[12])."</td>
		</tr>
		</table>";
	}else{
		$pagina="<table class='tableRegistroSearch tablaReporteFinanciero tablaPagosPorMes' border='0' cellspacing='0' cellpadding='0'>
		<tr id='tbSelecRegistro'>
		<td class='reporteColVacio' colspan='17'>NO SE ENCONTRARON ALUMNOS PARA LOS FILTROS INDICADOS</td>
		</tr>
		</table>";
	}
	mysqli_close($mysqli);
	$informacion=array(
		"1" => "exito",
		"2" => $pagina,
		"3" => $totalresouesta,
		"4" => formato_numero_informe_pagos_faltantes($totalMatricula),
		"5" => formato_numero_informe_pagos_faltantes($totalCuotas),
		"6" => formato_numero_informe_pagos_faltantes($totalGeneral)
	);
	echo json_encode($informacion);
	exit;
}

function campo_detalle_informe_pagos_faltantes($titulo,$valor,$resaltar=false)
{
	$titulo=htmlspecialchars($titulo, ENT_QUOTES, "UTF-8");
	$valor=texto_informe_pagos_faltantes($valor);
	if($valor===""){
		$valor="-";
	}
	if($resaltar==true){
		$valor="<b>".$valor."</b>";
	}
	return "<div style='margin-bottom:10px'>
	<p class='pTituloC' style='font-weight:bold;margin-bottom:4px'>".$titulo."</p>
	<div class='detallePagosValor'>".$valor."</div>
	</div>";
}

function panel_detalle_informe_pagos_faltantes($titulo,$contenido)
{
	$titulo=htmlspecialchars($titulo, ENT_QUOTES, "UTF-8");
	return "<div class='divMenuf' style='box-sizing:border-box;min-height:205px;margin:0'>
	<p class='pTituloC' style='font-weight:bold;margin-bottom:12px'>".$titulo."</p>
	".$contenido."
	</div>";
}

function fila_cuota_detalle_informe_pagos_faltantes($styleName,$nro,$mes,$monto,$pagado,$saldo,$estado)
{
	$claseEstado="detallePagosEstadoPagado";
	if($saldo>0){
		$claseEstado="detallePagosEstadoPendiente";
	}
	$pagina="<table class='".$styleName." tablaReporteFinanciero' border='0' cellspacing='0' cellpadding='0'>
	<tr id='tbSelecRegistro'>
	<td class='reporteColCantidad reporteW10'>".$nro."</td>
	<td class='reporteColTexto reporteW28'>".$mes."</td>
	<td class='reporteColMonto reporteW16'>".formato_numero_informe_pagos_faltantes($monto)."</td>
	<td class='reporteColMonto reporteW16'>".formato_numero_informe_pagos_faltantes($pagado)."</td>
	<td class='reporteColMonto reporteW16'>".formato_numero_informe_pagos_faltantes($saldo)."</td>
	<td class='reporteColCantidad reporteW14 ".$claseEstado."'>".$estado."</td>
	</tr>
	</table>";
	return $pagina;
}

function generar_cuotas_detalle_informe_pagos_faltantes($totalPagadoCuota,$configCuota,$mesInicio)
{
	$cantidadCuotas=(int)$configCuota["cantidad"];
	$montoCuota=(float)$configCuota["monto"];
	$mesInicio=(int)$mesInicio;
	if($mesInicio<1 || $mesInicio>12){
		$mesInicio=2;
	}
	if($cantidadCuotas<=0 || $montoCuota<=0){
		$pagina="<table class='tableRegistroSearch tablaReporteFinanciero' border='0' cellspacing='0' cellpadding='0'>
		<tr id='tbSelecRegistro'>
		<td class='reporteColVacio' colspan='6'>NO SE ENCONTRO CONFIGURACION DE CUOTAS PARA ESTE REGISTRO</td>
		</tr>
		</table>";
		return array("pagina" => $pagina, "cantidadPendiente" => 0, "saldoPendiente" => 0);
	}
	$pagina="";
	$pagadoDisponible=(float)$totalPagadoCuota;
	$cantidadPendiente=0;
	$saldoPendiente=0;
	for($a=1;$a<=$cantidadCuotas;$a++){
		$mesNro=(($mesInicio+$a-2)%12)+1;
		$mes=caseFecha($mesNro);
		if($mes==""){
			$mes="CUOTA ".$a;
		}
		$pagado=0;
		if($pagadoDisponible>0){
			if($pagadoDisponible>=$montoCuota){
				$pagado=$montoCuota;
			}else{
				$pagado=$pagadoDisponible;
			}
			$pagadoDisponible=$pagadoDisponible-$pagado;
		}
		$saldo=$montoCuota-$pagado;
		if($saldo<0){
			$saldo=0;
		}
		$estado="PAGADO";
		if($saldo>0){
			$estado="PENDIENTE";
			if($pagado>0){
				$estado="PARCIAL";
			}
			$cantidadPendiente++;
			$saldoPendiente=$saldoPendiente+$saldo;
		}
		$styleName="tableRegistroSearch";
		if(($a%2)==0){
			$styleName="tableRegistroSearch2";
		}
		$pagina.=fila_cuota_detalle_informe_pagos_faltantes($styleName,$a,$mes,$montoCuota,$pagado,$saldo,$estado);
	}
	return array("pagina" => $pagina, "cantidadPendiente" => $cantidadPendiente, "saldoPendiente" => $saldoPendiente);
}

function buscarDetalleInformePagosFaltantes($codFilial,$idcursosalumno)
{
	if($idcursosalumno==""){
		$informacion=array("1" => "DI");
		echo json_encode($informacion);
		exit;
	}
	$mysqli=conectar_al_servidor();
	$codFilial=$mysqli->real_escape_string($codFilial);
	$idcursosalumno=$mysqli->real_escape_string($idcursosalumno);
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' ";
	}
	$sql="Select cur.idcursosalumno, cur.idalumnoFk, cur.cod_carreraFK, cur.anho, cur.semestre, cur.curso, cur.turno,
	cur.seccion, cur.fechaInicio, cur.encargado as encargadoCurso,
	alu.nombre as nombrealumno, alu.apellido, alu.ci, alu.telef, alu.whatsapp, alu.dir_domicilio,
	alu.encargado as encargadoAlumno, alu.celpadre,
	ltc.nombre as nombrecarrera, fil.nombre as nombrefilial
	from cursosalumno cur
	inner join alumno alu on alu.idalumno=cur.idalumnoFk
	inner join carrera car on car.cod_carrera=cur.cod_carreraFK
	inner join listadecarreras ltc on ltc.Cod_listadecarreras=car.Cod_listadecarrerasFK
	inner join filial fil on fil.cod_filial=car.cod_filialOringFK
	where cur.idcursosalumno='$idcursosalumno' and cur.estado='Activo' ".$condicionFilial."
	limit 1";
	$stmt=$mysqli->prepare($sql);
	if(!$stmt->execute()){
		echo "Error";
		exit;
	}
	$result=$stmt->get_result();
	if(mysqli_num_rows($result)==0){
		mysqli_close($mysqli);
		$pagina="<table class='tableRegistroSearch tablaReporteFinanciero' border='0' cellspacing='0' cellpadding='0'>
		<tr id='tbSelecRegistro'>
		<td class='reporteColVacio' colspan='6'>NO SE ENCONTRO EL REGISTRO SELECCIONADO</td>
		</tr>
		</table>";
		$informacion=array("1" => "exito","2" => "","3" => $pagina,"4" => "","5" => "0","6" => "0");
		echo json_encode($informacion);
		exit;
	}
	$valor=mysqli_fetch_assoc($result);
	$idcursosalumno=$valor['idcursosalumno'];
	$cod_carreraFK=$valor['cod_carreraFK'];
	$anhoAlumno=$valor['anho'];
	$semestreAlumno=$valor['semestre'];
	$cursoAlumno=$valor['curso'];
	$mesInicio=2;
	if($valor['fechaInicio']!="" && $valor['fechaInicio']!="0000-00-00"){
		$fechaInicioTime=strtotime($valor['fechaInicio']);
		if($fechaInicioTime!==false){
			$mesInicio=date("n", $fechaInicioTime);
		}
	}
	$alumnoNombre=$valor['apellido']." ".$valor['nombrealumno'];
	$encargado=$valor['encargadoCurso'];
	if($encargado==""){
		$encargado=$valor['encargadoAlumno'];
	}
	$matricula=obtener_pago_arancel_informe_pagos_faltantes($mysqli,$idcursosalumno,"MATRIC");
	$totalPagadoCuota=obtener_pago_arancel_informe_pagos_faltantes($mysqli,$idcursosalumno,"CUOTA");
	$configCuota=obtener_configuracion_cuota_informe_pagos_faltantes($mysqli,$cod_carreraFK,$anhoAlumno,$semestreAlumno,$cursoAlumno);
	$detalleCuotas=generar_cuotas_detalle_informe_pagos_faltantes($totalPagadoCuota,$configCuota,$mesInicio);
	$cantidadTotalCuotas=(int)$configCuota["cantidad"];
	$cuotasPendientesTexto=$detalleCuotas["cantidadPendiente"]." / ".$cantidadTotalCuotas;
	$resumen="<div class='detallePagosResumen'>";
	$panelAlumno=campo_detalle_informe_pagos_faltantes("C.I.",$valor['ci'])
	.campo_detalle_informe_pagos_faltantes("Alumno",$alumnoNombre)
	.campo_detalle_informe_pagos_faltantes("Telefono Alumno",$valor['telef'])
	.campo_detalle_informe_pagos_faltantes("WhatsApp",$valor['whatsapp'])
	.campo_detalle_informe_pagos_faltantes("Direccion",$valor['dir_domicilio']);
	$panelTutorPagos=campo_detalle_informe_pagos_faltantes("Tutor / Encargado",$encargado)
	.campo_detalle_informe_pagos_faltantes("Telefono Tutor",$valor['celpadre'])
	.campo_detalle_informe_pagos_faltantes("Matricula Pagada",formato_numero_informe_pagos_faltantes($matricula),true)
	.campo_detalle_informe_pagos_faltantes("Cuotas Pagadas",formato_numero_informe_pagos_faltantes($totalPagadoCuota),true)
	.campo_detalle_informe_pagos_faltantes("Cuotas Pendientes",$cuotasPendientesTexto,true)
	.campo_detalle_informe_pagos_faltantes("Saldo Pendiente",formato_numero_informe_pagos_faltantes($detalleCuotas["saldoPendiente"]),true);
	$panelCurso=campo_detalle_informe_pagos_faltantes("Nivel Educativo",$valor['nombrecarrera'])
	.campo_detalle_informe_pagos_faltantes("Filial",$valor['nombrefilial'])
	.campo_detalle_informe_pagos_faltantes("Año / Curso",$valor['anho']." - ".$valor['curso'])
	.campo_detalle_informe_pagos_faltantes("Semestre / Seccion",$valor['semestre']." - ".$valor['seccion'])
	.campo_detalle_informe_pagos_faltantes("Turno",$valor['turno']);
	$resumen.=panel_detalle_informe_pagos_faltantes("Datos del Alumno",$panelAlumno);
	$resumen.=panel_detalle_informe_pagos_faltantes("Tutor y Pagos",$panelTutorPagos);
	$resumen.=panel_detalle_informe_pagos_faltantes("Datos del Curso",$panelCurso);
	$resumen.="</div>";
	mysqli_close($mysqli);
	$informacion=array(
		"1" => "exito",
		"2" => $resumen,
		"3" => $detalleCuotas["pagina"],
		"4" => texto_informe_pagos_faltantes($alumnoNombre),
		"5" => $detalleCuotas["cantidadPendiente"],
		"6" => formato_numero_informe_pagos_faltantes($detalleCuotas["saldoPendiente"])
	);
	echo json_encode($informacion);
	exit;
}

function buscarbalancegeneralporcriterio($anhofiltro,$cursofiltro,$semestrefiltro,$criteriocuota,$criteriomateria,$tipo,$criteriomatricula,$documento,$alumno,$codFilial,$codCarrera,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK='$codFilial' ";
	}	
	$condicionCarrera="";
	if($codCarrera!=""){
		$condicionCarrera=" and lt.Cod_listadecarreras='$codCarrera' ";
	}
	$condiciondocumento="";
	if($documento!=""){
		$condiciondocumento=" and (alu.ci like '%".$documento."%') ";
	}	
	$condicionalumno="";
	if($alumno!=""){
		$condicionalumno=" and (concat(alu.nombre,' ',alu.apellido) like '%".$alumno."%' ) ";
	}
	$condicionanho="";
	if($anhofiltro!=""){
		$condicionanho=" and cur.anho='".$anhofiltro."' ";
	}	
	$condicioncurso="";
	if($cursofiltro!=""){
		$condicioncurso=" and cur.curso='".$cursofiltro."' ";
	}
	$condicionsemestre="";
	if($semestrefiltro!=""){
		$condicionsemestre=" and cur.semestre='".$semestrefiltro."' ";
	}	
	
	
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by nombrefilialOrigen asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombreCarrera asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombrealumno asc";
	}
	if($ordenby=="4"){
		$oderby="order by totalapagar desc";
	}
	
		$sql= "Select cur.idalumnoFk,car.Cod_listadecarrerasFK
,alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.anho,cur.semestre,cur.curso,cur.cod_carreraFK
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
from cursosalumno cur inner join aranceles ar on ar.cod_carreraFK=cur.cod_carreraFK
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where cur.estado='Activo'  ".$condicionanho.$condicioncurso.$condicionsemestre.$condicionCarrera.$condicionFilial.$condiciondocumento.$condicionalumno." group by car.cod_carrera,cur.idalumnoFk ".$oderby;



  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
$totalpagar=0;
$totalpagado=0;
$totalapagar2=0;
$totalsaldo=0;
$controlcargar="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= 0;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      
		  	 
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $idalumnoFk=utf8_encode($valor['idalumnoFk']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $Cod_listadecarrerasFK=utf8_encode($valor['Cod_listadecarrerasFK']);
		  	 
		  	
			 $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styletotal="background-color: #009688;color: #fff;";
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
	
			// $totalapagararancel=buscartotalpagarfacturas($anho,$curso,$semestre,$cod_carreraFK);
			// $totalapagararancel=$totalapagararancel+(buscartotalpagarfacturasdeudasanterior($idalumnoFk,$Cod_listadecarrerasFK));
	if($tipo=="1"){
		$tipob="off";
		$controlcriterio1="on";	
		$controlcriterio2="on";	
	}else{
		$tipob="on";
		$controlcriterio1="off";	
		$controlcriterio2="off";	
	}
	
	$totalcriterio1=0;
	$controlCriterioCuota="1";
	$monto1=0;
	if($criteriocuota!=""){
	$datosc=buscartotalpagarestearancelPorNombre("CUOTA",$anho,$curso,$semestre,$cod_carreraFK,$idalumnoFk);
	$montocriterio1=$datosc[0];
	$totalcriterio1=$datosc[1];
	$monto1=$datosc[2];
	$totalcriterio=$montocriterio1*$criteriocuota;
	$totalcriterio1=$montocriterio1*$criteriocuota;
	if($totalcriterio>$monto1){
	$controlcriterio1="off";			
	}else{
		$controlcriterio1="on";	
	}	
	
	if($curso=="CULMINADO"){
		$controlCriterioCuota="0";
	}
	
	}
	
	$totalcriterio2=0;
	$monto2=0;
	$controlCriterioMatricula="1";
	if($criteriomatricula!=""){
	$datosc=buscartotalpagarestearancelPorNombre("MATRICULA",$anho,$curso,$semestre,$cod_carreraFK,$idalumnoFk);
	$totalcriterio2=$datosc[1];
	$monto2=$datosc[2];

	if($criteriomatricula>$monto2){
	$controlcriterio2="off";			
	}else{
		$controlcriterio2="on";	
	}	
		if($curso=="CULMINADO"){
		$controlCriterioMatricula="0";
	}
	}
	
  // echo $controlcriterio1."!=".$tipob."<>".$controlcriterio2."!=".$tipob."***";
	if($controlcriterio1!=$tipob && $controlcriterio2!=$tipob && $controlCriterioCuota=='1' && $controlCriterioMatricula=='1' ){
			
	
		$totalapagararancel=$totalcriterio1+$totalcriterio2;
		$monto=$monto1+$monto2;
		  	 $totales=$totales+$monto;			
		   $totalapagar2=$totalapagararancel+$totalapagar2;
				 $saldo=$totalapagararancel-$monto;
				 $totalsaldo=$totalsaldo+$saldo;
				 $stylesaldos="";
				 if($saldo<0){
					  $stylesaldos="background-color:red;color:#fff";
				 }
				 if($saldo==0){
					  $stylesaldos="background-color:#009606;color:#fff";
				 }
				 if($saldo>0){
					  $stylesaldos="background-color:#2196f3;color:#fff";
				 }
				 
				
				 
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosReporBalanceGeneral(this)' >
			  <td  id='td_datos_1'  style='display:none' >".$idalumnoFk."</td>
			  <td  id='' style='width:7%;".$styleorden1."' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%;".$styleorden2."' >".$nombreCarrera."</td>
			   <td  id='td_datos_3' style='width:10%' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%;".$styleorden3."' >".$nombrealumno." ".$apellido."</td>
			   <td  id='td_datos_3' style='width:5%' >".$anho."</td>
			   <td  id='td_datos_3' style='width:5%' >".$curso."</td>
			   <td  id='td_datos_3' style='width:5%' >".$semestre."</td>
			   <td  id='' style='width:5%;".$styleorden4."' >". number_format($totalapagararancel,'0',',','.') ."</td>		   
			   <td  id='' style='width:5%' >". number_format($monto,'0',',','.') ."</td>		   
			   <td  id='' style='width:5%;display:none;".$stylesaldos."' >". number_format($saldo,'0',',','.') ."</td>		   
			   </tr>
			   </table>";
			    $totalresouesta= $totalresouesta+1;
			
	}
			 

		  	
			
			    	 
		  	
			  
			  
	  }
	  
	 
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') ,"5"=> number_format($totalapagar2,'0',',','.') ,"6"=> number_format($totalsaldo,'0',',','.') );
echo json_encode($informacion);	
exit;


}


function buscartotalpagarestearancelPorNombre($NombreArancel,$anho,$curso,$semestre,$cod_carreraFK,$codAlumno)
{
	$mysqli=conectar_al_servidor();
	 $datos[0]=0; 
	 $datos[1]=0; 
	 $datos[2]=0; 
		 $sql= "Select monto,total,cod_arancel
		 from aranceles ar inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		 where lta.nombre='$NombreArancel' and ar.cod_carreraFK='$cod_carreraFK' and ar.anho='$anho' and ar.semestre='$semestre' and ar.curso='$curso' ";
		
		
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
		  
		  
		  
		      $datos[0]=$valor['monto'];
		      $datos[1]=$valor['total'];
		      $cod_arancel=$valor['cod_arancel'];
		  	  $datos[2]=buscartotalpagadofactura($cod_arancel,$anho,$curso,$semestre,$cod_carreraFK,$codAlumno);
			
			
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $datos;


}

function buscartotalpagadofactura($cod_arancelFk,$anho,$curso,$semestre,$cod_carreraFK,$codAlumno)
{
	$mysqli=conectar_al_servidor();
	  
		 $sql= "Select sum(fac.monto) as totalpagado
		 from facturaspagadas fac inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk
		 where cur.idalumnoFk='$codAlumno' and fac.cod_arancelFk='$cod_arancelFk' and cur.cod_carreraFK='$cod_carreraFK' and cur.anho='$anho' and cur.semestre='$semestre' and cur.curso='$curso' group by fac.idcursosalumnoFk ";
		
	
		
		
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}


	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 $totalpagado= 0;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $totalpagado=$valor['totalpagado'];
		  
		  	  
			
			
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $totalpagado;


}

function buscartotalpagarfacturas($anho,$curso,$semestre,$cod_carreraFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';	 
		 $sql= "Select  sum(total) as totalpagar  from aranceles where cod_carreraFK='$cod_carreraFK' and anho='$anho' and semestre='$semestre' and curso='$curso' ";
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totalpagar=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $totalpagar=$valor['totalpagar'];
		  	  
			
			
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $totalpagar;


}

function buscartotalpagarfacturasdeudasanterior($idalumnoFk,$Cod_listadecarrerasFk)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';	 
		 $sql= "Select  sum(monto) as totalpagar  from deudaspendientes where Cod_listadecarrerasFk='$Cod_listadecarrerasFk' and idalumnoFK='$idalumnoFk'  ";
   $stmt = $mysqli->prepare($sql);
  
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totalpagar=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $totalpagar=$valor['totalpagar'];
		  	  
			
			
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $totalpagar;


}


function consultamultiple($documento,$codCarrera,$codFilial,$curso,$semestre,$anho,$codArancel)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condicionFiltros="";
	$condicionFilial="";
	
	
	if($documento==""){
		
			  
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >			   
				<td c style='width:10%;'>No-Encontrado</td>
				<td  style='width:10%;'>No-Encontrado</td>
				<td  style='width:10%;'>No-Encontrado</td>
				<td  style='width:5%;'>No-Encontrado</td>
				<td  style='width:5%;'>No-Encontrado</td>
				<td  style='width:5%;'>No-Encontrado</td>
				<td  style='width:15%;'>No-Encontrado </td>
				<td  style='width:10%;'>".$documento."</td>
				<td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
				<td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td   style='width:5%; color:#fff;background-color:#FF5722;' >". number_format(0,'0',',','.') ."</td>
			  </tr>
			  </table>";
		
		$informacion =array("1" => "exito","2" => $pagina,"3"=> 0,
"4"=> 0,"5"=> 0,"6"=> 0 ,"7"=> $documento );
echo json_encode($informacion);	
exit;
		
	}else{
		$condicionFiltros=" and alu.ci ='$documento'";
	}
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	$condicionCarrera="";
	if($codCarrera!=""){
		$condicionCarrera=" and car.cod_carrera ='$codCarrera'";
	}
	
	$condicioncurso="";
	if($curso!=""){
		$condicioncurso=" and cur.curso ='$curso'";
	}
	$condicionsemestre="";
	if($semestre!=""){
		$condicionsemestre=" and cur.semestre ='$semestre'";
	}
	$condicionanho="";
	if($anho!=""){
		$condicionanho=" and cur.anho ='$anho'";
	}
	$condicionArancel="";
	if($codArancel!=""){
		$condicionArancel=" and lta.cod_listadearanceles='$codArancel'  ";
	}
	
	$oderby="";

	
$sql= "Select IFNULL(sum(fac.monto),0) as  monto,cur.idalumnoFk,car.Cod_listadecarrerasFK
,alu.nombre as nombrealumno,alu.apellido,alu.ci,cur.anho,cur.semestre,cur.curso,cur.cod_carreraFK
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.total as totalapagar
,(select count(fac.idfacturaspagadas) from facturaspagadas fac1 where fac1.estado='Activo' and fac1.estadofactura='Activo' and fac1.idcursosalumnoFk=fac.idcursosalumnoFk limit 1) as nroRegistro
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and fac.estadofactura='Activo' ".$condicionArancel.$condicionFiltros.$condicionFilial.$condicionCarrera.$condicioncurso.$condicionsemestre.$condicionanho." group by cur.idalumnoFk ".$oderby;

	 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
$totalpagar=0;
$totalsaldo=0;
$totalapagar2=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		       $totalapagararancel=utf8_encode($valor['totalapagar']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $idalumnoFk=utf8_encode($valor['idalumnoFk']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $Cod_listadecarrerasFK=utf8_encode($valor['Cod_listadecarrerasFK']);
		  	  $nroRegistro=utf8_encode($valor['nroRegistro']);
			  
			  if($codArancel==""){
			  $totalapagararancel=buscartotalpagarfacturas($anho,$curso,$semestre,$cod_carreraFK);
			  $totalapagararancel=$totalapagararancel+(buscartotalpagarfacturasdeudasanterior($idalumnoFk,$Cod_listadecarrerasFK));
			  $arancel="TODOS";
	          }
			  if($codArancel=="0"){
			  $totalapagararancel=(buscartotalpagarfacturasdeudasanterior($idalumnoFk,$Cod_listadecarrerasFK));
			  $arancel="TODOS";
	          }
			  
		  	  $totales=$totales+$monto;			
		      $totalapagar2=$totalapagararancel+$totalapagar2;
			  $saldo=$totalapagararancel-$monto;
			  $totalsaldo=$totalsaldo+$saldo;
			  
			  
			   $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >			 
				<td style='width:10%;'>".$nombrefilialOrigen."</td>
				<td  style='width:10%;'>".$nombreCarrera."</td>
				<td  style='width:10%;'>".$arancel."</td>
				<td  style='width:5%;'>".$anho."</td>
				<td style='width:5%;'>".$curso."</td>
				<td	style='width:5%;'>".$semestre."</td>
				<td  style='width:15%;'>".$nombrealumno." ".$apellido." </td>
				<td  style='width:10%;'>".$ci."</td>
				<td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format($nroRegistro,'0',',','.') ."</td>
				<td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format($monto,'0',',','.') ."</td>
			   <td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format($totalapagararancel,'0',',','.') ."</td>
			   <td   style='width:5%; color:#fff;background-color:#FF5722;' >". number_format($saldo,'0',',','.') ."</td>
			  </tr>
			  </table>";
			  
		  	
			 
			    	 
		  	
			  
			  
	  }
	  
 }else{
	 
	   $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  style='width:10%;'>No-Encontrado</td>
				<td  style='width:10%;'>No-Encontrado</td>
				<td style='width:10%;'>No-Encontrado</td>
				<td style='width:5%;'>No-Encontrado</td>
				<td  style='width:5%;'>No-Encontrado</td>
				<td style='width:5%;'>No-Encontrado</td>
				<td  style='width:15%;'>No-Encontrado </td>
				<td  style='width:10%;'>".$documento."</td>
				<td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
				<td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td  style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td   style='width:5%; color:#fff;background-color:#FF5722;' >". number_format(0,'0',',','.') ."</td>
			  </tr>
			  </table>";
			  
	 	$informacion =array("1" => "exito","2" => $pagina,"3"=> 0,
"4"=> 0,"5"=> 0,"6"=> 0 ,"7"=> $documento );
echo json_encode($informacion);	
exit;
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,
"4"=> $totales ,"5"=> $totalapagar2 ,"6"=> $totalsaldo ,"7"=> $documento );
echo json_encode($informacion);	
exit;


}


function consultamultipleAnterior($documento,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condicionFiltros="";
	$condicionFilial="";
	
	
	if($documento==""){
		$pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:10%' >".$documento."</td>
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:10%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:10%; color:#fff;background-color:#FF5722;' >". number_format(0,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:10%; color:#fff;background-color:#e22a1d;' >". number_format(0,'0',',','.') ."</td>
			  </tr>
			  </table>";
		
		$informacion =array("1" => "exito","2" => $pagina,"3"=> 0,
"4"=> 0,"5"=> 0,"6"=> 0 ,"7"=> $documento );
echo json_encode($informacion);	
exit;
		
	}else{
		$condicionFiltros=" and alu.ci ='$documento'";
	}
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,cur.cod_carreraFK,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
		,(select count(fac.idfacturaspagadas) from facturaspagadas fac1 where fac.estado='Activo' and fac1.idcursosalumnoFk=fac.idcursosalumnoFk limit 1) as nroRegistro
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen,
(select sum(total) from aranceles ar1  where ar1.cod_carreraFK=cur.cod_carreraFK and ar1.cod_arancel=ar.cod_arancel and ar1.estado='Activo' and ar1.anho=ar.anho and ar1.curso=ar.curso and ar1.semestre=ar.semestre) as totalApagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionFiltros.$condicionFilial.$sqlAranceles.$sqlAnho.$sqlCurso."  group by cur.idalumnoFk,cur.cod_carreraFK,car.cod_filialOringFK";
		 
	 
		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totalpagado=0;
$totalpagar=0;
$totalbalance=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nroRegistro=utf8_encode($valor['nroRegistro']);
		  	  $totalApagar=utf8_encode($valor['totalApagar']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $diferencia=$totalApagar-$monto;
		  	 $totalpagado=$totalpagado+$monto;
		  	 $totalpagar=$totalpagar+$totalApagar;
		  	 $totalbalance=$totalbalance+$diferencia;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro'  doclick='ObtenerDatosPersonalizadosConsulta(this)'  >
			   <td  id='tdcheckboxMasivoConsulta' style='width:2%'  ><input name='checkboxMasivoConsulta' id='$ci' type='checkbox' value='$cod_carreraFK' style='$nombreCarrera'  checked /></td>
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_6' style='width:10%' >".$nombrealumno."</td>
			   <td  id='td_datos_7' style='width:10%' >".$apellido."</td>
			   <td  id='td_datos_8' style='width:10%' >".$ci."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id=''style='width:5%; color:#fff;background-color: #0f5612;' >". number_format($nroRegistro,'0',',','.') ."</td>
			   <td  id='' style='width:10%; color:#fff;background-color: #0f5612;' >". number_format($monto,'0',',','.') ."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:#FF5722;'  >". number_format($totalApagar,'0',',','.') ."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:#e22a1d;' >". number_format($diferencia,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }else{
	 
	 	$pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:10%' >".$documento."</td>
			   <td  id='td_datos_1' style='width:10%' >No-Encontrado</td>
			   <td  id='td_datos_1' style='width:5%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:10%; color:#fff;background-color: #0f5612;' >". number_format(0,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:10%; color:#fff;background-color:#FF5722;' >". number_format(0,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:10%; color:#fff;background-color:#e22a1d;' >". number_format(0,'0',',','.') ."</td>
			  </tr>
			  </table>";
	 	$informacion =array("1" => "exito","2" => $pagina,"3"=> 0,
"4"=> 0,"5"=> 0,"6"=> 0 ,"7"=> $documento );
echo json_encode($informacion);	
exit;
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,
"4"=> $totalpagado,"5"=> $totalpagar,"6"=> $totalbalance ,"7"=> $documento );
echo json_encode($informacion);	
exit;


}

function consultaindividual($anho,$nombre,$NrodeFactura,$NroDocumento,$CodCarreraSeleccionado,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	
	$condicionFilial="";
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	$condicionNroDocumento="";
	if($NroDocumento!=""){
		$condicionNroDocumento=" and alu.ci like '%".$NroDocumento."%'";
	}
	$condicionNroFactura="";
	if($NrodeFactura!=""){
		$condicionNroFactura=" and alu.ci like '%".$NrodeFactura."%'";
	}
	$condicionNombreoApellido="";
	if($nombre!=""){
		$condicionNombreoApellido=" and concat(alu.nombre,' ',alu.apellido) like '%".$nombre."%'";
	}
	$condicionCarrera="";
	if($CodCarreraSeleccionado!=""){
		$condicionCarrera=" and car.Cod_listadecarrerasFK = '".$CodCarreraSeleccionado."'";
	}
	$condicionanho="";
	if($anho!=""){
		$condicionanho=" and cur.anho = '".$anho."'";
	}
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionanho.$condicionNombreoApellido.$condicionNroDocumento.$condicionNroFactura.$condicionCarrera.$condicionFilial.$sqlAranceles.$sqlAnho.$sqlCurso."  group by cur.idalumnoFk,cur.cod_carreraFK,car.cod_filialOringFK";


		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	
		  	 $totales=$totales+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerDatosPersonalizadosConsulta(this)' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_6' style='width:10%' >".$nombrealumno."</td>
			   <td  id='td_datos_7' style='width:10%' >".$apellido."</td>
			   <td  id='td_datos_8' style='width:10%' >".$ci."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:red;' >". number_format($monto,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function consultarporalumnos($idAlumnosFk,$Nombrealumno,$NroDocumento,$codFilial,$Filtro,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condicionFiltros="";
	$condicionFilial="";
	if($Filtro=="1"){
		$condicionFiltros=" and alu.idalumno='$idAlumnosFk'";
	}
	if($Filtro=="2"){
		if($Nombrealumno!="" && $NroDocumento!=""){
		$condicionFiltros=" and (concat(alu.nombre,' ',alu.apellido) like '%".$Nombrealumno."%' or  alu.ci like '%".$NroDocumento."%')";
		}
		if($NroDocumento!=""){
		$condicionFiltros=" and (alu.ci like '%".$NroDocumento."%')";
		}else{
		if($Nombrealumno!=""){
		$condicionFiltros=" and (concat(alu.nombre,' ',alu.apellido) like '%".$Nombrealumno."%')";
		}
		}
	}
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
		,(select count(fac.idfacturaspagadas) from facturaspagadas fac1 where fac.estado='Activo' and fac1.idcursosalumnoFk=fac.idcursosalumnoFk limit 1) as nroRegistro
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionFiltros.$condicionFilial.$sqlAranceles.$sqlAnho.$sqlCurso."  group by cur.idalumnoFk,cur.cod_carreraFK,car.cod_filialOringFK";
		 

		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $nroRegistro=utf8_encode($valor['nroRegistro']);
		  	
		  	 $totales=$totales+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerDatosPersonalizadosConsulta(this)' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_6' style='width:10%' >".$nombrealumno."</td>
			   <td  id='td_datos_7' style='width:10%' >".$apellido."</td>
			   <td  id='td_datos_8' style='width:10%' >".$ci."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:5%; color:#fff;background-color: #0f5612;' >". number_format($nroRegistro,'0',',','.') ."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:red;' >". number_format($monto,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function consultarpornrofactura($NrodeFactura,$CodConceptoSeleccionado,$codFilial,$filtro,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionfactura='';
	 $condicionFilial='';
	 if($filtro=="3"){
		 $condicionfactura=" and  fac.nrofactura like '%".$NrodeFactura."%'  ";
	 }
	 
	 if($filtro=="4"){
		 if($NrodeFactura!="" &&  $CodConceptoSeleccionado!=""){
		 $condicionfactura=" and  fac.nrofactura like '%".$NrodeFactura."%'  and lta.cod_listadearanceles='$CodConceptoSeleccionado'";
		 }
		 if($NrodeFactura!="" ){
		 $condicionfactura=" and  fac.nrofactura like '%".$NrodeFactura."%' ";
		 }else{
		 if($CodConceptoSeleccionado!=""){
		 $condicionfactura=" and lta.cod_listadearanceles='$CodConceptoSeleccionado'";
		 }
		 }
		
	 }
	 
	 if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
		,(select count(fac.idfacturaspagadas) from facturaspagadas fac1 where fac.estado='Activo' and fac1.idcursosalumnoFk=fac.idcursosalumnoFk limit 1) as nroRegistro
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.curso,ar.semestre,ar.anho
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionFilial.$condicionfactura.$sqlAranceles.$sqlAnho.$sqlCurso." group by cur.idalumnoFk,cur.cod_carreraFK,car.cod_filialOringFK,lta.cod_listadearanceles ";
		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
			  
			  
		  	
		  	 $totales=$totales+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerDatosPersonalizadosConsulta(this)' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%' >".$nrofactura."</td>
			   <td  id='' style='width:5%' >".$cf."</td>
			   <td  id='' style='width:10%' >".$anho."</td>
			   <td  id='td_datos_6' style='width:10%' >".$nombrealumno."</td>
			   <td  id='td_datos_7' style='width:10%' >".$apellido."</td>
			   <td  id='td_datos_8' style='width:10%' >".$ci."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:5%' >".$curso."</td>
			   <td  id='' style='width:10%' >".$arancel."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:red;' >". number_format($monto,'0',',','.') ."</td>
			 
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function BuscadorMasivofacturaDetalles($cod_carrera,$documento,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionAlumno='';
	 $condicionFilial='';
	 $condicionCarrera='';
	 
	 
	 if($documento!=""){
		$condicionAlumno=" and alu.ci ='$documento'";
	}
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	if($cod_carrera!=""){
		$condicionCarrera=" and car.cod_carrera ='$cod_carrera'";
	}
	
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.curso,ar.semestre,ar.anho
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionFilial.$condicionAlumno.$condicionCarrera.$sqlAranceles.$sqlAnho.$sqlCurso." 
group by car.cod_filialOringFK,car.cod_carrera,fac.idfacturaspagadas order by car.cod_filialOringFK,car.cod_carrera,ar.anho desc  limit 2000  ";

		 
		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totalPagado=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
			  
			  
		  	
		  	 $totalPagado=$totalPagado+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_1' style='width:5%' >".$anho."</td>
			   <td  id='td_datos_1' style='width:5%' >".$nrofactura."</td>
			   <td  id='td_datos_1' style='width:5%' >".$cf."</td>			   
			   <td  id='td_datos_1' style='width:5%' >".$fecha."</td>			   
			   <td  id='td_datos_1' style='width:5%' >".$nombrealumno."</td>
			   <td  id='td_datos_1' style='width:5%' >".$apellido."</td>
			   <td  id='td_datos_1' style='width:5%' >".$ci."</td>
			   <td  id='td_datos_1' style='width:5%' >".$nombreCarrera."</td>
			   <td  id='td_datos_1' style='width:5%' >".$curso."</td>
			   <td  id='td_datos_1' style='width:5%' >".$arancel."</td>
			   <td  id='td_datos_1' style='width:5%;color:#fff;background-color: #0f5612;'>". number_format($monto,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:5%;color:#fff;background-color: #FF5722;' ></td>
			   <td  id='td_datos_1' style='width:5%;color:#fff;background-color: #e22a1d;' ></td>
			 
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
	 $totalApagar=buscarbalancesporarancelesdelalumno($documento,$cod_carrera,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso);
	 $balance=$totalApagar-$totalPagado;
	   $pagina.="<table class='tableRegistroSearch' style='width:100%;background-color:#fff' ><tr>
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
         <td   style='width:5%'></td>
         <td   style='width:5%'></td>
         <td   style='width:5%'></td>
         <td   style='width:5%'></td>
         <td   style='width:5%'></td>
         <td   style='display:none'></td>
		 <td  style='width:5%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalPagado,'0',',','.')."</td>
         <td  style='width:5%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalApagar,'0',',','.')."</td>
         <td   style='width:5%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($balance,'0',',','.')."</td>
		 </tr></table>";
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> $documento,"5"=> $cod_carrera,"6"=> $totalPagado );
echo json_encode($informacion);	
exit;


}

function buscarbalancesporarancelesdelalumno($documento,$cod_carrera,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionFilial='';
	 $condicionCarrera='';
	 
	
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	if($codFilial!=""){
		$condicionCarrera=" and car.cod_carrera ='$cod_carrera'";
	}
	if($documento!=""){
		$condicionAlumno=" and alu.ci ='$documento'";
	}
			$sql= "Select 
(select sum(total) from aranceles ar1  where ar1.cod_carreraFK=cur.cod_carreraFK and ar1.cod_arancel=ar.cod_arancel and ar1.estado='Activo' and ar1.anho=ar.anho and ar1.curso=ar.curso and ar1.semestre=ar.semestre) as totalApagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionFilial.$condicionAlumno.$condicionCarrera.$sqlAranceles.$sqlAnho.$sqlCurso." group by  cur.idalumnoFk,cur.cod_carreraFK,lta.cod_listadearanceles,car.cod_filialOringFK ";
		 
		 	 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $totalApagar=$valor['totalApagar'];
		  	 
			  
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
return $totalApagar;


}

function BuscadorMasivoConsultaBalances($cod_carrera,$documento,$codFilial,$sqlAranceles,$sqlAnho,$sqlCurso)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionAlumno='';
	 $condicionFilial='';
	 $condicionCarrera='';
	 
	 $totalpagado=0;
$totalpagar=0;
$totalbalance=0;
	 if($documento!=""){
		$condicionAlumno=" and alu.ci ='$documento'";
	}
	if($codFilial!=""){
		$condicionFilial=" and car.cod_filialOringFK ='$codFilial'";
	}
	if($cod_carrera!=""){
		$condicionCarrera=" and car.cod_carrera ='$cod_carrera'";
	}
	
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
		,(select sum(total) from aranceles ar1  where ar1.cod_carreraFK=cur.cod_carreraFK and ar1.cod_arancel=ar.cod_arancel and ar1.estado='Activo' and ar1.anho=ar.anho and ar1.curso=ar.curso and ar1.semestre=ar.semestre) as totalApagar
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.curso,ar.semestre,ar.anho
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionFilial.$condicionAlumno.$condicionCarrera.$sqlAranceles.$sqlAnho.$sqlCurso." 
group by car.cod_filialOringFK,car.cod_carrera,lta.cod_listadearanceles, ar.anho, ar.curso 
order by car.cod_filialOringFK,car.cod_carrera,lta.cod_listadearanceles, ar.curso desc  limit 2000";
		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totalPagado=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $totalApagar=utf8_encode($valor['totalApagar']);
			  
			  $diferencia=$totalApagar-$monto;
		  	 $totalpagado=$totalpagado+$monto;
		  	 $totalpagar=$totalpagar+$totalApagar;
		  	 $totalbalance=$totalbalance+$diferencia;
		  	
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' >".$nombrefilialOrigen."</td>
			   <td  id='td_datos_1' style='width:5%' >".$anho."</td>
			   <td  id='td_datos_1' style='width:5%' >".$nombrealumno."</td>
			   <td  id='td_datos_1' style='width:5%' >".$apellido."</td>
			   <td  id='td_datos_1' style='width:5%' >".$ci."</td>
			   <td  id='td_datos_1' style='width:5%' >".$nombreCarrera."</td>
			   <td  id='td_datos_1' style='width:5%' >".$curso."</td>
			   <td  id='td_datos_1' style='width:5%' >".$arancel."</td>
			   <td  id='td_datos_1' style='width:5%;color:#fff;background-color: #0f5612;'>". number_format($monto,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:5%;color:#fff;background-color: #FF5722;' >". number_format($totalApagar,'0',',','.') ."</td>
			   <td  id='td_datos_1' style='width:5%;color:#fff;background-color: #e22a1d;'>". number_format($diferencia,'0',',','.') ."</td>
			 
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
	
	   $pagina.="<table class='tableRegistroSearch' style='width:100%;background-color:#fff' ><tr>
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
		 <td  style='width:5%'></td> 
         <td   style='width:5%'></td>
         <td   style='width:5%'></td>
         <td   style='display:none'></td>
         <td   style='display:none'></td>
         <td   style='display:none'></td>
		 <td  style='width:5%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagado,'0',',','.')."</td>
         <td  style='width:5%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagar,'0',',','.')."</td>
         <td   style='width:5%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalbalance,'0',',','.')."</td>
		 </tr></table>";
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> $documento,"5"=> $cod_carrera,"6"=> $totalpagado );
echo json_encode($informacion);	
exit;


}

function buscarhistorialDocumento($NroDocumento,$codCarrera,$nrofactura,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicioncarre="";
	 if($codCarrera!=""){
		  $condicioncarre=" and lt.Cod_listadecarreras='$codCarrera'";
	 }
	 $condicioNroFactura="";
	 if($nrofactura!=""){
		  $condicioNroFactura=" and fac.nrofactura like '%".$nrofactura."%'";
	 }
	 $condicioAnho="";
	 if($anho!=""){
		  $condicioAnho=" and ar.anho = '$anho'";
	 }
	 
	
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,cod_listadearancelesFk,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.anho,ar.semestre,ar.curso
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and alu.ci='$NroDocumento' ".$condicioncarre.$condicioNroFactura.$condicioAnho." group by car.cod_filialOringFK,cur.cod_carreraFK,fac.idfacturaspagadas order by ar.anho desc";
		 

  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	
		  	
		  	 $totales=$totales+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%' >".$anho."</td>
			   <td  id='' style='width:10%' >".$nrofactura."</td>
			   <td  id='' style='width:10%' >".$cf."</td>
			   <td  id='' style='width:10%' >".$fecha."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:10%' >".$curso."</td>
			   <td  id='' style='width:10%' >".$arancel."</td>
			   <td  id='' style='width:5%;color:#fff;background-color: #0f5612;' >". number_format($monto,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}


function historialAgrupadoPorCarrera($NroDocumento,$codCarrera,$nrofactura,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicioncarre="";
	 if($codCarrera!=""){
		  $condicioncarre=" and lta.cod_listadearanceles='$codCarrera'";
	 }
	 $condicioNroFactura="";
	 if($nrofactura!=""){
		  $condicioNroFactura=" and fac.nrofactura like '%".$nrofactura."%'";
	 }
	 $condicioAnho="";
	 if($anho!=""){
		  $condicioAnho=" and ar.anho = '$anho'";
	 }
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.anho,ar.semestre,ar.curso
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and alu.ci='$NroDocumento' ".$condicioncarre.$condicioNroFactura.$condicioAnho." group by car.cod_filialOringFK,cur.cod_carreraFK order by ar.anho desc";
		 

		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	
		  	
		  	 $totales=$totales+$monto;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%' >".$anho."</td>
			   <td  id='' style='width:10%' >".$nrofactura."</td>
			   <td  id='' style='width:10%' >".$cf."</td>
			   <td  id='' style='width:10%' >".$fecha."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:10%' >".$curso."</td>
			   <td  id='' style='width:10%' >".$arancel."</td>
			   <td  id='' style='width:5%;color:#fff;background-color: #0f5612;' >". number_format($monto,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function historialAgrupadoPorConcepto($NroDocumento,$codCarrera,$nrofactura,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicioncarre="";
	 if($codCarrera!=""){
		  $condicioncarre=" and lta.cod_listadearanceles='$codCarrera'";
	 }
	 $condicioNroFactura="";
	 if($nrofactura!=""){
		  $condicioNroFactura=" and fac.nrofactura like '%".$nrofactura."%'";
	 }
	 $condicioAnho="";
	 if($anho!=""){
		  $condicioAnho=" and ar.anho = '$anho'";
	 }
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk,car.cod_carrera,car.cod_filialOringFK 
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.anho,ar.semestre,ar.curso,
(select sum(total) from aranceles ar1  where ar1.cod_carreraFK=cur.cod_carreraFK and ar1.cod_arancel=ar.cod_arancel and ar1.estado='Activo' and ar1.anho=ar.anho and ar1.curso=ar.curso and ar1.semestre=ar.semestre) as totalApagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and alu.ci='$NroDocumento'  ".$condicioncarre.$condicioNroFactura.$condicioAnho." group by car.cod_filialOringFK,cur.cod_carreraFK,ar.cod_arancel order by ar.anho desc";
		 

		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$totalpagado=0;
$totalpagar=0;
$totalbalance=0;
$totales=0;
$controlTitulo1="";
$controlTitulo2="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $totalApagar=utf8_encode($valor['totalApagar']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
			
			$paginatotales="";
 if($controlTitulo1!=$cod_carrera || $controlTitulo2!=$cod_filialOringFK){
	 if($totalpagado>0){
		 $paginatotales="<table class='tableRegistroSearch' style='width:100%;background-color:#fff' ><tr>
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
         <td   style='display:none'></td>
         <td   style='display:none'></td>
         <td   style='display:none'></td>
		 <td  style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagado,'0',',','.')."</td>
         <td  style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagar,'0',',','.')."</td>
         <td   style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalbalance,'0',',','.')."</td>
		 </tr></table>";

	 }
	$controlTitulo1=$cod_carrera;
	$controlTitulo2=$cod_filialOringFK;
	 $totalpagar=0; 
	 $totalpagado=0; 
	 $diferencia=0; 
 }
			
		  	
		  	  $diferencia=$totalApagar-$monto;
		  	 $totalpagado=$totalpagado+$monto;
		  	 $totalpagar=$totalpagar+$totalApagar;
		  	 $totalbalance=$totalbalance+$diferencia;
		  	
			  $pagina.=$paginatotales."<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%' >".$anho."</td>
			   <td  id='' style='width:10%' >".$fecha."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:10%' >".$curso."</td>
			   <td  id='' style='width:10%' >".$arancel."</td>
			  <td  id='' style='width:5%;color:#fff;background-color: #0f5612;' >". number_format($monto,'0',',','.') ."</td>
			   <td  id='' style='width:10%; background-color: #FF5722;  color: #fff; ' >". number_format($totalApagar,'0',',','.') ."</td>
			   <td  id='' style='width:10%; background-color: #e22a1d;  color: #fff;  ' >". number_format($diferencia,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
	  $pagina.="<table class='tableRegistroSearch' style='width:100%;background-color:#fff' ><tr>
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td>          
         <td   style='display:none'></td>
         <td   style='display:none'></td>
         <td   style='display:none'></td>
		 <td  style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagado,'0',',','.')."</td>
         <td  style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagar,'0',',','.')."</td>
         <td   style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalbalance,'0',',','.')."</td>
		 </tr></table>";
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


}


function buscarBalanceporanho($NroDocumento,$codCarrera,$nrofactura,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicioncarre="";
	 if($codCarrera!=""){
		  $condicioncarre=" and lta.cod_listadearanceles='$codCarrera'";
	 }
	 $condicioNroFactura="";
	 if($nrofactura!=""){
		  $condicioNroFactura=" and fac.nrofactura like '%".$nrofactura."%'";
	 }
	 $condicioAnho="";
	 if($anho!=""){
		  $condicioAnho=" and ar.anho = '$anho'";
	 }
		$sql= "Select fac.idfacturaspagadas, fac.nrofactura, fac.cf, sum(fac.monto) as  monto, fac.idcursosalumnoFk, fac.fecha,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,lt.nombre nombreCarrera
,fl1.nombre as nombrefilialOrigen
,ar.anho,ar.semestre,ar.curso,
(select sum(total) from aranceles ar1  where ar1.cod_carreraFK=cur.cod_carreraFK and ar1.cod_arancel=ar.cod_arancel and ar1.estado='Activo' and ar1.anho=ar.anho and ar1.curso=ar.curso and ar1.semestre=ar.semestre) as totalApagar
from facturaspagadas fac inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join carrera car on cur.cod_carreraFK=car.cod_carrera
inner join filial fl1 on fl1.cod_filial=car.cod_filialOringFK 
inner join listadecarreras lt on lt.Cod_listadecarreras=car.Cod_listadecarrerasFK
inner join listafacultad ldf on ldf.cod_listafacultad=car.cod_listafacultadFk
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' and alu.ci='$NroDocumento' ".$condicioncarre.$condicioNroFactura.$condicioAnho." group by car.cod_filialOringFK,cur.cod_carreraFK,ar.cod_arancel,ar.anho order by ar.anho desc";
		 

		 
  $stmt = $mysqli->prepare($sql);
 if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$totalpagado=0;
$totalpagar=0;
$totalbalance=0;
$totales=0;
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		      $idfacturaspagadas=$valor['idfacturaspagadas'];
		  	  $nrofactura=utf8_encode($valor['nrofactura']);
		  	  $cf=utf8_encode($valor['cf']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $idcursosalumnoFk=utf8_encode($valor['idcursosalumnoFk']);
		  	  $fecha=utf8_encode($valor['fecha']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $cod_arancelFk=utf8_encode($valor['cod_arancelFk']);
		  	  $puntoexpedicionfk=utf8_encode($valor['puntoexpedicionfk']);
		  	  $nombrealumno=utf8_encode($valor['nombrealumno']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $ci=utf8_encode($valor['ci']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $totalApagar=utf8_encode($valor['totalApagar']);
		  	
		  	
		  	  $diferencia=$totalApagar-$monto;
		  	 $totalpagado=$totalpagado+$monto;
		  	 $totalpagar=$totalpagar+$totalApagar;
		  	 $totalbalance=$totalbalance+$diferencia;
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='' style='width:10%' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%' >".$anho."</td>
			   <td  id='' style='width:10%' >".$nombreCarrera."</td>
			   <td  id='' style='width:10%' >".$curso."</td>
			   <td  id='' style='width:10%' >".$arancel."</td>
			  <td  id='' style='width:10%; color:#fff;background-color:#0f5612;' >". number_format($monto,'0',',','.') ."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:#FF5722;' >". number_format($totalApagar,'0',',','.') ."</td>
			   <td  id='' style='width:10%; color:#fff;background-color:#e22a1d;' >". number_format($diferencia,'0',',','.') ."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
	  $pagina.="<table class='tableRegistroSearch' style='width:100%;background-color:#fff' ><tr>
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
		 <td  style='width:10%'></td> 
         <td   style='display:none'></td>
         <td   style='display:none'></td>
		 <td  style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagado,'0',',','.')."</td>
         <td  style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalpagar,'0',',','.')."</td>
         <td   style='width:10%;color:#000;background-color: #fff;font-weight:bold;font-size:13px'>".number_format($totalbalance,'0',',','.')."</td>
		 </tr></table>";
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> number_format($totalpagar,'0',',','.'),"4"=> number_format($totalbalance,'0',',','.') );
echo json_encode($informacion);	
exit;


}


function buscarpuntoexpedicion($idFilialFactura,$idCarreraFactura)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		 
		$sql= "Select put.idpuntoexpedicion,  put.cod_filialFk,put.codFilialFKPunto, 
 put.NroInicio, put.NroFin, put.estado, put.fechaactualizacion,
		fl1.puntoexpedicion,
        lts.nro as nrocaja,
		fl1.nombre as nombrefilialOrigen
        from puntoexpedicion put 
		inner join filial fl1 on fl1.cod_filial=put.cod_filialFk 
         inner join listadocaja lts on lts.idcaja=codcajaFk
		where  put.cod_filialFk='$idFilialFactura'   and put.estado='Activo'  order by put.fechaactualizacion asc";
		
		
		// echo($sql);
		// exit;
		 
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
		  	  $cod_filialFk=utf8_encode($valor['cod_filialFk']);
		  	  $nrocaja=utf8_encode($valor['nrocaja']);
		  	  $NroInicio=utf8_encode($valor['NroInicio']);
		  	  $NroFin=utf8_encode($valor['NroFin']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $fechaactualizacion=utf8_encode($valor['fechaactualizacion']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
		  	  $nombrefilialOrigen=utf8_encode($valor['nombrefilialOrigen']);
		  	  $puntoexpedicion1=$puntoexpedicion."-".$nrocaja;
		  	
		  	$pagina.="<option id='$idpuntoexpedicion' value='$puntoexpedicion1'  >$puntoexpedicion1</option>";
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}

// function controlnrofactura($nrofacturacontrol,$nrofactura,$codPuntoExpe)
// {
	// $mysqli=conectar_al_servidor();
	 // $pagina='';
	
		// $sql= "Select count(nrofactura) as nro from facturaspagadas where nrofactura='$nrofactura' and estado='Activo'  ";

   // $stmt = $mysqli->prepare($sql);
  

// if ( ! $stmt->execute()) {
   // echo "Error";
   // exit;
// }
// $nro="1";
	// $result = $stmt->get_result();
 // $valor= mysqli_num_rows($result);
 // $totalresouesta= $valor;
 // if ($valor>0)
 // {
	  // while ($valor= mysqli_fetch_assoc($result))
	  // {
		  
		  
		  
		    
		      // $nro=$valor['nro'];
		  	   // $nro=$nro+1;
			  
			  
	  // }
	  
 // }

	
 
 
 
 	// $consulta= "Select count(*) from puntoexpedicion where idpuntoexpedicion='$codPuntoExpe' and  NroInicio<='$nrofacturacontrol' and NroFin>='$nrofacturacontrol' limit 1";
	
	// $stmt = $mysqli->prepare($consulta);
// if ( ! $stmt->execute()) {
	// $informacion =array("1" => "error");
	// echo json_encode($informacion);	
	// exit;
// }

// $valor = 0;
// $stmt->bind_result($valor);
// while ($stmt->fetch()) { 
   
	 // $valor =$valor;
// }
// $controlNroFactura="";
// if($valor==0)
// {
	// $controlNroFactura="facturainvalido";
// } 
 
  // if($nrofactura<10){
	 // $nrofactura="00000".$nrofactura;
 // }else{
 // if($nrofactura<100){
	 // $nrofactura="0000".$nrofactura;
 // }else{
	 // if($nrofactura<1000){
	 // $nrofactura="000".$nrofactura;
    // }else{
		// if($nrofactura<10000){
	 // $nrofactura="00".$nrofactura;
     // }else{
		// if($nrofactura<100000){
	 // $nrofactura="0".$nrofactura;
     // } 
	 // }
	// } 
 // }
 // }
 
// $informacion =array("1" => "exito","2" => $nro,"3"=>$controlNroFactura,"4"=>$nrofactura);
// echo json_encode($informacion);	
// exit;


// }


function controlnrofactura($nrofacturacontrol,$nrofactura,$nrofacturab,$codPuntoExpe)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';

		$sql= "Select count(nrofactura) as nro from facturaspagadas where nrofactura='$nrofactura' and estado='Activo'  ";
      
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$nro="1";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		      $nro=$valor['nro'];
		  	  $nro=$nro+1;
			  
			  
	  }
	  
 }

	$consulta= "Select count(*) from puntoexpedicion where idpuntoexpedicion='$codPuntoExpe' and  NroInicio<='$nrofacturacontrol' and NroFin>='$nrofacturacontrol' and estado='Activo' ";

// echo($consulta);
// exit;

	$stmt = $mysqli->prepare($consulta);
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
$controlNroFactura="";
if($valor==0)
{
	$controlNroFactura="facturainvalido";
} 
if($nro>1)
{
	$controlNroFactura="facturarepetida";
} 
 
 
 
$informacion =array("1" => "exito","2" => $nro,"3"=>$controlNroFactura,"4"=>$nrofacturab);
echo json_encode($informacion);	
exit;


}



function buscarnrofacturas($codPuntoExpe)
{
	$mysqli=conectar_al_servidor();
	 $nrofactura='facturainvalido';
	
 	$sql= "Select NroInicio,NroFin,
    (Select count(nrofactura) as nro from facturaspagadas where puntoexpedicionfk=idpuntoexpedicion) as facturaspagadas
	from puntoexpedicion where idpuntoexpedicion='$codPuntoExpe' and estado='Activo'  limit 1";

   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$nro="1";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		      $nrofactura=$valor['NroInicio'];
		      $facturaspagadas=$valor['facturaspagadas'];
		      $NroFin=$valor['NroFin'];
		  	  $nrofactura=$nrofactura+$facturaspagadas+1;
			  if($nrofactura>=$NroFin){
				 $nrofactura="facturainvalido" ;
			  }else{
 if($nrofactura<10){
	 $nrofactura="000000".$nrofactura;
 }else{
 if($nrofactura<100){
	 $nrofactura="00000".$nrofactura;
 }else{
	 if($nrofactura<1000){
	 $nrofactura="0000".$nrofactura;
    }else{
		if($nrofactura<10000){
	 $nrofactura="000".$nrofactura;
     }else{
		if($nrofactura<100000){
	 $nrofactura="00".$nrofactura;
     }else{
		 $nrofactura="0".$nrofactura; 
	 }	 
	 }
	} 
 }
 }
			}
	  
 }
 }
 
 
 $sql= "Select count(nrofactura) as nro from facturaspagadas where nrofactura='$nrofactura' ";

   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$nro="1";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		      $nro=$valor['nro'];
		  	   $nro=$nro+1;
			  
			  
	  }
	  
 }

 
$informacion =array("1" => "exito","2" => $nro,"3"=>$nrofactura);
echo json_encode($informacion);	
exit;


}

function controldeudaanterio($idalumnoFk,$cod_carreraFK,$anho,$semestre,$curso)
{
	$mysqli=conectar_al_servidor();
	 $idcursosalumno='';
	
		$sql= "Select idcursosalumno from cursosalumno
		where idalumnoFk='$idalumnoFk' and cod_carreraFK='$cod_carreraFK' and anho='$anho' and semestre='$semestre' and curso='$curso' ";

	
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$nro="1";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		      $idcursosalumno=$valor['idcursosalumno'];
		  	  
			  
			  
	  }
	  
 }

	
 return $idcursosalumno;
 


}



function obtenercodcarrerafk($idcursosalumno)
{
	$mysqli=conectar_al_servidor();
	 $cod_carreraFK='';
	
		$sql= "Select cod_carreraFK from cursosalumno
		where idcursosalumno='$idcursosalumno' ";

   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$nro="1";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		      $cod_carreraFK=$valor['cod_carreraFK'];
		  	  
			  
			  
	  }
	  
 }

	
 return $cod_carreraFK;
 


}


function obtenercodcodAlumnofk($idcursosalumno)
{
	$mysqli=conectar_al_servidor();
	 $idalumnoFk='';
	
		$sql= "Select idalumnoFk from cursosalumno
		where idcursosalumno='$idcursosalumno' ";

   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$nro="1";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		    
		      $idalumnoFk=$valor['idalumnoFk'];
		  	  
			  
			  
	  }
	  
 }

	
 return $idalumnoFk;
 


}










verificar($funt);
?>
