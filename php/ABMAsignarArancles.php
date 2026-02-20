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





	
if($funt=="nuevo" || $funt=="editar" )
{
	
	
	
	$cod_arancel=$_POST['idAbm'];
    $cod_arancel = utf8_decode($cod_arancel);
	$monto=$_POST['monto'];
    $monto = quitarseparadormiles($monto);


	
	$costo=$_POST['costo'];
    $costo = quitarseparadormiles($costo);


	$cantidad=$_POST['cantidad'];
    $cantidad = utf8_decode($cantidad);
	$total=$_POST['total'];
    $total = quitarseparadormiles($total);
	$cod_carreraFK=$_POST['cod_carreraFK'];
    $cod_carreraFK = utf8_decode($cod_carreraFK);
	$cod_listadearancelesFk=$_POST['cod_listadearancelesFk'];
    $cod_listadearancelesFk = utf8_decode($cod_listadearancelesFk);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$tipo=$_POST['tipo'];
    $tipo = utf8_decode($tipo);
	$codFilialFk=$_POST['codFilialFk'];
    $codFilialFk = utf8_decode($codFilialFk);
	$arancelname=$_POST['arancelname'];
    $arancelname = utf8_decode($arancelname);
	abm($costo,$arancelname,$codFilialFk,$tipo,$cod_arancel,$monto,$cantidad,$total,$cod_carreraFK,$cod_listadearancelesFk,$estado,$anho,$semestre,$curso,$funt);

}

if($funt=="crearmasivo" )
{
	
	
	
	$codFilial=$_POST['codFilial'];
    $codFilial = utf8_decode($codFilial);
	$cod_listadearancelesFk=$_POST['cod_listadearancelesFk'];
    $cod_listadearancelesFk = utf8_decode($cod_listadearancelesFk);
	$monto=$_POST['monto'];
    $monto = quitarseparadormiles($monto);
	$cant=$_POST['cant'];
    $cant = utf8_decode($cant);
	$total=$_POST['total'];
    $total = quitarseparadormiles($total);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$codcarrera=$_POST['codcarrera'];
    $codcarrera = utf8_decode($codcarrera);
	$arancelname=$_POST['arancelname'];
    $arancelname = utf8_decode($arancelname);
	$tipoarancel=$_POST['tipoarancel'];
    $tipoarancel = utf8_decode($tipoarancel);
	crearmasivo($tipoarancel,$arancelname,$codcarrera,$codFilial,$cod_listadearancelesFk,$monto,$cant,$total,$anho,$semestre,$curso);

}

if($funt=="buscar1")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$monto=$_POST['monto'];
$monto = utf8_decode($monto);
$codconcepto=$_POST['codconcepto'];
$codconcepto = utf8_decode($codconcepto);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
buscar1($estado,$codCarrera,$codFilial,$anho,$semestre,$curso,$monto,$codconcepto,$ordenby);
}
if($funt=="buscar2")
{
$codFilial=$_POST['codFilial'];
$codFilial = utf8_decode($codFilial);
$codConcepto=$_POST['codConcepto'];
$codConcepto = utf8_decode($codConcepto);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
if($codFilial==""){
 $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilial=buscarmifilialFK($user);
		
	}
}
buscar2($estado,$codFilial,$codConcepto,$ordenby);
}

if($funt=="buscarvistaCobrarAranceles")
{
$cod_carrera=$_POST['cod_carrera'];
$cod_carrera = utf8_decode($cod_carrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = ($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$idAsignarAlumnosFk=$_POST['idAsignarAlumnosFk'];
$idAsignarAlumnosFk = utf8_decode($idAsignarAlumnosFk);
$idalumnofk=$_POST['idalumnofk'];
$idalumnofk = utf8_decode($idalumnofk);
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
buscarvistaCobrarAranceles($cod_carrera,$anho,$curso,$semestre,$buscar,$idAsignarAlumnosFk,$idalumnofk,$tipo);
}

if($funt=="buscarvista")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$cod_carrera=$_POST['cod_carrera'];
$cod_carrera = utf8_decode($cod_carrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
buscarvista($buscar,$cod_carrera,$anho,$curso,$semestre,$tipo);
}
if($funt=="buscarvistaListFacturaTipo2")
{
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
buscarvistaListFacturaTipo2($tipo);
}

if($funt=="buscarvistaListFactura")
{

$cod_carrera=$_POST['cod_carrera'];
$cod_carrera = utf8_decode($cod_carrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
buscarvistaListFactura($cod_carrera,$anho,$curso,$semestre,$tipo);
}

if($funt=="buscarcascadaCarrerasArancelesAsignados1")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
buscarcascadaCarrerasArancelesAsignados1($estado,$codfilial);
}

if($funt=="buscarcascadaTipoArancelesAsignados1")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
buscarcascadaTipoArancelesAsignados1($estado,$codfilial,$codcarrera);
}

if($funt=="buscarcascadaArancelGeneralArancelesAsignados1")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);

buscarcascadaArancelGeneralArancelesAsignados1($estado,$codfilial,$codcarrera);
}


if($funt=="buscarcascadaAnhoArancelesAsignados1")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
buscarcascadaAnhoArancelesAsignados1($estado,$codfilial,$codcarrera);
}

if($funt=="buscarcascadaCursoArancelesAsignados1")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
buscarcascadaCursoArancelesAsignados1($estado,$codfilial,$codcarrera,$anho);
}

if($funt=="buscarcascadaSemestreArancelesAsignados1")
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
buscarcascadaSemestreArancelesAsignados1($estado,$codfilial,$codcarrera,$anho,$curso);
}

if($funt=="buscarcascadaArancelArancelesAsignados1")
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
buscarcascadaArancelArancelesAsignados1($estado,$codfilial,$codcarrera,$anho,$curso,$semestre);
}

}


function buscarcascadaArancelArancelesAsignados1($estado,$codfilial,$codcarrera,$anho,$curso,$semestre)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Especificos' and ar.estado='$estado' and cr.cod_filialOringFK='$codfilial' and cr.cod_carrera='$codcarrera' and ar.anho='$anho' and ar.curso='$curso'  and ar.semestre='$semestre'  order by lta.nombre asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		 $pagina.="
			<table class='tableRegistroCascada' border='0' cellspacing='0' cellpadding='0'>
			  <tr  onclick='ObtenerdatosAbmAsignarArancelCascada(this)' >			
			   <td   style='width:5%;' >*</td>
			   <td   style='width:50%;text-align:left' >".$nombreArancel."</td>
			  <td   style='width:10%' >". number_format($monto,'0',',','.') ."</td>
			  <td   style='width:10%' >".$cantidad."</td>
			  <td   style='width:10%' >". number_format($total,'0',',','.') ."</td>
			  
			    <td id='td_id' style='display:none;'>".$cod_arancel."</td>
			    <td  id='td_datos_3' style='display:none;' >".$nombrefilial."</td>
				<td  id='td_datos_2' style='display:none;'>".$nombrecarrera."</td>
			   <td  id='td_datos_1' style='display:none;'>".$nombreArancel."</td>
			    <td  id='td_datos_11' style='display:none;' >".$semestre."</td>
			  <td  id='td_datos_5' style='display:none;' >".$curso."</td>
			   <td  id='td_datos_4' style='display:none;' >".$anho."</td>
			  <td  id='td_datos_6'style='display:none;' >". number_format($monto,'0',',','.') ."</td>
			  <td  id='td_datos_7'style='display:none;' >".$cantidad."</td>
			  <td  id='td_datos_8' style='display:none;'>". number_format($total,'0',',','.') ."</td>
			  <td  id='td_datos_10' style='display:none;' >".$estado."</td>			  
			  <td  id='td_datos_12' style='display:none;'>Especificos</td>	
			  
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


function buscarcascadaSemestreArancelesAsignados1($estado,$codfilial,$codcarrera,$anho,$curso)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Especificos' and ar.estado='$estado' and cr.cod_filialOringFK='$codfilial' and cr.cod_carrera='$codcarrera' and ar.anho='$anho' and ar.curso='$curso' group by ar.semestre  order by ar.semestre asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		$pagina.="
			 <p class='divCascada3'  onclick='vercerrarcascadaasignararancelArancel(this)' >
			 <img  id='iconocarpeta' name='iconocarpetaasignararancelArancel' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Semestre: ".$semestre." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 <span id='span4' style='display:none' >$curso</span>
			 <span id='span5' style='display:none' >$semestre</span>
			 </p>
			 <div class='divCascada2' name='div_arancel_asignar_arancel_1' id='div_arancel_asignar_arancel_".$cod_filialOringFK.$cod_carreraFK.$anho.$curso.$semestre."' style='display:none' ></div>";
			 
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarcascadaCursoArancelesAsignados1($estado,$codfilial,$codcarrera,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Especificos' and ar.estado='$estado' and cr.cod_filialOringFK='$codfilial' and cr.cod_carrera='$codcarrera' and ar.anho='$anho' group by ar.curso  order by ar.curso asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		$pagina.="
			 <p class='divCascada3'  onclick='vercerrarcascadaasignararancelSemestre(this)' >
			 <img  id='iconocarpeta' name='iconocarpetaasignararancelSemestre' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Curso: ".$curso." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 <span id='span4' style='display:none' >$curso</span>
			 </p>
			 <div class='divCascada2' name='div_semestre_asignar_arancel_1' id='div_semestre_asignar_arancel_".$cod_filialOringFK.$cod_carreraFK.$anho.$curso."' style='display:none' ></div>";
			 
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarcascadaAnhoArancelesAsignados1($estado,$codfilial,$codcarrera)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Especificos' and ar.estado='$estado' and cr.cod_filialOringFK='$codfilial' and cr.cod_carrera='$codcarrera' group by ar.anho  order by ar.anho asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		$pagina.="
			 <p class='divCascada3'  onclick='vercerrarcascadaasignararancelCurso(this)' >
			 <img  id='iconocarpeta' name='iconocarpetaasignararancelanho' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Año: ".$anho." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 <span id='span3' style='display:none' >$anho</span>
			 </p>
			 <div class='divCascada2' name='div_curso_asignar_arancel_1' id='div_curso_asignar_arancel_".$cod_filialOringFK.$cod_carreraFK.$anho."' style='display:none' ></div>";
			 
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarcascadaArancelGeneralArancelesAsignados1($estado,$codfilial,$codcarrera)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Generales' and ar.estado='$estado' and cr.cod_filialOringFK='$codfilial' and ar.cod_carreraFK='$codcarrera' order by lta.nombre asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		 $pagina.="
			<table class='tableRegistroCascada' border='0' cellspacing='0' cellpadding='0'>
			  <tr  onclick='ObtenerdatosAbmAsignarArancelCascada(this)' >			
			   <td   style='width:5%;' >*</td>
			   <td   style='width:85%;text-align:left' >".$nombreArancel."</td>
			  <td   style='width:10%' >". number_format($total,'0',',','.') ."</td>
			  
			    <td id='td_id' style='display:none;'>".$cod_arancel."</td>
			    <td  id='td_datos_3' style='display:none;' >".$nombrefilial."</td>
				<td  id='td_datos_2' style='display:none;'>".$nombrecarrera."</td>
			   <td  id='td_datos_1' style='display:none;'>".$nombreArancel."</td>
			    <td  id='td_datos_11' style='display:none;' >".$semestre."</td>
			  <td  id='td_datos_5' style='display:none;' >".$curso."</td>
			   <td  id='td_datos_4' style='display:none;' >".$anho."</td>
			  <td  id='td_datos_6'style='display:none;' >". number_format($monto,'0',',','.') ."</td>
			  <td  id='td_datos_7'style='display:none;' >".$cantidad."</td>
			  <td  id='td_datos_8' style='display:none;'>". number_format($total,'0',',','.') ."</td>
			  <td  id='td_datos_10' style='display:none;' >".$estado."</td>			  
			  <td  id='td_datos_12' style='display:none;'>Generales</td>	
			  
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


function buscarcascadaTipoArancelesAsignados1($estado,$codFilial,$codcarrera)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,ar.tipo,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where   ar.estado='$estado' and cr.cod_filialOringFK='$codFilial' and ar.cod_carreraFK='$codcarrera' group by ar.tipo  order by ar.tipo asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	  $tipo=utf8_encode($valor['tipo']);
		  	if($tipo=="Especificos"){
		$pagina.="
			 <p class='divCascada3'  onclick='vercerrarcascadaasignararancelAnho(this)' >
			 <img  id='iconocarpeta' name='iconocarpetaasignararancelcarrera' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' /> ".$tipo." 
			  <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 </p>
			 <div class='divCascada2' name='div_anho_asignar_arancel_1' id='div_anho_asignar_arancel_".$cod_filialOringFK.$cod_carreraFK."' style='display:none' ></div>";
			}else{
			$pagina.="
			 <p class='divCascada3'  onclick='vercerrarcascadaasignararancelarancelgeneral(this)' >
			 <img  id='iconocarpeta' name='iconocarpetaarancelgeneralasignararancel' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' /> ".$tipo." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 </p>
			 <div class='divCascada2' name='div_asignar_arancel_general_1' id='div_asignar_arancel_general_".$cod_filialOringFK.$cod_carreraFK."' style='display:none' ></div>";
				
			}
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarcascadaCarrerasArancelesAsignados1($estado,$codFilial)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	 
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,cr.cod_filialOringFK,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Especificos' and ar.estado='$estado' and cr.cod_filialOringFK='$codFilial' group by cr.Cod_listadecarrerasFK  order by ltc.nombre asc";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
		  	
		$pagina.="
			 <p class='divCascada3'  onclick='vercerrarcascadaasignararanceltipo(this)' >
			 <img  id='iconocarpeta' name='iconocarpetafilialasignararancel' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' /> ".$nombrecarrera." 
			 <span id='span1' style='display:none' >$cod_filialOringFK</span>
			 <span id='span2' style='display:none' >$cod_carreraFK</span>
			 </p>
			 <div class='divCascada2' name='div_asignar_arancel_tipo_1' id='div_asignar_arancel_tipo".$cod_filialOringFK.$cod_carreraFK."' style='display:none' ></div>";
			 
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function abm($costo,$arancelname,$codFilialFk,$tipo,$cod_arancel,$monto,$cantidad,$total,$cod_carreraFK,$cod_listadearancelesFk,$estado,$anho,$semestre,$curso,$funt)
{
	
	if($monto=="" || $cantidad==""|| $total==""|| $cod_carreraFK==""|| $cod_listadearancelesFk==""|| $anho==""||   $curso=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();
if($funt=="nuevo")
	{
				$consulta= "Select count(*) from aranceles where cod_listadearancelesFk=? and cod_carreraFK=? and anho=? and semestre=? and curso=? and estado='Activo' ";
	 
		$stmt = $mysqli->prepare($consulta);
$ss='sssss';
$stmt->bind_param($ss,$cod_listadearancelesFk,$cod_carreraFK,$anho,$semestre,$curso); 
 
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
	
	$cod_secundario=obtenercodigosecundario($cod_listadearancelesFk);
	
    $consulta="insert into aranceles (costo,cod_secundario,codFilialFk,tipo,monto, cantidad, total, cod_carreraFK, cod_listadearancelesFk, estado, anho, semestre, curso) values ('$costo','$cod_secundario','$codFilialFk','$tipo','$monto','$cantidad','$total','$cod_carreraFK','$cod_listadearancelesFk','$estado','$anho','$semestre','$curso')";	
	
	// echo($consulta);
	// exit;
     $stmt = $mysqli->prepare($consulta);
     
	}
	
	if($funt=="editar")
	{
     $cod_secundario=obtenercodigosecundario($cod_listadearancelesFk);
	 
    $consulta="Update aranceles set costo=?,cod_secundario=?,codFilialFk=?,tipo=? , monto=?, cantidad=?, total=?, cod_carreraFK=?, cod_listadearancelesFk=?, estado=?, anho=?, semestre=?, curso=?  where cod_arancel=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssssss';        
    $stmt->bind_param($ss,$costo,$cod_secundario,$codFilialFk, $tipo, $monto, $cantidad, $total, $cod_carreraFK, $cod_listadearancelesFk, $estado, $anho, $semestre, $curso, $cod_arancel); 
       
	}
	
	
if ( ! $stmt->execute() ) {

	$informacion =array("1" => "error2");
	echo json_encode($informacion);	
	exit;
}


 mysqli_close($mysqli); 
    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function obtenercodigosecundario($cod_listadearancelesFk){
	$titulo="";
	if($cod_listadearancelesFk=="2"){
		$titulo="CUOTA";
	}
	if($cod_listadearancelesFk=="4"){
		$titulo="DERECHO DE EXAMEN 1";
	}
	if($cod_listadearancelesFk=="5"){
		$titulo="DERECHO DE EXAMEN 2";
	}
	if($cod_listadearancelesFk=="6"){
		$titulo="DERECHO DE EXAMEN 3";
	}
	return $titulo;
}

function crearmasivo($tipoarancel,$arancelname,$codcarrera,$codFilialFk,$cod_listadearancelesFk,$monto,$cantidad,$total,$anho,$semestre,$curso)
{
	
	if($monto=="" || $cantidad==""|| $total==""|| $cod_listadearancelesFk==""|| $anho==""|| $semestre=="" || $curso=="" ){
		$curso="NF";
		$semestre="NF";
		$anho="NF";
	}

	$mysqli=conectar_al_servidor();

	$condicionCarrera="";
	if($codcarrera!=""){
	$condicionCarrera="and cr.Cod_listadecarrerasFK='$codcarrera' ";
	}

	if($codFilialFk==""){
	$sql= "Select cr.cod_carrera,cr.cod_filialOringFK
        from carrera cr 
		where cr.estado='Activo' ".$condicionCarrera;
	}else{
		$sql= "Select cr.cod_carrera,cr.cod_filialOringFK
        from carrera cr 
		where cr.cod_filialOringFK ='$codFilialFk' and cr.estado='Activo' ".$condicionCarrera;
	}

		 
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
		  
		  
		  $tipo=$tipoarancel;
		  $estado="Activo";
		      $cod_carreraFK=$valor['cod_carrera'];
		      $codFilialFk=$valor['cod_filialOringFK'];
			   $cod_secundario=obtenercodigosecundario($cod_listadearancelesFk);
			  $consulta="insert into aranceles (cod_secundario,codFilialFk,tipo,monto, cantidad, total, cod_carreraFK, cod_listadearancelesFk, estado, anho, semestre, curso) values (?,?,?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssss';
    $stmt->bind_param($ss,$cod_secundario , $codFilialFk , $tipo , $monto, $cantidad, $total, $cod_carreraFK, $cod_listadearancelesFk, $estado, $anho, $semestre, $curso); 
 
	
	
if ( ! $stmt->execute() ) {

	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
		     		    	 
		  	
			  
			  
	  }
	  
 }


 mysqli_close($mysqli); 
    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function buscar1($estado,$codCarrera,$codFilial,$anho,$semestre,$curso,$monto,$codconcepto,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionCarrera="";
	 $condicionFilial="";
	 $condicionAnho="";
	 $condicionsemestre="";
	 $condicioncurso="";
	 $condicionmonto="";
	 $condicioncodconcepto="";
	 if($codCarrera!=""){
		 $condicionCarrera="and ltc.Cod_listadecarreras='$codCarrera' ";
	 }
	 if($codFilial!=""){
		  $condicionFilial=" and cr.cod_filialOringFK='$codFilial' ";
	 }
	 if($anho!=""){
		  $condicionAnho=" and ar.anho='$anho' ";
	 }
	 if($semestre!=""){
		  $condicionsemestre=" and ar.semestre='$semestre' ";
	 }
	 if($curso!=""){
		  $condicioncurso=" and ar.curso='$curso' ";
	 }
	 if($monto!=""){
		  $condicionmonto=" and ar.monto='$monto' ";
	 }
	 if($codconcepto!=""){
		  $condicioncodconcepto=" and lta.cod_listadearanceles='$codconcepto' ";
	 }
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by lta.nombre asc";
	}
	if($ordenby=="2"){
		$oderby="order by ltc.nombre asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="4"){
		$oderby="order by ar.anho desc";
	}
	if($ordenby=="5"){
		$oderby="order by ar.semestre desc";
	}
	if($ordenby=="6"){
		$oderby="order by ar.curso desc";
	}
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera, ifnull(costo,0) as costo,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where  ar.tipo='Especificos' and ar.estado=? ".$condicionCarrera.$condicionFilial.$condicionAnho.$condicionsemestre.$condicioncurso.$condicionmonto.$condicioncodconcepto." ".$oderby." limit 1000";
		 
	
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $costo=utf8_encode($valor['costo']);
		  	
		$styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
			  $styleorden6="";
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
			
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarArancel(this)'>
			  <td id='td_id' style='display:none;'>".$cod_arancel."</td>
			    <td  id='td_datos_3'style='display:none".$styleorden3."' >".$nombrefilial."</td>
				<td  id='' style='width:15%;".$styleorden2."' >".$nombrecarrera."</td>
			  <td  id='td_datos_2' style='display:none' >".$nombrecarrera."</td>			
			   <td  id='td_datos_1' style='width:15%;".$styleorden1."' >".$nombreArancel."</td>
			    <td  id='td_datos_11' style='width:10%;display:none".$styleorden5."' >".$semestre."</td>
			  <td  id='td_datos_5' style='width:10%;".$styleorden6."' >".$curso."</td>
			   <td  id='td_datos_4' style='width:10%;".$styleorden4."' >".$anho."</td>
			  <td  id='td_datos_6' style='width:10%' >". number_format($monto,'0',',','.') ."</td>
			  <td  id='td_datos_7' style='width:10%' >".$cantidad."</td>
			  <td  id='td_datos_8' style='width:10%' >". number_format($total,'0',',','.') ."</td>
			  <td  id='td_datos_13' style='display:none' >". number_format($costo,'0',',','.') ."</td>
			  <td  id='td_datos_9' style='display:none' >".$cod_carreraFK."</td>
			  <td  id='td_datos_10' style='display:none' >".$estado."</td>			  
			  <td  id='td_datos_12' style='display:none' >Especificos</td>			  
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscar2($estado,$codFilial,$codConcepto,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionFilial="";
	 if($codFilial!=""){
		  $condicionFilial=" and ar.codFilialFk='$codFilial' ";
	 }
	 $condicionConcepto="";
	 if($codConcepto!=""){
		  $condicionConcepto=" and lta.cod_listadearanceles='$codConcepto' ";
	 }
	
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by lta.nombre asc";
	}
	if($ordenby=="2"){
		$oderby="order by ltc.nombre asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="4"){
		$oderby="order by ar.anho desc";
	}
	if($ordenby=="5"){
		$oderby="order by ar.semestre desc";
	}
	if($ordenby=="6"){
		$oderby="order by ar.curso desc";
	}
		$sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,ifnull(costo,0) as costo,
		(select nombre from filial where cod_filial=ar.codFilialFk) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where ar.tipo='Generales' and ar.estado=? ".$condicionFilial.$condicionConcepto." ".$oderby." limit 1000";
		 
	
		 
		
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $costo=utf8_encode($valor['costo']);
		  	
			$styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
			  $styleorden6="";
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
			
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarArancel(this)'>
			  <td id='td_id' style='display:none;'>".$cod_arancel."</td>
			   <td  id='td_datos_3'style='width:15%;".$styleorden3."' >".$nombrefilial."</td>
			    <td  id='td_datos_2' style='width:15%;' >".$nombrecarrera."</td>
			   <td  id='td_datos_1' style='width:20%;".$styleorden1."' >".$nombreArancel."</td>
			   	  <td  id='td_datos_11' style='display:none' >".$semestre."</td>
			  <td  id='td_datos_5' style='display:none' >".$curso."</td>
			   <td  id='td_datos_4' style='display:none' >".$anho."</td>
			  <td  id='td_datos_6' style='width:10%' >". number_format($monto,'0',',','.') ."</td>
			  <td  id='td_datos_7' style='width:10%' >".$cantidad."</td>
			  <td  id='td_datos_8' style='width:10%' >". number_format($total,'0',',','.') ."</td>
			  <td  id='td_datos_8' style='display:none' >". number_format($costo,'0',',','.') ."</td>
			  <td  id='td_datos_9' style='display:none' >".$cod_carreraFK."</td>
			  <td  id='td_datos_10' style='display:none' >".$estado."</td>		
               <td  id='td_datos_12' style='display:none' >Generales</td>			  
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvista($buscar,$cod_carrera,$anho,$curso,$semestre,$tipo)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	$condiciontipo="";
	if($tipo=="1"){
		$condiciontipo="and ar.cod_carreraFk='$cod_carrera' and ar.anho='$anho' and ar.curso='$curso' and ar.semestre='$semestre' ";
	}
	
		 
		 $sql= "Select ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where ar.cod_arancel='0' or  (lta.nombre like '%$buscar%' and ar.estado='Activo' ".$condiciontipo." ) 
		 group by lta.nombre order  by cr.cod_filialOringFK,anho,curso,lta.nombre asc";
		



	
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	
			
			
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAsignarArancel(this)'>
			  <td id='td_id' style='display:none;'>".$cod_arancel."</td>
			   <td  id='td_datos_1' style='width:20%' >".$nombreArancel."</td>
			    <td  id='' style='width:15%' >".$nombrecarrera."</td>
			    <td  id='td_datos_2' style='display:none' >".$nombrecarrera." - ".$nombrefilial."</td>
			  <td  id='td_datos_3'style='width:15%' >".$nombrefilial."</td>
			  <td  id='td_datos_11' style='width:7%' >".$semestre."</td>
			  <td  id='td_datos_5' style='width:7%' >".$curso."</td>
			   <td  id='td_datos_4' style='width:7%' >".$anho."</td>
			  <td  id='td_datos_6' style='width:7%' >". number_format($monto,'0',',','.') ."</td>
			  <td  id='td_datos_7' style='width:7%' >".$cantidad."</td>
			  <td  id='td_datos_8' style='width:7%' >". number_format($total,'0',',','.') ."</td>
			  <td  id='td_datos_9' style='display:none' >".$cod_carreraFK."</td>
			  <td  id='td_datos_10' style='display:none' >".$estado."</td>			  
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarvistaListFactura($cod_carrera,$anho,$curso,$semestre,$tipo)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		 $condiciontipo="";
		
		 
		
		  if($tipo=="Especificos"){
			 $condiciontipo="and ar.cod_arancel='0' or ar.cod_carreraFk='$cod_carrera' and ar.anho='$anho' and ar.curso='$curso' and ar.semestre='$semestre' and ar.estado='Activo'
		and ar.tipo='$tipo'";
		 }else{
			 $condiciontipo="and (ar.cod_arancel='0' or (ar.tipo='$tipo' and ar.cod_carreraFk='$cod_carrera'))"; 
		 }
		 
		 
		 $sql= "Select ar.cod_secundario,ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where ar.estado='Activo' ".$condiciontipo."
		 group by lta.nombre order  by cr.cod_filialOringFK,anho,curso,lta.nombre asc";
		
	


	
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		      $cod_secundario=$valor['cod_secundario'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
			  $total=utf8_encode($valor['total']);
		  	$pagina.="<option style='".number_format($monto,'0',',','.')."' id='$cod_arancel' value='$nombreArancel' class='$cod_secundario' ></option>";
			
			
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvistaListFacturaTipo2($tipo)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		 $condiciontipo="";
		 if($tipo!=""){
			 $condiciontipo="ar.cod_arancel='0' or (ar.estado='Activo' and ar.tipo='$tipo')";
		 }else{
			 $condiciontipo="ar.cod_arancel='0' or ar.estado='Activo' "; 
		 }
		 $sql= "Select lta.cod_listadearanceles,ar.cod_secundario,ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		ltc.nombre as nombrecarrera,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where ".$condiciontipo."
		 group by lta.nombre order  by cr.cod_filialOringFK,anho,curso,lta.nombre asc";
		
	
	


	
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
		  
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		      $cod_secundario=$valor['cod_secundario'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cod_listadearanceles=utf8_encode($valor['cod_listadearanceles']);
			  
		  	$pagina.="<option id='$cod_listadearanceles' value='$nombreArancel' class='$cod_secundario' ></option>";
			
			
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvistaCobrarAranceles($cod_carrera,$anho,$curso,$semestre,$buscar,$idcursosalumnoFk,$idalumnofk,$tipo)
{
	$mysqli=conectar_al_servidor();
	$mysqli->set_charset("utf8mb4");
	 $pagina='';
	 
	 $condiciontipo="";
if($tipo=="Especificos" || $tipo=="Materiales Didacticos" || $tipo=="Libros" ){
	$condiciontipo="and ar.cod_arancel='0' or ar.cod_carreraFk='$cod_carrera' and ar.anho='$anho'  AND LOWER(REPLACE(ar.curso,'°','')) = LOWER(REPLACE('$curso','°','')) and ar.estado='Activo'	and lta.tipo='$tipo'";
}else{
	$condiciontipo="and (ar.cod_arancel='0' or (lta.tipo='$tipo' and ar.cod_carreraFk='$cod_carrera'))"; 
}
		 
		
		
		 $sql= "Select ar.cod_secundario,ar.cod_arancel,lta.nombre as nombreArancel,ar.curso,ar.anho,ar.monto,ar.cantidad,ar.total,ar.cod_carreraFK,ar.estado,ar.semestre,
		'' as nombrecarrera, lta.tipo ,
		IF(ar.cod_arancel=0,IFNULL((select sum(monto) from deudaspendientes dpd where dpd.idalumnoFK='$idalumnofk'  and dpd.Cod_listadecarrerasFk=(Select Cod_listadecarrerasFK from carrera crf where crf.cod_carrera='$cod_carrera' limit 1) limit 1),0),0) as totaldeuda,
		IF(ar.cod_arancel=0,IFNULL((select sum(monto + descuento) from facturaspagadas fac inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk where cur.idalumnoFk='$idalumnofk' and fac.cod_arancelFk='0'  limit 1),0),IFNULL((select sum(monto + descuento) from facturaspagadas where cod_arancelFk=ar.cod_arancel and idcursosalumnoFk='$idcursosalumnoFk' ),0)) as totalPagado,
		IF(ar.cod_arancel=0,IFNULL((select sum(descuento) from facturaspagadas fac inner join cursosalumno cur on cur.idcursosalumno=fac.idcursosalumnoFk where cur.idalumnoFk='$idalumnofk' and fac.cod_arancelFk='0'  limit 1),0),IFNULL((select sum(descuento) from facturaspagadas where cod_arancelFk=ar.cod_arancel and idcursosalumnoFk='$idcursosalumnoFk' ),0)) as descuento,
		(select nombre from filial where cod_filial=cr.cod_filialOringFK) as nombrefilial
        from aranceles ar inner join carrera cr on cr.cod_carrera=ar.cod_carreraFK
		inner join listadecarreras  ltc on ltc.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listadearanceles lta on lta.cod_listadearanceles=ar.cod_listadearancelesFk
		where ar.estado='Activo' ".$condiciontipo."
       and lta.nombre like '%".$buscar."%'
		 order  by cr.cod_filialOringFK,anho,curso,lta.nombre asc";
		
		//  echo($sql);
		//  exit;
	

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
		  
		  
		      $cod_arancel=$valor['cod_arancel'];
		  	  $nombreArancel=utf8_encode($valor['nombreArancel']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $tipo=utf8_encode($valor['tipo']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $cantidad=utf8_encode($valor['cantidad']);
		  	  $total=utf8_encode($valor['total']);
		  	  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $nombrecarrera=utf8_encode($valor['nombrecarrera']); 
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $totalPagado=utf8_encode($valor['totalPagado']);
		  	  $totaldeuda=utf8_encode($valor['totaldeuda']);
		  	  $cod_secundario=utf8_encode($valor['cod_secundario']);
		  	  $descuento=utf8_encode($valor['descuento']);
			  if($cod_arancel=='0'){
				  $saldo=$totaldeuda-$totalPagado;
				  $total=$totaldeuda;
			  }else{
				  $saldo=$total-$totalPagado;
			  }
			  if($saldo<0){
				  $saldo=0;
			  }
			  
			  $eventos="ObtenerdatosVistaCargarArancelCobrar(this)";
			  if($tipo=="Especificos"){
				 $eventos="ObtenerdatosVistaCargarArancelCobrarCuota(this)";  
			  }
  
		   $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='$eventos'>
				<td id='td_id' style='display:none;'>".$cod_arancel."</td>
			  	<td  id='td_datos_1' style='width:20%' >".$nombreArancel."</td>
			    <td  id='' style='display:none' >".$nombrecarrera."</td>
				<td  id='td_datos_3'style='display:none' >".$nombrefilial."</td>
				<td  id='' style='display:none' >".$semestre."</td>
				<td  id='td_datos_5' style='display:none' >".$curso."</td>
				<td  id='td_datos_4' style='display:none' >".$anho."</td>
				<td  id='td_datos_6' style='display:none' >". number_format($monto,'0',',','.') ."</td>
				<td  id='td_datos_7' style='display:none' >".$cantidad."</td>
				<td  id='td_datos_8' style='width:10%' >". number_format($total,'0',',','.') ."</td>
				<td  id='td_datos_9' style='display:none' >".$cod_carreraFK."</td>
				<td  id='td_datos_10' style='display:none' >".$estado."</td>			  
				<td  id='td_datos_14' style='display:none' >".$tipo."</td>			  
				<td  id='td_datos_11' style='width:10%' >". number_format($totalPagado,'0',',','.') ."</td>
				<td  id='td_datos_12' style='width:10%' >". number_format($saldo,'0',',','.') ."</td>
				<td  id='td_datos_13' style='width:10%' >". number_format($descuento,'0',',','.') ."</td>
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




 


function generar_facturacion_electronica($idfactura,$estab_,$punto_exp,$token)
{
		
    $fecha_inser_edit = date('Y-m-d H:i:s'); 
    $fecha_emision = date('Y-m-d H:i:s'); 
    $dFeEmiDE = date("Y-m-d\TH:i:s"); 
    $user=$_POST['useru'];
    $datos=obtener_datos_factura_($idfactura);
    $idventas=$datos["idventas"];
    $tipofactura=$datos["tipoventa"];
    $nro_venta=$datos["nro_venta"];
    $total=$datos["total"];
    $cliente_razonsocial=$datos["cliente_razonsocial"];
    $tipocontribuyente=$datos["tipocontribuyente"];
    $contribuyenteestatal=$datos["contribuyenteestatal"];
    $correo=$datos["correo"];
    $cliente_ruc=$datos["cliente_ruc"];
    $cliente_telef=$datos["cliente_telef"];
    $cliente_direcion=$datos["cliente_direcion"];
    $data=obtener_json_detalles_($idfactura,$contribuyenteestatal);
    $totalivaexentas=$data["t0"];
    $totaliva5=$data["t5"];
    $totaliva10=$data["t10"];
    $totaldiva5=$data["td5"];
    $totaldiva10=$data["td10"];
    $subtotalExcentas=$data["subExce"];
    $subTotal5=$data["sub5"];
    $subTotal10=$data["sub10"];
    $json_detalles_=$data["json"];
    $dTotIVA = $totaliva5 + $totaliva10;
    $dTBasGraIVA = $totaldiva5 + $totaldiva10;
    $dLiqTotIVA5 = $totaliva5;
    $dLiqTotIVA10 = $totaliva10;
    $puntoexpedicion=$estab_."-".$punto_exp;
    $nrofactura=$nro_venta;
    $js_e="";
    if($contribuyenteestatal=="Si"){
	$iTiOpe="3";    
	$fecha = date('Y-m-d');     
	$js_e='"dModCont":"11",
	"dEntCont":"11111",
	"dAnoCont":"11",
	"dSecCont":"1111111",
	"dFeCodCont":"'.$fecha.'", ';
    }
    if(($tipocontribuyente=="1" || $tipocontribuyente=="2") && $cliente_ruc!=""){    
	$partes = explode("-", $cliente_ruc);
	$dDVRec =$partes[1];
	$cliente_ruc =$partes[0];
	$iTiContRec=$tipocontribuyente;        
	$iNatRec="1";
	$iTipIDRec="";    
	$dNumIDRec="";    
	$dNomRec="";    
	$iTiOpe="1";    
	$dDirRec=$cliente_direcion;    
	$dEmailRec=$correo;    
	$dCelRec=$cliente_telef;        
    } else {    
	$iTiContRec="";    
	$dNumIDRec=$cliente_ruc;
	$dNomRec=$cliente_razonsocial;
	$dDVRec="";
	$iNatRec="2";
	$iTipIDRec="1";
	$iTiOpe="2";    
	$dDirRec=$cliente_direcion;    
	$dEmailRec=$correo;    
	$dCelRec=$cliente_telef;        
    }

	$j_c="";
	if($tipofactura=="Contado"){
	$iCondOpe="1";
	}
	if($tipofactura=="Credito"){
	$iCondOpe="2";
	$j_c='"iCondCred":"1",
	"dPlazoCre":"12 meses",';
	}
	
	if($puntoexpedicion=="001-001"){
	$iTipTra="3";	
	}
	if($puntoexpedicion=="002-001"){
	$iTipTra="3";		
	}
	if($puntoexpedicion=="003-001"){
	$iTipTra="3";		
	}
	
    // JSON final
    $json_data = '{
	"tipOpe": "1",
	"iTiDE":"1",
	"iInfoEmi":"Vicente Gonzalez",
	"iInfoFisc":"",
	"dEst":"'.$estab_.'",
	"dPunExp":"'.$punto_exp.'",
	"dNumDoc":"'.$nrofactura.'",
	"dFeEmiDE":"'.$dFeEmiDE.'",
	"iTipTra":"'.$iTipTra.'",
	"iTImp":"1",
	"cMoneOpe":"PYG",
	"iIndPres":"1",
	"iNatRec":"'.$iNatRec.'",
	"iTiOpe":"'.$iTiOpe.'",
	"cPaisRec":"PRY",
	"iTiContRec":"'.$iTiContRec.'",
	"iTipIDRec":"'.$iTipIDRec.'",
	"dNumIDRec":"'.$dNumIDRec.'",
	"dNomRec":"'.$dNomRec.'",
	"dRucRec":"'.$cliente_ruc.'",
	"dDVRec":"'.$dDVRec.'",
	"dNumCasRec":"0",
	"dNomRec":"'.$cliente_razonsocial.'",
	"dDirRec":"'.$dDirRec.'",
	"dEmailRec":"'.$dEmailRec.'",
	"iCondOpe":"'.$iCondOpe.'",
	'.$j_c.'
	"dTelRec":"",
	"dCelRec":"'.$dCelRec.'",
	"dNomFanRec":"'.$cliente_razonsocial.'",
	'.$js_e.'
	"Detalles": ['.$json_detalles_.'],
	"Subtotales":[{
	"dSubExe":"'.$subtotalExcentas.'",
	"dSubExo":"0",
	"dSub5":"'.$subTotal5.'",
	"dSub10":"'.$subTotal10.'",
	"dTotOpe":"'.$total.'",
	"dTotDesc":"0",
	"dTotDescGlotem":"0",
	"dTotAntItem":"0",
	"dTotAnt":"0",
	"dPorcDescTotal":"0",
	"dDescTotal":"0",
	"dAnticipo":"0",
	"dRedon":"0",
	"dTotGralOpe":"'.$total.'",
	"dIVA5":"'.$totaliva5.'",
	"dIVA10":"'.$totaliva10.'",
	"dLiqTotIVA5":"'.$dLiqTotIVA5.'",
	"dLiqTotIVA10":"'.$dLiqTotIVA10.'",
	"dTotIVA":"'.$dTotIVA.'",
	"dBaseGrav5":"'.$totaldiva5.'",
	"dBaseGrav10":"'.$totaldiva10.'",
	"dTBasGraIVA":"'.$dTBasGraIVA.'" }],
	"FormaPago":[{	"iTiPago": "1",
	"dMonTiPag": "'.$total.'",
	"cMoneTiPag": "PYG"	}]
    }';

	$sql_select="Select idfacturacion_electronica from facturacion_electronica 
	where estado!='Eliminado' and generado_en='Venta' and idventas_fk='$idventas' order by idfacturacion_electronica desc limit 1";
	$idfacturacion_electronica=query_select_atributo_return_($sql_select,"idfacturacion_electronica");
	if($idfacturacion_electronica!=""){
	$sql_insert_update="Delete from facturacion_electronica where estado!='Eliminado' and idventas_fk='$idventas'";
    query_insert_update_delete("",$sql_insert_update,"Null");	
	}

    $sql_insert_update="INSERT INTO facturacion_electronica (establecimiento, punto_expedicion, nro_factura, fecha_emision ,estado, insertadopor, fechainsert, idventas_fk, log , generado_en)
	VALUES('$estab_','$punto_exp','$nrofactura','$fecha_emision','Pendiente','$user','$fecha_inser_edit','$idventas','','Venta')";
    query_insert_update_delete("",$sql_insert_update,"Null");
	
    $response=cargar_factura_electronica($token,$json_data);
	$status=obtener_status($response);
	if($status=="success"){
	$estado="Pendiente";
	}else{
	$estado="Error";
	}
	
	$response="/*".$response."*/";
	$response = str_replace("'", "", $response);
	
	$sql_select="Select idfacturacion_electronica from facturacion_electronica 
	where estado!='Eliminado' and generado_en='Venta' and idventas_fk='$idventas' order by idfacturacion_electronica desc limit 1";
	$idfacturacion_electronica=query_select_atributo_return_($sql_select,"idfacturacion_electronica");
	
    $sql_insert_update="Update facturacion_electronica  set estado='$estado' , log='$response' where idfacturacion_electronica='$idfacturacion_electronica' ";
    query_insert_update_delete("",$sql_insert_update,"Null");
	return $idfacturacion_electronica;
}













?>