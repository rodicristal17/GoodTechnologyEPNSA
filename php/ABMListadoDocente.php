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
	
	
	$idlistadoProfesores=$_POST['idabm'];
    $idlistadoProfesores = utf8_decode($idlistadoProfesores);
	$nrodocumento=$_POST['nrodocumento'];
    $nrodocumento = utf8_decode($nrodocumento);
	$nombreapellido=$_POST['nombreapellido'];
    $nombreapellido = utf8_decode($nombreapellido);
	$nrotelef=$_POST['nrotelef'];
    $nrotelef = utf8_decode($nrotelef);
	$correo=$_POST['correo'];
    $correo = utf8_decode($correo);
	$estado=$_POST['estado'];
    $estado = utf8_decode($estado);
	$ruc=$_POST['ruc'];
    $ruc = utf8_decode($ruc);
	abm($idlistadoProfesores,$nrodocumento,$nombreapellido,$nrotelef,$correo,$estado,$ruc,$funt);

}

if($funt=="buscar")
{
$nrodocumento=$_POST['nrodocumento'];
$nrodocumento = utf8_decode($nrodocumento);
$nombreApellido=$_POST['nombreApellido'];
$nombreApellido = utf8_decode($nombreApellido);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
buscar($nrodocumento,$nombreApellido,$estado);

}
if($funt=="buscarselect")
{

buscarselect();

}







	

}

function abm($idlistadoProfesores,$nrodocumento,$nombreapellido,$nrotelef,$correo,$estado,$ruc,$funt)
{
	
	if($ruc=="" || $nrodocumento=="" || $nombreapellido=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from listadoprofesores where nrodocumento=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='s';
$stmt->bind_param($ss,$nrodocumento); 


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
	
    $consulta="insert into listadoprofesores (ruc,nrodocumento,nombreapellido,nrotelef,correo,estado) values (?,?,upper(?),?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssss';
    $stmt->bind_param($ss,$ruc,$nrodocumento,$nombreapellido,$nrotelef,$correo,$estado); 
 
	}
	
	if($funt=="editar")
	{
        
    $consulta="Update listadoprofesores set ruc=?,nrodocumento=?,nombreapellido=?,nrotelef,correo=?,estado=?  where idlistadoProfesores=?";	
	$stmt = $mysqli->prepare($consulta);
    $ss='sssssss';        
    $stmt->bind_param($ss,$ruc,$nrodocumento,$nombreapellido,$nrotelef,$correo,$estado,$idlistadoProfesores); 
       
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

function buscar($nrodocumento,$nombreApellido,$estado)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $condicionnrodocumento="";
	 if($nrodocumento!=""){
		 $condicionnrodocumento="and nrodocumento='$nrodocumento' ";
	 }
	 $condicionnombre="";
	  if($nombreApellido!=""){
		 $condicionnombre="and nombreapellido like '%$nombreApellido%' ";
	 }
	
		$sql= "Select idlistadoProfesores,nrodocumento,nombreapellido,nrotelef,correo,estado,ruc
        from listadoprofesores where estado='$estado'  ".$condicionnrodocumento.$condicionnombre." order by nombreapellido asc";
		 
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
		  
		  
		  
		      $idlistadoProfesores=$valor['idlistadoProfesores'];
		  	  $nrodocumento=utf8_encode($valor['nrodocumento']);
		  	  $nombreapellido=utf8_encode($valor['nombreapellido']);
		  	  $nrotelef=utf8_encode($valor['nrotelef']);
		  	  $correo=utf8_encode($valor['correo']);
		  	  $estado=utf8_encode($valor['estado']);
		  	  $ruc=utf8_encode($valor['ruc']);
		  	
		  	
			  $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			   <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmListaDocente(this)'>
			   <td id='td_id' style='display:none;'>".$idlistadoProfesores."</td>
			   <td  id='td_datos_1' style='width:25%' >".$nrodocumento."</td>
			   <td  id='td_datos_2' style='width:25%' >".$nombreapellido."</td>
			   <td  id='td_datos_3' style='width:25%' >".$nrotelef."</td>
			   <td  id='td_datos_4' style='width:25%' >".$correo."</td>
			   <td  id='td_datos_5' style='display:none' >".$estado."</td>
			   <td  id='td_datos_6' style='display:none' >".$ruc."</td>
			   </tr>
			   </table>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function buscarselect()
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "Select idlistadoProfesores,nrodocumento,nombreapellido,nrotelef,correo,estado
        from listadoprofesores where estado='Activo'  order by nombreapellido asc";
		 
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
		  
		  
		  
		      $idlistadoProfesores=$valor['idlistadoProfesores'];
		  	  $nrodocumento=utf8_encode($valor['nrodocumento']);
		  	  $nombreapellido=utf8_encode($valor['nombreapellido']);
		  	  $nrotelef=utf8_encode($valor['nrotelef']);
		  	  $correo=utf8_encode($valor['correo']);
		  	  $estado=utf8_encode($valor['estado']);
		  	
		  	
			  	$pagina.="<option id='$idlistadoProfesores' value='".$nrodocumento." - ".$nombreapellido."'  ></option>";
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}



verificar($funt);
?>