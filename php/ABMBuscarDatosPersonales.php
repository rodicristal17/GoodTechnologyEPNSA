<?php

$operacion = $_POST['funt'];
$operacion = utf8_decode($operacion);
include('quitarseparadormiles.php');
include("buscar_nivel.php");
require("conexion.php");
include("verificar_navegador.php");
function verificar($operacion)
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


if($operacion=="consultar")
{
	

$doc=$_POST['doc'];
$doc = utf8_decode($doc);	
$nombreapellido=$_POST['nombreapellido'];
$nombreapellido = utf8_decode($nombreapellido);	
$filial=$_POST['filial'];
$filial = utf8_decode($filial);	


	buscarRegistrosAgrupados($doc,$nombreapellido,$filial);



}




}





function buscarRegistrosAgrupados($doc,$nombreapellido,$filial)
{
	
$mysqli=conectar_al_servidor();


$pagina="<table style='display:none'><tr  >";
$pagina.="<td  id='td_datos_1' style='width:33%'>NRO DOC.</td>"; 
$pagina.="<td  id='td_datos_2' style='width:33%'>NOMBRE</td>"; 
$pagina.="<td  id='td_datos_6'  style='width:33%;'>APELLIDO</td>"; 
$pagina.="</tr></table>"; 
$condicion1="";
if($doc!=""){
	$doc=str_replace('.','',$doc);
	$doc=str_replace(',','.',$doc);
	$doc=str_replace(' ','',$doc);
$condicion1=" and nrodoc='$doc' ";		
}

$condicion2="";
if($nombreapellido!=""){
$condicion2=" and concat(nombre,'',apellido) like '%$nombreapellido%' ";	
}

$condicion3="";
if($filial!=""){
$condicion3=" and filiar='$filial' ";	
}

$sql= "select idtablacuentas, filiar, facturanro, fecha, anho, nombre, apellido, nrodoc, carrera, curso, concepto1, concepto2,  subtotal, insertado, editado, Insertadopor, editadopor, test
from tablacuentas tabc where  estado='Insertado' ".$condicion1.$condicion2.$condicion3."  group by nrodoc,nombre,apellido order by filiar,nombre asc Limit 5000 ";
 
 
 
$pagina=""; 
$stmt = $mysqli->prepare($sql);
if ( ! $stmt->execute()) {

echo trigger_error('The query execution failed; MySQL said ('.$stmt->errno.') '.$stmt->error, E_USER_ERROR);
exit;
}

$result = $stmt->get_result();
$valor= mysqli_num_rows($result);
$nroRegistro=$valor;
$totales=0;
$subtotales=0;
$controlTitulo="";
if ($valor>0)
{
while ($valor= mysqli_fetch_assoc($result))
{  



$filiar = utf8_encode($valor['filiar']);     
$facturanro = utf8_encode($valor['facturanro']);     
$fecha = utf8_encode($valor['fecha']);     
$anho = utf8_encode($valor['anho']);     
$nombre = utf8_encode($valor['nombre']);     
$apellido = utf8_encode($valor['apellido']);     
$nrodoc1 = utf8_encode($valor['nrodoc']);     
$nrodoc = utf8_encode($valor['nrodoc']);     
$carrera = utf8_encode($valor['carrera']);     
$curso = utf8_encode($valor['curso']);     
$concepto1 = utf8_encode($valor['concepto1']);     
$concepto2 = utf8_encode($valor['concepto2']);     
$subtotal = utf8_encode($valor['subtotal']);     
$test = utf8_encode($valor['test']);    
 
$nombre="<input type='text' value='$nombre'  class='input4'   id='$nrodoc1'  style='width:90%' onkeyup='if(event.keyCode == 13){EditarNombre(this)}' title='Presione enter para guardar'/>";
$apellido="<input type='text' value='$apellido' class='input4'  id='$nrodoc1'    style='width:90%' onkeyup='if(event.keyCode == 13){EditarApellido(this)}' title='Presione enter para guardar'/>";

 $titulo="";  
 if($controlTitulo!=$filiar){
	 //$registro=buscarNroRegistro($doc,$nombreapellido,$filiar);
	 $titulo="<table style='width:100%' ><tr><td><p class='pTitulo6'>". $filiar." </p></td></td></table>";
	$controlTitulo=$filiar;
	
 }

$pagina.=$titulo."<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'><tr >";
$pagina.="<td  id='td_datos_2' style='width:33%'>".$nrodoc."</td>"; 
$pagina.="<td  id='td_datos_6' style='width:33%'>".$nombre."</td>"; 
$pagina.="<td  id='td_datos_7' style='width:33%'>".$apellido."</td>";
$pagina.="</tr></table>";


}
}

   mysqli_close($mysqli);    
$informacion =array("1" => "exito","2" => $pagina,"3" => number_format($nroRegistro,'0',',','.'),"4" => number_format($subtotales,'0',',','.') );
echo json_encode($informacion);	
exit;

}


function buscarNroRegistro($doc,$nombreapellido,$filial)
{
	
$mysqli=conectar_al_servidor();

$condicion1="";
if($doc!=""){
	$doc=str_replace('.','',$doc);
	$doc=str_replace(',','.',$doc);
	$doc=str_replace(' ','',$doc);
$condicion1=" and nrodoc='$doc' ";		
}

$condicion2="";
if($nombreapellido!=""){
$condicion2=" and concat(nombre,'',apellido) like '%$nombreapellido%' ";	
}

$condicion3="";
if($filial!=""){
$condicion3=" and filiar='$filial' ";	
}

$sql= "select count(idtablacuentas) as Registro
from tablacuentas tabc where  estado='Insertado' and nrodoc!='0' ".$condicion1.$condicion2.$condicion3." group by nrodoc  ";
 

 
$stmt = $mysqli->prepare($sql);
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
 mysqli_close($mysqli); 
$result = $stmt->get_result();
$nro_total=$result->fetch_row();
$valor=$nro_total[0];
return $valor;   
   

}


verificar($operacion);
?>