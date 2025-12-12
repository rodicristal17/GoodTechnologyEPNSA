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
	
	
	$idalumno=$_POST['idabm'];
    $idalumno = utf8_decode($idalumno);
	$ci=$_POST['ci'];
    $ci = utf8_decode($ci);
	$nombre=$_POST['nombre'];
    $nombre = utf8_decode($nombre);
	$apellido=$_POST['apellido'];
    $apellido = utf8_decode($apellido);
	$email=$_POST['email'];
    $email = utf8_decode($email);
	$telef=$_POST['telef'];
    $telef = utf8_decode($telef);
	$whatsapp=$_POST['whatsapp'];
    $whatsapp = utf8_decode($whatsapp);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	
	$premio=$_POST['premio'];
    $premio = utf8_decode($premio);
	$direccion=$_POST['direccion'];
    $direccion = utf8_decode($direccion);
	$trabajo=$_POST['trabajo'];
    $trabajo = utf8_decode($trabajo);
	$encargado=$_POST['encargado'];
    $encargado = utf8_decode($encargado);
	$estudio=$_POST['estudio'];
    $estudio = utf8_decode($estudio);
	$fechanac=$_POST['fechanac'];
    $fechanac = utf8_decode($fechanac);
	$obs=$_POST['obs'];
    $obs = utf8_decode($obs);
	
	$tipodoc=$_POST['tipodoc'];
    $tipodoc = utf8_decode($tipodoc);
	$ruc =$_POST['ruc'];
    $ruc = utf8_decode($ruc);
	$telencargado=$_POST['telencargado'];
    $telencargado = utf8_decode($telencargado);
	
	abm($tipodoc,$ruc,$telencargado,$premio,$direccion,$trabajo,$encargado,$estudio,$fechanac,$obs,$idalumno,$ci,$nombre,$apellido,$email,$telef,$whatsapp,$estado,$funt);

}


if($funt=="buscarRegistro")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$apellido=$_POST['apellido'];
$apellido = utf8_decode($apellido);
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codFilialFk=$_POST['codFilialFk'];
$codFilialFk = utf8_decode($codFilialFk);
$codCarreraFk=$_POST['codCarreraFk'];
$codCarreraFk = utf8_decode($codCarreraFk);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
// if($codFilialFk==""){
 // $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	// if($control==0){
		// $codFilialFk=buscarmifilialFK($user);
	// }
// }
	  
buscarRegistro($documento,$apellido,$nombre,$estado,$codFilialFk,$codCarreraFk,$ordenby);

}



if($funt=="buscar")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$apellido=$_POST['apellido'];
$apellido = utf8_decode($apellido);
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$codFilialFk=$_POST['codFilialFk'];
$codFilialFk = utf8_decode($codFilialFk);
$codCarreraFk=$_POST['codCarreraFk'];
$codCarreraFk = utf8_decode($codCarreraFk);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
// if($codFilialFk==""){
 // $control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	// if($control==0){
		// $codFilialFk=buscarmifilialFK($user);
	// }
// }
	  
buscar($documento,$apellido,$nombre,$estado,$codFilialFk,$codCarreraFk,$ordenby);

}

if($funt=="buscarvista")
{
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$nombre=$_POST['nombre'];
$nombre = utf8_decode($nombre);
$apellido=$_POST['apellido'];
$apellido = utf8_decode($apellido);
buscarvista($documento,$nombre,$apellido);

}

if($funt=="buscarmatriculacion")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarmatriculacion($buscar);

}
 

}



function buscarRegistro($documento,$apellido,$nombre,$estado,$codFilialFk,$codCarreraFk,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	
$stmt = $mysqli->prepare("select count(al1.ci) from alumno al1 where al1.estado='Activo'");
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$result = $stmt->get_result();
$nro_total=$result->fetch_row();
$TotalAlumno=$nro_total[0];


$oderby="";
	if($ordenby=="1"){
		$oderby="order by ci asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombre asc";
	}
	if($ordenby=="3"){
		$oderby="order by apellido asc";
	}
	$condicionDocumento="";
	$condicionNombre="";
	$condicionApellido="";
	if($documento!=""){
		$condicionDocumento=" and ci = '".$documento."'";
	}
	if($nombre!=""){
		$condicionNombre=" and nombre like '%".$nombre."%'";
	}
	if($apellido!=""){
		$condicionApellido=" and apellido like '%".$apellido."%'";
	}
	
	 

$sql= "Select  idalumno,ci, nombre, apellido, email, telef, whatsapp, al.estado , al.dir_domicilio , ruc, celpadre , tipodoc , al.trabajo,al.encargado, al.estud_cursa,al.premio,al.observacion,al.fechanac  
        from alumno  al  
		where  al.estado='".$estado."'  ".$condicionNombre.$condicionApellido.$condicionDocumento." ".$oderby." limit 1000";
 
		 
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
		  
			
		  
		      $idalumno=$valor['idalumno'];
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $email=utf8_encode($valor['email']);
		  	  $telef=utf8_encode($valor['telef']);
		  	  $whatsapp=utf8_encode($valor['whatsapp']);
		  	  $estado=utf8_encode($valor['estado']);
			  
			  $ruc=utf8_encode($valor['ruc']);
			  $celpadre=utf8_encode($valor['celpadre']);
			  $tipodoc=utf8_encode($valor['tipodoc']); 

			$dir_domicilio=utf8_encode($valor['dir_domicilio']);
			$trabajo=utf8_encode($valor['trabajo']);
			$encargado=utf8_encode($valor['encargado']);
			$estud_cursa=utf8_encode($valor['estud_cursa']);
			$premio=utf8_encode($valor['premio']);
			$observacion=utf8_encode($valor['observacion']);
			$fechanac=utf8_encode($valor['fechanac']); 
		  	
		  	  $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
		  	if($ordenby=="1"){
		$styleorden1="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="2"){
		$styleorden2="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="3"){
		$styleorden3="color: #000; background-color: #e7e7e7;";
	}
 
	
	
	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAbmAlumnos(this)'>
			  <td id='td_id' style='display:none;'>".$idalumno."</td>
			   <td  id='td_datos_1' style='width:15%;".$styleorden1."' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%;".$styleorden2."' >".$nombre."</td>
			   <td  id='td_datos_3'style='width:15%;".$styleorden3."' >".$apellido."</td>
			   <td  id='td_datos_4' style='display:none' >".$email."</td>
			    <td  id='td_datos_5' style='width:15%' >".$telef."</td> 
			  
			   <td  id='td_datos_6' style='display:none' >".$whatsapp."</td>
			   <td  id='td_datos_7' style='display:none' >".$estado."</td>
			   
			   <td  id='td_datos_8' style='display:none' >".$dir_domicilio."</td>
			   <td  id='td_datos_9' style='display:none' >".$trabajo."</td>
			   <td  id='td_datos_10' style='display:none' >".$encargado."</td>
			   <td  id='td_datos_11' style='display:none' >".$estud_cursa."</td>
			   <td  id='td_datos_12' style='display:none' >".$premio."</td>
			   <td  id='td_datos_13' style='display:none' >".$observacion."</td>
			   <td  id='td_datos_14' style='display:none' >".$fechanac."</td>
			   
			   <td  id='td_datos_15' style='display:none' >".$ruc."</td>
			   <td  id='td_datos_16' style='display:none' >".$celpadre."</td>
			   <td  id='td_datos_17' style='display:none' >".$tipodoc."</td> 
			  </tr>
			  </table>";
	 		  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=>  number_format($TotalAlumno,'0',',','.') );
echo json_encode($informacion);	
exit;


}




function abm($tipodoc,$ruc,$telencargado,$premio,$direccion,$trabajo,$encargado,$estudio,$fechanac,$obs,$idalumno,$ci,$nombre,$apellido,$email,$telef,$whatsapp,$estado,$funt)
{	
	if($ci=="" && $nombre==""&& $apellido=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}
	$mysqli=conectar_al_servidor();
	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from alumno where ci=?  ";
		$stmt = $mysqli->prepare($consulta);
$ss='s';
$stmt->bind_param($ss,$ci); 
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
    $consulta="insert into alumno (ci, nombre, apellido, email, telef, whatsapp, estado , dir_domicilio , trabajo,encargado,estud_cursa,premio,observacion,fechanac,ruc,celpadre,tipodoc) values (?,upper(?),upper(?),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sssssssssssssssss';
    $stmt->bind_param($ss,$ci,$nombre,$apellido,$email,$telef,$whatsapp,$estado,$direccion,$trabajo,$encargado,$estudio,$premio,$obs,$fechanac,$ruc,$telencargado,$tipodoc); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update alumno set ci=?, nombre=upper(?), apellido=upper(?), email=?, telef=?, whatsapp=?, estado=?, dir_domicilio=?, trabajo=?, encargado=?, estud_cursa=?, premio=?, observacion=?, fechanac=? ,ruc=? ,celpadre=?,tipodoc=?  where idalumno=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssssssssss';        
    $stmt->bind_param($ss,$ci,$nombre,$apellido,$email,$telef,$whatsapp,$estado,$direccion,$trabajo,$encargado,$estudio,$premio,$obs,$fechanac,$ruc,$telencargado,$tipodoc,$idalumno); 
       
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

function buscar($documento,$apellido,$nombre,$estado,$codFilialFk,$codCarreraFk,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
	
$stmt = $mysqli->prepare("select count(al1.ci) from alumno al1 where al1.estado='Activo'");
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$result = $stmt->get_result();
$nro_total=$result->fetch_row();
$TotalAlumno=$nro_total[0];


$oderby="";
	if($ordenby=="1"){
		$oderby="order by ci asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombre asc";
	}
	if($ordenby=="3"){
		$oderby="order by apellido asc";
	}
	$condicionDocumento="";
	$condicionNombre="";
	$condicionApellido="";
	if($documento!=""){
		$condicionDocumento=" and ci = '".$documento."'";
	}
	if($nombre!=""){
		$condicionNombre=" and nombre like '%".$nombre."%'";
	}
	if($apellido!=""){
		$condicionApellido=" and apellido like '%".$apellido."%'";
	}
	
	 

$sql= "Select cr.cod_carreraFK,cr.idcursosalumno,idalumno,ci, nombre, apellido, email, telef, whatsapp, al.estado , al.dir_domicilio , ruc, celpadre , tipodoc , al.trabajo,al.encargado, al.estud_cursa,al.premio,al.observacion,al.fechanac ,cr.anho,cr.curso,cr.semestre,
(select nombre from listadecarreras where Cod_listadecarreras=Cod_listadecarrerasFK) as Nombrecarrera
        from alumno  al 
		inner join cursosalumno cr on cr.idalumnoFk=al.idalumno
		inner join carrera car on car.cod_carrera=cr.cod_carreraFK
		where  al.estado='".$estado."' and cr.estado='Activo' ".$condicionNombre.$condicionApellido.$condicionDocumento." ".$oderby." limit 1000";
      
	
	if($codFilialFk!=""){
	$sql= "Select cr.cod_carreraFK,cr.idcursosalumno,al.idalumno,al.ci,al.nombre,al.apellido,al.email,al.telef,al.whatsapp,al.estado , ruc, celpadre , tipodoc,
	al.dir_domicilio , al.trabajo,al.encargado,al.estud_cursa,al.premio,al.observacion,al.fechanac,cr.anho,cr.curso,cr.semestre,
(select nombre from listadecarreras where Cod_listadecarreras=Cod_listadecarrerasFK) as Nombrecarrera
        from alumno al 
		inner join cursosalumno cr on cr.idalumnoFk=al.idalumno
		inner join carrera car on car.cod_carrera=cr.cod_carreraFK
		where al.estado='".$estado."' and cr.estado='Activo' ".$condicionNombre.$condicionApellido.$condicionDocumento." and car.cod_filialOringFK='".$codFilialFk."' ".$oderby;
	}
	
	if($codCarreraFk!=""){
	$sql= "Select cr.cod_carreraFK,cr.idcursosalumno,al.idalumno,al.ci,al.nombre,al.apellido,al.email,al.telef,al.whatsapp,al.estado , ruc, celpadre , tipodoc,
	al.dir_domicilio , al.trabajo,al.encargado,al.estud_cursa,al.premio,al.observacion,al.fechanac,cr.anho,cr.curso,cr.semestre,
(select nombre from listadecarreras where Cod_listadecarreras=Cod_listadecarrerasFK) as Nombrecarrera
        from alumno al inner join cursosalumno cr on cr.idalumnoFk=al.idalumno
		inner join carrera car on car.cod_carrera=cr.cod_carreraFK
		where al.estado='".$estado."' and cr.estado='Activo'  ".$condicionNombre.$condicionApellido.$condicionDocumento." and car.Cod_listadecarrerasFK='".$codFilialFk."'  ".$oderby;
	}
	if($codCarreraFk!="" && $codFilialFk!=""){
	$sql= "Select cr.cod_carreraFK,cr.idcursosalumno,al.idalumno,al.ci,al.nombre,al.apellido,al.email,al.telef,al.whatsapp,al.estado,
	al.dir_domicilio , al.trabajo,al.encargado,al.estud_cursa,al.premio,al.observacion,al.fechanac,cr.anho,cr.curso,cr.semestre,
(select nombre from listadecarreras where Cod_listadecarreras=Cod_listadecarrerasFK) as Nombrecarrera
        from alumno al inner join cursosalumno cr on cr.idalumnoFk=al.idalumno
		inner join carrera car on car.cod_carrera=cr.cod_carreraFK
		where al.estado='".$estado."' and cr.estado='Activo' ".$condicionNombre.$condicionApellido.$condicionDocumento." and car.Cod_listadecarrerasFK='".$codFilialFk."' and car.cod_filialOringFK='".$codFilialFk."' ".$oderby;
	}
	
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
		  
			
		  
		      $idalumno=$valor['idalumno'];
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $email=utf8_encode($valor['email']);
		  	  $telef=utf8_encode($valor['telef']);
		  	  $whatsapp=utf8_encode($valor['whatsapp']);
		  	  $estado=utf8_encode($valor['estado']);
			  
			  $ruc=utf8_encode($valor['ruc']);
			  $celpadre=utf8_encode($valor['celpadre']);
			  $tipodoc=utf8_encode($valor['tipodoc']);
			  $cod_carreraFK=utf8_encode($valor['cod_carreraFK']);

			$dir_domicilio=utf8_encode($valor['dir_domicilio']);
			$trabajo=utf8_encode($valor['trabajo']);
			$encargado=utf8_encode($valor['encargado']);
			$estud_cursa=utf8_encode($valor['estud_cursa']);
			$premio=utf8_encode($valor['premio']);
			$observacion=utf8_encode($valor['observacion']);
			$fechanac=utf8_encode($valor['fechanac']);
			$Nombrecarrera=utf8_encode($valor['Nombrecarrera']);
			$anho=utf8_encode($valor['anho']);
			$curso=utf8_encode($valor['curso']);
			$semestre=utf8_encode($valor['semestre']);
			$idcursosalumno=utf8_encode($valor['idcursosalumno']);
		  	
		  	  $styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
		  	if($ordenby=="1"){
		$styleorden1="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="2"){
		$styleorden2="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="3"){
		$styleorden3="color: #000; background-color: #e7e7e7;";
	}
	
	BuscarCursoCliente($idalumno,$anho,$curso,$semestre);
	
	
	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAbmAlumnos(this)'>
			  <td id='td_id' style='display:none;'>".$idalumno."</td>
			   <td  id='td_datos_1' style='width:15%;".$styleorden1."' >".$ci."</td>
			   <td  id='td_datos_2' style='width:15%;".$styleorden2."' >".$nombre."</td>
			   <td  id='td_datos_3'style='width:15%;".$styleorden3."' >".$apellido."</td>
			   <td  id='td_datos_4' style='display:none' >".$email."</td>
			    <td  id='td_datos_5' style='width:15%' >".$telef."</td>
			   <td  id='td_datos_23' style='display:none' >".$Nombrecarrera."</td>
			   <td  id='td_datos_24' style='display:none' >".$anho."</td>
			   <td  id='td_datos_25' style='display:none' >".$curso."</td>
			   <td  id='td_datos_26' style='display:none' >".$semestre."</td>
			  
			   <td  id='td_datos_6' style='display:none' >".$whatsapp."</td>
			   <td  id='td_datos_7' style='display:none' >".$estado."</td>
			   
			   <td  id='td_datos_8' style='display:none' >".$dir_domicilio."</td>
			   <td  id='td_datos_9' style='display:none' >".$trabajo."</td>
			   <td  id='td_datos_10' style='display:none' >".$encargado."</td>
			   <td  id='td_datos_11' style='display:none' >".$estud_cursa."</td>
			   <td  id='td_datos_12' style='display:none' >".$premio."</td>
			   <td  id='td_datos_13' style='display:none' >".$observacion."</td>
			   <td  id='td_datos_14' style='display:none' >".$fechanac."</td>
			   
			   <td  id='td_datos_15' style='display:none' >".$ruc."</td>
			   <td  id='td_datos_16' style='display:none' >".$celpadre."</td>
			   <td  id='td_datos_17' style='display:none' >".$tipodoc."</td>
			   <td  id='td_datos_21' style='display:none' >".$idcursosalumno."</td>
			   <td  id='td_datos_22' style='display:none' >".$cod_carreraFK."</td>
			  </tr>
			  </table>";
	 		  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=>  number_format($TotalAlumno,'0',',','.') );
echo json_encode($informacion);	
exit;


}

function BuscarCursoCliente($idalumno,$anho,$curso,$semestre){
 
$mysqli=conectar_al_servidor();

$sql= "select  c.cod_filialOringFK as cod_filial, ldc.nombre, ( select nombre from listadodematerias lm where mc.idlistadodematerias=lm.idlistadodematerias) as materia,
 ca.idcursosalumno,dc.idlistadoProfesores ,Cod_listadecarrerasFK,
 mc.idmallacurricular,ca.seccion,ca.turno,mc.anho,mc.curso,mc.semestre,c.cod_carrera,iddocente_catedra 
	from mallacurricular mc 
	join listadecarreras ldc on ldc.Cod_listadecarreras = mc.cod_carrera 
	join carrera c on c.Cod_listadecarrerasFK = ldc.Cod_listadecarreras 
	join cursosalumno ca on ca.cod_carreraFK = c.cod_carrera 
	join docente_catedra dc on dc.idmallacurricular = mc.idmallacurricular 
	join listadoprofesores lp on lp.idlistadoProfesores = dc.idlistadoProfesores 
	join alumno a on ca.idalumnoFk = a.idalumno 
	 where  idalumno='".$idalumno."' and mc.anho='".$anho."' and mc.curso='".$curso."' and mc.semestre ='".$semestre."' group by  mc.idmallacurricular asc   order by mc.idmallacurricular desc";
 
	 

 
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
		  $iddocente_catedra=$valor['iddocente_catedra'];
		  $seccion=$valor['seccion'];
		  $turno=$valor['turno'];
		  $anho=$valor['anho'];
		  $curso=$valor['curso'];
		  $semestre=$valor['semestre'];
		  $cod_carrera=$valor['cod_carrera'];
		  $cod_filial=$valor['cod_filial'];
		  $Cod_listadecarrerasFK=$valor['Cod_listadecarrerasFK'];
		VerificarCursoCliente($idalumno,$idcursosalumno,$iddocente_catedra,$seccion,$turno,$anho,$curso,$semestre,$Cod_listadecarrerasFK,$cod_filial);
	  }
	  
 }

 mysqli_close($mysqli); 
	
}

function VerificarCursoCliente($idalumno,$idcursosalumno, $iddocente_catedra, $seccion, $turno, $anho, $curso, $semestre, $Cod_listadecarrerasFK, $cod_filial) {
    $mysqli = conectar_al_servidor();

    $sql = "SELECT idlistadoalumnos FROM listadoalumnos 
            WHERE idcursosalumnoFk ='$idcursosalumno' AND iddocente_catedraFK = '$iddocente_catedra' AND cod_alumnoFK = '$idalumno' AND anho = '$anho' AND curso = '$curso' AND semestre = '$semestre'";
 
    $stmt = $mysqli->prepare($sql);
    if (!$stmt) {
        echo "Error en la preparación de la consulta: " . $mysqli->error;
        mysqli_close($mysqli);
        return;
    }
 

    if (!$stmt->execute()) {
        echo "Error al ejecutar la consulta: " . $stmt->error;
        mysqli_close($mysqli);
        return;
    }

    $result = $stmt->get_result();
    $valor = $result->num_rows;

    if ($valor == 0) {
		insertarlistado($idalumno,$idcursosalumno,$iddocente_catedra,"Pendiente",$anho,$curso,$semestre);
        // crearlistacalificacion($idcursosalumno,$idalumno,$seccion, $turno, $anho, $curso, $semestre, $Cod_listadecarrerasFK, $cod_filial, $iddocente_catedra);
    }

    $stmt->close();
    mysqli_close($mysqli);
}




 

function insertarlistado($idalumno,$idcursosalumnoFk,$iddocente_catedraFK,$estado,$anho,$curso,$semestre)
{
	 
	$mysqli=conectar_al_servidor();
	
	$consulta="delete from listadoalumnos where idcursosalumnoFk=? and iddocente_catedraFK=? and cod_alumnoFK=?  AND anho = ? AND curso = ? AND semestre = ?";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssss';
    $stmt->bind_param($ss,$idcursosalumnoFk,$iddocente_catedraFK,$idalumno,$anho,$curso,$semestre); 
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}
	
    $consulta="insert into listadoalumnos (idcursosalumnoFk, iddocente_catedraFK, estado1,estado2,estado3,cod_alumnoFK,anho,curso,semestre) values ($idcursosalumnoFk,$iddocente_catedraFK,'Habilitado','Habilitado','Habilitado','$idalumno','$anho','$curso','$semestre')";	
     $stmt = $mysqli->prepare($consulta);

if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 

}


function buscarvista($documento,$nombre,$apellido)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condiciondocumento="";
	 if($documento!=""){
		  $condiciondocumento="and ci='".$documento."'";
	 }
	 $condicionnombre="";
	 if($nombre!=""){
		 $condicionnombre="and nombre like '%".$nombre."%'";
	 }
	 $condicionapellido="";
	 if($apellido!=""){
		 $condicionapellido="and apellido like '%".$apellido."%'";
	 }
		$sql= "Select idalumno,ci, nombre, apellido, email, telef, whatsapp, estado 
        from alumno where estado='Activo' ".$condiciondocumento.$condicionnombre.$condicionapellido." order by nombre asc limit 100";
		 
		
		 
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
		  
		  
		  
		      $idalumno=$valor['idalumno'];
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $email=utf8_encode($valor['email']);
		  	  $telef=utf8_encode($valor['telef']);
		  	  $whatsapp=utf8_encode($valor['whatsapp']);
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosVistaAlumnos(this)'>
			  <td id='td_id' style='display:none;'>".$idalumno."</td>
			   <td  id='td_datos_1' style='width:10%' >".$ci."</td>
			   <td  id='td_datos_2' style='width:10%' >".$nombre."</td>
			   <td  id='td_datos_3' style='width:10%' >".$apellido."</td>
			   <td  id='td_datos_4' style='display:none' >".$email."</td>
			   <td  id='td_datos_5' style='display:none' >".$telef."</td>
			   <td  id='td_datos_6' style='display:none' >".$whatsapp."</td>
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


function buscarmatriculacion($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idalumno,ci, nombre, apellido, email, telef, whatsapp, estado 
        from alumno where ci='$buscar' and estado='Activo'  limit 1";
		 
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
		  
		  
		  
		      $idalumno=$valor['idalumno'];
		  	  $ci=utf8_encode($valor['ci']);
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $apellido=utf8_encode($valor['apellido']);
		  	  $email=utf8_encode($valor['email']);
		  	  $telef=utf8_encode($valor['telef']);
		  	  $whatsapp=utf8_encode($valor['whatsapp']);
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tdAlumnoCi' onclick='ObtenerdatosVistaAlumnos(this)' >
			  <td id='td_id' style='display:none;'>".$idalumno."</td>
			   <td  id='td_datos_1' style='width:10%' >".$ci."</td>
			   <td  id='td_datos_2' style='width:10%' >".$nombre."</td>
			   <td  id='td_datos_3' style='width:10%' >".$apellido."</td>
			   <td  id='td_datos_4' style='display:none' >".$email."</td>
			   <td  id='td_datos_5' style='display:none' >".$telef."</td>
			   <td  id='td_datos_6' style='display:none' >".$whatsapp."</td>
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



verificar($funt);
?>