/*Systema de UPG V2.0*/
var imgCargandoA = "<img src='/GoodTechnologyEPNSA/iconos/cargando.gif' style='width:30px' />"
var imgCargandoB = "<img src='/GoodTechnologyEPNSA/iconos/cargandoB.gif' style='width:25px' />"
var controlMenuWd=1;		
function MeniWindows(){
	if(controlMenuWd==0){
		document.getElementById("divMenuWindowsB").style.display="none";
	document.getElementById("divCerrarSesion").style.display="none";
		document.getElementById("divAcercade").style.display="none";
		document.getElementById("divComodin1").style.display="none";
		document.getElementById("divComodin2").style.display="none";
		 $("div[id=divMenuWindowsB]").show(300);				
		 $("div[id=divMantenimiento]").fadeIn(500);
		 $("div[id=divAdministrativo]").fadeIn(500);
		 $("div[id=divConsultar]").fadeIn(500);
		 $("div[id=divReportes]").fadeIn(500);
			document.getElementById("lblTituloInicio").innerHTML="Inicio";
		 controlMenuWd=1
	}else{
		document.getElementById("divMantenimiento").style.display="none";
		document.getElementById("divAdministrativo").style.display="none";
		document.getElementById("divConsultar").style.display="none";
		document.getElementById("divReportes").style.display="none";
			document.getElementById("divMenuWindowsB").style.display="none";
	 $("div[id=divMenuWindowsB]").show(300);	
 $("div[id=divComodin1]").fadeIn(500);		 
		 $("div[id=divCerrarSesion]").fadeIn(500);
		 $("div[id=divAcercade]").fadeIn(500);				
		 $("div[id=divComodin2]").fadeIn(500);		
		controlMenuWd=0
		document.getElementById("lblTituloInicio").innerHTML="Menú";
	}
}
function ocultarMenusWindows(elemento){
			document.getElementById(elemento).style.color="";
			document.getElementById(elemento).style.fontSize="";
		}
function verMenusWindows(elemento){
			
			document.getElementById(elemento).style.fontSize="18px";
}
		function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
  if(hora<10){
	  hora="0"+hora
  } 
  if(segundo<10){
	  segundo="0"+segundo
  }
  if(minuto<10){
	  minuto="0"+minuto
  }
    horaImprimible = hora + " : " + minuto + " : " + segundo
    document.getElementById("inptreloj").value = horaImprimible
    document.getElementById("inptreloj2").value = horaImprimible
	var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	document.getElementById('pfechaactual').innerHTML =dia+"/"+mes+"/"+ f.getFullYear();
	

    setTimeout("mueveReloj()",1000)
}
var temaActual="";
function CambiarTema(d){
	obtener_datos_user();
	 localStorage.setItem("tema"+userid, d);	 
	 if(d=="white"){
	$("link[id=cssTema]").attr("href","/GoodTechnologyEPNSA/css/inicio.css?X-IOSV.02")
}
if(d=="black"){
	$("link[id=cssTema]").attr("href","/GoodTechnologyEPNSA/css/inicioblack.css?X-IOSV.02")
}
}

window.onload = function () {
obtener_datos_user();
temaActual=localStorage.getItem("tema"+userid);
if (temaActual == "undefined" || temaActual == "" || temaActual == "Null" || temaActual == null ) {		
   temaActual="white";
}
if(temaActual=="white"){
	$("link[id=cssTema]").attr("href","/GoodTechnologyEPNSA/css/inicio.css")
}
if(temaActual=="black"){
	$("link[id=cssTema]").attr("href","/GoodTechnologyEPNSA/css/inicioblack.css")
}
    if (typeof history.pushState === "function") {
        history.pushState("jibberish", null, null);
        window.onpopstate = function () {
            history.pushState('newjibberish', null, null);
            evento_atras();
            //volver_atras_pagina()
            // Handle the back (or forward) buttons here
            // Will NOT handle refresh, use onbeforeunload for this.
        };
    } else {
        var ignoreHashChange = true;
        window.onhashchange = function () {
            if (!ignoreHashChange) {
                ignoreHashChange = true;
                window.location.hash = Math.random();
                //evento_atras();
                //volver_atras_pagina()
                // Detect and redirect change here
                // Works in older FF and IE9
                // * it does mess with your hash symbol (anchor?) pound sign
                // delimiter on the end of the URL
            }
            else {
                ignoreHashChange = false;
            }
        };
    }
limpiarCamposCobrarAranceles()
mueveReloj();
buscar_datos_del_usuario();
eventoScrollTable(document.getElementById('TableScroollConsultaIndividual2'));
eventoScrollTable(document.getElementById('TableScroollConsultaMultiple2'));
eventoScrollTable(document.getElementById('TableScroollFacturasCargadas2'));
eventoScrollTable(document.getElementById('TableScroollFacturasHabilitadas2'));
eventoScrollTable(document.getElementById('TableScroollHistorialConsulta2'));
eventoScrollTable(document.getElementById('TableScroollHistorialAgrupadoCarrera2'));
eventoScrollTable(document.getElementById('TableScroollHistorialAgrupadoCarrera2'));
eventoScrollTable(document.getElementById('TableScroollBuscadorMultipleConsulta2'));
eventoScrollTable(document.getElementById('TableScroollBuscadorMultipleBalanceConsulta2'));
eventoScrollTable(document.getElementById('TableScroollHistorialAgrupadoConcepto2'));
eventoScrollTable(document.getElementById('TableScroollBalanceGeneral2'));
eventoScrollTable(document.getElementById('TableScroollBalanceGeneralCriterio2'));
}
function eventoScrollTable(elemento){

	$(elemento).on("scroll", function(){		
		 var desplamiento = $(elemento).scrollLeft();		
		 	if($(elemento).attr("id")=="TableScroollConsultaIndividual2"){
			document.getElementById("TableScroollConsultaIndividual1").scrollLeft=desplamiento
			}			
			if($(elemento).attr("id")=="TableScroollConsultaMultiple2"){
			document.getElementById("TableScroollConsultaMultiple1").scrollLeft=desplamiento
			}			
			if($(elemento).attr("id")=="TableScroollFacturasCargadas2"){
			document.getElementById("TableScroollFacturasCargadas1").scrollLeft=desplamiento
			}
			if($(elemento).attr("id")=="TableScroollFacturasHabilitadas2"){
			document.getElementById("TableScroollFacturasHabilitadas1").scrollLeft=desplamiento
			}
			
			if($(elemento).attr("id")=="TableScroollHistorialConsulta2"){
			document.getElementById("TableScroollHistorialConsulta1").scrollLeft=desplamiento
			}
			if($(elemento).attr("id")=="TableScroollHistorialAgrupadoCarrera2"){
			document.getElementById("TableScroollHistorialAgrupadoCarrera1").scrollLeft=desplamiento
			}
			if($(elemento).attr("id")=="TableScroollHistorialAgrupadoConcepto2"){
			document.getElementById("TableScroollHistorialAgrupadoConcepto1").scrollLeft=desplamiento
			}
			if($(elemento).attr("id")=="TableScroollBuscadorMultipleConsulta2"){
			document.getElementById("TableScroollBuscadorMultipleConsulta1").scrollLeft=desplamiento
			}
			if($(elemento).attr("id")=="TableScroollBuscadorMultipleBalanceConsulta2"){
			document.getElementById("TableScroollBuscadorMultipleBalanceConsulta1").scrollLeft=desplamiento
			}	
			if($(elemento).attr("id")=="TableScroollHistorialAgrupadoConcepto2"){
			document.getElementById("TableScroollHistorialAgrupadoConcepto1").scrollLeft=desplamiento
			}	
			if($(elemento).attr("id")=="TableScroollBalanceGeneral2"){
			document.getElementById("TableScroollBalanceGeneral1").scrollLeft=desplamiento
			}	
			if($(elemento).attr("id")=="TableScroollBalanceGeneralCriterio2"){
			document.getElementById("TableScroollBalanceGeneralCriterio1").scrollLeft=desplamiento
			}		
			});
}

//buscar datos del usuario
var accesosuser;
var filiaruser;
var filialNombreuser;
function buscar_datos_del_usuario(){
	obtener_datos_user();
	verCerrarEfectoCargando("1")
	document.cookie="user="+userid+";max-age=86400;path=/";
   document.cookie="pass="+passuser+";max-age=86400;path=/";			 
	 var datos = new FormData();			
			 datos.append("user" , userid)
			 datos.append("pass" , passuser)
			 datos.append("navegador" , navegador)
			var OpAjax= $.ajax({			
			data: datos,
			url: "/GoodTechnologyEPNSA/php/buscar_datos_del_usuario.php",
			type:"post",
	        cache:false,
			contentType: false,
			processData: false,
		
				error: function(jqXHR, textstatus, errorThrowm){
				manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
                verCerrarEfectoCargando("2")
				
			    return false;
			},
			success: function(responseText)
			{
			  	 verCerrarEfectoCargando("2")	
			Respuesta=responseText;				
				console.log(Respuesta)
	
		var datos = $.parseJSON(Respuesta); 
		Respuesta=datos[1]
		   Respuesta=respuestaJqueryAjax(Respuesta)
		if (Respuesta == true) {	
         var nivel=datos["4"];  
         var nombre=datos["2"];  
		 document.getElementById("inptNombreMisDatos").value=datos["10"]
		 document.getElementById("inptApellidoMisDatos").value=datos["7"]
		 document.getElementById("inptDocMisDatos").value=datos["8"]
		 document.getElementById("inptFilialMisDatos").value=datos["9"]
		 document.getElementById("inptUserMisDatos").value=datos["11"]
		 document.getElementById("inptPassMisDatos").value=datos["12"]
          accesosuser=datos["3"];  
          filiaruser=datos["6"];  
          filialNombreuser=datos["9"];  
 BuscarFilialSelect()
 BuscarCarreraSelect()
BuscarFacultadlSelect()		
BuscarSeleccListaAranceles()	
buscarAnhoSqlConsulta() 
BuscarAsingarCarreraSelect()		
BuscarCatedraSelect()		
BuscarArancelesABalanceList(document.getElementById("inptBuscarBalanceGeneral3"))
 removeToMenu()
 removeToMenuCheckt()
 removeToBtn()
 LimpiarCamposAsignarAlumnos()
 limipiarCamposBusquedaReportMatriculados()
 BuscarListArancelAsignarArancel()
				document.getElementById('lbluser').innerHTML=nombre
				document.getElementById('ptituloUser2').innerHTML=nombre
			}
				try {	
			 }catch(error){
			alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
			var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}					
			}
			});
			
}
function verCerrarMenu(d){
	if(d=="0"){
	 $("div[id=principalMenu]").fadeOut(500);	
		$("div[id=divMenuMantenimiento]").slideUp();
		$("div[id=divMenuAdministracion]").slideUp();
		$("div[id=divMenuConsultar]").slideUp();
		$("div[id=divMenuRepote]").slideUp();
		$("div[id=divMenuAcercade]").slideUp();
	}

	if(d=="1"){
		document.getElementById("principalMenu").style.display=""
		$("div[id=divMenuMantenimiento]").slideDown();
		}
	if(d=="2"){
		document.getElementById("principalMenu").style.display=""
		$("div[id=divMenuAdministracion]").slideDown();		
	}
	if(d=="3"){
		document.getElementById("principalMenu").style.display=""
		$("div[id=divMenuConsultar]").slideDown();		
	}
	if(d=="4"){
		document.getElementById("principalMenu").style.display=""
		$("div[id=divMenuRepote]").slideDown();
	}
	if(d=="5"){
		document.getElementById("principalMenu").style.display=""
		$("div[id=divMenuAcercade]").slideDown();
	}
}


function verCerrarMenub(d){
	if(d=="0"){
	 $("div[id=principalMenub]").fadeOut(500);	
		$("div[id=divMenuMantenimiento]").fadeOut();
		$("div[id=divMenuAcercade]").fadeOut();
		
	}


	if(d=="1"){
		document.getElementById("principalMenub").style.display=""
		$("div[id=divMenuMantenimiento]").fadeIn(500);	
	}
	if(d=="2"){
		document.getElementById("principalMenub").style.display=""
		$("div[id=divMenuAcercade]").fadeIn();
	}
}


function vercerrarOpciones(){
	if(document.getElementById("divVentanaUser").style.display==""){
		document.getElementById("divVentanaUser").style.display="none"		
	}else{
		$("div[id=divVentanaUser]").fadeIn(500);		
	}
}

function ocultarMenusb(elemento){			
			document.getElementById(elemento).style.display="none";
		}
function verMenusb(elemento){
document.getElementById(elemento).style.display="";
}
function verCerrarSubMenus(d){		
	if(d=="1"){
	if(document.getElementById("DivSubMenuLateralMant").style.display=="none"){
		document.getElementById("DivSubMenuLateralMant").style.display="none";
	document.getElementById("DivSubMenuLateralAdmi").style.display="none";
	document.getElementById("DivSubMenuLateralCons").style.display="none";
	document.getElementById("DivSubMenuLateralReport").style.display="none";
			document.getElementById("DivSubMenuLateralMant").style.display="";
			document.getElementById("DivComodinMenuLateral").style.display="";
	}else{
		document.getElementById("DivSubMenuLateralMant").style.display="none";
		document.getElementById("DivComodinMenuLateral").style.display="none";
	}
	}
	if(d=="2"){
		if(document.getElementById("DivSubMenuLateralAdmi").style.display=="none"){
			document.getElementById("DivSubMenuLateralMant").style.display="none";
	document.getElementById("DivSubMenuLateralAdmi").style.display="none";
	document.getElementById("DivSubMenuLateralCons").style.display="none";
	document.getElementById("DivSubMenuLateralReport").style.display="none";
			document.getElementById("DivSubMenuLateralAdmi").style.display="";
			document.getElementById("DivComodinMenuLateral").style.display="";
	}else{
		document.getElementById("DivSubMenuLateralAdmi").style.display="none";
		document.getElementById("DivComodinMenuLateral").style.display="none";
	}
	}
	if(d=="3"){
		if(document.getElementById("DivSubMenuLateralCons").style.display=="none"){
			document.getElementById("DivSubMenuLateralMant").style.display="none";
	document.getElementById("DivSubMenuLateralAdmi").style.display="none";
	document.getElementById("DivSubMenuLateralCons").style.display="none";
	document.getElementById("DivSubMenuLateralReport").style.display="none";
			document.getElementById("DivSubMenuLateralCons").style.display="";
			document.getElementById("DivComodinMenuLateral").style.display="";
	}else{
		document.getElementById("DivSubMenuLateralCons").style.display="none";
		document.getElementById("DivComodinMenuLateral").style.display="none";
	}
	}
	if(d=="4"){
	if(document.getElementById("DivSubMenuLateralReport").style.display=="none"){
		document.getElementById("DivSubMenuLateralMant").style.display="none";
	document.getElementById("DivSubMenuLateralAdmi").style.display="none";
	document.getElementById("DivSubMenuLateralCons").style.display="none";
	document.getElementById("DivSubMenuLateralReport").style.display="none";
			document.getElementById("DivSubMenuLateralReport").style.display="";
			document.getElementById("DivComodinMenuLateral").style.display="";
	}else{
		document.getElementById("DivSubMenuLateralReport").style.display="none";
		document.getElementById("DivComodinMenuLateral").style.display="none";
	}
	}
	
	if(d=="0"){	
		document.getElementById("DivSubMenuLateralMant").style.display="none";
	document.getElementById("DivSubMenuLateralAdmi").style.display="none";
	document.getElementById("DivSubMenuLateralCons").style.display="none";
	document.getElementById("DivSubMenuLateralReport").style.display="none";
	document.getElementById("DivSubMenuLateralReport").style.display="none";
		document.getElementById("DivComodinMenuLateral").style.display="none";	
		
	}
		}
						

		
/*
ABM USUARIO Y ACCESOS
*/
var idAbmUsuario="";
function verCerrarMisDatos(d){
	if(controlacceso("VERMISDATOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
	document.getElementById("divCambiarMisDatosPersonales").style.display="";	
	}else{
	document.getElementById("divCambiarMisDatosPersonales").style.display="none";
	
	}
}
function verCerrarFrmUsuarios(d){
	document.getElementById("divMinimizadoUsuario").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmUsuario").style.display="";	
	
	}else{
	document.getElementById("divAbmUsuario").style.display="none";
	LimpiarCamposUsuario()
	limipiarCamposBusquedaUsuario()
	}	
}
function NuevoUsuarioFrm(){
	if(controlacceso("INSERTARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmUsuario1").style.display="none"
		document.getElementById("divAbmUsuario2").style.display=""
		LimpiarCamposUsuario()
}
function MinimizarVentanaUsuario(){
	document.getElementById("divAbmUsuario").style.display="none";
	document.getElementById("divMinimizadoUsuario").style.display="";
}
function EditarUsuarioFrm(){
	if(controlacceso("EDITARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmUsuario==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmUsuario1").style.display="none"
		document.getElementById("divAbmUsuario2").style.display=""		
}
function BuscarUsuarioFrm(){
	if(controlacceso("BUSCARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmUsuario1").style.display=""
		document.getElementById("divAbmUsuario2").style.display="none"
}
function LimpiarCamposUsuario(){
	document.getElementById("inptNombreUsuario").value=""
	document.getElementById("inptDocUsuario").value=""
	//funciona como filial
	document.getElementById("inptUserUsuario").value=""
	document.getElementById("inptPassUsuario").value=""
	document.getElementById("inptEstadoUsuario").value=""
	document.getElementById("inptTipoAccesoUsuario").value=""
	document.getElementById("inptFilialUsuario").value=""
	document.getElementById("inptApellidoUsuario").value=""
	document.getElementById("inptRegistroSeleccionadoUsuario").value=""
	idAbmUsuario=""
	document.getElementById("btnEditarDatosEditarUsuarios").style.backgroundColor="#b5f5b7"
document.getElementById("btnEliminarDatosEditarUsuarios").style.backgroundColor="#ffcece"
	document.getElementById("btnAbmUsuario").value="Guardar Datos"
}
function limipiarCamposBusquedaUsuario(){
	document.getElementById("inptBuscarAbmUsuario1").value=""
	document.getElementById("inptBuscarAbmUsuario2").value=""
	document.getElementById("divBuscadorUsuario").innerHTML=""
	document.getElementById("lblNroRegistroUsuario").innerHTML=""
	
}
function ObtenerdatosAbmUsuario(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'
	document.getElementById('inptNombreUsuario').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptRegistroSeleccionadoUsuario').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inpt_user_selecc').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptDocUsuario').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptUserUsuario').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptPassUsuario').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptEstadoUsuario').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptTipoAccesoUsuario').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptNombreUsuario').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptApellidoUsuario').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptFilialUsuario').value = $(datostr).children('td[id="td_datos_11"]').html();
	idAbmUsuario = $(datostr).children('td[id="td_id"]').html();
document.getElementById("btnEditarDatosEditarUsuarios").style.backgroundColor="#4CAF50"
document.getElementById("btnEliminarDatosEditarUsuarios").style.backgroundColor="#fd1010"
document.getElementById("btnAbmUsuario").value="Editar Datos"
}
function EliminarRegitroUsuario(){
	if(controlacceso("ELIMINARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmUsuario==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoUsuario").value="Inactivo";
	VerificarDatosUsuario()
	}
}
function VerificarDatosUsuario(){
	var inptNombreUsuario = document.getElementById("inptNombreUsuario").value
	var inptApellidoUsuario = document.getElementById("inptApellidoUsuario").value
	var inptDocUsuario = document.getElementById("inptDocUsuario").value
	var inptUserUsuario = document.getElementById("inptUserUsuario").value
	var inptPassUsuario = document.getElementById("inptPassUsuario").value
	var inptTipoAccesoUsuario = document.getElementById("inptTipoAccesoUsuario").value
	var inptEstadoUsuario = document.getElementById("inptEstadoUsuario").value
	var inptFilialUsuario = document.getElementById("inptFilialUsuario").value
	if(inptNombreUsuario==""){
		document.getElementById("inptNombreUsuario").focus()
		alertmensaje("Falto Ingresar el Nombre del Usuario")
		return
	}
	if(inptApellidoUsuario==""){
		document.getElementById("inptApellidoUsuario").focus()
		alertmensaje("Falto Ingresar el  Apellido del Usuario")
		return
	}
	if(inptDocUsuario==""){
		document.getElementById("inptDocUsuario").focus()
		alertmensaje("Falto Ingresar el Documento del Usuario")
		return
	}
	if(inptFilialUsuario==""){
		document.getElementById("inptFilialUsuario").focus()
		alertmensaje("Falto Seleccionar una filial")
		return
	}
	if(inptUserUsuario==""){
		document.getElementById("inptUserUsuario").focus()
		alertmensaje("Falto Ingresar el Usuario de acceso")
		return
	}
	if(inptPassUsuario==""){
		document.getElementById("inptPassUsuario").focus()
		alertmensaje("Falto Ingresar la contraseña de acceso")
		return
	}
	if(inptTipoAccesoUsuario==""){
		document.getElementById("inptTipoAccesoUsuario").focus()
		alertmensaje("Falto Seleccionar el Tipo de Acceso")
		return
	}
	if(inptEstadoUsuario==""){
		document.getElementById("inptEstadoUsuario").focus()
		alertmensaje("Falto Seleccionar el Estado del Registro")
		return
	}
	var accion = "";
	if (idAbmUsuario != "") {
		accion = "editar";
		if(controlacceso("EDITARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmUsuario(inptFilialUsuario,inptNombreUsuario,inptApellidoUsuario,inptDocUsuario, inptUserUsuario, inptPassUsuario, inptTipoAccesoUsuario, inptEstadoUsuario,idAbmUsuario, accion)
}
function AbmUsuario(cod_filialFK,Nombre,Apellido,Nro_Documento, user, pass, Acceso, Estado,idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("Nrodocumento", Nro_Documento)
	datos.append("Nombre", Nombre)
	datos.append("Apellido", Apellido)
	datos.append("user", user)
	datos.append("pass", pass)
	datos.append("Estado", Estado)
	datos.append("Acceso", Acceso)
	datos.append("cod_filialFK", cod_filialFK)
	var OpAjax = $.ajax({
		
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMUsuario.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		
		 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
						
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
			   Respuesta=respuestaJqueryAjax(Respuesta)
		if (Respuesta == true) {	
					LimpiarCamposUsuario()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					
					}

			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function AbmEditarMisDatos() {
	var nombre=document.getElementById("inptNombreMisDatos").value;
	if(nombre==""){
		alertmensaje("EL NOMBRE NO PUEDE QUEDAR VACÍO")
	}
	var apellido=document.getElementById("inptApellidoMisDatos").value;
	if(apellido==""){
		alertmensaje("EL APELLIDO NO PUEDE QUEDAR VACÍO")
	}
	var user=document.getElementById("inptUserMisDatos").value;
	if(user==""){
		alertmensaje("EL USUARIO NO PUEDE QUEDAR VACÍO")
	}
	var user=document.getElementById("inptUserMisDatos").value;
	if(user==""){
		alertmensaje("EL USUARIO NO PUEDE QUEDAR VACÍO")
	}
	var pass=document.getElementById("inptPassMisDatos").value;
	if(pass==""){
		alertmensaje("EL CONTRASEÑA NO PUEDE QUEDAR VACÍO")
	}
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "editarMisDatos")
	datos.append("Nombre", nombre)
	datos.append("Apellido", apellido)
	datos.append("user", user)
	datos.append("pass", pass)
	datos.append("cod_filialFK", filiaruser)
	var OpAjax = $.ajax({
		
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMUsuario.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		
		 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
						
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
			   Respuesta=respuestaJqueryAjax(Respuesta)
		if (Respuesta == true) {	
					LimpiarCamposUsuario()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					
					}

			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}

function checkestadoUser(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoUser1').checked=true
	document.getElementById('inptSeleccEstadoUser2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoUser1').checked=false
	document.getElementById('inptSeleccEstadoUser2').checked=true
	}
}
var controlordenusuarioabm="1"
function ordenusuarioabm(d){
	document.getElementById('tdOrdUsuario1').className="td_registro_orden1"
		document.getElementById('tdOrdUsuario2').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdUsuario1').className="td_registro_orden"
		controlordenusuarioabm="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdUsuario2').className="td_registro_orden"
		controlordenusuarioabm="2"
	}
	
	BuscarAbmUsuario()
}
function BuscarAbmUsuario() {
if(controlacceso("BUSCARUSUARIO","accion")==false){
	//SIN PERMISO
	  return;
		}
	var usuario = document.getElementById('inptBuscarAbmUsuario1').value
		var codfilial="";
$("input[id=inptBuscarAbmUsuario2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codfilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	var estado = ""
	if(document.getElementById('inptSeleccEstadoUser1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorUsuario").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroUsuario").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codfilial": codfilial,
		"usuario": usuario,
		"estado": estado,
		"ordenby": controlordenusuarioabm,
		"funt": "buscar"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMUsuario.php",
		type: "post",
		
		 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
	
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorUsuario").innerHTML = ''
			document.getElementById("lblNroRegistroUsuario").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorUsuario").innerHTML = ''
			document.getElementById("lblNroRegistroUsuario").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
   Respuesta=respuestaJqueryAjax(Respuesta)
		if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorUsuario").innerHTML = datos_buscados
                   document.getElementById("lblNroRegistroUsuario").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   cargarAdminTareas()
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }

				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function verCerrarFrmAcessos(d){
	if(controlacceso("EDITARACCESO","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(d=="1"){
		if(idAbmUsuario==""){		
		alertmensaje("Falto seleccionar un registro")
	 	return
	   }
		$("div[id=divVistaAcceso]").fadeIn(500);
		document.getElementById("btnEditarAccesos").style.display='none'
		buscarAccesosUser()
	}else{
		$("div[id=divVistaAcceso]").fadeOut(500);
	}
}
var idAbmAccesoUser="";
function buscarAccesosUser() {

	document.getElementById("table_abm_accesos_Abm").innerHTML = imgCargandoA

	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAbmUsuario,
		"funt": "buscar"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/abmAccesos.php",
		type: "post",
		
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				document.getElementById("table_abm_accesos_Abm").innerHTML = ""
	
		},
		success: function (responseText) {
	document.getElementById("table_abm_accesos_Abm").innerHTML = ""
	
			var Respuesta = responseText;
			console.log(Respuesta)			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				   Respuesta=respuestaJqueryAjax(Respuesta)
		if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					var datos_buscados2 = datos[3];
					var datos_buscados3 = datos[4];
	document.getElementById("table_abm_accesos_Abm").innerHTML = datos_buscados1
	document.getElementById("inpt_nivel_selecc").value = datos_buscados2

				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});

}
function abmacceso(d) {
	if(controlacceso("EDITARACCESO","accion")==false){
	//SIN PERMISO
	  return;
	}	
	var intpu=$(d)
	var idabm=d.id
	var accion="NO"
	if ($(intpu).is(':checked') ){
	accion="SI"
	}
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("usuarios_idusario", userid)
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "editar")
	datos.append("idabm", idabm)
	datos.append("acciones", accion)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmAccesos.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
        var porce= ~~((evt.loaded / evt.total) * 100); 
		if(porce>90){
		porce=Number(porce)-7				
		}
		document.getElementById("lbltitulomensaje_b").innerHTML="Cargando<br>("+porce+"%)";
		var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
		kb=0.1;
		}
         cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
		kb=0.1;
		}
        cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
                Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {					
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")	
					
					}			
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}

/*
FILIAL
*/
var idAbmAbmFilial="";
var ControlVistaAbmFilial=""
function verCerrarFrmAbmFilial(d){
	document.getElementById("divMinimizadoListadoDeFilial").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmAbmFilial").style.display="";
	
	}else{
	document.getElementById("divAbmAbmFilial").style.display="none";
	LimpiarCamposAbmFilial()
	LimpiarCamposBusquedaFilial()
	}
}
function MinimizarVentanaListadoFilial(){
	document.getElementById("divAbmAbmFilial").style.display="none";
	document.getElementById("divMinimizadoListadoDeFilial").style.display="";
}
function NuevoAbmFilialFrm(){
	if(controlacceso("INSERTARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAbmFilial1").style.display="none"
		document.getElementById("divAbmAbmFilial2").style.display=""
		LimpiarCamposAbmFilial()
}
function EditarAbmFilialFrm(){
	if(controlacceso("EDITARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAbmFilial==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAbmFilial1").style.display="none"
		document.getElementById("divAbmAbmFilial2").style.display=""
		
}
function BuscarAbmFilialFrm(){
	if(controlacceso("BUSCARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAbmFilial1").style.display=""
		document.getElementById("divAbmAbmFilial2").style.display="none"
}
function LimpiarCamposAbmFilial(){
	document.getElementById("inptCiudadAbmFilial").value=""
	document.getElementById("inptNombreAbmFilial").value=""
	document.getElementById("inptEstadoAbmFilial").value="Activo"
	document.getElementById("inptRegistroSeleccionadoFilial").value=""
	document.getElementById("inptpuntoEpedicionAbmFilial").value=""
	idAbmAbmFilial=""
	document.getElementById("btnAbmAbmFilial").value="Guardar Datos"
	  document.getElementById("btnEditarDatosFilial").style.backgroundColor='#b5f5b7'
     document.getElementById("btnEliminarDatosFilial").style.backgroundColor='#ffcece'
}
function LimpiarCamposBusquedaFilial(){
	document.getElementById("inptBuscarAbmFilial1").value=""
	document.getElementById("inptBuscarAbmFilial2").value=""
	document.getElementById("inptBuscarAbmFilial3").value=""
	document.getElementById("divBuscadorAbmFilial").innerHTML=""
	document.getElementById("lblNroRegistroAbmFilial").innerHTML=""
	
}
function ObtenerdatosAbmAbmFilial(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmAbmFilial = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoFilial').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAbmFilial').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCiudadAbmFilial').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptEstadoAbmFilial').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptpuntoEpedicionAbmFilial').value = $(datostr).children('td[id="td_datos_4"]').html();
     document.getElementById("btnAbmAbmFilial").value="Editar Datos"
     document.getElementById("btnEditarDatosFilial").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosFilial").style.backgroundColor='red'



}
function EliminarRegitroFilial(){
	if(controlacceso("ELIMINARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAbmFilial==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoAbmFilial").value="Inactivo";
	VerificarDatosAbmFilial()
	}

}
function VerificarDatosAbmFilial(){
	
	var inptNombreAbmFilial = document.getElementById("inptNombreAbmFilial").value
	var inptCiudadAbmFilial = document.getElementById("inptCiudadAbmFilial").value
	var inptEstadoAbmFilial = document.getElementById("inptEstadoAbmFilial").value
	var inptpuntoEpedicionAbmFilial = document.getElementById("inptpuntoEpedicionAbmFilial").value
	
	
	

	if(inptNombreAbmFilial==""){
		document.getElementById("inptNombreAbmFilial").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	if(inptpuntoEpedicionAbmFilial==""){
		document.getElementById("inptpuntoEpedicionAbmFilial").focus()
		alertmensaje("Falto ingresar el punto de expedición")
		return
	}
	if(inptCiudadAbmFilial==""){
		document.getElementById("inptCiudadAbmFilial").focus()
		alertmensaje("Falto ingresar la ciudad de la filial")
		return
	}
	
	var accion = "";
	if (idAbmAbmFilial != "") {
		accion = "editar";
		if(controlacceso("INSERTARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("EDITARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmAbmFilial(inptpuntoEpedicionAbmFilial,inptNombreAbmFilial,inptCiudadAbmFilial,inptEstadoAbmFilial,idAbmAbmFilial, accion)
}
function AbmAbmFilial(puntoexpedicion,nombre,ciudad,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	datos.append("ciudad", ciudad)
	datos.append("estado", estado)
	datos.append("puntoexpedicion", puntoexpedicion)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMFilial.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
					Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
	
	              LimpiarCamposAbmFilial()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				BuscarFilialSelect()
					BuscarAbmAbmFilial()

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoFilial(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoFilial1').checked=true
	document.getElementById('inptSeleccEstadoFilial2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoFilial1').checked=false
	document.getElementById('inptSeleccEstadoFilial2').checked=true
	}
}
var controlordenfilialabm="1"
function ordenfilialabm(d){
	document.getElementById('tdOrdFilial1').className="td_registro_orden1"
		document.getElementById('tdOrdFilial2').className="td_registro_orden1"
		document.getElementById('tdOrdFilial3').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdFilial1').className="td_registro_orden"
		controlordenfilialabm="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdFilial2').className="td_registro_orden"
		controlordenfilialabm="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdFilial3').className="td_registro_orden"
		controlordenfilialabm="3"
	}
	
	BuscarAbmAbmFilial()
}
function BuscarAbmAbmFilial() {
if(controlacceso("BUSCARFILIAL","accion")==false){
	//SIN PERMISO
	  return;
		}
	var nombre = document.getElementById('inptBuscarAbmFilial1').value
	var ciudad = document.getElementById('inptBuscarAbmFilial2').value
	var nroexpe = document.getElementById('inptBuscarAbmFilial3').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoFilial1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorAbmFilial").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAbmFilial").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nombre": nombre,
		"ciudad": ciudad,
		"nroexpe": nroexpe,
		"estado": estado,
		"ordenby": controlordenfilialabm,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMFilial.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAbmFilial").innerHTML = ''
			document.getElementById("lblNroRegistroAbmFilial").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAbmFilial").innerHTML = ''
			document.getElementById("lblNroRegistroAbmFilial").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
               
			   Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];

					document.getElementById("divBuscadorAbmFilial").innerHTML = "<table style='display:none'><tr>"+
			  "<td>ID</td>"+
			  "<td>FILIAL</td>"+
			  "<td>ARANCEL</td>"+
			  "<td>CARRERA</td>"+
			  "<td>CURSO</td>"+
			  "<td>AÑO</td>"+
			  "<td>MONTO</td>"+
			  "<td>CANTIDAD</td>"+
			  "<td>TOTAL</td>"+
			  "<td>TOTALES</td>"+
			  "</tr></table>"+datos_buscados					
               document.getElementById("lblNroRegistroAbmFilial").innerHTML="Se encontraron "+datos[3]+" registro(s)";
			   cargarAdminTareas()
			   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }

				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarFilialSelect() {
	document.getElementById("ListFilial").innerHTML = ""
	document.getElementById("inptFilialUsuario").innerHTML = "" 
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMFilial.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {

		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListFilial").innerHTML = ''
			document.getElementById("inptFilialUsuario").innerHTML = ''			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListFilial").innerHTML = ''
			document.getElementById("inptFilialUsuario").innerHTML = ''
					
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
                
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("ListFilial").innerHTML=datos_buscados
					document.getElementById("inptFilialUsuario").innerHTML=datos[3]
				
					

				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

 /*
LISTA DE CARRERA
*/
var idAbmListaCarrera="";
var ControlVistaListaCarrera=""
function verCerrarFrmListaCarrera(d){
	document.getElementById("divMinimizadoDeCarreras").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaCarrera").style.display="";
	
	}else{
	document.getElementById("divAbmListaCarrera").style.display="none";
	LimpiarCamposListaCarrera()
	LimpiarCamposBusquedaListaCarrera()
	}
}
function MinimizarVentanaListadoCarrera(){
	document.getElementById("divAbmListaCarrera").style.display="none";
	document.getElementById("divMinimizadoDeCarreras").style.display="";
}
function NuevoListaCarreraFrm(){
	if(controlacceso("INSERTARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaCarrera1").style.display="none"
		document.getElementById("divAbmListaCarrera2").style.display=""
		LimpiarCamposListaCarrera()
}
function EditarListaCarreraFrm(){
	if(controlacceso("EDITARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaCarrera==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaCarrera1").style.display="none"
		document.getElementById("divAbmListaCarrera2").style.display=""
		
}
function BuscarListaCarreraFrm(){
	if(controlacceso("BUSCARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaCarrera1").style.display=""
		document.getElementById("divAbmListaCarrera2").style.display="none"
}
function LimpiarCamposListaCarrera(){
	document.getElementById("inptNombreListaCarrera").value=""
	document.getElementById("inptEstadoListaCarrera").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListadoCarrera").value=""
	idAbmListaCarrera=""
	document.getElementById("btnAbmListaCarrera").value="Guardar Datos"
	document.getElementById("btnEditarDatosCarrera").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosCarrera").style.backgroundColor="#ffcece"
}
function LimpiarCamposBusquedaListaCarrera(){
	document.getElementById("inptBuscarListaCarrera1").value=""
	document.getElementById("lblNroRegistroListaCarrera").innerHTML=""
	document.getElementById("divBuscadorListaCarrera").innerHTML=""
	
}
function ObtenerdatosAbmListaCarrera(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaCarrera = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListadoCarrera').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaCarrera').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoListaCarrera').value = $(datostr).children('td[id="td_datos_2"]').html();
     document.getElementById("btnAbmListaCarrera").value="Editar Datos"
     document.getElementById("btnEditarDatosCarrera").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosCarrera").style.backgroundColor="red"



}
function EliminarRegitroListaCarrera(){
	if(controlacceso("ELIMINARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaCarrera==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaCarrera").value="Inactivo";
	VerificarDatosListaCarrera()
	}

}
function VerificarDatosListaCarrera(){
	
	var inptNombreListaCarrera = document.getElementById("inptNombreListaCarrera").value
	var inptEstadoListaCarrera = document.getElementById("inptEstadoListaCarrera").value
	
	if(inptNombreListaCarrera==""){
		document.getElementById("inptNombreListaCarrera").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmListaCarrera != "") {
		accion = "editar";
		if(controlacceso("EDITARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmListaCarrera(inptNombreListaCarrera,inptEstadoListaCarrera,idAbmListaCarrera, accion)
}
function AbmListaCarrera(nombre,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoCarrera.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
               
			   Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
		
                   LimpiarCamposListaCarrera()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaCarrera()
					BuscarCarreraSelect()

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoCarrera(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoCarrera1').checked=true
	document.getElementById('inptSeleccEstadoCarrera2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoCarrera1').checked=false
	document.getElementById('inptSeleccEstadoCarrera2').checked=true
	}
}
function BuscarAbmListaCarrera() {
if(controlacceso("BUSCARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	var buscador = document.getElementById('inptBuscarListaCarrera1').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoCarrera1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaCarrera").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaCarrera").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorListaCarrera").innerHTML = ''
			document.getElementById("lblNroRegistroListaCarrera").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaCarrera").innerHTML = ''
			document.getElementById("lblNroRegistroListaCarrera").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaCarrera").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaCarrera").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   cargarAdminTareas()
					if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarCarreraSelect() {

	document.getElementById("ListCarreras").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
          manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListCarreras").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListCarreras").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("ListCarreras").innerHTML=datos_buscados
					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
 
 
 /*
LISTA DE CATEDRA
*/
var idAbmListaCatedra="";
var ControlVistaListaCatedra=""
function verCerrarFrmListaCatedra(d){
	document.getElementById("divMinimizadoListadoDeCatedras").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divAbmListaCatedra").style.display="";
	
	}else{
	document.getElementById("divAbmListaCatedra").style.display="none";
	 LimpiarCamposListaCatedra()
	 LimpiarCamposBusquedaListaCatedra()
	}
}
function MinimizarVentanaListadoCatedras(){
	document.getElementById("divAbmListaCatedra").style.display="none";
	document.getElementById("divMinimizadoListadoDeCatedras").style.display="";
}
function NuevoListaCatedraFrm(){
	if(controlacceso("INSERTARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaCatedra1").style.display="none"
		document.getElementById("divAbmListaCatedra2").style.display=""
		LimpiarCamposListaCatedra()
}
function EditarListaCatedraFrm(){
	if(controlacceso("EDITARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaCatedra==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaCatedra1").style.display="none"
		document.getElementById("divAbmListaCatedra2").style.display=""
		
}
function BuscarListaCatedraFrm(){
	if(controlacceso("BUSCARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaCatedra1").style.display=""
		document.getElementById("divAbmListaCatedra2").style.display="none"
}
function LimpiarCamposListaCatedra(){
	document.getElementById("inptNombreListaCatedra").value=""
	document.getElementById("inptEstadoListaCatedra").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListadoCatedra").value=""
	idAbmListaCatedra=""
	document.getElementById("btnAbmListaCatedra").value="Guardar Datos"
	document.getElementById("btnEditarDatosCatedra").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosCatedra").style.backgroundColor="#ffcece"
}
function LimpiarCamposBusquedaListaCatedra(){
	document.getElementById("inptBuscarListaCatedra1").value=""
	document.getElementById("divBuscadorListaCatedra").innerHTML=""
	document.getElementById("lblNroRegistroListaCatedra").innerHTML=""
	
}
function ObtenerdatosAbmListaCatedra(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaCatedra = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListadoCatedra').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaCatedra').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoListaCatedra').value = $(datostr).children('td[id="td_datos_2"]').html();
     document.getElementById("btnAbmListaCatedra").value="Editar Datos"
     document.getElementById("btnEditarDatosCatedra").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosCatedra").style.backgroundColor="red"



}
function EliminarRegitroListaCatedra(){
	if(controlacceso("ELIMINARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaCatedra==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaCatedra").value="Inactivo";
	VerificarDatosListaCatedra()
	}

}
function VerificarDatosListaCatedra(){
	
	var inptNombreListaCatedra = document.getElementById("inptNombreListaCatedra").value
	var inptEstadoListaCatedra = document.getElementById("inptEstadoListaCatedra").value
	
	
	

	if(inptNombreListaCatedra==""){
		document.getElementById("inptNombreListaCatedra").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmListaCatedra != "") {
		accion = "editar";
		if(controlacceso("INSERTARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("EDITARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmListaCatedra(inptNombreListaCatedra,inptEstadoListaCatedra,idAbmListaCatedra, accion)
}
function AbmListaCatedra(nombre,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoCatedra.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
               
			   Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
		
                   LimpiarCamposListaCatedra()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaCatedra()
					BuscarCatedraSelect()
					

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoCatedra(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoCatedra1').checked=true
	document.getElementById('inptSeleccEstadoCatedra2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoCatedra1').checked=false
	document.getElementById('inptSeleccEstadoCatedra2').checked=true
	}
}
function BuscarAbmListaCatedra() {
if(controlacceso("BUSCARCATEDRA","accion")==false){
	//SIN PERMISO
	  return;
		}
	var buscador = document.getElementById('inptBuscarListaCatedra1').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoCatedra1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaCatedra").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaCatedra").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoCatedra.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorListaCatedra").innerHTML = ''
			document.getElementById("lblNroRegistroListaCatedra").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaCatedra").innerHTML = ''
			document.getElementById("lblNroRegistroListaCatedra").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaCatedra").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaCatedra").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   cargarAdminTareas()
					if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarCatedraSelect() {

	document.getElementById("ListMaterias").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoCatedra.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
          manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListMaterias").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListMaterias").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("ListMaterias").innerHTML=datos_buscados
					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

/*
LISTA DE ARANCELES
*/

var idAbmListaAranceles="";
var ControlVistaListaAranceles=""
function verCerrarFrmListaAranceles(d){
	document.getElementById("divMinimizadoListadoAranceles").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaAranceles").style.display="";
	
	}else{
	document.getElementById("divAbmListaAranceles").style.display="none";
	LimpiarCamposListaAranceles()
	LimpiarCamposBusquedaListaAranceles()
	}
}
function MinimizarVentanaListadoArancel(){
	document.getElementById("divAbmListaAranceles").style.display="none";
	document.getElementById("divMinimizadoListadoAranceles").style.display="";
}
function NuevoListaArancelesFrm(){
	if(controlacceso("INSERTARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaAranceles1").style.display="none"
		document.getElementById("divAbmListaAranceles2").style.display=""
		LimpiarCamposListaAranceles()
}
function EditarListaArancelesFrm(){
	if(controlacceso("EDITARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaAranceles==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaAranceles1").style.display="none"
		document.getElementById("divAbmListaAranceles2").style.display=""
		
}
function BuscarListaArancelesFrm(){
	if(controlacceso("BUSCARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaAranceles1").style.display=""
		document.getElementById("divAbmListaAranceles2").style.display="none"
}
function LimpiarCamposListaAranceles(){
	document.getElementById("inptNombreListaAranceles").value=""
	document.getElementById("inptEstadoListaAranceles").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListaAranceles").value=""
	idAbmListaAranceles=""
	     document.getElementById("btnEditarDatosListaAranceles").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosListaAranceles").style.backgroundColor="#ffcece"
	document.getElementById("btnAbmListaAranceles").value="Guardar Datos"
}
function LimpiarCamposBusquedaListaAranceles(){
	document.getElementById("inptBuscarListaAranceles1").value=""
	document.getElementById("divBuscadorListaAranceles").innerHTML=""
	document.getElementById("lblNroRegistroListaAranceles").innerHTML=""
	
}
function ObtenerdatosAbmListaAranceles(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaAranceles = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListaAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoListaAranceles').value = $(datostr).children('td[id="td_datos_2"]').html();
     document.getElementById("btnAbmListaAranceles").value="Editar Datos"
     document.getElementById("btnEditarDatosListaAranceles").style.backgroundColor="#4caf50"
     document.getElementById("btnEliminarDatosListaAranceles").style.backgroundColor="red"



}
function EliminarRegitroListaAranceles(){
	if(controlacceso("ELIMINARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaAranceles==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaAranceles").value="Inactivo";
	VerificarDatosListaAranceles()
	}

}
function VerificarDatosListaAranceles(){
	
	var inptNombreListaAranceles = document.getElementById("inptNombreListaAranceles").value
	var inptEstadoListaAranceles = document.getElementById("inptEstadoListaAranceles").value
	
	
	

	if(inptNombreListaAranceles==""){
		document.getElementById("inptNombreListaAranceles").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmListaAranceles != "") {
		accion = "editar";
		if(controlacceso("EDITARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmListaAranceles(inptNombreListaAranceles,inptEstadoListaAranceles,idAbmListaAranceles, accion)
}
function AbmListaAranceles(nombre,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoArancel.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				LimpiarCamposListaAranceles()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaAranceles()
					BuscarCarreraSelect()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoListaAranceles(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoListaAranceles1').checked=true
	document.getElementById('inptSeleccEstadoListaAranceles2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoListaAranceles1').checked=false
	document.getElementById('inptSeleccEstadoListaAranceles2').checked=true
	}
}
function BuscarAbmListaAranceles() {
if(controlacceso("BUSCARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	var buscador = document.getElementById('inptBuscarListaAranceles1').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoListaAranceles1').checked==true){
		 estado = "Activo"
	}else{
		 estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaAranceles").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaAranceles").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoArancel.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorListaAranceles").innerHTML = ''
			document.getElementById("lblNroRegistroListaAranceles").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaAranceles").innerHTML = ''
			document.getElementById("lblNroRegistroListaAranceles").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaAranceles").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaAranceles").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   cargarAdminTareas()
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarSeleccListaAranceles() {	
	document.getElementById("ListArancel").innerHTML = imgCargandoA  
	document.getElementById("inptArancelCargarFacturasDeudasAnterior").innerHTML = ""  
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoArancel.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListArancel").innerHTML = ''			
			document.getElementById("inptArancelCargarFacturasDeudasAnterior").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListArancel").innerHTML = ''
			document.getElementById("inptArancelCargarFacturasDeudasAnterior").innerHTML = ''
			try {		
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados1 = datos[2];
					var datos_buscados2 = datos[3];
					var datos_buscados3 = datos[4];
					document.getElementById("ListArancel").innerHTML = datos_buscados1	
					document.getElementById("inptArancelCargarFacturasDeudasAnterior").innerHTML = datos_buscados3	
				}					
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
 /*
LISTA DE FACULTADO
*/
var idAbmListaFacultad="";
var ControlVistaListaFacultad=""
function verCerrarFrmListaFacultad(d){
	document.getElementById("divMinimizadoListadodeFacultad").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaFacultad").style.display="";
	
	}else{
	document.getElementById("divAbmListaFacultad").style.display="none";
	LimpiarCamposListaFacultad()
	LimpiarCamposBusquedaListaFacultad()
	}
}
function MinimizarVentanaListadoFacultad(){
	document.getElementById("divAbmListaFacultad").style.display="none";
	document.getElementById("divMinimizadoListadodeFacultad").style.display="";
}
function NuevoListaFacultadFrm(){
	if(controlacceso("INSERTARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaFacultad1").style.display="none"
		document.getElementById("divAbmListaFacultad2").style.display=""
		LimpiarCamposListaFacultad()
}
function EditarListaFacultadFrm(){
	if(controlacceso("EDITARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaFacultad==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaFacultad1").style.display="none"
		document.getElementById("divAbmListaFacultad2").style.display=""
		
}
function BuscarListaFacultadFrm(){
	if(controlacceso("BUSCARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmListaFacultad1").style.display=""
		document.getElementById("divAbmListaFacultad2").style.display="none"
}
function LimpiarCamposListaFacultad(){
	document.getElementById("inptNombreListaFacultad").value=""
	document.getElementById("inptEstadoListaFacultad").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListaFacultad").value=""
	document.getElementById("btnEditarDatosFacultad").style.backgroundColor='#b5f5b7'
     document.getElementById("btnEliminarDatosFacultad").style.backgroundColor='#ffcece'
	idAbmListaFacultad=""
	document.getElementById("btnAbmListaFacultad").value="Guardar Datos"
}
function LimpiarCamposBusquedaListaFacultad(){
	document.getElementById("inptBuscarListaFacultad1").value=""
	document.getElementById("divBuscadorListaFacultad").innerHTML=""
	document.getElementById("lblNroRegistroListaFacultad").innerHTML=""
}
function ObtenerdatosAbmListaFacultad(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaFacultad = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListaFacultad').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaFacultad').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoListaFacultad').value = $(datostr).children('td[id="td_datos_2"]').html();
     document.getElementById("btnEditarDatosFacultad").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosFacultad").style.backgroundColor='red'
     document.getElementById("btnAbmListaFacultad").value="Editar Datos"



}
function EliminarRegitroListaFacultad(){
	if(controlacceso("ELIMINARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmListaFacultad==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaFacultad").value="Inactivo";
	VerificarDatosListaFacultad()
	}

}
function VerificarDatosListaFacultad(){
	
	var inptNombreListaFacultad = document.getElementById("inptNombreListaFacultad").value
	var inptEstadoListaFacultad = document.getElementById("inptEstadoListaFacultad").value
	
	
	

	if(inptNombreListaFacultad==""){
		document.getElementById("inptNombreListaFacultad").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmListaFacultad != "") {
		accion = "editar";
		if(controlacceso("EDITARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmListaFacultad(inptNombreListaFacultad,inptEstadoListaFacultad,idAbmListaFacultad, accion)
}
function AbmListaFacultad(nombre,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoFacultad.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
                Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   LimpiarCamposListaFacultad()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaFacultad()
					BuscarFacultadlSelect()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoFacultad(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoFacultad1').checked=true
	document.getElementById('inptSeleccEstadoFacultad2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoFacultad1').checked=false
	document.getElementById('inptSeleccEstadoFacultad2').checked=true
	}
}
function BuscarAbmListaFacultad() {
if(controlacceso("BUSCARFACULTAD","accion")==false){
	//SIN PERMISO
	  return;
		}
	var buscador = document.getElementById('inptBuscarListaFacultad1').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoFacultad1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaFacultad").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaFacultad").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoFacultad.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorListaFacultad").innerHTML = ''
			document.getElementById("lblNroRegistroListaFacultad").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaFacultad").innerHTML = ''
			document.getElementById("lblNroRegistroListaFacultad").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];				
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaFacultad").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaFacultad").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   cargarAdminTareas()
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarFacultadlSelect() {
	document.getElementById("ListFacultad").innerHTML = "" 
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoFacultad.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListFacultad").innerHTML = ''		
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListFacultad").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				var datos_buscados = datos[2];
				document.getElementById("ListFacultad").innerHTML=datos_buscados
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
 /*
CARRERA
*/
var idAbmAsignarCarrera="";
var ControlVistaAsignarCarrera=""
function verCerrarFrmAsignarCarrera(d){
		document.getElementById("divMinimizadoCarrera").style.display="none";
		  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
			minimizartodaventanaabierto()
	document.getElementById("divAbmAsignarCarrera").style.display="";

	}else{
	document.getElementById("divAbmAsignarCarrera").style.display="none";
	LimpiarCamposAsignarCarrera()
	LimpiarCamposBusquedaAsignarCarrera()
	}
}
function MinimizarVentanaAsignarCarrer(){
	document.getElementById("divAbmAsignarCarrera").style.display="none";
	document.getElementById("divMinimizadoCarrera").style.display="";
}
function verCerrarFrmVistaAsignarCarrera(d,v){
	
	if(d=="1"){
		document.getElementById("divVistaAsignarCarrera").style.display=""
		ControlVistaAsignarCarrera=v
	}else{
		document.getElementById("divVistaAsignarCarrera").style.display="none"
	
	}
}
function NuevoAsignarCarreraFrm(){
	if(controlacceso("INSERTARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarCarrera1").style.display="none"
		document.getElementById("divAbmAsignarCarrera2").style.display=""
		LimpiarCamposAsignarCarrera()
}
function EditarAsignarCarreraFrm(){
	if(controlacceso("EDITARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarCarrera==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarCarrera1").style.display="none"
		document.getElementById("divAbmAsignarCarrera2").style.display=""
		
}
function BuscarAsignarCarreraFrm(){
	if(controlacceso("BUSCARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarCarrera1").style.display=""
		document.getElementById("divAbmAsignarCarrera2").style.display="none"
}
function LimpiarCamposAsignarCarrera(){
	document.getElementById("inptNombreAsignarCarrera").value=""
	document.getElementById("inptNombreAsignarFacultad").value=""
	document.getElementById("inptNombreAsignarFilial").value=""
	document.getElementById("inptNombreAsignarFilia2").value=""
	document.getElementById("inptNroCajaAsignaCarrera").value=""
	document.getElementById("inptEstadoAsignarCarrera").value="Activo"
	document.getElementById("inptRegistroSeleccionadoAsignarCarreral").value=""
	 document.getElementById("btnEditarDatosAsignarCarrera").style.backgroundColor="#b5f5b7"
     document.getElementById("btnELiminarDatosAsignarCarrera").style.backgroundColor="#ffcece"
	idAbmAsignarCarrera=""
	document.getElementById("btnAbmAsignarCarrera").value="Guardar Datos"
}
function LimpiarCamposBusquedaAsignarCarrera(){
	document.getElementById("inptBuscarAsignarCarrera1").value=""
	document.getElementById("inptBuscarAsignarCarrera2").value=""
	document.getElementById("inptBuscarAsignarCarrera3").value=""
	document.getElementById("inptBuscarAsignarCarrera4").value=""
	document.getElementById("divBuscadorAsignarCarrera").innerHTML=""
	document.getElementById("lblNroRegistroAsignarCarrera").innerHTML=""
	
}
function ObtenerdatosAbmAsignarCarrera(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarCarrera = $(datostr).children('td[id="td_id_1"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarCarreral').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarCarrera').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarFacultad').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptNombreAsignarFilial').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptEstadoAsignarCarrera').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptNombreAsignarFilia2').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptNroCajaAsignaCarrera').value = $(datostr).children('td[id="td_datos_6"]').html();
     document.getElementById("btnAbmAsignarCarrera").value="Editar Datos"
     document.getElementById("btnEditarDatosAsignarCarrera").style.backgroundColor="#4CAF50"
     document.getElementById("btnELiminarDatosAsignarCarrera").style.backgroundColor="red"



}
function EliminarRegitroAsignarCarrera(){
	if(controlacceso("ELIMINARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarCarrera==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoAsignarCarrera").value="Inactivo";
	VerificarDatosAsignarCarrera()
	}

}
function VerificarDatosAsignarCarrera(){
	
	var inptNombreAsignarCarrera = document.getElementById("inptNombreAsignarCarrera").value
	var inptNombreAsignarFacultad = document.getElementById("inptNombreAsignarFacultad").value
	var inptNombreAsignarFilial = document.getElementById("inptNombreAsignarFilial").value
	var inptEstadoAsignarCarrera = document.getElementById("inptEstadoAsignarCarrera").value
	var inptNroCajaAsignaCarrera = document.getElementById("inptNroCajaAsignaCarrera").value
	
	
	

	if(inptNombreAsignarCarrera==""){
		document.getElementById("inptNombreAsignarCarrera").focus()
		alertmensaje("Falto ingresar el nombre de la cerrera")
		return
	}
	if(inptNombreAsignarFacultad==""){
		document.getElementById("inptNombreAsignarFacultad").focus()
		alertmensaje("Falto seleccionar una facultad")
		return
	}
	if(inptNombreAsignarFilial==""){
		document.getElementById("inptNombreAsignarFilial").focus()
		alertmensaje("Falto seleccionar una filial")
		return
	}
	if(inptEstadoAsignarCarrera==""){
		document.getElementById("inptEstadoAsignarCarrera").focus()
		alertmensaje("Falto seleccionar una carrera")
		return
	}
	
	
	var idFkCarrera="";
	
		$("input[id=inptNombreAsignarCarrera]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         idFkCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var idFkFilial="";
	$("input[id=inptNombreAsignarFilial]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         idFkFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var idFkFilia2="";
	$("input[id=inptNombreAsignarFilia2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         idFkFilia2=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var idFkFacultad="";
	$("input[id=inptNombreAsignarFacultad]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         idFkFacultad=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
	
	if(idFkFacultad==""){
		document.getElementById("inptNombreAsignarFacultad").focus()
		alertmensaje("Falto seleccionar una facultad")
		return
	}
	if(idFkFilial==""){
		document.getElementById("inptNombreAsignarFilial").focus()
		alertmensaje("Falto seleccionar una filial origen")
		return
	}
	if(idFkFilia2==""){
		document.getElementById("inptNombreAsignarFilial").focus()
		alertmensaje("Falto seleccionar una filial destino")
		return
	}
	if(idFkCarrera==""){
		document.getElementById("inptEstadoAsignarCarrera").focus()
		alertmensaje("Falto seleccionar una carrera")
		return
	}
	
	if(inptNroCajaAsignaCarrera==""){
		document.getElementById("inptNroCajaAsignaCarrera").focus()
		alertmensaje("Falto Ingresar el nro de caja")
		return
	}
		
	var accion = "";
	if (idAbmAsignarCarrera != "") {
		accion = "editar";
		if(controlacceso("EDITARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmAsignarCarrera(inptNroCajaAsignaCarrera,idFkCarrera,idFkFacultad,idFkFilial,idFkFilia2,inptEstadoAsignarCarrera,idAbmAsignarCarrera, accion)
}
function AbmAsignarCarrera(NroCaja,Cod_listadecarrerasFK,cod_listafacultadFk,cod_filialOringFK,cod_filialDestinoFK,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("cod_filialOringFK", cod_filialOringFK)
	datos.append("cod_filialDestinoFK", cod_filialDestinoFK)
	datos.append("Cod_listadecarrerasFK", Cod_listadecarrerasFK)
	datos.append("cod_listafacultadFk", cod_listafacultadFk)
	datos.append("NroCaja", NroCaja)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];				
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
	
					LimpiarCamposAsignarCarrera()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")				
					BuscarAbmAsignarCarrera()
					BuscarAsingarCarreraSelect()

				}
				
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoAsignarCarrera(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoAsignarCarrera1').checked=true
	document.getElementById('inptSeleccEstadoAsignarCarrera2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoAsignarCarrera1').checked=false
	document.getElementById('inptSeleccEstadoAsignarCarrera2').checked=true
	}
}
var controlordenAsignarCarreraabm="1"
function ordenAsignarCarreraabm(d){
	document.getElementById('tdOrdAsignarCarrera1').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarCarrera2').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarCarrera3').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarCarrera4').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdAsignarCarrera1').className="td_registro_orden"
		controlordenAsignarCarreraabm="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdAsignarCarrera2').className="td_registro_orden"
		controlordenAsignarCarreraabm="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdAsignarCarrera3').className="td_registro_orden"
		controlordenAsignarCarreraabm="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdAsignarCarrera4').className="td_registro_orden"
		controlordenAsignarCarreraabm="4"
	}
	
	BuscarAbmAsignarCarrera()
}
function BuscarAbmAsignarCarrera() {
if(controlacceso("BUSCARASIGNARCARRERA","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	var estado = ""
	var codCarrera="";
$("input[id=inptBuscarAsignarCarrera1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});

	var codFacultad="";
$("input[id=inptBuscarAsignarCarrera2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFacultad=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var codFilialFkOrigen="";
$("input[id=inptBuscarAsignarCarrera3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFkOrigen=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	var codFilialFkDestino="";
$("input[id=inptBuscarAsignarCarrera4]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFkDestino=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
if(document.getElementById('inptSeleccEstadoAsignarCarrera1').checked==true){
	estado="Activo"
}else{
	estado="Inactivo"
}
	document.getElementById("divBuscadorAsignarCarrera").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarCarrera").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codCarrera": codCarrera,
		"codFacultad": codFacultad,
		"estado": estado,
		"codFilialFkOrigen": codFilialFkOrigen,
		"codFilialFkDestino": codFilialFkDestino,
		"ordenby": controlordenAsignarCarreraabm,
		"funt": "buscar"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAsignarCarrera").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarCarrera").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarCarrera").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarCarrera").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarCarrera").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroAsignarCarrera").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				    cargarAdminTareas()
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarVistaAsignarCarrera() {

	var buscador = document.getElementById('inptBuscarVistaAsignarCarrera1').value
	document.getElementById("divBuscadorVistaAsignarCarrera").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaAsignarCarrera").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"funt": "buscarvista"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorVistaAsignarCarrera").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarCarrera").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaAsignarCarrera").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarCarrera").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAsignarCarrera").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaAsignarCarrera").innerHTML="Se encontraron "+datos[3]+" registro(s)";
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAsingarCarreraSelect() {


	document.getElementById("ListCarrerasAsignar").innerHTML = "" 
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListCarrerasAsignar").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListCarrerasAsignar").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("ListCarrerasAsignar").innerHTML=datos_buscados
				
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function ObtenerdatosVistaAsignarCarrera(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	if(ControlVistaAsignarCarrera=="asignarnrofactura"){
	idFKCarreraNroFactura = $(datostr).children('td[id="td_id_1"]').html();
	document.getElementById('inptNombreCarreraFacturaNro').value = $(datostr).children('td[id="td_datos_1"]').html();

	}
document.getElementById("divVistaAsignarCarrera").style.display="none";


}
 /*
ASIGNAR CATEDRAS
*/
var idAbmAsignarMalla="";
var ControlVistaAsignarMalla=""
function verCerrarFrmAsignarMalla(d){
	document.getElementById("divMinimizadoMallaCurricular").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmAsignarMalla").style.display="";
	
	}else{
	document.getElementById("divAbmAsignarMalla").style.display="none";
	LimpiarCamposAsignarMalla()
	LimpiarCamposBusquedaAsignarMalla()
	}
}
function MinimizarVentanaMallaCurricular(){
	document.getElementById("divAbmAsignarMalla").style.display="none";
	document.getElementById("divMinimizadoMallaCurricular").style.display="";
}
function verCerrarFrmVistaAsignarMalla(d,v){
	if(controlacceso("BUSCARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(d=="1"){
		document.getElementById("divVistaAsignarMalla").style.display=""
		ControlVistaAsignarMalla=v
	}else{
		document.getElementById("divVistaAsignarMalla").style.display="none"
	
	}
}
function NuevoAsignarMallaFrm(){
	if(controlacceso("INSERTARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarMalla1").style.display="none"
		document.getElementById("divAbmAsignarMalla2").style.display=""
		LimpiarCamposAsignarMalla()
}
function EditarAsignarMallaFrm(){
	if(controlacceso("EDITARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarMalla==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarMalla1").style.display="none"
		document.getElementById("divAbmAsignarMalla2").style.display=""
		
}
function BuscarAsignarMallaFrm(){
	if(controlacceso("BUSCARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarMalla1").style.display=""
		document.getElementById("divAbmAsignarMalla2").style.display="none"
}
function LimpiarCamposAsignarMalla(){
	document.getElementById('inptRegistroSeleccionadoAsignarMallal').value = "";
	document.getElementById('inptCarreraAsignarMalla').value = "";
	document.getElementById('inptCatedraAsignarMalla').value = "";
	document.getElementById('inptCpdigoAsignarMalla').value = "";
	document.getElementById('inptAnhoAsignarMalla').value = "";
	document.getElementById('inptCursoAsignarMalla').value = "";
	document.getElementById('inptSemestrAsignarMalla').value = "";
	document.getElementById('inptCargaHorariaPresenAsignarMalla').value ="";
	document.getElementById('inptCargaHorariaAutoAsignarMalla').value ="";
	document.getElementById('inptCargaHorariaIndepeAsignarMalla').value ="";
	document.getElementById('inptCreditoAsignarMalla').value ="";
	document.getElementById('inptCargaHorariaAsignarMalla').value ="";
	document.getElementById('inptEstadoAsignarMalla').value = "Activo";
	document.getElementById("inptRegistroSeleccionadoAsignarMallal").value=""
	 document.getElementById("btnEditarDatosAsignarMalla").style.backgroundColor="#b5f5b7"
     document.getElementById("btnELiminarDatosAsignarMalla").style.backgroundColor="#ffcece"
	idAbmAsignarMalla=""
	document.getElementById("btnAbmAsignarMalla").value="Guardar Datos"
}
function LimpiarCamposBusquedaAsignarMalla(){
	document.getElementById('inptBuscarAsignarMalla2').value = "";
	document.getElementById('inptBuscarAsignarMalla1').value = "";
	document.getElementById('inptBuscarAsignarMalla3').value = "";
	document.getElementById('inptBuscarAsignarMalla4').value = "";
	document.getElementById('inptBuscarAsignarMalla5').value = "";
	document.getElementById('divBuscadorAsignarMalla').innerHTML = "";
	document.getElementById('lblNroRegistroAsignarMalla').innerHTML = "";
}
function ObtenerdatosAbmAsignarMalla(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarMalla = $(datostr).children('td[id="td_id_1"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarMallal').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCarreraAsignarMalla').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCatedraAsignarMalla').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptAnhoAsignarMalla').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCursoAsignarMalla').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptSemestrAsignarMalla').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptCargaHorariaAsignarMalla').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptEstadoAsignarMalla').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptCargaHorariaPresenAsignarMalla').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptCargaHorariaAutoAsignarMalla').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptCargaHorariaIndepeAsignarMalla').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById("inptCreditoAsignarMalla").value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById("inptHorasemanalAsignarMalla").value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById("inptCpdigoAsignarMalla").value = $(datostr).children('td[id="td_datos_13"]').html();
     document.getElementById("btnAbmAsignarMalla").value="Editar Datos"
     document.getElementById("btnEditarDatosAsignarMalla").style.backgroundColor="#4CAF50"
     document.getElementById("btnELiminarDatosAsignarMalla").style.backgroundColor="red"
}
function EliminarRegitroAsignarMalla(){
	if(controlacceso("ELIMINARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarMalla==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoAsignarMalla").value="Inactivo";
	VerificarDatosAsignarMalla()
	}

}
function VerificarDatosAsignarMalla(){
	
	var inptAnhoAsignarMalla = document.getElementById("inptAnhoAsignarMalla").value
	var inptSemestrAsignarMalla = document.getElementById("inptSemestrAsignarMalla").value
	var inptEstadoAsignarMalla = document.getElementById("inptEstadoAsignarMalla").value
	var inptCursoAsignarMalla = document.getElementById("inptCursoAsignarMalla").value
	var inptCargaHorariaAsignarMalla = document.getElementById("inptCargaHorariaAsignarMalla").value
	var inptCargaHorariaPresenAsignarMalla = document.getElementById("inptCargaHorariaPresenAsignarMalla").value
	var inptCargaHorariaAutoAsignarMalla = document.getElementById("inptCargaHorariaAutoAsignarMalla").value
	var inptCargaHorariaIndepeAsignarMalla = document.getElementById("inptCargaHorariaIndepeAsignarMalla").value
	var inptCreditoAsignarMalla = document.getElementById("inptCreditoAsignarMalla").value
	var inptHorasemanalAsignarMalla = document.getElementById("inptHorasemanalAsignarMalla").value
	var inptCpdigoAsignarMalla = document.getElementById("inptCpdigoAsignarMalla").value
		

	
	
	if(inptAnhoAsignarMalla==""){
		document.getElementById("inptAnhoAsignarMalla").focus()
		alertmensaje("Falto ingresar el año")
		return
	}
	
	if(inptCursoAsignarMalla==""){
		document.getElementById("inptCursoAsignarMalla").focus()
		alertmensaje("Falto ingresar el curso")
		return
	}
	if(inptSemestrAsignarMalla==""){
		document.getElementById("inptSemestrAsignarMalla").focus()
		alertmensaje("Falto ingresar el semestre")
		return
	}
	if(inptCargaHorariaAsignarMalla==""){
		document.getElementById("inptCargaHorariaAsignarMalla").focus()
		alertmensaje("Falto ingresar la carga horaria")
		return
	}

	if(inptEstadoAsignarMalla==""){
		document.getElementById("inptEstadoAsignarMalla").focus()
		alertmensaje("Falto seleccionar una carrera")
		return
	}
	
	
	var idfkmateria="";
	
		$("input[id=inptCatedraAsignarMalla]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         idfkmateria=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var idfkcarrera="";
	$("input[id=inptCarreraAsignarMalla]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         idfkcarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});



	
	
	if(idfkmateria==""){
		document.getElementById("inptCatedraAsignarMalla").focus()
		alertmensaje("Falto seleccionar la catedra")
		return
	}
	if(idfkcarrera==""){
		document.getElementById("inptCarreraAsignarMalla").focus()
		alertmensaje("Falto seleccionar la carrera")
		return
	}
	
		
	var accion = "";
	if (idAbmAsignarMalla != "") {
		accion = "editar";
		if(controlacceso("EDITARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmAsignarMalla(inptCpdigoAsignarMalla,inptHorasemanalAsignarMalla,inptCreditoAsignarMalla,inptCargaHorariaPresenAsignarMalla,inptCargaHorariaAutoAsignarMalla,inptCargaHorariaIndepeAsignarMalla,inptCursoAsignarMalla,inptCargaHorariaAsignarMalla,inptAnhoAsignarMalla,inptSemestrAsignarMalla,inptEstadoAsignarMalla,idfkmateria,idfkcarrera,idAbmAsignarMalla, accion)
}
function AbmAsignarMalla(codigomalla,horasemanal,credito,cargapresencia,cargaautonoma,cargarindependiente,curso,cargahoraria,anho,semestre,estado,idlistadodematerias,cod_carrera,idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("curso", curso)
	datos.append("cargahoraria", cargahoraria)
	datos.append("anho", anho)
	datos.append("semestre", semestre)
	datos.append("estado", estado)
	datos.append("idlistadodematerias", idlistadodematerias)
	datos.append("cod_carrera", cod_carrera)
	datos.append("cargapresencia", cargapresencia)
	datos.append("cargaautonoma", cargaautonoma)
	datos.append("cargarindependiente", cargarindependiente)
	datos.append("credito", credito)
	datos.append("horasemanal", horasemanal)
	datos.append("codigomalla", codigomalla)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];				
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
	
					LimpiarCamposAsignarMalla()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")				
					BuscarAbmAsignarMalla()
					
				}
				
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoAsignarMalla(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoAsignarMalla1').checked=true
	document.getElementById('inptSeleccEstadoAsignarMalla2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoAsignarMalla1').checked=false
	document.getElementById('inptSeleccEstadoAsignarMalla2').checked=true
	}
}
var controlordenmallaabm="1"
function ordenmallaabm(d){
	document.getElementById('tdOrdMalla1').className="td_registro_orden1"
		document.getElementById('tdOrdMalla2').className="td_registro_orden1"
		document.getElementById('tdOrdMalla3').className="td_registro_orden1"
		document.getElementById('tdOrdMalla4').className="td_registro_orden1"
		document.getElementById('tdOrdMalla5').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdMalla1').className="td_registro_orden"
		controlordenmallaabm="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdMalla2').className="td_registro_orden"
		controlordenmallaabm="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdMalla3').className="td_registro_orden"
		controlordenmallaabm="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdMalla4').className="td_registro_orden"
		controlordenmallaabm="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdMalla5').className="td_registro_orden"
		controlordenmallaabm="5"
	}
	BuscarAbmAsignarMalla()
}
function seleccionarcarrerabuscarmalla(){
	BuscarCatedraSelectporcarreraenmallabuscar()
	BuscarAbmAsignarMalla()
}
function BuscarAbmAsignarMalla() {
if(controlacceso("BUSCARMALLA","accion")==false){
	//SIN PERMISO
	  return;
		}

	var anho = document.getElementById('inptBuscarAsignarMalla3').value
	var curso = document.getElementById('inptBuscarAsignarMalla4').value
	var semestre = document.getElementById('inptBuscarAsignarMalla5').value
	var codigo = document.getElementById('inptBuscarAsignarMalla6').value
	var estado = ""
var codCarrera="";
$("input[id=inptBuscarAsignarMalla2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});


var codCatedra="";
$("input[id=inptBuscarAsignarMalla1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCatedra=$(match).attr("id")
       } else {
           // value is not in list
       }
});


if(document.getElementById('inptSeleccEstadoAsignarMalla1').checked==true){
	estado="Activo"
}else{
	estado="Inactivo"
}
	document.getElementById("divBuscadorAsignarMalla").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarMalla").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"anho": anho,
		"semestre": semestre,
		"curso": curso,
		"codCarrera": codCarrera,
		"codCatedra": codCatedra,
		"ordenby": controlordenmallaabm,
		"codigo": codigo,
		"funt": "buscar"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAsignarMalla").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarMalla").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarMalla").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarMalla").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarMalla").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroAsignarMalla").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				    cargarAdminTareas()
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarVistaAsignarMalla() {

	var buscador = document.getElementById('inptBuscarVistaAsignarMalla1').value
	document.getElementById("divBuscadorVistaAsignarMalla").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaAsignarMalla").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"funt": "buscarvista"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorVistaAsignarMalla").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarMalla").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaAsignarMalla").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarMalla").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAsignarMalla").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaAsignarMalla").innerHTML="Se encontraron "+datos[3]+" registro(s)";
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAsingarMallaSelect() {


	document.getElementById("ListMallasAsignar").innerHTML = "" 
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListMallasAsignar").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListMallasAsignar").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("ListMallasAsignar").innerHTML=datos_buscados
				
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function ObtenerdatosVistaAsignarMalla(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	if(ControlVistaAsignarMalla=="asignarnrofactura"){
	idFKMallaNroFactura = $(datostr).children('td[id="td_id_1"]').html();
	document.getElementById('inptNombreMallaFacturaNro').value = $(datostr).children('td[id="td_datos_1"]').html();

	}
document.getElementById("divVistaAsignarMalla").style.display="none";


}
function BuscarCatedraSelectporcarreraenmallabuscar() {
var codcarrera="";
	
		$("input[id=inptBuscarAsignarMalla2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codcarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
if(codcarrera==""){
	$("input[id=inptBuscarAsignarMalla1]").attr("list","ListMaterias")
}else{
	$("input[id=inptBuscarAsignarMalla1]").attr("list","ListMateriasMalla")
}
	document.getElementById("ListMateriasMalla").innerHTML = ""
	document.getElementById("inptBuscarAsignarMalla1").value = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codcarrera": codcarrera,
		"funt": "buscarSelectporcarrera1"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
          manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListMateriasMalla").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListMateriasMalla").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("ListMateriasMalla").innerHTML=datos_buscados
					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarCatedraSelectparaCargarFactura() {
var codArancel="";
$("input[id=inptArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
});

	document.getElementById("ListMateriasCargarFactura").innerHTML = ""
	document.getElementById("inptCatedraArancelCargarFacturas").value = ""
	var curso=document.getElementById("inptCursoCargarFacturas").value;
	var semestre=document.getElementById("inptSemestreCargarFacturas").value;
	var anho=document.getElementById("inptAnhoCargarFacturas").value;
	var carrera=document.getElementById("inptCarreraCargarFacturas").value;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"anho": anho,
		"semestre": semestre,
		"carrera": carrera,
		"curso": curso,
		"codArancel": codArancel,
		"funt": "buscarmateriaapagarlist"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
          manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListMateriasCargarFactura").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListMateriasCargarFactura").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("ListMateriasCargarFactura").innerHTML=datos_buscados
					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function vercerrarImportarMalla(d){
	if(d=="1"){
	document.getElementById("divImportarMallaCurricular").style.display=""
	}else{
	document.getElementById("divImportarMallaCurricular").style.display="none"
	}	
}
function importardatosmalla(d){
	if(d.value=="Enviar"){
	nroNoInsertadoMalla=0;
	nroInsertadoMalla=0;
	d.value="Cancelar"
	controlInsercionMalla=true;
	procesardatosMalla(datosexcel)
	return false
	}
	if(d.value=="Cancelar"){
	controlInsercionMalla=false;
	d.value="Enviar"
	return false
	}
}
var controlInsercionMalla=true;
var registrocargadoMalla=0;
var nroNoInsertadoMalla=0;
var nroInsertadoMalla=0;
function procesardatosMalla(data){
	 var pagina=""	
		 var cargando=registrocargadoMalla+1;
		 var totalregistro=data.length-1;
      
		 for (var i = registrocargadoMalla ; i < cargando ; i++) {		
		 
					
			  var carrera=data[i]["CARRERA"]
			   var catedra=data[i]["CATEDRA"]
			    var anho=data[i]["ANHO"]
			    var curso=data[i]["CURSO"]
			    var semestre=data[i]["SEMESTRE"]
			  var cargahoraria=data[i]["CARGAHORARIA"]
			
			 
			 
           	 abmimportarmalla(controlInsercionMalla,registrocargadoMalla,totalregistro,carrera,catedra, anho,curso, semestre, cargahoraria) 
             registrocargadoMalla=registrocargadoMalla+1;
		
		
			  }
}
function abmimportarmalla(control,registro,totalregistro,carrera,catedra, anho,curso, semestre, cargahoraria) {
	 document.getElementById("divRegistroImportarMallaCurricular").innerHTML+="<table class='tableRegistroSearch'  id='tdaccion_"+registro+"' style='background-color: yellow;color:#000' >"
+"<tr  id='trDatosExcel'>"
+"<td  style='display:none' id='td_datos_1'>"+registro+"</td>"
+"<td  style='width:10%;'  id='td_datos_2'>"+carrera+"</td>"
+"<td  style='width:10%;'  id='td_datos_3'>"+catedra+"</td>"
+"<td  style='width:10%;'  id='td_datos_4'>"+anho+"</td>"
+"<td  style='width:10%;'  id='td_datos_5'>"+curso+"</td>"
+"<td  style='width:10%;'  id='td_datos_6'>"+semestre+"</td>"
+"<td  style='width:10%;'  id='td_datos_7'>"+cargahoraria+"</td>"
+"<td  style='width:5%;' id='traccion_"+registro+"'>ENVIANDO...</td>"
+"</tr>"
+"</table>"

if(control==false){
	return false
}

	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "importar")
	datos.append("carrera", carrera)
	datos.append("catedra", catedra)
	datos.append("anho", anho)
	datos.append("curso", curso)
	datos.append("semestre", semestre)
	datos.append("cargahoraria", cargahoraria)
	
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptNoInsertadoArchivo").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="ERROR"
			document.getElementById("tdaccion_"+registro).style="background-color:red;color:#fff;"
			procesardatosMalla(datosexcel)
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];				
				if(Respuesta=="INSERTADO"){
					nroInsertadoMalla=nroInsertadoMalla+1;
				document.getElementById("inptRegistroInsertadoImportarMalla").value=separadordemilesnumero(nroInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="INSERTADO"
				}
				if(Respuesta=="CARRERA"){
					nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptRegistroNoInsertadoImportarMalla").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="CARRERA INVALIDAD"
				}
				if(Respuesta=="CATEDRA"){
					nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptRegistroNoInsertadoImportarMalla").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="CATEDRA INVALIDAD"
				}
				if(Respuesta=="ERROR"){
					nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptRegistroNoInsertadoImportarMalla").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="ERROR"
				}
				if(Respuesta=="DUPLICADO"){
					nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptRegistroNoInsertadoImportarMalla").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="DUPLICADO"
				}
				if(Respuesta=="VACIO"){
					nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptRegistroNoInsertadoImportarMalla").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="FALTA DATOS"
				}
				var porc=(Number(registro)*100)/Number(totalregistro)
				document.getElementById("inptRegistroPorcentajeImportarMalla").style.width=porc+"%";
				procesardatosMalla(datosexcel)
				
			} catch (error) {
				nroNoInsertadoMalla=nroNoInsertadoMalla+1;
				document.getElementById("inptNoInsertadoArchivo").value=separadordemilesnumero(nroNoInsertadoMalla)
			document.getElementById("traccion_"+registro).innerHTML="ERROR"
			document.getElementById("tdaccion_"+registro).style="background-color:red;color:#fff;"
				procesardatosMalla(datosexcel)
			}


		}
	});


}



/*
ASIGNAR NRO FACTURA
*/
var idFKCarreraNroFactura="";
var idAbmAsignarFacturaNro="";
var ControlVistaAsignarFacturaNro=""
function verCerrarFrmAsignarFacturaNro(d){
	document.getElementById("divMinimizadoNroFactura").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmAsignarFacturaNro").style.display="";
	
	}else{
	document.getElementById("divAbmAsignarFacturaNro").style.display="none";
	LimpiarCamposAsignarFacturaNro()
	}
}
function MinimizarVentanaNroFactura(){
	document.getElementById("divAbmAsignarFacturaNro").style.display="none";
	document.getElementById("divMinimizadoNroFactura").style.display="";
}
function verCerrarFrmHistorialFacturaNro(d){
	if(controlacceso("BUSCARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}	
		var codFilialFk="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});
if(codFilialFk==""){
	return
}
	if(d=="1"){
	document.getElementById("divAbmHistorialFacturaNro").style.display="";	
	}else{
	document.getElementById("divAbmHistorialFacturaNro").style.display="none";
	}
	idFacturasHabilitadas = "";
	document.getElementById('inptRegistroSeleFacturaNro').value= "";
	document.getElementById('btnEditarDatosDatosFacturas').style.backgroundColor = "#b5f5b7";
}
function verCerrarFrmVistaTrabajo(d,control){
	if(controlacceso("BUSCARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(d=="1"){
		document.getElementById("divVistaTrabajo").style.display=""
		document.getElementById("inptBuscarVistaTrabajo1").focus()
		ControlVistaTrabajo=control
	}else{
		document.getElementById("divVistaTrabajo").style.display="none"
	
	}
}
function NuevoAsignarFacturaNroFrm(){
	if(controlacceso("INSERTARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarFacturaNro1").style.display="none"
		document.getElementById("divAbmAsignarFacturaNro2").style.display=""
		LimpiarCamposAsignarFacturaNro()
}
function EditarAsignarFacturaNroFrm(){
	if(controlacceso("EDITARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarFacturaNro==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarFacturaNro1").style.display="none"
		document.getElementById("divAbmAsignarFacturaNro2").style.display=""
		
}
function BuscarAsignarFacturaNroFrm(){
	if(controlacceso("BUSCARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarFacturaNro1").style.display=""
		document.getElementById("divAbmAsignarFacturaNro2").style.display="none"
}
function LimpiarCamposAsignarFacturaNro(){
	document.getElementById("inptFilialOrigenFacturaNro").value=""
	document.getElementById("inptPuntosExpedicionesFacturaNro").innerHTML=""
	document.getElementById("inptCajasFacturaNro").innerHTML=""
	document.getElementById("divCarreraNroFactura").innerHTML=""
	document.getElementById("inptNroInicioFacturaNro").value=""
	document.getElementById("inptNroFinFacturaNro").value=""
	document.getElementById("inptFechaVencimientoFacturaNro").value=""
	document.getElementById("inptNroTimbradoFacturaNro").value=""
	document.getElementById("divHistorialAsignarFacturaNro").innerHTML=""
	document.getElementById("inptEstadoFacturaNro").value="Activo"
	idAbmAsignarFacturaNro=""
	document.getElementById("btnAbmAsignarFacturaNro").value="Guardar Datos"
}
function CargarPuntoExpedicion(d){
	var nroEpedicion="";
	var codFilial="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         nroEpedicion=$(match).attr("name")
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
if(codFilial==""){
		return;
	}

	// nroEpedicion=nroEpedicion+"-"+document.getElementById("inptNroCajaFacturaNro").value
	// document.getElementById("inptNroPuntoFacturaNro").value=nroEpedicion
	CargarNroCajas(codFilial)
	BuscarHistorialAsignarFacturaNro(codFilial)
}
function CargarNroCajas(codFilial){
	
	if(codFilial==""){
		return
	}
	
	document.getElementById("divCarreraNroFactura").innerHTML = imgCargandoA
	
	document.getElementById("inptPuntosExpedicionesFacturaNro").innerHTML = '<option>Cargando...</option>'
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarnrocajas"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptCajasFacturaNro").innerHTML = ''
			document.getElementById("inptPuntosExpedicionesFacturaNro").innerHTML = ''
			document.getElementById("divCarreraNroFactura").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				
			verCerrarEfectoCargando("2")
				return false;
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptCajasFacturaNro").innerHTML = ''
				document.getElementById("inptPuntosExpedicionesFacturaNro").innerHTML = ''
				document.getElementById("divCarreraNroFactura").innerHTML = ''
			
			verCerrarEfectoCargando("2")
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados1 = datos[2];
					var datos_buscados2 = datos[3];
					var datos_buscados3 = datos[4];
					document.getElementById("inptPuntosExpedicionesFacturaNro").innerHTML = datos_buscados2
					CargarCarrerasNroFacultad()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	
}
function CargarCarrerasNroFacultad(){
	
	
	var	codFilialDestino=$("select[id=inptPuntosExpedicionesFacturaNro]").children(":selected").attr("id")
	
	if(codFilialDestino=="" || codFilialDestino==undefined){
		return
	}
		var codFilialOrigen="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialOrigen=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilialOrigen==""){
		return
	}
	
	document.getElementById("divCarreraNroFactura").innerHTML = imgCargandoA
	document.getElementById("inptCajasFacturaNro").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilialDestino": codFilialDestino,
		"codFilialOrigen": codFilialOrigen,
		"funt": "buscarcarreradefilial"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("divCarreraNroFactura").innerHTML = ''
			document.getElementById("inptCajasFacturaNro").innerHTML = ""
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("divCarreraNroFactura").innerHTML = ''
				document.getElementById("inptCajasFacturaNro").innerHTML = ""
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados1 = datos[2];
					var datos_caja = datos[3];
					document.getElementById("inptCajasFacturaNro").innerHTML = datos_caja
					document.getElementById("divCarreraNroFactura").innerHTML = datos_buscados1	
 cargarAdminTareas()					
				}
			} catch (error) {
			alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	
}
function ObtenerdatosAbmAsignarFacturaNro(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});

		
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarFacturaNro = $(datostr).children('td[id="td_id_1"]').html();
	idFKCarreraNroFactura = $(datostr).children('td[id="td_id_2"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarFacturaNrol').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptNombreCarreraFacturaNro').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptFilialOrigenFacturaNro').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptNroInicioFacturaNro').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptNroFinFacturaNro').value = $(datostr).children('td[id="td_datos_3"]').html();
//	document.getElementById('inptFechaFacturaNro').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptEstadoFacturaNro').value = $(datostr).children('td[id="td_datos_4"]').html();
     document.getElementById("btnAbmAsignarFacturaNro").value="Editar Datos"



}
function EliminarRegitroAsignarFacturaNro(){
		if(controlacceso("ELIMINARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarFacturaNro==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoFacturaNro").value="Inactivo";
	VerificarDatosAsignarFacturaNro()
	}

}
function VerificarDatosAsignarFacturaNro(){
	
	
	var inptNroInicioFacturaNro = document.getElementById("inptNroInicioFacturaNro").value
	var inptNroFinFacturaNro = document.getElementById("inptNroFinFacturaNro").value
	var inptEstadoFacturaNro = document.getElementById("inptEstadoFacturaNro").value
	var inptCajasFacturaNro = document.getElementById("inptCajasFacturaNro").value
	var inptFechaVencimientoFacturaNro = document.getElementById("inptFechaVencimientoFacturaNro").value
	var inptNroTimbradoFacturaNro = document.getElementById("inptNroTimbradoFacturaNro").value
	
	
	var codFilialFk="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});


var	codFilialFKPunto=$("select[id=inptPuntosExpedicionesFacturaNro]").children(":selected").attr("id")

if(codFilialFk==""){
	alertmensaje("Falto seleccionar una filial")
		return
	
}

	
	if(inptNroInicioFacturaNro==""){
		document.getElementById("inptNroInicioFacturaNro").focus()
		alertmensaje("Falto ingresar el nro inicio")
		return
	}
	if(inptNroFinFacturaNro==""){
		document.getElementById("inptNroFinFacturaNro").focus()
		alertmensaje("Falto ingresar el nro fin")
		return
	}
	
	if(inptEstadoFacturaNro==""){
		document.getElementById("inptEstadoFacturaNro").focus()
		alertmensaje("Falto seleccionar el estado del registro")
		return
	}
	if(inptFechaVencimientoFacturaNro==""){
		document.getElementById("inptFechaVencimientoFacturaNro").focus()
		alertmensaje("Falto seleccionar el una fecha de vencimiento")
		return
	}
	if(inptNroTimbradoFacturaNro==""){
		document.getElementById("inptNroTimbradoFacturaNro").focus()
		alertmensaje("Falto seleccionar el nro de timbrado")
		return
	}
	
	var controlCarreras=0;
	$("input[name=checkboxCarreraFacturaNro]").each(function(i, elementohtml){
if ($(elementohtml).is(':checked') ){
	controlCarreras=1;
}
	   });
	
	if(controlCarreras==0){
	alertmensaje("Falto seleccionar carreras")
	return
	}
	
		
	var accion = "";
	if (idAbmAsignarFacturaNro != "") {
		accion = "editar";
		if(controlacceso("EDITARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmAsignarFacturaNro(inptFechaVencimientoFacturaNro,inptNroTimbradoFacturaNro,codFilialFKPunto,inptCajasFacturaNro,inptNroInicioFacturaNro,inptNroFinFacturaNro,inptEstadoFacturaNro,codFilialFk,idAbmAsignarFacturaNro, accion)
}
function AbmAsignarFacturaNro(fechavencimiento,nrotimbrado,codFilialFKPunto,nrocaja,NroInicio,NroFin,Estado,cod_filialFk,idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	var controlCarreras=1;
	$("input[name=checkboxCarreraFacturaNro]").each(function(i, elementohtml){
if ($(elementohtml).is(':checked') ){
	var codCarrera=$(elementohtml).attr("id")
	datos.append("cod_carreraFk"+controlCarreras, codCarrera)
	controlCarreras=controlCarreras+1;
}
	   });
	   
	 controlCarreras=controlCarreras-1;	
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nrocaja", nrocaja)
	datos.append("NroInicio", NroInicio)
	datos.append("NroFin", NroFin)
	datos.append("Estado", Estado)
	datos.append("cod_filialFk", cod_filialFk)
	datos.append("totalcarreras", controlCarreras)
	datos.append("codFilialFKPunto", codFilialFKPunto)	
	datos.append("fechavencimiento", fechavencimiento)	
	datos.append("nrotimbrado", nrotimbrado)	
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
	BuscarHistorialAsignarFacturaNro(cod_filialFk)
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
	}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function MasFiltrosAsignarFacturaNro(datos){
	if(document.getElementById("divMasFiltrosAsignarFacturaNro").style.display==""){
		document.getElementById("divMasFiltrosAsignarFacturaNro").style.display="none"
		datos.src="/GoodTechnologyEPNSA/iconos/filtros.png";
	}else{
		$("div[id=divMasFiltrosAsignarFacturaNro]").slideDown(500);
		datos.src="/GoodTechnologyEPNSA/iconos/filtros2.png";
	}
}
function BuscarAbmAsignarFacturaNro() {
if(controlacceso("BUSCARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	var buscador = document.getElementById('inptBuscarAsignarFacturaNro1').value
	var estado = document.getElementById('inptBuscarAsignarFacturaNro2').value
	document.getElementById("divBuscadorAsignarFacturaNro").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarFacturaNro").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAsignarFacturaNro").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarFacturaNro").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarFacturaNro").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarFacturaNro").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarFacturaNro").innerHTML = datos_buscados	
                   document.getElementById("lblNroRegistroAsignarFacturaNro").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAsingarCarreraSelect() {
	document.getElementById("ListCarrerasAsignar").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListCarrerasAsignar").innerHTML = ''	
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListCarrerasAsignar").innerHTML = ''		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
				var datos_buscados = datos[2];
					document.getElementById("ListCarrerasAsignar").innerHTML=datos_buscados
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function checkestadoNroFactura(d){
	var codFilialFk="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});	

	if(d=="1"){
	document.getElementById('inptSeleccEstadoNroFactura1').checked=true
	document.getElementById('inptSeleccEstadoNroFactura2').checked=false	
		BuscarHistorialAsignarFacturaNro(codFilialFk)
	}else{
	document.getElementById('inptSeleccEstadoNroFactura1').checked=false
	document.getElementById('inptSeleccEstadoNroFactura2').checked=true
		BuscarHistorialAsignarFacturaNro(codFilialFk)
	}
}
function BuscarHistorialAsignarFacturaNrobtn(d){
	var codFilialFk="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});	
BuscarHistorialAsignarFacturaNro(codFilialFk)
	
}
function BuscarHistorialAsignarFacturaNro(codFilial) {
	document.getElementById("divHistorialAsignarFacturaNro").innerHTML = imgCargandoA 
	var estado=""
if(document.getElementById('inptSeleccEstadoNroFactura1').checked==true){
	estado="Activo"
}else{
	estado="Inactivo"
}
var codCarreraFk="";
$("input[id=inptCarreraBuscarHistorialNroFactura]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarreraFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});
document.getElementById('inptRegistroSeleFacturaNro').value= "";
	document.getElementById('btnEditarDatosDatosFacturas').style.backgroundColor = "#b5f5b7";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": codFilial,
		"estado": estado,
		"codCarreraFk": codCarreraFk,
		"funt": "buscarhistorial"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divHistorialAsignarFacturaNro").innerHTML = ''
		
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divHistorialAsignarFacturaNro").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divHistorialAsignarFacturaNro").innerHTML = datos_buscados 
 cargarAdminTareas()					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function ObtenerDatosFacturaNroDetalles(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});

		
	datostr.className = 'tableRegistroSelec'
	idFacturasHabilitadas = $(datostr).children('td[id="td_id_1"]').html();
	document.getElementById('inptRegistroSeleFacturaNro').value = $(datostr).children('td[id="td_id_1"]').html();
	document.getElementById('btnEditarDatosDatosFacturas').style.backgroundColor = "#4caf50";
	

}
function verCerrarFrmReportNroFacturasHabilitadas(d){
	document.getElementById("divMinimizadoFacturaHabilitadas").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("INFORMENROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divReportNroFacturasHabilitadas").style.display="";
	
	}else{
	document.getElementById("divReportNroFacturasHabilitadas").style.display="none";
	limpiarCamposBusquedaFacturaHabilitadas()
	}
}
function MinimizarVentanaFacturasHabilitadas(){
	document.getElementById("divReportNroFacturasHabilitadas").style.display="none";
	document.getElementById("divMinimizadoFacturaHabilitadas").style.display="";
}
function limpiarCamposBusquedaFacturaHabilitadas(){
	document.getElementById("inptBuscadorReportFacturasHabilitadas7").value=""
	document.getElementById("inptBuscadorReportFacturasHabilitadas8").value=""
	document.getElementById("inptBuscadorReportFacturasHabilitadas1").value=""
	document.getElementById("inptBuscadorReportFacturasHabilitadas3").value=""
	document.getElementById("inptBuscadorReportFacturasHabilitadas4").value=""
	document.getElementById("inptBuscadorReportFacturasHabilitadas5").value=""
	document.getElementById("inptBuscadorReportFacturasHabilitadas6").value=""
	document.getElementById("inptRegistroReportFacturasHabilitadas").value=""
	document.getElementById("inptSeleccionadoReportFacturasHabilitadas").value=""
	document.getElementById("divBuscadorReportFacturasHabilitadas").innerHTML=""
		document.getElementById('btnMasDetallesFacturaHabilitadas').style.backgroundColor = "#b5f5b7";
}
function checkBuscarFacturasHabilitadas(d){
		var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	

	
	if(d=="1"){
		
	document.getElementById('checkBuscarFacturasHabilitadas1').checked=true
	document.getElementById('checkBuscarFacturasHabilitadas2').checked=false	
	document.getElementById('checkBuscarFacturasHabilitadas3').checked=false	
		document.getElementById('inptBuscadorReportFacturasHabilitadas7').value = f.getFullYear() + "-" + mes + "-" + "01";
	document.getElementById('inptBuscadorReportFacturasHabilitadas8').value = f.getFullYear() + "-" + mes + "-" + dia;
	}
	if(d=="2"){
	document.getElementById('checkBuscarFacturasHabilitadas1').checked=false
	document.getElementById('checkBuscarFacturasHabilitadas2').checked=true	
	document.getElementById('checkBuscarFacturasHabilitadas3').checked=false
	document.getElementById('inptBuscadorReportFacturasHabilitadas8').value ="";
document.getElementById('inptBuscadorReportFacturasHabilitadas7').value = f.getFullYear() + "-" + mes + "-" + dia;
	}
	if(d=="3"){
	document.getElementById('checkBuscarFacturasHabilitadas1').checked=false
	document.getElementById('checkBuscarFacturasHabilitadas2').checked=false	
	document.getElementById('checkBuscarFacturasHabilitadas3').checked=true	
	document.getElementById('inptBuscadorReportFacturasHabilitadas7').value=""
	document.getElementById('inptBuscadorReportFacturasHabilitadas8').value=""
	}
}
function BuscarReportFacturasHabilitadas() {
if(controlacceso("INFORMENROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
	var fecha1 =document.getElementById('inptBuscadorReportFacturasHabilitadas7').value
	var fecha2 =document.getElementById('inptBuscadorReportFacturasHabilitadas8').value
	if(document.getElementById('checkBuscarFacturasHabilitadas1').checked==true){
		if(fecha1==""){
			alertmensaje("Falto seleccionar la fecha inicio")
			return
		}
		if(fecha2==""){
			alertmensaje("Falto seleccionar la fecha fin")
			return
		}
	}
	if(document.getElementById('checkBuscarFacturasHabilitadas2').checked==true){
		if(fecha1==""){
				alertmensaje("Falto seleccionar la fecha inicio")
			return
		}
		fecha2=""
	}
	if(document.getElementById('checkBuscarFacturasHabilitadas3').checked==true){
		fecha1=""
		fecha2=""
	}
	
	
	var nrotimbrado =document.getElementById('inptBuscadorReportFacturasHabilitadas1').value
	var Estado =document.getElementById('inptBuscadorReportFacturasHabilitadas6').value
	
	var codFilialorigen="";		
$("input[id=inptBuscadorReportFacturasHabilitadas4]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialorigen=$(match).attr("id")
       } else {
           // value is not in list
       }
});
var codFilialDestino="";		
$("input[id=inptBuscadorReportFacturasHabilitadas5]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialDestino=$(match).attr("id")
       } else {
           // value is not in list
       }
});
var codCarrera="";		
$("input[id=inptBuscadorReportFacturasHabilitadas3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	
	document.getElementById("divBuscadorReportFacturasHabilitadas").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportFacturasHabilitadas").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"fecha1": fecha1,
		"fecha2": fecha2,
		"nrotimbrado": nrotimbrado,
		"codCarrera": codCarrera,
		"codFilialorigen": codFilialorigen,
		"codFilialDestino": codFilialDestino,
		"Estado": Estado,
		"funt": "buscarreportfacturashabilitadas"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorReportFacturasHabilitadas").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportFacturasHabilitadas").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportFacturasHabilitadas").innerHTML = datos_buscados
					document.getElementById("inptRegistroReportFacturasHabilitadas").value= datos[3];
					document.getElementById('inptEstadoCambiarDatosFactura').value = "";
	document.getElementById('btnMasDetallesFacturaHabilitadas').style.backgroundColor = "#b5f5b7";
					 cargarAdminTareas()
					if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
					}
					} catch (error) {
						alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
var idFacturasHabilitadas="";
function ObtenerDatosFacturaHabilitadasRepot(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});

		
	datostr.className = 'tableRegistroSelec'
	idFacturasHabilitadas = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptSeleccionadoReportFacturasHabilitadas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptFilialOrigenCambiarDatosFactura').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptFilialDestinoCambiarDatosFactura').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCarreraCambiarDatosFactura').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoCambiarDatosFactura').value = "";
	document.getElementById('btnMasDetallesFacturaHabilitadas').style.backgroundColor = "";
	
	

}
function verCerrarCambiarDatosFacturasHabilitadas(d){
	if(controlacceso("EDITARNROFACTURA","accion")==false){
	//SIN PERMISO
	  return;
		}
		if(idFacturasHabilitadas==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
	if(d=="1"){
	document.getElementById("divCambiarDatosFactura").style.display="";
	
	}else{
	document.getElementById("divCambiarDatosFactura").style.display="none";
	}
}
function AbmCambiarDatosFacturaHabilitadas() {

if(idFacturasHabilitadas==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
	var Estado=document.getElementById('inptEstadoCambiarDatosFactura').value
	var datos = new FormData();
	 verCerrarEfectoCargando("1")
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "CambiarDatos")
	datos.append("idAbm", idFacturasHabilitadas)
	datos.append("estado", Estado)
	
	var OpAjax = $.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("2")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("2")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
               	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
	                document.getElementById("divCambiarDatosFactura").style.display="none";
					idFacturasHabilitadas = "";
	                document.getElementById('inptSeleccionadoReportFacturasHabilitadas').value = "";
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				    BuscarReportFacturasHabilitadas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function AbmCambiarDatosFacturaHabilitadas2() {

if(idFacturasHabilitadas==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
	var Estado="Inactivo"
	var datos = new FormData();
	 verCerrarEfectoCargando("1")
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "CambiarDatos")
	datos.append("idAbm", idFacturasHabilitadas)
	datos.append("estado", Estado)
	
	var OpAjax = $.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarFacturaNro.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("2")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("2")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
               	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					idFacturasHabilitadas = "";
					document.getElementById('inptRegistroSeleFacturaNro').value= "";
	document.getElementById('btnEditarDatosDatosFacturas').style.backgroundColor = "#b5f5b7";
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				   var codFilialFk="";
$("input[id=inptFilialOrigenFacturaNro]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	BuscarHistorialAsignarFacturaNro(codFilialFk)
			   }
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}

 /*
ASIGNAR ARANCELES
*/
var CodCarreraAsignarArancel="";
var idAbmAsignarArancel="";
var ControlVistaAsignarArancel=""
function verCerrarFrmAsignarArancel(d){
	document.getElementById("divMinimizadoAranceles").style.display="none";
	document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}

	
	if(d=="1"){
		
		minimizartodaventanaabierto()
	document.getElementById("divAbmAsignarArancel").style.display="";
	
	}else{
	document.getElementById("divAbmAsignarArancel").style.display="none";
	 LimpiarCamposAsignarArancel()
	 LimpiarCamposAsignarArancelMasivo()
	 LimpiarCamposBusquedaAsignarArancel()
	}
}
function MinimizarVentanaAsignarArancel(){
	document.getElementById("divAbmAsignarArancel").style.display="none";
	document.getElementById("divMinimizadoAranceles").style.display="";
}
function verCerrarFrmVistaAsignarArancel(d,v){
	if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(d=="1"){
		ControlVistaAsignarArancel=v;
		$("div[id=divVistaAsignarArancel]").fadeIn(500);
	}else{
		$("div[id=divVistaAsignarArancel]").fadeOut(500);
	}
}
function NuevoAsignarArancelFrm(){
	if(controlacceso("INSERTARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarArancel1").style.display="none"
		document.getElementById("divAbmAsignarArancel3").style.display="none"
		document.getElementById("divAbmAsignarArancel2").style.display=""
		LimpiarCamposAsignarArancel()
}
function NuevoAsignarArancelMasivoFrm(){
	if(controlacceso("INSERTARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarArancel1").style.display="none"
		document.getElementById("divAbmAsignarArancel2").style.display="none"
		document.getElementById("divAbmAsignarArancel3").style.display=""
		LimpiarCamposAsignarArancel()
}
function EditarAsignarArancelFrm(){
	if(controlacceso("EDITARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarArancel==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarArancel1").style.display="none"
		document.getElementById("divAbmAsignarArancel3").style.display="none"
		document.getElementById("divAbmAsignarArancel2").style.display=""
		CargarCarrerasAsingarArancel()
		
}
function BuscarAsignarArancelFrm(){
	if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarArancel1").style.display=""
		document.getElementById("divAbmAsignarArancel2").style.display="none"
		document.getElementById("divAbmAsignarArancel3").style.display="none"
}
var elementoAsignarArancel="";
function obtenerDatosPeriodosAcademicosAsignarArancel(datos){
	elementoAsignarArancel=datos
}
function calcularTotalCuota(datos) {
	

	var t= document.getElementById("inptMontoAsignarArancel").value
	if(t==""){
		return;
	}
	t = QuitarSeparadorMilValor(t);
 
	var i= document.getElementById("inptCantidadAsignarArancel").value
	if(i==""){
		return;
	}
	i = QuitarSeparadorMilValor(i);
	if (isNaN(t)) {
		t = 0
		document.getElementById("inptMontoAsignarArancel").value=0

	}
	if (isNaN(i)) {
		i = 0
		document.getElementById("inptCantidadAsignarArancel").value=0
	
	}
	var i = parseFloat(i);
	var t = parseFloat(t);
	var total=Math.round(t*i)
	document.getElementById("inptTotalAsignarArancel").value=separadordemilesnumero(total)
	document.getElementById("inptMontoAsignarArancel").value=separadordemilesnumero(t)
	
}
function calcularTotalCuotaMasivo(datos) {
	

	var t= document.getElementById("inptMontoAsignarArancelMasivo").value
	if(t==""){
		return;
	}
	t = QuitarSeparadorMilValor(t);
 
	var i= document.getElementById("inptCantidadAsignarArancelMasivo").value
	if(i==""){
		return;
	}
	i = QuitarSeparadorMilValor(i);
	if (isNaN(t)) {
		t = 0
		document.getElementById("inptMontoAsignarArancelMasivo").value=0

	}
	if (isNaN(i)) {
		i = 0
		document.getElementById("inptCantidadAsignarArancelMasivo").value=0
	
	}
	var i = parseFloat(i);
	var t = parseFloat(t);
	var total=Math.round(t*i)
	document.getElementById("inptTotalAsignarArancelMasivo").value=separadordemilesnumero(total)
	document.getElementById("inptMontoAsignarArancelMasivo").value=separadordemilesnumero(t)
	
}
function LimpiarCamposAsignarArancel(){
	document.getElementById("inptFilialAsignarArancel").value=""
	document.getElementById("inptAnhoAsignarArancel").value=""
	document.getElementById("inptCursoAsignarArancel").value=""
	document.getElementById("inptCarreraAsignarArancel").value=""
	document.getElementById("inptNombreAsignarArancel").value=""
	document.getElementById("inptMontoAsignarArancel").value=""
	document.getElementById("inptCantidadAsignarArancel").value="1"
	document.getElementById("inptTotalAsignarArancel").value=""
	document.getElementById("inptSemestreAsignarArancel").value=""
	document.getElementById("inptEstadoAsignarArancel").value="Activo"
	document.getElementById("inptRegistroSeleccionadoAsignarArancel").value=""
	   document.getElementById("btneditarDatosAsignarCarrera").style.backgroundColor="#b5f5b7"
     document.getElementById("btneliminarDatosAsignarCarrera").style.backgroundColor="#ffcece"
	idAbmAsignarArancel=""
	CodCarreraAsignarArancel=""
	document.getElementById("btnAbmAsignarArancel").value="Guardar Datos"
}
function LimpiarCamposBusquedaAsignarArancel(){
	document.getElementById("inptBuscarAsignarArancel1").value=""
	document.getElementById("inptBuscarAsignarArancel2").value=""
	document.getElementById("inptBuscarAsignarArancel3").value=""
	document.getElementById("inptBuscarAsignarArancel4").value=""
	document.getElementById("inptBuscarAsignarArancel5").value=""
	document.getElementById("inptBuscarAsignarArancel6").value=""
	document.getElementById("inptBuscarAsignarArancel7").value=""
	document.getElementById("lblNroRegistroAsignarArancel").innerHTML=""
	document.getElementById("divBuscadorAsignarArancel1").innerHTML=""
	
}
function LimpiarCamposAsignarArancelMasivo(){
	document.getElementById("inptTipoArancelAsignarArancelMasivo").value=""
	document.getElementById("inptFilialAsignarArancelMasivo").value=""
	document.getElementById("inptAnhoAsignarArancelMasivo").value=""
	document.getElementById("inptSemestreAsignarArancelMasivo").value=""
	document.getElementById("inptCursoAsignarArancelMasivo").value=""
	document.getElementById("inptNombreAsignarArancelMasivo").value=""
	document.getElementById("inptMontoAsignarArancelMasivo").value="0"
	document.getElementById("inptCantidadAsignarArancelMasivo").value="1"
	document.getElementById("inptTotalAsignarArancelMasivo").value="0"
}
function ControlTipoArancel(d){
	if(d.value=="Especificos"){
		document.getElementById("divTipoAranceles").style.display=""
	}else{
		document.getElementById("divTipoAranceles").style.display="none"
	}
}
function ControlTipoArancelMasivo(d){
	if(d.value=="Especificos"){
		document.getElementById("divTipoArancelesMasivo").style.display=""
	}else{
		document.getElementById("divTipoArancelesMasivo").style.display="none"
	}
}
function ObtenerdatosAbmAsignarArancel(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarArancel = $(datostr).children('td[id="td_id"]').html();
	CodCarreraAsignarArancel = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarArancel').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarArancel').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCarreraAsignarArancel').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptFilialAsignarArancel').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptSemestreAsignarArancel').value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptCursoAsignarArancel').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptAnhoAsignarArancel').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptMontoAsignarArancel').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptCantidadAsignarArancel').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptTotalAsignarArancel').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptEstadoAsignarArancel').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptTipoArancelAsignarArancel').value = $(datostr).children('td[id="td_datos_12"]').html();
     document.getElementById("btnAbmAsignarArancel").value="Editar Datos"
     document.getElementById("btneditarDatosAsignarCarrera").style.backgroundColor="#4CAF50"
     document.getElementById("btneliminarDatosAsignarCarrera").style.backgroundColor="red"
   
   if(document.getElementById('inptTipoArancelAsignarArancel').value=="Generales"){
	    document.getElementById("divTipoAranceles").style.display="None";
   }else{
	    document.getElementById("divTipoAranceles").style.display="";
   }


}
function EliminarRegitroAsingarArancel(){
	if(controlacceso("ELIMINARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarArancel==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		
	 document.getElementById("inptEstadoAsignarArancel").value="Inactivo";
	VerificarDatosAsignarArancel()
		
	}

}
function CargarCarrerasAsingarArancel(){
	
	
		var codFilial="";
$("input[id=inptFilialAsignarArancel]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
		return
	}
	
	document.getElementById("ListCarrerasAsignarArancel").innerHTML=""
	
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasAsignarArancel").innerHTML=""
			verCerrarEfectoCargando("2")
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)			
				document.getElementById("ListCarrerasAsignarArancel").innerHTML=""				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
					Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasAsignarArancel").innerHTML = datos_buscados1	
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	
}
function VerificarDatosAsignarArancel(){
	var inptAnhoAsignarArancel=document.getElementById("inptAnhoAsignarArancel").value;
	var inptCursoAsignarArancel=document.getElementById("inptCursoAsignarArancel").value;
	var inptMontoAsignarArancel=document.getElementById("inptMontoAsignarArancel").value;
	var inptCantidadAsignarArancel=document.getElementById("inptCantidadAsignarArancel").value;
	var inptTotalAsignarArancel=document.getElementById("inptTotalAsignarArancel").value;
	var inptSemestreAsignarArancel=document.getElementById("inptSemestreAsignarArancel").value;
	var inptEstadoAsignarArancel=document.getElementById("inptEstadoAsignarArancel").value;
	var inptTipoArancelAsignarArancel=document.getElementById("inptTipoArancelAsignarArancel").value;
	var inptNombreAsignarArancel=document.getElementById("inptNombreAsignarArancel").value;
	if(inptTipoArancelAsignarArancel=="Especificos"){
	if(inptAnhoAsignarArancel==""){
		alertmensaje("Falto Seleccionar el año")
		return;
	}
	if(inptCursoAsignarArancel==""){
		alertmensaje("Falto Seleccionar el curso")
		return;
	}
	if(inptMontoAsignarArancel==""){
		alertmensaje("Falto ingresar el monto")
		return;
	}
	if(inptCantidadAsignarArancel==""){
		alertmensaje("Falto ingresar la cantidad")
		return;
	}
	if(inptSemestreAsignarArancel==""){
		alertmensaje("Falto seleccionar el semestre")
		return;
	}
	if(inptEstadoAsignarArancel==""){
		alertmensaje("Falto seleccionar el estado del registro")
		return;
	}
	
	$("input[id=inptCarreraAsignarArancel]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         CodCarreraAsignarArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(CodCarreraAsignarArancel==""){
		alertmensaje("Falto Seleccionar la carrera")
		return
	}
	
	}else{
		
	if(inptAnhoAsignarArancel==""){
		inptAnhoAsignarArancel="NF";
	}
	if(inptCursoAsignarArancel==""){
		inptCursoAsignarArancel="NF";
	}
	if(inptSemestreAsignarArancel==""){
		inptSemestreAsignarArancel="NF";
	}

$("input[id=inptCarreraAsignarArancel]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         CodCarreraAsignarArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(CodCarreraAsignarArancel==""){
		alertmensaje("Falto Seleccionar la carrera")
		return
	}
	
	}
	
	
var codFilial="";
$("input[id=inptFilialAsignarArancel]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
		alertmensaje("Falto Seleccionar un filial")
		return
	}
	
	


	var codConcepto="";
$("input[id=inptNombreAsignarArancel]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codConcepto=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codConcepto==""){
		alertmensaje("Falto Seleccionar el concepto")
		return
	}


	var accion = "";
	if (idAbmAsignarArancel != "") {
		accion = "editar";
		if(controlacceso("EDITARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	
	AbmAsignarArancel(inptNombreAsignarArancel,inptTipoArancelAsignarArancel,inptEstadoAsignarArancel,inptAnhoAsignarArancel,inptCursoAsignarArancel,inptMontoAsignarArancel,inptCantidadAsignarArancel,inptTotalAsignarArancel,inptSemestreAsignarArancel,codFilial,CodCarreraAsignarArancel,codConcepto,idAbmAsignarArancel, accion)
}
function AbmAsignarArancel(arancelname,tipo,estado,anho,curso,monto,cantidad,total,semestre,codFilialFk,cod_carreraFK,cod_listadearancelesFk,idAbm, accion) {
	var datos = new FormData();
	 verCerrarEfectoCargando("1")
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idAbm", idAbm)
	datos.append("cod_listadearancelesFk", cod_listadearancelesFk)
	datos.append("cod_carreraFK", cod_carreraFK)
	datos.append("estado", estado)
	datos.append("anho", anho)
	datos.append("curso", curso)
	datos.append("monto", monto)
	datos.append("cantidad", cantidad)
	datos.append("total", total)
	datos.append("semestre", semestre)
	datos.append("tipo", tipo)
	datos.append("codFilialFk", codFilialFk)
	datos.append("arancelname", arancelname)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("2")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("2")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				document.getElementById("inptMontoAsignarArancel").value=""
	document.getElementById("inptCantidadAsignarArancel").value="1"
	document.getElementById("inptTotalAsignarArancel").value=""
	BuscarAbmAsignarArancel()
				}
				} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function CrearArancelMasivo() {
	
	var anho=document.getElementById("inptAnhoAsignarArancelMasivo").value;
	var semestre=document.getElementById("inptSemestreAsignarArancelMasivo").value;
	var curso=document.getElementById("inptCursoAsignarArancelMasivo").value;
	var monto=document.getElementById("inptMontoAsignarArancelMasivo").value;
	var cant=document.getElementById("inptCantidadAsignarArancelMasivo").value;
	var total=document.getElementById("inptTotalAsignarArancelMasivo").value;
	var tipoarancel=document.getElementById("inptTipoArancelAsignarArancelMasivo").value;
	var codFilial="";
$("input[id=inptFilialAsignarArancelMasivo]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
var codcarrera="";
$("input[id=inptCarreraAsignarArancelMasivo]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codcarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	var arancelname =document.getElementById("inptNombreAsignarArancelMasivo").value
		var cod_listadearancelesFk="";
$("input[id=inptNombreAsignarArancelMasivo]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         cod_listadearancelesFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(cod_listadearancelesFk==""){
		alertmensaje("Falto Seleccionar una el arancel")
		return
	}
	
	var datos = new FormData();
	 verCerrarEfectoCargando("1")
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "crearmasivo")
	datos.append("cod_listadearancelesFk", cod_listadearancelesFk)
	datos.append("codcarrera", codcarrera)
	datos.append("codFilial", codFilial)
	datos.append("anho", anho)
	datos.append("semestre", semestre)
	datos.append("curso", curso)
	datos.append("monto", monto)
	datos.append("cant", cant)
	datos.append("total", total)
	datos.append("tipoarancel", tipoarancel)
	datos.append("arancelname", arancelname)
	
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("2")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("2")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmAsignarArancel()

				}
				} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoAsignarArancel(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoAsignarArancel1').checked=true
	document.getElementById('inptSeleccEstadoAsignarArancel2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoAsignarArancel1').checked=false
	document.getElementById('inptSeleccEstadoAsignarArancel2').checked=true
	}
	
}
function inptSeleccTipoAsignarArancel(d){
	if(d=="1"){
	document.getElementById('inptSeleccTipoAsignarArancel1').checked=true
	document.getElementById('inptSeleccTipoAsignarArancel2').checked=false	
	document.getElementById('divBuscarAsignarArancel1').style.display=""
	document.getElementById('divBuscarAsignarArancel2').style.display="none"
	}else{
	document.getElementById('inptSeleccTipoAsignarArancel1').checked=false
	document.getElementById('inptSeleccTipoAsignarArancel2').checked=true
	document.getElementById('divBuscarAsignarArancel1').style.display="none"
	document.getElementById('divBuscarAsignarArancel2').style.display=""
	}
	BuscarListArancelAsignarArancel()
}
var controlordenasignararancel="1"
function ordenasignararancel(d){
	document.getElementById('tdOrdAsignarArancel1').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarArancel2').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarArancel3').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarArancel4').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarArancel5').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarArancel6').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdAsignarArancel1').className="td_registro_orden"
		controlordenasignararancel="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdAsignarArancel2').className="td_registro_orden"
		controlordenasignararancel="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdAsignarArancel3').className="td_registro_orden"
		controlordenasignararancel="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdAsignarArancel4').className="td_registro_orden"
		controlordenasignararancel="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdAsignarArancel5').className="td_registro_orden"
		controlordenasignararancel="5"
	}
	if(d=="6"){
		document.getElementById('tdOrdAsignarArancel6').className="td_registro_orden"
		controlordenasignararancel="6"
	}
	BuscarAbmAsignarArancel()
}
function BuscarAbmAsignarArancel(){
	if(document.getElementById('inptSeleccTipoAsignarArancel1').checked==true){
		BuscarAbmAsignarArancel1()
	}else{
		BuscarAbmAsignarArancel2()
	}
}
function BuscarAbmAsignarArancel1() {
if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	var estado = ""
	if(document.getElementById('inptSeleccEstadoAsignarArancel1').checked==true){
		 estado = "Activo"
	}else{
		 estado = "Inactivo"
	}
	
	var codFilial="";
$("input[id=inptBuscarAsignarArancel1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

		var codCarrera="";
$("input[id=inptBuscarAsignarArancel2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
var codconcepto="";
$("input[id=inptBuscarAsignarArancel3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codconcepto=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	

var semestre=document.getElementById("inptBuscarAsignarArancel4").value
var curso=document.getElementById("inptBuscarAsignarArancel5").value
var anho=document.getElementById("inptBuscarAsignarArancel6").value
var monto=document.getElementById("inptBuscarAsignarArancel7").value
	document.getElementById("divBuscadorAsignarArancel1").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarArancel").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codCarrera": codCarrera,
		"codFilial": codFilial,
		"anho": anho,
		"semestre": semestre,
		"curso": curso,
		"monto": monto,
		"codconcepto": codconcepto,
		"ordenby": controlordenasignararancel,
		"funt": "buscar1"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAsignarArancel1").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarArancel").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarArancel1").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarArancel").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarArancel1").innerHTML = datos_buscados			
                   document.getElementById("lblNroRegistroAsignarArancel").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				    cargarAdminTareas()
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAbmAsignarArancel2() {
if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	var estado = ""
	if(document.getElementById('inptSeleccEstadoAsignarArancel1').checked==true){
		 estado = "Activo"
	}else{
		 estado = "Inactivo"
	}
	
	var codFilial="";
$("input[id=inptBuscarAsignarArancel23]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
var codConcepto="";
$("input[id=inptBuscarAsignarArancel21]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codConcepto=$(match).attr("id")
       } else {
           // value is not in list
       }
});

	document.getElementById("divBuscadorAsignarArancel2").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarArancel").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codFilial": codFilial,
		"codConcepto": codConcepto,
		"ordenby": controlordenasignararancel,
		"funt": "buscar2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAsignarArancel2").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarArancel").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarArancel2").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarArancel").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarArancel2").innerHTML = datos_buscados			
                   document.getElementById("lblNroRegistroAsignarArancel").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				    cargarAdminTareas()
if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

function BuscarVistaAsignarArancel() {

		var tipo="";
		var anho="";
		var curso="";
		var semestre="";
		if(ControlVistaAsignarArancel=="CargarFacturas"){
			if(idCarreraFactura==""){
				alertmensaje("FALTO SELECCIONAR UN ALUMNO")
				return
			}
			 anho=document.getElementById("inptAnhoCargarFacturas").value;
		 curso=document.getElementById("inptCursoCargarFacturas").value;
		 semestre=document.getElementById("inptSemestreCargarFacturas").value;
			tipo="1";
		}else{
			tipo="2";
			idCarreraFactura="";
		}
	var buscador = document.getElementById('inptBuscarVistaAsignarArancel1').value
	document.getElementById("divBuscadorVistaAsignarArancel").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaAsignarArancel").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"cod_carrera": idCarreraFactura,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"tipo": tipo,
		"funt": "buscarvista"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorVistaAsignarArancel").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarArancel").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaAsignarArancel").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarArancel").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
	            Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAsignarArancel").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaAsignarArancel").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function ObtenerdatosVistaAsignarArancel(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'
	if(ControlVistaAsignarArancel=="CargarFacturas"){
	idFkrArancel = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptArancelCargarFacturas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCostoArancelCargarFacturas').value = $(datostr).children('td[id="td_datos_8"]').html();
	seleccionarAranceles(document.getElementById('inptArancelCargarFacturas'))
	}
    document.getElementById('divVistaAsignarArancel').style.display="none";
}
 /*
ALUMNOS
*/
var idAbmAbmAlumnos="";
var ControlVistaAbmAlumnos=""
function verCerrarFrmAbmAlumnos(d){
	document.getElementById("divMinimizadoListadoAlumnos").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("btnCerrarAbmAlumno1").style.display=""
		document.getElementById("btnCerrarAbmAlumno2").style.display="none"

	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmAbmAlumnos").style.display="";
	
	}else{
	document.getElementById("divAbmAbmAlumnos").style.display="none";
	LimpiarCamposAbmAlumnos()
	LimpiarCamposBusquedaAlumnos()
	}
}
function MinimizarVentanaAlumno(){
	document.getElementById("divAbmAbmAlumnos").style.display="none";
	document.getElementById("divMinimizadoListadoAlumnos").style.display="";
}
function NuevoDesdeVistaFrmAbmAlumnos(d){
	if(controlacceso("INSERTARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("btnCerrarAbmAlumno1").style.display="none"
		document.getElementById("btnCerrarAbmAlumno2").style.display=""
		NuevoAbmAlumnosFrm()
		$("div[id=divAbmAbmAlumnos]").fadeIn(500);
	
}
function verCerrarFrmVistaAlumnos(d,v){

		ControlVistaAbmAlumnos=v
		if(d=="1"){
		$("div[id=divVistaAlumnos]").fadeIn(500);
		
	}else{
		$("div[id=divVistaAlumnos]").fadeOut(500);
	}
}
function NuevoAbmAlumnosFrm(){
	if(controlacceso("INSERTARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAbmAlumnos1").style.display="none"
		document.getElementById("divAbmAbmAlumnos2").style.display=""
		LimpiarCamposAbmAlumnos()
}
function EditarAbmAlumnosFrm(){
	if(controlacceso("EDITARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAbmAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAbmAlumnos1").style.display="none"
		document.getElementById("divAbmAbmAlumnos2").style.display=""
		
}
function BuscarAbmAlumnosFrm(){
	if(controlacceso("BUSCARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAbmAlumnos1").style.display=""
		document.getElementById("divAbmAbmAlumnos2").style.display="none"
}
function LimpiarCamposAbmAlumnos(){
	document.getElementById("inptDocumentoAbmAlumnos").value=""
	document.getElementById("inptNombreAbmAlumnos").value=""
	document.getElementById("inptApellidoAbmAlumnos").value=""
	document.getElementById("inptTelefAbmAlumnos").value=""
	document.getElementById("inptWhapAbmAlumnos").value=""
	document.getElementById("inptEmailAbmAlumnos").value=""
	document.getElementById("inptEstadoAbmAlumnos").value="Activo"
	document.getElementById("inptRegistroSeleccionadoAlumno").value=""
	idAbmAbmAlumnos=""
	document.getElementById("btnAbmAbmAlumnos").value="Guardar Datos"
	 document.getElementById("btnEditarDatosAlumnos").style.backgroundColor='#b5f5b7'
     document.getElementById("btnEliminarDatosAlumnos").style.backgroundColor='#ffcece'
}
function LimpiarCamposBusquedaAlumnos(){
	document.getElementById("inptBuscarAbmAlumnos1").value=""
	document.getElementById("inptBuscarAbmAlumnos2").value=""
	document.getElementById("inptBuscarAbmAlumnos3").value=""
	document.getElementById("inptBuscarAbmAlumnos4").value=""
	document.getElementById("inptBuscarAbmAlumnos5").value=""
	document.getElementById("divBuscadorAbmAlumnos").innerHTML=""
}
function ObtenerdatosAbmAbmAlumnos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmAbmAlumnos = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoAlumno').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptDocumentoAbmAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAbmAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptApellidoAbmAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptTelefAbmAlumnos').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptWhapAbmAlumnos').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptEmailAbmAlumnos').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptEstadoAbmAlumnos').value = $(datostr).children('td[id="td_datos_7"]').html();
     document.getElementById("btnAbmAbmAlumnos").value="Editar Datos"
     document.getElementById("btnEditarDatosAlumnos").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosAlumnos").style.backgroundColor='red'



}
function EliminarRegitroAlumnos(){
	if(controlacceso("ELIMINARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAbmAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		
	 document.getElementById("inptEstadoAbmAlumnos").value="Inactivo";
	VerificarDatosAbmAlumnos()
		
	}

}
function VerificarDatosAbmAlumnos(){
	
	var inptDocumentoAbmAlumnos = document.getElementById("inptDocumentoAbmAlumnos").value
	var inptNombreAbmAlumnos = document.getElementById("inptNombreAbmAlumnos").value
	var inptApellidoAbmAlumnos = document.getElementById("inptApellidoAbmAlumnos").value
	var inptTelefAbmAlumnos = document.getElementById("inptTelefAbmAlumnos").value
	var inptWhapAbmAlumnos = document.getElementById("inptWhapAbmAlumnos").value
	var inptEmailAbmAlumnos = document.getElementById("inptEmailAbmAlumnos").value
	var inptEstadoAbmAlumnos = document.getElementById("inptEstadoAbmAlumnos").value


	if(inptDocumentoAbmAlumnos==""){
		document.getElementById("inptDocumentoAbmAlumnos").focus()
		alertmensaje("Falto ingresar el documento del alumno")
		return
	}
	if(inptNombreAbmAlumnos==""){
		document.getElementById("inptNombreAbmAlumnos").focus()
		alertmensaje("Falto ingresar el nombre del alumno")
		return
	}
	
	if(inptApellidoAbmAlumnos==""){
		document.getElementById("inptApellidoAbmAlumnos").focus()
		alertmensaje("Falto ingresar el apellido del alumno")
		return
	}
	
			
	var accion = "";
	if (idAbmAbmAlumnos != "") {
		accion = "editar";
		if(controlacceso("EDITARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmAbmAlumnos(inptDocumentoAbmAlumnos,inptNombreAbmAlumnos,inptApellidoAbmAlumnos,inptTelefAbmAlumnos,inptWhapAbmAlumnos,inptEmailAbmAlumnos,inptEstadoAbmAlumnos,idAbmAbmAlumnos, accion)
}
function AbmAbmAlumnos(ci,nombre,apellido,telef,whatsapp,email,estado,idabm, accion) {
	verCerrarEfectoCargando("1")	
	var datos = new FormData();
	obtener_datos_user();	
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("ci", ci)
	datos.append("nombre", nombre)
	datos.append("apellido", apellido)
	datos.append("telef", telef)
	datos.append("whatsapp", whatsapp)
	datos.append("email", email)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAlumnos.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
		manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {					
                	LimpiarCamposAbmAlumnos()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmAbmAlumnos()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoAlumnos(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoAlumnos1').checked=true
	document.getElementById('inptSeleccEstadoAlumnos2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoAlumnos1').checked=false
	document.getElementById('inptSeleccEstadoAlumnos2').checked=true
	}
}
var controlordenAlumnoabm="2"
function ordenAlumnoabm(d){
	document.getElementById('tdOrdListAlumno1').className="td_registro_orden1"
		document.getElementById('tdOrdListAlumno2').className="td_registro_orden1"
		document.getElementById('tdOrdListAlumno3').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdListAlumno1').className="td_registro_orden"
		controlordenAlumnoabm="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdListAlumno2').className="td_registro_orden"
		controlordenAlumnoabm="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdListAlumno3').className="td_registro_orden"
		controlordenAlumnoabm="3"
	}
	
	BuscarAbmAbmAlumnos()
}
function BuscarAbmAbmAlumnos() {
if(controlacceso("BUSCARALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	var documento = document.getElementById('inptBuscarAbmAlumnos1').value
	var nombre = document.getElementById('inptBuscarAbmAlumnos4').value
	var apellido = document.getElementById('inptBuscarAbmAlumnos5').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoAlumnos1').checked==true){
	estado = "Activo"
	}else{
	estado = "Inactivo"
	}
		var codFilialFk="";
$("input[id=inptBuscarAbmAlumnos2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});
		var codCarreraFk="";
$("input[id=inptBuscarAbmAlumnos3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarreraFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	document.getElementById("divBuscadorAbmAlumnos").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAbmAlumnos").innerHTML=imgCargandoB;
    document.getElementById("inptRegistroTotalAlumno").value="...";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": documento,
		"apellido": apellido,
		"nombre": nombre,
		"estado": estado,
		"codFilialFk": codFilialFk,
		"codCarreraFk": codCarreraFk,
		"ordenby": controlordenAlumnoabm,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorAbmAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroAbmAlumnos").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAbmAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroAbmAlumnos").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
	            Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {			
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAbmAlumnos").innerHTML = datos_buscados
                   document.getElementById("lblNroRegistroAbmAlumnos").innerHTML="Se cargaron "+datos[3]+" registro(s)";
                   document.getElementById("inptRegistroTotalAlumno").value=datos[4];
				   cargarAdminTareas()
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function BuscarVistaAlumnos() {
	var documento = document.getElementById('inptBuscarVistaAlumnos1').value
	var nombre = document.getElementById('inptBuscarVistaAlumnos2').value
	var apellido = document.getElementById('inptBuscarVistaAlumnos3').value
	document.getElementById("divBuscadorVistaAlumnos").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaAlumnos").innerHTML=imgCargandoB;
	 document.getElementById('tdHistorialDetallesMatriculacion').style.display="none"
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": documento,
		"nombre": nombre,
		"apellido": apellido,
		"funt": "buscarvista"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {

		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorVistaAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAlumnos").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAlumnos").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAlumnos").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaAlumnos").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
					   return
				   }
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function BuscarAlumnosPorCi() {
	var buscador = document.getElementById('inptDocumentoAsignarAlumnos').value
	document.getElementById('inptDocumentoAsignarAlumnos').value="..."
	document.getElementById('inptNombreAsignarAlumnos').value="..."
	document.getElementById('inptFilialAsignarAlumnos').value=""
	document.getElementById('inptCarreraAsignarAlumnos').value=""
	document.getElementById('inptAnhoAsignarAlumnos').value=""
	document.getElementById('inptCursoAsignarAlumnos').value=""
	document.getElementById('inptSemestreAsignarAlumnos').value=""
	document.getElementById('tdHistorialDetallesMatriculacion').style.display="none"
	ControlVistaAbmAlumnos="asignaralumnos"
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"funt": "buscarmatriculacion"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {

		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAlumnos").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaAlumnos").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
					   return;
				   }
				   document.getElementById('tdHistorialDetallesMatriculacion').style.display=""
				   ObtenerdatosVistaAlumnos( document.getElementById("tdAlumnoCi"))
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function BuscarAlumnosPorCideudas() {
	var buscador = document.getElementById('inptDocumentoDeudasAlumnos').value
	document.getElementById('inptDocumentoDeudasAlumnos').value="..."
	document.getElementById('inptNombreDeudasAlumnos').value="..."
	ControlVistaAbmAlumnos="cargardeudas"
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"funt": "buscarmatriculacion"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {

		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById('inptDocumentoDeudasAlumnos').value=""
	document.getElementById('inptNombreDeudasAlumnos').value=""
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAlumnos").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaAlumnos").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
					   return;
				   }
				   document.getElementById('tdHistorialDetallesMatriculacion').style.display=""
				   ObtenerdatosVistaAlumnos( document.getElementById("tdAlumnoCi"))
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function ObtenerdatosVistaAlumnos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	if(ControlVistaAbmAlumnos=="asignaralumnos"){
	idAlumnoFkAsignar = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptDocumentoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html()+" "+$(datostr).children('td[id="td_datos_3"]').html();
	BuscarMiHistorialDeMatriculacion()
	}
	if(ControlVistaAbmAlumnos=="reportalumnmatric"){
	idAlumnoFkAsignar = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptDocumentoReportAlumnMatric').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreReportAlumnMatric').value = $(datostr).children('td[id="td_datos_2"]').html()+" "+$(datostr).children('td[id="td_datos_3"]').html();
	}
	if(ControlVistaAbmAlumnos=="cargardeudas"){
	idfkalumnoDeuda = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptDocumentoDeudasAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreDeudasAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html()+" "+$(datostr).children('td[id="td_datos_3"]').html();
	}
    document.getElementById('tdHistorialDetallesMatriculacion').style.display=""
   document.getElementById("divVistaAlumnos").style.display="none";


}

 /*
CARGAR DEUDAS DE ALUMNOS
*/
var idDeudasAlumnos="";
var idfkalumnoDeuda=""
function verCerrarFrmDeudasAlumnos(d){
	document.getElementById("divMinimizadoDeudasAnteriores").style.display="none";
	document.getElementById("divMinimizadoDeudasAnteriores2").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divDeudasAlumnos").style.display="";
	
	}else{
	document.getElementById("divDeudasAlumnos").style.display="none";
	LimpiarCamposDeudasAlumnos()
	LimpiarCamposBusquedaDeudasAlumnos()
	}
}
function MinimizarVentanaDeudasAnteriores(){
	document.getElementById("divDeudasAlumnos").style.display="none";
	document.getElementById("divMinimizadoDeudasAnteriores").style.display="";
	document.getElementById("divMinimizadoDeudasAnteriores2").style.display="";
}

function NuevoDeudasAlumnosFrm(){
	if(controlacceso("BUSCARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmDeudasAlumnos1").style.display="none"
		document.getElementById("divAbmDeudasAlumnos2").style.display=""
		LimpiarCamposDeudasAlumnos()
		
}
function EditarDeudasAlumnosFrm(){
	if(controlacceso("EDITARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmDeudasAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmDeudasAlumnos1").style.display="none"
		document.getElementById("divAbmDeudasAlumnos2").style.display=""
		
}
function BuscarDeudasAlumnosFrm(){
	if(controlacceso("BUSCARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmDeudasAlumnos1").style.display=""
		document.getElementById("divAbmDeudasAlumnos2").style.display="none"
}
function LimpiarCamposDeudasAlumnos(){
	document.getElementById("inptDocumentoDeudasAlumnos").value=""
	document.getElementById("inptNombreDeudasAlumnos").value=""
	document.getElementById("inptTotalDeudasAlumnos").value=""
	document.getElementById("inptRegistroSeleccionadoDeudasAlumno").value=""
	idAbmDeudasAlumnos=""
	document.getElementById("btnAbmDeudasAlumnos").value="Guardar Datos"
	 document.getElementById("btnEditarDatosDeudasAlumnos").style.backgroundColor='#b5f5b7'
     document.getElementById("btnEliminarDatosDeudasAlumnos").style.backgroundColor='#ffcece'
}
function LimpiarCamposBusquedaDeudasAlumnos(){
	document.getElementById("inptBuscarDeudasAlumnos2").value=""
	document.getElementById("inptBuscarDeudasAlumnos4").value=""
	document.getElementById("inptBuscarDeudasAlumnos1").value=""
	document.getElementById("inptBuscarDeudasAlumnos3").value=""
	document.getElementById("inptTotalDeudaAlumno").value=""
	document.getElementById("inptRegistroTotalDeudaAlumno").value=""
	document.getElementById("divBuscadorDeudasAlumnos").innerHTML=""

}
function ObtenerdatosAbmDeudasAlumnos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmDeudasAlumnos = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoDeudasAlumno').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptDocumentoDeudasAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreDeudasAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptTotalDeudasAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCarreraDeudasAlumnos').value = $(datostr).children('td[id="td_datos_5"]').html();
	idfkalumnoDeuda = $(datostr).children('td[id="td_datos_4"]').html();
     document.getElementById("btnAbmDeudasAlumnos").value="Editar Datos"
     document.getElementById("btnEditarDatosDeudasAlumnos").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosDeudasAlumnos").style.backgroundColor='red'



}
function EliminarRegitroAlumnos(){
		if(controlacceso("ELIMINARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmDeudasAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		
	 document.getElementById("inptEstadoDeudasAlumnos").value="Inactivo";
	VerificarDatosDeudasAlumnos()
		
	}

}
function VerificarDatosDeudasAlumnos(){
	
	var inptTotalDeudasAlumnos = document.getElementById("inptTotalDeudasAlumnos").value
		var codCarreraFk="";
$("input[id=inptCarreraDeudasAlumnos]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarreraFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	if(inptTotalDeudasAlumnos==""){
		document.getElementById("inptTotalDeudasAlumnos").focus()
		alertmensaje("Falto ingresar el total de la deuda")
		return
	}
	if(idfkalumnoDeuda==""){
			alertmensaje("Falto seleccionar al alumno")
		return
	}
	
	
	var accion = "";
	if (idAbmDeudasAlumnos != "") {
		accion = "editar";
		if(controlacceso("EDITARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	AbmDeudasAlumnos(idfkalumnoDeuda,codCarreraFk,inptTotalDeudasAlumnos,idAbmDeudasAlumnos,accion)
}
function AbmDeudasAlumnos(idalumnoFK,codcarrerfk,monto,idabm,accion) {
	verCerrarEfectoCargando("1")	
	var datos = new FormData();
	obtener_datos_user();	
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("monto", monto)
	datos.append("idalumnoFK", idalumnoFK)
	datos.append("Cod_listadecarrerasFk", codcarrerfk)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMDeudasAlumnos.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
		manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {					
                	LimpiarCamposDeudasAlumnos()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmDeudasAlumnos()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function BuscarAbmDeudasAlumnos() {
if(controlacceso("BUSCARDEUDASALUMNOS","accion")==false){
	//SIN PERMISO
	  return;
		}
	var documento = document.getElementById('inptBuscarDeudasAlumnos1').value
	var nombre = document.getElementById('inptBuscarDeudasAlumnos3').value
	
		var codFilialFk="";
$("input[id=inptBuscarDeudasAlumnos2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilialFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});
		
	document.getElementById("divBuscadorDeudasAlumnos").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroDeudasAlumnos").innerHTML=imgCargandoB;
    document.getElementById("inptRegistroTotalDeudaAlumno").value="...";
    document.getElementById("inptTotalDeudaAlumno").value="...";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": documento,
		"nombre": nombre,
		"codFilialFk": codFilialFk,
		"ordenby": 1,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMDeudasAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorDeudasAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroDeudasAlumnos").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorDeudasAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroDeudasAlumnos").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
	            Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {			
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorDeudasAlumnos").innerHTML = datos_buscados
                   document.getElementById("lblNroRegistroDeudasAlumnos").innerHTML="Se cargaron "+datos[3]+" registro(s)";
                   document.getElementById("inptRegistroTotalDeudaAlumno").value=datos[4];
                   document.getElementById("inptTotalDeudaAlumno").value=datos[5];
				   cargarAdminTareas()
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
/*
ASIGNAR ALUMNOS
*/
var idAlumnoFkAsignar="";
var idAbmAsignarAlumnos="";
var CodCarreraFkAsignarAlumnos="";
var ControlVistaAsignarAlumnos=""
function verCerrarFrmAsignarAlumnos(d){
		document.getElementById("divMinimizadoMatriculacionAlumnos").style.display="none";
		  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmMatricularAlumnos").style.display="";
	
	}else{
	document.getElementById("divAbmMatricularAlumnos").style.display="none";
	LimpiarCamposAsignarAlumnos()
	}
}
function MinimizarVentanaMatricularAlumnos(){
	document.getElementById("divAbmMatricularAlumnos").style.display="none";
	document.getElementById("divMinimizadoMatriculacionAlumnos").style.display="";
}
function verCerrarFrmAsignarAlumnos2(d){
	
	document.getElementById("divAbmAsignarAlumnos").style.display="none";
	
}
var ControlVistaMatriculados="";
function verCerrarFrmVistaAsignarAlumnos(d,v){
	if(controlacceso("BUSCARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(d=="1"){
		var f = new Date();
	   document.getElementById('inptBuscarVistaAsignarAlumnos5').value = f.getFullYear();
		ControlVistaMatriculados=v;
		$("div[id=divVistaAsignarAlumnos]").fadeIn(500);
		document.getElementById("inptBuscarVistaAsignarAlumnos1").value=""
		document.getElementById("inptBuscarVistaAsignarAlumnos2").value=""
		document.getElementById("inptBuscarVistaAsignarAlumnos3").value=""
		document.getElementById("inptBuscarVistaAsignarAlumnos4").value=""
		document.getElementById("inptBuscarVistaAsignarAlumnos6").value=""
		document.getElementById("inptBuscarVistaAsignarAlumnos7").value=""
		document.getElementById("inptBuscarVistaAsignarAlumnos7").value=""
		document.getElementById("lblNroRegistroVistaAsignarAlumnos").innerHTML=""
		document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML=""
	}else{
		$("div[id=divVistaAsignarAlumnos]").fadeOut(500);
	}
}
function verCerrarFrmVistaAsignarAlumnosInformes(d,v){
	
	if(d=="1"){
		ControlVistaMatriculados=v;
		
		$("div[id=divVistaAsignarAlumnosInformes]").fadeIn(500);
	}else{
		$("div[id=divVistaAsignarAlumnosInformes]").fadeOut(500);
	}
}
function NuevoAsignarAlumnosFrm(){
	if(controlacceso("INSERTARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarAlumnos1").style.display="none"
		document.getElementById("divAbmAsignarAlumnos2").style.display=""
		LimpiarCamposAsignarAlumnos()
}
function EditarAsignarAlumnosFrm(){
	if(controlacceso("EDITARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarAlumnos1").style.display="none"
		document.getElementById("divAbmAsignarAlumnos2").style.display=""
		
}
function BuscarAsignarAlumnosFrm(){
	if(controlacceso("BUSCARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAsignarAlumnos1").style.display=""
		document.getElementById("divAbmAsignarAlumnos2").style.display="none"
}
function LimpiarCamposAsignarAlumnos(){
	document.getElementById("inptDocumentoAsignarAlumnos").value=""
	document.getElementById("inptNombreAsignarAlumnos").value=""
	document.getElementById("inptFilialAsignarAlumnos").value=""
	document.getElementById("inptCarreraAsignarAlumnos").value=""
	document.getElementById("inptCursoAsignarAlumnos").value="1"
	document.getElementById("inptFilialAsignarAlumnos").value=""
	document.getElementById("inptAnhoAsignarAlumnos").value=""
	document.getElementById("inptTurnoAsignarAlumnos").value=""
	document.getElementById("inptSeccionAsignarAlumnos").value=""
	
	var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	document.getElementById('inptAnhoAsignarAlumnos').value = f.getFullYear();
	if( accesosuser["MODIFICARANHO"]["accion"]=="SI")
	{
	document.getElementById("inptAnhoAsignarAlumnos").disabled=false
		}else{
			document.getElementById("inptAnhoAsignarAlumnos").disabled=true
		}
		if( accesosuser["MODIFICARCURSO"]["accion"]=="SI")
	{
		document.getElementById("inptCursoAsignarAlumnos").disabled=false
		}else{
			document.getElementById("inptCursoAsignarAlumnos").disabled=true
		}
	idAbmAsignarAlumnos=""
	CodCarreraFkAsignarAlumnos=""
	idAlumnoFkAsignar=""
	
	document.getElementById("tdHistorialDetallesMatriculacion").style.display="none";
}
function ObtenerdatosAbmAsignarAlumnos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
	
	
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarAlumnos = $(datostr).children('td[id="td_id_1"]').html();
	idAlumnoFkAsignar = $(datostr).children('td[id="td_id_2"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptDocumentoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCarreraAsignarAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html()+" - "+$(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptSemestreAsignarAlumnos').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptCursoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptAnhoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptTurnoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptFechaInicioAsignarAlumnos').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptFechaFinAsignarAlumnos').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptEstadoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptFilialAsignarAlumnos').value = $(datostr).children('td[id="td_datos_11"]').html();
     document.getElementById("btnAbmAsignarAlumnos").value="Editar Datos"



}
function EliminarRegitroAsingarAlumnos(){
		if(controlacceso("ELIMINARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAbmAsignarAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		
	 document.getElementById("inptEstadoAsignarAlumnos").value="Inactivo";
	VerificarDatosAsignarAlumnos()
		
	}

}
function CargarCarrerasAsingarAlumnos(){
		
		var codFilial="";
$("input[id=inptFilialAsignarAlumnos]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
		return
	}
	
	document.getElementById("ListCarrerasMatricular").innerHTML=""
	document.getElementById("inptCarreraAsignarAlumnos").value=""
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasMatricular").innerHTML=""
			verCerrarEfectoCargando("2")
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasMatricular").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasMatricular").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
function CargarCarrerasEnBuscarArancel(){
		
		var codFilial="";
$("input[id=inptBuscarAsignarArancel1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

    if(codFilial==""){
	$("input[id=inptBuscarAsignarArancel2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptBuscarAsignarArancel2]").attr("list","ListCarrerasBuscarArancel")
	}
	
	document.getElementById("ListCarrerasBuscarArancel").innerHTML=""
	document.getElementById("inptBuscarAsignarArancel2").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasBuscarArancel").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasBuscarArancel").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasBuscarArancel").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}

function CargarCarrerasEnCargarArancelMasivo(){
		
		var codFilial="";
$("input[id=inptFilialAsignarArancelMasivo]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
	$("input[id=inptCarreraAsignarArancelMasivo]").attr("list","ListCarreras")
		return
	}else{
	$("input[id=inptCarreraAsignarArancelMasivo]").attr("list","ListCarrerasCargarArancel")	
	}
	
	document.getElementById("ListCarrerasCargarArancel").innerHTML=""
	document.getElementById("inptCarreraAsignarArancelMasivo").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasCargarArancel").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasCargarArancel").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasCargarArancel").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}

function CargarCarrerasEnAnularFactura(){
		
		var codFilial="";
$("input[id=inptFilialAnularFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML=""
	document.getElementById("inptCarreraAnularFacturas").value=""
if(codFilial==""){
	$("input[id=inptCarreraAnularFacturas]").attr("list","ListCarreras")
		return
	}else{
	$("input[id=inptCarreraAnularFacturas]").attr("list","ListCarreraAnularFactura")	
	}
	
	document.getElementById("ListCarreraAnularFactura").innerHTML=""
	
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarreraAnularFactura").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarreraAnularFactura").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarreraAnularFactura").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
function CargarCarrerasEnBuscarMatriculados(){
		
		var codFilial="";
$("input[id=inptReporAlumnoMatriculado1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
	$("input[id=inptReporAlumnoMatriculado2]").attr("List","ListCarreras")
		return
	}else{
		$("input[id=inptReporAlumnoMatriculado2]").attr("List","ListCarrerasBuscarMatriculados")
	}
	
	document.getElementById("ListCarrerasBuscarMatriculados").innerHTML=""
	document.getElementById("inptReporAlumnoMatriculado2").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasBuscarMatriculados").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasBuscarMatriculados").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasBuscarMatriculados").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
function CargarCarrerasEnBuscarFacturasCargadas(){
		
		var codFilial="";
$("input[id=inptBuscarFacturasCargadas1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
$("input[id=inptBuscarFacturasCargadas2]").attr("List","ListCarreras")
		return
	}else{
		$("input[id=inptBuscarFacturasCargadas2]").attr("List","ListCarrerasBuscarFacturasCargadas")

	}
	
	document.getElementById("ListCarrerasBuscarFacturasCargadas").innerHTML=""
	document.getElementById("inptBuscarFacturasCargadas2").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasBuscarFacturasCargadas").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasBuscarFacturasCargadas").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasBuscarFacturasCargadas").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
function CargarCarrerasEnBalancesPorCriterio(){
		
		var codFilial="";
$("input[id=inptBuscarBalanceGeneralCriterio6]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
	$("input[id=inptBuscarBalanceGeneralCriterio7]").attr("List","ListCarreras")
		return
	}else{
		$("input[id=inptBuscarBalanceGeneralCriterio7]").attr("List","ListCarrerasBuscarBalanceCriterio")
	}
	
	document.getElementById("ListCarrerasBuscarBalanceCriterio").innerHTML=""
	document.getElementById("inptBuscarBalanceGeneralCriterio7").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"funt": "buscarcarreraporfilial2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarCarrera.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("ListCarrerasBuscarBalanceCriterio").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasBuscarBalanceCriterio").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasBuscarBalanceCriterio").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}

function habilitarSemestrePorCursoSeleccionado(d){
	var datos=d.value
	
if(datos=="1"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='1'>1</option>"
	+"<option value='2'>2</option>"
}	
if(datos=="2"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='3'>3</option>"
	+"<option value='4'>4</option>"
}
if(datos=="3"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='5'>5</option>"
	+"<option value='6'>6</option>"
}
if(datos=="4"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='7'>7</option>"
	+"<option value='8'>8</option>"
}
if(datos=="5"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='9'>9</option>"
	+"<option value='10'>10</option>"
}
if(datos=="6"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='11'>11</option>"
	+"<option value='12'>12</option>"
}
if(datos=="Culminado"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='Culminado'>Culminado</option>"

}	
}
function VerificarDatosAsignarAlumnos(){
	
	
	var inptAnhoAsignarAlumnos=document.getElementById("inptAnhoAsignarAlumnos").value
	var inptSemestreAsignarAlumnos=document.getElementById("inptSemestreAsignarAlumnos").value
	var inptCursoAsignarAlumnos=document.getElementById("inptCursoAsignarAlumnos").value
	var inptTurnoAsignarAlumnos=document.getElementById("inptTurnoAsignarAlumnos").value
	var inptSeccionAsignarAlumnos=document.getElementById("inptSeccionAsignarAlumnos").value
	var inptConvalidacionAsignarAlumnos=document.getElementById("inptConvalidacionAsignarAlumnos").value
	
	

	if(inptAnhoAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el año")
		return
	}
	if(inptSemestreAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el semestre")
		return
	}
	if(inptCursoAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el curso")
		return
	}
	if(inptTurnoAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el turno")
		return
	}
	if(inptSeccionAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el seccion")
		return
	}
	if(idAlumnoFkAsignar==""){
		verCerrarFrmVistaAlumnos('1','asignaralumnos')
		alertmensaje("Falto seleccionar un alumnos")
		return
	}
	
	
		
$("input[id=inptCarreraAsignarAlumnos]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         CodCarreraFkAsignarAlumnos=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(CodCarreraFkAsignarAlumnos==""){
		alertmensaje("Falto seleccionar la carrera")
		return
	}

	
	
	
	
	var accion = "nuevo";
		if(controlacceso("INSERTARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	AbmAsignarAlumnos(inptConvalidacionAsignarAlumnos,inptSeccionAsignarAlumnos,inptTurnoAsignarAlumnos,inptAnhoAsignarAlumnos,inptSemestreAsignarAlumnos,inptCursoAsignarAlumnos,CodCarreraFkAsignarAlumnos,idAlumnoFkAsignar, accion)
}
function AbmAsignarAlumnos(convalidacion,seccion,turno,anho,semestre,curso,cod_carreraFK,idalumnoFk, accion){
	var datos = new FormData();
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idAbm", "")
	datos.append("estado", "Activo")
	datos.append("cod_carreraFK", cod_carreraFK)
	datos.append("idalumnoFk", idalumnoFk)
	datos.append("anho", anho)
	datos.append("semestre", semestre)
	datos.append("curso", curso)
	datos.append("seccion", seccion)
	datos.append("turno", turno)
	datos.append("convalidacion", convalidacion)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					LimpiarCamposAsignarAlumnos()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function verCerrarFrmHistorialMatriculacion(d){
	if(controlacceso("BUSCARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	
	if(d=="1"){
	document.getElementById("divHistorialMatriculacion").style.display="";
	BuscarMiHistorialDeMatriculacionb()
	}else{
	document.getElementById("divHistorialMatriculacion").style.display="none";
	}
}
function BuscarMiHistorialDeMatriculacionb() {
if(controlacceso("BUSCARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}	
	document.getElementById("divBuscadorHistorialMatriculacion").innerHTML = imgCargandoA   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAlumnoFkAsignar,
		"funt": "buscarMiHistorial2"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorHistorialMatriculacion").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorHistorialMatriculacion").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorHistorialMatriculacion").innerHTML = datos_buscados
					          cargarAdminTareas()

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}

function MasFiltrosAsignarAlumnos(datos){
	if(document.getElementById("divMasFiltrosAsignarAlumnos").style.display==""){
		document.getElementById("divMasFiltrosAsignarAlumnos").style.display="none"
		datos.src="/GoodTechnologyEPNSA/iconos/filtros.png";
	}else{
		$("div[id=divMasFiltrosAsignarAlumnos]").slideDown(500);
		datos.src="/GoodTechnologyEPNSA/iconos/filtros2.png";
	}
}
function checkestadoHistorialMatriculados(d){
	if(d=="1"){
	document.getElementById('checkestadoHistorialMatriculados1').checked=true
	document.getElementById('checkestadoHistorialMatriculados2').checked=false	
	}else{
	document.getElementById('checkestadoHistorialMatriculados1').checked=false
	document.getElementById('checkestadoHistorialMatriculados2').checked=true
	}
	 BuscarMiHistorialDeMatriculacion()
}
function BuscarMiHistorialDeMatriculacion() {
if(controlacceso("BUSCARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}	
		if(document.getElementById('checkestadoHistorialMatriculados1').checked==true){
			var estado="Activo";
		}else{
			var estado="Inactivo";
		}
	document.getElementById("divBuscadorCarrerasCursadas").innerHTML = imgCargandoA   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAlumnoFkAsignar,
		"codFilial": idFkFilialAlumnoMatriculado,
		"estado": estado,
		"funt": "buscarMiHistorial"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorCarrerasCursadas").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorCarrerasCursadas").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorCarrerasCursadas").innerHTML = datos_buscados
					          cargarAdminTareas()

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}

function EditarCursoSemestreAnho(datos) {
if(controlacceso("EDITARMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}	
	var controledit=$(datos).attr("name")
	var idMatriculacion=$(datos).attr("id")
	var valor=datos.value
	if(valor=="") {
		alertmensaje("EL VALOR NO PUEDE IR VACIO")
		return
	}
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idAbm": idMatriculacion,
		"funt": "editamatriculacion",
		"controledit": controledit,
		"valor": valor
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			verCerrarEfectoCargando("2")		
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			verCerrarEfectoCargando("2")			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
alertmensaje("DATOS EDITADOS CORRECTAMENTE")
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
var controlordenasignaralumnos="1"
function ordenreportasignaralumnos(d){
	document.getElementById('tdOrdReportAsignarAlumnos1').className="td_registro_orden1"
		document.getElementById('tdOrdReportAsignarAlumnos2').className="td_registro_orden1"
		document.getElementById('tdOrdReportAsignarAlumnos3').className="td_registro_orden1"
		document.getElementById('tdOrdReportAsignarAlumnos4').className="td_registro_orden1"
		document.getElementById('tdOrdReportAsignarAlumnos5').className="td_registro_orden1"
		document.getElementById('tdOrdReportAsignarAlumnos6').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdReportAsignarAlumnos1').className="td_registro_orden"
		controlordenasignaralumnos="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportAsignarAlumnos2').className="td_registro_orden"
		controlordenasignaralumnos="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportAsignarAlumnos3').className="td_registro_orden"
		controlordenasignaralumnos="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportAsignarAlumnos4').className="td_registro_orden"
		controlordenasignaralumnos="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdReportAsignarAlumnos5').className="td_registro_orden"
		controlordenasignaralumnos="5"
	}
	if(d=="6"){
		document.getElementById('tdOrdReportAsignarAlumnos6').className="td_registro_orden"
		controlordenasignaralumnos="6"
	}
	
	BuscarVistaAsignarAlumnos() 
	
}

function BuscarVistaAsignarAlumnos() {

	var documento = document.getElementById('inptBuscarVistaAsignarAlumnos1').value
	var alumno = document.getElementById('inptBuscarVistaAsignarAlumnos2').value
	var curso = document.getElementById('inptBuscarVistaAsignarAlumnos4').value
	var anho = document.getElementById('inptBuscarVistaAsignarAlumnos5').value
	var semestre = document.getElementById('inptBuscarVistaAsignarAlumnos6').value
		var codCarrera="";
$("input[id=inptBuscarVistaAsignarAlumnos3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	var codFilial="";
$("input[id=inptBuscarVistaAsignarAlumnos7]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
   
    if(anho==""){
		  alertmensaje("FALTO SELECCIONAR UN AÑO")
	}
	
	document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaAsignarAlumnos").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": documento,
		"alumno": alumno,
		"curso": curso,
		"anho": anho,
		"semestre": semestre,
		"codCarrera": codCarrera,
		"codFilial": codFilial,
		"ordenby": controlordenasignaralumnos,
		"funt": "buscarvista"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarAlumnos").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarAlumnos").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML = datos_buscados
                   document.getElementById("lblNroRegistroVistaAsignarAlumnos").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function BuscarVistaAsignarAlumnosInformes() {

	var buscador = document.getElementById('inptBuscarVistaAsignarAlumnosInformes1').value
	document.getElementById("divBuscadorVistaAsignarAlumnosInformes").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaAsignarAlumnosInformes").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"funt": "buscarvistinformes"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorVistaAsignarAlumnosInformes").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarAlumnosInformes").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaAsignarAlumnosInformes").innerHTML = ''
			document.getElementById("lblNroRegistroVistaAsignarAlumnosInformes").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaAsignarAlumnosInformes").innerHTML = datos_buscados			
                   document.getElementById("lblNroRegistroVistaAsignarAlumnosInformes").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				   }

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function controldeFechasFacturas(d){
if(controlacceso("CAMBIARFECHAFACTURA","accion")==false){


var f = new Date();
var mes1 =f.getMonth()+1
if(mes1<10){
mes1="0"+mes1;
}
var fechados = new Date(d.value);
var mes2 =fechados.getMonth()+1
if(mes2<10){
mes2="0"+mes2;
}	
if(mes2!=mes1){
	alertmensaje("LA FECHA NO SE ENCUENTRA EN EL INTERVALO CORRECTO")
	var f = new Date();
	var dia =f.getDate()
	if(dia<10){
		dia="0"+dia;
	}
	var mes =f.getMonth()+1
	if(mes<10){
		mes="0"+mes;
	}
	var hora =f.getHours()
	if(hora<10){
		hora="0"+hora;
	}
	var min =f.getMinutes()
	if(min<10){
		min="0"+min;
	}
    document.getElementById('inptFechaCargarFacturas').value=f.getFullYear()+"-"+mes+"-"+dia;
}
	}	
	
}
function ObtenerdatosVistaAsignarAlumnos(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});
	datostr.className = 'tableRegistroSelec'
	if(ControlVistaMatriculados=="CargarFacturas"){
	idAsignarAlumnosFk = $(datostr).children('td[id="td_id_1"]').html();
		idAlumnosFacturaFk = $(datostr).children('td[id="td_id_2"]').html();
	idFilialFactura = $(datostr).children('td[id="td_id_4"]').html();
	idCarreraFactura = $(datostr).children('td[id="td_id_3"]').html();
	document.getElementById('inptDocumentoCargarFacturas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAlumnoCargarFacturas').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCarreraCargarFacturas').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptSemestreCargarFacturas').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptCursoCargarFacturas').value = $(datostr).children('td[id="td_datos_4"]').html();
		if(document.getElementById('inptCursoCargarFacturas').value=="CULMINADO"){
		document.getElementById("checkBuscarTipoArancelCargarFactura1").checked=false
		document.getElementById("checkBuscarTipoArancelCargarFactura2").checked=true
		document.getElementById("checkBuscarTipoArancelCargarFactura1").disabled=true
		document.getElementById("checkBuscarTipoArancelCargarFactura2").disabled=true
	}else{
		document.getElementById("checkBuscarTipoArancelCargarFactura1").disabled=false
		document.getElementById("checkBuscarTipoArancelCargarFactura2").disabled=false
	}
	document.getElementById('inptAnhoCargarFacturas').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptTurnoCargarFacturas').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptSeccionCargarFacturas').value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptFilialCargarFacturas').value = $(datostr).children('td[id="td_datos_10"]').html();
	anhoarancel=document.getElementById("inptAnhoCargarFacturas").value;
        cursoarancel=document.getElementById("inptCursoCargarFacturas").value;
		semestrearancel=document.getElementById("inptSemestreCargarFacturas").value;
	var f = new Date();
	var dia =f.getDate()
	if(dia<10){
		dia="0"+dia;
	}
	var mes =f.getMonth()+1
	if(mes<10){
		mes="0"+mes;
	}
	var hora =f.getHours()
	if(hora<10){
		hora="0"+hora;
	}
	var min =f.getMinutes()
	if(min<10){
		min="0"+min;
	}
    document.getElementById('inptFechaCargarFacturas').value=f.getFullYear()+"-"+mes+"-"+dia;
	buscarnroexpedicion()
	buscarhistorialpagodesdefactura()
	 BuscarArancelesAPagarList()
    }
	if(ControlVistaMatriculados=="CobrarAranceles"){
	idAsignarAlumnosFk = $(datostr).children('td[id="td_id_1"]').html();
	idAlumnosFacturaFk = $(datostr).children('td[id="td_id_2"]').html();
	idFilialFactura = $(datostr).children('td[id="td_id_4"]').html();
	idCarreraFactura = $(datostr).children('td[id="td_id_3"]').html();
	document.getElementById('inptDocAlumnosCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAlumnoCobrarAranceles').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCarreraCobrarAranceles').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptSemestreCobrarAranceles').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptCursoCobrarAranceles').value = $(datostr).children('td[id="td_datos_4"]').html();
	
		if(document.getElementById('inptCursoCobrarAranceles').value=="CULMINADO"){
		
		document.getElementById("inptTipoArancelCobrarAranceles").disabled=true
		document.getElementById("inptTipoArancelCobrarAranceles").value="Generales"
	}else{
		
		document.getElementById("inptTipoArancelCobrarAranceles").disabled=false
	}
	document.getElementById('inptAnhoCobrarAranceles').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptTurnoCobrarAranceles').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptSeccionCobrarAranceles').value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptFilialCobrarAranceles').value = $(datostr).children('td[id="td_datos_10"]').html();
	CursoCobrarArancel=document.getElementById("inptCursoCobrarAranceles").value
	anhoCobrarArancel=document.getElementById("inptAnhoCobrarAranceles").value
	semestreCobrarArancel=document.getElementById("inptSemestreCobrarAranceles").value
	document.getElementById('inptCodArancelCobrarAranceles').value=""
document.getElementById('inptNomArancelCobrarAranceles').value=""
document.getElementById('inptCantArancelCobrarAranceles').value=""
document.getElementById('inptPrecioArancelCobrarAranceles').value=""
document.getElementById('inptDescuentoArancelCobrarAranceles').value=""
document.getElementById('inptTotalArancelCobrarAranceles').value=""
document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById('btnMasDetalleVenta').style.display='none';
	document.getElementById("btnMasInfoAlumnosCobranzas").style="background-color: #f45145;"
	buscarnroexpedicionb()
	BuscarArancelesCobrarAranceles()
	
	facturaNombreAlumno=$(datostr).children('td[id="td_datos_2"]').html();
 facturaCiAlumno=$(datostr).children('td[id="td_datos_1"]').html();
 facturaTelefAlumno=$(datostr).children('td[id="td_datos_12"]').html();

    }
	
	if(ControlVistaMatriculados=="ConsultaIndiFacturas"){
	idAlumnosFkConsultaIndi = $(datostr).children('td[id="td_id_2"]').html();
	document.getElementById('inptCiAlumnoConsultaIndi').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreApellidoIndi').value = $(datostr).children('td[id="td_datos_2"]').html();

    }
document.getElementById('divVistaAsignarAlumnos').style.display="none";
document.getElementById('divVistaAsignarAlumnosInformes').style.display="none";


}
function buscarcarrerascursadas() {
	document.getElementById("divBuscadorCarrerasCursadas").innerHTML = imgCargandoA
   	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAlumnoFkAsignar,
		"funt": "buscarmateriascursadas"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorCarrerasCursadas").innerHTML = ''
			},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorCarrerasCursadas").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorCarrerasCursadas").innerHTML = datos_buscados              
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
function verCerrarFrmReportAlumnosMatriculados(d){
	document.getElementById("divMinimizadoAlumnoMatriculado").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERINFORMEMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divReportAlumMatri").style.display="";
	
	}else{
	document.getElementById("divReportAlumMatri").style.display="none";
	limipiarCamposBusquedaReportMatriculados()
	}
}
function MinimizarVentanaReportMatriculados(){
	document.getElementById("divReportAlumMatri").style.display="none";
	document.getElementById("divMinimizadoAlumnoMatriculado").style.display="";
}
function limipiarCamposBusquedaReportMatriculados(){
		document.getElementById("inptReporAlumnoMatriculado1").value="";
		document.getElementById("inptReporAlumnoMatriculado2").value="";
		document.getElementById("inptReporAlumnoMatriculado3").value="";
		document.getElementById("inptReporAlumnoMatriculado4").value="";
			var f = new Date();
	    document.getElementById('inptReporAlumnoMatriculado5').value=f.getFullYear()
		document.getElementById("inptReporAlumnoMatriculado6").value="";
		document.getElementById("inptReporAlumnoMatriculado7").value="";
		document.getElementById("inptRegistroReportAlumnMatric").value="";
		document.getElementById("inptSeleccionadoReportAlumnMatric").value="";
		document.getElementById('btnMasDetallesAlumnosMatriculados').style.backgroundColor="#b5f5b7";
		document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML="";

}
function ControlDatosBuscadosReportAlumnMatric(datos){
	if(datos.value==""){
		document.getElementById("inptNombreReportAlumnMatric").value="";
	}
}
function verCerrarConfigFiltrosAlumnoMatric(d,t){
	if(d=="1"){
		document.getElementById("divFiltrosAlumnosmatriculados").style.display=""
	}else{
		document.getElementById("divFiltrosAlumnosmatriculados").style.display="none"
	}
	
}
var controlordenreportmatriculacion="1"
function ordenreportmatricula(d){
	document.getElementById('tdOrdReportMatri1').className="td_registro_orden1"
		document.getElementById('tdOrdReportMatri2').className="td_registro_orden1"
		document.getElementById('tdOrdReportMatri3').className="td_registro_orden1"
		document.getElementById('tdOrdReportMatri4').className="td_registro_orden1"
		document.getElementById('tdOrdReportMatri5').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdReportMatri1').className="td_registro_orden"
		controlordenreportmatriculacion="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportMatri2').className="td_registro_orden"
		controlordenreportmatriculacion="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportMatri3').className="td_registro_orden"
		controlordenreportmatriculacion="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportMatri4').className="td_registro_orden"
		controlordenreportmatriculacion="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdReportMatri5').className="td_registro_orden"
		controlordenreportmatriculacion="5"
	}
	BuscarReportAlumnosMatriculados()
}
function checkestadoAlumnosMatriculados(d){
	if(d=="1"){
	document.getElementById('checkestadoAlumnosMatriculados1').checked=true
	document.getElementById('checkestadoAlumnosMatriculados2').checked=false	
	}else{
	document.getElementById('checkestadoAlumnosMatriculados1').checked=false
	document.getElementById('checkestadoAlumnosMatriculados2').checked=true
	}
	 
}
function BuscarReportAlumnosMatriculados() {
if(controlacceso("INFORMEMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	var codFilial="";		
$("input[id=inptReporAlumnoMatriculado1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
if(codFilial==""){
	$("input[id=inptReporAlumnoMatriculado2]").attr("list","ListCarreras")
}

	var codCarrera="";		
$("input[id=inptReporAlumnoMatriculado2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});

    var nrodocumento=document.getElementById("inptReporAlumnoMatriculado3").value
    var curso=document.getElementById("inptReporAlumnoMatriculado6").value
    var anho=document.getElementById("inptReporAlumnoMatriculado5").value
	if(anho==""){
		alertmensaje("EL AÑO NO PUEDE QUEDAR VACIO")
		return
	}
    var semestre=document.getElementById("inptReporAlumnoMatriculado7").value
    var nombre=document.getElementById("inptReporAlumnoMatriculado4").value
	document.getElementById("divFiltrosAlumnosmatriculados").style.display="none"
	document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportAlumnMatric").value="...";
	if(document.getElementById('checkestadoAlumnosMatriculados1').checked==true){
		var estado="Activo"
	}else{
		var estado="Inactivo"
	}
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nrodocumento": nrodocumento,
		"codFilial": codFilial,
		"codCarrera": codCarrera,
		"curso": curso,
		"anho": anho,
		"semestre": semestre,
		"nombre": nombre,
		"estado": estado,
		"ordenby": controlordenreportmatriculacion,
		"funt": "buscarreport"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML = ""
    document.getElementById("inptRegistroReportAlumnMatric").value="";
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML = ""
    document.getElementById("inptRegistroReportAlumnMatric").value="";
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML = datos_buscados
document.getElementById('btnMasDetallesAlumnosMatriculados').style.backgroundColor="#b5f5b7";
document.getElementById('inptSeleccionadoReportAlumnMatric').value="";
					 cargarAdminTareas()
    document.getElementById("inptRegistroReportAlumnMatric").value=datos[3];
	if(datos_buscados==""){
		alertmensaje("NO SE ECONTRARON REGISTRO")
	}
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}

function buscarAnhoSqlConsulta() {
	document.getElementById("DivBuscarSeleccionarAnho").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscaranhosql"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("DivBuscarSeleccionarAnho").innerHTML = ""  
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("DivBuscarSeleccionarAnho").innerHTML = ""    
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("DivBuscarSeleccionarAnho").innerHTML =datos_buscados	

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}
var idFkFilialAlumnoMatriculado=""
function ObtenerdatosReportAlumnosMatriculados(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
	datostr.className = 'tableRegistroSelec'
	
	idAlumnoFkAsignar = $(datostr).children('td[id="td_id_2"]').html();
	idFkFilialAlumnoMatriculado = $(datostr).children('td[id="td_id_4"]').html();
	document.getElementById('inptDocumentoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('lblNombreAlumnoMatriculadoDetalles').innerHTML = $(datostr).children('td[id="td_datos_1"]').html()+" - "+$(datostr).children('td[id="td_datos_2"]').html()+" ("+$(datostr).children('td[id="td_datos_10"]').html()+")";
	document.getElementById('inptSeleccionadoReportAlumnMatric').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptFilialAsignarAlumnos').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptCarreraAsignarAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('btnMasDetallesAlumnosMatriculados').style.backgroundColor="";
	BuscarMiHistorialDeMatriculacion()
	
   
}
function VerRegistroSeleccionadoReportAlumnMatric(){
	if(controlacceso("VERINFORMEMATRICULACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	if(idAlumnoFkAsignar==""){
			alertmensaje("Falto seleccionar un registro")
		return
	}
	document.getElementById("divAbmAsignarAlumnos").style.display="";
	document.getElementById("imgCerrarDatosMatric1").style.display="none";
	document.getElementById("imgCerrarDatosMatric2").style.display="";
}
var idAsignarAlumnosFk="";
var idAlumnosFacturaFk="";
var idCarreraFactura="";
var idFilialFactura="";
var idFkrArancel="";
var ControlNroFactura="";
var idAbmCargaFactura="";
/*CARGAR FACTURAS*/
function verCerrarFrmCargarFacturas(d){
	document.getElementById("divMinimizadoCargarFacturas").style.display="none";
	document.getElementById("divMinimizadoCargarFacturas2").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmCargarFacturas").style.display="";
	
	}else{
	document.getElementById("divAbmCargarFacturas").style.display="none";
	LimpiarCamposCargaFactura()
	}
}
function MinimizarVentanaCargarFactura(){
	document.getElementById("divAbmCargarFacturas").style.display="none";
	document.getElementById("divMinimizadoCargarFacturas").style.display="";
	document.getElementById("divMinimizadoCargarFacturas2").style.display="";
}


function buscarnroexpedicion() {
		document.getElementById("inptPuntoExpedicionCargarFacturas").innerHTML = '<option>Cargando...</option>'
		document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = '<option>Cargando...</option>'
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idFilialFactura": idFilialFactura,
		"idCarreraFactura": idCarreraFactura,
		"funt": "buscarpuntoexpedicion"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptPuntoExpedicionCargarFacturas").innerHTML = ''
			document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			verCerrarEfectoCargando("2")
			return false
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptPuntoExpedicionCargarFacturas").innerHTML = ''			
				document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = ''			
			verCerrarEfectoCargando("2")
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
	document.getElementById("inptPuntoExpedicionCargarFacturas").innerHTML = datos_buscados
	document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = datos_buscados
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscarnroexpedicionb() {
		document.getElementById("inptPuntoExpedicionCobrarAranceles").innerHTML = '<option>Cargando...</option>'
		document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = '<option>Cargando...</option>'
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idFilialFactura": idFilialFactura,
		"idCarreraFactura": idCarreraFactura,
		"funt": "buscarpuntoexpedicion"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptPuntoExpedicionCobrarAranceles").innerHTML = ''
			document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			
			return false
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptPuntoExpedicionCobrarAranceles").innerHTML = ''			
				document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = ''			
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
	document.getElementById("inptPuntoExpedicionCobrarAranceles").innerHTML = datos_buscados
	document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = datos_buscados
				buscarnrodefactura()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscarnroexpedicionanularfactura() {
		document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = '<option>Cargando...</option>'
				var codFilial="";
$("input[id=inptFilialAnularFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
		var codCarrera="";
$("input[id=inptCarreraAnularFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idFilialFactura": codFilial,
		"idCarreraFactura": codCarrera,
		"funt": "buscarpuntoexpedicion"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			verCerrarEfectoCargando("2")
			return false
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = ''			
			verCerrarEfectoCargando("2")
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
	document.getElementById("inptPuntoExpedicionAnularFacturas").innerHTML = datos_buscados
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function cambiarFocusControlNroFactura(){
	document.getElementById("inptArancelCargarFacturas").focus();
}
function cambiarFocusControlNroAnularFactura(){
	document.getElementById("VerificarDatosCargaFactura").focus();
}
function cambiarFocusControlNroFacturab(){
	document.getElementById("inptNomArancelCobrarAranceles").focus();
}


function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}
function controlarnrofacturaexist() {

	var	valor=document.getElementById("inptPuntoExpedicionCargarFacturas").value
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionCargarFacturas]").children(":selected").attr("id")
	if(valor==""){
		return
	}
	var nrofacturacontrol=document.getElementById("inptFacturaNroCargarFacturas").value
	var nrofactura=document.getElementById("inptFacturaNroCargarFacturas").value
	nrofacturacontrol=Number(nrofacturacontrol)
		nrofactura=zeroFill(nrofactura, 7) 
	document.getElementById("inptFacturaNroCargarFacturas").value=nrofactura
	if(nrofactura==""){
		return
	}
	nrofactura=valor+"-"+nrofactura
document.getElementById("inptControlCargarFacturas").value="..."	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nrofacturacontrol": nrofacturacontrol,
		"nrofactura": nrofactura,
		"codPuntoExpe": codPuntoExpe,
		"funt": "controlnrofactura"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptControlCargarFacturas").value = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptControlCargarFacturas").value = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
					ControlNroFactura = datos[3];					
					if(ControlNroFactura!=""){
					alertmensaje("NRO DE FACTURA FUERA DE RANGO")
					document.getElementById("inptFacturaNroCargarFacturas").style.backgroundColor="#FF5722"
					document.getElementById("inptFacturaNroCargarFacturas").style.color="#fff"
					document.getElementById("inptFacturaNroCargarFacturas").value="";
					document.getElementById("inptControlCargarFacturas").value="";
					
					return
					}else{
						document.getElementById("inptFacturaNroCargarFacturas").style.backgroundColor=""
						document.getElementById("inptFacturaNroCargarFacturas").style.color=""
					}
					if(datos_buscados>1){
					document.getElementById("inptControlCargarFacturas").style.backgroundColor="#ff1504"
					document.getElementById("inptControlCargarFacturas").style.color="#fff"
					alertmensaje("ESTE NRO DE FACTURA YA ESTA REGISTRADO DENTRO DEL SISTEMA")
					}else{
					document.getElementById("inptControlCargarFacturas").style.backgroundColor=""
					document.getElementById("inptControlCargarFacturas").style.color=""
					}
					document.getElementById("inptControlCargarFacturas").value = datos_buscados
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function controlarnroAnularfacturaexist() {

	var	valor=document.getElementById("inptPuntoExpedicionAnularFacturas").value
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionAnularFacturas]").children(":selected").attr("id")
	if(valor==""){
		return
	}
	var nrofacturacontrol=document.getElementById("inptFacturaNroAnularFacturas").value
	var nrofactura=document.getElementById("inptFacturaNroAnularFacturas").value
	nrofacturacontrol=Number(nrofacturacontrol)
		nrofactura=zeroFill(nrofactura, 7) 
	document.getElementById("inptFacturaNroAnularFacturas").value=nrofactura
	if(nrofactura==""){
		return
	}
	nrofactura=valor+"-"+nrofactura
document.getElementById("inptControlAnularFacturas").value="..."	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nrofacturacontrol": nrofacturacontrol,
		"nrofactura": nrofactura,
		"codPuntoExpe": codPuntoExpe,
		"funt": "controlnrofactura"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptControlAnularFacturas").value = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptControlAnularFacturas").value = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
					ControlNroFactura = datos[3];					
					if(ControlNroFactura!=""){
					alertmensaje("NRO DE FACTURA FUERA DE RANGO")
					document.getElementById("inptFacturaNroAnularFacturas").style.backgroundColor="#FF5722"
					document.getElementById("inptFacturaNroAnularFacturas").style.color="#fff"
					document.getElementById("inptFacturaNroAnularFacturas").value="";
					document.getElementById("inptControlAnularFacturas").value="";
					
					return
					}else{
						document.getElementById("inptFacturaNroAnularFacturas").style.backgroundColor=""
						document.getElementById("inptFacturaNroAnularFacturas").style.color=""
					}
					if(datos_buscados>1){
					document.getElementById("inptControlAnularFacturas").style.backgroundColor="#ff1504"
					document.getElementById("inptControlAnularFacturas").style.color="#fff"
					alertmensaje("ESTE NRO DE FACTURA YA ESTA REGISTRADO DENTRO DEL SISTEMA")
					}else{
					document.getElementById("inptControlAnularFacturas").style.backgroundColor=""
					document.getElementById("inptControlAnularFacturas").style.color=""
					}
					document.getElementById("inptControlAnularFacturas").value = datos_buscados
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
var anhoarancel="";
var cursoarancel="";
var semestrearancel="";
function seleccionarAranceles(d){
	var control=""
	var costo="0"
	$("input[id=inptArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         control=$(match).attr("class")
         costo=$(match).attr("style")
       } else {
           // value is not in list
       }
	})
	
	
	document.getElementById("inptCostoArancelCargarFacturas").value=costo
	document.getElementById("divDetallesFacturas").style.display="none"
	document.getElementById("divDetallesDerecho").style.display="none"
	document.getElementById("ptituloinformativocargarfactura").style.display="none"
	document.getElementById("inptArancelCargarFacturasDeudasAnterior").value=""
	document.getElementById("inptCatedraArancelCargarFacturas").value=""
	if(control=="DERECHO DE EXAMEN 1"){
		document.getElementById("divDetallesDerecho").style.display=""
		 BuscarCatedraSelectparaCargarFactura() 
		//buscarmateriasderechoexamenaranceles1()			
	}
	if(control=="CUOTA"){
		//document.getElementById("divDetallesFacturas").style.display=""
		//buscarCuotasaranceles1()		
	}
	
	if(control=="DEUDAS ANTERIORES"){
		
		document.getElementById("divDetallesFacturas").style.display=""
		document.getElementById("ptituloinformativocargarfactura").style.display=""
		
		// anhoarancel=document.getElementById("inptAnhoCargarFacturas").value;
        // cursoarancel=document.getElementById("inptCursoCargarFacturas").value;
		// semestrearancel=document.getElementById("inptSemestreCargarFacturas").value;
		
		if(semestrearancel>1){
         document.getElementById("inptSemestreCargarFacturas").value=Number(semestrearancel)-1;
		document.getElementById("inptAnhoCargarFacturas").value=Number(anhoarancel)-1;
        document.getElementById("inptCursoCargarFacturas").value=Number(cursoarancel)-1;
		}
        
		document.getElementById("inptAnhoCargarFacturas").disabled=false
		document.getElementById("inptCursoCargarFacturas").disabled=false
		document.getElementById("inptSemestreCargarFacturas").disabled=false
		document.getElementById("inptAnhoCargarFacturas").className="input3"
		document.getElementById("inptCursoCargarFacturas").className="input3"
		document.getElementById("inptSemestreCargarFacturas").className="input3"
		document.getElementById("inptAnhoCargarFacturas").style.backgroundColor="#ff1504"
		document.getElementById("inptCursoCargarFacturas").style.backgroundColor="#ff1504"
		document.getElementById("inptSemestreCargarFacturas").style.backgroundColor="#ff1504"
		document.getElementById("inptCursoCargarFacturas").style.color="#fff"
		document.getElementById("inptAnhoCargarFacturas").style.color="#fff"
		document.getElementById("inptSemestreCargarFacturas").style.color="#fff"
		
		
		//buscarDeudasAnterior1()			
	}else{
		if(anhoarancel!="" && cursoarancel!="" && semestrearancel!=""){
		document.getElementById("inptAnhoCargarFacturas").value=anhoarancel;
		document.getElementById("inptCursoCargarFacturas").value=cursoarancel;
		document.getElementById("inptSemestreCargarFacturas").value=semestrearancel;
		}
		document.getElementById("inptAnhoCargarFacturas").disabled=true
		document.getElementById("inptCursoCargarFacturas").disabled=true
		document.getElementById("inptSemestreCargarFacturas").disabled=true
		document.getElementById("inptAnhoCargarFacturas").className="inputdisabled3"
		document.getElementById("inptCursoCargarFacturas").className="inputdisabled3"
		document.getElementById("inptSemestreCargarFacturas").className="inputdisabled3"
		document.getElementById("inptAnhoCargarFacturas").style.backgroundColor=""
		document.getElementById("inptCursoCargarFacturas").style.backgroundColor=""
		document.getElementById("inptSemestreCargarFacturas").style.backgroundColor=""
		document.getElementById("inptCursoCargarFacturas").style.color=""
		document.getElementById("inptAnhoCargarFacturas").style.color=""
		document.getElementById("inptSemestreCargarFacturas").style.color=""
		document.getElementById("inptArancelCargarFacturasDeudasAnterior").value=""
	}
	
	document.getElementById("inptMontoCargarFacturas").disabled=false 
    document.getElementById("inptMontoCargarFacturas").value=0
}

function buscarDeudasAnterior1() {

var curso=document.getElementById("inptCursoCargarFacturas").value
var anho=document.getElementById("inptAnhoCargarFacturas").value
var semestre=document.getElementById("inptSemestreCargarFacturas").value
var carrera=document.getElementById("inptCarreraCargarFacturas").value
var codArancel="";
	$("input[id=inptArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
	})

document.getElementById("divDetallesCargarFacturas").innerHTML=imgCargandoA	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idAsignarAlumnosFk": idAlumnosFacturaFk,
		"funt": "buscarcuentas"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMDeudasAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("divDetallesCargarFacturas").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("divDetallesCargarFacturas").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
						document.getElementById("divDetallesCargarFacturas").innerHTML = datos_buscados	
					if(datos_buscados==""){
					//alertmensaje("DATOS NO ENCONTRADO")
					
					return
					
					}
					
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscarmateriasderechoexamenaranceles1() {

var curso=document.getElementById("inptCursoCargarFacturas").value
var anho=document.getElementById("inptAnhoCargarFacturas").value
var semestre=document.getElementById("inptSemestreCargarFacturas").value
var carrera=document.getElementById("inptCarreraCargarFacturas").value
var codArancel="";
	$("input[id=inptArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
	})

document.getElementById("divDetallesCargarFacturas").innerHTML=imgCargandoA	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"curso": curso,
		"anho": anho,
		"semestre": semestre,
		"carrera": carrera,
		"codArancel": codArancel,
		"funt": "buscarmateriaapagar"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("divDetallesCargarFacturas").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("divDetallesCargarFacturas").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
						document.getElementById("divDetallesCargarFacturas").innerHTML = datos_buscados	
					if(datos_buscados==""){
					//alertmensaje("DATOS NO ENCONTRADO")
					
					return
					
					}
					
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscarmateriasderechoexamenaranceles2() {

var curso=document.getElementById("inptCursoCobrarAranceles").value
var anho=document.getElementById("inptAnhoCobrarAranceles").value
var semestre=document.getElementById("inptSemestreCobrarAranceles").value
var carrera=document.getElementById("inptCarreraCobrarAranceles").value
var codArancel=document.getElementById('inptCodArancelCobrarAranceles').value
	
document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML=imgCargandoA	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"curso": curso,
		"anho": anho,
		"semestre": semestre,
		"carrera": carrera,
		"codArancel": codArancel,
		"funt": "buscarmateriaapagar"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarMalla.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
						document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML = datos_buscados	
					if(datos_buscados==""){
					//alertmensaje("DATOS NO ENCONTRADO")
					
					return
					
					}
					
					$("input[name=checkboxDerechoExamenArancel1]").each(function(i, elementohtml1){
	var idlistadodematerias1=$(elementohtml1).attr("id")
$("input[name=checkboxDerechoExamenArancel3]").each(function(i, elementohtml2){
	var idlistadodematerias2=$(elementohtml2).attr("id")
	if(idlistadodematerias1==idlistadodematerias2){
	 elementohtml1.disabled=true
	}
});

	   });
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscarCuotasaranceles1() {
var codArancel="";
	$("input[id=inptArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
	})

document.getElementById("divDetallesCargarFacturas").innerHTML=imgCargandoA	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idcursosalumnoFk": idAsignarAlumnosFk,
		"codArancel": codArancel,
		"funt": "buscarcuotasapagadas"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("divDetallesCargarFacturas").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("divDetallesCargarFacturas").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
						document.getElementById("divDetallesCargarFacturas").innerHTML = datos_buscados	
					if(datos_buscados==""){
					//alertmensaje("DATOS NO ENCONTRADO")
					
					return
					
					}
					
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscarCuotasaranceles2() {

var codArancel=document.getElementById('inptCodArancelCobrarAranceles').value
document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML=imgCargandoA	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idcursosalumnoFk": idAsignarAlumnosFk,
		"codArancel": codArancel,
		"funt": "buscarcuotasapagadas"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
						document.getElementById("divBuscadorVistaArancelesCobrar").innerHTML = datos_buscados	
						

						
					if(datos_buscados==""){
					//alertmensaje("DATOS NO ENCONTRADO")
					
					return
					
					}
					
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function controlarnrofacturaexistb() {

	var	valor=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").text()
	//var	valor=document.getElementById("inptPuntoExpedicionCobrarAranceles").value
	var codPuntoExpe=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").attr("id")
	if(valor==""){
		return
	}
	var nrofacturacontrol=document.getElementById("inptFacturaNroCobrarAranceles").value
	var nrofactura=document.getElementById("inptFacturaNroCobrarAranceles").value
	nrofacturacontrol=Number(nrofacturacontrol)
	if(nrofactura==""){
		return
	}
	nrofactura=valor+"-"+nrofactura
document.getElementById("inptControlCobrarAranceles").value="..."	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nrofacturacontrol": nrofacturacontrol,
		"nrofactura": nrofactura,
		"codPuntoExpe": codPuntoExpe,
		"funt": "controlnrofactura"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			document.getElementById("inptControlCobrarAranceles").value = ''
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptControlCobrarAranceles").value = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	

					var datos_buscados = datos[2];
					ControlNroFactura = datos[3];					
								
					if(ControlNroFactura!=""){
					alertmensaje("NRO DE FACTURA FUERA DE RANGO")
					document.getElementById("inptFacturaNroCobrarAranceles").style.backgroundColor="#FF5722"
					document.getElementById("inptFacturaNroCobrarAranceles").style.color="#fff"
					document.getElementById("inptFacturaNroCobrarAranceles").value="";
					document.getElementById("inptControlCobrarAranceles").value="";
					return
					}else{
						document.getElementById("inptFacturaNroCobrarAranceles").style.backgroundColor=""
						document.getElementById("inptFacturaNroCobrarAranceles").style.color=""
					}
					document.getElementById("inptControlCobrarAranceles").value = datos_buscados
				
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function cargarDetallesFacturas(){
	
	var inptNombreFacturas = document.getElementById('inptArancelCargarFacturas').value
	var inptProductoVenta = document.getElementById('inptProductoVenta').value
	var inptCantProductoVenta = document.getElementById('inptCantProductoVenta').value
	var cantidadventa = cantidadDescuentoVenta
	var DetallesVenta = DetallesProductoVenta
	var inpTotalCostoVenta = document.getElementById('inpTotalCostoVenta').value
	var inptCostoProductoVenta = document.getElementById('inptCostoProductoVenta').value
	var inptComisionVenta = document.getElementById('inptComisionVenta').value
	var inptlocalVenta = document.getElementById('inptlocalVenta').value
	var inptObservacionDetalleVenta = document.getElementById('inptObservacionDetalleVenta').value
	var inptDescuentoProductoVenta = document.getElementById('inptDescuentoProductoVenta').value
	
	var CuotaNro =$("select[id=inpTSeleccCosto]").children(":selected").attr("id")
	if (idFkProducto == "") {
		alertmensaje("FALTO SELECCIONAR UN PRODUCTO", "#")
		return false;
	}
	
	var pagina="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>"
+"<tr id='tbSelecRegistro' onclick='SeleccionarProductoVentaOffline(this)'  name='tdDetalleVentaOffline'>"
+"<td id='td_id_1' style='display:none'>"+idFkProducto+"</td>"
+"<td  id='td_datos_8' style='display:none'>"+inptCodProductoVenta+"</td>"
+"<td  id='td_datos_1' style='width:20%;'>"+inptProductoVenta+"</td>"
+"<td  id='td_datos_3' style='width:10%'>"+inptCostoProductoVenta+"</td>"
+"<td  id='td_datos_4' style='width:5%'>"+inptCantProductoVenta+"("+DetallesVenta+")</td>"
+"<td  id='td_datos_9' style='width:10%'>"+inptDescuentoProductoVenta+"</td>"
+"<td  id='td_datos_5' style='width:10%'>"+inpTotalCostoVenta+"</td>"
+"<td  id='td_datos_7' style='width:10%'>"+inptComisionVenta+"</td>"
+"<td  id='td_datos_10' style='display:none'>"+CuotaNro+"</td>"
+"<td  id='td_datos_11' style='display:none'>"+cantidadventa+"</td>"
+"<td  id='td_datos_12' style='display:none'>"+DetallesVenta+"</td>"
+"</tr>"
+"</table>"
document.getElementById("table_abm_detalle_venta").innerHTML+=pagina;
var totalVenta=0;
var SubtotalVenta=0;
var totalDescuento=0;
var control=0;
$("tr[name=tdDetalleVentaOffline]").each(function(i, elementohtml){
var total=$(elementohtml).children('td[id="td_datos_5"]').html();
var descuento=$(elementohtml).children('td[id="td_datos_9"]').html();
total=QuitarSeparadorMilValor(total)
descuento=QuitarSeparadorMilValor(descuento)
totalVenta=Number(totalVenta)+Number(total)
SubtotalVenta=Number(SubtotalVenta)+(Number(total)+Number(descuento))
totalDescuento=Number(totalDescuento)+Number(descuento)
control=control+1;
	   });
	
	
}
function verCerrarConfirmaciondeAnulacion(d){
	if(d=="1"){
	document.getElementById("divConfimarAnulaciondeFactura").style.display=""
	document.getElementById("inptFilialAnularFacturas").value=document.getElementById("inptFilialCargarFacturas").value
	document.getElementById("inptCarreraAnularFacturas").value=document.getElementById("inptCarreraCargarFacturas").value
	document.getElementById("inptFechaAnularFacturas").value=document.getElementById("inptFechaCargarFacturas").value
	}else{
	document.getElementById("divConfimarAnulaciondeFactura").style.display="none"
	}
}
function verCerrarConfirmaciondeAnulacion2(){
	
	document.getElementById("divConfimarAnulaciondeFactura").style.display=""
	document.getElementById("inptFilialAnularFacturas").value=document.getElementById("inptFilialCobrarAranceles").value
	document.getElementById("inptCarreraAnularFacturas").value=document.getElementById("inptCarreraCobrarAranceles").value
	document.getElementById("inptFechaAnularFacturas").value=document.getElementById("inptFechaCobrarAranceles").value
	
}
function VerificarDatosCargaFactura(){
	
	var inptNombreAsignarCarrera = document.getElementById("inptNombreAsignarCarrera").value
	var inptFechaCargarFacturas = document.getElementById("inptFechaCargarFacturas").value
	var inptMontoCargarFacturas = document.getElementById("inptMontoCargarFacturas").value
	var inptControlCargarFacturas = document.getElementById("inptControlCargarFacturas").value
	var inptFacturaNroCargarFacturas = document.getElementById("inptFacturaNroCargarFacturas").value
	var nrofactura = document.getElementById("inptFacturaNroCargarFacturas").value
	var inptCursoCargarFacturas = document.getElementById("inptCursoCargarFacturas").value
	var inptAnhoCargarFacturas = document.getElementById("inptAnhoCargarFacturas").value
	var inptSemestreCargarFacturas = document.getElementById("inptSemestreCargarFacturas").value
	var estadofactura = "Activo"

		if(nrofactura==""){
			document.getElementById("inptFacturaNroCargarFacturas").focus()
		alertmensaje("Nro de Factura inválido")
		return
		}
	var	valor=document.getElementById("inptPuntoExpedicionCargarFacturas").value
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionCargarFacturas]").children(":selected").attr("id")
	if(valor==""){
		alertmensaje("Falto ingresar el nro de la factura")
		return
	}
	if(ControlNroFactura!=""){
					alertmensaje("Nro de factura fuera de rango")
					document.getElementById("inptFacturaNroCargarFacturas").style.backgroundColor="#FF5722"
					document.getElementById("inptFacturaNroCargarFacturas").style.color="#fff"
					document.getElementById("inptFacturaNroCargarFacturas").value="";
					document.getElementById("inptControlCargarFacturas").value="";
					return
	}else{
						document.getElementById("inptFacturaNroCargarFacturas").style.backgroundColor=""
							document.getElementById("inptFacturaNroCargarFacturas").style.color=""
		}
	
  var nrofactura=valor+"-"+nrofactura
	if(inptControlCargarFacturas=="..."){
		document.getElementById("inptControlCargarFacturas").focus()
		alertmensaje("Control de nro de factura inválido")
		return
	}
	if(inptMontoCargarFacturas==""){
		document.getElementById("inptMontoCargarFacturas").focus()
		alertmensaje("Falto ingresar el monto de la factura")
		return
	}
	if(idAsignarAlumnosFk==""){
		alertmensaje("Falto seleccionar el alumno")
		return
	}
	if(inptFechaCargarFacturas==""){
		document.getElementById("inptFechaCargarFacturas").focus()
		alertmensaje("Falto seleccionar la fecha")
		return
	}
	var codArancel="";
	$("input[id=inptArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
	})

	if(codArancel==""){
	if(idFkrArancel==""){
		
		alertmensaje("Falto seleccionar el arancel")
		return
	}
	}else{
		idFkrArancel=codArancel
	}
	

	var accion = "";
	if (idAbmCargaFactura != "") {
		accion = "editar";
		if(controlacceso("EDITARFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("INSERTAFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	
	var detallesfactura=document.getElementById("inptArancelCargarFacturas").value
	
	AbmCargarFactura(inptFacturaNroCargarFacturas,estadofactura,detallesfactura,inptCursoCargarFacturas,inptAnhoCargarFacturas,inptSemestreCargarFacturas,idAbmCargaFactura,nrofactura,inptControlCargarFacturas,inptMontoCargarFacturas,idAsignarAlumnosFk, inptFechaCargarFacturas,'Activo',idFkrArancel,codPuntoExpe,accion)
}

function VerificarDatosAnularFactura(){
	
	var inptFechaAnularFacturas = document.getElementById("inptFechaAnularFacturas").value
	var inptAnhoAnularFacturas = document.getElementById("inptAnhoAnularFacturas").value
	var inptCursoAnularFacturas = document.getElementById("inptCursoAnularFacturas").value
	var inptSemestreAnularFacturas = document.getElementById("inptSemestreAnularFacturas").value
	var inptFacturaNroAnularFacturas = document.getElementById("inptFacturaNroAnularFacturas").value
	var nrofactura = document.getElementById("inptFacturaNroAnularFacturas").value
	var inptControlAnularFacturas = document.getElementById("inptControlAnularFacturas").value
	var estadofactura = "Anulado"

		if(nrofactura==""){
			document.getElementById("inptFacturaNroAnularFacturas").focus()
		alertmensaje("Nro de Factura inválido")
		return
		}
	var	valor=document.getElementById("inptPuntoExpedicionAnularFacturas").value
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionAnularFacturas]").children(":selected").attr("id")
	if(valor==""){
		alertmensaje("Falto ingresar el nro de la factura")
		return
	}
	if(ControlNroFactura!=""){
					alertmensaje("Nro de factura fuera de rango")
					document.getElementById("inptFacturaNroAnularFacturas").style.backgroundColor="#FF5722"
					document.getElementById("inptFacturaNroAnularFacturas").style.color="#fff"
					document.getElementById("inptFacturaNroAnularFacturas").value="";
					document.getElementById("inptControlAnularFacturas").value="";
					return
	}else{
						document.getElementById("inptFacturaNroAnularFacturas").style.backgroundColor=""
							document.getElementById("inptFacturaNroAnularFacturas").style.color=""
		}
	
  var nrofactura=valor+"-"+nrofactura
	if(inptControlAnularFacturas=="..."){
		document.getElementById("inptControlAnularFacturas").focus()
		alertmensaje("Control de nro de factura inválido")
		return
	}
	var idAlumno="0"
	
	if(inptFechaAnularFacturas==""){
		document.getElementById("inptFechaAnularFacturas").focus()
		alertmensaje("Falto seleccionar la fecha")
		return
	}
	var codArancel="-1";
	var accion = "";
    accion = "nuevo";
	if(controlacceso("INSERTAFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
	}
	
	
	var detallesfactura="FACTURA ANULADA"
	
	AbmCargarFactura(inptFacturaNroAnularFacturas,estadofactura,detallesfactura,inptCursoAnularFacturas,inptAnhoAnularFacturas,inptSemestreAnularFacturas,"",nrofactura,inptControlAnularFacturas,"0",idAlumno, inptFechaAnularFacturas,'Activo',codArancel,codPuntoExpe,accion)
}
function AbmCargarFactura(controlnrofactura,estadofactura,detallesfactura,curso,anho,semetre,idfacturaspagadas,nrofactura,cf,monto,idcursosalumnoFk, fecha,estado,cod_arancelFk,puntoexpedicionfk,accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	var controlcod=0;
	$("input[name=checkboxDerechoExamenArancel1]").each(function(i, elementohtml){
if ($(elementohtml).is(':checked') ){
	var codCarrera=$(elementohtml).attr("id")
	datos.append("cod_fk_detalle_"+controlcod, codCarrera)
	datos.append("tipo_"+controlcod, "DERECHOEXAMEN")
	controlcod=controlcod+1;
}
	 });
	 
	 
	 var codArancelextra="";
	$("input[id=inptArancelCargarFacturasDeudasAnterior]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancelextra=$(match).attr("id")
       } else {
           // value is not in list
       }
	})
	var codMateriaextra="";
	$("input[id=inptCatedraArancelCargarFacturas]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codMateriaextra=$(match).attr("id")
       } else {
           // value is not in list
       }
	})
	
	if(codArancelextra!=""){
		datos.append("cod_fk_detalle_"+controlcod, codArancelextra)
	datos.append("tipo_"+controlcod, "DEUDAANTERIOR")
	detallesfactura=detallesfactura+" - " + $("select[id=inptArancelCargarFacturasDeudasAnterior]").children(":selected").text()
	controlcod=controlcod+1;
	}
	if(codMateriaextra!=""){
		datos.append("cod_fk_detalle_"+controlcod, codMateriaextra)
	datos.append("tipo_"+controlcod, "DERECHOEXAMEN")
	controlcod=controlcod+1;
	detallesfactura=detallesfactura+" - "+document.getElementById("inptCatedraArancelCargarFacturas").value
	}
	 
	 
	controlcod=controlcod-1;
	
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idfacturaspagadas)
	datos.append("nrofactura", nrofactura)
	datos.append("cf", cf)
	datos.append("monto", monto)
	datos.append("idcursosalumnoFk", idcursosalumnoFk)
	datos.append("fecha", fecha)
	datos.append("estado", estado)
	datos.append("cod_arancelFk", cod_arancelFk)
	datos.append("puntoexpedicionfk", puntoexpedicionfk)
	datos.append("curso", curso)
	datos.append("anho", anho)
	datos.append("semetre", semetre)
	datos.append("controlcodext", controlcod)
	datos.append("detallesfactura", detallesfactura)
	datos.append("estadofactura", estadofactura)
	datos.append("controlnrofactura", controlnrofactura)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
		manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
				 
	document.getElementById("inptAnhoCargarFacturas").disabled=true
		document.getElementById("inptCursoCargarFacturas").disabled=true
		document.getElementById("inptSemestreCargarFacturas").disabled=true
		document.getElementById("inptAnhoCargarFacturas").className="inputdisabled3"
		document.getElementById("inptCursoCargarFacturas").className="inputdisabled3"
		document.getElementById("inptSemestreCargarFacturas").className="inputdisabled3"
		document.getElementById("inptAnhoCargarFacturas").style.backgroundColor=""
		document.getElementById("inptCursoCargarFacturas").style.backgroundColor=""
		document.getElementById("inptSemestreCargarFacturas").style.backgroundColor=""
		document.getElementById("inptCursoCargarFacturas").style.color=""
		document.getElementById("inptAnhoCargarFacturas").style.color=""
		document.getElementById("inptSemestreCargarFacturas").style.color=""
		document.getElementById("inptArancelCargarFacturasDeudasAnterior").value=""
		document.getElementById("divDetallesFacturas").style.display="none"
	document.getElementById("ptituloinformativocargarfactura").style.display="none"
	document.getElementById("divDetallesDerecho").style.display="none"
	ControlNroFactura="";
	idFkrArancel="";
	document.getElementById("inptFacturaNroCargarFacturas").style.backgroundColor=""
	document.getElementById("inptFacturaNroCargarFacturas").style.color=""
	document.getElementById("inptMontoCargarFacturas").value=""
	document.getElementById("inptArancelCargarFacturas").value=""
	document.getElementById("inptCostoArancelCargarFacturas").value=""
	document.getElementById("inptCatedraArancelCargarFacturas").value=""
	document.getElementById("inptFacturaNroCargarFacturas").value=""
	document.getElementById("inptControlCargarFacturas").value=""
	document.getElementById("inptControlCargarFacturas").style.backgroundColor=""
	document.getElementById("inptControlCargarFacturas").style.color=""
	
	document.getElementById("inptFechaAnularFacturas").value=""
	document.getElementById("inptFacturaNroAnularFacturas").value=""
	document.getElementById("inptControlAnularFacturas").value=""	
	document.getElementById("inptControlAnularFacturas").value=""
	document.getElementById("inptControlAnularFacturas").style.backgroundColor=""
	document.getElementById("inptControlAnularFacturas").style.color=""
	
	buscarhistorialpagodesdefactura()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				 }

			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function LimpiarCamposCargaFactura(){
	
	document.getElementById("inptDocumentoCargarFacturas").value=""
	document.getElementById("inptNombreAlumnoCargarFacturas").value=""
	document.getElementById("inptCarreraCargarFacturas").value=""
	document.getElementById("inptCursoCargarFacturas").value=""
	document.getElementById("inptAnhoCargarFacturas").value=""
	document.getElementById("inptSemestreCargarFacturas").value=""
	document.getElementById("inptTurnoCargarFacturas").value=""
	document.getElementById("inptSeccionCargarFacturas").value=""
	document.getElementById("inptFilialCargarFacturas").value=""
	
	document.getElementById("inptPuntoExpedicionCargarFacturas").innerHTML=""
	document.getElementById("divDetallesCargarFacturas").innerHTML=""
	document.getElementById("divDetallesFacturas").style.display="none"
	document.getElementById("inptArancelCargarFacturas").value=""
	document.getElementById("inptCostoArancelCargarFacturas").value=""
	document.getElementById("inptMontoCargarFacturas").value=""
	document.getElementById("inptFechaCargarFacturas").value=""
	document.getElementById("inptMontoCargarFacturas").value=""
	document.getElementById("inptControlCargarFacturas").value=""
	ControlNroFactura="";
	idAsignarAlumnosFk="";
	idFkrArancel="";
	anhoarancel="";
    cursoarancel="";
   semestrearancel="";
	document.getElementById("inptFacturaNroCargarFacturas").style.backgroundColor=""
	document.getElementById("inptFacturaNroCargarFacturas").style.color=""
}
function checkBuscarTipoArancelCargarFactura(d){
	if(document.getElementById("inptCursoCargarFacturas").value=="CULMINADO"){
		return
	}
	if(d=="1"){
	document.getElementById('checkBuscarTipoArancelCargarFactura1').checked=true
	document.getElementById('checkBuscarTipoArancelCargarFactura2').checked=false	
	BuscarArancelesAPagarList()
	}else{
	document.getElementById('checkBuscarTipoArancelCargarFactura1').checked=false
	document.getElementById('checkBuscarTipoArancelCargarFactura2').checked=true
	BuscarArancelesAPagarList()
	}
}
function BuscarArancelesAPagarList() {

		var tipo="";
		var anho="";
		var curso="";
		var semestre="";
		
		anho=document.getElementById("inptAnhoCargarFacturas").value;
		curso=document.getElementById("inptCursoCargarFacturas").value;
		semestre=document.getElementById("inptSemestreCargarFacturas").value;
		var tipo="Especificos";
		if(document.getElementById('checkBuscarTipoArancelCargarFactura2').checked==true){
			tipo="Generales";
		}
		document.getElementById("ListArancelFactura").innerHTML="";
			
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"cod_carrera": idCarreraFactura,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"tipo": tipo,
		"funt": "buscarvistaListFactura"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListArancelFactura").innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;			
			console.log(Respuesta)
			document.getElementById("ListArancelFactura").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("ListArancelFactura").innerHTML = datos_buscados
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarListArancelAsignarArancel() {

		var tipo="Generales";
		if(document.getElementById('inptSeleccTipoAsignarArancel1').checked==true){
			tipo="Especificos";
		}
		document.getElementById("ListArancelFacturaAsignarArancel").innerHTML="";
		
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"tipo": tipo,
		"funt": "buscarvistaListFacturaTipo2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListArancelFacturaAsignarArancel").innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;			
			console.log(Respuesta)
			document.getElementById("ListArancelFacturaAsignarArancel").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("ListArancelFacturaAsignarArancel").innerHTML = datos_buscados
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarArancelesABalanceList(d) {

	
		var tipo=d.value;
		
		document.getElementById("ListArancelFacturaBalanceGeneral").innerHTML="";
			
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"tipo": tipo,
		"funt": "buscarvistaListFacturaTipo2"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListArancelFacturaBalanceGeneral").innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;			
			console.log(Respuesta)
			document.getElementById("ListArancelFacturaBalanceGeneral").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("ListArancelFacturaBalanceGeneral").innerHTML = datos_buscados
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function ControlTipoArancelCobranzas(){
	document.getElementById("inptCodArancelCobrarAranceles").value="";
		document.getElementById("inptNomArancelCobrarAranceles").value="";
		document.getElementById("inptPrecioArancelCobrarAranceles").value="";
		document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML="";
		document.getElementById("btnMasDetalleVenta").style.display="none";
		document.getElementById("btnAddToDetalleVenta").style.backgroundColor="#cccccc";
		BuscarArancelesCobrarAranceles()
}
function BuscarArancelesCobrarAranceles() {

		var tipo="";
		var anho="";
		var curso="";
		var semestre="";
		
		anho=document.getElementById("inptAnhoCobrarAranceles").value;
		curso=document.getElementById("inptCursoCobrarAranceles").value;
		semestre=document.getElementById("inptSemestreCobrarAranceles").value;
		var nombrearancel=document.getElementById("inptNomArancelCobrarAranceles").value;
		var tipo=document.getElementById("inptTipoArancelCobrarAranceles").value;
		document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML=imgCargandoA;
		
		document.getElementById("inptCodArancelCobrarAranceles").value="";
		document.getElementById("inptNomArancelCobrarAranceles").value="";
		document.getElementById("inptPrecioArancelCobrarAranceles").value="";
		document.getElementById("btnMasDetalleVenta").style.display="none";
		document.getElementById("btnAddToDetalleVenta").style.backgroundColor="#cccccc";
		
			
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"cod_carrera": idCarreraFactura,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"tipo": tipo,
		"buscar": nombrearancel,
		"idAsignarAlumnosFk": idAsignarAlumnosFk,
		"idalumnofk": idAlumnosFacturaFk,
		"funt": "buscarvistaCobrarAranceles"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarArancles.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;			
			console.log(Respuesta)
			document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML = datos_buscados
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function buscardatosdealumnocargarfactura(){	
	var buscador = document.getElementById('inptDocumentoCargarFacturas').value
    document.getElementById("inptNombreAlumnoCargarFacturas").value="";
    document.getElementById("inptCarreraCargarFacturas").value="";
    document.getElementById("inptCursoCargarFacturas").value="";
    document.getElementById("inptAnhoCargarFacturas").value="";
    document.getElementById("inptSemestreCargarFacturas").value="";
    document.getElementById("inptTurnoCargarFacturas").value="";
    document.getElementById("inptSeccionCargarFacturas").value="";
    document.getElementById("inptFilialCargarFacturas").value="";
   
    document.getElementById("inptPuntoExpedicionCargarFacturas").value="";
    document.getElementById("inptFacturaNroCargarFacturas").value="";
    document.getElementById("inptArancelCargarFacturas").value="";
    document.getElementById("inptCostoArancelCargarFacturas").value="";
    document.getElementById("inptFechaCargarFacturas").value="";
    document.getElementById("inptMontoCargarFacturas").value="";
    document.getElementById("inptTotalRegistroCargaFactura").value="";
    document.getElementById("inptTotalPagosCargaFactura").value="";
	anhoarancel="";
    cursoarancel="";
   semestrearancel="";
   	var f = new Date();
	 var anho = f.getFullYear();
    document.getElementById("divBuscadorPagosDelAlumno").innerHTML="";
		verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"anho": anho,
		"funt": "buscarDatosPorCi"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				verCerrarEfectoCargando("2")
		},
		success: function (responseText) {
				verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
                   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				  
					   return;
				   }
				   var totalregistro = datos[3];
				   if(totalregistro==1){
					document.getElementById("divBuscadorVistaAsignarCarrera").innerHTML = datos_buscados
					var datostr=document.getElementsByName("tdDatosAlumnosMatriculados")
					idAsignarAlumnosFk = $(datostr).children('td[id="td_id_1"]').html();
					idAlumnosFacturaFk = $(datostr).children('td[id="td_id_2"]').html();
	idFilialFactura = $(datostr).children('td[id="td_id_4"]').html();
	idCarreraFactura = $(datostr).children('td[id="td_id_3"]').html();
	document.getElementById('inptDocumentoCargarFacturas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAlumnoCargarFacturas').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCarreraCargarFacturas').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptSemestreCargarFacturas').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptSeccionCargarFacturas').value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptCursoCargarFacturas').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptAnhoCargarFacturas').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptTurnoCargarFacturas').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptFilialCargarFacturas').value = $(datostr).children('td[id="td_datos_10"]').html();
	if(document.getElementById('inptCursoCargarFacturas').value=="CULMINADO"){
		document.getElementById("checkBuscarTipoArancelCargarFactura1").checked=false
		document.getElementById("checkBuscarTipoArancelCargarFactura2").checked=true
		document.getElementById("checkBuscarTipoArancelCargarFactura1").disabled=true
		document.getElementById("checkBuscarTipoArancelCargarFactura2").disabled=true
	}else{
		document.getElementById("checkBuscarTipoArancelCargarFactura1").disabled=false
		document.getElementById("checkBuscarTipoArancelCargarFactura2").disabled=false
	}
	anhoarancel=document.getElementById("inptAnhoCargarFacturas").value;
        cursoarancel=document.getElementById("inptCursoCargarFacturas").value;
		semestrearancel=document.getElementById("inptSemestreCargarFacturas").value;
	var f = new Date();
	var dia =f.getDate()
	if(dia<10){
		dia="0"+dia;
	}
	var mes =f.getMonth()+1
	if(mes<10){
		mes="0"+mes;
	}
	var hora =f.getHours()
	if(hora<10){
		hora="0"+hora;
	}
	var min =f.getMinutes()
	if(min<10){
		min="0"+min;
	}
    document.getElementById('inptFechaCargarFacturas').value=f.getFullYear()+"-"+mes+"-"+dia;
	buscarnroexpedicion()
	buscarhistorialpagodesdefactura()
      BuscarArancelesAPagarList()   
				}
				 }else{
					document.getElementById("inptAnhoCargarFacturas").style.display=""
verCerrarFrmVistaAsignarAlumnos('1','CargarFacturas')					
				 }
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	   
}
function buscardatosdealumnoCobrarAranceles(){	
	var buscador = document.getElementById('inptDocAlumnosCobrarAranceles').value
    document.getElementById("inptNombreAlumnoCobrarAranceles").value="Buscando...";
    document.getElementById("inptCarreraCobrarAranceles").value="";
    document.getElementById("inptCursoCobrarAranceles").value="";
    document.getElementById("inptAnhoCobrarAranceles").value="";
    document.getElementById("inptSemestreCobrarAranceles").value="";
    document.getElementById("inptTurnoCobrarAranceles").value="";
    document.getElementById("inptSeccionCobrarAranceles").value="";
    document.getElementById("inptFilialCobrarAranceles").value="";
    document.getElementById("inptFacturaNroCobrarAranceles").value="";
    document.getElementById("inptControlCobrarAranceles").value="";
    document.getElementById("inptTotalCobrarAranceles").value="";
    document.getElementById("inptFechaCobrarAranceles").value="";
    document.getElementById("inptTotalDescuentoCobrarAranceles").value="";
    document.getElementById("inptSubTotalCobrarAranceles").value="";
    document.getElementById("inptTotalCobrarAranceles2").value="";
    document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML="";
    document.getElementById("table_abm_detalle_cobrar_aranceles").innerHTML="";
    document.getElementById("divExtraFactura1").innerHTML="";
    document.getElementById("inptPuntoExpedicionCobrarAranceles").innerHTML="";
	CursoCobrarArancel=""
    anhoCobrarArancel=""
	semestreCobrarArancel=""
	var f = new Date();
	 var anho = f.getFullYear();
	document.getElementById('inptDocAlumnosCobrarAranceles').value="Buscando..."
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"anho": anho,
		"funt": "buscarDatosPorCi"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMMatricularAlumnos.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				
		},
		success: function (responseText) {
	document.getElementById("inptNombreAlumnoCobrarAranceles").value="";
    document.getElementById("inptCarreraCobrarAranceles").value="";
    document.getElementById("inptCursoCobrarAranceles").value="";
    document.getElementById("inptAnhoCobrarAranceles").value="";
    document.getElementById("inptSemestreCobrarAranceles").value="";
    document.getElementById("inptTurnoCobrarAranceles").value="";
    document.getElementById("inptFilialCobrarAranceles").value="";
    document.getElementById("inptFacturaNroCobrarAranceles").value="";
    document.getElementById("inptControlCobrarAranceles").value="";
    document.getElementById("inptTotalCobrarAranceles").value="";
    document.getElementById("inptFechaCobrarAranceles").value="";
    document.getElementById("inptTotalDescuentoCobrarAranceles").value="";
    document.getElementById("inptSubTotalCobrarAranceles").value="";
    document.getElementById("inptTotalCobrarAranceles2").value="";
    document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML="";
    document.getElementById("table_abm_detalle_cobrar_aranceles").innerHTML="";
    document.getElementById("divExtraFactura1").innerHTML="";
    document.getElementById("inptPuntoExpedicionCobrarAranceles").innerHTML="";
	document.getElementById('inptDocAlumnosCobrarAranceles').value=""
			var Respuesta = responseText;
			console.log(Respuesta)			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
                   if(datos_buscados==""){
					   alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
				  
					   return;
				   }
					document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML = datos_buscados
					var totalregistro = datos[3];
				
					if(Number(totalregistro)==1){
						
						
					var datostr=document.getElementsByName("tdDatosAlumnosMatriculados")
					idAsignarAlumnosFk = $(datostr).children('td[id="td_id_1"]').html();
	idAlumnosFacturaFk = $(datostr).children('td[id="td_id_2"]').html();
	idFilialFactura = $(datostr).children('td[id="td_id_4"]').html();
	idCarreraFactura = $(datostr).children('td[id="td_id_3"]').html();
	document.getElementById('inptDocAlumnosCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAlumnoCobrarAranceles').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCarreraCobrarAranceles').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptSemestreCobrarAranceles').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptCursoCobrarAranceles').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptSeccionCobrarAranceles').value = $(datostr).children('td[id="td_datos_12"]').html();
	

		
		if(document.getElementById('inptCursoCobrarAranceles').value=="CULMINADO"){
		
		document.getElementById("inptTipoArancelCobrarAranceles").disabled=true
		document.getElementById("inptTipoArancelCobrarAranceles").value="Generales"
	}else{
		
		document.getElementById("inptTipoArancelCobrarAranceles").disabled=false
	}
	document.getElementById('inptAnhoCobrarAranceles').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptTurnoCobrarAranceles').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptFilialCobrarAranceles').value = $(datostr).children('td[id="td_datos_10"]').html();
	var f = new Date();
	var dia =f.getDate()
	if(dia<10){
		dia="0"+dia;
	}
	var mes =f.getMonth()+1
	if(mes<10){
		mes="0"+mes;
	}
	var hora =f.getHours()
	if(hora<10){
		hora="0"+hora;
	}
	var min =f.getMinutes()
	if(min<10){
		min="0"+min;
	}
    document.getElementById('inptFechaCobrarAranceles').value=f.getFullYear()+"-"+mes+"-"+dia;
		CursoCobrarArancel=document.getElementById("inptCursoCobrarAranceles").value
			anhoCobrarArancel=document.getElementById("inptAnhoCobrarAranceles").value
			semestreCobrarArancel=document.getElementById("inptSemestreCobrarAranceles").value
	BuscarArancelesCobrarAranceles()
	buscarnroexpedicionb()
					}else{
						
						verCerrarFrmVistaAsignarAlumnos('1','CobrarAranceles')
					}
	 
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	   
}
function buscarhistorialpagodesdefactura() {
	var buscador = document.getElementById('inptBuscarVistaAsignarAlumnos1').value
	document.getElementById("divBuscadorPagosDelAlumno").innerHTML = imgCargandoA
    document.getElementById("inptTotalRegistroCargaFactura").value="";
    document.getElementById("inptTotalPagosCargaFactura").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAsignarAlumnosFk,
		"funt": "buscarhistorial"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorPagosDelAlumno").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorPagosDelAlumno").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorPagosDelAlumno").innerHTML = datos_buscados
					document.getElementById("inptTotalRegistroCargaFactura").value= datos[3];
					document.getElementById("inptTotalPagosCargaFactura").value= datos[4];
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function verCerrarFrmReportFacturasCargadas(d){
	document.getElementById("divMinimizadoFacturasCargadas").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERINFORMEFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divReportFacturasCargadas").style.display="";
	
	}else{
	document.getElementById("divReportFacturasCargadas").style.display="none";
	limipiarCamposBusquedaReportFacturasCargadas()
	}
}
function limipiarCamposBusquedaReportFacturasCargadas(){
	document.getElementById("inptBuscarFacturasCargadas7").value=""
	document.getElementById("inptBuscarFacturasCargadas8").value=""
	document.getElementById("inptBuscarFacturasCargadas1").value=""
	document.getElementById("inptBuscarFacturasCargadas2").value=""
	document.getElementById("inptBuscarFacturasCargadas6").value=""
	document.getElementById("inptBuscarFacturasCargadas3").value=""
	document.getElementById("inptBuscarFacturasCargadas4").value=""
	document.getElementById("inptBuscarFacturasCargadas5").value=""
	document.getElementById("inptRegistroReportFacturasCargadas").value=""
	document.getElementById("inptTotalReportFacturasCargadas").value=""
	document.getElementById("divBuscadorReportFacturasCargadas").innerHTML=""
}
function MinimizarVentanaFacturasCargadas(){
	document.getElementById("divReportFacturasCargadas").style.display="none";
	document.getElementById("divMinimizadoFacturasCargadas").style.display="";
}
function checkBuscarFacturasCargadas(d){
		var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	if(d=="1"){
	document.getElementById('checkBuscarFacturasCargadas1').checked=true
	document.getElementById('checkBuscarFacturasCargadas2').checked=false	
	document.getElementById('checkBuscarFacturasCargadas3').checked=false	
	
	
	document.getElementById('inptBuscarFacturasCargadas7').value = f.getFullYear() + "-" + mes + "-" + "01";
	document.getElementById('inptBuscarFacturasCargadas8').value = f.getFullYear() + "-" + mes + "-" + dia;
	
	}
	if(d=="2"){
	document.getElementById('checkBuscarFacturasCargadas1').checked=false
	document.getElementById('checkBuscarFacturasCargadas2').checked=true	
	document.getElementById('checkBuscarFacturasCargadas3').checked=false
	document.getElementById('inptBuscarFacturasCargadas7').value = f.getFullYear() + "-" + mes + "-" +dia;
document.getElementById('inptBuscarFacturasCargadas8').value=""	
	}
	if(d=="3"){
	document.getElementById('checkBuscarFacturasCargadas1').checked=false
	document.getElementById('checkBuscarFacturasCargadas2').checked=false	
	document.getElementById('checkBuscarFacturasCargadas3').checked=true		
	document.getElementById('inptBuscarFacturasCargadas7').value=""
	document.getElementById('inptBuscarFacturasCargadas8').value=""
	}
}
var controlordenreportfacturacargada="1"
function ordenreportfacturacargada(d){
	document.getElementById('tdOrdReportFacturaCargada1').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada2').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada3').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada4').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada5').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada6').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada7').className="td_registro_orden1"
		document.getElementById('tdOrdReportFacturaCargada8').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdReportFacturaCargada1').className="td_registro_orden"
		controlordenreportfacturacargada="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportFacturaCargada2').className="td_registro_orden"
		controlordenreportfacturacargada="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportFacturaCargada3').className="td_registro_orden"
		controlordenreportfacturacargada="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportFacturaCargada4').className="td_registro_orden"
		controlordenreportfacturacargada="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdReportFacturaCargada5').className="td_registro_orden"
		controlordenreportfacturacargada="5"
	}
	if(d=="6"){
		document.getElementById('tdOrdReportFacturaCargada6').className="td_registro_orden"
		controlordenreportfacturacargada="6"
	}
	if(d=="7"){
		document.getElementById('tdOrdReportFacturaCargada7').className="td_registro_orden"
		controlordenreportfacturacargada="7"
	}
	if(d=="8"){
		document.getElementById('tdOrdReportFacturaCargada8').className="td_registro_orden"
		controlordenreportfacturacargada="8"
	}
	BuscarReportFacturasCargadas()
}
function BuscarReportFacturasCargadas() {
if(controlacceso("INFORMEFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}
		var fecha1 =document.getElementById('inptBuscarFacturasCargadas7').value
	    var fecha2 =document.getElementById('inptBuscarFacturasCargadas8').value
		if(document.getElementById('checkBuscarFacturasCargadas1').checked==true){
			if(fecha1==""){
				alertmensaje("Falto seleccionar la fecha inicio")
				return
			}
			if(fecha2==""){
				alertmensaje("Falto seleccionar la fecha fin")
				return
			}
		}
		if(document.getElementById('checkBuscarFacturasCargadas2').checked==true){
			if(fecha1==""){
				alertmensaje("Falto seleccionar la fecha inicio")
				return
			}
			fecha2=""
	
		}
		if(document.getElementById('checkBuscarFacturasCargadas3').checked==true){
			fecha1=""
			fecha2=""	
		}
		
		

	
	var codFilial="";		
$("input[id=inptBuscarFacturasCargadas1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	var codCarrera="";		
$("input[id=inptBuscarFacturasCargadas2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	var codArancel="";		
$("input[id=inptBuscarFacturasCargadas6]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var nrofactura=document.getElementById("inptBuscarFacturasCargadas3").value;
var documento=document.getElementById("inptBuscarFacturasCargadas4").value;
var alumno=document.getElementById("inptBuscarFacturasCargadas5").value;
var estadofactura=document.getElementById("inptBuscarFacturasCargadas9").value;
var anho=document.getElementById("inptBuscarFacturasCargadas10").value;
var curso=document.getElementById("inptBuscarFacturasCargadas11").value;
var semestre=document.getElementById("inptBuscarFacturasCargadas12").value;

	document.getElementById("divBuscadorReportFacturasCargadas").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportFacturasCargadas").value="";
    document.getElementById("inptTotalReportFacturasCargadas").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"fecha1": fecha1,
		"fecha2": fecha2,
		"nrofactura": nrofactura,
		"documento": documento,
		"alumno": alumno,
		"codFilial": codFilial,
		"codCarrera": codCarrera,
		"codArancel": codArancel,
		"estadofactura": estadofactura,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"ordenby": controlordenreportfacturacargada,
		"funt": "buscarreportfacturascargadas"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorReportFacturasCargadas").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportFacturasCargadas").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportFacturasCargadas").innerHTML = datos_buscados
					document.getElementById("inptRegistroReportFacturasCargadas").value= datos[3];
					document.getElementById("inptTotalReportFacturasCargadas").value= datos[4];
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
var idFacturaSeleccionado="";
function ObtenerdatosFacturasCargadas(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
	datostr.className = 'tableRegistroSelec'
	
	idFacturaSeleccionado = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccReportFacturasCargadas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('btneliminarDatosFacturasCargadas').style.backgroundColor="red";
	


}
function eliminarestafacturacargada() {

	if(controlacceso("ELIMINARFACTURAS","accion")==false){
	//SIN PERMISO
	  return;
	}

   
   if(confirm("Estas Seguro que quieres eliminar este registro")){
	if(idFacturaSeleccionado==""){
		alertmensaje("FALTO SELECCIONAR UN REGISTRO")
		return
	}
	
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idfactura": idFacturaSeleccionado,
		"funt": "eliminarfactura"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				verCerrarEfectoCargando("2")	
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
				verCerrarEfectoCargando("2")	
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					idFacturaSeleccionado="";
					document.getElementById('btneliminarDatosFacturasCargadas').style.backgroundColor="#ffcece";
					document.getElementById("inptRegistroSeleccReportFacturasCargadas").value=""
					BuscarReportFacturasCargadas()
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
   }

}


/*
COBRAR ARANCELES
*/
function verCerrarFrmCobrarAranceles(d){
	document.getElementById("divMinimizadoCobranzas").style.display="none";
	document.getElementById("divMinimizadoCobranzas2").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmCobrarAranceles").style.display="";
	
	}else{
	document.getElementById("divAbmCobrarAranceles").style.display="none";
	limpiarCamposCobrarAranceles()
	}
}
function MinimizarVentanaCobranzas(){
	document.getElementById("divAbmCobrarAranceles").style.display="none";
	document.getElementById("divMinimizadoCobranzas").style.display="";
	document.getElementById("divMinimizadoCobranzas2").style.display="";
}
var anhoCobrarArancel="";
var CursoCobrarArancel="";
var semestreCobrarArancel="";
function ObtenerdatosVistaCargarArancelCobrar(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	document.getElementById('inptCodArancelCobrarAranceles').value = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptNomArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCantArancelCobrarAranceles').value = "1";
	document.getElementById('inptPrecioArancelCobrarAranceles').value = "0";
		document.getElementById('inptPrecioArancelCobrarAranceles').disabled=false
	document.getElementById('inptTotalArancelCobrarAranceles').value = "0";
	document.getElementById('inptDescuentoArancelCobrarAranceles').value = "0";
	document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#1490f2';
		document.getElementById('btnMasDetalleVenta').style.display='none';
	
		if(document.getElementById('inptCodArancelCobrarAranceles').value=="0"){
			
			if(CursoCobrarArancel!="Culminado"){
				var curso=CursoCobrarArancel-1;
				var anho=anhoCobrarArancel-1;
				var semestre=semestreCobrarArancel-1;
				document.getElementById("inptCursoCobrarAranceles").value=curso
				document.getElementById("inptAnhoCobrarAranceles").value=anho
				document.getElementById("inptSemestreCobrarAranceles").value=semestre
				document.getElementById("inptCursoCobrarAranceles").style.backgroundColor="red"
				document.getElementById("inptCursoCobrarAranceles").style.color="#fff"
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor="red"
				document.getElementById("inptAnhoCobrarAranceles").style.color="#fff"
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor="red"
				document.getElementById("inptSemestreCobrarAranceles").style.color="#fff"			
	}
	
}else{
	
				document.getElementById("inptCursoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptCursoCobrarAranceles").style.color=""
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptAnhoCobrarAranceles").style.color=""
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptSemestreCobrarAranceles").style.color=""
					document.getElementById("inptCursoCobrarAranceles").value=CursoCobrarArancel
				document.getElementById("inptAnhoCobrarAranceles").value=anhoCobrarArancel
				document.getElementById("inptSemestreCobrarAranceles").value=semestreCobrarArancel
			
}

}
function ObtenerdatosVistaCargarArancelCobrarCuota(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	document.getElementById('inptCodArancelCobrarAranceles').value = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptNomArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCantArancelCobrarAranceles').value = "1";
	document.getElementById('inptPrecioArancelCobrarAranceles').value = "0";
		document.getElementById('inptPrecioArancelCobrarAranceles').disabled=false
	document.getElementById('inptTotalArancelCobrarAranceles').value ="0";
	document.getElementById('inptDescuentoArancelCobrarAranceles').value = "0";
	document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#1490f2';
	document.getElementById('btnMasDetalleVenta').style.display='';
		document.getElementById("inptCursoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptCursoCobrarAranceles").style.color=""
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptAnhoCobrarAranceles").style.color=""
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptSemestreCobrarAranceles").style.color=""
					document.getElementById("inptCursoCobrarAranceles").value=CursoCobrarArancel
				document.getElementById("inptAnhoCobrarAranceles").value=anhoCobrarArancel
				document.getElementById("inptSemestreCobrarAranceles").value=semestreCobrarArancel
	
}
function ObtenerdatosVistaCargarArancelCobrarDerecho(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	document.getElementById('inptCodArancelCobrarAranceles').value = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptNomArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCantArancelCobrarAranceles').value = "1";
	document.getElementById('inptPrecioArancelCobrarAranceles').value = "0";
	document.getElementById('inptPrecioArancelCobrarAranceles').disabled=true
	document.getElementById('inptTotalArancelCobrarAranceles').value = "0";
	document.getElementById('inptDescuentoArancelCobrarAranceles').value = "0";
	document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#1490f2';
	document.getElementById('btnMasDetalleVenta').style.display='';
	document.getElementById('divVistaArancelesCobrar').style.display='';
	buscarmateriasderechoexamenaranceles2()
		document.getElementById('btnMasDetalleVenta').style.display='none';
			document.getElementById("inptCursoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptCursoCobrarAranceles").style.color=""
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptAnhoCobrarAranceles").style.color=""
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptSemestreCobrarAranceles").style.color=""
					document.getElementById("inptCursoCobrarAranceles").value=CursoCobrarArancel
				document.getElementById("inptAnhoCobrarAranceles").value=anhoCobrarArancel
				document.getElementById("inptSemestreCobrarAranceles").value=semestreCobrarArancel
	
}
function verCuotasPagadasDesdeCobranzas(){

	document.getElementById('divVistaArancelesCobrar').style.display='';
		buscarCuotasaranceles2()
}
function verCerrarFrmVistaArancelesCobrar(d){
	if(d=="1"){
		document.getElementById('divVistaArancelesCobrar').style.display='';
	}else{
		document.getElementById('divVistaArancelesCobrar').style.display='none';
	}
}
function calcularTotalCobranzasCosto (){
	var totalcobrar=document.getElementById("inptPrecioArancelCobrarAranceles").value
	document.getElementById("inptPrecioArancelCobrarAranceles").value=separadordemilesnumero(totalcobrar)
	document.getElementById("inptTotalArancelCobrarAranceles").value=separadordemilesnumero(totalcobrar)
}
function obtenerTotalPagarFacturaDerechos(d){
	
	var precio=$(d).attr("value")
	var titulo=$(d).attr("style")
	var codListaCatedra=$(d).attr("id")
	d.disabled=false
	anhadirAranacelEnDetalleFacturaDerechoExamen(titulo,precio,codListaCatedra);
	
	// var controlcod=0;
	// var total=0;
		// $("input[name=checkboxDerechoExamenArancel1]").each(function(i, elementohtml){
// if ($(elementohtml).is(':checked') ){
	// var t=$(elementohtml).attr("value")
	// total=Number(total)+Number(t)
	// controlcod=controlcod+1;
// }
	   // });
	   
	   // if(document.getElementById("divAbmCargarFacturas").style.display==""){
	   
	   // if(controlcod>0){
		   // document.getElementById("inptMontoCargarFacturas").disabled=true
		   // document.getElementById("inptMontoCargarFacturas").value=separadordemilesnumero(total)
	   // }else{
		   // document.getElementById("inptMontoCargarFacturas").disabled=false 
		   // document.getElementById("inptMontoCargarFacturas").value=0
	   // }
	   // }
	    // if(document.getElementById("divAbmCobrarAranceles").style.display==""){
		 // if(controlcod>0){
		   // document.getElementById("inptPrecioArancelCobrarAranceles").disabled=true
		   // document.getElementById("inptPrecioArancelCobrarAranceles").value=separadordemilesnumero(total)
		   // document.getElementById("inptTotalArancelCobrarAranceles").value=separadordemilesnumero(total)
		   // document.getElementById("inptTotalCobrarAranceles2").innerHTML=separadordemilesnumero(total)
	   // }else{
		   // document.getElementById("inptPrecioArancelCobrarAranceles").disabled=false 
		   // document.getElementById("inptPrecioArancelCobrarAranceles").value=0
		   // document.getElementById("inptTotalArancelCobrarAranceles").value=0
		   // document.getElementById("inptTotalCobrarAranceles2").innerHTML=0
	   // }   
		   
	   // }
}

function anhadirAranacelEnDetalleFacturaDerechoExamen(titulo,precio,codListaCatedra){
	
	var totalaCobrar = precio
	if (totalaCobrar == 0) {
		alertmensaje("EL TOTAL ES INVÁLIDO", "#")
		return false;
	}
	
	var curso = document.getElementById('inptCursoCobrarAranceles').value
	var anho = document.getElementById('inptAnhoCobrarAranceles').value
	var semestre = document.getElementById('inptSemestreCobrarAranceles').value
	var inptCodArancelCobrarAranceles = document.getElementById('inptCodArancelCobrarAranceles').value
	var inptNomArancelCobrarAranceles = document.getElementById('inptNomArancelCobrarAranceles').value + " - "+titulo
	var inptCantArancelCobrarAranceles = 1
	var inptPrecioArancelCobrarAranceles = separadordemilesnumero(precio)
	var inptDescuentoArancelCobrarAranceles = 0
	var inptTotalArancelCobrarAranceles = separadordemilesnumero(precio)
	if (inptCodArancelCobrarAranceles == "") {
		alertmensaje("FALTO SELECCIONAR EL ARANCEL", "#")
		return false;
	}
	var f = new Date()
	
var pagina="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>"
+"<tr id='tbSelecRegistro' onclick='SeleccionarDetalleOpcionesFactura(this)'  name='tdDetalleCobranzasOffline'>"
+"<td id='td_id_1' style='display:none'>"+inptCodArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_1' style='width:20%;'>"+inptNomArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_3' style='width:10%'>"+inptPrecioArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_4' style='width:5%'>"+inptCantArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_9' style='display:none'>"+inptDescuentoArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_5' style='width:10%'>"+inptTotalArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_6' style='display:none'>DERECHOEXAMEN</td>"
+"<td  id='td_datos_7' style='display:none'>"+codListaCatedra+"</td>"
+"<td  id='td_datos_10' style='display:none'>"+curso+"</td>"
+"<td  id='td_datos_11' style='display:none'>"+anho+"</td>"
+"<td  id='td_datos_12' style='display:none'>"+semestre+"</td>"
+"</tr>"
+"</table>"

document.getElementById("table_abm_detalle_cobrar_aranceles").innerHTML+=pagina;
var totalCobranzas=0;
var SubtotalCobranzas=0;
var totalDescuento=0;
$("tr[name=tdDetalleCobranzasOffline]").each(function(i, elementohtml){
var total=$(elementohtml).children('td[id="td_datos_5"]').html();
var descuento=$(elementohtml).children('td[id="td_datos_9"]').html();
total=QuitarSeparadorMilValor(total)
descuento=QuitarSeparadorMilValor(descuento)
totalCobranzas=Number(totalCobranzas)+Number(total)
SubtotalCobranzas=Number(SubtotalCobranzas)+(Number(total)+Number(descuento))
totalDescuento=Number(totalDescuento)+Number(descuento)

	   });
	   
document.getElementById("inptSubTotalCobrarAranceles").value=separadordemilesnumero(SubtotalCobranzas);
document.getElementById("inptTotalCobrarAranceles2").innerHTML=separadordemilesnumero(totalCobranzas);
document.getElementById("inptTotalCobrarAranceles").value=separadordemilesnumero(totalCobranzas);
document.getElementById('inptTotalDescuentoCobrarAranceles').value=separadordemilesnumero(totalDescuento);
document.getElementById("btnFinalizarCobranzas").style.display=""
document.getElementById("btnCancelarCobranzas").style.display=""
document.getElementById('inptCantArancelCobrarAranceles').value="1"
document.getElementById('inptPrecioArancelCobrarAranceles').value="0"
document.getElementById('inptDescuentoArancelCobrarAranceles').value="0"
document.getElementById('inptTotalArancelCobrarAranceles').value="0"
document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById('btnMasDetalleVenta').style.display='none';
document.getElementById('inptNomArancelCobrarAranceles').focus();

}

function anhadirAranacelEnDetalleVenta(){
	
	var totalaCobrar = document.getElementById('inptTotalArancelCobrarAranceles').value
	if (totalaCobrar == 0) {
		alertmensaje("EL TOTAL ES INVÁLIDO", "#")
		return false;
	}
	var curso = document.getElementById('inptCursoCobrarAranceles').value
	var anho = document.getElementById('inptAnhoCobrarAranceles').value
	var semestre = document.getElementById('inptSemestreCobrarAranceles').value
	var inptCodArancelCobrarAranceles = document.getElementById('inptCodArancelCobrarAranceles').value
	var inptNomArancelCobrarAranceles = document.getElementById('inptNomArancelCobrarAranceles').value
	var inptCantArancelCobrarAranceles = document.getElementById('inptCantArancelCobrarAranceles').value
	var inptPrecioArancelCobrarAranceles = document.getElementById('inptPrecioArancelCobrarAranceles').value
	var inptDescuentoArancelCobrarAranceles = document.getElementById('inptDescuentoArancelCobrarAranceles').value
	var inptTotalArancelCobrarAranceles = document.getElementById('inptTotalArancelCobrarAranceles').value
	var extrafactura =""	
	if (inptCodArancelCobrarAranceles == "") {
		alertmensaje("FALTO SELECCIONAR EL ARANCEL", "#")
		return false;
	}

	
var pagina="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>"
+"<tr id='tbSelecRegistro' onclick='SeleccionarDetalleOpcionesFactura(this)'  name='tdDetalleCobranzasOffline'>"
+"<td id='td_id_1' style='display:none'>"+inptCodArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_1' style='width:20%;'>"+inptNomArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_3' style='width:10%'>"+inptPrecioArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_4' style='width:5%'>"+inptCantArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_9' style='display:none'>"+inptDescuentoArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_5' style='width:10%'>"+inptTotalArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_6' style='display:none'></td>"
+"<td  id='td_datos_7' style='display:none'></td>"
+"<td  id='td_datos_10' style='display:none'>"+curso+"</td>"
+"<td  id='td_datos_11' style='display:none'>"+anho+"</td>"
+"<td  id='td_datos_12' style='display:none'>"+semestre+"</td>"
+"</tr>"
+"</table>"

document.getElementById("table_abm_detalle_cobrar_aranceles").innerHTML+=pagina;
var totalCobranzas=0;
var SubtotalCobranzas=0;
var totalDescuento=0;
$("tr[name=tdDetalleCobranzasOffline]").each(function(i, elementohtml){
var total=$(elementohtml).children('td[id="td_datos_5"]').html();
var descuento=$(elementohtml).children('td[id="td_datos_9"]').html();
total=QuitarSeparadorMilValor(total)
descuento=QuitarSeparadorMilValor(descuento)
totalCobranzas=Number(totalCobranzas)+Number(total)
SubtotalCobranzas=Number(SubtotalCobranzas)+(Number(total)+Number(descuento))
totalDescuento=Number(totalDescuento)+Number(descuento)

	   });
	   
document.getElementById("inptSubTotalCobrarAranceles").value=separadordemilesnumero(SubtotalCobranzas);
document.getElementById("inptTotalCobrarAranceles2").innerHTML=separadordemilesnumero(totalCobranzas);
document.getElementById("inptTotalCobrarAranceles").value=separadordemilesnumero(totalCobranzas);
document.getElementById('inptTotalDescuentoCobrarAranceles').value=separadordemilesnumero(totalDescuento);
document.getElementById("btnFinalizarCobranzas").style.display=""
document.getElementById("btnCancelarCobranzas").style.display=""
document.getElementById('inptCodArancelCobrarAranceles').value=""
document.getElementById('inptNomArancelCobrarAranceles').value=""
document.getElementById('inptCantArancelCobrarAranceles').value=""
document.getElementById('inptPrecioArancelCobrarAranceles').value=""
document.getElementById('inptDescuentoArancelCobrarAranceles').value=""
document.getElementById('inptTotalArancelCobrarAranceles').value=""
document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById('btnMasDetalleVenta').style.display='none';
document.getElementById('inptNomArancelCobrarAranceles').focus();

}
var elementodetalleFactura=""
function SeleccionarDetalleOpcionesFactura(datos){
	elementodetalleFactura=datos;
	var detalle=$(datos).children('td[id="td_datos_1"]').html();
	document.getElementById("lblNombreDetalleCobranza").innerHTML=" # "+detalle
	verCerrarOpcionesDetallesFacturas("1")
}

function verCerrarOpcionesDetallesFacturas(d){
	if(d=="1"){
		document.getElementById("divOpcionedDetalleFactura").style.display=""
	}else{
		document.getElementById("divOpcionedDetalleFactura").style.display="none"
	}
}
function eliminarestedetallefactura(){
	$(elementodetalleFactura).remove();
	
	var totalCobranzas=0;
var SubtotalCobranzas=0;
var totalDescuento=0;
$("tr[name=tdDetalleCobranzasOffline]").each(function(i, elementohtml){
var total=$(elementohtml).children('td[id="td_datos_5"]').html();
var descuento=$(elementohtml).children('td[id="td_datos_9"]').html();
total=QuitarSeparadorMilValor(total)
descuento=QuitarSeparadorMilValor(descuento)
totalCobranzas=Number(totalCobranzas)+Number(total)
SubtotalCobranzas=Number(SubtotalCobranzas)+(Number(total)+Number(descuento))
totalDescuento=Number(totalDescuento)+Number(descuento)

	   });
	   
document.getElementById("inptSubTotalCobrarAranceles").value=separadordemilesnumero(SubtotalCobranzas);
document.getElementById("inptTotalCobrarAranceles2").innerHTML=separadordemilesnumero(totalCobranzas);
document.getElementById("inptTotalCobrarAranceles").value=separadordemilesnumero(totalCobranzas);
document.getElementById('inptTotalDescuentoCobrarAranceles').value=separadordemilesnumero(totalDescuento);

	verCerrarOpcionesDetallesFacturas("2")
}

function limpiarCamposCobrarAranceles(){
	
document.getElementById("btnFinalizarCobranzas").style.display="none"
document.getElementById("btnCancelarCobranzas").style.display="none"
document.getElementById("TdImprimirCobrarAranceles").style.display="none"
document.getElementById("btnMasInfoAlumnosCobranzas").style="background-color: #ccc;"
document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById('btnMasDetalleVenta').style.display='none';
document.getElementById('inptCodArancelCobrarAranceles').value=""
document.getElementById('inptNomArancelCobrarAranceles').value=""
document.getElementById('inptCantArancelCobrarAranceles').value=""
document.getElementById('inptPrecioArancelCobrarAranceles').value=""
document.getElementById('inptDescuentoArancelCobrarAranceles').value=""
document.getElementById('inptTotalArancelCobrarAranceles').value=""
document.getElementById("inptSubTotalCobrarAranceles").value="";
document.getElementById("inptTotalCobrarAranceles2").innerHTML="0";
document.getElementById("inptTotalCobrarAranceles").value="";
document.getElementById('inptTotalDescuentoCobrarAranceles').value="";

document.getElementById("inptNombreAlumnoCobrarAranceles").value="";
document.getElementById("inptDocAlumnosCobrarAranceles").value="";
document.getElementById("inptPuntoExpedicionCobrarAranceles").value="";
document.getElementById("inptFacturaNroCobrarAranceles").value="";
document.getElementById("inptControlCobrarAranceles").value="";
document.getElementById("inptFechaCobrarAranceles").value="";
document.getElementById("inptFilialCobrarAranceles").value="";
document.getElementById("inptCarreraCobrarAranceles").value="";
document.getElementById("inptCursoCobrarAranceles").value="";
document.getElementById("inptAnhoCobrarAranceles").value="";
document.getElementById("inptSemestreCobrarAranceles").value="";
document.getElementById("inptTurnoCobrarAranceles").value="";
document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML="";
document.getElementById("table_abm_detalle_cobrar_aranceles").innerHTML="";
document.getElementById("divExtraFactura1").innerHTML="";

	var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	document.getElementById('inptFechaCobrarAranceles').value = f.getFullYear() + "-" + mes + "-" + dia;
	
	document.getElementById("inptCursoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptCursoCobrarAranceles").style.color=""
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptAnhoCobrarAranceles").style.color=""
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptSemestreCobrarAranceles").style.color=""
	
}

function guardarDatosCobranzas(){
	
	
	var inptFechaCobrarAranceles = document.getElementById("inptFechaCobrarAranceles").value
	var inptTotalCobrarAranceles = document.getElementById("inptTotalCobrarAranceles").value
	var inptControlCobrarAranceles = document.getElementById("inptControlCobrarAranceles").value
	var nrofactura = document.getElementById("inptFacturaNroCobrarAranceles").value
	var inptFacturaNroCobrarAranceles = document.getElementById("inptFacturaNroCobrarAranceles").value
		if(nrofactura==""){
			document.getElementById("inptFacturaNroCobrarAranceles").focus()
		alertmensaje("Nro de Factura inválido")
		return
		}
	var	valor=document.getElementById("inptPuntoExpedicionCobrarAranceles").value
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").attr("id")
	if(valor==""){
		alertmensaje("Falto ingresar el nro de la factura")
		return
	}
	if(ControlNroFactura!=""){
					alertmensaje("Nro de factura fuera de rango")
					document.getElementById("inptFacturaNroCobrarAranceles").style.backgroundColor="#FF5722"
					document.getElementById("inptFacturaNroCobrarAranceles").style.color="#fff"
					document.getElementById("inptFacturaNroCobrarAranceles").value="";
					document.getElementById("inptControlCobrarAranceles").value="";
					return
	}else{
						document.getElementById("inptFacturaNroCobrarAranceles").style.backgroundColor=""
							document.getElementById("inptFacturaNroCobrarAranceles").style.color=""
		}
	
  var nrofactura=valor+"-"+nrofactura
	if(inptControlCobrarAranceles=="..."){
		document.getElementById("inptControlCobrarAranceles").focus()
		alertmensaje("Control de nro de factura inválido")
		return
	}
	if(inptTotalCobrarAranceles==""){
		document.getElementById("inptTotalCobrarAranceles").focus()
		alertmensaje("Falto ingresar el monto de la factura")
		return
	}
	
	if(idAsignarAlumnosFk==""){
		alertmensaje("Falto seleccionar el alumno")
		return
	}
	if(inptFechaCobrarAranceles==""){
		document.getElementById("inptFechaCobrarAranceles").focus()
		alertmensaje("Falto seleccionar la fecha")
		return
	}
	var estadofactura="Activo";
	var accion = "";
	if (idAbmCargaFactura != "") {
		accion = "editar";
		if(controlacceso("INSERTAFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	} else {
		accion = "nuevo";
		if(controlacceso("EDITARFACTURACION","accion")==false){
	//SIN PERMISO
	  return;
		}
	}
	abmguardarcobranzas(inptFacturaNroCobrarAranceles,estadofactura,inptFechaCobrarAranceles,inptTotalCobrarAranceles,inptControlCobrarAranceles,nrofactura,idAsignarAlumnosFk,codPuntoExpe)
}
function abmguardarcobranzas(controlnrofactura,estadofactura,fecha,totalcobranzas,cf,nrofactura,idcursosalumnoFk,puntoexpedicionfk) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	var control=0;
	$("tr[name=tdDetalleCobranzasOffline]").each(function(i, elementohtml){	
	var idproducto=$(elementohtml).children('td[id="td_id_1"]').html();
    datos.append("cod_ArancelFK"+control, idproducto)	
	var detalles=$(elementohtml).children('td[id="td_datos_1"]').html();
    datos.append("detalles"+control, detalles)
	var cantidad=$(elementohtml).children('td[id="td_datos_4"]').html();
    datos.append("cantidad"+control, cantidad)
	var precio=$(elementohtml).children('td[id="td_datos_3"]').html();
    datos.append("precio"+control, precio)	
	var subotal=$(elementohtml).children('td[id="td_datos_5"]').html();
    datos.append("subtotal"+control, subotal)		
	var descuento=$(elementohtml).children('td[id="td_datos_9"]').html();
    datos.append("descuento"+control, descuento)	
	var tipo=$(elementohtml).children('td[id="td_datos_6"]').html();
    datos.append("tipo"+control, tipo)
	var codextra=$(elementohtml).children('td[id="td_datos_7"]').html();
	datos.append("codextra"+control, codextra)
	var curso=$(elementohtml).children('td[id="td_datos_10"]').html();
	datos.append("curso"+control, curso)
	var anho=$(elementohtml).children('td[id="td_datos_11"]').html();
	datos.append("anho"+control, anho)
	var semestre=$(elementohtml).children('td[id="td_datos_12"]').html();
	datos.append("semestre"+control, semestre)
	
	control=control+1;	
	   });
	control=control-1;	
    
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "cargarcobranzas")
	datos.append("nrofactura", nrofactura)
	datos.append("cf", cf)
	datos.append("fecha", fecha)
	datos.append("TipoPago", "Corrido")
	datos.append("puntoexpedicionfk", puntoexpedicionfk)
	datos.append("nrototal", control)
	datos.append("idcursosalumnoFk", idcursosalumnoFk)
	datos.append("estadofactura", estadofactura)
	datos.append("controlnrofactura", controlnrofactura)
	
	
	var OpAjax = $.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
        var porce= ~~((evt.loaded / evt.total) * 100); 
		if(porce>90){
		porce=Number(porce)-7				
		}
		document.getElementById("lbltitulomensaje_b").innerHTML="Cargando<br>("+porce+"%)";
		var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
		kb=0.1;
		}
         cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
		kb=0.1;
		}
        cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		
		error: function (jqXHR, textstatus, errorThrowm) {
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
			   if (Respuesta == true) {
				   
					facturaFecha=fecha			
					facturaTotal=totalcobranzas	
					facturanros=nrofactura	
var t=QuitarSeparadorMilValor(totalcobranzas);
   facturaTotalLetras=numeroALetras(t, {
  plural: 'GUARANIES',
  singular: 'GUARANIES',
  centPlural: 'GUARANIES',
  centSingular: 'GUARANIES'
});		
var paginaDetalle=""
$("tr[name=tdDetalleCobranzasOffline]").each(function(i, elementohtml){
 paginaDetalle+="<table class='tableRegistroFactura'><tbody><tr>"
+"<td style='text-align: center; width: 71px;'>"+$(elementohtml).children('td[id="td_id_1"]').html()+"</td>"
+"<td style='width: 86px;text-align: center;'>"+$(elementohtml).children('td[id="td_datos_4"]').html()+"</td>"
+"<td style='width: 294px;'>"+$(elementohtml).children('td[id="td_datos_1"]').html()+"</td>"
+"<td style='width: 86px;'>"+$(elementohtml).children('td[id="td_datos_5"]').html()+"</td>"
+"<td style='width: 214px;'>"+$(elementohtml).children('td[id="td_datos_5"]').html()+"</td>"
+"</tr>"
+"</tbody>"
});
var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	facturaFecha= dia+ "-" + mes + "-" +  f.getFullYear() ;
facturaDetalles=paginaDetalle
imprimirFactura()			
limpiarCamposCobrarAranceles();
	  
		          
				}

			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
var facturaNombreAlumno="";
var facturaCiAlumno="";
var facturaTelefAlumno="";
var facturaDireccionAlumno="";
var facturaFecha="";
var facturaTotal="";
var facturaTotalLetras="";
var facturaDetalles="";
var facturanros="";
function imprimirFactura(){
	
	document.getElementById("pNroFactura1").innerHTML=facturanros
	document.getElementById("PfechaFactura1").innerHTML=facturaFecha
	document.getElementById("PNombreFactura1").innerHTML=facturaNombreAlumno
	document.getElementById("PCiFactura1").innerHTML=facturaCiAlumno
	document.getElementById("PDireccionFactura1").innerHTML=facturaDireccionAlumno
	document.getElementById("detalleFactura1").innerHTML=facturaDetalles
	document.getElementById("PTotalSubFactura1").innerHTML=facturaTotal
	document.getElementById("PTotalFactura1").innerHTML=facturaTotal
	document.getElementById("PLetrasFactura1").innerHTML=facturaTotalLetras
	
	document.getElementById("pNroFactura2").innerHTML=facturanros
	document.getElementById("PfechaFactura2").innerHTML=facturaFecha
	document.getElementById("PNombreFactura2").innerHTML=facturaNombreAlumno
	document.getElementById("PCiFactura2").innerHTML=facturaCiAlumno
	document.getElementById("PDireccionFactura2").innerHTML=facturaDireccionAlumno
	document.getElementById("detalleFactura2").innerHTML=facturaDetalles
	document.getElementById("PTotalSubFactura2").innerHTML=facturaTotal
	document.getElementById("PTotalFactura2").innerHTML=facturaTotal
	document.getElementById("PLetrasFactura2").innerHTML=facturaTotalLetras
	
	document.getElementById("pNroFactura3").innerHTML=facturanros
	document.getElementById("PfechaFactura3").innerHTML=facturaFecha
	document.getElementById("PNombreFactura3").innerHTML=facturaNombreAlumno
	document.getElementById("PCiFactura3").innerHTML=facturaCiAlumno
	document.getElementById("PDireccionFactura3").innerHTML=facturaDireccionAlumno
	document.getElementById("detalleFactura3").innerHTML=facturaDetalles
	document.getElementById("PTotalSubFactura3").innerHTML=facturaTotal
	document.getElementById("PTotalFactura3").innerHTML=facturaTotal
	document.getElementById("PLetrasFactura3").innerHTML=facturaTotalLetras
	

 var documento= document.getElementById("divreportfactura").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportfacturas.html");
	
}
function buscarnrodefactura() {
     var valor=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").text()
	//var	valor=document.getElementById("inptPuntoExpedicionCobrarAranceles").value
	var codPuntoExpe=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").attr("id")
	if(valor==""){
		return
	}
	document.getElementById("inptFacturaNroCobrarAranceles").value = "..."
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"puntoexpedicion": codPuntoExpe,
		"funt": "buscarnrofacturas"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				document.getElementById("inptFacturaNroCobrarAranceles").value = ""
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("inptFacturaNroCobrarAranceles").value = ""
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[3];
					if(datos_buscados==""){
						alertmensaje("EL NRO DE FACTURA ES INCORRECTO")
						return
					}
						document.getElementById("inptControlCobrarAranceles").value = datos[2];
						document.getElementById("inptFacturaNroCobrarAranceles").value = datos_buscados
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
/*
BALANCE GENERAL
*/
function verCerrarFrmReportBalanceGeneral(d){
	document.getElementById("divMinimizadoBalanceGeneral").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(controlacceso("VERINFORMEBALANCEGENERAL","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divReportBalance").style.display="";
	
	}else{
	document.getElementById("divReportBalance").style.display="none";
	limpiarCamposBusquedaBalanceGeneral()
	}
}
function vercerrartipodebalance(d){
	document.getElementById("btnTipoBalance1").style.backgroundColor=""
	document.getElementById("btnTipoBalance1").style.color=""
	document.getElementById("btnTipoBalance2").style.backgroundColor=""
	document.getElementById("btnTipoBalance2").style.color=""
	document.getElementById("divBalance1").style.display="none"
	document.getElementById("divBalance2").style.display="none"
	if(d=="1"){
		document.getElementById("btnTipoBalance1").style.backgroundColor="#2196F3"
		document.getElementById("btnTipoBalance1").style.color="#fff"
		document.getElementById("divBalance1").style.display=""
	}
	if(d=="2"){
		document.getElementById("btnTipoBalance2").style.backgroundColor="#2196F3"
		document.getElementById("btnTipoBalance2").style.color="#fff"
		document.getElementById("divBalance2").style.display=""
	}

}
function limpiarCamposBusquedaBalanceGeneral(){
	document.getElementById("inptBuscarBalanceGeneral4").value="";
	document.getElementById("inptBuscarBalanceGeneral5").value="";
	document.getElementById("inptBuscarBalanceGeneral6").value="";
	document.getElementById("inptBuscarBalanceGeneral7").value="";
	document.getElementById("inptBuscarBalanceGeneral8").value="";
	document.getElementById("inptBuscarBalanceGeneral9").value="";
	document.getElementById("inptRegistroReportBalanceGeneral").value="";
	document.getElementById("inptTotalPagadoReportBalanceGeneral").value="";
	document.getElementById("inptTotalaPagarReportBalanceGeneral").value="";
	document.getElementById("inptTotalenSaldoReportBalanceGeneral").value="";
	document.getElementById("divBuscadorReportBalanceGeneral").innerHTML="";
}
function MinimizarVentanaBalancelGeneral(){
	document.getElementById("divReportBalance").style.display="none";
	document.getElementById("divMinimizadoBalanceGeneral").style.display="";
}
function checkBuscarBalanceGeneral(d){
	if(d=="1"){
	document.getElementById('checkBuscarBalanceGeneral1').checked=true
	document.getElementById('checkBuscarBalanceGeneral2').checked=false	
	document.getElementById('checkBuscarBalanceGeneral3').checked=false	
	}
	if(d=="2"){
	document.getElementById('checkBuscarBalanceGeneral1').checked=false
	document.getElementById('checkBuscarBalanceGeneral2').checked=true	
	document.getElementById('checkBuscarBalanceGeneral3').checked=false
   document.getElementById('inptBuscarBalanceGeneral2').value=""	
	}
	if(d=="3"){
	document.getElementById('checkBuscarBalanceGeneral1').checked=false
	document.getElementById('checkBuscarBalanceGeneral2').checked=false	
	document.getElementById('checkBuscarBalanceGeneral3').checked=true	
	document.getElementById('inptBuscarBalanceGeneral1').value=""
	document.getElementById('inptBuscarBalanceGeneral2').value=""
	}
}
var controlordenbalancegeneral="1"
function ordenreportbalancegeneral(d){
	document.getElementById('tdOrdReportBalGeneral1').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneral2').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneral3').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneral4').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneral6').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneral7').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneral8').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdReportBalGeneral1').className="td_registro_orden"
		controlordenbalancegeneral="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportBalGeneral2').className="td_registro_orden"
		controlordenbalancegeneral="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportBalGeneral3').className="td_registro_orden"
		controlordenbalancegeneral="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportBalGeneral4').className="td_registro_orden"
		controlordenbalancegeneral="4"
	}
	if(d=="6"){
		document.getElementById('tdOrdReportBalGeneral6').className="td_registro_orden"
		controlordenbalancegeneral="6"
	}
	if(d=="7"){
		document.getElementById('tdOrdReportBalGeneral7').className="td_registro_orden"
		controlordenbalancegeneral="7"
	}
	if(d=="8"){
		document.getElementById('tdOrdReportBalGeneral8').className="td_registro_orden"
		controlordenbalancegeneral="8"
	}
	
	
	BuscarReportBalanceGeneral()
}
function BuscarReportBalanceGeneral() {
if(controlacceso("VERINFORMEBALANCEGENERAL","accion")==false){
	//SIN PERMISO
	  return;
		}
		var fecha1 =document.getElementById('inptBuscarBalanceGeneral1').value
	    var fecha2 =document.getElementById('inptBuscarBalanceGeneral2').value
	    var tipo =document.getElementById('inptBuscarBalanceGeneral3').value
	    var anho =document.getElementById('inptBuscarBalanceGeneral5').value
	    var curso =document.getElementById('inptBuscarBalanceGeneral10').value
	    var semestre =document.getElementById('inptBuscarBalanceGeneral11').value
		if(document.getElementById('checkBuscarBalanceGeneral1').checked==true){
			if(fecha1==""){
				alertmensaje("Falto seleccionar la fecha inicio")
				return
			}
			if(fecha2==""){
				alertmensaje("Falto seleccionar la fecha fin")
				return
			}
		}
		if(document.getElementById('checkBuscarBalanceGeneral2').checked==true){
			if(fecha1==""){
				alertmensaje("Falto seleccionar la fecha inicio")
				return
			}
			fecha2=""
	
		}
		if(document.getElementById('checkBuscarBalanceGeneral3').checked==true){
			fecha1=""
			fecha2=""	
		}
		
		

	
	var codArancel="";		
$("input[id=inptBuscarBalanceGeneral4]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	var codFilial="";		
$("input[id=inptBuscarBalanceGeneral6]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	var codCarrera="";		
$("input[id=inptBuscarBalanceGeneral7]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var documento=document.getElementById("inptBuscarBalanceGeneral8").value;
var alumno=document.getElementById("inptBuscarBalanceGeneral9").value;




	document.getElementById("divBuscadorReportBalanceGeneral").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportBalanceGeneral").value="";
    document.getElementById("inptTotalPagadoReportBalanceGeneral").value="";
    document.getElementById("inptTotalaPagarReportBalanceGeneral").value="";
    document.getElementById("inptTotalenSaldoReportBalanceGeneral").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"fecha1": fecha1,
		"fecha2": fecha2,
		"tipo": tipo,
		"anho": anho,
		"documento": documento,
		"alumno": alumno,
		"codFilial": codFilial,
		"codCarrera": codCarrera,
		"codArancel": codArancel,
		"curso": curso,
		"semestre": semestre,
		"ordenby": controlordenbalancegeneral,
		"funt": "buscarbalancegeneral"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorReportBalanceGeneral").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportBalanceGeneral").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportBalanceGeneral").innerHTML = datos_buscados
					document.getElementById("inptRegistroReportBalanceGeneral").value= datos[3];
					document.getElementById("inptTotalPagadoReportBalanceGeneral").value= datos[4];
			
    document.getElementById("inptTotalaPagarReportBalanceGeneral").value=datos[5];
    document.getElementById("inptTotalenSaldoReportBalanceGeneral").value=datos[6];
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function verCerrarDetallesPagosAlumnos(d){
	if(d=="1"){
		document.getElementById("divVistaDePagosAlumnosAlumnos").style.display=""
	}else{
		document.getElementById("divVistaDePagosAlumnosAlumnos").style.display="none"
	}
}
var codigoAlumnoBalanceGeneral="";
function ObtenerdatosReporBalanceGeneral(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	codigoAlumnoBalanceGeneral = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('lblNombreAlumnoPagoDetalles').innerHTML = $(datostr).children('td[id="td_datos_3"]').html()+" - "+$(datostr).children('td[id="td_datos_2"]').html();
	verCerrarDetallesPagosAlumnos("1")
	BuscarFacturasPagadasPor();
	BuscarFacturasAgrupadosPorCarreraPor();
	BuscarFacturasAgrupadosPorAnhopor();
	
}
function checkBuscarAlumnoPagoDetalle(d){
	if(d=="1"){
	document.getElementById('checkBuscarAlumnoPagoDetalle1').checked=true
	document.getElementById('checkBuscarAlumnoPagoDetalle2').checked=false	
	document.getElementById('checkBuscarAlumnoPagoDetalle3').checked=false	
	 document.getElementById('divAlumnoPagoDetalle1').style.display=""
	 document.getElementById('divAlumnoPagoDetalle2').style.display="none"
	 document.getElementById('divAlumnoPagoDetalle3').style.display="none"
	}
	if(d=="2"){
	document.getElementById('checkBuscarAlumnoPagoDetalle1').checked=false
	document.getElementById('checkBuscarAlumnoPagoDetalle2').checked=true	
	document.getElementById('checkBuscarAlumnoPagoDetalle3').checked=false
	document.getElementById('divAlumnoPagoDetalle1').style.display="none"
	 document.getElementById('divAlumnoPagoDetalle2').style.display=""
	 document.getElementById('divAlumnoPagoDetalle3').style.display="none"
  	
	}
	if(d=="3"){
	document.getElementById('checkBuscarAlumnoPagoDetalle1').checked=false
	document.getElementById('checkBuscarAlumnoPagoDetalle2').checked=false	
	document.getElementById('checkBuscarAlumnoPagoDetalle3').checked=true
    document.getElementById('divAlumnoPagoDetalle1').style.display="none"
	 document.getElementById('divAlumnoPagoDetalle2').style.display="none"
	 document.getElementById('divAlumnoPagoDetalle3').style.display=""	
	
	}
}
function BuscarFacturasPagadasPor() {

		
			if(codigoAlumnoBalanceGeneral==""){
				alertmensaje("FALTO SELECCIONAR UN REGISTRO")
				return
			}
	document.getElementById("divBuscadorDetallesPagosAlumno1").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codigo": codigoAlumnoBalanceGeneral,
		"funt": "facturaspagadaspor"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorDetallesPagosAlumno1").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorDetallesPagosAlumno1").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorDetallesPagosAlumno1").innerHTML = datos_buscados
				
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarFacturasAgrupadosPorCarreraPor() {

		
			if(codigoAlumnoBalanceGeneral==""){
				alertmensaje("FALTO SELECCIONAR UN REGISTRO")
				return
			}
	document.getElementById("divBuscadorDetallesPagosAlumno2").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codigo": codigoAlumnoBalanceGeneral,
		"funt": "facturasporcarrera"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorDetallesPagosAlumno2").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorDetallesPagosAlumno2").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorDetallesPagosAlumno2").innerHTML = datos_buscados
				
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarFacturasAgrupadosPorAnhopor() {

		
			if(codigoAlumnoBalanceGeneral==""){
				alertmensaje("FALTO SELECCIONAR UN REGISTRO")
				return
			}
	document.getElementById("divBuscadorDetallesPagosAlumno3").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codigo": codigoAlumnoBalanceGeneral,
		"funt": "facturasporanho"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorDetallesPagosAlumno3").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorDetallesPagosAlumno3").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorDetallesPagosAlumno3").innerHTML = datos_buscados
				
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

var controlordenbalancegeneralcriterio="1"
function ordenreportbalancegeneralcriterio(d){
	document.getElementById('tdOrdReportBalGeneralCriterio1').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneralCriterio2').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneralCriterio3').className="td_registro_orden1"
		document.getElementById('tdOrdReportBalGeneralCriterio4').className="td_registro_orden1"
	if(d=="1"){
		document.getElementById('tdOrdReportBalGeneralCriterio1').className="td_registro_orden"
		controlordenbalancegeneralcriterio="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportBalGeneralCriterio2').className="td_registro_orden"
		controlordenbalancegeneralcriterio="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportBalGeneralCriterio3').className="td_registro_orden"
		controlordenbalancegeneralcriterio="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportBalGeneralCriterio4').className="td_registro_orden"
		controlordenbalancegeneralcriterio="4"
	}
	
	
	BuscarReportBalanceGeneralporcriterio()
}
function checkBuscarBalanceGeneralCriterio1(d){
	
	if ($("input[id=checkBuscarBalanceGeneralCriterio1]").is(':checked') ) {
			$("input[id=checkBuscarBalanceGeneralCriterio1]").prop("checked", false)
			document.getElementById("inptCriterioCuotaBalance").value="";
			document.getElementById("inptCriterioCuotaBalance").disabled=true;
			}else{
			$("input[id=checkBuscarBalanceGeneralCriterio1]").prop("checked", true)
			document.getElementById("inptCriterioCuotaBalance").disabled=false;
			}
}
function checkBuscarBalanceGeneralCriterio2(d){
	
	if ($("input[id=checkBuscarBalanceGeneralCriterio2]").is(':checked') ) {
			$("input[id=checkBuscarBalanceGeneralCriterio2]").prop("checked", false)
			}else{
			$("input[id=checkBuscarBalanceGeneralCriterio2]").prop("checked", true)
			
			}
}
function checkBuscarBalanceGeneralCriterio3(d){
	
	if ($("input[id=checkBuscarBalanceGeneralCriterio3]").is(':checked') ) {
			$("input[id=checkBuscarBalanceGeneralCriterio3]").prop("checked", false)
			document.getElementById("inptCriterioMatriculaBalance").disabled=true;
			document.getElementById("inptCriterioMatriculaBalance").value="";
			}else{
			$("input[id=checkBuscarBalanceGeneralCriterio3]").prop("checked", true)
			document.getElementById("inptCriterioMatriculaBalance").disabled=false;
			
			}
}
function BuscarReportBalanceGeneralporcriterio() {
if(controlacceso("VERINFORMEBALANCEGENERAL","accion")==false){
	//SIN PERMISO
	  return;
		}
		var criteriocuota =document.getElementById('inptCriterioCuotaBalance').value
	    var criteriomateria =document.getElementById('inptCriterioCatedraBalance').value
	    var criteriomatricula =document.getElementById('inptCriterioMatriculaBalance').value
	    var tipo =document.getElementById('inptVerRegistrosCriterio').value
		
		
		



	var codFilial="";		
$("input[id=inptBuscarBalanceGeneralCriterio6]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	var codCarrera="";		
$("input[id=inptBuscarBalanceGeneralCriterio7]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var documento=document.getElementById("inptBuscarBalanceGeneralCriterio8").value;
var alumno=document.getElementById("inptBuscarBalanceGeneralCriterio9").value;
var anho=document.getElementById("inptBuscarBalanceGeneralCriterio10").value;
var curso=document.getElementById("inptBuscarBalanceGeneralCriterio11").value;
var semestre=document.getElementById("inptBuscarBalanceGeneralCriterio12").value;



	document.getElementById("divBuscadorReportBalanceGeneralCriterio").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportBalanceGeneral").value="";
    document.getElementById("inptTotalPagadoReportBalanceGeneral").value="";
    document.getElementById("inptTotalaPagarReportBalanceGeneral").value="";
    document.getElementById("inptTotalenSaldoReportBalanceGeneral").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"criteriocuota": criteriocuota,
		"criteriomateria": criteriomateria,
		"tipo": tipo,
		"criteriomatricula": criteriomatricula,
		"documento": documento,
		"alumno": alumno,
		"codFilial": codFilial,
		"codCarrera": codCarrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"ordenby": controlordenbalancegeneralcriterio,
		"funt": "buscarbalancegeneralporcriterio"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorReportBalanceGeneralCriterio").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportBalanceGeneralCriterio").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportBalanceGeneralCriterio").innerHTML = datos_buscados
					document.getElementById("inptRegistroReportBalanceGeneralCriterio").value= datos[3];
					document.getElementById("inptTotalPagadoReportBalanceGeneralCriterio").value= datos[4];
			
    document.getElementById("inptTotalaPagarReportBalanceGeneralCriterio").value=datos[5];
    document.getElementById("inptTotalenSaldoReportBalanceGeneralCriterio").value=datos[6];
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}


/*
CONSULTAR INDIVIDUAL
*/
function verCerrarFrmConsultaInd(d){
	if(controlacceso("VERCONSULTAINDIVIDUAL","accion")==false){
	//SIN PERMISO
	  return;
		}

	if(d=="1"){

	document.getElementById("divConsultarCuentasAlumnos").style.display="";
	
	}else{
	document.getElementById("divConsultarCuentasAlumnos").style.display="none";
	}
}
function verCerrarConfigFiltrosConsultarCuentas(d,t){
	if(d=="1"){
		document.getElementById("divFiltrosConsultarCuentas").style.display=""
	}else{
		document.getElementById("divFiltrosConsultarCuentas").style.display="none"
	}
	
}

function bloquearBuscarPorConsultaIndividual(d){
	
	document.getElementById('inptFacturaNroConsultaIdn').disabled = true
	document.getElementById('inptNombreArancelConsultaIdn').disabled = true
	document.getElementById('inptCiAlumnoConsultaIndi').disabled = true
	document.getElementById('inptNombreApellidoIndi').disabled = true	
	document.getElementById('inptFacturaNroConsultaIdn').style.backgroundColor = "#cccc"
	document.getElementById('inptNombreArancelConsultaIdn').style.backgroundColor = "#cccc"
	document.getElementById('inptCiAlumnoConsultaIndi').style.backgroundColor = "#cccc"
	document.getElementById('inptNombreApellidoIndi').style.backgroundColor = "#cccc"	
	if(d.value=="1"){
	verCerrarOpcionesConsultas("1")
		controlConsultarRegisto="1"
	}
	if(d.value=="2"){	
	document.getElementById('inptNombreApellidoIndi').disabled = false			
	document.getElementById('inptCiAlumnoConsultaIndi').disabled = false			
	document.getElementById('inptNombreApellidoIndi').style.backgroundColor = ""
	document.getElementById('inptCiAlumnoConsultaIndi').style.backgroundColor = ""
	verCerrarOpcionesConsultas("1")
		controlConsultarRegisto="2"
	}
	if(d.value=="3"){
		document.getElementById('inptFacturaNroConsultaIdn').disabled = false			
		document.getElementById('inptNombreArancelConsultaIdn').disabled = false			
	document.getElementById('inptFacturaNroConsultaIdn').style.backgroundColor = ""
	document.getElementById('inptNombreArancelConsultaIdn').style.backgroundColor = ""
		verCerrarOpcionesConsultas("2")
			controlConsultarRegisto="3"
	}
	if(d.value=="4"){
		document.getElementById('inptFacturaNroConsultaIdn').disabled = false			
		document.getElementById('inptNombreArancelConsultaIdn').disabled = false			
	document.getElementById('inptFacturaNroConsultaIdn').style.backgroundColor = ""
	document.getElementById('inptNombreArancelConsultaIdn').style.backgroundColor = ""
		verCerrarOpcionesConsultas("2")
			controlConsultarRegisto="4"
	}
	
}
var controlConsultarRegisto="1";
var controlConsultarRegisto2="1";
function verCerrarOpcionesConsultas(d){
	if(d=="1"){
		document.getElementById("btnTipoFiltro1").style="background-color: #2196F3;color:#fff";
		document.getElementById("btnTipoFiltro2").style="";
		document.getElementById("divFiltro1").style.display="";
		document.getElementById("divFiltro2").style.display="none";
		document.getElementById("trBuscadorConsultasIndividuales").innerHTML='<td class="td_registro" style="width:10%;">FILIAL</td><td class="td_registro" style="width:10%;">NOMBRE </td><td class="td_registro" style="width:10%;">APELLIDO</td><td class="td_registro" style="width:10%;">NRO DOC.</td><td class="td_registro" style="width:10%;">CARRERA</td><td class="td_registro" style="width:5%;">REGISTROS</td><td class="td_registro" style="width:10%;">PAGOS</td>';
		document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML="";
	controlConsultarRegisto2="1";
	}
	if(d=="2"){
		document.getElementById("btnTipoFiltro1").style="";
		document.getElementById("btnTipoFiltro2").style="background-color: #2196F3;color:#fff";
		document.getElementById("divFiltro1").style.display="none";
		document.getElementById("divFiltro2").style.display="";
		document.getElementById("trBuscadorConsultasIndividuales").innerHTML='<td class="td_registro" style="width:10%;">FILIAL</td><td class="td_registro" style="width:10%;">NRO FACTURA</td><td class="td_registro" style="width:5%;">#</td><td class="td_registro" style="width:10%;">AÑO</td><td class="td_registro" style="width:10%;">NOMBRE </td><td class="td_registro" style="width:10%;">APELLIDO</td><td class="td_registro" style="width:10%;">NRO DOC.</td><td class="td_registro" style="width:10%;">CARRERA</td><td class="td_registro" style="width:5%;">CURSO</td><td class="td_registro" style="width:10%;">CONCEPTO</td><td class="td_registro" style="width:10%;">SUB-TOTAL</td>';
		document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML="";
			controlConsultarRegisto2="2";
	}
	
}
var idAlumnosFkConsultaIndi="";
function ControlCamposAlumnosConsultaInd(datos){
	if(datos.value==""){
		idAlumnosFkConsultaIndi="";
		 document.getElementById("inptNombreApellidoIndi").value="";		
	}
	
}

function ConsultarFacturaConsultaIndividua() {
if(controlacceso("INFORMECONSULTAINDIVIDUAL","accion")==false){
	//SIN PERMISO
	  return;
		}
		

	



var nrodocumento=document.getElementById("inptCiAlumnoConsultaIndi").value
var nrofactura=document.getElementById("inptFacturaNroConsultaIdn").value
var nombre=document.getElementById("inptNombreAlumnoConsultaIndi").value
var anho=document.getElementById("inptAnhoConsultaIndi").value

var codFilial="";
	$("input[id=inptFilialConsultaIdn]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
});

if(codFilial==""){
		alertmensaje("FALTO SELECCIONAR UNA FILIAL")
	return
}


var codCarrera="";
	$("input[id=inptNombreCarreraConsultaIdn]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
   
	
	document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML = imgCargandoA
    document.getElementById("inptTotalPagadoConsultaInd").innerHTML="Cargando...";    
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"NroDocumento": nrodocumento,
		"NrodeFactura": nrofactura,
		"CodCarreraSeleccionado": codCarrera,
		"codFilial": codFilial,
		"sqlAranceles": sqlArancelesConsultaIndividual,
		"sqlAnho": sqlAnhoConsultaIndividual,
		"sqlCurso": sqlCursoConsultaIndividual,
		"nombre": nombre,
		"anho": anho,
		"funt":"consultaindividual"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			 document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML="";
			 document.getElementById("inptTotalPagadoConsultaInd").innerHTML="";			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML = ''
			document.getElementById("inptTotalPagadoConsultaInd").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					var datos_buscados = datos[2];
				if(controlConsultarRegisto2=="1"){
					document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML = '<table style="display:none" ><td class="td_registro" style="width:10%;">FILIAL</td><td class="td_registro" style="width:10%;">NOMBRE </td><td class="td_registro" style="width:10%;">APELLIDO</td><td class="td_registro" style="width:10%;">NRO DOC.</td><td class="td_registro" style="width:10%;">CARRERA</td><td class="td_registro" style="width:5%;">REGISTROS</td><td class="td_registro" style="width:10%;">PAGOS</td></table>'+datos_buscados
				}else{
					document.getElementById("divBuscadorConsultaIndividualFactutas").innerHTML = '<table style="display:none" ><td class="td_registro" style="width:10%;">FILIAL</td><td class="td_registro" style="width:10%;">NRO FACTURA</td><td class="td_registro" style="width:5%;">#</td><td class="td_registro" style="width:10%;">AÑO</td><td class="td_registro" style="width:10%;">NOMBRE </td><td class="td_registro" style="width:10%;">APELLIDO</td><td class="td_registro" style="width:10%;">NRO DOC.</td><td class="td_registro" style="width:10%;">CARRERA</td><td class="td_registro" style="width:5%;">CURSO</td><td class="td_registro" style="width:10%;">CONCEPTO</td><td class="td_registro" style="width:10%;">SUB-TOTAL</td></table>'+datos_buscados
				}
					              
    document.getElementById("inptRegistroConsultaInd").innerHTML= "Total Registro: "+datos[3];
    document.getElementById("inptTotalPagadoConsultaInd").innerHTML= "Total Pagado: "+datos[4];
 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

/*CONSULTA MULTIPLE*/
function verCerrarFrmConsultasMultiples(d){
	if(controlacceso("VERCONSULTAMULTIPLE","accion")==false){
	//SIN PERMISO
	  return;
		}
document.getElementById("divMinimizadoConsultaMultiples").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	if(d=="1"){
	document.getElementById("divConsultarCuentasMultiples").style.display="";
	
	}else{
	document.getElementById("divConsultarCuentasMultiples").style.display="none";
	}
	
}
function MinimizarVentanaConsultaMultiple(){
	document.getElementById("divConsultarCuentasMultiples").style.display="none";
	document.getElementById("divMinimizadoConsultaMultiples").style.display="";
}
function verCerrarConfigFiltrosConsultasMultiples(d,t){
	if(d=="1"){
		if(controldeconsultamasiva==true ){
			alertmensaje("ACCIÓN NO DISPONIBLE")
			return
		}
		document.getElementById("divFiltrosConsultasMultiples").style.display=""
	}else{
		document.getElementById("divFiltrosConsultasMultiples").style.display="none"
	}
	
}
function MasFiltrosConsultaMultiple(datos){
	if(document.getElementById("divMasFiltrosConsultaMultiple").style.display==""){
		document.getElementById("divMasFiltrosConsultaMultiple").style.display="none"
		datos.src="/GoodTechnologyEPNSA/iconos/filtros.png";
	}else{
		$("div[id=divMasFiltrosConsultaMultiple]").slideDown(500);
		datos.src="/GoodTechnologyEPNSA/iconos/filtros2.png";
	}
}
var totalCargaMasivoConsulta=0;
var totalRegistroMasivoConsulta=0;
var DatodeExcelCopiadoConsulta = new Array ();
var datosAbuscarConsultaMultiple=new Array ();
var RegistroConsultaCargadoMasivo=0;
var totalPagadoMasivoConsulta=0;
var totalPagarMasivoConsulta=0;
var totalBalanceMasivoConsulta=0;
var totalRegistrosEncontradoMasivo=0;
var controldeconsultamasiva;
function cancelarConsultamasiva(){
	controldeconsultamasiva=false
	document.getElementById("lblNroRegistroEncontradoConsultaMasivo").innerHTML="";
	document.getElementById("divEfectoCargandoConsultaMasivoConsulta").style.display="none";
	document.getElementById("btnConsultaMasivo").style.display="";
	document.getElementById("btnCancelarConsultaMasivo").style.display="";
}
function generarTablaExcelConsulta(){
	if(controlacceso("INFORMECONSULTAMULTIPLE","accion")==false){
	//SIN PERMISO
	  return;
		}
	datosAbuscarConsultaMultiple=new Array ();
	var data=document.getElementById("InputExcelConsultaMultiple").value
	totalCargaMasivoConsulta=0;
	totalRegistroMasivoConsulta=0;
	 var rows = data.split("\n");
      var pagina = "";
      var controlCarga=0;
       for(var y in rows) {
		   pagina = "";
		 if(controlCarga<1000){
       var cells = rows[y].split("\t");
       for(var x in cells) {
		   if(x==0){
		   if(cells[x]!= " " || cells[x]!= ""){
			var c=controlDeDatosREpetidos(cells)
			if(c==0){
		    pagina+= '<table class="tableRegistroSearch"><tr id="tdExcelMultipleBusquedad"><td  id="td_datos_1">'+cells[x]+'</td></tr></table>';
			datosAbuscarConsultaMultiple.push(cells[x])
			totalCargaMasivoConsulta=totalCargaMasivoConsulta+1;
			}else{
				//pagina+= '<td   style="background-color:red;color:#fff">Dato Repetido ('+cells[x]+')</td>';
			}
		   }
		   }
       }
		 }
	   controlCarga=controlCarga+1;
	  document.getElementById("TbGeneradoConsultaMultiple").innerHTML+=pagina;
	   
	  
}


 document.getElementById("DivConsultaMultiple1").style.display="none";
 document.getElementById("DivConsultaMultiple2").style.display="";

}
function EmpezarAbuscarConsultaMasivo (){
if(controlacceso("INFORMECONSULTAMULTIPLE","accion")==false){
	//SIN PERMISO
	  return;
		}	
totalPagadoMasivoConsulta=0;
totalPagarMasivoConsulta=0;
totalBalanceMasivoConsulta=0;
totalRegistrosEncontradoMasivo=0;
		 
document.getElementById("divFiltrosConsultasMultiples").style.display="none"
RegistroConsultaCargadoMasivo=0;
controldeconsultamasiva=true
document.getElementById("divProgresoMasivoConsulta2").style.width="0%";
	document.getElementById("lblNroRegistroEncontradoConsultaMasivo").value="Preparando datos....";
	document.getElementById("btnConsultaMasivo").style.display="none";
	document.getElementById("btnCancelarConsultaMasivo").style.display="none";
	document.getElementById("divEfectoCargandoConsultaMasivoConsulta").style.display="";
		document.getElementById("divBuscadorConsultaMasivaFactutas").innerHTML="<table style='display:none'><tr  >"
+"<td class='td_registro' style='width:10%;'>FILIAL</td>"
+"<td class='td_registro' style='width:10%;'>CARRERA</td>"
+"<td class='td_registro' style='width:5%;'>CURSO</td>"
+"<td class='td_registro' style='width:5%;'>SEMESTRE</td>"
+"<td class='td_registro' style='width:5%;'>AÑO</td>"
+"<td class='td_registro' style='width:15%;'>NOMBRE </td>"
+"<td class='td_registro' style='width:10%;'>NRO DOC.</td>"
+"<td class='td_registro' style='width:5%;'>REGISTROS</td>"
+"<td class='td_registro' style='width:5%;'>TOTAL PAGADO</td>"
+"<td class='td_registro' style='width:5%;'>TOTAL A PAGAR</td>"
+"<td class='td_registro' style='width:5%;'>BALANCE</td>"
+"</tr></table>"
document.getElementById("divBuscadorConsultaMasivaFactutas").innerHTML+="<div id='tbBuscadorMultiple1'></div><div id='tbBuscadorMultiple2'></div>"
 cargarAdminTareas()
	document.getElementById("lblNroTotalRegistroConsultaMasivo").innerHTML="";
procesarconsultaMasiva()
}
function procesarconsultaMasiva(){
	
	if(controldeconsultamasiva==true){
	 var pagina=""
     if(RegistroConsultaCargadoMasivo < totalCargaMasivoConsulta){
		 
		 var documento=datosAbuscarConsultaMultiple[RegistroConsultaCargadoMasivo]
		  var pagina="<div id='divDatosMasivos_"+documento+"'></div>"
			document.getElementById("tbBuscadorMultiple1").innerHTML+=pagina
					 RegistroConsultaCargadoMasivo=RegistroConsultaCargadoMasivo+1;

		 ConsultaMasiva(RegistroConsultaCargadoMasivo,documento) 
		  
	 }else{
		 controldeconsultamasiva=false
	 }	 
	 }
	 }
function controlDeDatosREpetidos(ci){
	var control=0;
	 $("tr[id=tdExcelMultipleBusquedad]").each(function(i, elementohtml){
		
			var documento= $(elementohtml).children('td[id="td_datos_1"]').html();
		    if(ci==documento)   {
				control=1;
			} 
		
	 })
	 
	  // for(var y in DatodeExcelCopiado) {
		  // documento=DatodeExcelCopiado[y]
		  // if(ci==documento)   {
				// control=1;
			// } 
		  
	  // }
	 
	 return control;
}
function ConsultaMasiva(cargado,documento)  {

  

 document.getElementById("divDatosMasivos_"+documento).innerHTML="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0' ><tr  >"
+"<td class='td_registro' style='width:10%;'>...</td>"
+"<td class='td_registro' style='width:10%;'>...</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"<td class='td_registro' style='width:15%;'>... </td>"
+"<td class='td_registro' style='width:10%;'>"+documento+"</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"<td class='td_registro' style='width:5%;'>...</td>"
+"</tr></table>"
	
	var codFilial="";
	$("input[id=inptFilialConsultaMultiple]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
	})
	
	var codCarrera="";
	$("input[id=inptCarreraConsultaMultiple]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
	})
	
	var codArancel="";
	$("input[id=inptArancelConsultaMultiple]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codArancel=$(match).attr("id")
       } else {
           // value is not in list
       }
	})
	
	var curso=document.getElementById("inptCursoConsultaMultiple").value
	var semestre=document.getElementById("inptSemestreConsultaMultiple").value
	var anho=document.getElementById("inptAnhoConsultaMultiple").value
	
	
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "ConsultaMasivo")
	datos.append("documento", documento)
	datos.append("codCarrera", codCarrera)
	datos.append("filial", codFilial)
	datos.append("codArancel", codArancel)
	datos.append("curso", curso)
	datos.append("semestre", semestre)
	datos.append("anho", anho)
	var OpAjax = $.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			
			Respuesta = responseText;
			console.log(Respuesta)
	try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
                Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
					 
				document.getElementById("lblNroRegistroTdConsultaMasivo").innerHTML="Consultando "+cargado+" de "+totalCargaMasivoConsulta;
				var porc=(Number(cargado)*100)/Number(totalCargaMasivoConsulta)				
				document.getElementById("divProgresoMasivoConsulta2").style.width=porc+"%";	
                   totalPagadoMasivoConsulta=totalPagadoMasivoConsulta+datos["4"];
                   totalPagarMasivoConsulta=totalPagarMasivoConsulta+datos["5"];
                   totalBalanceMasivoConsulta=totalBalanceMasivoConsulta+datos["6"];
					if(totalCargaMasivoConsulta==cargado){
						document.getElementById("lblNroRegistroTdConsultaMasivo").innerHTML="";
						document.getElementById("divEfectoCargandoConsultaMasivoConsulta").style.display="none";
						document.getElementById("btnConsultaMasivo").style.display="";
						document.getElementById("btnCancelarConsultaMasivo").style.display="";
					

						
					}
					var pagina = datos["2"];
				  
                   totalRegistrosEncontradoMasivo=Number(totalRegistrosEncontradoMasivo)+Number(datos["3"]);
				   document.getElementById("lblNroRegistroEncontradoConsultaMasivo").value=separadordemilesnumero(totalRegistrosEncontradoMasivo);
					document.getElementById("divDatosMasivos_"+datos["7"]).innerHTML=pagina
					
						document.getElementById("tbBuscadorMultiple2").innerHTML="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0' ><tr  >"
+"<td class='td_registro' style='width:10%;'></td>"
+"<td class='td_registro' style='width:10%;'></td>"
+"<td class='td_registro' style='width:5%;'></td>"
+"<td class='td_registro' style='width:5%;'></td>"
+"<td class='td_registro' style='width:5%;'></td>"
+"<td class='td_registro' style='width:15%;'></td>"
+"<td class='td_registro' style='width:10%;'></td>"
+"<td class='td_registro' style='width:5%;'></td>"
+"<td style='width:5%;background-color: #fff;  color: #000; padding: 8px;  text-align: center;font-weight: bold;' class='pTitulo5'>"+separadordemilesnumero(totalPagadoMasivoConsulta)+"</td>"
+"<td style='width:5%;background-color: #fff;  color: #000; padding: 8px;  text-align: center;font-weight: bold;' class='pTitulo5'>"+separadordemilesnumero(totalPagarMasivoConsulta)+"</td>"
+"<td style='width:5%;background-color: #fff;  color: #000; padding: 8px;  text-align: center;font-weight: bold;' class='pTitulo5'>"+separadordemilesnumero(totalBalanceMasivoConsulta)+"</td>"
+"</tr></table>"
         
          procesarconsultaMasiva();				
			}
		
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
/*CONSULTA DINÁMICA*/ 
var sqlArancelesConsultaMasiva="";
var sqlArancelesConsultaIndividual="";
var controlventasqlAranceles="";
function verCerrarVentanaSqlArancel(v){
	if(document.getElementById("divSeleccionarArancel").style.display==""){
		sqlArancelesConsultaMasiva="";
		sqlArancelesConsultaIndividual="";
		document.getElementById("divSeleccionarArancel").style.display="none"
		cargarconsultasdinamicasaranceles()
	 	  
	}else{
		controlventasqlAranceles=v
		document.getElementById("divSeleccionarArancel").style.display=""
	}
}
function cargarconsultasdinamicasaranceles(){
	var nroSelect=0;
	$("input[name=checkboxArancelesConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			
			if(sqlArancelesConsultaMasiva==""){
				sqlArancelesConsultaMasiva+=" and (ar.cod_listadearancelesFk='"+elementohtml.value+"'";
				sqlArancelesConsultaIndividual+=" and (ar.cod_listadearancelesFk='"+elementohtml.value+"'";
				}else{
					sqlArancelesConsultaMasiva+=" or ar.cod_listadearancelesFk='"+elementohtml.value+"'";
					sqlArancelesConsultaIndividual+=" or ar.cod_listadearancelesFk='"+elementohtml.value+"'";
				}
			
				
				nroSelect=nroSelect+1;
			
		 }
		 
	 })
	 
	 if(sqlArancelesConsultaMasiva!=""){
	
		sqlArancelesConsultaMasiva+=")";
		sqlArancelesConsultaIndividual+=")";
	 }
	 
	 if(controlventasqlAranceles=="consultamultiple"){
	  document.getElementById("inptNroSelecDinamicoArancelConsultMultiple").value=nroSelect
	  sqlArancelesConsultaIndividual="";
	 }
	 if(controlventasqlAranceles=="consultaindividual"){
	  document.getElementById("inptNroSelecDinamicoArancelConsultaIndividual").value=nroSelect
	  sqlArancelesConsultaMasiva=""
	 }
	
}
var sqlAnhoConsultaMasiva="";
var sqlAnhoConsultaIndividual="";
var controlventanasqlAnho="";
function verCerrarVentanaSqlAnho(v){
	if(document.getElementById("divSeleccionarAnho").style.display==""){
		
		sqlAnhoConsultaMasiva="";
		sqlAnhoConsultaIndividual="";
		document.getElementById("divSeleccionarAnho").style.display="none"
		cargarconsultasdinamicasanho()
	}else{
		controlventanasqlAnho=v;
		document.getElementById("divSeleccionarAnho").style.display=""
	}
}
function cargarconsultasdinamicasanho(){
var nroSelect=0;
		sqlAnhoConsultaMasiva="";
		$("input[name=checkboxAnhoSqlConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			
			 if(sqlAnhoConsultaMasiva==""){
				sqlAnhoConsultaMasiva+=" and ( ar.anho='"+elementohtml.value+"'";
				sqlAnhoConsultaIndividual+=" and ( ar.anho='"+elementohtml.value+"'";
				}else{
				sqlAnhoConsultaMasiva+=" or ar.anho='"+elementohtml.value+"'";
				sqlAnhoConsultaIndividual+=" or ar.anho='"+elementohtml.value+"'";
				}				
				nroSelect=nroSelect+1;
			
		 }
		 
	 })
	  if(sqlAnhoConsultaMasiva!=""){
		 sqlAnhoConsultaMasiva+=")";
		 sqlAnhoConsultaIndividual+=")";
		
	 }
	 if(controlventanasqlAnho=="consultamultiple"){
	 document.getElementById("inptNroSeleDinamicocAnhoSql").value=nroSelect
	 sqlAnhoConsultaIndividual="";
     }
	 if(controlventanasqlAnho=="consultaindividual"){
	 sqlAnhoConsultaMasiva="";
	 document.getElementById("inptNroSeleDinamicocAnhoSqlConsultaIndividual").value=nroSelect
     }
	
}
var sqlCursoConsultaMasiva="";
var sqlCursoConsultaIndividual="";
var controlventanasqlcurso="";
function verCerrarVentanaSqlCurso(v){
	if(document.getElementById("divSeleccionarCurso").style.display==""){
		sqlCursoConsultaMasiva="";
		sqlCursoConsultaIndividual="";
		document.getElementById("divSeleccionarCurso").style.display="none"
	 cargarconsultasdinamicascurso()
	}else{
		controlventanasqlcurso=v
		document.getElementById("divSeleccionarCurso").style.display=""
	}
}
function cargarconsultasdinamicascurso(){
	
		var nroSelect=0;
		sqlCursoConsultaMasiva="";
		document.getElementById("divSeleccionarCurso").style.display="none"
		$("input[name=checkboxCursoSql]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			    if(sqlCursoConsultaMasiva==""){
				sqlCursoConsultaMasiva+=" and ( ar.curso='"+elementohtml.value+"'";
				sqlCursoConsultaIndividual+=" and ( ar.curso='"+elementohtml.value+"'";
			
				}else{
					sqlCursoConsultaMasiva+=" or ar.curso='"+elementohtml.value+"'";
					sqlCursoConsultaIndividual+=" or ar.curso='"+elementohtml.value+"'";
				
				}
				nroSelect=nroSelect+1;
			
		 }
		 
	 })
	 if(sqlCursoConsultaMasiva!=""){
		 sqlCursoConsultaMasiva+=")";
		 sqlCursoConsultaIndividual+=")";
		
	 }
	  if(controlventanasqlAnho=="consultamultiple"){
	 document.getElementById("inptNroSelecDinamicoCursoSql").value=nroSelect
	 sqlCursoConsultaIndividual=""
     }
	 if(controlventanasqlAnho=="consultaindividual"){
	 sqlCursoConsultaMasiva=""
	 document.getElementById("inptNroSelecDinamicoCursoSqlConsultaIndividual").value=nroSelect
     }
	
	
}
function LimpiarCamposConsultaMasiva(){
	document.getElementById("divProgresoMasivoConsulta2").style.width="0%";
	document.getElementById("DivConsultaMultiple1").style.display="";
	document.getElementById("DivConsultaMultiple2").style.display="none";
	document.getElementById("InputExcelConsultaMultiple").value="";
	document.getElementById("divBuscadorConsultaMasivaFactutas").innerHTML="";
	document.getElementById("TbGeneradoConsultaMultiple").innerHTML="";
	 sqlCursoConsultaMasiva="";
		 sqlAnhoConsultaMasiva="";
		 sqlArancelesConsultaMasiva="";
		
	 document.getElementById("inptNroSelecDinamicoArancelConsultMultiple").value=""
	 document.getElementById("inptNroSeleDinamicocAnhoSql").value=""
	 document.getElementById("inptNroSelecDinamicoCursoSql").value=""
	
}

/*DETALLADO POR FACTURA*/
var totalPagadoMasivoConsulta2=0;
var totalPagarMasivoConsulta2=0;
var totalBalanceMasivoConsulta2=0;
var totalRegistrosEncontradoMasivoConsulta2=0;
var totalRegistrosPagadoMasivoConsulta2=0;
var ControlCargaBuscadorDetallesMasivoConsulta=false;
function vercerrarBuscardorMultipleDetalladoConsultaCarrera(){
	if(document.getElementById("divConsultarDetallesFacturaConsultaMasivo").style.display==""){
		document.getElementById("divConsultarDetallesFacturaConsultaMasivo").style.display="none"
			
	}else{
		
		
		var control=0;
		 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			control=control+1;
		 }
	 })
	 if(control==0){
		 document.getElementById("TdDatosBuscadorMultipleConsulta2").innerHTML="";
		 document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta2").innerHTML="..."
		 document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta1").innerHTML="..."
		 alertmensaje("FALTO SELECCIONAR LOS REGISTROS QUE QUIERES VER ")
          return false;
	 }
	 
	 document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta3").innerHTML=control;
		$("div[id=divConsultarDetallesFacturaConsultaMasivo]").fadeIn(500);
		
		if(document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta2").innerHTML=="..."){
			 BuscadorDetallesFacturaMasivoConsulta();
		}
		
	}
}
var ControlCargaBuscadorDetallesMasivo=false;
function BuscadorDetallesFacturaMasivoConsulta(){	

	
	if(ControlCargaBuscadorDetallesMasivoConsulta==true){		
		 alertmensaje("AUN NO SE TERMINO DE CARGAR LA BUSQUEDA ANTERIOR, AGUARDE UN MOMENTO")
          return false;		
	}
	totalPagadoMasivoConsulta2=0;
	totalPagarMasivoConsulta2=0;
	totalBalanceMasivoConsulta2=0;
	totalRegistrosEncontradoMasivoConsulta2=0;
	totalRegistrosPagadoMasivoConsulta2=0;	
	 datosDocConsultaDetalladoporfatura=new Array ();
 datosCarreraConsultaDetalladoporfatura=new Array ();
	document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta2").innerHTML="....";
	controlBuscadorMasivo="2"
	var c=1;
	var control=0;
	 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			 var documento= elementohtml.id;
			var carrera= elementohtml.value;
			 datosDocConsultaDetalladoporfatura.push(documento)
			 datosCarreraConsultaDetalladoporfatura.push(carrera)
			control=control+1;
		 }
	 })
	 
	 totalRegistroCargaDetaFactura=control;
	 RegistroCargadosDetaFactura=0;
	 document.getElementById("divEfectoCargandoBuscadorMasivoDF").style.display=""
	 document.getElementById("divProgresoMasivoDF2").style.width="0%"
	 document.getElementById("lblNroRegistroTdMasivoDF").innerHTML="Preparando...."
	 
	 document.getElementById("TdDatosBuscadorMultipleConsulta2").innerHTML="<table style='display:none'><tr  >"+
"<td  id='td_datos_1' style='width:5%'>FILIAL</td>"+
"<td  id='td_datos_2' style='width:5%'>AÑO</td>"+
"<td  id='td_datos_3' style='width:5%'>NRO FACTURA</td>"+
"<td  id='td_datos_3' style='width:5%'>#</td>"+
"<td  id='td_datos_4' style='width:5%'>FECHA</td>"+
"<td  id='td_datos_6'  style='width:5%;'>NOMBRE</td>"+
"<td  id='td_datos_7'  style='width:5%;'>APELLIDO</td>"+
"<td  id='td_datos_8'  style='width:5%;'>DOCUMENTO</td>"+
"<td  id='td_datos_10' style='width:5%'>CARRERA</td>"+
"<td  id='td_datos_11' style='width:5%'>CURSO</td>"+ 
"<td  id='td_datos_14' style='width:5%;'>CONCEPTO</td>"+ 
"<td  id='td_datos_16' style='width:5%;'>SUB-TOTAL</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTALES</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTAL A PAGAR</td>"+
"<td  id='td_datos_16' style='width:5%;'>BALANCE</td>"+
"</tr></table>"
ProcesarCargaConsultaDetalladoporfactura()

}
var totalRegistroCargaDetaFactura=0
var RegistroCargadosDetaFactura=0
var datosDocConsultaDetalladoporfatura=new Array ();
var datosCarreraConsultaDetalladoporfatura=new Array ();
function ProcesarCargaConsultaDetalladoporfactura(){
	
     if(RegistroCargadosDetaFactura < totalRegistroCargaDetaFactura){
		 
		 var documento=datosDocConsultaDetalladoporfatura[RegistroCargadosDetaFactura]
		 var carrera=datosCarreraConsultaDetalladoporfatura[RegistroCargadosDetaFactura]
		 var carrera2 = carrera.trim();
		  var pagina="<div id='divDatosMasivos2_"+documento+carrera2+"'></div>"
		 document.getElementById("TdDatosBuscadorMultipleConsulta2").innerHTML+=pagina
		  cargarAdminTareas()
		 RegistroCargadosDetaFactura=RegistroCargadosDetaFactura+1;
		  document.getElementById("lblNroRegistroTdMasivoDF").innerHTML="Cargando "+ RegistroCargadosDetaFactura +" de "+ totalRegistroCargaDetaFactura
		  var porc=(Number(RegistroCargadosDetaFactura)*100)/Number(totalRegistroCargaDetaFactura)
				
				document.getElementById("divProgresoMasivoDF2").style.width=porc+"%";
		 buscadorDetalleMasivoConsulta(RegistroCargadosDetaFactura,documento,carrera) 
		 ControlCargaBuscadorDetallesMasivoConsulta=true
		  
	 }else{
		  document.getElementById("divEfectoCargandoBuscadorMasivoDF").style.display="none"
		  	ControlCargaBuscadorDetallesMasivoConsulta=false		
	 }
	 
}



/*
function BuscadorDetallesFacturaMasivoConsulta(){	
	if(controlacceso("INFORMES DETALLADO POR FACTURA","informes")==false){
	//SIN PERMISO
	  return;
	  ControlCargaBuscadorDetallesMasivoConsulta==false
		}	
	if(ControlCargaBuscadorDetallesMasivoConsulta==true){		
		 alertmensaje("AUN NO SE TERMINO DE CARGAR LA BUSQUEDA ANTERIOR, AGUARDE UN MOMENTO")
          return false;		
	}
	totalPagadoMasivoConsulta2=0;
	totalPagarMasivoConsulta2=0;
	totalBalanceMasivoConsulta2=0;
	totalRegistrosEncontradoMasivoConsulta2=0;
	totalRegistrosPagadoMasivoConsulta2=0;	
	document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta2").innerHTML="....";
	controlBuscadorMasivo="2"
	var c=1;
	var control=0;
	 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			control=control+1;
		 }
	 })
	 document.getElementById("TdDatosBuscadorMultipleConsulta2").innerHTML="<table style='display:none'><tr  >"+
"<td  id='td_datos_1' style='width:5%'>FILIAL</td>"+
"<td  id='td_datos_2' style='width:5%'>AÑO</td>"+
"<td  id='td_datos_3' style='width:5%'>NRO FACTURA</td>"+
"<td  id='td_datos_3' style='width:5%'>#</td>"+
"<td  id='td_datos_4' style='width:5%'>FECHA</td>"+
"<td  id='td_datos_6'  style='width:5%;'>NOMBRE</td>"+
"<td  id='td_datos_7'  style='width:5%;'>APELLIDO</td>"+
"<td  id='td_datos_8'  style='width:5%;'>DOCUMENTO</td>"+
"<td  id='td_datos_10' style='width:5%'>CARRERA</td>"+
"<td  id='td_datos_11' style='width:5%'>CURSO</td>"+ 
"<td  id='td_datos_14' style='width:5%;'>CONCEPTO</td>"+ 
"<td  id='td_datos_16' style='width:5%;'>SUB-TOTAL</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTALES</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTAL A PAGAR</td>"+
"<td  id='td_datos_16' style='width:5%;'>BALANCE</td>"+
"</tr></table>"
	 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		  if ($(elementohtml).is(':checked')){
			
		
			var documento= elementohtml.id;
			var carrera= elementohtml.value;
			var carreraname= $(elementohtml).attr("style");
			var carrera2 = carrera.trim();
		    var pagina="<div id='divDatosMasivos2_"+documento+carrera2+"'></div>"
			document.getElementById("TdDatosBuscadorMultipleConsulta2").innerHTML+=pagina
			
			if(c>=control){
				ControlCargaBuscadorDetallesMasivoConsulta=false
			}else{
				ControlCargaBuscadorDetallesMasivoConsulta=true
			}
			c=c+1
			buscadorDetalleMasivoConsulta(documento,carrera,carreraname) 
			
			
			 }
			
	 })
}
*/


function buscadorDetalleMasivoConsulta(registrocargado,documento,carrera)  {
    var carrera2 = carrera.trim();
	
	document.getElementById("divDatosMasivos2_"+documento+carrera2).innerHTML="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'><tr >"+
"<td  id='td_datos_1' style='width:5%'>...</td>"+
"<td  id='td_datos_2' style='width:5%'>...</td>"+
"<td  id='td_datos_3' style='width:5%'>...</td>"+
"<td  id='td_datos_3' style='width:5%'>...</td>"+
"<td  id='td_datos_4' style='width:5%'>...</td>"+
"<td  id='td_datos_6' style='width:5%'>...</td>"+
"<td  id='td_datos_7' style='width:5%'>...</td>"+
"<td  id='td_datos_8' style='width:5%'>"+documento+"</td>"+
"<td  id='td_datos_10' style='width:5%'>"+carrera+"</td>"+
"<td  id='td_datos_11' style='width:5%'>...</td>"+
"<td  id='td_datos_14' style='width:5%'>...</td>"+ 
"<td  id='td_datos_15' style='width:5%'>...</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #0f5612;'>...</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #FF5722;'>...</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #e22a1d;'>...</td>"+
"</tr></table>"

var codFilial="";
	$("input[id=inptFilialConsultaMultiple]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
	})

	
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "BuscadorMasivofacturaDetalles")
	datos.append("documento", documento)
	datos.append("carrera", carrera2)
	datos.append("filial", codFilial)
	datos.append("sqlAranceles", sqlArancelesConsultaMasiva)
	datos.append("sqlAnho", sqlAnhoConsultaMasiva)
	datos.append("sqlCurso", sqlCursoConsultaMasiva)
	var OpAjax = $.ajax({
		data: datos,
	    url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {			
			// manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
				document.getElementById("divDatosMasivos2_"+documento+carrera2).innerHTML="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'><tr >"+
"<td  id='td_datos_1' style='width:5%'>error</td>"+
"<td  id='td_datos_2' style='width:5%'>error</td>"+
"<td  id='td_datos_3' style='width:5%'>error</td>"+
"<td  id='td_datos_3' style='width:5%'>error</td>"+
"<td  id='td_datos_4' style='width:5%'>error</td>"+
"<td  id='td_datos_6' style='width:5%'>error</td>"+
"<td  id='td_datos_7' style='width:5%'>error</td>"+
"<td  id='td_datos_8' style='width:5%'>"+documento+"</td>"+
"<td  id='td_datos_10' style='width:5%'>"+carrera+"</td>"+
"<td  id='td_datos_11' style='width:5%'>error</td>"+
"<td  id='td_datos_14' style='width:5%'>error</td>"+ 
"<td  id='td_datos_15' style='width:5%'>error</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #0f5612;'>0</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #FF5722;'>0</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #e22a1d;'>0</td>"+
"</tr></table>"
ProcesarCargaConsultaDetalladoporfactura()
			return false;
		},
		success: function (responseText) {			
			Respuesta = responseText;
			console.log(Respuesta)
	try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {
				
					var pagina = datos["2"];
					var carrera2 = datos["5"];
					carrera2=carrera2.trim();
				      totalRegistrosEncontradoMasivoConsulta2=Number(totalRegistrosEncontradoMasivoConsulta2)+Number(datos["3"]);
				      totalRegistrosPagadoMasivoConsulta2=Number(totalRegistrosPagadoMasivoConsulta2)+Number(datos["6"]);
				   document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta2").innerHTML=separadordemilesnumero(totalRegistrosEncontradoMasivoConsulta2);
				   document.getElementById("lblNroTotalRegistroBuscadoMasivoConsulta1").innerHTML=separadordemilesnumero(totalRegistrosPagadoMasivoConsulta2);
					document.getElementById("divDatosMasivos2_"+datos["4"]+carrera2).innerHTML=pagina
					ProcesarCargaConsultaDetalladoporfactura()
				}
		
			} catch (error) {
					document.getElementById("divDatosMasivos2_"+documento+carrera2).innerHTML="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'><tr >"+
"<td  id='td_datos_1' style='width:5%'>error</td>"+
"<td  id='td_datos_2' style='width:5%'>error</td>"+
"<td  id='td_datos_3' style='width:5%'>error</td>"+
"<td  id='td_datos_3' style='width:5%'>error</td>"+
"<td  id='td_datos_4' style='width:5%'>error</td>"+
"<td  id='td_datos_6' style='width:5%'>error</td>"+
"<td  id='td_datos_7' style='width:5%'>error</td>"+
"<td  id='td_datos_8' style='width:5%'>"+documento+"</td>"+
"<td  id='td_datos_10' style='width:5%'>"+carrera+"</td>"+
"<td  id='td_datos_11' style='width:5%'>error</td>"+
"<td  id='td_datos_14' style='width:5%'>error</td>"+ 
"<td  id='td_datos_15' style='width:5%'>error</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #0f5612;'>0</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #FF5722;'>0</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #e22a1d;'>0</td>"+
"</tr></table>"
ProcesarCargaConsultaDetalladoporfactura()
				// alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				// var titulo="Error: "+error+" \r\n Consola: "+responseText
				// GuardarArchivosLog(titulo)
			}


		}
	});


}

/*BALANCE POR AÑO*/
var totalPagadoMasivoAnhoConsulta2=0;
var totalPagarMasivoAnhoConsulta2=0;
var totalBalanceMasivoAnhoConsulta2=0;
var totalRegistrosEncontradoMasivoAnhoConsulta2=0;
var totalRegistrosPagadoMasivoAnhoConsulta2=0;
var totalRegistrosBalancConsultae=0;
var totalCargaMasivoBalanceConsulta=0;
var ControlCargaBuscadorDetallesMasivoAnhoConsulta=false;
var DocumentoBalanceConsulta=new Array ();
var CarreraBalanceConsulta=new Array ();
var NombreCarreraBalanceConsulta=new Array ();
function vercerrarBuscardorMultipleBalanceConsulta(){
	if(document.getElementById("divConsultarBalancePorAnhoConsulta").style.display==""){
		document.getElementById("divConsultarBalancePorAnhoConsulta").style.display="none"
		
	}else{
		
		
		var control=0;
		 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			control=control+1;
		 }
	 })
	 if(control==0){
		 document.getElementById("TdDatosBuscadorMultipleConsulta2").innerHTML="";
		 document.getElementById("lblNroTotalRegistroBuscadoMasivoAnhoConsulta2").innerHTML="..."
		 document.getElementById("lblNroTotalRegistroBuscadoMasivoAnhoConsulta1").innerHTML="..."
		 alertmensaje("FALTO SELECCIONAR LOS REGISTROS QUE QUIERES VER ")
          return false;
	 }
	 document.getElementById("lblNroTotalRegistroBuscadoMasivoAnhoConsulta3").innerHTML=control;
		$("div[id=divConsultarBalancePorAnhoConsulta]").fadeIn(500);
		
		if(document.getElementById("lblNroTotalRegistroBuscadoMasivoAnhoConsulta2").innerHTML=="..."){
			 EmpezarDetallesMasivoBalanceConsulta();
		}
		
	}
}




function EmpezarDetallesMasivoBalanceConsulta(){
	
if( ControlCargaBuscadorDetallesMasivoAnhoConsulta==true){
alertmensaje("AUN NO SE TERMINO DE CARGAR LA BUSQUEDA ANTERIOR, AGUARDE UN MOMENTO")
          return false;
	return;
}
	
 totalPagadoMasivoAnhoConsulta2=0;
 totalPagarMasivoAnhoConsulta2=0;
 totalBalanceMasivoAnhoConsulta2=0;
 totalRegistrosEncontradoMasivoAnhoConsulta2=0;
 totalRegistrosPagadoMasivoAnhoConsulta2=0;
 totalRegistrosBalanceConsulta=0;
 totalCargaMasivoBalanceConsulta=0;
 ControlCargaBuscadorDetallesMasivoAnhoConsulta=true;
 DocumentoBalanceConsulta=new Array ();
 CarreraBalanceConsulta=new Array ();
 NombreCarreraBalanceConsulta=new Array ();
	
	var c=1;
	var control=0;
	 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		 if ($(elementohtml).is(':checked')){
			control=control+1;
		 }
	 })
	 document.getElementById("TdDatosBuscadorMultipleBalanceConsulta2").innerHTML="<table style='display:none'><tr  >"+
"<td  id='td_datos_1' style='width:5%'>FILIAL</td>"+
"<td  id='td_datos_2' style='width:5%'>AÑO</td>"+
"<td  id='td_datos_6'  style='width:5%;'>NOMBRE</td>"+
"<td  id='td_datos_7'  style='width:5%;'>APELLIDO</td>"+
"<td  id='td_datos_8'  style='width:5%;'>DOCUMENTO</td>"+
"<td  id='td_datos_10' style='width:5%'>CARRERA</td>"+
"<td  id='td_datos_11' style='width:5%'>CURSO</td>"+ 
"<td  id='td_datos_14' style='width:5%;'>CONCEPTO </td>"+ 
"<td  id='td_datos_16' style='width:5%;'>SUB-TOTAL</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTAL A PAGAR</td>"+
"<td  id='td_datos_16' style='width:5%;'>BALANCE</td>"+
"<td  id='td_datos_16' style='width:5%;'>SUB-TOTALES</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTALES A PAGAR</td>"+
"<td  id='td_datos_16' style='width:5%;'>TOTAL BALANCE</td>"+
"</tr></table>"

	 $("input[name=checkboxMasivoConsulta]").each(function(i, elementohtml){
		  if ($(elementohtml).is(':checked')){
			
		
			var documento= elementohtml.id;
			var carrera= elementohtml.value;
			var carreraname= $(elementohtml).attr("Style");
			
			DocumentoBalanceConsulta.push(documento)
			NombreCarreraBalanceConsulta.push(carreraname)
			CarreraBalanceConsulta.push(carrera)
			totalRegistrosBalanceConsulta=totalRegistrosBalanceConsulta+1;
			
			
			 }
			
	 })
	 document.getElementById("divEfectoCargandoBuscadorMasivoBA").style.display=""
	 document.getElementById("divProgresoMasivoBA2").style.width="0%"
	 document.getElementById("lblNroRegistroTdMasivoBA").innerHTML="Procesando.."
	 procesarBusquedadMasivaBalanceConsulta()
}
function procesarBusquedadMasivaBalanceConsulta(){
	
	if(ControlCargaBuscadorDetallesMasivoAnhoConsulta==true){
	 var pagina=""
     if(totalCargaMasivoBalanceConsulta < totalRegistrosBalanceConsulta){
		 
		 var documento=DocumentoBalanceConsulta[totalCargaMasivoBalanceConsulta]
		 var carrera=CarreraBalanceConsulta[totalCargaMasivoBalanceConsulta]
		 var carreraname=NombreCarreraBalanceConsulta[totalCargaMasivoBalanceConsulta]
		  var carrera2 = carrera.trim();
		    var pagina="<div id='divDatosMasivosAnho2_"+documento+carrera2+"'></div>"
			document.getElementById("TdDatosBuscadorMultipleBalanceConsulta2").innerHTML+=pagina
			 cargarAdminTareas()
					 totalCargaMasivoBalanceConsulta=totalCargaMasivoBalanceConsulta+1;
 
					 var porc=(Number(totalCargaMasivoBalanceConsulta)*100)/Number(totalCargaMasivoBalanceConsulta)
							document.getElementById("divProgresoMasivoBA2").style.width=porc+"%";
	 document.getElementById("lblNroRegistroTdMasivoBA").innerHTML="Cargando "+totalCargaMasivoBalanceConsulta+" de "+totalRegistrosBalanceConsulta
		 buscadorDetalleMasivoBalanceConsulta(documento,carrera,carreraname) 
		  
	 }else{
		  ControlCargaBuscadorDetallesMasivoAnhoConsulta=false
		   document.getElementById("divEfectoCargandoBuscadorMasivoBA").style.display="none"
	 }	 
	 }
	 
	 }
function buscadorDetalleMasivoBalanceConsulta(documento,carrera,carreraname)  {
    var carrera2 = carrera.trim();
	
	document.getElementById("divDatosMasivosAnho2_"+documento+carrera2).innerHTML="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'><tr >"+
"<td  id='td_datos_3' style='width:5%'>...</td>"+
"<td  id='td_datos_4' style='width:5%'>...</td>"+
"<td  id='td_datos_6' style='width:5%'>...</td>"+
"<td  id='td_datos_7' style='width:5%'>...</td>"+
"<td  id='td_datos_8' style='width:5%'>"+documento+"</td>"+
"<td  id='td_datos_10' style='width:5%'>"+carreraname+"</td>"+
"<td  id='td_datos_11' style='width:5%'>...</td>"+
"<td  id='td_datos_14' style='width:5%'>...</td>"+ 
"<td  id='td_datos_15' style='width:5%'>...</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #0f5612;'>...</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #FF5722;'>...</td>"+
"<td  id='td_datos_16' style='width:5%;color:#fff;background-color: #e22a1d;'>...</td>"+
"</tr></table>"

var codFilial="";
	$("input[id=inptFilialConsultaMultiple]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFilial=$(match).attr("id")
       } else {
           // value is not in list
       }
	})

	
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "BuscadorMasivoConsultaBalances")
	datos.append("documento", documento)
	datos.append("carrera", carrera)
	datos.append("filial", codFilial)
	datos.append("sqlAranceles", sqlArancelesConsultaMasiva)
	datos.append("sqlAnho", sqlAnhoConsultaMasiva)
	datos.append("sqlCurso", sqlCursoConsultaMasiva)
	var OpAjax = $.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
			
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")

			return false;
		},
		success: function (responseText) {
			
			Respuesta = responseText;
			console.log(Respuesta)
	try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {				
					var pagina = datos["2"];
					var carrera2 = datos["5"];
					carrera2=carrera2.trim();
				      totalRegistrosEncontradoMasivoAnhoConsulta2=Number(totalRegistrosEncontradoMasivoAnhoConsulta2)+Number(datos["3"]);
				      totalRegistrosPagadoMasivoAnhoConsulta2=Number(totalRegistrosPagadoMasivoAnhoConsulta2)+Number(datos["6"]);
				   document.getElementById("lblNroTotalRegistroBuscadoMasivoAnhoConsulta2").innerHTML=separadordemilesnumero(totalRegistrosEncontradoMasivoAnhoConsulta2);
				   document.getElementById("lblNroTotalRegistroBuscadoMasivoAnhoConsulta1").innerHTML=separadordemilesnumero(totalRegistrosPagadoMasivoAnhoConsulta2);
									document.getElementById("divDatosMasivosAnho2_"+datos["4"]+carrera2).innerHTML=pagina
					procesarBusquedadMasivaBalanceConsulta();
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}

/*VER DATOS PERSONALES*/
function VerCerrarOpcionesOrdenDatosPersonalizadosConsulta(d){
	document.getElementById("BtnBuscarDatos1Consulta").style="width:185px;";
	document.getElementById("BtnBuscarDatos2Consulta").style="width:185px;";
	document.getElementById("BtnBuscarDatos3Consulta").style="width:185px;";
	document.getElementById("BtnBuscarDatos4Consulta").style="width:185px;";
		document.getElementById("divBuscarTodosLosRegistrosConsulta").style.display="none";
			document.getElementById("divBuscarAgrupadoporcarreraConsulta").style.display="none";
			document.getElementById("divBuscarAgrupadoporconceptoConsulta").style.display="none";
			document.getElementById("divBuscarBanlanceporAnhoConsulta").style.display="none";
	if(d=="1"){
		document.getElementById("divBuscarTodosLosRegistrosConsulta").style.display="";
		document.getElementById("BtnBuscarDatos1Consulta").style="background-color: #2196F3;  color: #fff;width:185px;";
	}
	if(d=="2"){
		document.getElementById("divBuscarAgrupadoporcarreraConsulta").style.display="";
		document.getElementById("BtnBuscarDatos2Consulta").style="background-color: #2196F3;  color: #fff;width:185px;";
	}
	if(d=="3"){
		document.getElementById("divBuscarAgrupadoporconceptoConsulta").style.display="";
		document.getElementById("BtnBuscarDatos3Consulta").style="background-color: #2196F3;  color: #fff;width:185px;";
	}
	if(d=="4"){
		document.getElementById("divBuscarBanlanceporAnhoConsulta").style.display="";
		document.getElementById("BtnBuscarDatos4Consulta").style="background-color: #2196F3;  color: #fff;width:185px;";
	}

	
	
}

var DocumentoAlumnoSelect="";
function ObtenerDatosPersonalizadosConsulta(datostr){
	document.getElementById('lblCiDatosPersonalesConsulta').innerHTML = $(datostr).children('td[id="td_datos_8"]').html();
document.getElementById('lblNombreDatosPersonalesConsulta').innerHTML = $(datostr).children('td[id="td_datos_6"]').html();
document.getElementById('lblApellidoDatosPersonalesConsulta').innerHTML = $(datostr).children('td[id="td_datos_7"]').html();
	DocumentoAlumnoSelect = $(datostr).children('td[id="td_datos_8"]').html();
	verCerrarConsultaDatosPersonalesConsulta()
   
	BuscarHistorialCompletoConsulta();
	BuscarAgrupadoPorCarreraConsulta()
	BuscarAgrupadoPorConceptoConsulta()
	BuscarBalancePorAnhoConsulta()
}
function buscarDatosPersonalizados(){
	
   
	BuscarHistorialCompletoConsulta();
	BuscarAgrupadoPorCarreraConsulta()
	BuscarAgrupadoPorConceptoConsulta()
	BuscarBalancePorAnhoConsulta()
}
function verCerrarConsultaDatosPersonalesConsulta(){
	if(document.getElementById("divConsultarDatosPerzonalizadosConsulta").style.display==""){
		document.getElementById("divConsultarDatosPerzonalizadosConsulta").style.display="none"
		
	}else{
		
		$("div[id=divConsultarDatosPerzonalizadosConsulta]").fadeIn(500);
		
	}
}
function BuscarHistorialCompletoConsulta() {
	document.getElementById("TdDatosPersonalHistorialConsulta").innerHTML = imgCargandoA
	var anho=document.getElementById("inptAnhoDatosPersonales").value
	var nrofactura=document.getElementById("inptFacturaNroDatosPersonales").value
	var codCarrera="";
	$("input[id=inptNombreCarreraDatosPersonales]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": DocumentoAlumnoSelect,
		"codCarrera": codCarrera,
		"nrofactura": nrofactura,
		"anho": anho,
		"funt": "buscarhistorialDocumento"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {

		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("TdDatosPersonalHistorialConsulta").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("TdDatosPersonalHistorialConsulta").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("lblRegistroDatosPersonalesConsulta").innerHTML = datos[3] ;
					document.getElementById("lblTotalPersonalizadoBuscadoExcelConsulta").innerHTML = datos[4] ;
					document.getElementById("TdDatosPersonalHistorialConsulta").innerHTML ="<table  style='display:none'>"
					+"<tbody>"
					+"<tr>"
					+"<td>FILIAL</td>"
					+"<td >AÑO</td>"
					+"<td >FACTURA</td>"
					+"<td >#</td>"
					+"<td >FECHA</td>"
					+"<td >CARRERA</td>"
					+"<td >CURSO</td>"
					+"<td >CONCEPTO</td>"
					+"<td >SUBTOTAL</td>"
					+"</tr>"
					+"</tbody>"
					+"</table>"+datos_buscados
					 cargarAdminTareas()
					}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAgrupadoPorCarreraConsulta() {
	document.getElementById("TdDatosPersonalAgrupadoporCarreraConsulta").innerHTML = imgCargandoA 
	var anho=document.getElementById("inptAnhoDatosPersonales").value
	var nrofactura=document.getElementById("inptFacturaNroDatosPersonales").value
	var codCarrera="";
	$("input[id=inptNombreCarreraDatosPersonales]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": DocumentoAlumnoSelect,
		"anho": anho,
		"nrofactura": nrofactura,
		"codCarrera": codCarrera,
		"funt": "historialAgrupadoPorCarrera"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("TdDatosPersonalAgrupadoporCarreraConsulta").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("TdDatosPersonalAgrupadoporCarreraConsulta").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("TdDatosPersonalAgrupadoporCarreraConsulta").innerHTML ="<table  style='display:none'>"
					+"<tbody>"
					+"<tr>"
					+"<td>FILIAL</td>"
					+"<td >AÑO</td>"
					+"<td >FACTURA</td>"
					+"<td >#</td>"
					+"<td >FECHA</td>"
					+"<td >CARRERA</td>"
					+"<td >CURSO</td>"
					+"<td >CONCEPTO</td>"
					+"<td >SUBTOTAL</td>"
					+"</tr>"
					+"</tbody>"
					+"</table>"+ datos_buscados
					 cargarAdminTareas()
					}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAgrupadoPorConceptoConsulta() {
	document.getElementById("TdDatosPersonalAgrupadoporConceptoConsulta").innerHTML = imgCargandoA
	var anho=document.getElementById("inptAnhoDatosPersonales").value
	var nrofactura=document.getElementById("inptFacturaNroDatosPersonales").value
	var codCarrera="";
	$("input[id=inptNombreCarreraDatosPersonales]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
 	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": DocumentoAlumnoSelect,
		"anho": anho,
		"nrofactura": nrofactura,
		"codCarrera": codCarrera,
		"funt": "historialAgrupadoPorConcepto"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("TdDatosPersonalAgrupadoporConceptoConsulta").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("TdDatosPersonalAgrupadoporConceptoConsulta").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("TdDatosPersonalAgrupadoporConceptoConsulta").innerHTML ="<table  style='display:none'>"
					+"<tbody>"
					+"<tr>"
					+"<td>FILIAL</td>"
					+"<td >AÑO</td>"
					+"<td >CARRERA</td>"
					+"<td >FECHA</td>"
					+"<td >CURSO</td>"
					+"<td >CONCEPTO</td>"
					+"<td >SUBTOTAL</td>"
					+"<td >TOTAL A PAGAR</td>"
					+"<td >BALANCE</td>"
					+"<td >SUBTOTALES</td>"
					+"<td >TOTALES A PAGAR</td>"
					+"<td >TOTALES BALANCE</td>"
					+"</tr>"
					+"</tbody>"
					+"</table>"+ datos_buscados
					 cargarAdminTareas()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarBalancePorAnhoConsulta() {
	document.getElementById("TdDatosPersonalBalancePoranhoConsulta").innerHTML = imgCargandoA
	var anho=document.getElementById("inptAnhoDatosPersonales").value
	var nrofactura=document.getElementById("inptFacturaNroDatosPersonales").value
	var codCarrera="";
	$("input[id=inptNombreCarreraDatosPersonales]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCarrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
 	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": DocumentoAlumnoSelect,
		"anho": anho,
		"nrofactura": nrofactura,
		"codCarrera": codCarrera,
		"funt": "buscarBalanceporanho"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargarFactura.php",
		type: "post",
			 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("TdDatosPersonalBalancePoranhoConsulta").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("TdDatosPersonalBalancePoranhoConsulta").innerHTML = ''			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
						document.getElementById("TdDatosPersonalBalancePoranhoConsulta").innerHTML ="<table  style='display:none'>"
					+"<tbody>"
					+"<tr>"
					+"<td>FILIAL</td>"
					+"<td >AÑO</td>"
					+"<td >CARRERA</td>"
					+"<td >CURSO</td>"
					+"<td >CONCEPTO</td>"
					+"<td >TOTAL PAGADO</td>"
					+"<td >TOTAL A PAGAR</td>"
					+"<td >BALANCE</td>"
					+"<td >TOTALES PAGADO</td>"
					+"<td >TOTALES A PAGAR</td>"
					+"<td >TOTALES BALANCE</td>"
					+"</tr>"
					+"</tbody>"
					+"</table>"+ datos_buscados
					 cargarAdminTareas()
					document.getElementById("lblTotalPagarPersonalizadoBuscadoExcelConsulta").innerHTML = datos[3];
					document.getElementById("lblTotalBalancePersonalizadoBuscadoExcelConsulta").innerHTML = datos[4];
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

	 
	 
/*OTROS*/
function QuitarSeparadorMil(inputs){
	var i=inputs.value;
i=i.toString().replace(/\./g,'');
	i=i.replace(',','.')
	return i;

	
}
function QuitarSeparadorMilValor(inputs){
	var i=inputs;
  i=i.toString().replace(/\./g,'');
	i=i.replace(',','.')
	return i;

	
}
function separadordemiles(input){
	
	var num=input.value.replace(/\./g,'');
	if(!isNaN(num)){
	var num2 = num.toString().split('.');
var thousands = num2[0].split('').reverse().join('').match(/.{1,3}/g).join('.');
var decimals = (num2[1]) ? ','+num2[1] : '';

var answer =  thousands.split('').reverse().join('')+decimals;  
		input.value=answer
	}else{
		/*alert('Esto no es un número')
		//input.value=input.value.replace(/[˄\d\.]*g,'');
		 asi va antes de la /g */
		
	}
	
}
function separadordemilesnumero(input){
	
	var num=input.toString().replace(/\./g,'');
	if(!isNaN(num)){
	var num2 = num.toString().split('.');
var thousands = num2[0].split('').reverse().join('').match(/.{1,3}/g).join('.');
var decimals = (num2[1]) ? ','+num2[1] : '';

var answer =  thousands.split('').reverse().join('')+decimals;  
		input=answer
	}else{
		/*alert('Esto no es un número')
		//input.value=input.value.replace(/[˄\d\.]*g,'');
		 asi va antes de la /g */
		
	}
	return input;
}

function alertmensaje(titulo) {

	document.getElementById('lbltitulomensaje').innerHTML = titulo
	document.getElementById('div_principal_info').style.display = ''
    document.getElementById("btnocultarinfo").focus()
}


function ocultarmensaje() {

	document.getElementById('lbltitulomensaje').innerHTML = ""
	document.getElementById('div_principal_info').style.display = 'none'
}

function verCerrarEfectoCargando(d) {
	document.getElementById("div_principal_info_carga").style.display = 'none'
	if (d == "1") {
		document.getElementById("div_principal_info_carga").style.display = ''
	}

}


/*
CERRAR SESION 
*/
function cerrarSesion(){
	 verCerrarEfectoCargando("1")	
	document.cookie="user=;max-age=86400;path=/";
    document.cookie="pass=;max-age=86400;path=/";
	obtener_datos_user()
	  var datos = new FormData();
			 datos.append("useru" , userid)
			 datos.append("passu" , passuser)
			 datos.append("navegador" , navegador)			
			var OpAjax= $.ajax({			
			data: datos,
			url: "/GoodTechnologyEPNSA/php/cerrarsesion.php",
			type:"post",
	        cache:false,
			contentType: false,
			processData: false,
				 xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Uload progress
        xhr.upload.addEventListener("progress" ,function (evt) {
         var kb=((evt.loaded*1)/1000).toFixed(1)
		
		 if(kb=="0.0"){
			kb=0.1;
		}
               cargarConectividad("enviado",kb,"0")           
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    cargarConectividad("recibido","0",kb)  
        }, false);
        return xhr;
    },
				error: function(jqXHR, textstatus, errorThrowm){
					manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
 verCerrarEfectoCargando("2")	
					 return false;
			},
			success: function(responseText)
			{
			  	 verCerrarEfectoCargando("2")	 
			Respuesta=responseText;			
				console.log(Respuesta)
	try{
				var datos = $.parseJSON(Respuesta); 
          Respuesta=datos["1"];
		  Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	  
				ir_a_login()				
			}		
          }catch(error){					
					alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)					
				}
				}
			});	
}
function ir_a_login(){
	window.location="/GoodTechnologyEPNSA/system/login.html";
}

function ExporarAExcelConsultarCuentas() {
	$("#divBuscadorConsultaIndividualFactutas").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAExcelConsultaMultiple() {
	var pagina=document.getElementById("divBuscadorConsultaMasivaFactutas").innerHTML
	$("td[id=tdcheckboxMasivoConsulta]").each(function (i, td) {
		$(td).remove()

	});
	$("#divBuscadorConsultaMasivaFactutas").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       });
 document.getElementById("divBuscadorConsultaMasivaFactutas").innerHTML=pagina;	   
}
function ExporarConsultasMultiplesFactura() {

	$("#TdDatosBuscadorMultipleConsulta2").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
	 
}
function ExporarConsultasBalancePorAnho() {
	$("#TdDatosBuscadorMultipleBalanceConsulta2").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAHistorialCompletoDatosPersonalizado() {
	$("#TdDatosPersonalHistorialConsulta").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAgrupadoPorAnhoDatosPersonalizado() {
	$("#TdDatosPersonalAgrupadoporCarreraConsulta").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAgrupadoPorConcepto() {
	$("#TdDatosPersonalAgrupadoporConceptoConsulta").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarBalanceporAnho() {
	$("#TdDatosPersonalBalancePoranhoConsulta").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAlumnosMatriculados() {
	$("#divBuscadorReportAlumnosMatriculados").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAExcel10() {
	$("#divBuscadorTiposAranceles").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAExcel11() {
	$("#TdDatosBuscadorMultipleBalance2").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
function ExporarAExcel12() {
	$("#TdDatosInformeExcel").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}
/*
Control de acceso 
*/
function controlacceso(frm,accion){
	
	if(accesosuser[frm][accion]!="SI"){
		
		  alertmensaje("NO TIENES PERMISO PARA ACCEDER")
		  return false;
	}else{
		return true;
	}
	
	
	
}

function removeToMenu(){
	var controlacademico=0;
	var controladministrativo=0;
	var controlalumno=0;
	if( accesosuser["VERUSUARIO"]["accion"]!="SI")
	{
		$("div[id=divMenuUsuario]").remove()
		
	}
	if( accesosuser["VERFILIAL"]["accion"]!="SI")
	{
		$("div[id=divMenuFilial]").remove()
		
		controlacademico=controlacademico+1;
		
	}
	if( accesosuser["VERCARRERA"]["accion"]!="SI")
	{
		$("div[id=divMenuCarrera]").remove()
		
		controlacademico=controlacademico+1;
	}
	if( accesosuser["VERFACULTAD"]["accion"]!="SI")
	{
		$("div[id=divMenuFacultad]").remove()
	
		controlacademico=controlacademico+1;
	}
	if( accesosuser["VERARANCEL"]["accion"]!="SI")
	{
		$("div[id=divMenuArancel]").remove()

		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERALUMNOS"]["accion"]!="SI")
	{
		$("div[id=divMenuDatosdelAlumno1]").remove()
		
		$("td[id=tdNuevoAlumno]").remove()
		controlalumno=controlalumno+1;
	}
	if( accesosuser["VERMISDATOS"]["accion"]!="SI")
	{
		$("div[id=divMenuMisDatos]").remove()
	
	}
	if( accesosuser["VERASIGNARCARRERA"]["accion"]!="SI")
	{
		$("div[id=divMenuAsignarCarrera]").remove()
	
		controlacademico=controlacademico+1;
	}
	if( accesosuser["VERASIGNARARANCEL"]["accion"]!="SI")
	{
		$("div[id=divMenuAsignarArancel]").remove()
		
		controladministrativo=controladministrativo+1;
		
	}
	if( accesosuser["VERNROFACTURA"]["accion"]!="SI")
	{
		$("div[id=divMenuNroFactura]").remove()
		
		controladministrativo=controladministrativo+1
	}
	if( accesosuser["VERMATRICULACION"]["accion"]!="SI")
	{
		$("div[id=divMenuMatricularAlumno]").remove()
		
		controlalumno=controlalumno+1;
	}
	if( accesosuser["VERFACTURACION"]["accion"]!="SI")
	{
		
		$("div[id=divMenuCargarFactura]").remove()
		$("div[id=divMenuCargarFactura2]").remove()
		
		
	
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["COBRANZAS"]["accion"]!="SI")
	{
		
		
		
		$("div[id=divMenuCargarCobranza]").remove()
		$("div[id=divMenuCargarCobranza2]").remove()
		
	
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERCONSULTAINDIVIDUAL"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaIndividual2]").remove()
	
		controladministrativo=controladministrativo+1;
		
	}
	if( accesosuser["VERCONSULTAMULTIPLE"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaMultiple2]").remove()
		
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERINFORMEMATRICULACION"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaAlumnosMatriculados]").remove()
	
		controlalumno=controlalumno+1;
		
	}
	if( accesosuser["VERINFORMEFACTURACION"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaFacturasCargadas]").remove()
		
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERNROFACTURA"]["accion"]!="SI")
	{
		$("div[id=divMenuFacturasHabilitadas]").remove()
		
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERDEUDASALUMNOS"]["accion"]!="SI")
	{
		$("div[id=divMenuDeudasAnteriores]").remove()
		$("div[id=divMenuDeudasAnteriores2]").remove()
		
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERCONSULTAINDIVIDUAL"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaIndividual1]").remove()
	
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERCONSULTAMULTIPLE"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaMultiple1]").remove()
		
		controladministrativo=controladministrativo+1;
	}	
	if( accesosuser["VERCATEDRA"]["accion"]!="SI")
	{
		$("div[id=divMenuDatosdeCatedras]").remove()
		
		controlacademico=controlacademico+1;
	}
	if( accesosuser["VERMALLA"]["accion"]!="SI")
	{
		$("div[id=divMenuAsignarMallaCurricular]").remove()
		
		controlacademico=controlacademico+1;
	}
	if( accesosuser["VERINFORMEMATRICULACION"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaAlumnosMatriculados]").remove()
		
	}
	if( accesosuser["VERARANCEL"]["accion"]!="SI")
	{
		$("div[id=divMenuArancel]").remove()
		
		controladministrativo=controladministrativo+1;
	}
	if( accesosuser["VERDEUDASALUMNOS"]["accion"]!="SI")
	{
		$("div[id=divMenuDeudasAnteriores]").remove()
		
	}
	if( accesosuser["VERINFORMEBALANCEGENERAL"]["accion"]!="SI")
	{
		$("div[id=divMenuConsultaBalanceGeneral1]").remove()
		
	}
	 
	 if(controlacademico==6){
		 document.getElementById("divMenuAcademico").style.display='none'
	 }
	 if(controladministrativo==12){
		 document.getElementById("divMenuAcadministracion").style.display='none'
	 }
	 if(controlalumno==3){
		 document.getElementById("divMenuAlumnos").style.display='none'
	 }
		
}

function removeToMenuCheckt(){
	
	if( accesosuser["VERESTADOUSUARIO"]["accion"]!="SI")
	{
		document.getElementById("trCheckUsuer").style.display="none"
	}
	if( accesosuser["VERESTADOFILIAL"]["accion"]!="SI")
	{
			document.getElementById("trCheckFilial").style.display="none"
	}
	if( accesosuser["VERESTADOCARRERA"]["accion"]!="SI")
	{
		document.getElementById("trCheckCarrera").style.display="none"
	}
	if( accesosuser["VERESTADOFACULTAD"]["accion"]!="SI")
	{
		document.getElementById("trCheckFacultad").style.display="none"
	}
	if( accesosuser["VERESTADOARANCEL"]["accion"]!="SI")
	{
		document.getElementById("trCheckListadoArancel").style.display="none"
	}
	if( accesosuser["VERESTADOALUMNOS"]["accion"]!="SI")
	{
		document.getElementById("trCheckListadoAlumno").style.display="none"
	}
	if( accesosuser["VERESTADODEUDASALUMNOS"]["accion"]!="SI")
	{
		//document.getElementById("trCheckListadoAlumno").style.display="none"
	}
	if( accesosuser["VERESTADOCATEDRA"]["accion"]!="SI")
	{
		document.getElementById("trCheckListadoCatedra").style.display="none"
	}
	if( accesosuser["VERESTADOASIGNARCARRERA"]["accion"]!="SI")
	{
		//document.getElementById("trCheckListadoCatedra").style.display="none"
		
	}
	if( accesosuser["VERESTADOMALLA"]["accion"]!="SI")
	{
		document.getElementById("trCheckListadoMalla").style.display="none"
		
	}
	if( accesosuser["VERESTADOASIGNARARANCEL"]["accion"]!="SI")
	{
		//document.getElementById("trCheckListadoMalla").style.display="none"
	}
	if( accesosuser["VERESTADONROFACTURA"]["accion"]!="SI")
	{
		//document.getElementById("trCheckListadoMalla").style.display="none"
	
	}
	if( accesosuser["VERESTADOFACTURACION"]["accion"]!="SI")
	{
		
			document.getElementById("trCheckHistorialMatriculado").style.display="none"
			document.getElementById("trCheckAlumnosMatriculado").style.display="none"
	}
	
		
}

function removeToBtn(){
	
	if( accesosuser["ELIMINARFACTURAS"]["accion"]!="SI")
	{
		document.getElementById("btneliminarDatosFacturasCargadas").style.display="none"
		
	}
	if( accesosuser["EDITARDEUDASALUMNOS"]["accion"]!="SI")
	{
			document.getElementById("btnEditarDatosDeudasAlumnos").style.display="none"
		
	}
	if( accesosuser["ELIMINARDEUDASALUMNOS"]["accion"]!="SI")
	{
		
		document.getElementById("btnEliminarDatosDeudasAlumnos").style.display="none"
	}
	if( accesosuser["CONVALIDACIONMATRICULACION"]["accion"]!="SI")
	{
		
		document.getElementById("inptConvalidacionAsignarAlumnos").disabled=true
	}
	
		
}



	function manejadordeerroresjquery(error,textStatus,funcion){
	if (error === 0) {
     cargarConectividad("error","0","0")
    alertmensaje('VERIFIQUE SU CONECCIÓN A INTERNET');

  } else if (error == 404) {

    alertmensaje('DIRECCIÓN URL INCORRECTO');

  } else if (error == 500) {

   alertmensaje('ERROR INTERNO DEL PHP');

  } else if (textStatus === 'parsererror') {

    alertmensaje('Requested JSON parse failed.');

  } else if (textStatus === 'timeout') {
cargarConectividad("error","0","0")
  alertmensaje('ERROR, TIEMPO AGOTADO');
  
  } else if (textStatus === 'abort') {

    alertmensaje('ERROR, FUNCIÓN ABORTADO');

  } else {

    alert('Uncaught Error: ' + jqXHR.responseText);

  }
	
}

/*
GUARDAR ARCHIVOS LOG
*/
function GuardarArchivosLog(errorlog)
{

	var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	var hora = f.getHours() 
    var minuto = f.getMinutes() 
    var segundo = f.getSeconds() 
	var archivoname = f.getFullYear() + "_" + mes + "_" + dia+"_"+hora+"_"+minuto+"_"+segundo;
	var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var blob = new File([errorlog], "log_"+archivoname+".txt");
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = blob.name;
    a.click();
    window.URL.revokeObjectURL(url);
    
}
/*
CONTROL DE RESPUESTAJQUERE
*/
function respuestaJqueryAjax(Respuesta){
	if (Respuesta == "UI") {
    ir_a_login()
	alertmensaje("USUARIO INCORRECTO VUELVA A INICIAR SESION...")
	return false;
	}
    if (Respuesta == "NI") {
	alertmensaje("NO TIENES PERMISO PARA CONTINUA")
	return false;
    }
	if (Respuesta == "CI") {
	alertmensaje("CONTRASEÑA O USUARIO INVÁLIDOS")
	return false;
    }
	if (Respuesta == "CAMPOSVACIOS") {
    alertmensaje("FALTO INGRESAR ALGUNOS CAMPOS...")
	return false;
    }
	if(Respuesta == "EX") {
    alertmensaje("YA EXISTE UN REGISTRO SIMILAR...")
	return false;
    }
	if (Respuesta == "FKINCO") {
	alertmensaje("NO TIENES ACCESO A LA FILIAL SELECCIONADA")
	return false;
	}
	if (Respuesta == "exito") {
	return true;
    }
	
}
var kbenviado=0;
var kbrecibido=0;
function cargarConectividad(datos,s,b){
	if(datos=="error"){
		kbenviado=0
		kbrecibido=0
		document.getElementById("pConectivida1").innerHTML=kbenviado+"/"+kbrecibido
		document.getElementById("imgConectividad1").style.display="none"
		document.getElementById("imgConectividad2").style.display=""
	}
	
	if(datos=="limipiar"){
		kbenviado=0
		kbrecibido=0
		//document.getElementById("pConectivida1").innerHTML=" - / - Kb"
	}
	if(datos=="enviado"){
		kbenviado=s
		document.getElementById("pConectivida1").innerHTML=kbenviado+"/ -  Kb"
		document.getElementById("imgConectividad1").style.display=""
		document.getElementById("imgConectividad2").style.display="none"
	}
	if(datos=="recibido"){
		kbrecibido=b
		document.getElementById("pConectivida1").innerHTML=kbenviado+"/"+kbrecibido+" Kb"
		document.getElementById("imgConectividad1").style.display=""
		document.getElementById("imgConectividad2").style.display="none"
		cargarAdminTareas()
	}
	
}

function cargarAdminTareas(){
	var kbTotal=0;	
	var kb=obtenerTotalKbTables("divBuscadorUsuario");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorAbmFilial");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorListaCarrera");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorListaFacultad");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorListaAranceles");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorAbmAlumnos");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorAsignarCarrera");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb1=obtenerTotalKbTables("divBuscadorAsignarArancel1");
	var kb2=obtenerTotalKbTables("divBuscadorAsignarArancel2");
	kbTotal=Number(kbTotal)+Number(kb1)+Number(kb2)
	var kb=obtenerTotalKbTables("divHistorialAsignarFacturaNro");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divCarreraNroFactura");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorCarrerasCursadas");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorPagosDelAlumno");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorReportAlumnosMatriculados");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorReportFacturasCargadas");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorReportFacturasHabilitadas");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorConsultaIndividualFactutas");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("divBuscadorConsultaMasivaFactutas");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleConsulta2");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleBalanceConsulta2");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("TdDatosPersonalHistorialConsulta");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("TdDatosPersonalAgrupadoporCarreraConsulta");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("TdDatosPersonalAgrupadoporConceptoConsulta");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=obtenerTotalKbTables("TdDatosPersonalBalancePoranhoConsulta");
	kbTotal=Number(kbTotal)+Number(kb)
	var kb=((kbTotal*1)/1024).toFixed(1)
	if(Number(kb)>1024){
		var mb=((kb*1)/1024).toFixed(1)
		if(Number(mb)>1024){
			var Gb=((mb*1)/1024).toFixed(1)
			document.getElementById("pAdminTareas").innerHTML=Gb+" Gb"	
		}else{
		document.getElementById("pAdminTareas").innerHTML=mb+" Mb"	
		}
		
	}else{
		document.getElementById("pAdminTareas").innerHTML=kb+" Kb"
	}
	
}	
function obtenerTotalKbTables(idTable){
	 var string=document.getElementById(idTable).innerHTML
	 return new Blob([string]).size;
}

function verCerrarAdministradorTareas(d) {
	document.getElementById("divAbmAdministradorTareas").style.display = 'none'
	if (d == "1") {
		document.getElementById("divAbmAdministradorTareas").style.display = ''
		
		cargartablesAdministrador()
		
	}

}
function cargartablesAdministrador(){
	var totalkb=ObtenerTotalKbAdministradorTareas();
	var kb=obtenerTotalKbTables("divBuscadorUsuario");
   document.getElementById("divTbAdmin").innerHTML=""
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorUsuario'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Usuario ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorUsuario' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorAbmFilial");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorAbmFilial'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Filial ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorAbmFilial' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorListaCarrera");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%'  id='Admin_divBuscadorListaCarrera'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Lista de Carreras ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorListaCarrera' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorListaFacultad");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorListaFacultad'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Lista de Facultad ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorListaFacultad' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorListaAranceles");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorListaAranceles'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Lista de Aranceles ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorListaAranceles' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorAbmAlumnos");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divBuscadorAbmAlumnos' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Lista de Alumnos ("+kb+" / kb ) </p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorAbmAlumnos' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorAsignarCarrera");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divBuscadorAsignarCarrera' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Asignar Carreras ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorAsignarCarrera' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorAsignarArancel1");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divBuscadorAsignarArancel' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Asignar Aranceles ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorAsignarArancel1' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorAsignarArancel2");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divBuscadorAsignarArancel' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Asignar Aranceles ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorAsignarArancel2' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divHistorialAsignarFacturaNro");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divHistorialAsignarFacturaNro' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Habilitar Nro Factura 1 ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divHistorialAsignarFacturaNro' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)' disabled>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divCarreraNroFactura");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divCarreraNroFactura' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Habilitar Nro Factura 2 ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divCarreraNroFactura' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)' disabled>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorCarrerasCursadas");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table id='Admin_divBuscadorCarrerasCursadas' style='width:90%'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Matriculacion ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorCarrerasCursadas' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)' disabled >"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorPagosDelAlumno");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorPagosDelAlumno'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Formulario Pagos Realizados ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorPagosDelAlumno' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)' disabled>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorReportAlumnosMatriculados");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorReportAlumnosMatriculados'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Reporte de Alumnos Matriculados ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorReportAlumnosMatriculados' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorReportFacturasCargadas");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorReportFacturasCargadas'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Reporte de Facturas Cargadas ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorReportFacturasCargadas' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorReportFacturasHabilitadas");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorReportFacturasHabilitadas' >"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Reporte de Facturas Habilitadas ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorReportFacturasHabilitadas' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorConsultaIndividualFactutas");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorConsultaIndividualFactutas'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Consulta individual ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorConsultaIndividualFactutas' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("divBuscadorConsultaMasivaFactutas");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_divBuscadorConsultaMasivaFactutas'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Consultas Multiples ("+kb+" / kb ) </p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorConsultaMasivaFactutas' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}

	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleConsulta2");
	var porc=((kb*100)/totalkb).toFixed(2)
	console.log(porc)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_TdDatosBuscadorMultipleConsulta2'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Consulta Multiple por facturas ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='TdDatosBuscadorMultipleConsulta2' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleBalanceConsulta2");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_TdDatosBuscadorMultipleBalanceConsulta2'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Consulta Multiple balance ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='TdDatosBuscadorMultipleBalanceConsulta2' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalHistorialConsulta");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_TdDatosPersonalHistorialConsulta'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Historial Completo - Datos Alumnos ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='TdDatosPersonalHistorialConsulta' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalAgrupadoporCarreraConsulta");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_TdDatosPersonalAgrupadoporCarreraConsulta'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Agrupado por Carrera - Datos Alumnos ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='TdDatosPersonalAgrupadoporCarreraConsulta' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalAgrupadoporConceptoConsulta");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%' id='Admin_TdDatosPersonalAgrupadoporConceptoConsulta'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Agrupado por Concepto - Datos Alumnos ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='TdDatosPersonalAgrupadoporConceptoConsulta' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalBalancePoranhoConsulta");
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		var pagina="<table style='width:90%'  id='Admin_TdDatosPersonalBalancePoranhoConsulta'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Balance por año - Datos Alumnos ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='TdDatosPersonalBalancePoranhoConsulta' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
}

function ObtenerTotalKbAdministradorTareas(){
	var kbTotal=0;	
	var kb=obtenerTotalKbTables("divBuscadorUsuario");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorAbmFilial");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorListaCarrera");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorListaFacultad");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorListaAranceles");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorAbmAlumnos");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorAsignarCarrera");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorAsignarArancel");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divHistorialAsignarFacturaNro");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divCarreraNroFactura");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorCarrerasCursadas");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorPagosDelAlumno");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorReportAlumnosMatriculados");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorReportFacturasCargadas");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorReportFacturasHabilitadas");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorConsultaIndividualFactutas");
	if(kb>kbTotal){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("divBuscadorConsultaMasivaFactutas");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleConsulta2");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleConsulta2");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosBuscadorMultipleBalanceConsulta2");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalHistorialConsulta");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalAgrupadoporCarreraConsulta");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalAgrupadoporConceptoConsulta");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	var kb=obtenerTotalKbTables("TdDatosPersonalBalancePoranhoConsulta");
	if(Number(kb)>Number(kbTotal)){
		kbTotal=kb;
	}
	return kbTotal
	
}	
function finalizarTarea(datos){
	var doc=$(datos).attr("name")
	document.getElementById(doc).innerHTML="";
	$("table[id=Admin_"+doc+"]").remove()
	cargarAdminTareas()
	
}