<?php
include('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
require("conexion.php");
include("verificar_navegador.php");
include("buscar_nivel.php");
include("subir_foto_base64.php");
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

	// buscarnivel($user,"FILIAL"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"FILIAL"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"FILIAL"," buscar='SI' ");
// }





	
if($funt=="subirarchivo")
{
	
	
	$idalumnoFK=$_POST['idalumnoFK'];
    $idalumnoFK = utf8_decode($idalumnoFK);
	$Cod_listadecarrerasFK=$_POST['Cod_listadecarrerasFK'];
    $Cod_listadecarrerasFK = utf8_decode($Cod_listadecarrerasFK);
	$certificado_nac=$_POST['certificado_nac'];
    $certificado_nac = utf8_decode($certificado_nac);
	$ficha_academica=$_POST['ficha_academica'];
    $ficha_academica = utf8_decode($ficha_academica);
	$contrato_matriculacion=$_POST['contrato_matriculacion'];
    $contrato_matriculacion = utf8_decode($contrato_matriculacion);
	$copia_autenticada_de_titulo_bachiller=$_POST['copia_autenticada_de_titulo_bachiller'];
    $copia_autenticada_de_titulo_bachiller = utf8_decode($copia_autenticada_de_titulo_bachiller);
	$copia_de_cedula_autenticada=$_POST['copia_de_cedula_autenticada'];
    $copia_de_cedula_autenticada = utf8_decode($copia_de_cedula_autenticada);
	$foto_tipo_carnet=$_POST['foto_tipo_carnet'];
    $foto_tipo_carnet = utf8_decode($foto_tipo_carnet);
	$solicitud_matriculacion=$_POST['solicitud_matriculacion'];
    $solicitud_matriculacion = utf8_decode($solicitud_matriculacion);
	$certif_de_estudio_de_bachillerato_orinal_visado=$_POST['certif_de_estudio_de_bachillerato_orinal_visado'];
    $certif_de_estudio_de_bachillerato_orinal_visado = utf8_decode($certif_de_estudio_de_bachillerato_orinal_visado);
	$certif_de_estudio_de_bachillerato_orinal_visado_fisico=$_POST['certif_de_estudio_de_bachillerato_orinal_visado_fisico'];
    $certif_de_estudio_de_bachillerato_orinal_visado_fisico = utf8_decode($certif_de_estudio_de_bachillerato_orinal_visado_fisico);
	$copia_de_cedula_autenticada_fisico=$_POST['copia_de_cedula_autenticada_fisico'];
    $copia_de_cedula_autenticada_fisico = utf8_decode($copia_de_cedula_autenticada_fisico);
	
	abm($idalumnoFK,$Cod_listadecarrerasFK,$certificado_nac,$ficha_academica,$contrato_matriculacion,$copia_autenticada_de_titulo_bachiller,$copia_de_cedula_autenticada,$foto_tipo_carnet,$solicitud_matriculacion,$certif_de_estudio_de_bachillerato_orinal_visado,$certif_de_estudio_de_bachillerato_orinal_visado_fisico,$copia_de_cedula_autenticada_fisico);

}

if($funt=="buscararchivoa")
{
	
	
	$idalumnoFK=$_POST['idalumnoFK'];
    $idalumnoFK = utf8_decode($idalumnoFK);
	$Cod_listadecarrerasFK=$_POST['Cod_listadecarrerasFK'];
    $Cod_listadecarrerasFK = utf8_decode($Cod_listadecarrerasFK);
	
buscararchivos($idalumnoFK,$Cod_listadecarrerasFK);
}

if($funt=="editarexitencia")
{
	
	$idalumnoFK=$_POST['idalumnoFK'];
    $idalumnoFK = utf8_decode($idalumnoFK);
	$Cod_listadecarrerasFK=$_POST['Cod_listadecarrerasFK'];
    $Cod_listadecarrerasFK = utf8_decode($Cod_listadecarrerasFK);
	$tablename=$_POST['tablename'];
    $tablename = utf8_decode($tablename);
	$valor=$_POST['valor'];
    $valor = utf8_decode($valor);
	
editarexitencia($idalumnoFK,$Cod_listadecarrerasFK,$tablename,$valor);
}

if($funt=="editarexitencia2")
{
	
	$idalumnoFK=$_POST['idalumnoFK'];
    $idalumnoFK = utf8_decode($idalumnoFK);
	$Cod_listadecarrerasFK=$_POST['Cod_listadecarrerasFK'];
    $Cod_listadecarrerasFK = utf8_decode($Cod_listadecarrerasFK);
	$solicitud_matriculacion=$_POST['solicitud_matriculacion'];
    $solicitud_matriculacion = utf8_decode($solicitud_matriculacion);
	$contrato_matriculacion=$_POST['contrato_matriculacion'];
    $contrato_matriculacion = utf8_decode($contrato_matriculacion);
	$foto_tipo_carnet=$_POST['foto_tipo_carnet'];
    $foto_tipo_carnet = utf8_decode($foto_tipo_carnet);
	$ficha_academica=$_POST['ficha_academica'];
    $ficha_academica = utf8_decode($ficha_academica);
	$copia_de_cedula_autenticada=$_POST['copia_de_cedula_autenticada'];
    $copia_de_cedula_autenticada = utf8_decode($copia_de_cedula_autenticada);
	$copia_de_cedula_autenticada_fisico=$_POST['copia_de_cedula_autenticada_fisico'];
    $copia_de_cedula_autenticada_fisico = utf8_decode($copia_de_cedula_autenticada_fisico);
	$copia_autenticada_de_titulo_bachiller=$_POST['copia_autenticada_de_titulo_bachiller'];
    $copia_autenticada_de_titulo_bachiller = utf8_decode($copia_autenticada_de_titulo_bachiller);
	$certif_de_estudio_de_bachillerato_orinal_visado=$_POST['certif_de_estudio_de_bachillerato_orinal_visado'];
    $certif_de_estudio_de_bachillerato_orinal_visado = utf8_decode($certif_de_estudio_de_bachillerato_orinal_visado);$certif_de_estudio_de_bachillerato_orinal_visado_fisico=$_POST['certif_de_estudio_de_bachillerato_orinal_visado_fisico'];
    $certif_de_estudio_de_bachillerato_orinal_visado_fisico = utf8_decode($certif_de_estudio_de_bachillerato_orinal_visado_fisico);
	$certificado_nac=$_POST['certificado_nac'];
    $certificado_nac = utf8_decode($certificado_nac);
	$ubicacion=$_POST['ubicacion'];
    $ubicacion = utf8_decode($ubicacion);
	
	
editarexitencia2($idalumnoFK,$Cod_listadecarrerasFK,$solicitud_matriculacion,$contrato_matriculacion,$foto_tipo_carnet,$ficha_academica,$copia_de_cedula_autenticada,$copia_de_cedula_autenticada_fisico,$copia_autenticada_de_titulo_bachiller,$certif_de_estudio_de_bachillerato_orinal_visado,$certificado_nac,$ubicacion,$certif_de_estudio_de_bachillerato_orinal_visado_fisico);
}




	

}

function abm($idalumnoFK,$Cod_listadecarrerasFK,$certificado_nac,$ficha_academica,$contrato_matriculacion,$copia_autenticada_de_titulo_bachiller,$copia_de_cedula_autenticada,$foto_tipo_carnet,$solicitud_matriculacion,$certif_de_estudio_de_bachillerato_orinal_visado,$certif_de_estudio_de_bachillerato_orinal_visado_fisico,$copia_de_cedula_autenticada_fisico)
{
	
	if($idalumnoFK=="" || $Cod_listadecarrerasFK=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
	$idarchivos_alumnos=buscarultimaid($idalumnoFK,$Cod_listadecarrerasFK);

	$mysqli=conectar_al_servidor();

	
	if($idarchivos_alumnos=="")
	{
	
    $consulta="insert into archivos_alumnos_carreras_grado (idalumnoFK, Cod_listadecarrerasFK, certificado_nac, ficha_academica, contrato_matriculacion, copia_autenticada_de_titulo_bachiller, copia_de_cedula_autenticada, foto_tipo_carnet,solicitud_matriculacion, certif_de_estudio_de_bachillerato_orinal_visado,certif_de_estudio_de_bachillerato_orinal_visado_fisico,copia_de_cedula_autenticada_fisico) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssss';
    $stmt->bind_param($ss,$idalumnoFK,$Cod_listadecarrerasFK,$certificado_nac,$ficha_academica,$contrato_matriculacion,$copia_autenticada_de_titulo_bachiller,$copia_de_cedula_autenticada,$foto_tipo_carnet,$solicitud_matriculacion,$certif_de_estudio_de_bachillerato_orinal_visado,$certif_de_estudio_de_bachillerato_orinal_visado_fisico,$copia_de_cedula_autenticada_fisico); 
 
	}else{
		
		
		 $consulta="Update archivos_alumnos_carreras_grado set idalumnoFK=?, Cod_listadecarrerasFK=?, certificado_nac=?, ficha_academica=?, contrato_matriculacion=?, copia_autenticada_de_titulo_bachiller=?, copia_de_cedula_autenticada=?, foto_tipo_carnet=?, solicitud_matriculacion=?, certif_de_estudio_de_bachillerato_orinal_visado=?, certif_de_estudio_de_bachillerato_orinal_visado_fisico=? ,copia_de_cedula_autenticada_fisico=?  where idarchivos_alumnos=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sssssssssssss';        
    $stmt->bind_param($ss,$idalumnoFK,$Cod_listadecarrerasFK,$certificado_nac,$ficha_academica,$contrato_matriculacion,$copia_autenticada_de_titulo_bachiller,$copia_de_cedula_autenticada,$foto_tipo_carnet,$solicitud_matriculacion,$certif_de_estudio_de_bachillerato_orinal_visado,$certif_de_estudio_de_bachillerato_orinal_visado_fisico,$copia_de_cedula_autenticada_fisico,$idarchivos_alumnos); 
		
	}
	

if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

if($certificado_nac=="Si"){
	cargarArchivo("extgrado1","archivogrado1","certificado_nac_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("certificado_nac_url","",$idarchivos_alumnos);
}

if($ficha_academica=="Si"){
	cargarArchivo("extgrado2","archivogrado2","ficha_academica_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("ficha_academica_url","",$idarchivos_alumnos);
}
if($contrato_matriculacion=="Si"){
	cargarArchivo("extgrado3","archivogrado3","contrato_matriculacion_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("contrato_matriculacion_url","",$idarchivos_alumnos);
}
if($copia_autenticada_de_titulo_bachiller=="Si"){
	cargarArchivo("extgrado4","archivogrado4","copia_autenticada_de_titulo_bachiller_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("copia_autenticada_de_titulo_bachiller_url","",$idarchivos_alumnos);
}

if($copia_de_cedula_autenticada=="Si"){
	cargarArchivo("extgrado5","archivogrado5","copia_de_cedula_autenticada_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("copia_de_cedula_autenticada_url","",$idarchivos_alumnos);
}

if($foto_tipo_carnet=="Si"){
	cargarArchivo("extgrado6","archivogrado6","foto_tipo_carnet_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("foto_tipo_carnet_url","",$idarchivos_alumnos);
}

if($solicitud_matriculacion=="Si"){
	cargarArchivo("extgrado7","archivogrado7","solicitud_matriculacion_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("solicitud_matriculacion_url","",$idarchivos_alumnos);
}

if($certif_de_estudio_de_bachillerato_orinal_visado=="Si"){
	cargarArchivo("extgrado8","archivogrado8","certif_de_estudio_de_bachillerato_orinal_visado_url",$idarchivos_alumnos);
}else{
	InsertarArchivo("certif_de_estudio_de_bachillerato_orinal_visado_url","",$idarchivos_alumnos);
}

 mysqli_close($mysqli); 

    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function editarexitencia($idalumnoFK,$Cod_listadecarrerasFK,$tablename,$valor)
{
	
	if($idalumnoFK=="" || $Cod_listadecarrerasFK=="" || $valor=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
	$idarchivos_alumnos=buscarultimaid($idalumnoFK,$Cod_listadecarrerasFK);

	$mysqli=conectar_al_servidor();

	
	if($idarchivos_alumnos=="")
	{
	
    $consulta="insert into archivos_alumnos_carreras_grado (idalumnoFK, Cod_listadecarrerasFK) values (?, ?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ss';
    $stmt->bind_param($ss,$idalumnoFK,$Cod_listadecarrerasFK);  


if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
	$idarchivos_alumnos=buscarultimaid($idalumnoFK,$Cod_listadecarrerasFK);
	
		}	

$consulta="Update archivos_alumnos_carreras_grado set ".$tablename."='$valor' where idarchivos_alumnos='$idarchivos_alumnos' ";
	
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

function editarexitencia2($idalumnoFK,$Cod_listadecarrerasFK,$solicitud_matriculacion,$contrato_matriculacion,$foto_tipo_carnet,$ficha_academica,$copia_de_cedula_autenticada,$copia_de_cedula_autenticada_fisico,$copia_autenticada_de_titulo_bachiller,$certif_de_estudio_de_bachillerato_orinal_visado,$certificado_nac,$ubicacion,$certif_de_estudio_de_bachillerato_orinal_visado_fisico)
{
	
	if($idalumnoFK=="" || $Cod_listadecarrerasFK=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
	$idarchivos_alumnos=buscarultimaid($idalumnoFK,$Cod_listadecarrerasFK);

	$mysqli=conectar_al_servidor();

	
	if($idarchivos_alumnos=="")
	{
	
    $consulta="insert into archivos_alumnos_carreras_grado (idalumnoFK, Cod_listadecarrerasFK,solicitud_matriculacion,contrato_matriculacion,foto_tipo_carnet,ficha_academica,copia_de_cedula_autenticada,copia_de_cedula_autenticada_fisico,copia_autenticada_de_titulo_bachiller,certif_de_estudio_de_bachillerato_orinal_visado,certificado_nac,ubicacion,certif_de_estudio_de_bachillerato_orinal_visado_fisico) values 
	('$idalumnoFK', '$Cod_listadecarrerasFK','$solicitud_matriculacion','$contrato_matriculacion','$foto_tipo_carnet','$ficha_academica','$copia_de_cedula_autenticada','$copia_de_cedula_autenticada_fisico','$copia_autenticada_de_titulo_bachiller','$certif_de_estudio_de_bachillerato_orinal_visado','$certificado_nac','$ubicacion','$certif_de_estudio_de_bachillerato_orinal_visado_fisico')";	
	

     $stmt = $mysqli->prepare($consulta);
    if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
	$idarchivos_alumnos=buscarultimaid($idalumnoFK,$Cod_listadecarrerasFK);
	
		}else{	

$consulta="Update archivos_alumnos_carreras_grado set solicitud_matriculacion='$solicitud_matriculacion' ,contrato_matriculacion='$contrato_matriculacion' ,foto_tipo_carnet='$foto_tipo_carnet',ficha_academica='$ficha_academica' ,copia_de_cedula_autenticada='$copia_de_cedula_autenticada' ,copia_de_cedula_autenticada_fisico='$copia_de_cedula_autenticada_fisico' ,copia_autenticada_de_titulo_bachiller='$copia_autenticada_de_titulo_bachiller' ,certif_de_estudio_de_bachillerato_orinal_visado='$certif_de_estudio_de_bachillerato_orinal_visado' ,certificado_nac='$certificado_nac' ,ubicacion='$ubicacion',certif_de_estudio_de_bachillerato_orinal_visado_fisico='$certif_de_estudio_de_bachillerato_orinal_visado_fisico' where idarchivos_alumnos='$idarchivos_alumnos' ";
	
$stmt = $mysqli->prepare($consulta);
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

		}

 mysqli_close($mysqli); 

    $informacion =array("1" => "exito");
    echo json_encode($informacion);	
    exit;
	
}

function cargarArchivo($cod_ext,$cod_archivo,$tableName,$IdRegistro){
	
$ext=$_POST[$cod_ext];
$ext = utf8_decode($ext);

if($ext!=""){
	$archivo=substr($_POST[$cod_archivo], strpos($_POST[$cod_archivo], ",") + 1);;
$archivo = base64_decode($archivo);
$id_foto="";		  
		     $donde="../arhivosmatriculacion/";
			  $id_foto=$IdRegistro;
                $id_f=subir_imagen_base64($donde,$archivo,$id_foto,$ext);
$ruta="/GoodTechnologyEPNSA/arhivosmatriculacion/".$IdRegistro.$id_f.'.'.$ext;
InsertarArchivo($tableName,$ruta,$IdRegistro);
}


}

function InsertarArchivo($tableName,$ruta,$IdRegistro){
	$mysqli=conectar_al_servidor();
	$consulta="Update archivos_alumnos_carreras_grado set ".$tableName."=? where idarchivos_alumnos=? ";	

	$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$ruta,$IdRegistro); 
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
	 mysqli_close($mysqli);
}

function buscarultimaid($idalumnoFK,$Cod_listadecarrerasFK)
{
	$mysqli=conectar_al_servidor();
	 $idarchivos_alumnos='';
	
		$sql= "Select idarchivos_alumnos from archivos_alumnos_carreras_grado where idalumnoFK='$idalumnoFK' and Cod_listadecarrerasFK='$Cod_listadecarrerasFK'";
		 
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
		  
		      $idarchivos_alumnos=$valor['idarchivos_alumnos'];
	  
	  }
	  
 } 
return $idarchivos_alumnos;
}



function buscararchivos($idalumnoFK,$Cod_listadecarrerasFK)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idarchivos_alumnos, certificado_nac, certificado_nac_url, foto_tipo_carnet, foto_tipo_carnet_url, ficha_academica, ficha_academica_url, contrato_matriculacion, contrato_matriculacion_url, solicitud_matriculacion, solicitud_matriculacion_url, copia_autenticada_de_titulo_bachiller, copia_autenticada_de_titulo_bachiller_url, certif_de_estudio_de_bachillerato_orinal_visado_fisico,copia_de_cedula_autenticada_fisico,certif_de_estudio_de_bachillerato_orinal_visado, certif_de_estudio_de_bachillerato_orinal_visado_url, copia_de_cedula_autenticada, copia_de_cedula_autenticada_url, idalumnoFK, Cod_listadecarrerasFK
        from archivos_alumnos_carreras_grado where idalumnoFK='$idalumnoFK' and Cod_listadecarrerasFK='$Cod_listadecarrerasFK' ";
		 
   $stmt = $mysqli->prepare($sql);
  

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$idarchivos_alumnos="";
$idalumnoFK="";
$Cod_listadecarrerasFK="";
$certificado_nac="";
$certificado_nac_url="";
$foto_tipo_carnet="";
$foto_tipo_carnet_url="";
$ficha_academica="";
$ficha_academica_url="";
$contrato_matriculacion="";
$contrato_matriculacion_url="";
$solicitud_matriculacion="";
$solicitud_matriculacion_url="";
$copia_autenticada_de_titulo_bachiller="";
$copia_autenticada_de_titulo_bachiller_url="";
$certif_de_estudio_de_bachillerato_orinal_visado="";
$certif_de_estudio_de_bachillerato_orinal_visado_url="";
$certif_de_estudio_de_bachillerato_orinal_visado_fisico="";
$copia_de_cedula_autenticada_fisico="";
$copia_de_cedula_autenticada="";
$copia_de_cedula_autenticada_url="";
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
		  	  		    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $certificado_nac,"3"=> $certificado_nac_url,"4"=> $foto_tipo_carnet,"5"=> $foto_tipo_carnet_url,"6"=> $ficha_academica,"7"=> $ficha_academica_url,"8"=> $contrato_matriculacion,"9"=> $contrato_matriculacion_url,"10"=> $solicitud_matriculacion,"11"=> $solicitud_matriculacion_url,"12"=> $copia_autenticada_de_titulo_bachiller,"13"=> $copia_autenticada_de_titulo_bachiller_url,"14"=> $certif_de_estudio_de_bachillerato_orinal_visado,"15"=> $certif_de_estudio_de_bachillerato_orinal_visado_url,"16"=> $copia_de_cedula_autenticada,"17"=> $copia_de_cedula_autenticada_url,"18"=> $certif_de_estudio_de_bachillerato_orinal_visado_fisico,"19"=> $copia_de_cedula_autenticada_fisico);
echo json_encode($informacion);	
exit;


}





verificar($funt);
?>