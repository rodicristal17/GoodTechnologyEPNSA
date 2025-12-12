<?php

include('control_de_variables.php');

$funt = $_POST['funt'];
$funt = preparar_variables(utf8_decode($funt));

//cargar achivos importantes
require("conexion.php");
include("verificar_navegador.php");
include("buscar_nivel.php");
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

	// buscarnivel($user,"USUARIO"," anhadir='SI' ");
// }
// if($funt=="editar" || $funt=="eliminar"){
	
	// buscarnivel($user,"USUARIO"," modificar='SI' ");
// }
// if($funt=="buscar"){

	// buscarnivel($user,"USUARIO"," buscar='SI' ");
// }
// if($funt=="editarMisDatos"){

	// buscarnivel($user,"MIS DATOS"," accion='SI' ");
// }


	
if($funt=="nuevo" || $funt=="editar")
{
	
	
	$Cod_Usuario=$_POST['idabm'];
    $Cod_Usuario = utf8_decode($Cod_Usuario);
	$Nrodocumento=$_POST['Nrodocumento'];
    $Nrodocumento = utf8_decode($Nrodocumento);
	$Nombre=$_POST['Nombre'];
    $Nombre = utf8_decode($Nombre);
	$Apellido=$_POST['Apellido'];
    $Apellido = utf8_decode($Apellido);
	$user=$_POST['user'];
    $user = utf8_decode($user);
    $pass=$_POST['pass'];
    $pass = utf8_decode($pass);
    $Estado=$_POST['Estado'];
    $Estado = utf8_decode($Estado);
	$Acceso=$_POST['Acceso'];
    $Acceso = utf8_decode($Acceso);
	$cod_filialFK=$_POST['cod_filialFK'];
    $cod_filialFK = utf8_decode($cod_filialFK);
    
    
	abm($Cod_Usuario,$Nrodocumento,$Nombre,$Apellido,$user,$pass,$Estado,$Acceso,$cod_filialFK,$funt);

}
	
if($funt=="editarMisDatos")
{
	
	
	$Cod_Usuario=$_POST['useru'];
    $Cod_Usuario = utf8_decode($Cod_Usuario);
	$user=$_POST['user'];
    $user = utf8_decode($user);
    $pass=$_POST['pass'];
    $pass = utf8_decode($pass);  
	$cod_filialFK=$_POST['cod_filialFK'];
    $cod_filialFK = utf8_decode($cod_filialFK);   
	editarmisdatos($Cod_Usuario,$user,$pass,$cod_filialFK);

}

if($funt=="buscar")
{
	$codfilial=$_POST['codfilial'];
$codfilial = utf8_decode($codfilial);
$usuario=$_POST['usuario'];
$usuario = utf8_decode($usuario);
$estado=$_POST['estado'];
$estado = utf8_decode($estado);
$ordenby=$_POST['ordenby'];
$ordenby = utf8_decode($ordenby);
buscar($codfilial,$usuario,$estado,$ordenby);

}	


	
	

}

function abm($Cod_Usuario,$Nrodocumento,$Nombre,$Apellido,$user,$pass,$Estado,$Acceso,$cod_filialFK,$funt)
{
	
	if($Nrodocumento=="" || $Nombre==""  || $Apellido=="" || $user=="" || $pass==""|| $cod_filialFK=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	
	$consulta= "Select count(*) from usuario where user=? and pass=? and cod_filialFK=?  and Cod_Usuario!=? and tipoplataforma='Academico'";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='ssss';
$stmt->bind_param($ss,$user,$pass,$cod_filialFK,$Cod_Usuario); 


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
	$informacion =array("1" => "CI");
	echo json_encode($informacion);	
	exit;
}   
	
	
	if($funt=="nuevo")
	{
				$consulta= "Select count(*) from usuario where Nrodocumento=? and estado ='Activo' and  tipoplataforma='Academico'";
	
	
		$stmt = $mysqli->prepare($consulta);
$ss='s';
$stmt->bind_param($ss, $Nrodocumento); 


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

if($valor==1)
{
	$informacion =array("1" => "EX");
	echo json_encode($informacion);	
	exit;
}   
	}
	if($funt=="nuevo")
	{
	
    
    $consulta="insert into usuario (tipoplataforma,Nrodocumento, Nombre,Apellido,  user, pass, estado, Acceso,cod_filialFK) values ('Academico',?,upper(?),upper(?),?,?,?,?,?)";	
     $stmt = $mysqli->prepare($consulta);
    $ss='ssssssss';
    $stmt->bind_param($ss,$Nrodocumento,$Nombre,$Apellido,$user,$pass,$Estado,$Acceso,$cod_filialFK); 
        
 
	}
	if($funt=="editar")
	{
        
        
    
    $consulta="Update usuario set Nrodocumento=?, Nombre=upper(?),Apellido=upper(?),  user=?, pass=?, estado=?, Acceso=?,cod_filialFK=? where Cod_Usuario=?";	

	$stmt = $mysqli->prepare($consulta);
        


    $ss='sssssssss';
        
    $stmt->bind_param($ss,$Nrodocumento,$Nombre,$Apellido,$user,$pass,$Estado,$Acceso,$cod_filialFK,$Cod_Usuario); 
        
	
       
	}
	
if ( ! $stmt->execute() ) {
	$informacion =array("1" => "error");
	echo json_encode($informacion);	
	exit;
}

 mysqli_close($mysqli); 
if($funt=="nuevo"){
$Cod_Usuario=obtenerUltimaid();
generarKEYS($Acceso,$Cod_Usuario);
	
}else{
	EliminarAccesos($Cod_Usuario);
	generarKEYS($Acceso,$Cod_Usuario);
}

$informacion =array("1" => "exito");
echo json_encode($informacion);	
exit;

	
	
	
	
}

function editarmisdatos($Cod_Usuario,$user,$pass,$cod_filialFK)
{
	
	if($Cod_Usuario=="" || $user=="" || $pass==""|| $cod_filialFK=="" ){
$informacion =array("1" => "DI");
echo json_encode($informacion);	
exit;
	}

	$mysqli=conectar_al_servidor();

	
	$consulta= "Select count(*) from usuario where tipoplataforma='Academico' and user='$user' and pass='$pass' and cod_filialFK='$cod_filialFK' and Cod_Usuario!='$Cod_Usuario' ";

	$stmt = $mysqli->prepare($consulta);
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
	$informacion =array("1" => "CI");
	echo json_encode($informacion);	
	exit;
}   
	

        
        
    
    $consulta="Update usuario set  user=?, pass=? where Cod_Usuario=?";	

	$stmt = $mysqli->prepare($consulta);
        


    $ss='sss';
        
    $stmt->bind_param($ss,$user,$pass,$Cod_Usuario); 
        
	
       
	
	
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


function obtenerUltimaid()
{
	$mysqli=conectar_al_servidor();
	 $idusario='';
	$sql= "Select Cod_Usuario from usuario where tipoplataforma='Academico' order by Cod_Usuario desc limit 1";
    $stmt = $mysqli->prepare($sql);
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
		  
		  
		      $idusario=$valor['Cod_Usuario'];
		  	 
			  
			  
	  }
 }
  mysqli_close($mysqli); 
return $idusario;


}



function buscar($codfilial,$usuario,$estado,$ordenby)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	 $oderby="";
	if($ordenby=="1"){
		$oderby="order by Nombre asc";
	}
	if($ordenby=="2"){
		$oderby="order by nombrelocal asc";
	}
	$condicionfilial="";
	if($codfilial!=""){
		$condicionfilial="and cod_filialFK='".$codfilial."'";
	}
	$condicionusuario="";
	if($usuario!=""){
		$condicionusuario="and concat(Nombre,' ',Apellido) like '%".$usuario."%'";
	}
	
		$sql= "Select Cod_Usuario,Nrodocumento, Nombre,Apellido, Cargo, user, pass, estado, Acceso,cod_filialFK,
		(select nombre from filial where cod_filial=cod_filialFK) as nombrelocal,
		(select nombre from listado_niveles where cod_niveles=Acceso) as nombreacceso
        from usuario where tipoplataforma='Academico' and estado=? ".$condicionfilial.$condicionusuario.$oderby." limit 100";
		
 
   
   $stmt = $mysqli->prepare($sql);
  	$s='s';
$stmt->bind_param($s,$estado);
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
		  
		  
		  
		      $Cod_Usuario=$valor['Cod_Usuario'];
		  	  $Nrodocumento=utf8_encode($valor['Nrodocumento']);
		  	  $Nombre=utf8_encode($valor['Nombre']);
		  	  $Apellido=utf8_encode($valor['Apellido']);
		  	  $Cargo=utf8_encode($valor['Cargo']);
		  	  $Acceso=utf8_encode($valor['Acceso']);
			  $user=utf8_encode($valor['user']);
              $pass=$valor['pass'];
			  $estado=utf8_encode($valor['estado']);
			  $cod_filialFK=utf8_encode($valor['cod_filialFK']);
			  $nombrelocal=utf8_encode($valor['nombrelocal']);
			  $nombreacceso=utf8_encode($valor['nombreacceso']);
			  $styleorden1="";
			  $styleorden2="";
			 
		   	if($ordenby=="1"){
		$styleorden1="color: #000; background-color: #e7e7e7;";
	}
	if($ordenby=="2"){
		$styleorden2="color: #000; background-color: #e7e7e7;";
	}
		  	 
			  $pagina.="
			  <table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>
			  <tr id='tbSelecRegistro' onclick='ObtenerdatosAbmUsuario(this)'>
			  <td id='td_id' style='display:none;'>".$Cod_Usuario."</td>
			  <td id='td_datos_1' style='display:none' class='tdRegistroSearch'>".$Nrodocumento."</td>
			  <td id='td_datos_2' style='width:33%;".$styleorden1."' class='tdRegistroSearch'>".$Nombre." ".$Apellido."</td>
			<td  id='td_datos_12' style='width:33%;".$styleorden2."'>".$nombrelocal."</td>
			  <td  id='td_datos_4' style='width:33%'>".$nombreacceso."</td>			  
			  <td  id='td_datos_5' style='display:none'>".$Acceso."</td>
			  <td  id='td_datos_6' style='display:none'>".$user."</td>
			  <td  id='td_datos_7' style='display:none'>".$pass."</td>
			  <td  id='td_datos_8' style='display:none'>".$estado."</td>
			  <td  id='td_datos_9' style='display:none'>".$Nombre."</td>
			  <td  id='td_datos_10' style='display:none'>".$Apellido."</td>
			  <td  id='td_datos_11' style='display:none'>".$cod_filialFK."</td>
			  </tr>
			  </table>";
	 //EliminarAccesos($Cod_Usuario);
	 //generarKEYS($Acceso,$Cod_Usuario);
		
	  }
 }
 
  mysqli_close($mysqli); 
  $informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}

function generarKEYS($cod_nivelesFk,$usuarios_idusario)
{
	$mysqli=conectar_al_servidor();
	 $pagina='';
	  EliminarAccesos($usuarios_idusario);
		$sql= "Select dts.iddetallesniveles,lta.nro,lta.formulario,lta.codigo,lta.nombre,dts.accion ,lta.idlistadodeacceso
        from listado_niveles lts inner join detallesniveles dts on dts.cod_nivelesfk=lts.cod_niveles 
		inner join listadodeacceso lta on lta.idlistadodeacceso=dts.idlistadodeacceso
		where cod_nivelesfk='".$cod_nivelesFk."' order by lta.nro asc";
		 
   $stmt = $mysqli->prepare($sql);
  if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
$controltitulo="";
	$result = $stmt->get_result();
 $valor= mysqli_num_rows($result);
 $totalresouesta= $valor;
 if ($valor>0)
 {
	  while ($valor= mysqli_fetch_assoc($result))
	  {
		  
		  
		  
		     $iddetallesniveles=$valor['iddetallesniveles'];
		  	  $nro=utf8_encode($valor['nro']);
		  	  $formulario=utf8_encode($valor['formulario']);
		  	  $codigo=utf8_encode($valor['codigo']);
		  	  $nombre=utf8_encode($valor['nombre']);
		  	  $accion=utf8_encode($valor['accion']);
		  	  $idlistadodeacceso=utf8_encode($valor['idlistadodeacceso']);		  	 
			  generarAccesos($idlistadodeacceso,$accion,$usuarios_idusario);
			    	 
		  	
			  
			  
	  }
	  
 }
 
  mysqli_close($mysqli); 
$informacion =array("1" => "exito","2" => $pagina,"3"=> $totalresouesta);
echo json_encode($informacion);	
exit;


}


function generarKEYS1($nivel,$usuarios_idusario){
	
	    if($nivel=="Nivel A"){
		  //POSICION, ID OPERACION, FORMULARIO, INSERTAR, MODIFICAR, ELIMINAR , ACCION
		 generarAccesos("1","FRM ACCESO","EDITARACCESO","ACCESO","SI",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","VERUSUARIO","VER USUARIO","SI",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","VERESTADOUSUARIO","VER ESTADO USUARIO","SI",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","BUSCARUSUARIO","BUSCAR USUARIO","SI",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","INSERTARUSUARIO","INSERTAR USUARIO","SI",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","EDITARUSUARIO","EDITAR USUARIO","SI",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","ELIMINARUSUARIO","ELIMINAR USUARIO","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","VERFILIAL","VER FILIAL","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","VERESTADOFILIAL","VER ESTADO FILIAL","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","BUSCARFILIAL","BUSCAR FILIAL","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","INSERTARFILIAL","INSERTAR FILIAL","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","EDITARFILIAL","EDITAR FILIAL","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","ELIMINARFILIAL","ELIMINAR FILIAL","SI",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","ACCESOFILIAL","ACEDER A OTRA FILIAL","SI",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","VERCARRERA","VER CARRERA","SI",$usuarios_idusario);
		  generarAccesos("4","FRM CARRERA","VERESTADOCARRERA","VER ESTADO CARRERA","SI",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","BUSCARCARRERA","BUSCAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","INSERTARCARRERA","INSERTAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","EDITARCARRERA","EDITAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","ELIMINARCARRERA","ELIMINAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","VERFACULTAD","VER FACULTAD","SI",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","VERESTADOFACULTAD","VER ESTADO FACULTAD","SI",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","BUSCARFACULTAD","BUSCAR FACULTAD","SI",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","INSERTARFACULTAD","INSERTAR FACULTAD","SI",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","EDITARFACULTAD","EDITAR FACULTAD","SI",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","ELIMINARFACULTAD","ELIMINAR FACULTAD","SI",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","VERDOCENTES","VER DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","VERESTADODOCENTES","VER ESTADO DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","BUSCARDOCENTES","BUSCAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","INSERTARDOCENTES","INSERTAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","EDITARDOCENTES","EDITAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","ELIMINARDOCENTES","ELIMINAR DOCENTES","SI",$usuarios_idusario);
		  generarAccesos("5.2","FRM ASIGNAR DOCENTES","VERASIGNARDOCENTES","VER ASIGNAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","VERESTADOASIGNARDOCENTES","VER ESTADO ASIGNAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","BUSCARASIGNARDOCENTES","BUSCAR ASIGNAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","INSERTARASIGNARDOCENTES","INSERTAR ASIGNAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","EDITARASIGNARDOCENTES","EDITAR ASIGNAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","ELIMINARASIGNARDOCENTES","ELIMINAR ASIGNAR DOCENTES","SI",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","VERALUMNOS","VER ALUMNOS","SI",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","VERESTADOALUMNOS","VER ESTADO ALUMNOS","SI",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","BUSCARALUMNOS","BUSCAR ALUMNOS","SI",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","INSERTARALUMNOS","INSERTAR ALUMNOS","SI",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","EDITARALUMNOS","EDITAR ALUMNOS","SI",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","ELIMINARALUMNOS","ELIMINAR ALUMNOS","SI",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","VERCATEDRA","VER CATEDRA","SI",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","VERESTADOCATEDRA","VER ESTADO CATEDRA","SI",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","BUSCARCATEDRA","BUSCAR CATEDRA","SI",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","INSERTARCATEDRA","INSERTAR CATEDRA","SI",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","EDITARCATEDRA","EDITAR CATEDRA","SI",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","ELIMINARCATEDRA","ELIMINAR CATEDRA","SI",$usuarios_idusario);
		 generarAccesos("10","FRM MIS DATOS","VERMISDATOS","VER MIS DATOS","SI",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","VERASIGNARCARRERA","VER ASIGNAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","VERESTADOASIGNARCARRERA","VER ESTADO ASIGNAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","BUSCARASIGNARCARRERA","BUSCAR ASIGNAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","INSERTARASIGNARCARRERA","INSERTAR ASIGNAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","EDITARASIGNARCARRERA","EDITAR ASIGNAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","ELIMINARASIGNARCARRERA","ELIMINAR ASIGNAR CARRERA","SI",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","VERCARGARCALIF","VER CARGAR CALIFICACIONES","SI",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","BUSCARALUMNOSCALIFICACION","BUSCAR CARGAR CALIFICACIONES","SI",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","CREARLISTAALUMNOSCALIFICACION","CREAR LISTA DE CALIFICACIONES","NO",$usuarios_idusario);
		  generarAccesos("11.2","FRM CARGAR CALIF.","INSERTARCALIFICACION","INSERTAR CALIFICACIONES","NO",$usuarios_idusario);

		 generarAccesos("11.2","FRM CARGAR CALIF.","EDITARALUMNOS","EDITAR CARGAR CALIFICACIONES","SI",$usuarios_idusario);
		 generarAccesos("11.3","FRM DATOS ACTAS","INSERTARACTAS","INSERTAR ACTAS","SI",$usuarios_idusario);
		 generarAccesos("11.3","FRM DATOS ACTAS","MODIFICARACTAS","MODIFICAR ACTAS","SI",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","VERMALLA","VER MALLA","SI",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","VERESTADOMALLA","VER ESTADO MALLA","SI",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","BUSCARMALLA","BUSCAR MALLA","SI",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","INSERTARMALLA","INSERTAR MALLA","SI",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","EDITARMALLA","EDITAR MALLA","SI",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","ELIMINARMALLA","ELIMINAR MALLA","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERMATRICULACION","VER MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERESTADOMATRICULACION","VER ESTADO MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","BUSCARMATRICULACION","BUSCAR MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","INSERTARMATRICULACION","INSERTAR MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","MODIFICARANHO","MODIFICAR AÑO","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","MODIFICARCURSO","MODIFICAR CURSO","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","EDITARMATRICULACION","EDITAR MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","ELIMINARMATRICULACION","ELIMINAR MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERINFORMEMATRICULACION","VER INFORME MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","INFORMEMATRICULACION","INFORME MATRICULACION","SI",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","CONVALIDACIONMATRICULACION","SELECCIONAR CONVALIDACION","SI",$usuarios_idusario);generarAccesos("16","FRM LISTADO ACCESO","VERLISTADOACCESO","VER LISTADO ACCESO","SI",$usuarios_idusario);
		 generarAccesos("16","FRM LISTADO ACCESO","EDITARLISTADOACCESO","EDITAR LISTADO ACCESO","SI",$usuarios_idusario);
		 generarAccesos("16","FRM LISTADO ACCESO","BUSCARLISTADOACCESO","BUSCAR LISTADO ACCESO","SI",$usuarios_idusario);

		}
		if($nivel=="Nivel B"){
		  //POSICION, ID OPERACION, FORMULARIO, INSERTAR, MODIFICAR, ELIMINAR , ACCION
		generarAccesos("1","FRM ACCESO","EDITARACCESO","ACCESO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","VERUSUARIO","VER USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","VERESTADOUSUARIO","VER ESTADO USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","BUSCARUSUARIO","BUSCAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","INSERTARUSUARIO","INSERTAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","EDITARUSUARIO","EDITAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","ELIMINARUSUARIO","ELIMINAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","VERFILIAL","VER FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","VERESTADOFILIAL","VER ESTADO FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","BUSCARFILIAL","BUSCAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","INSERTARFILIAL","INSERTAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","EDITARFILIAL","EDITAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","ELIMINARFILIAL","ELIMINAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","ACCESOFILIAL","ACEDER A OTRA FILIAL","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","VERCARRERA","VER CARRERA","NO",$usuarios_idusario);
		  generarAccesos("4","FRM CARRERA","VERESTADOCARRERA","VER ESTADO CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","BUSCARCARRERA","BUSCAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","INSERTARCARRERA","INSERTAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","EDITARCARRERA","EDITAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","ELIMINARCARRERA","ELIMINAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","VERFACULTAD","VER FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","VERESTADOFACULTAD","VER ESTADO FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","BUSCARFACULTAD","BUSCAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","INSERTARFACULTAD","INSERTAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","EDITARFACULTAD","EDITAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","ELIMINARFACULTAD","ELIMINAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","VERDOCENTES","VER DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","VERESTADODOCENTES","VER ESTADO DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","BUSCARDOCENTES","BUSCAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","INSERTARDOCENTES","INSERTAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","EDITARDOCENTES","EDITAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","ELIMINARDOCENTES","ELIMINAR DOCENTES","NO",$usuarios_idusario);
		  generarAccesos("5.2","FRM ASIGNAR DOCENTES","VERASIGNARDOCENTES","VER ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","VERESTADOASIGNARDOCENTES","VER ESTADO ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","BUSCARASIGNARDOCENTES","BUSCAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","INSERTARASIGNARDOCENTES","INSERTAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","EDITARASIGNARDOCENTES","EDITAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","ELIMINARASIGNARDOCENTES","ELIMINAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","VERALUMNOS","VER ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","VERESTADOALUMNOS","VER ESTADO ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","BUSCARALUMNOS","BUSCAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","INSERTARALUMNOS","INSERTAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","EDITARALUMNOS","EDITAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","ELIMINARALUMNOS","ELIMINAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","VERCATEDRA","VER CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","VERESTADOCATEDRA","VER ESTADO CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","BUSCARCATEDRA","BUSCAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","INSERTARCATEDRA","INSERTAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","EDITARCATEDRA","EDITAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","ELIMINARCATEDRA","ELIMINAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("10","FRM MIS DATOS","VERMISDATOS","VER MIS DATOS","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","VERASIGNARCARRERA","VER ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","VERESTADOASIGNARCARRERA","VER ESTADO ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","BUSCARASIGNARCARRERA","BUSCAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","INSERTARASIGNARCARRERA","INSERTAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","EDITARASIGNARCARRERA","EDITAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","ELIMINARASIGNARCARRERA","ELIMINAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","VERCARGARCALIF","VER CARGAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","BUSCARALUMNOSCALIFICACION","BUSCAR CARGAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","CREARLISTAALUMNOSCALIFICACION","CREAR LISTA DE CALIFICACIONES","NO",$usuarios_idusario);
		 		 generarAccesos("11.2","FRM CARGAR CALIF.","INSERTARCALIFICACION","INSERTAR CALIFICACIONES","NO",$usuarios_idusario);

		 generarAccesos("11.2","FRM CARGAR CALIF.","EDITARALUMNOS","EDITAR CARGAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.3","FRM DATOS ACTAS","INSERTARACTAS","INSERTAR ACTAS","NO",$usuarios_idusario);
		 generarAccesos("11.3","FRM DATOS ACTAS","MODIFICARACTAS","MODIFICAR ACTAS","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","VERMALLA","VER MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","VERESTADOMALLA","VER ESTADO MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","BUSCARMALLA","BUSCAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","INSERTARMALLA","INSERTAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","EDITARMALLA","EDITAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","ELIMINARMALLA","ELIMINAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERMATRICULACION","VER MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERESTADOMATRICULACION","VER ESTADO MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","BUSCARMATRICULACION","BUSCAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","INSERTARMATRICULACION","INSERTAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","MODIFICARANHO","MODIFICAR AÑO","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","MODIFICARCURSO","MODIFICAR CURSO","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","EDITARMATRICULACION","EDITAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","ELIMINARMATRICULACION","ELIMINAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERINFORMEMATRICULACION","VER INFORME MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","INFORMEMATRICULACION","INFORME MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","CONVALIDACIONMATRICULACION","SELECCIONAR CONVALIDACION","NO",$usuarios_idusario);
		
		}
		if($nivel=="Nivel C"){
		  //POSICION, ID OPERACION, FORMULARIO, INSERTAR, MODIFICAR, ELIMINAR , ACCION
		generarAccesos("1","FRM ACCESO","EDITARACCESO","ACCESO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","VERUSUARIO","VER USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","VERESTADOUSUARIO","VER ESTADO USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","BUSCARUSUARIO","BUSCAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","INSERTARUSUARIO","INSERTAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","EDITARUSUARIO","EDITAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("2","FRM USUARIO","ELIMINARUSUARIO","ELIMINAR USUARIO","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","VERFILIAL","VER FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","VERESTADOFILIAL","VER ESTADO FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","BUSCARFILIAL","BUSCAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","INSERTARFILIAL","INSERTAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","EDITARFILIAL","EDITAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","ELIMINARFILIAL","ELIMINAR FILIAL","NO",$usuarios_idusario);
		 generarAccesos("3","FRM FILIAL","ACCESOFILIAL","ACEDER A OTRA FILIAL","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","VERCARRERA","VER CARRERA","NO",$usuarios_idusario);
		  generarAccesos("4","FRM CARRERA","VERESTADOCARRERA","VER ESTADO CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","BUSCARCARRERA","BUSCAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","INSERTARCARRERA","INSERTAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","EDITARCARRERA","EDITAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("4","FRM CARRERA","ELIMINARCARRERA","ELIMINAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","VERFACULTAD","VER FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","VERESTADOFACULTAD","VER ESTADO FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","BUSCARFACULTAD","BUSCAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","INSERTARFACULTAD","INSERTAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","EDITARFACULTAD","EDITAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5","FRM FACULTAD","ELIMINARFACULTAD","ELIMINAR FACULTAD","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","VERDOCENTES","VER DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","VERESTADODOCENTES","VER ESTADO DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","BUSCARDOCENTES","BUSCAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","INSERTARDOCENTES","INSERTAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","EDITARDOCENTES","EDITAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.1","FRM DOCENTES","ELIMINARDOCENTES","ELIMINAR DOCENTES","NO",$usuarios_idusario);
		  generarAccesos("5.2","FRM ASIGNAR DOCENTES","VERASIGNARDOCENTES","VER ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","VERESTADOASIGNARDOCENTES","VER ESTADO ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","BUSCARASIGNARDOCENTES","BUSCAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","INSERTARASIGNARDOCENTES","INSERTAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","EDITARASIGNARDOCENTES","EDITAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("5.2","FRM ASIGNAR DOCENTES","ELIMINARASIGNARDOCENTES","ELIMINAR ASIGNAR DOCENTES","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","VERALUMNOS","VER ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","VERESTADOALUMNOS","VER ESTADO ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","BUSCARALUMNOS","BUSCAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","INSERTARALUMNOS","INSERTAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","EDITARALUMNOS","EDITAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("7","FRM ALUMNOS","ELIMINARALUMNOS","ELIMINAR ALUMNOS","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","VERCATEDRA","VER CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","VERESTADOCATEDRA","VER ESTADO CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","BUSCARCATEDRA","BUSCAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","INSERTARCATEDRA","INSERTAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","EDITARCATEDRA","EDITAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("9","FRM CATEDRA","ELIMINARCATEDRA","ELIMINAR CATEDRA","NO",$usuarios_idusario);
		 generarAccesos("10","FRM MIS DATOS","VERMISDATOS","VER MIS DATOS","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","VERASIGNARCARRERA","VER ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","VERESTADOASIGNARCARRERA","VER ESTADO ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","BUSCARASIGNARCARRERA","BUSCAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","INSERTARASIGNARCARRERA","INSERTAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","EDITARASIGNARCARRERA","EDITAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11","FRM ASIGNAR CARRERA","ELIMINARASIGNARCARRERA","ELIMINAR ASIGNAR CARRERA","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","VERCARGARCALIF","VER CARGAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","BUSCARALUMNOSCALIFICACION","BUSCAR CARGAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","CREARLISTAALUMNOSCALIFICACION","CREAR LISTA DE CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","INSERTARCALIFICACION","INSERTAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.2","FRM CARGAR CALIF.","EDITARCALIFICACION","EDITAR CALIFICACIONES","NO",$usuarios_idusario);
		 generarAccesos("11.3","FRM DATOS ACTAS","INSERTARACTAS","INSERTAR ACTAS","NO",$usuarios_idusario);
		 generarAccesos("11.3","FRM DATOS ACTAS","MODIFICARACTAS","MODIFICAR ACTAS","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","VERMALLA","VER MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","VERESTADOMALLA","VER ESTADO MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","BUSCARMALLA","BUSCAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","INSERTARMALLA","INSERTAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","EDITARMALLA","EDITAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("12","FRM MALLA","ELIMINARMALLA","ELIMINAR MALLA","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERMATRICULACION","VER MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERESTADOMATRICULACION","VER ESTADO MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","BUSCARMATRICULACION","BUSCAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","INSERTARMATRICULACION","INSERTAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","MODIFICARANHO","MODIFICAR AÑO","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","MODIFICARCURSO","MODIFICAR CURSO","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","EDITARMATRICULACION","EDITAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","ELIMINARMATRICULACION","ELIMINAR MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","VERINFORMEMATRICULACION","VER INFORME MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","INFORMEMATRICULACION","INFORME MATRICULACION","NO",$usuarios_idusario);
		 generarAccesos("15","FRM MATRICULACION","CONVALIDACIONMATRICULACION","SELECCIONAR CONVALIDACION","NO",$usuarios_idusario);

		}
	

}

function generarAccesos($idlistadodeaccesoFK,$accion,$usuarios_idusario){

	$mysqli=conectar_al_servidor();
	$consulta="INSERT INTO accesosuser (idlistadodeaccesoFK,tipo,usuarios_idusario,accion) VALUES ('$idlistadodeaccesoFK','Academico','$usuarios_idusario','$accion')";	

	$stmt = $mysqli->prepare($consulta);
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}

// $consulta="INSERT INTO listadodeacceso (nro,formulario,codigo,accion,nombre,tipo) VALUES ('$orden','$formulario','$codformulario','$accion','$frm','Academico')";	

	// $stmt = $mysqli->prepare($consulta);
// if ( ! $stmt->execute()) {
   // echo "Error";
   // exit;
// }
	 mysqli_close($mysqli); 
	
}
function EliminarAccesos($usuarios_idusario){
	
	
	
	$mysqli=conectar_al_servidor();
	$consulta="Delete from accesosuser where usuarios_idusario='$usuarios_idusario' and  tipo='Academico'";	
	$stmt = $mysqli->prepare($consulta);
if ( ! $stmt->execute()) {
   echo "Error";
   exit;
}
	
	 mysqli_close($mysqli); 
}






verificar($funt);
?>