<?php

function buscarnivel($user,$formulario,$accion)
{
	$control=0;
	$mysqli=conectar_al_servidor();
	
		$sql= "Select u.usuarios_idusario from  accesosuser u  where u.usuarios_idusario='$user' and codformulario='$formulario' and ".$accion." order by usuarios_idusario asc limit 1";

   $stmt = $mysqli->prepare($sql);
  	

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
 
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 
 if ($valor>0)
 {
	  
 }else{
	$informacion =array("1" => "NI");
echo json_encode($informacion);	
exit;
 }
 
 

}

function controlaccesos($user,$formulario,$accion)
{
	$control=0;
	$mysqli=conectar_al_servidor();
	
		
	$sql= "Select lta.nro,lta.formulario,lta.codigo,lta.nombre,acus.idaccesosUser,acus.accion,acus.usuarios_idusario,lta.formulario
		from accesosuser acus inner join listadodeacceso lta on lta.idlistadodeacceso=acus.idlistadodeaccesoFK
		where acus.usuarios_idusario='$user' and lta.codigo='$formulario' and ".$accion." limit 1";



   $stmt = $mysqli->prepare($sql);
  	

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
 
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 
 if ($valor>0)
 {
	return 1;
 }else{
	return 0;
 }
 
 

}

function controldefilial($user,$formulario,$accion)
{
	$control=0;
	$mysqli=conectar_al_servidor();
	
	
		
		$sql= "Select lta.nro,lta.formulario,lta.codigo,lta.nombre,acus.idaccesosUser,acus.accion,acus.usuarios_idusario,lta.formulario
		from accesosuser acus inner join listadodeacceso lta on lta.idlistadodeacceso=acus.idlistadodeaccesoFK
		where acus.usuarios_idusario='$user' and lta.codigo='$formulario' and ".$accion." limit 1";


   $stmt = $mysqli->prepare($sql);
  	

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
 
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
  mysqli_close($mysqli); 
 return $valor;
 

}


function buscarmifilialFK($codUser)
{
	$mysqli=conectar_al_servidor();
	 $cod_filialFK='';
		$sql= "Select  cod_filialFK
        from usuario  where Cod_Usuario=? ";

   $stmt = $mysqli->prepare($sql);
  	$s='s';

//$buscar="".$buscar."";
$stmt->bind_param($s,$codUser);

if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
 
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		
		  	 
		  	  $cod_filialFK=utf8_encode($valor['cod_filialFK']);
		  	 
		      
			  
	  }
 
		      
 }
  mysqli_close($mysqli); 
 return $cod_filialFK;
 

}







?>