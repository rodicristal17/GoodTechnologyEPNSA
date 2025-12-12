<?php

require("conexion.php");


function  editar($IdAnalisis,$MostrarOrden)
{
	
	

	$mysqli=conectar_al_servidor();


	
	
	
	 $consulta="Update analisis set MostrarOrden=? where IdAnalisis=?";	

	$stmt = $mysqli->prepare($consulta);
        


    $ss='ss';
        
    $stmt->bind_param($ss,$MostrarOrden,$IdAnalisis); 
	
	
if ( ! $stmt->execute() ) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;

}



	
	
	
	
}




function buscar()
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "Select IdAnalisis,MostrarOrden
        from tipoanalisisnro ";
		
 
   
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
		  
		  
		  
		      $IdAnalisis=$valor['IdAnalisis'];
		  	  $MostrarOrden=utf8_encode($valor['MostrarOrden']);
		  echo "<br> > Editando...".$IdAnalisis;
		  	 editar($IdAnalisis,$MostrarOrden);
			  
		  	
			    	 
		  	
			  
			  
	  }
 }
 
 
echo "<br > Terminado...";

}



function cambiarEstadoAnalisi()
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
		$sql= "SELECT Descripcion,Estado,IdTipoAnalisis,
(Select count(*) from detallesperfiles  a where a.IdTipoAnalisis=tp.IdTipoAnalisis) as contador
FROM tipoanalisis tp ";
		
 
   
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
		  
		  
		  
		      $IdTipoAnalisis=$valor['IdTipoAnalisis'];
		  	  $contador=utf8_encode($valor['contador']);
		      if($contador==0){
				  echo "<br >".$IdTipoAnalisis."...";
				  EditarEstado($IdTipoAnalisis);
			  }
			  
		  	
			    	 
		  	
			  
			  
	  }
 }
 
 
echo "<br > Terminado...";

}


function EditarEstado($Cod_analisis)
{
	
	$mysqli=conectar_al_servidor();  
    $consulta="Update tipoanalisis set Estado='Inactivo' where IdTipoAnalisis='$Cod_analisis'";	
	$stmt = $mysqli->prepare($consulta);      
if ( ! $stmt->execute() ) {
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;

}
	
	
	
}





cambiarEstadoAnalisi();
?>