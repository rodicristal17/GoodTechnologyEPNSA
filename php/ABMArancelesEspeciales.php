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
	
	
	$idarancelesepeciales=$_POST['idabm'];
    $idarancelesepeciales = utf8_decode($idarancelesepeciales);
	$nombre=$_POST['nombre'];
    $nombre = utf8_decode($nombre);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	abm($idarancelesepeciales,$nombre,$estado,$funt);

}

if($funt=="nuevodetalle")
{
$iddetallesarancelesespeciales=$_POST['idabm'];
$iddetallesarancelesespeciales = utf8_decode($iddetallesarancelesespeciales);
$idarancelesepecialesfk=$_POST['idarancelesepecialesfk'];
$idarancelesepecialesfk = utf8_decode($idarancelesepecialesfk);
$cod_listadearancelesfk=$_POST['cod_listadearancelesfk'];
$cod_listadearancelesfk = utf8_decode($cod_listadearancelesfk);
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
$operacion=$_POST['operacion'];
$operacion = utf8_decode($operacion);
$monto=$_POST['monto'];
$monto = quitarseparadormiles($monto);
nuevodetalle($iddetallesarancelesespeciales,$idarancelesepecialesfk,$cod_listadearancelesfk,$tipo,$operacion,$monto);

}
if($funt=="eliminardetalle")
{
$iddetallesarancelesespeciales=$_POST['idabm'];
$iddetallesarancelesespeciales = utf8_decode($iddetallesarancelesespeciales);

eliminardetalle($iddetallesarancelesespeciales);

}
if($funt=="buscar")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscar($buscar,$estado);

}

if($funt=="buscararancelesdisponibles")
{
$idarancelesepeciales=$_POST['idArancelEspecial'];
$idarancelesepeciales = utf8_decode($idarancelesepeciales);
buscararancelesdisponibles($idarancelesepeciales);

}


if($funt=="buscardetallearancel")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscardetallearancel($buscar);

}





	

}

function abm($idarancelesepeciales,$nombre,$estado,$funt)
{
	
	if($nombre=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from arancelesepeciales where nombre=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='s';
$stmt->bind_param($ss,$nombre); 


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
	
    $consulta="insert into arancelesepeciales (nombre, estado) values (upper(?),?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ss';
    $stmt->bind_param($ss,$nombre,$estado); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update arancelesepeciales set nombre=upper(?),  estado=?  where idarancelesepeciales=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sss';        
    $stmt->bind_param($ss,$nombre,$estado,$idarancelesepeciales); 
       
	}
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}


if($funt=="nuevo"){
	$idarancelesepeciales=buscarultimaidarancelesespeciales();
}
 mysqli_close($mysqli); 

    $informacion =array("1" => "exito","2" => $idarancelesepeciales);
    echo json_encode($informacion);	
    exit;
	
}

function buscarultimaidarancelesespeciales()
{
	$mysqli=conectar_al_servidor();

		$sql= "Select idarancelesepeciales from arancelesepeciales order by idarancelesepeciales desc limit 1";
		 $idarancelesepeciales="";
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
		  
		  
		  
		      $idarancelesepeciales=$valor['idarancelesepeciales'];
		  	 
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 

return $idarancelesepeciales;


}


function nuevodetalle($iddetallesarancelesespeciales,$idarancelesepecialesfk,$cod_listadearancelesfk,$tipo,$operacion,$monto)
{
	
	if($idarancelesepecialesfk=="" || $cod_listadearancelesfk=="" || $monto=="" || $tipo=="" || $operacion=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

		$consulta= "Select count(*) from detallesarancelesespeciales where idarancelesepecialesfk=? and cod_listadearancelesfk=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$idarancelesepecialesfk,$cod_listadearancelesfk); 


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
	


	
    $consulta="insert into detallesarancelesespeciales (idarancelesepecialesfk, cod_listadearancelesfk,monto,tipo,operacion) values (?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sssss';
    $stmt->bind_param($ss,$idarancelesepecialesfk,$cod_listadearancelesfk,$monto,$tipo,$operacion); 
 
	
	
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

function eliminardetalle($iddetallesarancelesespeciales)
{
	
	if($iddetallesarancelesespeciales=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	
    $consulta="delete from detallesarancelesespeciales  where iddetallesarancelesespeciales='$iddetallesarancelesespeciales'";	
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

function buscar($buscar,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select idarancelesepeciales,nombre,estado
        from arancelesepeciales where nombre like ? and estado=?  order by nombre asc";
		 
   $stmt = $mysqli->prepare($sql);
  	$s='ss';
$buscar1="%".$buscar."%";
//$buscar="".$buscar."";
$stmt->bind_param($s,$buscar1,$estado);

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
		  
		  
		  
		      $idarancelesepeciales=$valor['idarancelesepeciales'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmArancelesEspeciales(this)'>
			  <td id='td_id' style='display:none;'>".$idarancelesepeciales."</td>
				   <td  id='td_datos_1' style='width:100%' >".$nombre."</td>
			  <td  id='td_datos_2' style='display:none' >".$estado."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscardetallearancel($buscar)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select dts.iddetallesarancelesespeciales, dts.idarancelesepecialesfk, dts.cod_listadearancelesfk, dts.monto,lts.nombre as arancel,dts.tipo,dts.operacion
        from detallesarancelesespeciales dts inner join listadearanceles lts on lts.cod_listadearanceles=dts.cod_listadearancelesfk
		where dts.idarancelesepecialesfk='$buscar'   order by lts.nombre asc";
		 
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
		  
		  
		  
		      $iddetallesarancelesespeciales=$valor['iddetallesarancelesespeciales'];
		  	  $idarancelesepecialesfk=utf8_encode($valor['idarancelesepecialesfk']);
		  	  $cod_listadearancelesfk=utf8_encode($valor['cod_listadearancelesfk']);
		  	  $operacion=utf8_encode($valor['operacion']);
		  	  $monto=utf8_encode($valor['monto']);
		  	  $arancel=utf8_encode($valor['arancel']);
		  	  $tipo=utf8_encode($valor['tipo']);
		  	  if($tipo=="1"){
				  $tipo="EFECTIVO";
			  }
			  if($tipo=="2"){
				  $tipo="PORCENTAJE";
			  }
			  if($operacion=="1"){
				  $operacion="SUMA";
			  }
			  if($operacion=="2"){
				  $operacion="RESTAR";
			  }
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmAsignarArancelesEspeciales(this)'>
			  <td id='td_id' style='display:none;'>".$iddetallesarancelesespeciales."</td>
				   <td  id='td_datos_1' style='width:40%' >".$arancel."</td>
				   <td  id='td_datos_1' style='width:20%' >". number_format($monto,'0',',','.')."</td>
				   <td  id='td_datos_1' style='width:20%' >".$tipo."</td>
				   <td  id='td_datos_1' style='width:20%' >".$operacion."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscararancelesdisponibles($idarancelesepeciales)
{
	$mysqli=conectar_al_servidor();

		$sql= "Select cod_listadearanceles,nombre
        from listadearanceles where estado='Activo' and
        IFNULL((select count(cod_listadearancelesfk) from detallesarancelesespeciales where cod_listadearancelesfk=cod_listadearanceles and idarancelesepecialesfk='$idarancelesepeciales'),0)=0
		order by nombre asc";
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
		  
		  
		  
		      $cod_listadearanceles=$valor['cod_listadearanceles'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  
		  	
		  	$pagina.="<option id='$cod_listadearanceles' value='$nombre'  ></option>";
		
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}




verificar($funt);
?>