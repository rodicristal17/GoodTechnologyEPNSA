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
	
	
	$idmallacurricular=$_POST['idabm'];
    $idmallacurricular = utf8_decode($idmallacurricular);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$cargahoraria=$_POST['cargahoraria'];
    $cargahoraria = utf8_decode($cargahoraria);
	$idlistadodematerias=$_POST['idlistadodematerias'];
    $idlistadodematerias = utf8_decode($idlistadodematerias);
	$cod_carrera=$_POST['cod_carrera'];
    $cod_carrera = utf8_decode($cod_carrera);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$horasemanal=$_POST['horasemanal'];
    $horasemanal = utf8_decode($horasemanal);
	$codigomalla=$_POST['codigomalla'];
    $codigomalla = utf8_decode($codigomalla);
	abm($idmallacurricular,$codigomalla,$horasemanal,$anho,$curso,$semestre,$cargahoraria,$idlistadodematerias,$cod_carrera,$estado,$funt);

}

if($funt=="importar" )
{
	
	
	$carrera=$_POST['carrera'];
    $carrera = utf8_decode($carrera);
	$catedra=$_POST['catedra'];
    $catedra = utf8_decode($catedra);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$cargahoraria=$_POST['cargahoraria'];
    $cargahoraria = utf8_decode($cargahoraria);
	
	importar($carrera,$catedra,$anho,$curso,$semestre,$cargahoraria);

}

if($funt=="buscar")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$codCatedra=$_POST['codCatedra'];
$codCatedra = utf8_decode($codCatedra);
$codigo=$_POST['codigo'];
$codigo = utf8_decode($codigo);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
buscar($codigo,$estado,$anho,$semestre,$curso,$codCarrera,$codCatedra,$ordenby);

}
if($funt=="buscarvista")
{


$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$codCatedra=$_POST['codCatedra'];
$codCatedra = utf8_decode($codCatedra);
$codigo=$_POST['codigo'];
$codigo = utf8_decode($codigo);
$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
buscarvista($codfilial,$codigo,$anho,$semestre,$curso,$codCarrera,$codCatedra,$ordenby);

}
if($funt=="buscarcarreracascada")
{

$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscarcarreracascada($estado);

}
if($funt=="buscaranhocascada")
{

$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
buscaranhocascada($codCarrera);

}
if($funt=="buscarcursocascada")
{

$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
buscarcursocascada($codCarrera,$anho);

}
if($funt=="buscarsemestrecascada")
{

$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
buscarsemestrecascada($codCarrera,$anho,$curso);

}
if($funt=="buscarmateriacascada")
{

$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
buscarmateriacascada($codCarrera,$anho,$curso,$semestre);

}
if($funt=="buscarmateriaapagar")
{

$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$carrera=$_POST['carrera'];
$carrera = utf8_decode($carrera);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$codArancel=$_POST['codArancel'];
$codArancel = utf8_decode($codArancel);
buscarmateriaapagar($curso,$anho,$semestre,$carrera,$codArancel);

}
if($funt=="buscarmateriaapagarlist")
{

$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$carrera=$_POST['carrera'];
$carrera = utf8_decode($carrera);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$codArancel=$_POST['codArancel'];
$codArancel = utf8_decode($codArancel);
buscarmateriaapagarlist($curso,$anho,$semestre,$carrera,$codArancel);

}

if($funt=="buscarSelect")
{

buscarSelect();

}

if($funt=="buscarSelectMalla")
{
$codCarrera=$_POST['codCarrera'];
$codCarrera = utf8_decode($codCarrera);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
buscarSelectMalla($codCarrera,$anho,$semestre);

}
if($funt=="buscarSelectporcarrera1")
{
$codcarrera=$_POST['codcarrera'];
$codcarrera = utf8_decode($codcarrera);
buscarSelectporcarrera1($codcarrera);

}





	

}

function abm($idmallacurricular,$codigomalla,$horasemanal,$anho,$curso,$semestre,$cargahoraria,$idlistadodematerias,$cod_carrera,$estado,$funt)
{
	
	if($anho=="" ||$curso=="" || $semestre==""|| $cargahoraria=="" || $idlistadodematerias==""|| $cod_carrera==""  ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
	$mysqli=conectar_al_servidor();
	if($funt=="nuevo")	{
				$consulta= "Select count(*) from mallacurricular where anho=?  and curso=? and semestre=?  and idlistadodematerias=? and cod_carrera=?  and codigomalla=?  ";	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ssssss';
$stmt->bind_param($ss,$anho,$curso,$semestre,$idlistadodematerias,$cod_carrera,$codigomalla); 
if ( ! $stmt->execute()) {
	$informacion =array("1" => $mysqli->error);
	echo json_encode($informacion);	
	exit;
}
$valor = 0;
$stmt->bind_result($valor);
while ($stmt->fetch()) { 
   
	 $valor =$valor;
}
if($valor>0){
	$informacion =array("1" => "EX");
	echo json_encode($informacion);	
	exit;
}   
	}
	
	if($funt=="nuevo")	{
	
    $consulta="insert into mallacurricular (codigomalla,horasemanal,anho, curso, semestre, cargahoraria, idlistadodematerias, cod_carrera,estado) 
	values (?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sssssssss';
    $stmt->bind_param($ss,$codigomalla,$horasemanal,$anho,$curso,$semestre,$cargahoraria,$idlistadodematerias,$cod_carrera,$estado); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update mallacurricular set codigomalla=?, horasemanal=?, anho=?, curso=?, semestre=?, cargahoraria=?, idlistadodematerias=?, cod_carrera=?,estado=?  where idmallacurricular=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssssssssss';        
    $stmt->bind_param($ss,$codigomalla,$horasemanal,$anho,$curso,$semestre,$cargahoraria,$idlistadodematerias,$cod_carrera,$estado,$idmallacurricular); 
       
	}
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => $mysqli->error);
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 

    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function importar($carrera,$catedra,$anho,$curso,$semestre,$cargahoraria)
{
	
	if($carrera=="" ||$catedra=="" || $anho==""|| $curso=="" || $semestre=="" ){
$informacion =array("1" => "VACIO");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();
	$idlistadodematerias=obtenercodigocatedra($catedra);
	$cod_carrera=obtenercodigocarrera($carrera);
	if($idlistadodematerias==""){
$informacion =array("1" => "CATEDRA");
echo json_encode($informacion);	
exit;
	}
	if($cod_carrera==""){
$informacion =array("1" => "CARRERA");
echo json_encode($informacion);	
exit;
	}
	
	$consulta= "Select count(*) from mallacurricular where anho=?  and curso=? and semestre=?  and idlistadodematerias=? and cod_carrera=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='sssss';
$stmt->bind_param($ss,$anho,$curso,$semestre,$idlistadodematerias,$cod_carrera); 


if ( ! $stmt->execute()) {
	$informacion =array("1" => $mysqli->error);
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
	$informacion =array("1" => "DUPLICADO");
	echo json_encode($informacion);	
	exit;
}   
	
	
    $consulta="insert into mallacurricular (anho, curso, semestre, cargahoraria, idlistadodematerias, cod_carrera,estado) 
	values (?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sssssss';
    $stmt->bind_param($ss,$anho,$curso,$semestre,$cargahoraria,$idlistadodematerias,$cod_carrera,$estado); 
 
	if ( ! $stmt->execute() ) {
	$informacion =array("1" => "ERROR");
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 

    $informacion =array("1" => "INSERTADO");
    echo json_encode($informacion);	
    exit;
	
}

function obtenercodigocatedra($buscar)
{
	$mysqli=conectar_al_servidor();
	 $idlistadodematerias='';
	
		$sql= "Select idlistadodematerias
        from listadodematerias where nombre = '$buscar' and estado='Activo'  limit 1";
		 
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
		  
		  
		  
		      $idlistadodematerias=$valor['idlistadodematerias'];
		  	
			  
	  }
	  
 }
 
return $idlistadodematerias;


}

function obtenercodigocarrera($buscar)
{
	$mysqli=conectar_al_servidor();
	 $Cod_listadecarreras='';
	
		$sql= "Select Cod_listadecarreras
        from listadecarreras where nombre='$buscar' and  estado='Activo'  limit 1";
		 
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
		  
		  
		  
		      $Cod_listadecarreras=$valor['Cod_listadecarreras'];
		  	
			  
	  }
	  
 }
 
return $Cod_listadecarreras;


}

function buscar($codigo,$estado,$anho,$semestre,$curso,$codCarrera,$codCatedra,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="<table style='display:none'>
			  <tr >
			  <td >ID-Malla-Curricular</td>
			  <td >ID-Lista-Materias</td>
			  <td >ID-Carrera</td>
			   <td  >ID-Malla</td>
			   <td  >Nombre-Carrera</td>
			   <td  >Nombre-Materia</td>
			   <td  >Años</td>
			   <td >Curso</td>
			   <td  >Semestre</td>
			   <td  >Hora-Semanal</td>
			   <td  >Carga-Horaria</td>
			  <td  >Estado</td>
			  </tr>
			  </table>";
	$condicioAnho="";
	if($anho!=""){
		$condicioAnho=" and anho='$anho'";
	}
	$condicioSemestre="";
	if($semestre!=""){
		$condicioSemestre=" and semestre='$semestre'";
	}
	$condicioCarrera="";
	if($codCarrera!=""){
		$condicioCarrera=" and ml.cod_carrera='$codCarrera'";
	}
	$condicioCatedra="";
	if($codCatedra!=""){
		$condicioCatedra=" and ml.idlistadodematerias='$codCatedra'";
	}
	$condicioCusro="";
	if($curso!=""){
		$condicioCusro=" and ml.curso='$curso'";
	}
	$condicioCodigo="";
	if($codigo!=""){
		$condicioCodigo=" and ml.codigomalla='$codigo'";
	}
	$oderby="";
	if($ordenby=="1"){
		$oderby="order by anho desc";
	}
	if($ordenby=="2"){
		$oderby="order by curso asc";
	}
	if($ordenby=="3"){
		$oderby="order by semestre asc";
	}
	if($ordenby=="4"){
		$oderby="order by nombreMateria asc";
	}
	if($ordenby=="5"){
		$oderby="order by nombreCarrera asc";
	}
	
		$sql= "Select idmallacurricular,codigomalla, anho,curso, semestre, cargahoraria, idlistadodematerias,horasemanal, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml where estado='".$estado."' ".$condicioCodigo.$condicioCatedra.$condicioAnho.$condicioSemestre.$condicioCarrera.$condicioCusro."   ".$oderby;
		
		

    
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
			  $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
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
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarMalla(this)'>
			  <td id='td_id_1' style='display:none;'>".$idmallacurricular."</td>
			  <td id='td_id_2' style='display:none;'>".$idlistadodematerias."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carrera."</td>
			   <td  id='td_datos_13' style='width:10%;' >".$codigomalla."</td>
			   <td  id='td_datos_1'  style='width:20%;".$styleorden5."' >".$nombreCarrera."</td>
			   <td  id='td_datos_2'  style='width:20%;".$styleorden4."' >".$nombreMateria."</td>
			   <td  id='td_datos_3'  style='width:10%;".$styleorden1."' >".$anho."</td>
			   <td  id='td_datos_4'  style='width:10%;".$styleorden2."'>".$curso."</td>
			   <td  id='td_datos_5'  style='width:10%;".$styleorden3."' >".$semestre."</td>
			   <td  id='td_datos_12' style='width:10%' >".$horasemanal."</td>
			   <td  id='td_datos_6'  style='width:10%' >".$cargahoraria."</td>
			  <td  id='td_datos_7' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarvista($codfilial,$codigo,$anho,$semestre,$curso,$codCarrera,$codCatedra,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	$condicioAnho="";
	if($anho!=""){
		$condicioAnho=" and ml.anho='$anho'";
	}
	$condicioSemestre="";
	if($semestre!=""){
		$condicioSemestre=" and ml.semestre='$semestre'";
	}
	$condicioFilial="";
	if($codfilial!=""){
		$condicioFilial=" and car.cod_filialOringFK='$codfilial'";
	}
	$condicioCarrera="";
	if($codCarrera!=""){
		$condicioCarrera=" and ml.cod_carrera='$codCarrera'";
	}
	$condicioCatedra="";
	if($codCatedra!=""){
		$condicioCatedra=" and ml.idlistadodematerias='$codCatedra'";
	}
	$condicioCusro="";
	if($curso!=""){
		$condicioCusro=" and ml.curso='$curso'";
	}
	$condicioCodigo="";
	if($codigo!=""){
		$condicioCodigo=" and ml.codigomalla='$codigo'";
	}
	$oderby="";
	if($ordenby=="1"){
		$oderby="order by ml.anho desc";
	}
	if($ordenby=="2"){
		$oderby="order by ml.curso asc";
	}
	if($ordenby=="3"){
		$oderby="order by ml.semestre asc";
	}
	if($ordenby=="4"){
		$oderby="order by nombreMateria asc";
	}
	if($ordenby=="5"){
		$oderby="order by nombreCarrera asc";
	}
	
		$sql= "Select ml.idmallacurricular,ml.codigomalla, ml.anho, ml.curso, ml.semestre, ml.cargahoraria, ml.idlistadodematerias,ml.horasemanal, ml.cod_carrera,ml.estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,car.cod_filialOringFK,
		(Select fl.nombre from filial fl where fl.cod_filial=car.cod_filialOringFK ) as nombrefilial,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml inner join carrera car on car.Cod_listadecarrerasFK=ml.cod_carrera
		where ml.estado='Activo' ".$condicioFilial.$condicioCodigo.$condicioCatedra.$condicioAnho.$condicioSemestre.$condicioCarrera.$condicioCusro."   ".$oderby;
		
		
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $cod_filialOringFK=utf8_encode($valor['cod_filialOringFK']);
			  $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
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
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAsignarMalla(this)'>
			  <td id='td_id_1' style='display:none;'>".$idmallacurricular."</td>
			  <td id='td_id_2' style='display:none;'>".$idlistadodematerias."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_carrera."</td>
			  <td id='td_id_4' style='display:none;'>".$cod_filialOringFK."</td>
			   <td  id='td_datos_14' style='width:7%;' >".$nombrefilial."</td>
			   <td  id='td_datos_13' style='width:5%;' >".$codigomalla."</td>
			   <td  id='td_datos_1' style='width:10%;".$styleorden5."' >".$nombreCarrera."</td>
			   <td  id='td_datos_2' style='width:10%;".$styleorden4."' >".$nombreMateria."</td>
			   <td  id='td_datos_3' style='width:5%;".$styleorden1."' >".$anho."</td>
			   <td  id='td_datos_4' style='width:5%;".$styleorden2."'>".$curso."</td>
			   <td  id='td_datos_5' style='width:5%;".$styleorden3."' >".$semestre."</td>
			  <td  id='td_datos_7' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcarreracascada($estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
	
		$sql= "Select idmallacurricular,codigomalla, anho,curso, semestre, cargahoraria, idlistadodematerias,horasemanal, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml where estado='".$estado."'   group by ml.cod_carrera order by nombreCarrera asc ";
		
		

    
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
			  	
			 $pagina.="<div class='divCascada1' >
			 <p class='pTituloCascada' id='$cod_carrera' onclick='vercerrarasignarmallaanholistado(this)' >
			 <img id='iconocarpeta' name='iconocarpetamallacarrera' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />".$nombreCarrera." </p>
			 <div class='divCascada2' name='div_anho_asignar_malla_1' id='div_anho_asignar_malla_".$cod_carrera."' style='display:none' ></div>
			 </div>";
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscaranhocascada($cod_carrera)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
	
		$sql= "Select idmallacurricular,codigomalla, anho,curso, semestre, cargahoraria, idlistadodematerias,horasemanal, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml where ml.cod_carrera='".$cod_carrera."'  group by ml.anho order by anho asc ";
		
		

    
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
			  	
			 $pagina.="
			 <p class='divCascada3'  onclick='vercerrarasignarmallacursolistado(this)' >
			 <img id='iconocarpeta' name='iconocarpetamallaanho' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Año ".$anho." 
			 <span id='span1' style='display:none' >$cod_carrera</span>
			 <span id='span2' style='display:none' >$anho</span>
			 </p>
			 <div class='divCascada2' name='div_curso_asignar_malla_1' id='div_curso_asignar_malla_".$cod_carrera.$anho."' style='display:none' ></div>";
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarcursocascada($cod_carrera,$anho)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
	
		$sql= "Select idmallacurricular,codigomalla, anho,curso, semestre, cargahoraria, idlistadodematerias,horasemanal, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml where ml.cod_carrera='".$cod_carrera."' and anho='".$anho."'  group by ml.curso  order by curso asc ";
		
		

    
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
			  	
			 $pagina.="
			 <p class='divCascada3'  onclick='vercerrarasignarmallasemestrelistado(this)' >
			 <img  id='iconocarpeta' name='iconocarpetamallacurso' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Curso ".$curso." 
			 <span id='span1' style='display:none' >$cod_carrera</span>
			 <span id='span2' style='display:none' >$anho</span>
			 <span id='span3' style='display:none' >$curso</span>
			 </p>
			 <div class='divCascada2' name='div_semestre_asignar_malla_1' id='div_semestre_asignar_malla_".$cod_carrera.$anho.$curso."' style='display:none' ></div>";
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarsemestrecascada($cod_carrera,$anho,$curso)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
	
		$sql= "Select idmallacurricular,codigomalla, anho,curso, semestre, cargahoraria, idlistadodematerias,horasemanal, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml where ml.cod_carrera='".$cod_carrera."' and anho='".$anho."'and curso='".$curso."'   group by ml.semestre    order by curso asc ";
		
		

    
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
			  	
			 $pagina.="
			 <p class='divCascada3'  onclick='vercerrarasignarmallaMateriaslistado(this)' >
			 <img id='iconocarpeta' name='iconocarpetamallasemestre' class='iconocascada' src='/GoodTechnologyEPNSA/iconos/carpetacerrada.png' />Semestre ".$semestre." 
			 <span id='span1' style='display:none' >$cod_carrera</span>
			 <span id='span2' style='display:none' >$anho</span>
			 <span id='span3' style='display:none' >$curso</span>
			 <span id='span4' style='display:none' >$semestre</span>
			 </p>
			 <div class='divCascada2' name='div_materias_asignar_malla_1' id='div_materias_asignar_malla_".$cod_carrera.$anho.$curso.$semestre."' style='display:none' ></div>";
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarmateriacascada($cod_carrera,$anho,$curso,$semestre)
{
	$mysqli=conectar_al_servidor();
	 $pagina="";
	
	
		$sql= "Select idmallacurricular,codigomalla, anho,curso, semestre, cargahoraria, idlistadodematerias,horasemanal, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from mallacurricular ml where ml.cod_carrera='".$cod_carrera."' and anho='".$anho."' and curso='".$curso."' and semestre='".$semestre."'     order by nombreMateria asc ";
		
		

    
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
			  	
			 $pagina.="
			 <p class='pTituloCascada2'  onclick='ObtenerdatosAbmAsignarMallaCascada(this)'>*".$nombreMateria."
			 <span id='td_id_1' style='display:none;'>".$idmallacurricular."</span>
			  <span id='td_id_2' style='display:none;'>".$idlistadodematerias."</span>
			  <span id='td_id_3' style='display:none;'>".$cod_carrera."</span>
			   <span  id='td_datos_13' style='display:none;' >".$codigomalla."</span>
			   <span  id='td_datos_1' style='display:none;' >".$nombreCarrera."</span>
			   <span  id='td_datos_2' style='display:none;' >".$nombreMateria."</span>
			   <span  id='td_datos_3' style='display:none;' >".$anho."</span>
			   <span  id='td_datos_4' style='display:none;' >".$curso."</span>
			   <span  id='td_datos_5' style='display:none;' >".$semestre."</span>
			   <span  id='td_datos_12' style='display:none;' >".$horasemanal."</span>
			   <span  id='td_datos_6' style='display:none;' >".$cargahoraria."</span>
			  <span  id='td_datos_7' style='display:none' >".$estado."</span>
			 </p>";
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarmateriaapagar($curso,$anho,$semestre,$carrera,$codArancel)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idmallacurricular,anho, curso, semestre, cargahoraria, idlistadodematerias, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera ) as nombreCarrera,
		(select monto from aranceles where cod_arancel='$codArancel' limit 1) as montoapagar,
		IFNULL((select count(iddetallefacturas) from detallefacturas where codfk=ml.idlistadodematerias and codigoarancel='$codArancel' and tipo='DERECHOEXAMEN' limit 1),0) as controlpago
        from mallacurricular ml where estado='Activo' and anho='$anho' and curso='$curso' and semestre='$semestre'
		and  (Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera limit 1)='$carrera' order by anho desc ";
	

		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $controlpago=utf8_encode($valor['controlpago']);
		  	  $montoapagar=utf8_encode($valor['montoapagar']);
		  	
		  	  if($controlpago>0){
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' ><input  type='checkbox'  disabled  /></td>
			   <td  id='td_datos_2' style='width:95%' >".$nombreMateria." (PAGADO)</td>
			  </tr>
			  </table>";
			  }else{
				$pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			   <td  id='td_datos_1' style='width:5%' ><input style='$nombreMateria' name='checkboxDerechoExamenArancel1' type='checkbox'  id='$idlistadodematerias' value='$montoapagar' onclick='obtenerTotalPagarFacturaDerechos(this)' /></td>
			   <td  id='td_datos_2' style='width:95%' >".$nombreMateria."</td>
			  </tr>
			  </table>";  
			  }
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarmateriaapagarlist($curso,$anho,$semestre,$carrera,$codArancel)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idmallacurricular,anho, curso, semestre, cargahoraria, idlistadodematerias, cod_carrera,estado,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera ) as nombreCarrera,
		(select monto from aranceles where cod_arancel='$codArancel' limit 1) as montoapagar,
		IFNULL((select count(iddetallefacturas) from detallefacturas where codfk=ml.idlistadodematerias and codigoarancel='$codArancel' and tipo='DERECHOEXAMEN' limit 1),0) as controlpago
        from mallacurricular ml where estado='Activo' and anho='$anho' and curso='$curso' and semestre='$semestre'
		and  (Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera limit 1)='$carrera' order by anho desc ";
	
	
		 
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
		  
		  
		  
		      $idmallacurricular=$valor['idmallacurricular'];
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $cargahoraria=utf8_encode($valor['cargahoraria']);
		  	  $idlistadodematerias=utf8_encode($valor['idlistadodematerias']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $controlpago=utf8_encode($valor['controlpago']);
		  	  $montoapagar=utf8_encode($valor['montoapagar']);
		  	
		  	  if($controlpago>0){
			  
			  }else{
				
 	$pagina.="<option id='$idlistadodematerias' value='$nombreMateria'  ></option>";
					  
			  }
			    	 
		  	
			  
			  
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

		$sql= "Select idlistadodematerias,nombre,estado
        from listadodematerias where  estado='Activo'  order by nombre asc";
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
		  
		  
		  
		      $idlistadodematerias=$valor['idlistadodematerias'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  
		  	
		  	$pagina.="<option id='$idlistadodematerias' value='$nombre'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarSelectMalla($codCarrera,$anho,$semestre)
{
	$mysqli=conectar_al_servidor();
    $condicionCarrera="";
	if($codCarrera!=""){
		 $condicionCarrera="and ml.cod_carrera='$codCarrera'";
	}
	$condicionAnho="";
	if($anho!=""){
		 $condicionAnho="and ml.anho='$anho'";
	}
	$condicionSemestre="";
	if($semestre!=""){
		 $condicionSemestre="and ml.semestre='$semestre'";
	}
      
   
      if($condicionCarrera!=""||$condicionAnho!=""||$condicionSemestre!=""){
		  	$sql= "Select  idlistadodematerias,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombre
        from mallacurricular ml where estado='Activo' ".$condicionCarrera.$condicionAnho.$condicionSemestre."  order by anho desc ";
	  }else{
		 $sql= "Select idlistadodematerias,nombre,estado
        from listadodematerias where  estado='Activo'  order by nombre asc"; 
	  }
	  

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
		  
		  
		  
		      $idlistadodematerias=$valor['idlistadodematerias'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  
		  	
		  	$pagina.="<option id='$idlistadodematerias' value='$nombre'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarSelectporcarrera1($codcarrera)
{
	$mysqli=conectar_al_servidor();
   
   

		  	$sql= "Select  idlistadodematerias,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombre
        from mallacurricular ml where estado='Activo' and ml.cod_carrera='$codcarrera'  group by idlistadodematerias order by nombre desc ";
	 
	

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
		  
		  
		  
		      $idlistadodematerias=$valor['idlistadodematerias'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  
		  	
		  	$pagina.="<option id='$idlistadodematerias' value='$nombre'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }

  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}




verificar($funt);
?>