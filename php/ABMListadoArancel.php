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

	// buscarnivel($user,"ARANCEL"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"ARANCEL"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"ARANCEL"," buscar='SI' ");
// }





	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$cod_listadearanceles=$_POST['idabm'];
    $cod_listadearanceles = utf8_decode($cod_listadearanceles);
	$nombre=$_POST['nombre'];
    $nombre = utf8_decode($nombre);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$codigoarancel=$_POST['codigoarancel'];
    $codigoarancel = utf8_decode($codigoarancel);
	$tipo=$_POST['tipo'];
    $tipo = utf8_decode($tipo);
	abm($codigoarancel,$cod_listadearanceles,$nombre,$estado,$tipo,$funt);

}

if($funt=="buscar")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscar($buscar,$estado);

}

if($funt=="buscarSelect")
{

buscarSelect();

}
if($funt=="buscarSelectTipo")
{
$tipo=$_POST['tipo'];
$tipo = utf8_decode($tipo);
buscarSelectTipo($tipo);

}

if($funt=="nuevoporcentaje")
{
$cod_listadearancelesFK=$_POST['idAbmListaAranceles'];
$cod_listadearancelesFK = utf8_decode($cod_listadearancelesFK);
$cod_filialFk=$_POST['cod_filialFk'];
$cod_filialFk = utf8_decode($cod_filialFk);
$porcentaje=$_POST['porcentaje'];
$porcentaje = utf8_decode($porcentaje);
nuevoporcentaje($cod_listadearancelesFK,$cod_filialFk,$porcentaje);

}
if($funt=="eliminarporcentaje")
{
$idporcentajesafiliales=$_POST['codAbmPorcentajeAsignar'];
$idporcentajesafiliales = utf8_decode($idporcentajesafiliales);
eliminarporcentaje($idporcentajesafiliales);

}
if($funt=="buscarListadoFilial")
{

$idAbmListaAranceles=$_POST['idAbmListaAranceles'];
$idAbmListaAranceles = utf8_decode($idAbmListaAranceles);
buscarListadoFilial($idAbmListaAranceles);

}
if($funt=="buscarPorcentajeFiliales")
{
$buscar=$_POST['buscar'];
$buscar = utf8_decode($buscar);
buscarPorcentajeFiliales($buscar);
}
	

}

function abm($codigoarancel,$cod_listadearanceles,$nombre,$estado,$tipo,$funt)
{
	
	if($nombre=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from listadearanceles where nombre=?  and tipo=? ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ss';
$stmt->bind_param($ss,$nombre,$tipo); 


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
	
    $consulta="insert into listadearanceles (codigoarancel,nombre, estado,tipo) values (?,upper(?),?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssss';
    $stmt->bind_param($ss,$codigoarancel,$nombre,$estado,$tipo); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update listadearanceles set codigoarancel=?,nombre=upper(?),  estado=?,tipo=?  where cod_listadearanceles=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sssss';        
    $stmt->bind_param($ss,$codigoarancel,$nombre,$estado,$tipo,$cod_listadearanceles); 
       
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

function nuevoporcentaje($cod_listadearancelesFK,$cod_filialFk,$porcentaje)
{
	
	if($cod_listadearancelesFK=="" || $cod_filialFk=="" || $porcentaje=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();


	$consulta= "Select count(*) from porcentajesafiliales where cod_listadearancelesFK=?  and cod_filialFk=? ";
	$stmt = $mysqli->prepare($consulta);
    $ss='ss';
    $stmt->bind_param($ss,$cod_listadearancelesFK,$cod_filialFk); 
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

	
    $consulta="insert into porcentajesafiliales (porcentaje,cod_listadearancelesFK, cod_filialFk) values (?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sss';
    $stmt->bind_param($ss,$porcentaje,$cod_listadearancelesFK,$cod_filialFk); 
 
	
	
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

function eliminarporcentaje($idporcentajesafiliales)
{
	
	if($idporcentajesafiliales==""  ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();


    $consulta="Delete from porcentajesafiliales where idporcentajesafiliales=?";	
     $stmt = $mysqli->prepare($consulta);
    $ss='s';
    $stmt->bind_param($ss,$idporcentajesafiliales); 	
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
	
		$sql= "Select cod_listadearanceles,nombre,estado,codigoarancel,tipo,porcentaje
        from listadearanceles where nombre like ? and estado=?  order by nombre asc";
		 
   $stmt = $mysqli->prepare($sql);
  	$s='ss';
$buscar1="%".$buscar."%";
//$buscar="".$buscar."";
$stmt->bind_param($s,$buscar1,$estado);

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
		  	  $estado=utf8_encode($valor['estado']);
		  	  $codigoarancel=utf8_encode($valor['codigoarancel']);
		  	  $tipo=utf8_encode($valor['tipo']);
		  	  $porcentaje=utf8_encode($valor['porcentaje']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmListaAranceles(this)'>
			  <td id='td_id' style='display:none;'>".$cod_listadearanceles."</td>
			   <td  id='td_datos_3' style='width:25%' >".$codigoarancel."</td>
			   <td  id='td_datos_1' style='width:50%' >".$nombre."</td>
			  <td  id='td_datos_2' style='display:none' >".$estado."</td>
			  <td  id='td_datos_4' style='width:25%' >".$tipo."</td>
			  <td  id='td_datos_5' style='display:none' >".$porcentaje."</td>
			  </tr>
			  </table>";
			    	 
		  	
			  
			  
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
	$pagina="";
	$paginacomb="";
	$paginatable="";
	
		$sql= "Select cod_listadearanceles,nombre,estado 
        from listadearanceles where  estado='Activo'  order by nombre asc";
		 
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
		  	
		  	  
		  	 $paginatable.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro'>
			   <td  id='td_datos_1' style='width:10%' ><input name='checkboxArancelesConsulta' type='checkbox' value='$cod_listadearanceles'    /></td>
			   <td  id='td_datos_1' style='width:90%' >".$nombre."</td>
			  </tr>
			  </table>";
		  	
			   	$pagina.="<option id='$cod_listadearanceles' value='$nombre'  ></option>";
				
				if($cod_listadearanceles=="1" || $cod_listadearanceles=="2" || $cod_listadearanceles=="4" || $cod_listadearanceles=="5" || $cod_listadearanceles=="6"){			
			   	$paginacomb.="<option value='$cod_listadearanceles'   >$nombre</option>";
				}
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $paginatable,"4"=> $paginacomb);
echo json_encode($informacion);	
exit;


}

function buscarSelectTipo($tipo)
{
	$mysqli=conectar_al_servidor();
	$pagina="";
	
	
		$sql= "Select cod_listadearanceles,nombre,estado 
        from listadearanceles where  estado='Activo' and tipo='$tipo' order by nombre asc";
		 
   
		 
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
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}

function buscarListadoFilial($idAbmListaAranceles)
{
	$mysqli=conectar_al_servidor();
	
	$pagina="";	
	
	$sql= "Select cod_filial,nombre, ciudad, estado,puntoexpedicion 
        from filial where  estado='Activo' 
		and IFNULL((select count(idporcentajesafiliales) from porcentajesafiliales where cod_filialFk=cod_filial and cod_listadearancelesFK='$idAbmListaAranceles'),0)='0'
		order by nombre asc";
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
		  
		  
		  
		      $cod_filial=$valor['cod_filial'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $ciudad=utf8_encode($valor['ciudad']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $puntoexpedicion=utf8_encode($valor['puntoexpedicion']);
		  	
		  	
			 $pagina.="<option id='$cod_filial' value='$nombre'  ></option>";
			    	 
		  	
			  
			  
	  }
	  
 }
  mysqli_close($mysqli); 
 
$informacion =array("1" => "exito","2" => $pagina);
echo json_encode($informacion);	
exit;


}


function buscarPorcentajeFiliales($idAbmListaAranceles)
{
	$mysqli=conectar_al_servidor();
	
	$pagina="";	
	
	$sql= "Select por.idporcentajesafiliales,por.porcentaje,por.cod_listadearancelesFK,por.cod_filialFk,fl.nombre as filial
	from porcentajesafiliales por inner join filial fl on fl.cod_filial=por.cod_filialFk
	where por.cod_listadearancelesFK='$idAbmListaAranceles'
	order by fl.nombre asc";
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
		  
		  
		  
		      $idporcentajesafiliales=$valor['idporcentajesafiliales'];
		  	  $porcentaje=utf8_encode($valor['porcentaje']);
		  	  $cod_listadearancelesFK=utf8_encode($valor['cod_listadearancelesFK']);
		  	  $cod_filialFk=utf8_encode($valor['cod_filialFk']);
		  	  $filial=utf8_encode($valor['filial']);
		  	
		  	
			 $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmListaArancelesPorcentaje(this)'>
			  <td id='td_id' style='display:none;'>".$idporcentajesafiliales."</td>
			   <td  id='td_datos_1' style='width:50%' >".$filial."</td>
			   <td  id='td_datos_2' style='width:25%' >".$porcentaje."</td>
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