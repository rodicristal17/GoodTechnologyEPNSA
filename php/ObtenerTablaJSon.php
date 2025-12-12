<?php
require("conexion.php");
function cargarDatos(){
$dataa = $_POST['json'];
$data = json_decode($dataa, true); 
$TotalRegistro = $_POST['TotalRegistro']; 
$i=0;
$a=1;
$pagina="";

while ($i<$TotalRegistro){
	     
	         
			  if (array_key_exists('A', $data[$i])) {
             $filiar=$data[$i]["A"];
             }else{
				 $filiar="SIN CARGA";
			 }
		
			   if (array_key_exists('B', $data[$i])) {
              $anho=$data[$i]["B"];
             }else{
				 $anho="SIN CARGA";
			 }
			 
			   if (array_key_exists('C', $data[$i])) {
             $FacturaNro=$data[$i]["C"];
             }else{
				 $FacturaNro="SIN CARGA";
			 }
			 
			   if (array_key_exists('D', $data[$i])) {
             $ControlFactura=$data[$i]["D"];
             }else{
			  $ControlFactura="SIN CARGA";
			 }

			 if (array_key_exists('E', $data[$i])) {
             $Fecha=$data[$i]["E"];
             }else{
				$Fecha="SIN CARGA";
			 }
			 
			  
			   if (array_key_exists('F', $data[$i])) {
             $Nombre=$data[$i]["F"];
             }else{
				 $Nombre="SIN CARGA";
			 }
			 
			   if (array_key_exists('G', $data[$i])) {
             $Apellido=$data[$i]["G"];
             }else{
				 $Apellido="SIN CARGA";
			 }
			 
			   if (array_key_exists('H', $data[$i])) {
             $CI=$data[$i]["H"];
             }else{
				 $CI="SIN CARGA";
			 }
			 
			  
			   if (array_key_exists('I', $data[$i])) {
             $Carrera=$data[$i]["I"];
             }else{
				 $Carrera="SIN CARGA";
			 }
			 
			   if (array_key_exists('J', $data[$i])) {
             $Curso=$data[$i]["J"];
             }else{
				 $Curso="SIN CARGA";
			 }
			 
			     if (array_key_exists('K', $data[$i])) {
             $SutTotal=$data[$i]["K"];
             }else{
				$SutTotal="0";
			 }
			 
			 
			   if (array_key_exists('L', $data[$i])) {
             $Concepto1=$data[$i]["L"];
             }else{
				 $Concepto1="SIN CARGA";
			 }

			 if (array_key_exists('M', $data[$i])) {
             $Concepto2=$data[$i]["M"];
             }else{
				 $Concepto2="SIN CARGA";
			 }
			 
			   if (array_key_exists('N', $data[$i])) {
             $test=$data[$i]["N"];
             }else{
				 $test="0";
			 }
			 
		//	 abm($filiar,$FacturaNro,$Fecha,$anho,$Nombre,$Apellido,$CI,$Carrera,$Curso,$Concepto1,$Concepto2,$SutTotal,$test);
						  
			 if($a<5000){
			  
			 $pagina.="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'><tr id='tbRegistroImportado' >";
			 $pagina.="<td  id='td_datos_1' style='width:5%'>".$filiar."</td>"; 
			 $pagina.="<td  id='td_datos_2' style='width:5%'>".$anho."</td>"; 
			 $pagina.="<td  id='td_datos_3' style='width:5%'>".$FacturaNro."</td>"; 
			 $pagina.="<td  id='td_datos_16' style='width:5%'>".$ControlFactura."</td>"; 
			 $pagina.="<td  id='td_datos_4' style='width:5%'>".$Fecha."</td>"; 
			 $pagina.="<td  id='td_datos_6' style='width:5%'>".$Nombre."</td>"; 
			 $pagina.="<td  id='td_datos_7' style='width:5%'>".$Apellido."</td>"; 
			 $pagina.="<td  id='td_datos_8' style='width:5%'>".$CI."</td>"; 
			 $pagina.="<td  id='td_datos_10' style='width:5%'>".$Carrera."</td>"; 
			 $pagina.="<td  id='td_datos_11' style='width:5%'>".$Curso."</td>"; 
			 $pagina.="<td  id='td_datos_12' style='width:5%'>".number_format($SutTotal,'0',',','.')."</td>"; 
			 $pagina.="<td  id='td_datos_13' style='width:5%'>".$Concepto1."</td>"; 
			 $pagina.="<td  id='td_datos_14' style='width:5%'>".$Concepto2."</td>"; 
			 $pagina.="<td  id='td_datos_15' style='width:5%'>".$test."</td>"; 
		     $pagina.="</tr></table>";
			 }
$i=$i+1;	
$a=$a+1;	
}

$informacion =array("1" => "exito","2" => ($pagina),"3" =>number_format($a,'0',',','.'));
echo json_encode($informacion);	
exit;

}


function  abm($filiar,$facturanro,$fecha,$anho,$nombre,$apellido,$nrodoc,$carrera,$curso,$concepto1,$concepto2,$subtotal,$test)
{
	
	

$mysqli=conectar_al_servidor(); 



		$consulta= "Select count(*) from tablacuentas where facturanro=?  ";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='s';
$stmt->bind_param($ss, $facturanro); 


if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

$valor = 0;
$stmt->bind_result($valor);
while ($stmt->fetch()) { 
   
	 $valor =$valor;
}

if($valor>=1)
{
 $operacion="editar";
} else{
	$operacion="nuevo";
}


if($operacion=="nuevo") 
{


$consulta1="Insert into tablacuentas (filiar,facturanro,fecha,anho,nombre,apellido,nrodoc,carrera,curso,concepto1,concepto2,subtotal,test)
values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
$stmt1 = $mysqli->prepare($consulta1);
$ss='sssssssssssss';
$stmt1->bind_param($ss,$filiar,$facturanro,$fecha,$anho,$nombre,$apellido,$nrodoc,$carrera,$curso,$concepto1,$concepto2,$subtotal,$test);/*Se cargar los paramentros a la sentencia preparada*/


}


if($operacion=="editar")
{

$consulta1="Update tablacuentas set filiar=?,fecha=?,anho=?,nombre=?,apellido=?,nrodoc=?,carrera=?,curso=?,concepto1=?,concepto2=?,subtotal=?,test=? where facturanro=?";
$stmt1 = $mysqli->prepare($consulta1);
$ss='sssssssssssss';
$stmt1->bind_param($ss,$filiar,$fecha,$anho,$nombre,$apellido,$nrodoc,$carrera,$curso,$concepto1,$concepto2,$subtotal,$test,$facturanro); 

}



if (!$stmt1->execute()) {
	
echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;

}



	
}

cargarDatos();

?>