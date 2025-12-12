window.addEventListener("keydown", function (event) {
//console.log(event.keyCode)
  
 // if (event.ctrlKey &&  event.which === 83) {
                // alert("You pressed Ctrl + s");
                // event.preventDefault();
            
	
		// document.getElementById("divSegundoPlano").style.display=""	 
  // }

console.log(event.keyCode)
  
  
  if (event.ctrlKey &&  event.which === 38) {
        
 verventanasminizados()		 
                event.preventDefault();	
				return false
		
  }
  if (event.which === 27) {
        minimizartodaventanaabierto2()
		 
                event.preventDefault();	
				return false
		
  }
  if (event.ctrlKey &&  event.which === 83) {
               
                event.preventDefault();
            
	
  }

   
},false);


function verventanasminizados(){
	var pagina=""
	var control=1;
	if($("div[id=divMinimizadoListadoDeFilial]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmAbmFilial(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/filialAbm.png' /><br/><label class='pTitulo17'  >Listado de Filial</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoDeCarreras]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmListaCarrera(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/carreras.png' /><br/><label class='pTitulo17'  >Listado de Carreras</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoListadodeFacultad]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmListaFacultad(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/facultad.png' /><br/><label class='pTitulo17'  >Listado de Facultad</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoDeDocentes]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmListaDocente(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/profesor.png' /><br/><label class='pTitulo17'  >Listado de Docentes</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoListadoDeCatedras]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmListaCatedra(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/catedras.png' /><br/><label class='pTitulo17'  >Listado de Catedra</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoMallaCurricular]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmAsignarMalla(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/mallacurricular.png' /><br/><label class='pTitulo17'  >Malla Curricular</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoCarrera]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmAsignarCarrera(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/asignarcarreras.png' /><br/><label class='pTitulo17'  >Carreras</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoAsignarDocente]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmAsignarDocentes(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/asignardocentes.png' /><br/><label class='pTitulo17'  >Asignar Docentes</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoCrearListadoParaNotas1]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='vercerrarcrearlistaparanotas(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/carpetas.png' /><br/><label class='pTitulo17'  >Cargar Calificaciones</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoListadoAlumnos]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmAbmAlumnos(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/alumnos.png' /><br/><label class='pTitulo17'  >Listado de Alumnos</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoMatriculacionAlumnos]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmAsignarAlumnos(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/asignaralumnos.png' /><br/><label class='pTitulo17'  >Matriculación de alumnos</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoAlumnoMatriculado]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmReportAlumnosMatriculados(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/MisAlumnos.png' /><br/><label class='pTitulo17'  >Alumnos Matriculados</label></button>"
	control=control+1;
	}
	if($("div[id=divMinimizadoUsuario]").is(':visible')){
	pagina+="<button id='btnMini_"+control+"' onclick='verCerrarFrmUsuarios(1)' class='buttonMinimizado'><img class='imgIconoMenuMinimizado' src='/GoodTechnologyEPNSA/iconos/usuarios.png' /><br/><label class='pTitulo17'  >Usuarios</label></button>"
	control=control+1;
	}
	
	if(pagina!=""){
		 document.getElementById("divSegundoPlano").style.display=""
	document.getElementById("divVentanaminizado").innerHTML=pagina
	document.getElementById("btnMini_1").focus()
	
	}
}

function finalizarventanasminizados(){
	var pagina=""
	var control=1;

	if($("div[id=divMinimizadoListadoDeFilial]").is(':visible')){
	verCerrarFrmAbmFilial("2")
	}
	if($("div[id=divMinimizadoDeCarreras]").is(':visible')){
	verCerrarFrmListaCarrera("2")
	}
	if($("div[id=divMinimizadoListadodeFacultad]").is(':visible')){
	verCerrarFrmListaFacultad("2")
	}
	if($("div[id=divMinimizadoDeDocentes]").is(':visible')){
	verCerrarFrmListaDocente("2")
	}
	if($("div[id=divMinimizadoListadoDeCatedras]").is(':visible')){
	verCerrarFrmListaCatedra("2")
	}
	if($("div[id=divMinimizadoMallaCurricular]").is(':visible')){
	verCerrarFrmAsignarMalla("2")
	}
	if($("div[id=divMinimizadoCarrera]").is(':visible')){
	verCerrarFrmAsignarCarrera("2")
	}
	if($("div[id=divMinimizadoAsignarDocente]").is(':visible')){
	verCerrarFrmAsignarDocentes("2")
	}
	if($("div[id=divMinimizadoCrearListadoParaNotas1]").is(':visible')){
   vercerrarcrearlistaparanotas("2")
	}
	if($("div[id=divMinimizadoListadoAlumnos]").is(':visible')){
	verCerrarFrmAbmAlumnos("2")
	}
	if($("div[id=divMinimizadoMatriculacionAlumnos]").is(':visible')){
	verCerrarFrmAsignarAlumnos("2")
	}
	if($("div[id=divMinimizadoAlumnoMatriculado]").is(':visible')){
	verCerrarFrmReportAlumnosMatriculados("2")
	}
	if($("div[id=divMinimizadoUsuario]").is(':visible')){
	verCerrarFrmUsuarios("2")
	}
		 document.getElementById("divSegundoPlano").style.display="none"
	document.getElementById("divVentanaminizado").innerHTML=""
	
	
}


function minimizartodaventanaabierto(){
if(document.getElementById("divAbmAbmFilial").style.display==""){
MinimizarVentanaListadoFilial()
return
}
if(document.getElementById("divAbmListaCarrera").style.display==""){
MinimizarVentanaListadoCarrera()
return
}
if(document.getElementById("divAbmListaFacultad").style.display==""){
MinimizarVentanaListadoFacultad()
return
}
if(document.getElementById("divAbmListaDocente").style.display==""){
MinimizarVentanaListadoDocente()
return
}
if(document.getElementById("divAbmListaCatedra").style.display==""){
MinimizarVentanaListadoCatedras()
return
}
if(document.getElementById("divAbmAsignarMalla").style.display==""){
MinimizarVentanaMallaCurricular()
return
}
if(document.getElementById("divAbmAsignarCarrera").style.display==""){
MinimizarVentanaAsignarCarrer()
return
}
if(document.getElementById("divAbmAsignarDocentes").style.display==""){
MinimizarVentanadoAsignarDocentess()
return
}
if(document.getElementById("divCrearListadoNotas").style.display==""){
MinimizarVentanaCrearLitadoNota()
return
}
if(document.getElementById("divAbmAbmAlumnos").style.display==""){
MinimizarVentanaAlumno()
return
}
if(document.getElementById("divAbmMatricularAlumnos").style.display==""){
MinimizarVentanaMatricularAlumnos()
return
}
if(document.getElementById("divReportAlumMatri").style.display==""){
MinimizarVentanaReportMatriculados()
return
}
if(document.getElementById("divAbmUsuario").style.display==""){
MinimizarVentanaUsuario()
return
}

}

function minimizartodaventanaabierto2(){
	
if(document.getElementById("divAbmAbmFilial").style.display==""){
MinimizarVentanaListadoFilial()
return
}
if(document.getElementById("divAbmListaCarrera").style.display==""){
MinimizarVentanaListadoCarrera()
return
}
if(document.getElementById("divAbmListaFacultad").style.display==""){
MinimizarVentanaListadoFacultad()
return
}
if(document.getElementById("divAbmListaDocente").style.display==""){
MinimizarVentanaListadoDocente()
return
}
if(document.getElementById("divAbmListaCatedra").style.display==""){
MinimizarVentanaListadoCatedras()
return
}
if(document.getElementById("divAbmAsignarMalla").style.display==""){
MinimizarVentanaMallaCurricular()
return
}
if(document.getElementById("divAbmAsignarCarrera").style.display==""){
MinimizarVentanaAsignarCarrer()
return
}
if(document.getElementById("divAbmAsignarDocentes").style.display==""){
MinimizarVentanadoAsignarDocentess()
return
}
if(document.getElementById("divCrearListadoNotas").style.display==""){
MinimizarVentanaCrearLitadoNota()
return
}
if(document.getElementById("divAbmAbmAlumnos").style.display==""){
MinimizarVentanaAlumno()
return
}
if(document.getElementById("divAbmMatricularAlumnos").style.display==""){
MinimizarVentanaMatricularAlumnos()
return
}
if(document.getElementById("divReportAlumMatri").style.display==""){
MinimizarVentanaReportMatriculados()
return
}
if(document.getElementById("divAbmUsuario").style.display==""){
MinimizarVentanaUsuario()
return
}

}

function guardarDatosCtrlS(){
	return
if(document.getElementById("divAbmCargarFacturas2").style.display==""){
VerificarDatosCargaFactura()
return
}

if(document.getElementById("divAbmDeudasAlumnos2").style.display==""){
VerificarDatosDeudasAlumnos()
return
}
if(document.getElementById("divAbmAbmFilial2").style.display==""){
VerificarDatosAbmFilial()
return
}
if(document.getElementById("divAbmListaCarrera2").style.display==""){
VerificarDatosListaCarrera()()
return
}

}














