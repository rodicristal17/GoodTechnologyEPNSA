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

	// buscarnivel($user,"CARGAR FACTURA"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"CARGAR FACTURA"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"CARGAR FACTURA"," buscar='SI' ");
// }
// if($funt=="buscarreportfacturascargadas"){

	// buscarnivel($user,"FACTURAS CARGADAS"," informes='SI' ");
	// $control=controldefilial($user,"DATOS DE OTRAS FILIAL"," accion='SI' ");
	// if($control==0){
		// $codFilial=$_POST['codFilial'];
        // $codFilial = utf8_decode($codFilial);
		// $codFilialFK=buscarmifilialFK($user);
		// if($codFilial!=$codFilialFK){
			// $informacion =array("1" => "FKINCO");
            // echo json_encode($informacion);	
            // exit;
		// }
		
	// }
// }

// if($funt=="consultarporalumnos" || $funt=="consultarpornrofactura"|| $funt=="consultaindividual" ){

	// buscarnivel($user,"CONSULTA INDIVIDUAL"," informes='SI' ");
	// $control=controldefilial($user,"DATOS DE OTRAS FILIAL"," accion='SI' ");
	// if($control==0){
		// $codFilial=$_POST['codFilial'];
        // $codFilial = utf8_decode($codFilial);
		// $codFilialFK=buscarmifilialFK($user);
		// if($codFilial!=$codFilialFK){
			// $informacion =array("1" => "FKINCO");
            // echo json_encode($informacion);	
            // exit;
		// }
		
	// }
// }
// if($funt=="ConsultaMasivo"){

	// buscarnivel($user,"CONSULTA MULTIPLE"," informes='SI' ");
	// $control=controldefilial($user,"DATOS DE OTRAS FILIAL"," accion='SI' ");
	// if($control==0){
		// $codFilial=$_POST['codFilial'];
        // $codFilial = utf8_decode($codFilial);
		// $codFilialFK=buscarmifilialFK($user);
		// if($codFilial!=$codFilialFK){
			// $informacion =array("1" => "FKINCO");
            // echo json_encode($informacion);	
            // exit;
		// }
		
	// }
// }
// if($funt=="BuscadorMasivofacturaDetalles"){

	// buscarnivel($user,"INFORMES DETALLADO POR FACTURA"," informes='SI' ");
// }
// if($funt=="BuscadorMasivoConsultaBalances"){

	// buscarnivel($user,"INFORMES DETALLADO POR ANHO"," informes='SI' ");
// }





	
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
	
	cargarcobranzas($tipoComprobante,$controlnrofactura,$nrofactura,$cf,$idcursosalumnoFk,$fecha,$puntoexpedicionfk,$estadofactura);

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
$estadofactura=$_POST['estadofactura'];
$estadofactura = utf8_decode($estadofactura);
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
buscarreportfacturascargadas($anho,$curso,$semestre,$nrofactura,$documento,$alumno,$fecha1,$fecha2,$codFilial,$codArancel,$codCarrera,$estadofactura,$ordenby);

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

function cargarcobranzas($tipoComprobante,$controlnrofactura,$nrofactura,$cf,$idcursosalumnoFk,$fecha,$puntoexpedicionfk,$estadofactura)
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
	
	

 $consulta="insert into facturaspagadas (tipo_comprobante,curso,anho,semestre,controlnrofactura,estadofactura,Detalles, nrofactura, cf, monto, idcursosalumnoFk, fecha, estado, cod_arancelFk, puntoexpedicionfk,cod_puntoexpedicionFK) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssssssss';
    $stmt->bind_param($ss,$tipoComprobante,$curso,$anho,$semestre,$controlnrofactura,$estadofactura, $detalles ,$nrofactura, $cf, $monto, $idcursosalumnoFk, $fecha, $estado, $cod_arancelFk, $puntoexpedicionfk, $puntoexpedicionfk); 
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

$informacion =array("1" => "exito");
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
	
	
		$sql= "Select cur.anho, ifnull((select sum(fac.monto) from facturaspagadas fac where fac.idcursosalumnoFk='$idcursosalumnoFk' and  fac.cod_arancelFk = '$cod_arancelFk' and fac.estado='Activo' and  fac.estadofactura='Activo' ),0) as totalpagado,
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
			   <td  id='td_datos_1' style='width:5%' ><input  onclick='selectCuotaPagarCobranzas()' style='$a' name='checkboxDerechoCuotaArancel' type='checkbox'   value='$restante'  /></td>
			   <td  id='td_datos_2' style='width:95%' >CUOTA  ".$MES." - ".$titulop."</td>
			   <td  id='td_datos_3' style='display:none' >$contadorPendiente</td>
			   <td  id='td_datos_4' style='display:none' > - ".$MES.$titulop."</td>
			   <td  id='td_datos_5' style='display:none' >".number_format($montoapagar,'0',',','.')."</td>
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




function buscarreportfacturascargadas($anho,$curso,$semestre,$nrofactura,$documento,$alumno,$fecha1,$fecha2,$codFilial,$codArancel,$codCarrera,$estadofactura,$ordenby)
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
		$condicionfiltro3=" and (concat(alu.nombre,' ',alu.apellido,) like '%".$alumno."%' ) ";
	}
	$condicionestado="";
	if($estadofactura!=""){
		$condicionestado=" and estadofactura= '".$estadofactura."' ";
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
	
		$sql= "Select fac.controlnrofactura,fac.Detalles,fac.idfacturaspagadas, fac.nrofactura, fac.cf, IFNULL(sum(fac.monto),0) as  monto, fac.idcursosalumnoFk, fac.fecha,estadofactura,fac.fecha_insercion,
		fac.estado, fac.cod_arancelFk, fac.puntoexpedicionfk,fac.anho,fac.semestre,fac.curso
,alu.nombre as nombrealumno,alu.apellido,alu.ci
,lta.nombre as arancel
,fl1.nombre as nombrefilialOrigen
from facturaspagadas fac 
inner join aranceles ar on ar.cod_arancel=fac.cod_arancelFk
inner join puntoexpedicion pt on pt.idpuntoexpedicion=fac.puntoexpedicionfk
inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk 
inner join filial fl1 on fl1.cod_filial=pt.cod_filialFk 
inner join alumno alu on alu.idalumno=cur.idalumnoFk
where fac.estado='Activo' ".$condicionsemestre.$condicioncurso.$condicionanho.$condicionestado.$condicionCarrera.$condicionFilial.$condicionConcepto.$condicionfiltro1.$condicionfiltro2.$condicionfiltro3.$condicionfecha." group by fac.idfacturaspagadas ".$oderby;


echo($sql);
exit;

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
			  <td  id='' style='width:10%;".$styleorden2."' >".$nombrefilialOrigen."</td>
			   <td  id='' style='width:10%;".$styleorden4."' >".$arancel."</td>
			   	<td  id='' style='width:10%' >".$Detalles."</td>
				 <td  id='td_datos_1' style='width:10%;".$styleorden5."' >".$nrofactura."-".$cf."</td>
			   	<td  id='' style='width:5%;".$styleorden6."' >".$anho."</td>
			   	<td  id='' style='width:5%;".$styleorden7."' >".$curso."</td>
			   	<td  id='' style='width:5%;".$styleorden8."' >".$semestre."</td>			  
			   <td  id='' style='width:5%' >".$ci."</td>
			   <td  id='' style='width:5%' >".$nombrealumno." ".$apellido."</td>
			   <td  id='' style='width:5%;display:none' >".$nombrealumno."</td>
			   <td  id='' style='width:5%;display:none' >".$apellido."</td>
			   <td  id='' style='width:5%;".$styleorden1."' >".$fecha."</td>			   
			   <td  id='' style='width:5%' >". number_format($monto,'0',',','.') ."</td>		   
			    <td  id='' style='width:5%' >".$estadofactura."</td>
				<td  id='' style='width:5%' >".$fecha_insercion."</td>
			   </tr>
			   </table>";
			    	
// $consulta="Update facturaspagadas set anho='".$anho."', curso='".$curso."', semestre='".$semestre."' where idfacturaspagadas='".$idfacturaspagadas."'";	
	// $stmt = $mysqli->prepare($consulta);
   
// if (!$stmt->execute()) {
// echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
// exit;
// }   
		  	
			  
			  
	  }
	  
 }
 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> number_format($totales,'0',',','.') );
echo json_encode($informacion);	
exit;


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