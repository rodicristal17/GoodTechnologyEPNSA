<?php
require("conexion.php");
function cargarDatos(){
$dataa = $_POST['json'];
$data = json_encode($dataa); 
$data = explode(",", $data); 
$TotalRegistro = $_POST['TotalRegistro']; 


$i=0;
$a=1;
$pagina="";
    			
while ($i<$TotalRegistro){
	     
	         
	     
       
		  
			 if($a<2000){			  
			$pagina.='<table class="tableRegistroSearch"><tr id="tdExcelMultipleBusquedad"><td  id="td_datos_1">'.$data[$i].'</td></tr></table>';
 
		
			 $a=$a+1;
			 }
$i=$i+1;	
	
}

$informacion =array("1" => "exito","2" => ($pagina),"3" =>number_format($a,'0',',','.'));
echo json_encode($informacion);	
exit;

}



cargarDatos();

?>