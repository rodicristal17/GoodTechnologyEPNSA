<?php



//cargar achivos importantes
require("conexion.php");

include("verificar_navegador.php");
function verificar()
{
	
	
	
	$user=$_POST['user'];
$user = utf8_decode($user);



	$pass=$_POST['pass'];
	
	  $pass = str_replace("=","+",$pass);
$navegador=$_POST['navegador'];
$navegador = utf8_decode($navegador);
$resp=verificar_navegador($user,$navegador,$pass);

if($resp=="ok"){
	buscardatos($user);
}else{
	
		  $informacion =array("1" =>"UI" );
echo json_encode($informacion);	
exit;
}
	

}


function buscardatos($codUser)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "Select Cod_Usuario, Nombre, Apellido, Nrodocumento, Cargo, user, pass, estado, Acceso, cod_filialFK,
		(select nombre from filial where cod_filial=cod_filialFK) as nombrelocal
        from usuario  where Cod_Usuario=?  and tipoplataforma='Academico'";

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
		
		  	  $Nombre=utf8_encode($valor['Nombre']);
		  	  $Apellido=utf8_encode($valor['Apellido']);
		  	  $Acceso=utf8_encode($valor['Acceso']);
		  	  $cod_filialFK=utf8_encode($valor['cod_filialFK']);
		  	  $Nrodocumento=utf8_encode($valor['Nrodocumento']);
		  	  $nombrelocal=utf8_encode($valor['nombrelocal']);
		  	  $user=utf8_encode($valor['user']);
		  	  $pass=utf8_encode($valor['pass']);
		  	 
		  $nombre_persona=$Nombre." ".$Apellido;
	 $Cargo=utf8_encode($valor['Cargo']);
		  	 
		  
		  $acceso=buscaracceso($codUser);
$informacion =array("1" =>"exito","2" => $nombre_persona,"3" => $acceso,"4" => $Acceso ,"5" => $Cargo  ,"6" => $cod_filialFK 
,"7" => $Apellido ,"8" => $Nrodocumento,"9" => $nombrelocal,"10" => $Nombre ,"11" => $user ,"12" => $pass );
echo json_encode($informacion);	
exit;
		      
			  
	  }
 }else{
	  
		  $informacion =array("1" =>"UI" );
echo json_encode($informacion);	
exit;
		      
 }
 
 
 

}



function buscaracceso($buscar)
{
	$mysqli=conectar_al_servidor();
	 $datos[0]="";
			$sql= "Select lta.nro,lta.formulario,lta.codigo,lta.nombre,acus.idaccesosUser,acus.accion,acus.usuarios_idusario,lta.formulario
		from accesosuser acus inner join listadodeacceso lta on lta.idlistadodeacceso=acus.idlistadodeaccesoFK
		where usuarios_idusario = ? order by lta.nro asc";
		
   
   
   $stmt = $mysqli->prepare($sql);
  	$s='s';

$stmt->bind_param($s,$buscar);

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
		  
		     $idaccesosUser=$valor['idaccesosUser'];
			  $accion=utf8_encode($valor['accion']);
			  $usuarios_idusario=utf8_encode($valor['usuarios_idusario']);
			  $codigo=utf8_encode($valor['codigo']);
		  	 $datos[$codigo]['accion']=$accion;
			    	 
		  	 
			  
			  
	  }
 }
  mysqli_close($mysqli); 
return $datos;


}




verificar();
?>