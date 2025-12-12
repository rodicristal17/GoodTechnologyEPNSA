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
	
	
	$Cod_listadecarreras=$_POST['idabm'];
    $Cod_listadecarreras = utf8_decode($Cod_listadecarreras);
	$nombre=$_POST['nombre'];
    $nombre = utf8_decode($nombre);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$anhos=$_POST['anhos'];
    $anhos = utf8_decode($anhos);
	abm($Cod_listadecarreras,$nombre,$estado,$anhos,$funt);

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

buscarSelect($user);

}





	

}

function abm($Cod_listadecarreras,$nombre,$estado,$anhos,$funt)
{
	
	if($nombre=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from listadecarreras where nombre=?  ";
	
	
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
	
    $consulta="insert into listadecarreras (nombre, estado,anhos) values (upper(?),?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='sss';
    $stmt->bind_param($ss,$nombre,$estado,$anhos); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update listadecarreras set nombre=upper(?),  estado=?,anhos=?  where Cod_listadecarreras=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='ssss';        
    $stmt->bind_param($ss,$nombre,$estado,$anhos,$Cod_listadecarreras); 
       
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

function buscar($buscar,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	
		$sql= "Select Cod_listadecarreras,nombre,estado,anhos
        from listadecarreras where nombre like ? and estado=?  order by nombre asc";
		 
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
		  
		  
		  
		      $Cod_listadecarreras=$valor['Cod_listadecarreras'];
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $anhos=utf8_encode($valor['anhos']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmListaCarrera(this)'>
			  <td id='td_id' style='display:none;'>".$Cod_listadecarreras."</td>
			   <td  id='td_datos_1' style='width:60%' >".$nombre."</td>
			  <td  id='td_datos_2' style='display:none' >".$estado."</td>
			  <td  id='td_datos_3' style='width:40%' >".$anhos."</td>
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




verificar($funt);
?>