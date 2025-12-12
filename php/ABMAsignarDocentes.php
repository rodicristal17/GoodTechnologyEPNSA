<?php
include_once('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
include_once("conexion.php");
include_once("verificar_navegador.php");
include_once("buscar_nivel.php");
include_once('quitarseparadormiles.php');
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

	// buscarnivel($user,"CARRERA"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"CARRERA"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"CARRERA"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$iddocente_catedra=$_POST['idabm'];
    $iddocente_catedra = utf8_decode($iddocente_catedra);
	$idmallacurricular=$_POST['idmallacurricular'];
    $idmallacurricular = utf8_decode($idmallacurricular);
	$idlistadoProfesores=$_POST['idlistadoProfesores'];
    $idlistadoProfesores = utf8_decode($idlistadoProfesores);
	$cod_filial=$_POST['cod_filial'];
    $cod_filial = utf8_decode($cod_filial);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$turno=$_POST['turno'];
    $turno = utf8_decode($turno);
	$seccion=$_POST['seccion'];
    $seccion = utf8_decode($seccion);
	$anho=$_POST['anho'];
    $anho = utf8_decode($anho);
	$curso=$_POST['curso'];
    $curso = utf8_decode($curso);
	$semestre=$_POST['semestre'];
    $semestre = utf8_decode($semestre);
	$dias=$_POST['dias'];
    $dias = utf8_decode($dias);
	$hinicio=$_POST['hinicio'];
    $hinicio = utf8_decode($hinicio);
	$hfin=$_POST['hfin'];
    $hfin = utf8_decode($hfin);
 
	abm($dias,$hinicio,$hfin,$turno,$seccion,$iddocente_catedra,$idmallacurricular,$idlistadoProfesores,$cod_filial,$estado,$anho,$curso,$semestre,$funt);

}

if($funt=="buscar")
{
$filial=$_POST['filial'];
$filial = utf8_decode($filial);
$carrera=$_POST['carrera'];
$carrera = utf8_decode($carrera);
$catedra=$_POST['catedra'];
$catedra = utf8_decode($catedra);
$docente=$_POST['docente'];
$docente = utf8_decode($docente);
$anho=$_POST['anho'];
$anho = utf8_decode($anho);
$curso=$_POST['curso'];
$curso = utf8_decode($curso);
$semestre=$_POST['semestre'];
$semestre = utf8_decode($semestre);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$turno=$_POST['turno'];
$turno = utf8_decode($turno);
$seccion=$_POST['seccion'];
$seccion = utf8_decode($seccion);
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
buscar($documento,$filial,$carrera,$catedra,$docente,$anho,$curso,$semestre,$estado,$turno,$seccion,$ordenby);

}


if($funt=="buscarlista")
{
$filial=$_POST['filial'];
$filial = utf8_decode($filial);
$carrera=$_POST['carrera'];
$carrera = utf8_decode($carrera);
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
$documento=$_POST['documento'];
$documento = utf8_decode($documento);
$nombreapellido=$_POST['nombreapellido'];
$nombreapellido = utf8_decode($nombreapellido);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);

buscarlista($filial,$carrera,$anho,$curso,$semestre,$turno,$seccion,$documento,$nombreapellido,$ordenby);

}

if($funt=="buscarSelect")
{

buscarSelect($user);

}





	

}

function abm($dias,$hinicio,$hfin,$turno,$seccion,$iddocente_catedra,$idmallacurricular,$idlistadoProfesores,$cod_filial,$estado,$anho,$curso,$semestre,$funt)
{
	
	
	if( $idmallacurricular=="" || $idlistadoProfesores=="" || $cod_filial=="" || $turno=="" || $seccion=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from docente_catedra where idmallacurricular=? and idlistadoProfesores=? and cod_filial=? and turno=? and seccion=? and anho=? and curso=? and semestre=?  and dias=? and hinicio=? and hfin=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='sssssssssss';
$stmt->bind_param($ss,$idmallacurricular,$idlistadoProfesores,$cod_filial,$turno,$seccion,$anho,$curso,$semestre,$dias,$hinicio,$hfin); 


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


	$consulta= "Select count(*) from docente_catedra where idmallacurricular=? and cod_filial=? and turno=? and seccion=? and anho=? and curso=? and semestre=?  and dias=? and hinicio=? and hfin=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ssssssssss';
$stmt->bind_param($ss,$idmallacurricular,$cod_filial,$turno,$seccion,$anho,$curso,$semestre,$dias,$hinicio,$hfin); 


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
	
    $consulta="insert into docente_catedra (estado, idlistadoProfesores,idmallacurricular,cod_filial,turno,seccion,anho,curso,semestre,dias,hinicio,hfin) values (?,?,?,?,?,?,?,?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssssssss';
    $stmt->bind_param($ss,$estado,$idlistadoProfesores,$idmallacurricular,$cod_filial,$turno,$seccion,$anho,$curso,$semestre,$dias,$hinicio,$hfin); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update docente_catedra set estado=?,idlistadoProfesores=?,idmallacurricular=?,cod_filial=?,turno=?,seccion=?,anho=?,curso=?,semestre=?,dias=?,hinicio=?,hfin=?  where iddocente_catedra=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sssssssssssss';        
    $stmt->bind_param($ss,$estado,$idlistadoProfesores,$idmallacurricular,$cod_filial,$turno,$seccion,$anho,$curso,$semestre,$dias,$hinicio,$hfin,$iddocente_catedra); 
       
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

function buscar($documento,$filial,$carrera,$catedra,$docente,$anho,$curso,$semestre,$estado,$turno,$seccion,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina="<table style='display:none'>
			  <tr >
			 <td>ID-Docente (Eliminar)</td>
			  <td>ID-Malla (Eliminar)</td>
			  <td>ID-Filial (Eliminar)</td>
			  <td>Nombre Filial</td>
			  <td>Nombre Carrera</td>
			  <td>Nombre Catedra</td>
			  <td>Nro Documento</td>
			  <td>Nombre y Apellido</td>
			  <td>Documento / Nombre y Apellido (Eliminar)</td>
			  <td>Año</td>
			  <td>Curso</td>
			  <td>Semestre</td>
			   <td>Turno</td>
			  <td>Sección</td>
			  <td>Hora Semanal</td>
			  <td>Importe x Hora</td>
			  <td>ID-Malla (Eliminar)</td>
			  <td>Estado (Eliminar)</td>			
			  </tr>
			  </table>";
	 $condicionfilial="";
	 if($filial!=""){
		$condicionfilial="and dtc.cod_filial='".$filial."' "; 
	 }
	 $condicioncarrera="";
	 if($carrera!=""){
		$condicioncarrera="and ml.cod_carrera='".$carrera."' "; 
	 }
	 $condicioncatedra="";
	 if($catedra!=""){
		$condicioncatedra="and ml.idlistadodematerias='".$catedra."' "; 
	 }
	 $condiciondocente="";
	 if($docente!=""){
		$condiciondocente="and ltp.nombreapellido like '%".$docente."%' "; 
	 }
	 $condiciondocumento="";
	 if($documento!=""){
		$condiciondocumento="and  ltp.nrodocumento = '".$documento."' "; 
	 }

	 $condicionanho="";
	 if($anho!=""){
		$condicionanho="and dtc.anho='".$anho."' "; 
	 }
	 $condicioncurso="";
	 if($curso!=""){
		$condicioncurso="and dtc.curso='".$curso."' "; 
	 }
	 $condicionsemestre="";
	 if($semestre!=""){
		$condicionsemestre="and dtc.semestre='".$semestre."' "; 
	 }
	 $condicionturno="";
	 if($turno!=""){
		$condicionturno="and dtc.turno='".$turno."' "; 
	 }
	 $condicionseccion="";
	 if($seccion!=""){
		$condicionseccion="and dtc.seccion='".$seccion."' "; 
	 }
	 
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombreCarrera asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombreMateria asc";
	}
	if($ordenby=="4"){
		$oderby="order by ltp.nrodocumento asc";
	}
	if($ordenby=="5"){
		$oderby="order by ltp.nombreapellido asc";
	}
	if($ordenby=="6"){
		$oderby="order by dtc.anho asc";
	}
	if($ordenby=="7"){
		$oderby="order by dtc.curso asc";
	}
	if($ordenby=="8"){
		$oderby="order by dtc.semestre asc";
	}
	if($ordenby=="9"){
		$oderby="order by dtc.dias asc";
	}
	
		$sql= "Select dtc.iddocente_catedra,dtc.idlistadoProfesores,dtc.idmallacurricular,dtc.cod_filial,dtc.estado,dtc.turno,dtc.seccion,
		ml.codigomalla, dtc.anho, dtc.curso, dtc.semestre,fl.nombre as nombrefilial,dtc.dias,dtc.hinicio,dtc.hfin,ml.horasemanal,
		ltp.nrodocumento,ltp.nombreapellido,dtc.importehoracatedra,dtc.remuneracionmensual,dtc.calculoremuneracionmensual,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera
        from docente_catedra dtc inner join listadoprofesores ltp on ltp.idlistadoProfesores=dtc.idlistadoProfesores
		inner join filial fl on fl.cod_filial=dtc.cod_filial
		inner join mallacurricular ml on ml.idmallacurricular=dtc.idmallacurricular
		where dtc.estado='$estado' ".$condiciondocumento.$condicionseccion.$condicionturno.$condicionfilial.$condicioncarrera.$condicioncatedra.$condiciondocente.$condicionanho.$condicioncurso.$condicionsemestre.$oderby;
		
	
		 
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
		  
		  
		  
		      $iddocente_catedra=$valor['iddocente_catedra'];
		  	  $idlistadoProfesores=utf8_encode($valor['idlistadoProfesores']);
		  	  $idmallacurricular=utf8_encode($valor['idmallacurricular']);
		  	  $cod_filial=utf8_encode($valor['cod_filial']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $nrodocumento=utf8_encode($valor['nrodocumento']);
		  	  $nombreapellido=utf8_encode($valor['nombreapellido']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $dias=utf8_encode($valor['dias']);
		  	  $hinicio=utf8_encode($valor['hinicio']);
		  	  $hfin=utf8_encode($valor['hfin']);
		  	  $calculoremuneracionmensual=utf8_encode($valor['calculoremuneracionmensual']);
		  	  $horasemanal=utf8_encode($valor['horasemanal']);
		  	
				$styleorden1="";
			  $styleorden2="";
			  $styleorden3="";
			  $styleorden4="";
			  $styleorden5="";
			  $styleorden6="";
			  $styleorden7="";
			  $styleorden8="";
			  $styleorden9="";
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
	if($ordenby=="9"){
		$styleorden9="color: #000; background-color: #e7e7e7;";
	}
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarDocentes(this)'>
			  <td id='td_id_1' style='display:none;'>".$iddocente_catedra."</td>
			  <td id='td_id_2' style='display:none;'>".$idmallacurricular."</td>
			  <td id='td_id_3' style='display:none;'>".$cod_filial."</td>
			  <td  id='td_datos_1' style='width:8%;".$styleorden1."' >".$nombrefilial."</td>
			  <td  id='td_datos_2' style='width:10%;".$styleorden2."' >".$nombreCarrera."</td>
			  <td  id='td_datos_3' style='width:10%;".$styleorden3."' >".$nombreMateria."</td>
			  <td  id='td_datos_4' style='width:5%;".$styleorden4."' >".$nrodocumento."</td>
			  <td  id='td_datos_5' style='width:8%;".$styleorden5."' >".$nombreapellido."</td>
			  <td  id='td_datos_6' style='display:none' >".$nrodocumento." - ".$nombreapellido."</td>
			  <td  id='td_datos_7' style='width:5%;".$styleorden6."' >".$anho."</td>
			  <td  id='td_datos_8' style='width:5%;".$styleorden7."' >".$curso."</td>
			  <td  id='td_datos_9' style='width:5%;".$styleorden8."' >".$semestre."</td>
			  <td  id='td_datos_14' style='width:5%;".$styleorden9."'>".$dias."</td>
			   <td  id='td_datos_15' style='display:none;'>".$hinicio."</td>
			   <td  id='td_datos_16' style='display:none;'>".$hfin."</td>
			   <td  id='td_datos_12' style='display:none;'>".$turno."</td>
			  <td  id='td_datos_13' style='width:5%' >".$seccion."</td>
			  <td  id='td_datos_20' style='width:5%' >".$horasemanal."</td>
			  <td  id='td_datos_10' style='display:none' >".$codigomalla."</td>
			  <td  id='td_datos_11' style='display:none' >".$estado."</td>			 
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 

  
  $sql= "Select dtc.iddocente_catedra
        from docente_catedra dtc inner join listadoprofesores ltp on ltp.idlistadoProfesores=dtc.idlistadoProfesores
		inner join filial fl on fl.cod_filial=dtc.cod_filial
		inner join mallacurricular ml on ml.idmallacurricular=dtc.idmallacurricular
		where dtc.estado='$estado' ".$condiciondocumento.$condicionseccion.$condicionturno.$condicionfilial.$condicioncarrera.$condicioncatedra.$condiciondocente.$condicionanho.$condicioncurso.$condicionsemestre." group by dtc.cod_filial ";
		
		
$stmt = $mysqli->prepare($sql);
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$result = $stmt->get_result();
 $nrofilial= mysqli_num_rows($result);


$sql= "Select dtc.iddocente_catedra
        from docente_catedra dtc inner join listadoprofesores ltp on ltp.idlistadoProfesores=dtc.idlistadoProfesores
		inner join filial fl on fl.cod_filial=dtc.cod_filial
		inner join mallacurricular ml on ml.idmallacurricular=dtc.idmallacurricular
		where dtc.estado='$estado' ".$condiciondocumento.$condicionseccion.$condicionturno.$condicionfilial.$condicioncarrera.$condicioncatedra.$condiciondocente.$condicionanho.$condicioncurso.$condicionsemestre." group by ltp.nrodocumento ";
		 
$stmt = $mysqli->prepare($sql);
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$result = $stmt->get_result();
 $nrodocente= mysqli_num_rows($result);
  
 
  mysqli_close($mysqli);  
  
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta,"4"=> $nrofilial,"5"=> $nrodocente);
echo json_encode($informacion);	
exit;


}


function buscarlista($filial,$carrera,$anho,$curso,$semestre,$turno,$seccion,$documento,$nombreapellido,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionfilial="";
	 if($filial!=""){
		$condicionfilial="and dtc.cod_filial='".$filial."' "; 
	 }
	 $condicioncarrera="";
	 if($carrera!=""){
		$condicioncarrera="and ml.cod_carrera='".$carrera."' "; 
	 }
	
	 $condicionanho="";
	 if($anho!=""){
		$condicionanho="and dtc.anho='".$anho."' "; 
	 }
	 $condicioncurso="";
	 if($curso!=""){
		$condicioncurso="and dtc.curso='".$curso."' "; 
	 }
	 $condicionsemestre="";
	 if($semestre!=""){
		$condicionsemestre="and dtc.semestre='".$semestre."' "; 
	 }
	 $condicionturno="";
	 if($turno!=""){
		$condicionturno="and dtc.turno='".$turno."' "; 
	 }
	 $condicionseccion="";
	 if($seccion!=""){
		$condicionseccion="and dtc.seccion='".$seccion."' "; 
	 }
    
$condiciondocumento="";
	 if($documento!=""){
		$condiciondocumento="and ltp.nrodocumento ='".$documento."' "; 
	 }
$condicionnombreapellido="";
	 if($nombreapellido!=""){
		$condicionnombreapellido="and ltp.nombreapellido like '%".$nombreapellido."%' "; 
	 }
	 	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by nombrefilial asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombreCarrera asc";
	}
	if($ordenby=="3"){
		$oderby="order by nombreMateria asc";
	}
	if($ordenby=="4"){
		$oderby="order by ltp.nrodocumento asc";
	}
	if($ordenby=="5"){
		$oderby="order by ltp.nombreapellido asc";
	}
	if($ordenby=="6"){
		$oderby="order by dtc.anho asc";
	}
	if($ordenby=="7"){
		$oderby="order by dtc.curso asc";
	}
	if($ordenby=="8"){
		$oderby="order by dtc.semestre asc";
	}
		$sql= "Select dtc.iddocente_catedra,dtc.idlistadoProfesores,dtc.idmallacurricular,dtc.cod_filial,dtc.estado,dtc.turno,dtc.seccion,
		ml.codigomalla, dtc.anho,  dtc.curso, dtc.semestre,fl.nombre as nombrefilial,ml.cod_carrera,
		ltp.nrodocumento,ltp.nombreapellido,
		(Select lt.nombre from listadodematerias lt where lt.idlistadodematerias=ml.idlistadodematerias ) as nombreMateria,
		(Select lt.nombre from listadecarreras lt where lt.Cod_listadecarreras=ml.cod_carrera) as nombreCarrera,
		(select count(*) from listadoalumnos lts where lts.iddocente_catedraFK=dtc.iddocente_catedra ) as nroalumnos,
		(select idnroactaFk1 from listadoalumnos lts where lts.iddocente_catedraFK=dtc.iddocente_catedra  limit 1) as idnroactaFk1,
		(select idnroactaFk2 from listadoalumnos lts where lts.iddocente_catedraFK=dtc.iddocente_catedra  limit 1) as idnroactaFk2,
		(select idnroactaFk3 from listadoalumnos lts where lts.iddocente_catedraFK=dtc.iddocente_catedra  limit 1) as idnroactaFk3
        from docente_catedra dtc inner join listadoprofesores ltp on ltp.idlistadoProfesores=dtc.idlistadoProfesores
		inner join filial fl on fl.cod_filial=dtc.cod_filial
		inner join mallacurricular ml on ml.idmallacurricular=dtc.idmallacurricular
		where dtc.estado='Activo' ".$condicionnombreapellido.$condiciondocumento.$condicionfilial.$condicioncarrera.$condicionanho.$condicioncurso.$condicionsemestre.$condicionturno.$condicionseccion.$oderby;
		 		 
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
		  
		  
		  
		      $iddocente_catedra=$valor['iddocente_catedra'];
		  	  $idlistadoProfesores=utf8_encode($valor['idlistadoProfesores']);
		  	  $idmallacurricular=utf8_encode($valor['idmallacurricular']);
		  	  $cod_filial=utf8_encode($valor['cod_filial']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $codigomalla=utf8_encode($valor['codigomalla']);
		  	  $anho=utf8_encode($valor['anho']);
		  	  $curso=utf8_encode($valor['curso']);
		  	  $semestre=utf8_encode($valor['semestre']);
		  	  $nrodocumento=utf8_encode($valor['nrodocumento']);
		  	  $nombreapellido=utf8_encode($valor['nombreapellido']);
		  	  $nombreMateria=utf8_encode($valor['nombreMateria']);
		  	  $nombreCarrera=utf8_encode($valor['nombreCarrera']);
		  	  $nombrefilial=utf8_encode($valor['nombrefilial']);
		  	  $nroalumnos=utf8_encode($valor['nroalumnos']);
		  	  $seccion=utf8_encode($valor['seccion']);
		  	  $turno=utf8_encode($valor['turno']);
		  	  $cod_carrera=utf8_encode($valor['cod_carrera']);
		  	  $idnroactaFk1=utf8_encode($valor['idnroactaFk1']);
		  	  $idnroactaFk2=utf8_encode($valor['idnroactaFk2']);
		  	  $idnroactaFk3=utf8_encode($valor['idnroactaFk3']);
			  
			  if($idnroactaFk1=="0"){
				  $idnroactaFk1="";
			  }
			  if($idnroactaFk2=="0"){
				  $idnroactaFk2="";
			  }
			  if($idnroactaFk3=="0"){
				  $idnroactaFk3="";
			  }
		  	  $opciones="";
			  $codigoazar=rand(5, 5000);
			  if($nroalumnos==0){
			  $opciones='<span  onclick="crearlistadodenotas(this)" ><input type="button" value="Generar lista" class="btn4" style="width:95%">
			  <p id="p_id_1" style="display:none;">'.$idmallacurricular.'</p>
			  <p id="p_id_2" style="display:none;">'.$seccion.'</p>
			  <p id="p_id_3" style="display:none;">'.$turno.'</p>
			  <p id="p_id_4" style="display:none;">'.$anho.'</p>
			  <p id="p_id_5" style="display:none;">'.$curso.'</p>
			  <p id="p_id_6" style="display:none;">'.$semestre.'</p>
			  <p id="p_id_7" style="display:none;">'.$cod_carrera.'</p>
			  <p id="p_id_8" style="display:none;">'.$cod_filial.'</p>
			  <p id="p_id_9" style="display:none;">'.$codigoazar.'</p>
			  <p id="p_id_10" style="display:none;">'.$iddocente_catedra.'</p>
			  <p id="p_id_11" style="display:none;"></p>
			  </span>';
			  }else{
				  $datosactas=buscardatosnroactas($idnroactaFk1);
		  	  $nroacta=$datosactas[0];
		  	  $horaacta=$datosactas[1];
		  	  $fechaacta=$datosactas[2];
            $opciones='<span  onclick="VerVistaCargarCalif(this)" ><input type="button" value="CALIF. 1" class="btn4" style="width:30%;background-color: #2196f3;">
			  <p id="p_id_1" style="display:none;">'.$iddocente_catedra.'</p>
			  <p id="p_id_2" style="display:none;">'.$nombreapellido.'</p>
			  <p id="p_id_3" style="display:none;">'.$nombreMateria.'</p>
			  <p id="p_id_4" style="display:none;">'.$turno.'</p>
			   <p id="p_id_5" style="display:none;">'.$seccion.'</p>
			  <p id="p_id_6" style="display:none;">'.$anho.'</p>
			  <p id="p_id_7" style="display:none;">'.$curso.'</p>
			  <p id="p_id_8" style="display:none;">'.$semestre.'</p>
			  <p id="p_id_9" style="display:none;">'.$cod_filial.'</p>
			  <p id="p_id_10" style="display:none;">'.$idmallacurricular.'</p>
			  <p id="p_id_11" style="display:none;">CALIFICACION1</p>
			   <p id="p_id_12" style="display:none;">'.$cod_carrera.'</p>
			   <p id="p_id_13" style="display:none;">'.$idnroactaFk1.'</p>
			   <p id="p_id_14" style="display:none;">'.$nroacta.'</p>
			   <p id="p_id_15" style="display:none;">'.$horaacta.'</p>
			   <p id="p_id_16" style="display:none;">'.$fechaacta.'</p>
			   <p id="p_id_17" style="display:none;">'.$nrodocumento.'</p>
			   <p id="p_id_18" style="display:none;">'.$nombrefilial.'</p>
			   <p id="p_id_19" style="display:none;">'.$nombreCarrera.'</p>
			  </span>';
			   $datosactas=buscardatosnroactas($idnroactaFk2);
		  	  $nroacta=$datosactas[0];
		  	  $horaacta=$datosactas[1];
		  	  $fechaacta=$datosactas[2];
			  $opciones.='<span  onclick="VerVistaCargarCalif(this)" ><input type="button" value="CALIF. 2" class="btn4" style="width:30%;background-color: #2196f3;">
			  <p id="p_id_1" style="display:none;">'.$iddocente_catedra.'</p>
			  <p id="p_id_2" style="display:none;">'.$nombreapellido.'</p>
			  <p id="p_id_3" style="display:none;">'.$nombreMateria.'</p>
			  <p id="p_id_4" style="display:none;">'.$turno.'</p>
			   <p id="p_id_5" style="display:none;">'.$seccion.'</p>
			  <p id="p_id_6" style="display:none;">'.$anho.'</p>
			  <p id="p_id_7" style="display:none;">'.$curso.'</p>
			  <p id="p_id_8" style="display:none;">'.$semestre.'</p>
			  <p id="p_id_9" style="display:none;">'.$cod_filial.'</p>
			  <p id="p_id_10" style="display:none;">'.$idmallacurricular.'</p>
			   <p id="p_id_11" style="display:none;">CALIFICACION2</p>
			    <p id="p_id_12" style="display:none;">'.$cod_carrera.'</p>
			    <p id="p_id_13" style="display:none;">'.$idnroactaFk2.'</p>
				  <p id="p_id_14" style="display:none;">'.$nroacta.'</p>
			   <p id="p_id_15" style="display:none;">'.$horaacta.'</p>
			   <p id="p_id_16" style="display:none;">'.$fechaacta.'</p>
			    <p id="p_id_17" style="display:none;">'.$nrodocumento.'</p>
				<p id="p_id_18" style="display:none;">'.$nombrefilial.'</p>
				<p id="p_id_19" style="display:none;">'.$nombreCarrera.'</p>
			  </span>';
			   $datosactas=buscardatosnroactas($idnroactaFk3);
		  	  $nroacta=$datosactas[0];
		  	  $horaacta=$datosactas[1];
		  	  $fechaacta=$datosactas[2];
			  $opciones.='<span  onclick="VerVistaCargarCalif(this)" ><input type="button" value="CALIF. 3" class="btn4" style="width:30%;background-color: #2196f3;">
			  <p id="p_id_1" style="display:none;">'.$iddocente_catedra.'</p>
			  <p id="p_id_2" style="display:none;">'.$nombreapellido.'</p>
			  <p id="p_id_3" style="display:none;">'.$nombreMateria.'</p>
			  <p id="p_id_4" style="display:none;">'.$turno.'</p>
			   <p id="p_id_5" style="display:none;">'.$seccion.'</p>
			  <p id="p_id_6" style="display:none;">'.$anho.'</p>
			  <p id="p_id_7" style="display:none;">'.$curso.'</p>
			  <p id="p_id_8" style="display:none;">'.$semestre.'</p>
			  <p id="p_id_9" style="display:none;">'.$cod_filial.'</p>
			  <p id="p_id_10" style="display:none;">'.$idmallacurricular.'</p>
			  <p id="p_id_11" style="display:none;">CALIFICACION3</p>
			   <p id="p_id_12" style="display:none;">'.$cod_carrera.'</p>
			   <p id="p_id_13" style="display:none;">'.$idnroactaFk3.'</p>
			     <p id="p_id_14" style="display:none;">'.$nroacta.'</p>
			   <p id="p_id_15" style="display:none;">'.$horaacta.'</p>
			   <p id="p_id_16" style="display:none;">'.$fechaacta.'</p>
			    <p id="p_id_17" style="display:none;">'.$nrodocumento.'</p>
				<p id="p_id_18" style="display:none;">'.$nombrefilial.'</p>
				<p id="p_id_19" style="display:none;">'.$nombreCarrera.'</p>
			  </span>';
               }
		  
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
			
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' >
			  <td id='' style='display:none;'>".$iddocente_catedra."</td>
			  <td id='' style='display:none;'>".$idmallacurricular."</td>
			  <td  id='' style='width:7%;".$styleorden1."' >".$nombrefilial."</td>
			  <td  id='' style='width:10%;".$styleorden2."' >".$nombreCarrera."</td>
			  <td  id='' style='width:7%;".$styleorden3."' >".$nrodocumento."</td>
			  <td  id='' style='width:10%;".$styleorden4."' >".$nombreapellido."</td>
			  <td  id='' style='width:10%;".$styleorden5."' >".$nombreMateria."</td>
			  <td  id='' style='width:5%;".$styleorden6."' >".$anho."</td>
			  <td  id='' style='width:5%;".$styleorden7."' >".$curso."</td>
			  <td  id='' style='width:5%;".$styleorden8."' >".$semestre."</td>
			  <td  id='' style='width:5%;' >".$turno."</td>
			  <td  id='' style='width:5%;' >".$seccion."</td>
			  <td  id='nroalumnos_".$codigoazar."' style='width:5%' >".$nroalumnos."</td>
			  <td  style='width:10%' >".$opciones."</td>
			  <td  id='' style='display:none' >".$codigomalla."</td>
			  <td  id='' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function buscarSelect($user)
{
	$mysqli=conectar_al_servidor();
$control=controldefilial($user,"ACCESOFILIAL"," acus.accion='SI' ");
	if($control==0){
		$codFilialFK=buscarmifilialFK($user);
		$sql= "Select lt.Cod_listadecarreras,lt.nombre
        from carrera cr inner join filial fl1 on fl1.cod_filial=cr.cod_filialOringFK 
         inner join filial fl2 on fl2.cod_filial=cr.cod_filialDestinoFK 
		inner join listadecarreras lt on lt.Cod_listadecarreras=cr.Cod_listadecarrerasFK
		inner join listafacultad ldf on ldf.cod_listafacultad=cr.cod_listafacultadFk
		where cr.cod_filialOringFK ='$codFilialFK'  and cr.estado='Activo'  order by lt.nombre asc";
	}else{
		$sql= "Select Cod_listadecarreras,nombre,estado
        from listadecarreras where  estado='Activo'  order by nombre asc";
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
		  
		  
		  
		      $Cod_listadecarreras=$valor['Cod_listadecarreras'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  
		  	
		  	$pagina.="<option id='$Cod_listadecarreras' value='$nombre'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscardatosnroactas($idnroacta)
{
	$mysqli=conectar_al_servidor();
	 $datos[0]='';
	 $datos[1]='';
	 $datos[2]='';
	
		$sql= "Select nroacta,hora,fecha from nroactahabilitadas
		where idnroacta='".$idnroacta."' ";
		 
		
		 
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
		  
    		  $datos[0]=utf8_encode($valor['nroacta']);;
	        $datos[1]=utf8_encode($valor['hora']);;
	        $datos[2]=utf8_encode($valor['fecha']);;
	  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
return $datos;

}



verificar($funt);
?>