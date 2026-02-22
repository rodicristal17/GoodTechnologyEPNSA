
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
   // document.getElementById("inptreloj").value = horaImprimible
    document.getElementById("inptreloj2").innerHTML = horaImprimible
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


function vercerrarventanactualizacion(d){
	// if(d=="1"){
		// document.getElementById("divActualizarSistema").style.display=""
		 // document.getElementById("tdEfectoActualizarSistema").className="magictime vanishIn"
	// }else{
		document.getElementById("divActualizarSistema").style.display="none"
		// document.getElementById("tdEfectoActualizarSistema").className="magictime vanishOut"
	// $("div[id=divActualizarSistema]").fadeOut(500);	
	// }
	
}



var codigodeactualizacion="X-GT-1-JMTG-V1.00"
function controldeactualizacion(codigopc) {	

	obtener_datos_user()
	var datos = new FormData();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("codigopc", codigopc)
	datos.append("codigodeactualizacion", codigodeactualizacion)
	datos.append("funt", "asistenciadeactualizacion")
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/system.php",
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
                     
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
	
			return false;
		},
		success: function (responseText) {
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
		
				if (Respuesta == "exito") {
				var control = datos["2"];
				if(control=="no"){
					  vercerrarventanactualizacion("1")
				}
				}
			} catch (error) {
           console.log(error)
			}
		}
	});
}
function resgistrardispositivo(codigopc) {	
	obtener_datos_user()
	var codigopc=stringGenerador(20)	
	var datos = new FormData();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("codigopc", codigopc)
	datos.append("funt", "registrardispositivo")
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/system.php",
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
                     
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
	
			return false;
		},
		success: function (responseText) {
			Respuesta = responseText;
			console.log(Respuesta)
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];			
				if (Respuesta == "exito") {
				localStorage.setItem("codpc",codigopc);
				vercerrarventanactualizacion("1")
				}
			} catch (error) {
           console.log(error)
			}
		}
	});
}
function resgistraractualizacion(datos) {	
	obtener_datos_user()
	datos.innerHTML="Comprobando datos...."
	var codigopc=localStorage.getItem("codpc");
	if (codigopc == "undefined" || codigopc == "" || codigopc == "Null" || codigopc == null ) {	
	location.reload(true)
	Cache.delete()
    return
    }
	var datos = new FormData();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("codigopc", codigopc)
	datos.append("funt", "registraractualizacion")
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/system.php",
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
                     
        }, false);
 //Download progress
		xhr.addEventListener("progress", function (evt) {
        var kb=((evt.loaded*1)/1000).toFixed(1)
		if(kb=="0.0"){
			kb=0.1;
		}
                    
        }, false);
        return xhr;
    },
		error: function (jqXHR, textstatus, errorThrowm) {
	
			return false;
		},
		success: function (responseText) {
			Respuesta = responseText;
		
			location.reload(true)
			window.parent.caches.delete()
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];			
				if (Respuesta == "exito") {
				
				}
			} catch (error) {
           console.log(error)
			}
		}
	});
}
function stringGenerador(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



function checkestadoResolucion(d){
	localStorage.setItem("resolucion"+userid,d);
	if(d=="1"){
	document.getElementById('checkestadoResolucion1').checked=true
	document.getElementById('checkestadoResolucion2').checked=false	
	document.getElementById('checkestadoResolucion3').checked=false	
	document.getElementById('checkestadoResolucion4').checked=false	
		 
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1280x1024.css?X-IOSV.03")
	
	}
	if(d=="2"){
	document.getElementById('checkestadoResolucion1').checked=false
	document.getElementById('checkestadoResolucion2').checked=true	
	document.getElementById('checkestadoResolucion3').checked=false	
	document.getElementById('checkestadoResolucion4').checked=false	
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1366x768.css?X-IOSV.03")
	}
	if(d=="3"){
	document.getElementById('checkestadoResolucion1').checked=false
	document.getElementById('checkestadoResolucion2').checked=false	
	document.getElementById('checkestadoResolucion3').checked=true	
	document.getElementById('checkestadoResolucion4').checked=false	
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1920x1080.css?X-IOSV.03")
	}
	if(d=="4"){
	document.getElementById('checkestadoResolucion1').checked=false
	document.getElementById('checkestadoResolucion2').checked=false	
	document.getElementById('checkestadoResolucion3').checked=false	
	document.getElementById('checkestadoResolucion4').checked=true	
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1080x720.css?X-IOSV.03")
	}
	alertmensaje("SE HA CAMBIADO LA RESOLUCIÓN")
}
function checkestadoResolucionload(d){
	localStorage.setItem("resolucion"+userid,d);
	if(d=="1"){
	document.getElementById('checkestadoResolucion1').checked=true
	document.getElementById('checkestadoResolucion2').checked=false	
	document.getElementById('checkestadoResolucion3').checked=false	
	document.getElementById('checkestadoResolucion4').checked=false	
		 
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1280x1024.css?X-IOSV.03")
	
	}
	if(d=="2"){
	document.getElementById('checkestadoResolucion1').checked=false
	document.getElementById('checkestadoResolucion2').checked=true	
	document.getElementById('checkestadoResolucion3').checked=false	
	document.getElementById('checkestadoResolucion4').checked=false	
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1366x768.css?X-IOSV.03")
	}
	if(d=="3"){
	document.getElementById('checkestadoResolucion1').checked=false
	document.getElementById('checkestadoResolucion2').checked=false	
	document.getElementById('checkestadoResolucion3').checked=true	
	document.getElementById('checkestadoResolucion4').checked=false	
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1920x1080.css?X-IOSV.03")
	}
	if(d=="4"){
	document.getElementById('checkestadoResolucion1').checked=false
	document.getElementById('checkestadoResolucion2').checked=false	
	document.getElementById('checkestadoResolucion3').checked=false	
	document.getElementById('checkestadoResolucion4').checked=true	
	$("link[id=cssResolucion]").attr("href","/GoodTechnologyEPNSA/css/pantallas1080x720.css?X-IOSV.03")
	}
	
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
// temaActual=localStorage.getItem("tema"+userid);
// if (temaActual == "undefined" || temaActual == "" || temaActual == "Null" || temaActual == null ) {		
   // temaActual="white";
// }
// if(temaActual=="white"){
	// $("link[id=cssTema]").attr("href","/GoodTechnologyEPNSA/css/inicio.css")
// }
// if(temaActual=="black"){
	// $("link[id=cssTema]").attr("href","/GoodTechnologyEPNSA/css/inicioblack.css")
// }

// var Resolucion=localStorage.getItem("resolucion"+userid);
// if (Resolucion == "undefined" || Resolucion == "" || Resolucion == "Null" || Resolucion == null ) {		
   // Resolucion="";
// }
// if(Resolucion!=""){
	// checkestadoResolucionload(Resolucion)
// }




const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

 
    if (typeof history.pushState === "function") {
        history.pushState("jibberish", null, null);
        window.onpopstate = function () {
            history.pushState('newjibberish', null, null);
            // evento_atras();
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
mueveReloj();
buscar_datos_del_usuario();
eventoScrollTable(document.getElementById('TableScroollAsignarDocente2'));
eventoScrollTable(document.getElementById('TableScroollCargarCalificaciones2'));
eventoScrollTable(document.getElementById('TableScroollCargarExistenciasArchivos2'));
eventoScrollTable(document.getElementById('TableScroollCargarExistenciasArchivosPosgrado2'));
eventoScrollTable(document.getElementById('TableScroollAlumnosMatriculadosCargadas2'));
eventoScrollTable(document.getElementById('TableScroollFacturasCargadas2'));


var controlactualizacion=0;
var controlMensaje=0;
 var counter=setInterval(timer,1000);
		function timer(){
				if(controlactualizacion==60){
			controlactualizacion=0;
			var codigopc=localStorage.getItem("codpc");

if (codigopc == "undefined" || codigopc == "" || codigopc == "Null" || codigopc == null ) {	
   resgistrardispositivo()
   vercerrarventanactualizacion("1")
}else{
	controldeactualizacion(codigopc)
}
				}
			controlactualizacion=controlactualizacion+1;
			
			
			if(controlMensaje==30){
					controlMensaje=0;
					// buscarproductosDescuento()

				}
			controlMensaje=controlMensaje+1;
			 
			
			}
 
}
function eventoScrollTable(elemento){

	$(elemento).on("scroll", function(){		
		 var desplamiento = $(elemento).scrollLeft();		
		 	if($(elemento).attr("id")=="TableScroollAsignarDocente2"){
			document.getElementById("TableScroollAsignarDocente1").scrollLeft=desplamiento
			}
			if($(elemento).attr("id")=="TableScroollCargarCalificaciones2"){
			document.getElementById("TableScroollCargarCalificaciones1").scrollLeft=desplamiento
			}			
				
				if($(elemento).attr("id")=="TableScroollFacturasCargadas2"){
			document.getElementById("TableScroollFacturasCargadas1").scrollLeft=desplamiento
			}
			
			if($(elemento).attr("id")=="TableScroollCargarExistenciasArchivos2"){
			document.getElementById("TableScroollCargarExistenciasArchivos1").scrollLeft=desplamiento
			}	
			if($(elemento).attr("id")=="TableScroollCargarExistenciasArchivosPosgrado2"){
			document.getElementById("TableScroollCargarExistenciasArchivosPosgrado1").scrollLeft=desplamiento
			}	
			if($(elemento).attr("id")=="TableScroollAlumnosMatriculadosCargadas2"){
			document.getElementById("TableScroollAlumnosMatriculadosCargadas1").scrollLeft=desplamiento
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
		  BuscarCatedraSelect()
		  BuscarSelectDocentes()
		  removeToMenu()
 removeToMenuCheckt()
 removeToBtn()
 BuscarNivelesSelect()
buscarOptionCaja() 

 buscaroptionMotivoEgresoIngreso()
 BuscarListCajaSelectNroFactura()
 BuscarSeleccListaAranceles()
 BuscarSelecDescripcionArregloGastoEgresoIngreso()
 ObtenerFechaSelect()
fechaActualSelect()	
ObtenerFechaSelectHistoricos()
fechaActualSelectHistoricos()


var codigopc=localStorage.getItem("codpc");

if (codigopc == "undefined" || codigopc == "" || codigopc == "Null" || codigopc == null ) {	
   resgistrardispositivo()
   vercerrarventanactualizacion("1")
}else{
	controldeactualizacion(codigopc)
} 
 
				document.getElementById('lblUser').innerHTML=nombre
				document.getElementById('spNombreLogin').innerHTML=nombre
				// document.getElementById('ptituloUser2').innerHTML=nombre
				controldecaja()
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
	 // $("div[id=principalMenub]").fadeOut(500);	
		$("div[id=divMenuMantenimiento]").fadeOut();
		$("div[id=divMenuAcercade]").fadeOut();
		
	}


	if(d=="1"){
		// document.getElementById("principalMenub").style.display=""
		$("div[id=divMenuMantenimiento]").fadeIn(500);	
	}
	if(d=="2"){
		// document.getElementById("principalMenub").style.display=""
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
	// if(controlacceso("VERMISDATOS","accion")==false){return;		}
	
	if(d=="1"){
	document.getElementById("divCambiarMisDatosPersonales").style.display="";	
	}else{
	document.getElementById("divCambiarMisDatosPersonales").style.display="none";
	
	}
}
function verCerrarFrmUsuarios(d){
	document.getElementById("divMinimizadoUsuario").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERUSUARIO","accion")==false){ return;		}
	
	
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
	// if(controlacceso("INSERTARUSUARIO","accion")==false){ return;		}
		document.getElementById("divAbmUsuario1").style.display="none"
		document.getElementById("divAbmUsuario2").style.display=""
		LimpiarCamposUsuario()
}
function MinimizarVentanaUsuario(){
	document.getElementById("divAbmUsuario").style.display="none";
	document.getElementById("divMinimizadoUsuario").style.display="";
}
function EditarUsuarioFrm(){
	// if(controlacceso("EDITARUSUARIO","accion")==false){ return;		}
	if(idAbmUsuario==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmUsuario1").style.display="none"
		document.getElementById("divAbmUsuario2").style.display=""		
}
function BuscarUsuarioFrm(){
	// if(controlacceso("BUSCARUSUARIO","accion")==false){return;		}
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
	// if(controlacceso("ELIMINARUSUARIO","accion")==false){  return;		}
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
		// if(controlacceso("EDITARUSUARIO","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARUSUARIO","accion")==false){ return;		}
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
// if(controlacceso("BUSCARUSUARIO","accion")==false){ return;		}
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
	// if(controlacceso("EDITARACCESO","accion")==false){ return;		}
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
	// if(controlacceso("EDITARACCESO","accion")==false){ return;	}	
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
	// if(controlacceso("VERFILIAL","accion")==false){return;		}
	
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
	// if(controlacceso("INSERTARFILIAL","accion")==false){ return;		}
		document.getElementById("divAbmAbmFilial1").style.display="none"
		document.getElementById("divAbmAbmFilial2").style.display=""
		LimpiarCamposAbmFilial()
}
function EditarAbmFilialFrm(){
	// if(controlacceso("EDITARFILIAL","accion")==false){ return;		}
	if(idAbmAbmFilial==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAbmFilial1").style.display="none"
		document.getElementById("divAbmAbmFilial2").style.display=""
		
}
function BuscarAbmFilialFrm(){
	// if(controlacceso("BUSCARFILIAL","accion")==false){return;		}
		document.getElementById("divAbmAbmFilial1").style.display=""
		document.getElementById("divAbmAbmFilial2").style.display="none"
}
function LimpiarCamposAbmFilial(){
	document.getElementById("inptcodLocalAbmFilial").value=""
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
	document.getElementById('inptcodLocalAbmFilial').value = $(datostr).children('td[id="td_datos_5"]').html();
     document.getElementById("btnAbmAbmFilial").value="Editar Datos"
     document.getElementById("btnEditarDatosFilial").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosFilial").style.backgroundColor='red'



}
function EliminarRegitroFilial(){
	// if(controlacceso("ELIMINARFILIAL","accion")==false){ return;		}
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
	
	var inptcodLocalAbmFilial = document.getElementById("inptcodLocalAbmFilial").value
	
	

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
		// if(controlacceso("INSERTARFILIAL","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("EDITARFILIAL","accion")==false){return;		}
	}
	AbmAbmFilial(inptcodLocalAbmFilial,inptpuntoEpedicionAbmFilial,inptNombreAbmFilial,inptCiudadAbmFilial,inptEstadoAbmFilial,idAbmAbmFilial, accion)
}
function AbmAbmFilial(cod_local,puntoexpedicion,nombre,ciudad,estado, idabm, accion) {
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
	
	datos.append("cod_local", cod_local)
	
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
// if(controlacceso("BUSCARFILIAL","accion")==false){return;		}
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
	document.getElementById("inptlocalAperturaCierre").innerHTML = "" 
	document.getElementById("inptlocalVistaApCie").innerHTML = "" 
	document.getElementById("inptlocalMisGastosBusca").innerHTML = "" 
	document.getElementById("inptlocalMisGastos").innerHTML = "" 
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
					document.getElementById("ListFilial").innerHTML=datos_buscados
					document.getElementById("inptFilialUsuario").innerHTML=datos[3]
					document.getElementById("inptlocalAperturaCierre").innerHTML=datos[3]
					document.getElementById("inptlocalVistaApCie").innerHTML=datos[3]
					document.getElementById("inptlocalMisGastosBusca").innerHTML=datos[3]
					document.getElementById("inptlocalMisGastos").innerHTML=datos[3]
				 
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
LISTA DE PROFESORES
*/

var idAbmListaDocente="";
var ControlVistaListaDocente=""
function verCerrarFrmListaDocente(d){
	document.getElementById("divMinimizadoDeDocentes").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERDOCENTES","accion")==false){ return;		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaDocente").style.display="";
	
	}else{
	document.getElementById("divAbmListaDocente").style.display="none";
	LimpiarCamposListaDocente()
	LimpiarCamposBusquedaListaDocente()
	}
}



function MinimizarVentanaListadoDocente(){
	document.getElementById("divAbmListaDocente").style.display="none";
	document.getElementById("divMinimizadoDeDocentes").style.display="";
}
function NuevoListaDocenteFrm(){
	// if(controlacceso("INSERTARDOCENTES","accion")==false){ return;		}
	
		document.getElementById("divAbmListaDocente1").style.display="none"
		document.getElementById("divAbmListaDocente2").style.display=""
		LimpiarCamposListaDocente()
}
function EditarListaDocenteFrm(){
	// if(controlacceso("EDITARDOCENTES","accion")==false){ return;		}
	if(idAbmListaDocente==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaDocente1").style.display="none"
		document.getElementById("divAbmListaDocente2").style.display=""
		
}
function BuscarListaDocenteFrm(){
	// if(controlacceso("BUSCARDOCENTES","accion")==false){ return;		}
		document.getElementById("divAbmListaDocente1").style.display=""
		document.getElementById("divAbmListaDocente2").style.display="none"
}
function LimpiarCamposBusquedaListaDocente(){
	document.getElementById("inptBuscarListaDocente1").value=""
	document.getElementById("lblNroRegistroListaDocente").innerHTML=""
	document.getElementById("divBuscadorListaDocente").innerHTML=""
	
}
function LimpiarCamposListaDocente(){
	document.getElementById("inptDocumentoListaDocente").value=""
	document.getElementById("inptNombreListaDocente").value=""
	document.getElementById("inptTelefListaDocente").value=""
	document.getElementById("inptCorreoListaDocente").value=""
	document.getElementById("inptRucListaDocente").value=""
	document.getElementById("inptEstadoListaDocente").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListadoDocente").value=""
	idAbmListaDocente=""
	document.getElementById("btnAbmListaDocente").value="Guardar Datos"
	document.getElementById("btnEditarDatosDocente").style.backgroundColor="#b5f5b7"
	document.getElementById("btnTituloDatosDocente").style.backgroundColor="#b5f5b7"
    document.getElementById("btnEliminarDatosDocente").style.backgroundColor="#ffcece"
}
function ObtenerdatosAbmListaDocente(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaDocente = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListadoDocente').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptDocumentoListaDocente').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaDocente').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptTelefListaDocente').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCorreoListaDocente').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptRucListaDocente').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptEstadoListaDocente').value = $(datostr).children('td[id="td_datos_5"]').html();
     document.getElementById("btnAbmListaDocente").value="Editar Datos"
     document.getElementById("btnEditarDatosDocente").style.backgroundColor="#4CAF50"
	 document.getElementById("btnTituloDatosDocente").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosDocente").style.backgroundColor="red"

}


function EliminarRegitroListaDocente(){
	// if(controlacceso("ELIMINARDOCENTES","accion")==false){ return;		}
	if(idAbmListaDocente==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaDocente").value="Inactivo";
	VerificarDatosListaDocente()
	}

}
function VerificarDatosListaDocente(){
	
	var inptDocumentoListaDocente = document.getElementById("inptDocumentoListaDocente").value
	var inptNombreListaDocente = document.getElementById("inptNombreListaDocente").value
	var inptTelefListaDocente = document.getElementById("inptTelefListaDocente").value
	var inptCorreoListaDocente = document.getElementById("inptCorreoListaDocente").value
	var inptRucListaDocente = document.getElementById("inptRucListaDocente").value
	var inptEstadoListaDocente = document.getElementById("inptEstadoListaDocente").value
	
	if(inptDocumentoListaDocente==""){
		document.getElementById("inptDocumentoListaDocente").focus()
		alertmensaje("Falto ingresar el Nro de documento")
		return
	}
	if(inptRucListaDocente==""){
		document.getElementById("inptRucListaDocente").focus()
		alertmensaje("Falto ingresar el Nro R.U.C.")
		return
	}
	if(inptNombreListaDocente==""){
		document.getElementById("inptNombreListaDocente").focus()
		alertmensaje("Falto ingresar el nombre del doncente")
		return
	}
	
	var accion = "";
	if (idAbmListaDocente != "") {
		accion = "editar";
		// if(controlacceso("EDITARDOCENTES","accion")==false){return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARDOCENTES","accion")==false){ return;		}
	}
	
	AbmListaDocente(inptRucListaDocente,inptDocumentoListaDocente,inptNombreListaDocente,inptTelefListaDocente,inptCorreoListaDocente,inptEstadoListaDocente,idAbmListaDocente, accion)
}
function AbmListaDocente(ruc,nrodocumento,nombreapellido,nrotelef,correo,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nrodocumento", nrodocumento)
	datos.append("nombreapellido", nombreapellido)
	datos.append("nrotelef", nrotelef)
	datos.append("correo", correo)
	datos.append("estado", estado)
	datos.append("ruc", ruc)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoDocente.php",
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
		
                   LimpiarCamposListaDocente()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaDocente()
					BuscarSelectDocentes()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}



function checkestadoDocente(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoDocente1').checked=true
	document.getElementById('inptSeleccEstadoDocente2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoDocente1').checked=false
	document.getElementById('inptSeleccEstadoDocente2').checked=true
	}
}
function BuscarAbmListaDocente() {
// if(controlacceso("BUSCARDOCENTES","accion")==false){ return;		}
	var documento = document.getElementById('inptBuscarListaDocente1').value
	var nombreapellido = document.getElementById('inptBuscarListaDocente2').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoDocente1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaDocente").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaDocente").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nrodocumento": documento,
		"nombreApellido": nombreapellido,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoDocente.php",
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
			document.getElementById("divBuscadorListaDocente").innerHTML = ''
			document.getElementById("lblNroRegistroListaDocente").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaDocente").innerHTML = ''
			document.getElementById("lblNroRegistroListaDocente").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaDocente").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaDocente").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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





function BuscarSelectDocentes() {

	document.getElementById("ListDocentes").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarselect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoDocente.php",
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
			document.getElementById("ListDocentes").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListDocentes").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("ListDocentes").innerHTML = datos_buscados					
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
LISTA DE ACCESOS
*/

var idAbmListaAccesos="";
var ControlVistaListaAccesos=""
var nombreformulario=""
function verCerrarFrmListaAccesos(d){
	document.getElementById("divMinimizadoListadodeAcceso").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERLISTADOACCESO","accion")==false){ return;		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaAccesos").style.display="";
	
	}else{
	document.getElementById("divAbmListaAccesos").style.display="none";
	LimpiarCamposListaAccesos()
	LimpiarCamposBusquedaListaAccesos()
	}
}
function LimpiarCamposListaAccesos(){
	document.getElementById("inptRegistroSeleccionadoListadoAcceso").value=""
	document.getElementById("inptRegistroSeleccionadoFormListadoAcceso").value=""
	
	idAbmListaAccesos=""
	nombreformulario=""
	
	document.getElementById("btnEditarNombreAcceso").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEditarNombreFormulario").style.backgroundColor="#b5f5b7"
}
function LimpiarCamposBusquedaListaAccesos(){
	document.getElementById("inptBuscarListaAccesos1").value=""
	document.getElementById("lblNroRegistroListaAccesos").innerHTML=""
	document.getElementById("divBuscadorListaAccesos").innerHTML=""
	
}
function ObtenerdatosAbmListaAccesos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaAccesos = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListadoAcceso').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptRegistroSeleccionadoFormListadoAcceso').value = $(datostr).children('td[id="td_datos_2"]').html();
	nombreformulario = $(datostr).children('td[id="td_datos_2"]').html();

     document.getElementById("btnEditarNombreAcceso").style.backgroundColor="#4CAF50"
     document.getElementById("btnEditarNombreFormulario").style.backgroundColor="#4CAF50"



}
function VerificarDatosListaAccesos1(){
	
	var inptRegistroSeleccionadoListadoAcceso = document.getElementById("inptRegistroSeleccionadoListadoAcceso").value
	
	if(inptRegistroSeleccionadoListadoAcceso==""){
		document.getElementById("inptRegistroSeleccionadoListadoAcceso").focus()
		alertmensaje("Falto ingresar el nombre")
		return
	}
	
	
	var accion = "editarnombreacceso";
		// if(controlacceso("EDITARLISTADOACCESO","accion")==false){ return;		}
	
	AbmListaNombreAccesos(inptRegistroSeleccionadoListadoAcceso,idAbmListaAccesos, accion)
}

function AbmListaNombreAccesos(nombre,idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoacceso.php",
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
		
                   LimpiarCamposListaAccesos()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaAccesos()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}

function guardarordenlistadoacceso(datos) {
	verCerrarEfectoCargando("1")
	var idabm=datos.id
	var orden=datos.value
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "editarorden")
	datos.append("idabm", idabm)
	datos.append("orden", orden)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoacceso.php",
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
		
                   LimpiarCamposListaAccesos()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaAccesos()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}

function VerificarDatosListaAccesos2(){
	
	var inptRegistroSeleccionadoFormListadoAcceso = document.getElementById("inptRegistroSeleccionadoFormListadoAcceso").value
	
	if(inptRegistroSeleccionadoFormListadoAcceso==""){
		document.getElementById("inptRegistroSeleccionadoFormListadoAcceso").focus()
		alertmensaje("Falto ingresar el nombre")
		return
	}
	
	
	var accion = "editarnombreformulario";
		// if(controlacceso("EDITARLISTADOACCESO","accion")==false){ return;		}
	
	AbmListaFormularioAccesos(inptRegistroSeleccionadoFormListadoAcceso,nombreformulario, accion)
}
function AbmListaFormularioAccesos(nombre,idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nombre", nombre)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoacceso.php",
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
		
                   LimpiarCamposListaAccesos()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaAccesos()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function BuscarAbmListaAccesos() {
// if(controlacceso("BUSCARLISTADOACCESO","accion")==false){return;		}
	var nombre = document.getElementById('inptBuscarListaAccesos1').value
	document.getElementById("divBuscadorListaAccesos").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaAccesos").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": nombre,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoacceso.php",
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
			document.getElementById("divBuscadorListaAccesos").innerHTML = ''
			document.getElementById("lblNroRegistroListaAccesos").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaAccesos").innerHTML = ''
			document.getElementById("lblNroRegistroListaAccesos").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaAccesos").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaAccesos").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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
LISTA DE NIVELES
*/
var idAbmListaNiveles="";
var ControlVistaListaNiveles=""
function verCerrarFrmListaNiveles(d){
	document.getElementById("divMinimizadoListadodeNiveles").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERLISTADONIVELES","accion")==false){ return;		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaNiveles").style.display="";
	
	}else{
	document.getElementById("divAbmListaNiveles").style.display="none";
	LimpiarCamposListaNiveles()
	LimpiarCamposBusquedaListaNiveles()
	}
}
function MinimizarVentanaListadoFacultad(){
	document.getElementById("divAbmListaNiveles").style.display="none";
	document.getElementById("divMinimizadoListadodeNiveles").style.display="";
}
function NuevoListaNivelesFrm(){
	// if(controlacceso("INSERTARLISTADONIVELES","accion")==false){ return;		}
		document.getElementById("divAbmListaNiveles1").style.display="none"
		document.getElementById("divAbmListaNiveles2").style.display=""
		LimpiarCamposListaNiveles()
}
function EditarListaNivelesFrm(){
	// if(controlacceso("EDITARLISTADONIVELES","accion")==false){ return;		}
	if(idAbmListaNiveles==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaNiveles1").style.display="none"
		document.getElementById("divAbmListaNiveles2").style.display=""
		
}
function BuscarListaNivelesFrm(){
	// if(controlacceso("BUSCARLISTADONIVELES","accion")==false){ return;		}
		document.getElementById("divAbmListaNiveles1").style.display=""
		document.getElementById("divAbmListaNiveles2").style.display="none"
}
function LimpiarCamposListaNiveles(){
	document.getElementById("inptNombreListaNiveles").value=""
	document.getElementById("inptEstadoListaNiveles").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListaNiveles").value=""
	document.getElementById("btnEditarDatosListaNiveles").style.backgroundColor='#b5f5b7'
     document.getElementById("btnEliminarDatosListaNiveles").style.backgroundColor='#ffcece'
     document.getElementById("btnDetallesDatosListaNiveles").style.backgroundColor='#aad9ff'
	idAbmListaNiveles=""
	document.getElementById("btnAbmListaNiveles").value="Guardar Datos"
}
function LimpiarCamposBusquedaListaNiveles(){
	document.getElementById("inptBuscarListaNiveles1").value=""
	document.getElementById("divBuscadorListaNiveles").innerHTML=""
	document.getElementById("lblNroRegistroListaNiveles").innerHTML=""
}
function ObtenerdatosAbmListaNiveles(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaNiveles = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListaNiveles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaNiveles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoListaNiveles').value = $(datostr).children('td[id="td_datos_2"]').html();
     document.getElementById("btnEditarDatosListaNiveles").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosListaNiveles").style.backgroundColor='red'
     document.getElementById("btnDetallesDatosListaNiveles").style.backgroundColor='#40a7fb'
     document.getElementById("btnAbmListaNiveles").value="Editar Datos"



}
function EliminarRegitroListaNiveles(){
	// if(controlacceso("ELIMINARLISTADONIVELES","accion")==false){ return;		}
	if(idAbmListaNiveles==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaNiveles").value="Inactivo";
	VerificarDatosListaNiveles()
	}

}
function VerificarDatosListaNiveles(){
	
	var inptNombreListaNiveles = document.getElementById("inptNombreListaNiveles").value
	var inptEstadoListaNiveles = document.getElementById("inptEstadoListaNiveles").value
	
	
	

	if(inptNombreListaNiveles==""){
		document.getElementById("inptNombreListaNiveles").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmListaNiveles != "") {
		accion = "editar";
		// if(controlacceso("EDITARFACULTAD","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARFACULTAD","accion")==false){ return;		}
	}
	AbmListaNiveles(inptNombreListaNiveles,inptEstadoListaNiveles,idAbmListaNiveles, accion)
}
function AbmListaNiveles(nombre,estado, idabm, accion) {
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
		url: "/GoodTechnologyEPNSA/php/ABMListadoNiveles.php",
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
				   LimpiarCamposListaNiveles()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaNiveles()
					BuscarNivelesSelect()
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoListadoAcceso(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoListadoAcceso1').checked=true
	document.getElementById('inptSeleccEstadoListadoAcceso2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoListadoAcceso1').checked=false
	document.getElementById('inptSeleccEstadoListadoAcceso2').checked=true
	}
}
function BuscarAbmListaNiveles() {
// if(controlacceso("BUSCARLISTADONIVELES","accion")==false){ return;		}
	var buscador = document.getElementById('inptBuscarListaNiveles1').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoListadoAcceso1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaNiveles").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaNiveles").innerHTML=imgCargandoB;
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
        url: "/GoodTechnologyEPNSA/php/ABMListadoNiveles.php",
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
			document.getElementById("divBuscadorListaNiveles").innerHTML = ''
			document.getElementById("lblNroRegistroListaNiveles").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaNiveles").innerHTML = ''
			document.getElementById("lblNroRegistroListaNiveles").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];				
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaNiveles").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaNiveles").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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
function verCerrarFrmDetallesAccesoListaNiveles(d){
	if(d=="1"){
	if(idAbmListaNiveles==""){
			alertmensaje("Falto seleccionar un registro")
		return false;
	}
	document.getElementById("divDetallesAccesoListaNiveles").style.display="";
	buscardetalleslistaniveles()
	}else{
	document.getElementById("divDetallesAccesoListaNiveles").style.display="none";

	}
}
function buscardetalleslistaniveles() {
// if(controlacceso("DETALLESLISTADONIVELES","accion")==false){ return;		}
	var buscador = document.getElementById('inptBuscarDetallesAccesoListaNiveles1').value
	document.getElementById("divBuscadorDetallesAccesoListaNiveles").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"idAbmListaNiveles": idAbmListaNiveles,
		"funt": "buscardetalles"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoNiveles.php",
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
			document.getElementById("divBuscadorDetallesAccesoListaNiveles").innerHTML = ''
		
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorDetallesAccesoListaNiveles").innerHTML = ''
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];				
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorDetallesAccesoListaNiveles").innerHTML = datos_buscados					
                  
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
function abmaccesolistanivel(d) {
	// if(controlacceso("DETALLESLISTADONIVELES","accion")==false){return;	}	
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
	datos.append("funt", "editaracceso")
	datos.append("idabm", idabm)
	datos.append("acciones", accion)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListadoNiveles.php",
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
function BuscarNivelesSelect() {

	document.getElementById("inptTipoAccesoUsuario").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListadoNiveles.php",
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
			document.getElementById("inptTipoAccesoUsuario").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("inptTipoAccesoUsuario").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("inptTipoAccesoUsuario").innerHTML=datos_buscados
					
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
	// if(controlacceso("VERCARRERA","accion")==false){ return;		}
	
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
	// if(controlacceso("INSERTARCARRERA","accion")==false){ return;		}
		document.getElementById("divAbmListaCarrera1").style.display="none"
		document.getElementById("divAbmListaCarrera2").style.display=""
		LimpiarCamposListaCarrera()
}
function EditarListaCarreraFrm(){
	// if(controlacceso("EDITARCARRERA","accion")==false){  return;		}
	if(idAbmListaCarrera==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaCarrera1").style.display="none"
		document.getElementById("divAbmListaCarrera2").style.display=""
		
}
function BuscarListaCarreraFrm(){
	// if(controlacceso("BUSCARCARRERA","accion")==false){return;		}
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
	document.getElementById('inptDuracionListaCarrera').value = $(datostr).children('td[id="td_datos_3"]').html();
     document.getElementById("btnAbmListaCarrera").value="Editar Datos"
     document.getElementById("btnEditarDatosCarrera").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosCarrera").style.backgroundColor="red"



}
function EliminarRegitroListaCarrera(){
	// if(controlacceso("ELIMINARCARRERA","accion")==false){ return;		}
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
	var inptDuracionListaCarrera = document.getElementById("inptDuracionListaCarrera").value
	
	if(inptNombreListaCarrera==""){
		document.getElementById("inptNombreListaCarrera").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	
	var accion = "";
	if (idAbmListaCarrera != "") {
		accion = "editar";
		// if(controlacceso("EDITARCARRERA","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARCARRERA","accion")==false){return;		}
	}
	AbmListaCarrera(inptDuracionListaCarrera,inptNombreListaCarrera,inptEstadoListaCarrera,idAbmListaCarrera, accion)
}
function AbmListaCarrera(anhos,nombre,estado, idabm, accion) {
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
	datos.append("anhos", anhos)
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
// if(controlacceso("BUSCARCARRERA","accion")==false){ return;		}
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
function CargarCarrerasEnAsignarDocente(){
		
		var codFilial="";
$("input[id=inptBuscarAsignarDocentes1]").each(function (i, Elemento) {
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
	$("input[id=inptBuscarAsignarDocentes2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptBuscarAsignarDocentes2]").attr("list","ListCarrerasAsignarDocentes")
	}
	
	document.getElementById("inptBuscarAsignarDocentes2").innerHTML=""
	document.getElementById("inptBuscarAsignarDocentes2").value=""
	
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
			document.getElementById("ListCarrerasAsignarDocentes").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasAsignarDocentes").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasAsignarDocentes").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}

function CargarCatedrasEnAsignarDocente(){
		
		var codCarrera="";
$("input[id=inptBuscarAsignarDocentes2]").each(function (i, Elemento) {
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

    if(codCarrera==""){
	$("input[id=inptBuscarAsignarDocentes3]").attr("list","ListMaterias")
	return
	}else{
	$("input[id=inptBuscarAsignarDocentes3]").attr("list","ListMateriasAsignarDocentes")
	}
	
	document.getElementById("ListMateriasAsignarDocentes").innerHTML=""
	document.getElementById("inptBuscarAsignarDocentes3").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codcarrera": codCarrera,
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
			document.getElementById("ListMateriasAsignarDocentes").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListMateriasAsignarDocentes").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListMateriasAsignarDocentes").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
 function CargarCarrerasEnCalendario(){
		
		var codFilial="";
$("input[id=inptBuscarCalendario1]").each(function (i, Elemento) {
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
	$("input[id=inptBuscarCalendario2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptBuscarCalendario2]").attr("list","ListCarrerasCalendario")
	}
	
	document.getElementById("ListCarrerasCalendario").innerHTML=""
	document.getElementById("inptBuscarCalendario2").value=""
	
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
			document.getElementById("ListCarrerasCalendario").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasCalendario").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasCalendario").innerHTML = datos_buscados1
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
	// if(controlacceso("VERFACULTAD","accion")==false){ return;		}
	
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
	// if(controlacceso("INSERTARFACULTAD","accion")==false){ return;		}
		document.getElementById("divAbmListaFacultad1").style.display="none"
		document.getElementById("divAbmListaFacultad2").style.display=""
		LimpiarCamposListaFacultad()
}
function EditarListaFacultadFrm(){
	// if(controlacceso("EDITARFACULTAD","accion")==false){ return;		}
	if(idAbmListaFacultad==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaFacultad1").style.display="none"
		document.getElementById("divAbmListaFacultad2").style.display=""
		
}
function BuscarListaFacultadFrm(){
	// if(controlacceso("BUSCARFACULTAD","accion")==false){ return;		}
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
	// if(controlacceso("ELIMINARFACULTAD","accion")==false){ return;		}
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
		// if(controlacceso("EDITARFACULTAD","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARFACULTAD","accion")==false){ return;		}
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
// if(controlacceso("BUSCARFACULTAD","accion")==false){ return;		}
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
LISTA DE CATEDRA
*/
var idAbmListaCatedra="";
var ControlVistaListaCatedra=""
function verCerrarFrmListaCatedra(d){
	document.getElementById("divMinimizadoListadoDeCatedras").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERCATEDRA","accion")==false){return;		}

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
	// if(controlacceso("INSERTARCATEDRA","accion")==false){return;		}
		document.getElementById("divAbmListaCatedra1").style.display="none"
		document.getElementById("divAbmListaCatedra2").style.display=""
		LimpiarCamposListaCatedra()
}
function EditarListaCatedraFrm(){
	// if(controlacceso("EDITARCATEDRA","accion")==false){ return;		}
	if(idAbmListaCatedra==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaCatedra1").style.display="none"
		document.getElementById("divAbmListaCatedra2").style.display=""
		
}
function BuscarListaCatedraFrm(){
	// if(controlacceso("BUSCARCATEDRA","accion")==false){ return;		}
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
	// if(controlacceso("ELIMINARCATEDRA","accion")==false){ return;		}
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
		// if(controlacceso("INSERTARCATEDRA","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("EDITARCATEDRA","accion")==false){ return;		}
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
// if(controlacceso("BUSCARCATEDRA","accion")==false){ return;		}
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
ASIGNAR CATEDRAS
*/
var idAbmAsignarMalla="";
var ControlVistaAsignarMalla=""
function verCerrarFrmAsignarMalla(d){
	document.getElementById("divMinimizadoMallaCurricular").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERMALLA","accion")==false){  return;		}

	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmAsignarMalla").style.display="";
	
	}else{
	document.getElementById("divAbmAsignarMalla").style.display="none";
	LimpiarCamposAsignarMalla()
	LimpiarCamposBusquedaAsignarMalla()
	}
}
function verCerrarTipoVistaAsignarMalla(d){
	if(d=="1"){
		document.getElementById("tbVistarAsignarMalla1").style.display=""
		document.getElementById("tbVistarAsignarMalla2").style.display="none"
		document.getElementById("DivVistaAsignarMalla1").style.display=""
		document.getElementById("DivVistaAsignarMalla2").style.display="none"
		document.getElementById("btnVistaAsignarMalla1").style=""
		document.getElementById("btnVistaAsignarMalla2").style="background-color:#ccc"
		LimpiarCamposBusquedaAsignarMalla()
	}
	if(d=="2"){
		document.getElementById("tbVistarAsignarMalla1").style.display="none"
		document.getElementById("tbVistarAsignarMalla2").style.display=""
		document.getElementById("DivVistaAsignarMalla1").style.display="none"
		document.getElementById("DivVistaAsignarMalla2").style.display=""
		document.getElementById("btnVistaAsignarMalla1").style="background-color:#ccc"
		document.getElementById("btnVistaAsignarMalla2").style=""
		LimpiarCamposBusquedaAsignarMalla()
		BuscarAsignarMallaCascada1();
	}
}
var ventanavistarmalla="";
function verCerrarVistaMallaCurricular(d,ventana){
	if(d=="1"){
		document.getElementById("divVistaMallaCurricular").style.display=""
		ventanavistarmalla=ventana;
	}else{
		document.getElementById("divVistaMallaCurricular").style.display="none"
	}
	
}
function MinimizarVentanaMallaCurricular(){
	document.getElementById("divAbmAsignarMalla").style.display="none";
	document.getElementById("divMinimizadoMallaCurricular").style.display="";
}
function verCerrarFrmVistaAsignarMalla(d,v){
	// if(controlacceso("BUSCARMALLA","accion")==false){ return;		}
	if(d=="1"){
		document.getElementById("divVistaAsignarMalla").style.display=""
		ControlVistaAsignarMalla=v
	}else{
		document.getElementById("divVistaAsignarMalla").style.display="none"
	
	}
}
function NuevoAsignarMallaFrm(){
	// if(controlacceso("INSERTARMALLA","accion")==false){ return;		}
		document.getElementById("divAbmAsignarMalla1").style.display="none"
		document.getElementById("divAbmAsignarMalla2").style.display=""
		LimpiarCamposAsignarMalla()
}
function EditarAsignarMallaFrm(){
	// if(controlacceso("EDITARMALLA","accion")==false){ return;		}
	if(idAbmAsignarMalla==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarMalla1").style.display="none"
		document.getElementById("divAbmAsignarMalla2").style.display=""
		
}
function BuscarAsignarMallaFrm(){
	// if(controlacceso("BUSCARMALLA","accion")==false){ return;		}
		document.getElementById("divAbmAsignarMalla1").style.display=""
		document.getElementById("divAbmAsignarMalla2").style.display="none"
}
function LimpiarCamposAsignarMalla(){
	document.getElementById('inptRegistroSeleccionadoAsignarMallal').value = "";
	document.getElementById('inptCarreraAsignarMalla').value = "";
	document.getElementById('inptCatedraAsignarMalla').value = "";
	document.getElementById('inptCodigoAsignarMalla').value = "";
	document.getElementById('inptAnhoAsignarMalla').value = "";
	document.getElementById('inptCursoAsignarMalla').value = "";
	document.getElementById('inptSemestrAsignarMalla').value = "";
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
	document.getElementById('divBuscadorAsignarMallaCascada').innerHTML = "";
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
	document.getElementById("inptHorasemanalAsignarMalla").value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById("inptCodigoAsignarMalla").value = $(datostr).children('td[id="td_datos_13"]').html();
     document.getElementById("btnAbmAsignarMalla").value="Editar Datos"
     document.getElementById("btnEditarDatosAsignarMalla").style.backgroundColor="#4CAF50"
     document.getElementById("btnELiminarDatosAsignarMalla").style.backgroundColor="red"
}
function ObtenerdatosAbmAsignarMallaCascada(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	
	idAbmAsignarMalla = $(datostr).children('span[id="td_id_1"]').html();
	
	document.getElementById('inptCarreraAsignarMalla').value = $(datostr).children('span[id="td_datos_1"]').html();
	document.getElementById('inptCatedraAsignarMalla').value = $(datostr).children('span[id="td_datos_2"]').html();
	document.getElementById('inptAnhoAsignarMalla').value = $(datostr).children('span[id="td_datos_3"]').html();
	document.getElementById('inptCursoAsignarMalla').value = $(datostr).children('span[id="td_datos_4"]').html();
	document.getElementById('inptSemestrAsignarMalla').value = $(datostr).children('span[id="td_datos_5"]').html();
	document.getElementById('inptCargaHorariaAsignarMalla').value = $(datostr).children('span[id="td_datos_6"]').html();
	document.getElementById('inptEstadoAsignarMalla').value = $(datostr).children('span[id="td_datos_7"]').html();
	document.getElementById("inptHorasemanalAsignarMalla").value = $(datostr).children('span[id="td_datos_12"]').html();
	document.getElementById("inptCodigoAsignarMalla").value = $(datostr).children('span[id="td_datos_13"]').html();
   EditarAsignarMallaFrm()
}
function EliminarRegitroAsignarMalla(){
	// if(controlacceso("ELIMINARMALLA","accion")==false){return;		}
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
	 var inptHorasemanalAsignarMalla = document.getElementById("inptHorasemanalAsignarMalla").value
	var inptCodigoAsignarMalla = document.getElementById("inptCodigoAsignarMalla").value
		

	
	
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
		// if(controlacceso("EDITARMALLA","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARMALLA","accion")==false){return;		}
	}
	AbmAsignarMalla(inptCodigoAsignarMalla,inptHorasemanalAsignarMalla,inptCursoAsignarMalla,inptCargaHorariaAsignarMalla,inptAnhoAsignarMalla,inptSemestrAsignarMalla,inptEstadoAsignarMalla,idfkmateria,idfkcarrera,idAbmAsignarMalla, accion)
}
function AbmAsignarMalla(codigomalla,horasemanal,curso,cargahoraria,anho,semestre,estado,idlistadodematerias,cod_carrera,idabm, accion) {
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
	datos.append("cod_carrera", cod_carrera)
	datos.append("idlistadodematerias", idlistadodematerias)
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
// if(controlacceso("BUSCARMALLA","accion")==false){ return;		}

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
function inptSeleccCarpetasAsignarMalla(d){
	if(d=="1"){
	document.getElementById('inptSeleccCarpetasAsignarMalla1').checked=true
	document.getElementById('inptSeleccCarpetasAsignarMalla2').checked=false	
	}else{
	document.getElementById('inptSeleccCarpetasAsignarMalla1').checked=false
	document.getElementById('inptSeleccCarpetasAsignarMalla2').checked=true
	}
}
function BuscarAsignarMallaCascada1() {
// if(controlacceso("BUSCARMALLA","accion")==false){ return;		}

	
	var estado = "Activo"




	document.getElementById("divBuscadorAsignarMallaCascada").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"funt": "buscarcarreracascada"
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
			document.getElementById("divBuscadorAsignarMallaCascada").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarMallaCascada").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarMallaCascada").innerHTML = datos_buscados					
                 
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
function vercerrarasignarmallaanholistado(datos){
		var codCarrera=datos.id
	if(document.getElementById("div_anho_asignar_malla_"+codCarrera).style.display==""){
		document.getElementById("div_anho_asignar_malla_"+codCarrera).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarMalla1').checked==true){
$("div[name=div_anho_asignar_malla_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});
	$("img[name=iconocarpetamallacarrera]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');
	document.getElementById("div_anho_asignar_malla_"+codCarrera).style.display="";
	BuscarAsignarMallaCascada2(codCarrera)
}
function BuscarAsignarMallaCascada2(codCarrera) {
// if(controlacceso("BUSCARMALLA","accion")==false){ return;		}

	
	var estado = "Activo"




	document.getElementById("div_anho_asignar_malla_"+codCarrera).innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codCarrera": codCarrera,
		"funt": "buscaranhocascada"
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
			document.getElementById("div_anho_asignar_malla_"+codCarrera).innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_anho_asignar_malla_"+codCarrera).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("div_anho_asignar_malla_"+codCarrera).innerHTML = datos_buscados					
                 
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
function vercerrarasignarmallacursolistado(datos){
		var codCarrera=$(datos).children('span[id="span1"]').html();
		var anho=$(datos).children('span[id="span2"]').html();
		
	if(document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).style.display==""){
		document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarMalla1').checked==true){
$("div[name=div_curso_asignar_malla_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	$("img[name=iconocarpetamallaanho]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).style.display="";
	BuscarAsignarMallaCascada3(codCarrera,anho)
}
function BuscarAsignarMallaCascada3(codCarrera,anho) {
// if(controlacceso("BUSCARMALLA","accion")==false){  return;		}

	
	var estado = "Activo"




	document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codCarrera": codCarrera,
		"anho": anho,
		"funt": "buscarcursocascada"
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
			document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("div_curso_asignar_malla_"+codCarrera+anho).innerHTML = datos_buscados					
                 
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
function vercerrarasignarmallasemestrelistado(datos){
		var codCarrera=$(datos).children('span[id="span1"]').html();
		var anho=$(datos).children('span[id="span2"]').html();
		var curso=$(datos).children('span[id="span3"]').html();
	if(document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).style.display==""){
		document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarMalla1').checked==true){
$("div[name=div_semestre_asignar_malla_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetamallacurso]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).style.display="";
	BuscarAsignarMallaCascada4(codCarrera,anho,curso)
}
function BuscarAsignarMallaCascada4(codCarrera,anho,curso) {
// if(controlacceso("BUSCARMALLA","accion")==false){return;		}

	
	var estado = "Activo"




	document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codCarrera": codCarrera,
		"anho": anho,
		"curso": curso,
		"funt": "buscarsemestrecascada"
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
			document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("div_semestre_asignar_malla_"+codCarrera+anho+curso).innerHTML = datos_buscados					
                 
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
function vercerrarasignarmallaMateriaslistado(datos){
		var codCarrera=$(datos).children('span[id="span1"]').html();
		var anho=$(datos).children('span[id="span2"]').html();
		var curso=$(datos).children('span[id="span3"]').html();
		var semestre=$(datos).children('span[id="span4"]').html();
	if(document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).style.display==""){
		document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarMalla1').checked==true){
$("div[name=div_materias_asignar_malla_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetamallasemestre]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).style.display="";
	BuscarAsignarMallaCascada5(codCarrera,anho,curso,semestre)
}
function BuscarAsignarMallaCascada5(codCarrera,anho,curso,semestre) {
// if(controlacceso("BUSCARMALLA","accion")==false){ return;		}

	
	var estado = "Activo"




	document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codCarrera": codCarrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"funt": "buscarmateriacascada"
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
			document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("div_materias_asignar_malla_"+codCarrera+anho+curso+semestre).innerHTML = datos_buscados					
                 
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
function seleccionarcarreravistamalla(){
	// BuscarCatedraSelectporcarreraenmallavista()
	BuscarVistaAsignarMalla()
}
function seleccionarfilialvistamalla(){
	CargarCarrerasEnVistaMalla()
	BuscarVistaAsignarMalla()
}
function BuscarVistaAsignarMalla() {

	var anho = document.getElementById('inptVistaAsignarMalla3').value
	var curso = document.getElementById('inptVistaAsignarMalla4').value
	var semestre = document.getElementById('inptVistaAsignarMalla5').value
	var codigo = document.getElementById('inptVistaAsignarMalla6').value
var codfilial="";
$("input[id=inptVistaAsignarMalla7]").each(function (i, Elemento) {
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

var codCarrera="";
$("input[id=inptVistaAsignarMalla2]").each(function (i, Elemento) {
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
$("input[id=inptVistaAsignarMalla1]").each(function (i, Elemento) {
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


    var estado="Activo"

	document.getElementById("divBuscadorVistaMalla").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroVistaMalla").innerHTML=imgCargandoB;
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
		"codigo": codigo,
		"codfilial": codfilial,
		"ordenby": "1",
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
			document.getElementById("divBuscadorVistaMalla").innerHTML = ''
			document.getElementById("lblNroRegistroVistaMalla").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorVistaMalla").innerHTML = ''
			document.getElementById("lblNroRegistroVistaMalla").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorVistaMalla").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroVistaMalla").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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
function ObtenerdatosVistaAsignarMalla(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'
	if(ventanavistarmalla=="asignardocentes"){
	idFkMallaAsignarDocentes = $(datostr).children('td[id="td_id_1"]').html();
	idFkFilialAsignarDocentes = $(datostr).children('td[id="td_id_4"]').html();
	document.getElementById('inptCarreraAsignarDocente').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCatedraAsignarDocente').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptAnhoAsignarDocente').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCursoAsignarDocente').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptSemestreAsignarDocente').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById("inptCodMallaAsignarDocente").value = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById("inptFilialAsignarDocente").value = $(datostr).children('td[id="td_datos_14"]').html();
    
	}
	if(ventanavistarmalla=="calendario"){
	idFkMallaCalendario = $(datostr).children('td[id="td_id_1"]').html();
	idFkFilialCalendario = $(datostr).children('td[id="td_id_4"]').html();
	document.getElementById('inptCarreraCalendario').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCatedraCalendario').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptAnhoCalendario').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCursoCalendario').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptSemestreCalendario').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById("inptCodMallaCalendario").value = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById("inptFilialCalendario").value = $(datostr).children('td[id="td_datos_14"]').html();
    
	}
	document.getElementById("divVistaMallaCurricular").style.display="none";
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


function CargarCarrerasCrearListadoNotas(){
	
	
		var codFilial="";
$("input[id=inptReporCrearListadoNotas1]").each(function (i, Elemento) {
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
	$("input[id=inptReporCrearListadoNotas2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptReporCrearListadoNotas2]").attr("list","ListCarrerasCrearListadoNotas")
	}
	
	document.getElementById("ListCarrerasCrearListadoNotas").innerHTML=""
	document.getElementById("inptReporCrearListadoNotas2").value=""
	
	
	
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
			document.getElementById("ListCarrerasCrearListadoNotas").innerHTML=""
	
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)			
				document.getElementById("ListCarrerasCrearListadoNotas").innerHTML=""				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
					Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasCrearListadoNotas").innerHTML = datos_buscados1	
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	
}

function CargarCarrerasCargarArchivos(){
	
	
		var codFilial="";
$("input[id=inptReporCargarArhivos1]").each(function (i, Elemento) {
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
	$("input[id=inptReporCargarArhivos2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptReporCargarArhivos2]").attr("list","ListCarrerasCargarArchivos")
	}
	
	document.getElementById("ListCarrerasCargarArchivos").innerHTML=""
	document.getElementById("inptReporCargarArhivos2").value=""
	
	
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"codFacultad": "",
		"funt": "buscarcarreraporfilial3"
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
			document.getElementById("ListCarrerasCargarArchivos").innerHTML=""
			verCerrarEfectoCargando("2")
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)			
				document.getElementById("ListCarrerasCargarArchivos").innerHTML=""				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
					Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasCargarArchivos").innerHTML = datos_buscados1	
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	
}

function CargarCarrerasCargarArchivosPosgrado(){
	
	
		var codFilial="";
$("input[id=inptReporCargarArhivosPosgrado1]").each(function (i, Elemento) {
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
	$("input[id=inptReporCargarArhivosPosgrado2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptReporCargarArhivosPosgrado2]").attr("list","ListCarrerasCargarArchivosposgrado")
	}
	
	document.getElementById("ListCarrerasCargarArchivosposgrado").innerHTML=""
	document.getElementById("inptReporCargarArhivosPosgrado2").value=""
	
	
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"codFacultad": "8",
		"funt": "buscarcarreraporfilial3"
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
			document.getElementById("ListCarrerasCargarArchivosposgrado").innerHTML=""
			verCerrarEfectoCargando("2")
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)			
				document.getElementById("ListCarrerasCargarArchivosposgrado").innerHTML=""				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
					Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasCargarArchivosposgrado").innerHTML = datos_buscados1	
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
ALUMNOS
*/
var idAbmAbmAlumnos="";
var ControlVistaAbmAlumnos=""
function verCerrarFrmAbmAlumnos(d){
	document.getElementById("divMinimizadoListadoAlumnos").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERALUMNOS","accion")==false){ return;		}
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
	// if(controlacceso("INSERTARALUMNOS","accion")==false){ return;		}
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
	// if(controlacceso("INSERTARALUMNOS","accion")==false){  return;		}
		document.getElementById("divAbmAbmAlumnos1").style.display="none"
		document.getElementById("divAbmAbmAlumnos2").style.display=""
		LimpiarCamposAbmAlumnos()
}
function EditarAbmAlumnosFrm(){
	// if(controlacceso("EDITARALUMNOS","accion")==false){ return;		}
	if(idAbmAbmAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAbmAlumnos1").style.display="none"
		document.getElementById("divAbmAbmAlumnos2").style.display=""
		
}
function BuscarAbmAlumnosFrm(){
	// if(controlacceso("BUSCARALUMNOS","accion")==false){ return;		}
		document.getElementById("divAbmAbmAlumnos1").style.display=""
		document.getElementById("divAbmAbmAlumnos2").style.display="none"
}
function LimpiarCamposAbmAlumnos(){
	document.getElementById("inptDocumentoAbmAlumnos").value=""
	
	document.getElementById('inptDireccionAbmAlumnos').value = ""
	document.getElementById('inptTrabajoAbmAlumnos').value = ""
	document.getElementById('inptEncargadoAbmAlumnos').value = ""
	document.getElementById('inptEstudioAbmAlumnos').value = ""
	document.getElementById('inptPremioAbmAlumnos').value = ""
	document.getElementById('inptObsAbmAlumnos').value = ""
	document.getElementById('inptFechaNacAbmAlumnos').value = ""
	
	document.getElementById('inptTipoDocAbmAlumnos').value = ""
	document.getElementById('inptRucAbmAlumnos').value = ""
	document.getElementById('inptTelEncargadoAbmAlumnos').value = ""
	
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
	 document.getElementById("btnVerNotasAlumnos").style.backgroundColor='#ffcece'
	 document.getElementById("btnCargarNotasAlumnos").style.backgroundColor='#ffcece'
}
function LimpiarCamposBusquedaAlumnos(){
	document.getElementById("inptBuscarAbmAlumnos1").value=""
	document.getElementById("inptBuscarAbmAlumnos2").value=""
	document.getElementById("inptBuscarAbmAlumnos3").value=""
	document.getElementById("inptBuscarAbmAlumnos4").value=""
	document.getElementById("inptBuscarAbmAlumnos5").value=""
	document.getElementById("divBuscadorAbmAlumnos").innerHTML=""
}


var verificarAlumnoCalificaciones="";
var cod_cursoAlumno_Calificacion="";
var cod_CarreraAlumno_Calificacion=""; 
var anho_CarreraAlumno_Calificacion=""; 
var curso_CarreraAlumno_Calificacion=""; 
var semestre_CarreraAlumno_Calificacion=""; 
function ObtenerdatosAbmAbmAlumnos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	verificarAlumnoCalificaciones = $(datostr).children('td[id="td_id"]').html();
	idAbmAbmAlumnos = $(datostr).children('td[id="td_id"]').html();
	cod_cursoAlumno_Calificacion = $(datostr).children('td[id="td_datos_21"]').html();
	cod_CarreraAlumno_Calificacion = $(datostr).children('td[id="td_datos_22"]').html();
	anho_CarreraAlumno_Calificacion = $(datostr).children('td[id="td_datos_24"]').html();
	curso_CarreraAlumno_Calificacion = $(datostr).children('td[id="td_datos_25"]').html();
	semestre_CarreraAlumno_Calificacion = $(datostr).children('td[id="td_datos_26"]').html();
	document.getElementById('inptRegistroSeleccionadoAlumno').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptDocumentoAbmAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAbmAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptApellidoAbmAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptTelefAbmAlumnos').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptWhapAbmAlumnos').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptEmailAbmAlumnos').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptEstadoAbmAlumnos').value = $(datostr).children('td[id="td_datos_7"]').html();
	
	document.getElementById('inptTipoDocAbmAlumnos').value = $(datostr).children('td[id="td_datos_17"]').html();
	document.getElementById('inptRucAbmAlumnos').value = $(datostr).children('td[id="td_datos_15"]').html();
	document.getElementById('inptTelEncargadoAbmAlumnos').value = $(datostr).children('td[id="td_datos_16"]').html();
	
	document.getElementById('inptDireccionAbmAlumnos').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptTrabajoAbmAlumnos').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptEncargadoAbmAlumnos').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptEstudioAbmAlumnos').value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptPremioAbmAlumnos').value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptObsAbmAlumnos').value = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptFechaNacAbmAlumnos').value = $(datostr).children('td[id="td_datos_14"]').html();
	
     document.getElementById("btnAbmAbmAlumnos").value="Editar Datos"
     document.getElementById("btnEditarDatosAlumnos").style.backgroundColor='#4CAF50'
     document.getElementById("btnEliminarDatosAlumnos").style.backgroundColor='red'
	document.getElementById("btnVerNotasAlumnos").style.backgroundColor='#4CAF50'
	document.getElementById("btnCargarNotasAlumnos").style.backgroundColor='#2196f3'


}
function EliminarRegitroAlumnos(){
	// if(controlacceso("ELIMINARALUMNOS","accion")==false){  return;		}
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
	var inptPremioAbmAlumnos = document.getElementById("inptPremioAbmAlumnos").value
	
	
	var inptDireccionAbmAlumnos = document.getElementById("inptDireccionAbmAlumnos").value
	var inptTrabajoAbmAlumnos = document.getElementById("inptTrabajoAbmAlumnos").value
	var inptEncargadoAbmAlumnos = document.getElementById("inptEncargadoAbmAlumnos").value
	var inptEstudioAbmAlumnos = document.getElementById("inptEstudioAbmAlumnos").value
	var inptFechaNacAbmAlumnos = document.getElementById("inptFechaNacAbmAlumnos").value
	var inptObsAbmAlumnos = document.getElementById("inptObsAbmAlumnos").value
	
	var inptEstadoAbmAlumnos = document.getElementById("inptEstadoAbmAlumnos").value
	
	var inptTipoDocAbmAlumnos = document.getElementById("inptTipoDocAbmAlumnos").value
	var inptRucAbmAlumnos = document.getElementById("inptRucAbmAlumnos").value
	var inptTelEncargadoAbmAlumnos = document.getElementById("inptTelEncargadoAbmAlumnos").value

	
	
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
	
	if(inptDocumentoAbmAlumnos==""){
		document.getElementById("inptDocumentoAbmAlumnos").focus()
		alertmensaje("Falto ingresar el documento del alumno")
		return
	}
	
	if(inptTipoDocAbmAlumnos==""){
		document.getElementById("inptTipoDocAbmAlumnos").focus()
		alertmensaje("Falto seleccionar el tipo de documento")
		return
	}
	
	if(inptDireccionAbmAlumnos==""){
		document.getElementById("inptDireccionAbmAlumnos").focus()
		alertmensaje("Falto ingresar la direccion del alumno")
		return
	}
	
	
	if(inptEstadoAbmAlumnos==""){
		document.getElementById("inptEstadoAbmAlumnos").focus()
		alertmensaje("Falto seleccionar el estado del registro")
		return
	}

			
	var accion = "";
	if (idAbmAbmAlumnos != "") {
		accion = "editar";
		// if(controlacceso("EDITARALUMNOS","accion")==false){return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARALUMNOS","accion")==false){ return;		}
	}
	AbmAbmAlumnos(inptTipoDocAbmAlumnos,inptRucAbmAlumnos,inptTelEncargadoAbmAlumnos,inptPremioAbmAlumnos,inptDireccionAbmAlumnos,inptTrabajoAbmAlumnos,inptEncargadoAbmAlumnos,inptEstudioAbmAlumnos,inptFechaNacAbmAlumnos,inptObsAbmAlumnos,inptDocumentoAbmAlumnos,inptNombreAbmAlumnos,inptApellidoAbmAlumnos,inptTelefAbmAlumnos,inptWhapAbmAlumnos,inptEmailAbmAlumnos,inptEstadoAbmAlumnos,idAbmAbmAlumnos, accion)
}
function AbmAbmAlumnos(tipodoc,ruc,telencargado,premio,direccion,trabajo,encargado,estudio,fechanac,obs,ci,nombre,apellido,telef,whatsapp,email,estado,idabm, accion) {
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
	datos.append("premio", premio)
	datos.append("direccion", direccion)
	datos.append("trabajo", trabajo)
	datos.append("encargado", encargado)
	datos.append("estudio", estudio)
	datos.append("fechanac", fechanac)
	datos.append("obs", obs)
	
	datos.append("tipodoc", tipodoc)
	datos.append("ruc", ruc)
	datos.append("telencargado", telencargado)
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
// if(controlacceso("BUSCARALUMNOS","accion")==false){ return;		}
	var documento = document.getElementById('inptBuscarAbmAlumnos1').value
	var nombre = document.getElementById('inptBuscarAbmAlumnos4').value
	var apellido = document.getElementById('inptBuscarAbmAlumnos5').value
	var Encargado = document.getElementById('inptBuscarAbmAlumnos6').value
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
		"Encargado": Encargado,
		"funt": "buscarRegistro"
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
	// document.getElementById('inptAnhoAsignarAlumnos').value=""
	// document.getElementById('inptCursoAsignarAlumnos').value=""
	// document.getElementById('inptSemestreAsignarAlumnos').value=""
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
ASIGNAR ALUMNOS
*/
var idAlumnoFkAsignar="";
var idAbmAsignarAlumnos="";
var CodCarreraFkAsignarAlumnos="";
var ControlVistaAsignarAlumnos=""
function verCerrarFrmAsignarAlumnos(d){
		document.getElementById("divMinimizadoMatriculacionAlumnos").style.display="none";
		document.getElementById("divMinimizadoMatriculacionAlumnos2").style.display="none";
		  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERMATRICULACION","accion")==false){ return;		}
	LimpiarCamposAsignarAlumnos()
	
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
	document.getElementById("divMinimizadoMatriculacionAlumnos2").style.display="";
}
function verCerrarFrmAsignarAlumnos2(d){
	
	document.getElementById("divAbmAsignarAlumnos").style.display="none";
	
}
var ControlVistaMatriculados="";
function verCerrarFrmVistaAsignarAlumnos(d,v){
	
	// if(controlacceso("BUSCARMATRICULACION","accion")==false){ return;		}
		 
	if(d=="1"){
		var f = new Date();
	   // document.getElementById('inptBuscarVistaAsignarAlumnos8').value = f.getFullYear();
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
	// if(controlacceso("INSERTARMATRICULACION","accion")==false){ return;		}
		document.getElementById("divAbmAsignarAlumnos1").style.display="none"
		document.getElementById("divAbmAsignarAlumnos2").style.display=""
		LimpiarCamposAsignarAlumnos()
}
function EditarAsignarAlumnosFrm(){
	// if(controlacceso("EDITARMATRICULACION","accion")==false){ return;		}
	if(idAbmAsignarAlumnos==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarAlumnos1").style.display="none"
		document.getElementById("divAbmAsignarAlumnos2").style.display=""
		
}
function BuscarAsignarAlumnosFrm(){
	// if(controlacceso("BUSCARMATRICULACION","accion")==false){  return;		}
		document.getElementById("divAbmAsignarAlumnos1").style.display=""
		document.getElementById("divAbmAsignarAlumnos2").style.display="none"
}
function LimpiarCamposAsignarAlumnos(){
	document.getElementById("inptFechaMatriculacionAsignarAlumnos").value=""
	document.getElementById("inptInicioClaseAsignarAlumnos").value=""
	document.getElementById("inptDocumentoAsignarAlumnos").value=""
	document.getElementById("inptNombreAsignarAlumnos").value=""
	document.getElementById("inptFilialAsignarAlumnos").value=""
	document.getElementById("inptCarreraAsignarAlumnos").value=""
	document.getElementById("inptCursoAsignarAlumnos").value="1"
	document.getElementById("inptFilialAsignarAlumnos").value=""
	document.getElementById("inptAnhoAsignarAlumnos").value=""
	document.getElementById("inptAnhoAsignarRegistroAlumnos").value=""
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
	document.getElementById('inptAnhoAsignarRegistroAlumnos').value = f.getFullYear();
	document.getElementById('inptAnhoAsignarAlumnos').value = f.getFullYear();
	if( accesosuser["MODIFICARANHO"]["accion"]=="SI")
	{
	// document.getElementById("inptAnhoAsignarAlumnos").disabled=false
	document.getElementById("inptAnhoAsignarRegistroAlumnos").disabled=false
		}else{
			// document.getElementById("inptAnhoAsignarAlumnos").disabled=true
			document.getElementById("inptAnhoAsignarRegistroAlumnos").disabled=true
		}
		if( accesosuser["MODIFICARCURSO"]["accion"]=="SI")
	{
		// document.getElementById("inptCursoAsignarAlumnos").disabled=false
		}else{
			// document.getElementById("inptCursoAsignarAlumnos").disabled=true
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
	document.getElementById('inptAnhoAsignarRegistroAlumnos').value = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptTurnoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptFechaInicioAsignarAlumnos').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptFechaFinAsignarAlumnos').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptEstadoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptFilialAsignarAlumnos').value = $(datostr).children('td[id="td_datos_12"]').html();
     document.getElementById("btnAbmAsignarAlumnos").value="Editar Datos"



}
function EliminarRegitroAsingarAlumnos(){
		// if(controlacceso("ELIMINARMATRICULACION","accion")==false){ return;		}
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
					if(datos[2]==0){
						alertmensaje("NO SE ENCONTRARON REGISTROS COINCIDENTES")
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
if(datos=="CULMINADO"){
	document.getElementById("inptSemestreAsignarAlumnos").innerHTML=""
	+"<option value='CULMINADO'>CULMINADO</option>"

}	
}
function VerificarDatosAsignarAlumnos(){
	
	
	var inptAnhoAsignarAlumnos=document.getElementById("inptAnhoAsignarAlumnos").value
	var inptAnhoAsignarRegistroAlumnos=document.getElementById("inptAnhoAsignarRegistroAlumnos").value
	var inptSemestreAsignarAlumnos=document.getElementById("inptSemestreAsignarAlumnos").value
	var inptCursoAsignarAlumnos=document.getElementById("inptCursoAsignarAlumnos").value
	var inptTurnoAsignarAlumnos=document.getElementById("inptTurnoAsignarAlumnos").value
	var inptSeccionAsignarAlumnos=document.getElementById("inptSeccionAsignarAlumnos").value
	var inptConvalidacionAsignarAlumnos=document.getElementById("inptConvalidacionAsignarAlumnos").value
	var inptEstadoAsignarAlumnos=document.getElementById("inptEstadoAsignarAlumnos").value
	var inptInicioClaseAsignarAlumnos=document.getElementById("inptInicioClaseAsignarAlumnos").value
	var inptFechaMatriculacionAsignarAlumnos=document.getElementById("inptFechaMatriculacionAsignarAlumnos").value
	var inptNroMatriculaAsignarAlumnos=document.getElementById("inptNroMatriculaAsignarAlumnos").value
	var inptTipoAlumnoAsignarAlumnos=document.getElementById("inptTipoAlumnoAsignarAlumnos").value
	
	

	if(inptTipoAlumnoAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el tipo de cliente")
		return
	}

	if(inptAnhoAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar el año académico")
		return
	}
	
	if(inptInicioClaseAsignarAlumnos==""){
		alertmensaje("Falto Seleccionar la fecha de inicio de clases ")
		return
	}
	if(inptAnhoAsignarRegistroAlumnos==""){
		alertmensaje("Falto Seleccionar el año de registro")
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
		// if(controlacceso("INSERTARMATRICULACION","accion")==false){ return;		}
	
	AbmAsignarAlumnos(inptTipoAlumnoAsignarAlumnos,inptNroMatriculaAsignarAlumnos,inptFechaMatriculacionAsignarAlumnos,inptInicioClaseAsignarAlumnos,inptEstadoAsignarAlumnos,inptConvalidacionAsignarAlumnos,inptSeccionAsignarAlumnos,inptTurnoAsignarAlumnos,inptAnhoAsignarAlumnos,inptAnhoAsignarRegistroAlumnos,inptSemestreAsignarAlumnos,inptCursoAsignarAlumnos,CodCarreraFkAsignarAlumnos,idAlumnoFkAsignar, accion)
}
function AbmAsignarAlumnos(tipo,nroMatriculacion,fechaMatriculacion,fechaInicio,estado,convalidacion,seccion,turno,anho,anhoregistro,semestre,curso,cod_carreraFK,idalumnoFk, accion){
	var datos = new FormData();
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idAbm", "")
	datos.append("estado", estado)
	datos.append("cod_carreraFK", cod_carreraFK)
	datos.append("idalumnoFk", idalumnoFk)
	datos.append("anho", anho)
	datos.append("anhoregistro", anhoregistro)
	datos.append("semestre", semestre)
	datos.append("curso", curso)
	datos.append("seccion", seccion)
	datos.append("turno", turno)
	datos.append("convalidacion", convalidacion)
	datos.append("fechaInicio", fechaInicio)
	datos.append("fechaMatriculacion", fechaMatriculacion)
	datos.append("nroMatriculacion", nroMatriculacion)
	datos.append("tipo", tipo)
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
	// if(controlacceso("BUSCARMATRICULACION","accion")==false){  return;		}
	
	if(d=="1"){
	document.getElementById("divHistorialMatriculacion").style.display="";
	BuscarMiHistorialDeMatriculacionb()
	}else{
	document.getElementById("divHistorialMatriculacion").style.display="none";
	}
}
function BuscarMiHistorialDeMatriculacionb() {
// if(controlacceso("BUSCARMATRICULACION","accion")==false){  return;		}	
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

function BuscarMiHistorialDeMatriculacion() {
// if(controlacceso("BUSCARMATRICULACION","accion")==false){ return;		}	
		if(document.getElementById('checkestadoHistorialMatriculados1').checked==true){
			var estado="Activo";
		}
		if(document.getElementById('checkestadoHistorialMatriculados2').checked==true){
			var estado="Inactivo";
		}
		if(document.getElementById('checkestadoHistorialMatriculados3').checked==true){
			var estado="Academico";
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
// if(controlacceso("EDITARMATRICULACION","accion")==false){  return;		}	
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
					BuscarReportAlumnosMatriculados()
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
		document.getElementById('tdOrdReportAsignarAlumnos7').className="td_registro_orden1"
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
	if(d=="7"){
		document.getElementById('tdOrdReportAsignarAlumnos7').className="td_registro_orden"
		controlordenasignaralumnos="7"
	}
	
	BuscarVistaAsignarAlumnos() 
	
}
function BuscarVistaAsignarAlumnos() {

	var documento = document.getElementById('inptBuscarVistaAsignarAlumnos1').value
	var alumno = document.getElementById('inptBuscarVistaAsignarAlumnos2').value
	var curso = document.getElementById('inptBuscarVistaAsignarAlumnos4').value
	var anho = document.getElementById('inptBuscarVistaAsignarAlumnos5').value
	var semestre = document.getElementById('inptBuscarVistaAsignarAlumnos6').value
	// var anhoregistro = document.getElementById('inptBuscarVistaAsignarAlumnos8').value
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
var duracioncarreracargarcobranzas="";

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
		facturaNombreAlumno=$(datostr).children('td[id="td_datos_2"]').html();

 facturaCiAlumno=$(datostr).children('td[id="td_datos_1"]').html();
 facturaDireccionAlumno=$(datostr).children('td[id="td_datos_10"]').html();
 facturaTelefAlumno="";
	duracioncarreracargarcobranzas= $(datostr).children('td[id="td_datos_14"]').html();
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


		document.getElementById('inptNombreApellidoRazonSocial').value = $(datostr).children('td[id="td_datos_16"]').html();
		document.getElementById('inptRucRazonSocial').value = $(datostr).children('td[id="td_datos_17"]').html();



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
	duracioncarreracobrarcobranzas= $(datostr).children('td[id="td_datos_14"]').html();
	document.getElementById('inptCodArancelCobrarAranceles').value=""
document.getElementById('inptNomArancelCobrarAranceles').value=""
controlNombreArancelCobranza ="";
document.getElementById('inptCantArancelCobrarAranceles').value=""
document.getElementById('inptPrecioArancelCobrarAranceles').value=""
document.getElementById('inptDescuentoArancelCobrarAranceles').value=""
document.getElementById('inptTotalArancelCobrarAranceles').value=""
document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById("btnCambiarRazonSocial").style.backgroundColor="#afafaf";
document.getElementById('btnMasDetalleVenta').style.display='none';
	
	buscarnroexpedicionb()
	BuscarArancelesCobrarAranceles()
	
	facturaNombreAlumno=$(datostr).children('td[id="td_datos_2"]').html();

 facturaCiAlumno=$(datostr).children('td[id="td_datos_1"]').html();
 facturaTelefAlumno=$(datostr).children('td[id="td_datos_12"]').html();
 facturaDireccionAlumno=$(datostr).children('td[id="td_datos_10"]').html();

    }
	
	if(ControlVistaMatriculados=="Becados"){
	idfkalumnoBecados = $(datostr).children('td[id="td_id_2"]').html();
	idFkFilialBecados = $(datostr).children('td[id="td_id_4"]').html();
	idFkCarreraBecados = $(datostr).children('td[id="td_id_5"]').html();	
	document.getElementById('inptDocAlumnosAbmBecados').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptAlumnosAbmBecados').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCarreraAbmBecados').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inpAnhoAbmBecados').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptFilialAbmBecados').value = $(datostr).children('td[id="td_datos_10"]').html();
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
	// if(controlacceso("VERINFORMEMATRICULACION","accion")==false){ return;		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divReportAlumMatri").style.display="";
	
	}else{
	document.getElementById("divReportAlumMatri").style.display="none";
	limipiarCamposBusquedaReportMatriculados()
	}
}

function verCerrarTipoVistaMatriculado(d){
	if(d=="1"){
		document.getElementById("tbHistorialMatriculaciones1").style.display=""
		document.getElementById("tbHistorialMatriculaciones2").style.display="none"
		document.getElementById("DivVistaHistorialMatriculaciones1").style.display=""
		document.getElementById("DivVistaHistorialMatriculaciones2").style.display="none"
		document.getElementById("btnVistaHistorialMatriculacion1").style=""
		document.getElementById("btnVistaHistorialMatriculacion2").style="background-color:#ccc"
		limipiarCamposBusquedaReportMatriculados()
	}
	if(d=="2"){
		document.getElementById("tbHistorialMatriculaciones1").style.display="none"
		document.getElementById("tbHistorialMatriculaciones2").style.display=""
		document.getElementById("DivVistaHistorialMatriculaciones1").style.display="none"
		document.getElementById("DivVistaHistorialMatriculaciones2").style.display=""
		document.getElementById("btnVistaHistorialMatriculacion1").style="background-color:#ccc"
		document.getElementById("btnVistaHistorialMatriculacion2").style=""
		limipiarCamposBusquedaReportMatriculados()
		BuscarReportAlumnosMatriculadosCascada1();
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
	    document.getElementById('inptReporAlumnoMatriculado9').value=f.getFullYear()
	    document.getElementById('inptReporAlumnoMatriculado5').value=f.getFullYear()
		document.getElementById("inptReporAlumnoMatriculado6").value="";
		document.getElementById("inptReporAlumnoMatriculado7").value="";
		document.getElementById("inptReporAlumnoMatriculado8").value="";
		document.getElementById("inptRegistroReportAlumnMatric").value="";
		document.getElementById("inptSeleccionadoReportAlumnMatric").value="";
		document.getElementById('btnMasDetallesAlumnosMatriculados').style.backgroundColor="#b5f5b7";
		document.getElementById('btnArhivoDetallesAlumnosMatriculados').style.backgroundColor="#2196f3";
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
		document.getElementById('tdOrdReportMatri6').className="td_registro_orden1"
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
	if(d=="6"){
		document.getElementById('tdOrdReportMatri6').className="td_registro_orden"
		controlordenreportmatriculacion="6"
	}
	BuscarReportAlumnosMatriculados()
}
function checkestadoAlumnosMatriculados(d){
	if(d=="1"){
	document.getElementById('checkestadoAlumnosMatriculados1').checked=true
	document.getElementById('checkestadoAlumnosMatriculados2').checked=false	
	document.getElementById('checkestadoAlumnosMatriculados3').checked=false	
	document.getElementById('checkestadoAlumnosMatriculados4').checked=false	
	}
	if(d=="2"){
	document.getElementById('checkestadoAlumnosMatriculados1').checked=false
	document.getElementById('checkestadoAlumnosMatriculados3').checked=false
	document.getElementById('checkestadoAlumnosMatriculados4').checked=false
	document.getElementById('checkestadoAlumnosMatriculados2').checked=true
	}
	if(d=="3"){
	document.getElementById('checkestadoAlumnosMatriculados1').checked=false
	document.getElementById('checkestadoAlumnosMatriculados2').checked=false
	document.getElementById('checkestadoAlumnosMatriculados4').checked=false
	document.getElementById('checkestadoAlumnosMatriculados3').checked=true
	}
	if(d=="4"){
	document.getElementById('checkestadoAlumnosMatriculados1').checked=false
	document.getElementById('checkestadoAlumnosMatriculados2').checked=false
	document.getElementById('checkestadoAlumnosMatriculados3').checked=false
	document.getElementById('checkestadoAlumnosMatriculados4').checked=true
	}
	 
}
function BuscarReportAlumnosMatriculados() {
// if(controlacceso("INFORMEMATRICULACION","accion")==false){  return;		}
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
    var anhoregistro=document.getElementById("inptReporAlumnoMatriculado9").value
	// if(anhoregistro==""){
		// alertmensaje("EL AÑO NO PUEDE QUEDAR VACIO")
		// return
	// }
    var semestre=document.getElementById("inptReporAlumnoMatriculado7").value
    var nombre=document.getElementById("inptReporAlumnoMatriculado4").value
    var convalidado=document.getElementById("inptReporAlumnoMatriculado8").value
    var turno=document.getElementById("inptReporAlumnoMatriculado10").value
    var seccion=document.getElementById("inptReporAlumnoMatriculado11").value
	document.getElementById("divFiltrosAlumnosmatriculados").style.display="none"
	document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportAlumnMatric").value="...";
	if(document.getElementById('checkestadoAlumnosMatriculados1').checked==true){
		var estado="Activo"
	}
	if(document.getElementById('checkestadoAlumnosMatriculados2').checked==true){
		var estado="Inactivo"
	}
	if(document.getElementById('checkestadoAlumnosMatriculados3').checked==true){
		var estado=""
	}
	if(document.getElementById('checkestadoAlumnosMatriculados4').checked==true){
		var estado="Academico"
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
		"convalidado": convalidado,
		"anhoregistro": anhoregistro,
		"turno": turno,
		"seccion": seccion,
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
	if(datos[3]==0){
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


function ExporarAAlumnosMatriculados() {

    if (!$.fn.table2excel) {
        console.error("Plugin table2excel no cargado");
        return;
    }

    $("#divBuscadorReportAlumnosMatriculados").table2excel({
        exclude: ".noExl",
        name: "Alumnos Matriculados",
        filename: "Alumnos_Matriculados"
    });
}



function inptSeleccCarpetasHistorialMatriculaciones(d){
	if(d=="1"){
	document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked=true
	document.getElementById('inptSeleccCarpetasHistorialMatriculaciones2').checked=false	
	}else{
	document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked=false
	document.getElementById('inptSeleccCarpetasHistorialMatriculaciones2').checked=true
	}
}
function inptSeleccEstadoMatriculadosCascada(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoMatriculadosCascada1').checked=true
	document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked=false	
	document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked=false	
	}
	if(d=="2"){
	document.getElementById('inptSeleccEstadoMatriculadosCascada1').checked=false
	document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked=true
	document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked=false
	}
	if(d=="3"){
	document.getElementById('inptSeleccEstadoMatriculadosCascada1').checked=false
	document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked=false
	document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked=true
	}
}
function BuscarReportAlumnosMatriculadosCascada1() {
// if(controlacceso("INFORMEMATRICULACION","accion")==false){  return;		}
	
		var estado=""
		
	document.getElementById("divBuscadorHistorialMatriculacionesCascada").innerHTML =imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"funt": "buscarcascadafilialReportMatriculados"
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
			document.getElementById("divBuscadorHistorialMatriculacionesCascada").innerHTML = ""
  
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorHistorialMatriculacionesCascada").innerHTML = ""
    
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados = datos[2];
document.getElementById("divBuscadorHistorialMatriculacionesCascada").innerHTML = datos_buscados

					 cargarAdminTareas()
   
	if(datos[3]==0){
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
function vercerrarcascadareportmatriculadoscarrera(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
	if(document.getElementById("div_repor_matriculados_carrera_"+codfilial).style.display==""){
		document.getElementById("div_repor_matriculados_carrera_"+codfilial).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_repor_matriculados_carrera_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetafilialreportmatriculados]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_repor_matriculados_carrera_"+codfilial).style.display="";
	BuscarReportAlumnosMatriculadosCascada2(codfilial)
}
function BuscarReportAlumnosMatriculadosCascada2(codfilial) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){  return;		}
	
	var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	
	

	document.getElementById("div_repor_matriculados_carrera_"+codfilial).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"funt": "buscarcascadaCarrerasReportMatriculacion"
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
			document.getElementById("div_repor_matriculados_carrera_"+codfilial).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_repor_matriculados_carrera_"+codfilial).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_repor_matriculados_carrera_"+codfilial).innerHTML = datos_buscados			
                 
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
function vercerrarreportmatriculadosanho(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
	if(document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).style.display==""){
		document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_anho_report_matriculados_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetareportmatroculadoanho]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).style.display="";
	BuscarReportAlumnosMatriculadosCascada3(codfilial,codcarrera)
}
function BuscarReportAlumnosMatriculadosCascada3(codfilial,codcarrera) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){ return;		}
	
var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	
	

document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"funt": "buscarcascadaAnhoReportMatriculacion"
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
		document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
				document.getElementById("div_anho_report_matriculados_"+codfilial+codcarrera).innerHTML = datos_buscados			
                 
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
function vercerrarreportmatriculadoscurso(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
	if(document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).style.display==""){
		document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_curso_report_matriculados_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetareportmatroculadocurso]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).style.display="";
	BuscarReportAlumnosMatriculadosCascada4(codfilial,codcarrera,anho)
}
function BuscarReportAlumnosMatriculadosCascada4(codfilial,codcarrera,anho) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){  return;		}
	
var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	
	

document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"funt": "buscarcascadacursoReportMatriculacion"
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
		document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
				document.getElementById("div_curso_report_matriculados_"+codfilial+codcarrera+anho).innerHTML = datos_buscados			
                 
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
function vercerrarreportmatriculadossemestre(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
		var curso=$(datos).children('span[id="span4"]').html();
	if(document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).style.display==""){
		document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_semestre_report_matriculados_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetareportmatroculadosemestre]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).style.display="";
	BuscarReportAlumnosMatriculadosCascada5(codfilial,codcarrera,anho,curso)
}
function BuscarReportAlumnosMatriculadosCascada5(codfilial,codcarrera,anho,curso) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){ return;		}
	
	var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	

document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"curso": curso,
		"funt": "buscarcascadaSemestreReportMatriculacion"
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
		document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
			document.getElementById("div_semestre_report_matriculados_"+codfilial+codcarrera+anho+curso).innerHTML = datos_buscados			
                 
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
function vercerrarreportmatriculadosturno(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
		var curso=$(datos).children('span[id="span4"]').html();
		var semestre=$(datos).children('span[id="span5"]').html();
	if(document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).style.display==""){
		document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_turno_report_matriculados_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetareportmatroculadoturno]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).style.display="";
	BuscarReportAlumnosMatriculadosCascada6(codfilial,codcarrera,anho,curso,semestre)
}
function BuscarReportAlumnosMatriculadosCascada6(codfilial,codcarrera,anho,curso,semestre) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){ return;		}
	
var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	
	

document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"funt": "buscarcascadaTurnoReportMatriculacion"
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
		document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
			document.getElementById("div_turno_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = datos_buscados			
                 
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
function vercerrarreportmatriculadosseccion(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
		var curso=$(datos).children('span[id="span4"]').html();
		var semestre=$(datos).children('span[id="span5"]').html();
		var turno=$(datos).children('span[id="span6"]').html();
	if(document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).style.display==""){
		document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_seccion_report_matriculados_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetareportmatroculadoseccion]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).style.display="";
	BuscarReportAlumnosMatriculadosCascada7(codfilial,codcarrera,anho,curso,semestre,turno)
}
function BuscarReportAlumnosMatriculadosCascada7(codfilial,codcarrera,anho,curso,semestre,turno) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){ return;		}
	
	var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	
	

document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"turno": turno,
		"funt": "buscarcascadaSeccionReportMatriculacion"
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
		document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
			document.getElementById("div_seccion_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno).innerHTML = datos_buscados			
                 
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
function vercerrarreportmatriculadosalumnos(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
		var curso=$(datos).children('span[id="span4"]').html();
		var semestre=$(datos).children('span[id="span5"]').html();
		var turno=$(datos).children('span[id="span6"]').html();
		var seccion=$(datos).children('span[id="span7"]').html();
	if(document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).style.display==""){
		document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasHistorialMatriculaciones1').checked==true){
$("div[name=div_alumnos_report_matriculados_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetareportmatroculadoalumnos]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).style.display="";
	BuscarReportAlumnosMatriculadosCascada8(codfilial,codcarrera,anho,curso,semestre,turno,seccion)
}
function BuscarReportAlumnosMatriculadosCascada8(codfilial,codcarrera,anho,curso,semestre,turno,seccion) {
// if(controlacceso("BUSCARASIGNARARANCEL","accion")==false){  return;		}
	
	var estado=""
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada2').checked==true){
			 estado="Activo"
		}
		if(document.getElementById('inptSeleccEstadoMatriculadosCascada3').checked==true){
			 estado="Academico"
		}
	
	

document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"turno": turno,
		"seccion": seccion,
		"funt": "buscarcascadaAlumnosReportMatriculacion"
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
		document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
			document.getElementById("div_alumnos_report_matriculados_"+codfilial+codcarrera+anho+curso+semestre+turno+seccion).innerHTML = datos_buscados			
                 
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
var idFkFilialAlumnoMatriculado=""
function ObtenerdatosReportAlumnosMatriculados(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
	datostr.className = 'tableRegistroSelec'
	 idAlumnoFkSubirArchivoCarrera=$(datostr).children('td[id="td_id_2"]').html();
    CodListadoCarreraFkSubirArchivoCarrera=$(datostr).children('td[id="td_datos_16"]').html();
    eventoArchivoMatriculaciones=$(datostr).children('td[id="td_datos_17"]').html();
	idAlumnoFkAsignar = $(datostr).children('td[id="td_id_2"]').html();
	idFkFilialAlumnoMatriculado = $(datostr).children('td[id="td_id_4"]').html();
	document.getElementById('inptDocumentoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('lblNombreAlumnoMatriculadoDetalles').innerHTML = $(datostr).children('td[id="td_datos_1"]').html()+" - "+$(datostr).children('td[id="td_datos_2"]').html()+" ("+$(datostr).children('td[id="td_datos_10"]').html()+")";
	document.getElementById('inptSeleccionadoReportAlumnMatric').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptFilialAsignarAlumnos').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptCarreraAsignarAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('btnMasDetallesAlumnosMatriculados').style.backgroundColor="";
	document.getElementById('btnGenerarDiplomas1').style.backgroundColor="";
	document.getElementById('btnGenerarDiplomas2').style.backgroundColor="";
	document.getElementById('btnArhivoDetallesAlumnosMatriculados').style.backgroundColor="";
	BuscarMiHistorialDeMatriculacion()
	
   
}
function ObtenerdatosReportAlumnosMatriculadosCascada(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});

	
	idAlumnoFkAsignar = $(datostr).children('td[id="td_id_2"]').html();
	idFkFilialAlumnoMatriculado = $(datostr).children('td[id="td_id_4"]').html();
	document.getElementById('inptDocumentoAsignarAlumnos').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('lblNombreAlumnoMatriculadoDetalles').innerHTML = $(datostr).children('td[id="td_datos_1"]').html()+" - "+$(datostr).children('td[id="td_datos_2"]').html()+" ("+$(datostr).children('td[id="td_datos_10"]').html()+")";
	document.getElementById('inptSeleccionadoReportAlumnMatric').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarAlumnos').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptFilialAsignarAlumnos').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptCarreraAsignarAlumnos').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('btnMasDetallesAlumnosMatriculados').style.backgroundColor="";
	document.getElementById('btnGenerarDiplomas1').style.backgroundColor="";
	document.getElementById('btnGenerarDiplomas2').style.backgroundColor="";
	BuscarMiHistorialDeMatriculacion()
	VerRegistroSeleccionadoReportAlumnMatric()
   
}
function checkestadoHistorialMatriculados(d){
	if(d=="1"){
	document.getElementById('checkestadoHistorialMatriculados1').checked=true
	document.getElementById('checkestadoHistorialMatriculados2').checked=false	
	document.getElementById('checkestadoHistorialMatriculados3').checked=false	
	}
	if(d=="2"){
	document.getElementById('checkestadoHistorialMatriculados1').checked=false
	document.getElementById('checkestadoHistorialMatriculados3').checked=false
	document.getElementById('checkestadoHistorialMatriculados2').checked=true
	}
	if(d=="3"){
	document.getElementById('checkestadoHistorialMatriculados1').checked=false
	document.getElementById('checkestadoHistorialMatriculados2').checked=false
	document.getElementById('checkestadoHistorialMatriculados3').checked=true
	}
	 BuscarMiHistorialDeMatriculacion()
}
function VerRegistroSeleccionadoReportAlumnMatric(){
	// if(controlacceso("VERINFORMEMATRICULACION","accion")==false){return;		}
	if(idAlumnoFkAsignar==""){
			alertmensaje("Falto seleccionar un registro")
		return
	}
	document.getElementById("divAbmAsignarAlumnos").style.display="";
	document.getElementById("imgCerrarDatosMatric1").style.display="none";
	document.getElementById("imgCerrarDatosMatric2").style.display="";
}




 /*
CARRERA
*/
var idAbmAsignarCarrera="";
var ControlVistaAsignarCarrera=""
function verCerrarFrmAsignarCarrera(d){
		document.getElementById("divMinimizadoCarrera").style.display="none";
		  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERASIGNARCARRERA","accion")==false){ return;		}
	
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
function verCerrarTipoVistaAsignarCarrera(d){
	if(d=="1"){
		document.getElementById("tbVistarAsignarCarrera1").style.display=""
		document.getElementById("tbVistarAsignarCarrera2").style.display="none"
		document.getElementById("DivVistaAsignarCarrera1").style.display=""
		document.getElementById("DivVistaAsignarCarrera2").style.display="none"
		document.getElementById("btnVistaAsignarCarrera1").style=""
		document.getElementById("btnVistaAsignarCarrera2").style="background-color:#ccc"
		LimpiarCamposBusquedaAsignarCarrera()
	}
	if(d=="2"){
		document.getElementById("tbVistarAsignarCarrera1").style.display="none"
		document.getElementById("tbVistarAsignarCarrera2").style.display=""
		document.getElementById("DivVistaAsignarCarrera1").style.display="none"
		document.getElementById("DivVistaAsignarCarrera2").style.display=""
		document.getElementById("btnVistaAsignarCarrera1").style="background-color:#ccc"
		document.getElementById("btnVistaAsignarCarrera2").style=""
		LimpiarCamposBusquedaAsignarCarrera()
		BuscarFilialAsignarCarrera();
	}
}
function NuevoAsignarCarreraFrm(){
	// if(controlacceso("INSERTARASIGNARCARRERA","accion")==false){ return;		}
		document.getElementById("divAbmAsignarCarrera1").style.display="none"
		document.getElementById("divAbmAsignarCarrera2").style.display=""
		LimpiarCamposAsignarCarrera()
}
function EditarAsignarCarreraFrm(){
	// if(controlacceso("EDITARASIGNARCARRERA","accion")==false){ return;		}
	if(idAbmAsignarCarrera==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarCarrera1").style.display="none"
		document.getElementById("divAbmAsignarCarrera2").style.display=""
		
}
function BuscarAsignarCarreraFrm(){
	// if(controlacceso("BUSCARASIGNARCARRERA","accion")==false){ return;		}
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
	// document.getElementById("inptBuscarAsignarCarrera4").value=""
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
function ObtenerdatosAbmAsignarCarreraCascada(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	
	idAbmAsignarCarrera = $(datostr).children('span[id="td_id_1"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarCarreral').value = $(datostr).children('span[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarCarrera').value = $(datostr).children('span[id="td_datos_1"]').html();
	document.getElementById('inptNombreAsignarFacultad').value = $(datostr).children('span[id="td_datos_2"]').html();
	document.getElementById('inptNombreAsignarFilial').value = $(datostr).children('span[id="td_datos_3"]').html();
	document.getElementById('inptEstadoAsignarCarrera').value = $(datostr).children('span[id="td_datos_4"]').html();
	document.getElementById('inptNombreAsignarFilia2').value = $(datostr).children('span[id="td_datos_5"]').html();
	document.getElementById('inptNroCajaAsignaCarrera').value = $(datostr).children('span[id="td_datos_6"]').html();
    EditarAsignarCarreraFrm()



}
function EliminarRegitroAsignarCarrera(){
	// if(controlacceso("ELIMINARASIGNARCARRERA","accion")==false){ return;		}
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
		// if(controlacceso("EDITARASIGNARCARRERA","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARASIGNARCARRERA","accion")==false){ return;		}
	}
	AbmAsignarCarrera(inptNroCajaAsignaCarrera,idFkCarrera,idFkFacultad,idFkFilial,inptEstadoAsignarCarrera,idAbmAsignarCarrera, accion)
}
function AbmAsignarCarrera(NroCaja,Cod_listadecarrerasFK,cod_listafacultadFk,cod_filialOringFK,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("cod_filialOringFK", cod_filialOringFK)
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
// if(controlacceso("BUSCARASIGNARCARRERA","accion")==false){ return;		}
	
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
function BuscarFilialAsignarCarrera() {
// if(controlacceso("BUSCARASIGNARCARRERA","accion")==false){ return;		}
	
	var estado = "Activo"



	document.getElementById("divBuscadorAsignarCarreraCascada").innerHTML = imgCargandoA
  
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"funt": "cascadaasignarcarrera"
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
			document.getElementById("divBuscadorAsignarCarreraCascada").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarCarreraCascada").innerHTML = ''
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarCarreraCascada").innerHTML = datos_buscados					
             
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
function inptSeleccCarpetasAsignarCarrera(d){
	if(d=="1"){
	document.getElementById('inptSeleccCarpetasAsignarCarrera1').checked=true
	document.getElementById('inptSeleccCarpetasAsignarCarrera2').checked=false	
	}else{
	document.getElementById('inptSeleccCarpetasAsignarCarrera1').checked=false
	document.getElementById('inptSeleccCarpetasAsignarCarrera2').checked=true
	}
}
function vercerrarcascadaasignarcarrerafilialdestino(datos){
		var idFilial=datos.id
	if(document.getElementById("div_asignar_carrera_filial_"+idFilial).style.display==""){
		document.getElementById("div_asignar_carrera_filial_"+idFilial).style.display="none";
		 $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarCarrera1').checked==true){
$("div[name=div_asignar_carrera_filial_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
		
	$("img[name=iconocarpetafilialorigencarrera]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_asignar_carrera_filial_"+idFilial).style.display="";
	
	// vercerrarasignarcarreralistacarrera()
	BuscarCarrerasAsignarCascasda1(idFilial)
}
function BuscarCarrerasAsignarCascasda1(codfilial) {
	
	var estado = "Activo"

	document.getElementById("div_asignar_carrera_filial_"+codfilial).innerHTML = imgCargandoA
  
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"funt": "cascadafilialdestino"
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
			document.getElementById("div_asignar_carrera_filial_"+codfilial).innerHTML  = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_asignar_carrera_filial_"+codfilial).innerHTML = ''
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("div_asignar_carrera_filial_"+codfilial).innerHTML = datos_buscados					
             
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
function vercerrarasignarcarreralistacarrera(datos){
	
		// var codFilialOrigen=$(datos).children('span[id="span1"]').html();
		// var codFilialDestino=$(datos).children('span[id="span2"]').html();
	// if(document.getElementById("div_asignar_carrera_"+codFilialOrigen+codFilialDestino).style.display==""){
		// document.getElementById("div_asignar_carrera_"+codFilialOrigen+codFilialDestino).style.display="none";
		 // $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		// return
	// }
	// if(document.getElementById('inptSeleccCarpetasAsignarCarrera1').checked==true){
// $("div[name=div_asignar_carrera_1]").each(function (i, elemento) {
		// elemento.style.display = 'none'

	// });	
		
	// $("img[name=iconocarpetaasignarcarreracarrera]").each(function (i, elemento) {
		// $(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	// });	
	// }
   // $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	// document.getElementById("div_asignar_carrera_"+codFilialOrigen+codFilialDestino).style.display="";
	
	
	var idFilial=datos.id
	if(document.getElementById("div_asignar_carrera_filial_"+idFilial).style.display==""){
		document.getElementById("div_asignar_carrera_filial_"+idFilial).style.display="none";
		 $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarCarrera1').checked==true){
$("div[name=div_asignar_carrera_filial_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
		
	$("img[name=iconocarpetafilialorigencarrera]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_asignar_carrera_filial_"+idFilial).style.display="";
	
	
	BuscarCarrerasAsignarCascasda2(idFilial)
}
function BuscarCarrerasAsignarCascasda2(idFilial) {
	
	var estado = "Activo"

	document.getElementById("div_asignar_carrera_filial_"+idFilial).innerHTML = imgCargandoA
  
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"idFilial": idFilial,
		"funt": "cascadaCarrera"
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
			document.getElementById("div_asignar_carrera_filial_"+idFilial).innerHTML  = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_asignar_carrera_filial_"+idFilial).innerHTML = ''
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("div_asignar_carrera_filial_"+idFilial).innerHTML = datos_buscados					
             
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
 
function CargarCarrerasEnVistaMalla(){
		
		var codFilial="";
$("input[id=inptVistaAsignarMalla7]").each(function (i, Elemento) {
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
	$("input[id=inptVistaAsignarMalla2]").attr("list","ListCarreras")
	return
	}else{
	$("input[id=inptVistaAsignarMalla2]").attr("list","ListCarrerasVistaMalla")
	}
	
	document.getElementById("ListCarrerasVistaMalla").innerHTML=""
	document.getElementById("inptVistaAsignarMalla2").value=""
	
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
			document.getElementById("ListCarrerasVistaMalla").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasVistaMalla").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasVistaMalla").innerHTML = datos_buscados1
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
ASIGNAR DOCENTES
*/
var idAbmListaAsignarDocentes="";
var idFkMallaAsignarDocentes="";
var idFkFilialAsignarDocentes="";
var ControlVistaListaAsignarDocentes=""
function verCerrarFrmAsignarDocentes(d){
	document.getElementById("divMinimizadoAsignarDocente").style.display="none";
	// document.getElementById("divMinimizadoAsignarDocente2").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERASIGNARDOCENTES","accion")==false){  return;		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divAbmAsignarDocentes").style.display="";
	
	}else{
	document.getElementById("divAbmAsignarDocentes").style.display="none";
	 LimpiarCamposAsignarDocentes()
	 LimpiarCamposBusquedaAsignarDocentes()
	}
}
function MinimizarVentanadoAsignarDocentess(){
	document.getElementById("divAbmAsignarDocentes").style.display="none";
	// document.getElementById("divMinimizadoAsignarDocente2").style.display="";
	document.getElementById("divMinimizadoAsignarDocente").style.display="";
}
function NuevoAsignarDocentesFrm(){
	// if(controlacceso("INSERTARASIGNARDOCENTES","accion")==false){ return;		}
		document.getElementById("divAbmAsignarDocentes1").style.display="none"
		document.getElementById("divAbmAsignarDocentes2").style.display=""
		LimpiarCamposAsignarDocentes()
}
function EditarAsignarDocentesFrm(){
	// if(controlacceso("EDITARASIGNARDOCENTES","accion")==false){ return;		}
	if(idAbmAsignarDocentes==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarDocentes1").style.display="none"
		document.getElementById("divAbmAsignarDocentes2").style.display=""
		
}
function BuscarAsignarDocentesFrm(){
	// if(controlacceso("BUSCARASIGNARDOCENTES","accion")==false){ return;		}
		document.getElementById("divAbmAsignarDocentes1").style.display=""
		document.getElementById("divAbmAsignarDocentes2").style.display="none"
}
function LimpiarCamposAsignarDocentes(){
	document.getElementById("inptNombreAsignarDocentes").value=""
	document.getElementById("inptCodMallaAsignarDocente").value=""
	document.getElementById("inptFilialAsignarDocente").value=""
	document.getElementById("inptCarreraAsignarDocente").value=""
	document.getElementById("inptCatedraAsignarDocente").value=""
	document.getElementById("inptAnhoAsignarDocente").value=""
	document.getElementById("inptCursoAsignarDocente").value=""
	document.getElementById("inptSemestreAsignarDocente").value=""
	document.getElementById("inptDiasAsignarDocente").value=""
	document.getElementById("inptHinicioAsignarDocente").value=""
	document.getElementById("inptHfinAsignarDocente").value="" 
	document.getElementById("inptEstadoAsignarDocentes").value="Activo"
	document.getElementById("inptRegistroSeleccionadoAsignarDocentes").value=""
	idAbmAsignarDocentes=""
	idFkMallaAsignarDocentes=""
	idFkFilialAsignarDocentes=""
	document.getElementById("btnAbmAsignarDocentes").value="Guardar Datos"
	document.getElementById("btnEditarDatosAsignarDocentes").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosAsignarDocentes").style.backgroundColor="#ffcece"
}
function LimpiarCamposBusquedaAsignarDocentes(){
	document.getElementById("inptBuscarAsignarDocentes1").value=""
	document.getElementById("inptBuscarAsignarDocentes2").value=""
	document.getElementById("inptBuscarAsignarDocentes3").value=""
	document.getElementById("inptBuscarAsignarDocentes4").value=""
	document.getElementById("inptBuscarAsignarDocentes5").value=""
	document.getElementById("inptBuscarAsignarDocentes6").value=""
	document.getElementById("inptBuscarAsignarDocentes7").value=""
	document.getElementById("divBuscadorAsignarDocentes").innerHTML=""
	document.getElementById("lblNroRegistroAsignarDocentes").innerHTML=""
	
}
function ObtenerdatosAbmAsignarDocentes(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarDocentes = $(datostr).children('td[id="td_id_1"]').html();
	idFkMallaAsignarDocentes = $(datostr).children('td[id="td_id_2"]').html();
	idFkFilialAsignarDocentes = $(datostr).children('td[id="td_id_3"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarDocentes').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptNombreAsignarDocentes').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptFilialAsignarDocente').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptCodMallaAsignarDocente').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptCarreraAsignarDocente').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptCatedraAsignarDocente').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptAnhoAsignarDocente').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptCursoAsignarDocente').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptSemestreAsignarDocente').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptEstadoAsignarDocentes').value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptTurnoAsignarDocente').value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptSeccionAsignarDocente').value = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptDiasAsignarDocente').value = $(datostr).children('td[id="td_datos_14"]').html();
	document.getElementById('inptHinicioAsignarDocente').value = $(datostr).children('td[id="td_datos_15"]').html();
	document.getElementById('inptHfinAsignarDocente').value = $(datostr).children('td[id="td_datos_16"]').html();
     document.getElementById("btnAbmAsignarDocentes").value="Editar Datos"
     document.getElementById("btnEditarDatosAsignarDocentes").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosAsignarDocentes").style.backgroundColor="red"



}
function EliminarRegitroAsignarDocentes(){
	// if(controlacceso("ELIMINARASIGNARDOCENTES","accion")==false){ return;		}
	if(idAbmAsignarDocentes==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoAsignarDocentes").value="Inactivo";
	VerificarDatosAsignarDocentes()
	}

}
function VerificarDatosAsignarDocentes(){
	
	var inptEstadoAsignarDocentes=document.getElementById("inptEstadoAsignarDocentes").value
	var inptTurnoAsignarDocente=document.getElementById("inptTurnoAsignarDocente").value
	var inptSeccionAsignarDocente=document.getElementById("inptSeccionAsignarDocente").value
	var inptAnhoAsignarDocente=document.getElementById("inptAnhoAsignarDocente").value
	var inptCursoAsignarDocente=document.getElementById("inptCursoAsignarDocente").value
	var inptSemestreAsignarDocente=document.getElementById("inptSemestreAsignarDocente").value
	var inptDiasAsignarDocente=document.getElementById("inptDiasAsignarDocente").value
	var inptHinicioAsignarDocente=document.getElementById("inptHinicioAsignarDocente").value
	var inptHfinAsignarDocente=document.getElementById("inptHfinAsignarDocente").value
 
	var codFkDocente="";
$("input[id=inptNombreAsignarDocentes]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codFkDocente=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var codFkFilial=idFkFilialAsignarDocentes;


	if(codFkFilial==""){
		alertmensaje("Falto seleccionar una filial")
		return
	}
	
	if(codFkDocente==""){
		alertmensaje("Falto seleccionar un docente")
		return
	}
	
	if(idFkMallaAsignarDocentes==""){
		alertmensaje("Falto seleccionar un malla")
		return
	}
	if(inptTurnoAsignarDocente==""){
		alertmensaje("Falto seleccionar el turno")
		return
	}
	if(inptSeccionAsignarDocente==""){
		alertmensaje("Falto seleccionar la sección")
		return
	}
	// if(inptDiasAsignarDocente==""){
		// alertmensaje("Falto seleccionar el dia")
		// return
	// }
	// if(inptHinicioAsignarDocente==""){
		// alertmensaje("Falto seleccionar la hora de inicio")
		// return
	// }
   // if(inptHfinAsignarDocente==""){
		// alertmensaje("Falto seleccionar la hora fin")
		// return
	// }
	
	var accion = "";
	if (idAbmAsignarDocentes != "") {
		accion = "editar";
		// if(controlacceso("INSERTARASIGNARDOCENTES","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("EDITARASIGNARDOCENTES","accion")==false){ return;		}
	}
	AbmAsignarDocentes(inptDiasAsignarDocente,inptHinicioAsignarDocente,inptHfinAsignarDocente,inptAnhoAsignarDocente,inptCursoAsignarDocente,inptSemestreAsignarDocente,inptTurnoAsignarDocente,inptSeccionAsignarDocente,codFkFilial,codFkDocente,idFkMallaAsignarDocentes,inptEstadoAsignarDocentes, idAbmAsignarDocentes ,accion)
}
function AbmAsignarDocentes(dia,hinicio,hfin,anho,curso,semestre,turno,seccion,cod_filial,idlistadoProfesores,idmallacurricular,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("idmallacurricular", idmallacurricular)
	datos.append("idlistadoProfesores", idlistadoProfesores)
	datos.append("cod_filial", cod_filial)
	datos.append("estado", estado)
	datos.append("turno", turno)
	datos.append("seccion", seccion)
	datos.append("anho", anho)
	datos.append("curso", curso)
	datos.append("semestre", semestre)
	datos.append("dias", dia)
	datos.append("hinicio", hinicio)
	datos.append("hfin", hfin)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarDocentes.php",
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
		
                   LimpiarCamposAsignarDocentes()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmAsignarDocentes()
					BuscarAsignarDocentesSelect()
					

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoAsignarDocentes(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoAsignarDocentes1').checked=true
	document.getElementById('inptSeleccEstadoAsignarDocentes2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoAsignarDocentes1').checked=false
	document.getElementById('inptSeleccEstadoAsignarDocentes2').checked=true
	}
}
var controlordenasignardocente="1"
function ordenasignardocentes(d){
	document.getElementById('tdOrdAsignarDocentes1').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes2').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes3').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes4').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes5').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes6').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes7').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes8').className="td_registro_orden1"
		document.getElementById('tdOrdAsignarDocentes9').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdAsignarDocentes1').className="td_registro_orden"
		controlordenasignardocente="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdAsignarDocentes2').className="td_registro_orden"
		controlordenasignardocente="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdAsignarDocentes3').className="td_registro_orden"
		controlordenasignardocente="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdAsignarDocentes4').className="td_registro_orden"
		controlordenasignardocente="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdAsignarDocentes5').className="td_registro_orden"
		controlordenasignardocente="5"
	}
	if(d=="6"){
		document.getElementById('tdOrdAsignarDocentes6').className="td_registro_orden"
		controlordenasignardocente="6"
	}
	if(d=="7"){
		document.getElementById('tdOrdAsignarDocentes7').className="td_registro_orden"
		controlordenasignardocente="7"
	}
	if(d=="8"){
		document.getElementById('tdOrdAsignarDocentes8').className="td_registro_orden"
		controlordenasignardocente="8"
	}
	if(d=="9"){
		document.getElementById('tdOrdAsignarDocentes9').className="td_registro_orden"
		controlordenasignardocente="9"
	}
	
	BuscarAbmAsignarDocentes()
}
function BuscarAbmAsignarDocentes() {
// if(controlacceso("BUSCARASIGNARDOCENTES","accion")==false){  return;		}
	var filial = ""
	$("input[id=inptBuscarAsignarDocentes1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         filial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
		var carrera = ""
	$("input[id=inptBuscarAsignarDocentes2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         carrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
		var catedra = ""
	$("input[id=inptBuscarAsignarDocentes3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         catedra=$(match).attr("id")
       } else {
           // value is not in list
       }
});
		
		var docente = document.getElementById("inptBuscarAsignarDocentes4").value
		var documento = document.getElementById("inptBuscarAsignarDocentes10").value

	var anho = document.getElementById('inptBuscarAsignarDocentes5').value
	var curso = document.getElementById('inptBuscarAsignarDocentes6').value
	var semestre = document.getElementById('inptBuscarAsignarDocentes7').value
	var turno = document.getElementById('inptBuscarAsignarDocentes8').value
	var seccion = document.getElementById('inptBuscarAsignarDocentes9').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoAsignarDocentes1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorAsignarDocentes").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarDocentes").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"filial": filial,
		"carrera": carrera,
		"catedra": catedra,
		"docente": docente,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"estado": estado,
		"turno": turno,
		"seccion": seccion,
		"documento": documento,
		"ordenby": controlordenasignardocente,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarDocentes.php",
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
			document.getElementById("divBuscadorAsignarDocentes").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarDocentes").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarDocentes").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarDocentes").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarDocentes").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroAsignarDocentes").innerHTML="Se encontraron "+datos[3]+" registro(s)";
                   document.getElementById("inptRegistroAsignarDocentes").value=datos[3];
                   document.getElementById("inptRegistroFilialesAsignarDocentes").value=datos[4];
                   document.getElementById("inptRegistroDocentesAsignarDocentes").value=datos[5];
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
function BuscarAsignarDocentesSelect() {
	return false;
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
        url: "/GoodTechnologyEPNSA/php/ABMAsignarDocentes.php",
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

/* Crear Listado Notas por Alumno */
function verCerrarCalifAlumnoVista(mostrar) {
	
	
	document.getElementById("divCalifAlumnoVista").style.display = "none";
	limpiarCamposNostasAlumnosVista();
	if (mostrar) {
		if(verificarAlumnoCalificaciones!=""){
			document.getElementById("divCalifAlumnoVista").style.display = "";
		buscarNotasAlumnoVista();
		}else{
			alertmensaje("LO SENTIMOS. FALTO SELECCIONAR UN REGISTRO.")
		}
	}
	verificarAlumnoCalificaciones="";
}

function limpiarCamposNostasAlumnosVista() {
	document.getElementById("inptBuscarCalifAlumno1").value = "";
	document.getElementById("inptBuscarCalifAlumno2").value = "";
	document.getElementById("inptBuscarCalifAlumno3").value = "";
	document.getElementById("inptBuscarCalifAlumno4").value = "";
	document.getElementById("inptBuscarCalifAlumno5").value = "";
	document.getElementById("inptBuscarCalifAlumno7").value = "";
	document.getElementById("divBuscadorReportCargarNotasAlumno").innerHTML="";
}



function buscarNotasAlumnoVista() {
	const materia= document.getElementById("inptBuscarCalifAlumno1").value;
	const anho= document.getElementById("inptBuscarCalifAlumno2").value;
	const semestre=document.getElementById("inptBuscarCalifAlumno3").value;
	const curso= document.getElementById("inptBuscarCalifAlumno4").value;
	const seccion= document.getElementById("inptBuscarCalifAlumno5").value;
	const docente= document.getElementById("inptBuscarCalifAlumno7").value;

 
	obtener_datos_user();
	let datos= new FormData();
	datos.append("useru", userid);
	datos.append("passu", passuser);
	datos.append("navegador", navegador);
	datos.append("idAlumno", idAbmAbmAlumnos);
	datos.append("materia", materia);
	datos.append("docente", docente);
	datos.append("anho", anho_CarreraAlumno_Calificacion);
	datos.append("semestre", semestre_CarreraAlumno_Calificacion);
	datos.append("curso", curso_CarreraAlumno_Calificacion);
	datos.append("seccion", seccion);
	datos.append("idcursosalumno", cod_cursoAlumno_Calificacion);
	datos.append("funt", "obtenerNotasAlumno");
	verCerrarEfectoCargando("1");

	var OpAjax = $.ajax({
		data: datos,
		url: "../php/ABMCalificaciones.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		error: function(jqXHR, textStatus, errorThrown) {
			console.error("Error: ", errorThrown);
			verCerrarEfectoCargando("");
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			return false;
		},
		success: function (responseText) {
			verCerrarEfectoCargando("")
			Respuesta = responseText;
			console.log(Respuesta);
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportCargarNotasAlumno").innerHTML = datos_buscados;
					document.getElementById("inptRegistroCargarNotasAlumno").value= datos[3];
				}
			} catch (error) {
				console.error(error);
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR");
				var titulo="Error: "+error+" \r\n Consola: "+responseText;
				GuardarArchivosLog(titulo);
			}
		}
	});
}

/* Crear Listado para notas por alumno */
function vercerrarcrearlistaparanotasporalumnos(mostrar) {
	document.getElementById("divCrearListadoNotasAlumno").style.display = 'none'
	document.getElementById("divAbmAbmAlumnos").style.display="none";
	// document.getElementById("divMinimizadoCrearListadoParaNotas2").style.display = 'none'
	document.getElementById("divMinimizadoCrearListadoParaNotasAlumnos1").style.display = 'none'
	document.getElementById("divSegundoPlano").style.display = "none" 
	verificarAlumnoCalificaciones=""
	if (mostrar) {
		if (controlacceso("VERCARGARCALIFALUMNO", "accion") == false) { return; }
		document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = ""
		document.getElementById("divAbmAbmAlumnos").style.display="";
		document.getElementById("divCrearListadoNotasAlumno").style.display = '';
	}
}

function minimizarVentanaCrearListadoNotaAlumno() {
	document.getElementById("divCrearListadoNotasAlumno").style.display = 'none'
	document.getElementById("divAbmAbmAlumnos").style.display="none";
	document.getElementById("divSegundoPlano").style.display = "none"
	// document.getElementById("divMinimizadoCrearListadoParaNotas2").style.display = ''
	document.getElementById("divMinimizadoCrearListadoParaNotasAlumnos1").style.display = ''
}

function checkestadoListadoNotasAlumnos(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoListadoNotasAlumnos1').checked=true
	document.getElementById('inptSeleccEstadoListadoNotasAlumnos2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoListadoNotasAlumnos1').checked=false
	document.getElementById('inptSeleccEstadoListadoNotasAlumnos2').checked=true
	}
}


function ordenAlumnosListadoNotas(d){
	document.getElementById('tdOrdListNotaAlumno1').className="td_registro_orden1"
		document.getElementById('tdOrdListNotaAlumno2').className="td_registro_orden1"
		document.getElementById('tdOrdListNotaAlumno3').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdListNotaAlumno1').className="td_registro_orden"
		controlordenAlumnoabm="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdListNotaAlumno2').className="td_registro_orden"
		controlordenAlumnoabm="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdListNotaAlumno3').className="td_registro_orden"
		controlordenAlumnoabm="3"
	}
	
	BuscarListadoNotasAlumnos()
}
function BuscarListadoNotasAlumnos() {
// if(controlacceso("BUSCARALUMNOS","accion")==false){ return;		}
	var documento = document.getElementById('inptBuscarListadoNotasAlumnos1').value
	var nombre = document.getElementById('inptBuscarListadoNotasAlumnos4').value
	var apellido = document.getElementById('inptBuscarListadoNotasAlumnos5').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoListadoNotasAlumnos1').checked==true){
	estado = "Activo"
	}else{
	estado = "Inactivo"
	}

	document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = imgCargandoA
    document.getElementById("inptRegistroSeleccionadoListadoNotasAlumno").innerHTML=imgCargandoB;
    document.getElementById("inptRegistroTotalListadoNotaAlumno").value="...";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"documento": documento,
		"apellido": apellido,
		"nombre": nombre,
		"estado": estado,
		"codFilialFk": '',
		"codCarreraFk": '',
		"ordenby": controlordenAlumnoabm,
		"funt": "buscar"
	};
	console.log(datos)
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
			document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = ''
			document.getElementById("inptRegistroSeleccionadoListadoNotasAlumno").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = ''
			document.getElementById("inptRegistroSeleccionadoListadoNotasAlumno").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
	            Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {			
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = datos_buscados
                   document.getElementById("inptRegistroTotalListadoNotaAlumno").value=datos[4];
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
CREAR LISTADO PARA NOTAS
*/
function vercerrarcrearlistaparanotas(d){
	
	document.getElementById("divCrearListadoNotasAlumno").style.display = 'none'
	// document.getElementById("divMinimizadoCrearListadoParaNotas2").style.display = 'none'
	document.getElementById("divMinimizadoCrearListadoParaNotasAlumnos1").style.display = 'none'
	 document.getElementById("divSegundoPlano").style.display="none"	
	if (d == "1") {
		// if(controlacceso("VERCARGARCALIF","accion")==false){	  return;		}
		document.getElementById("divCrearListadoNotasAlumno").style.display = ''
	}
	
}
function MinimizarVentanaCrearLitadoNota(d){
	document.getElementById("divCrearListadoNotasAlumno").style.display = 'none'
	// document.getElementById("divMinimizadoCrearListadoParaNotas2").style.display = ''
	document.getElementById("divMinimizadoCrearListadoParaNotasAlumnos1").style.display = ''
}

var controlordencrearlistadonotas = "1"
function ordenreportCrearListadoNotas(d) {
	document.getElementById('tdOrdReportCrearListadoNotas1').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas2').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas3').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas4').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas5').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas6').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas7').className = "td_registro_orden1"
	document.getElementById('tdOrdReportCrearListadoNotas8').className = "td_registro_orden1"

	if (d == "1") {
		document.getElementById('tdOrdReportCrearListadoNotas1').className = "td_registro_orden"
		controlordencrearlistadonotas = "1"
	}
	if (d == "2") {
		document.getElementById('tdOrdReportCrearListadoNotas2').className = "td_registro_orden"
		controlordencrearlistadonotas = "2"
	}
	if (d == "3") {
		document.getElementById('tdOrdReportCrearListadoNotas3').className = "td_registro_orden"
		controlordencrearlistadonotas = "3"
	}
	if (d == "4") {
		document.getElementById('tdOrdReportCrearListadoNotas4').className = "td_registro_orden"
		controlordencrearlistadonotas = "4"
	}
	if (d == "5") {
		document.getElementById('tdOrdReportCrearListadoNotas5').className = "td_registro_orden"
		controlordencrearlistadonotas = "5"
	}
	if (d == "6") {
		document.getElementById('tdOrdReportCrearListadoNotas6').className = "td_registro_orden"
		controlordencrearlistadonotas = "6"
	}
	if (d == "7") {
		document.getElementById('tdOrdReportCrearListadoNotas7').className = "td_registro_orden"
		controlordencrearlistadonotas = "7"
	}
	if (d == "8") {
		document.getElementById('tdOrdReportCrearListadoNotas8').className = "td_registro_orden"
		controlordencrearlistadonotas = "7"
	}

	BuscarReportCrearListadoNotas()
}
function BuscarReportCrearListadoNotas() {
	// if(controlacceso("BUSCARALUMNOSCALIFICACION","accion")==false){  return;		}
	var filial = ""
	$("input[id=inptReporCrearListadoNotas1]").each(function (i, Elemento) {
		var $input = $(this),
			val = $input.val();

		list = $input.attr('list'),
			match = $('#' + list + ' option').filter(function () {
				return ($(this).val() === val);
			});

		if (match.length > 0) {
			filial = $(match).attr("id")
		} else {
			// value is not in list
		}
	});

	var carrera = ""
	$("input[id=inptReporCrearListadoNotas2]").each(function (i, Elemento) {
		var $input = $(this),
			val = $input.val();

		list = $input.attr('list'),
			match = $('#' + list + ' option').filter(function () {
				return ($(this).val() === val);
			});

		if (match.length > 0) {
			carrera = $(match).attr("id")
		} else {
			// value is not in list
		}
	});

	var anho = document.getElementById('inptReporCrearListadoNotas3').value
	var curso = document.getElementById('inptReporCrearListadoNotas4').value
	var semestre = document.getElementById('inptReporCrearListadoNotas5').value
	var turno = document.getElementById('inptReporCrearListadoNotas6').value
	var seccion = document.getElementById('inptReporCrearListadoNotas7').value
	var documento = document.getElementById('inptReporCrearListadoNotas9').value
	var nombreapellido = document.getElementById('inptReporCrearListadoNotas10').value

	document.getElementById("divBuscadorReportCrearListadoNotas").innerHTML = imgCargandoA
	document.getElementById("inptRegistroCrearListadoNotas").value = "";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"filial": filial,
		"carrera": carrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"turno": turno,
		"seccion": seccion,
		"documento": documento,
		"nombreapellido": nombreapellido,
		"ordenby": controlordencrearlistadonotas,
		"funt": "buscarlista"
	};
	$.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMAsignarDocentes.php",
		type: "post",
		xhr: function () {
			var xhr = new window.XMLHttpRequest();
			//Uload progress
			xhr.upload.addEventListener("progress", function (evt) {
				var kb = ((evt.loaded * 1) / 1000).toFixed(1)

				if (kb == "0.0") {
					kb = 0.1;
				}
				cargarConectividad("enviado", kb, "0")
			}, false);
			//Download progress
			xhr.addEventListener("progress", function (evt) {
				var kb = ((evt.loaded * 1) / 1000).toFixed(1)
				if (kb == "0.0") {
					kb = 0.1;
				}
				cargarConectividad("recibido", "0", kb)
			}, false);
			return xhr;
		},
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
			manejadordeerroresjquery(jqXHR.status, textstatus, "abmventana")
			document.getElementById("divBuscadorReportCrearListadoNotas").innerHTML = ''
			document.getElementById("inptRegistroCrearListadoNotas").value = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportCrearListadoNotas").innerHTML = ''
			document.getElementById("inptRegistroCrearListadoNotas").value = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta = respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportCrearListadoNotas").innerHTML = datos_buscados
					document.getElementById("inptRegistroCrearListadoNotas").value = datos[3];
					cargarAdminTareas()
					if (datos_buscados == "") {
						alertmensaje("NO ENCONTRARON REGISTROS COINCIDENTES")
					}
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo = "Error: " + error + " \r\n Consola: " + responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

function ordenreportCrearListadoNotas(d){
	document.getElementById('tdOrdReportCrearListadoNotasAlumnos1').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos2').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos3').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos4').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos5').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos6').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos7').className="td_registro_orden1"
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos8').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos1').className="td_registro_orden"
		controlordencrearlistadonotas="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos2').className="td_registro_orden"
		controlordencrearlistadonotas="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos3').className="td_registro_orden"
		controlordencrearlistadonotas="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos4').className="td_registro_orden"
		controlordencrearlistadonotas="4"
	}
	if(d=="5"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos5').className="td_registro_orden"
		controlordencrearlistadonotas="5"
	}
	if(d=="6"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos6').className="td_registro_orden"
		controlordencrearlistadonotas="6"
	}
	if(d=="7"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos7').className="td_registro_orden"
		controlordencrearlistadonotas="7"
	}
	if(d=="8"){
		document.getElementById('tdOrdReportCrearListadoNotasAlumnos8').className="td_registro_orden"
		controlordencrearlistadonotas="7"
	}
	
	BuscarReportCrearListadoNotasAlumnos()
}

function BuscarReportCrearListadoNotasAlumnos() {
// if(controlacceso("BUSCARALUMNOSCALIFICACION","accion")==false){  return;		}
	var filial = ""
	$("input[id=inptReporCrearListadoNotasAlumnos1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         filial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
		var carrera = ""
	$("input[id=inptReporCrearListadoNotasAlumnos2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         carrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	

	document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = imgCargandoA
    document.getElementById("inptRegistroTotalListadoNotaAlumno").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"filial": '',
		"carrera": '',
		"anho": '',
		"curso": '',
		"semestre": '',
		"turno": '',
		"seccion": '',
		"documento": documento,
		"nombreapellido": nombreapellido,
		"ordenby": controlordencrearlistadonotas,
		"funt": "buscarlista"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMAsignarDocentes.php",
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
			document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = ''
			document.getElementById("inptRegistroTotalListadoNotaAlumno").value = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = ''
			document.getElementById("inptRegistroTotalListadoNotaAlumno").value = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListadoNotasAlumnos").innerHTML = datos_buscados
                   document.getElementById("inptRegistroTotalListadoNotaAlumno").value=datos[3];
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
function crearlistadodenotas(datosbtn){
	
		// if(controlacceso("CREARLISTAALUMNOSCALIFICACION","accion")==false){ return;		}
	
	
	var idmalla=$(datosbtn).children('p[id="p_id_1"]').html();
	var seccion=$(datosbtn).children('p[id="p_id_2"]').html();
	var turno=$(datosbtn).children('p[id="p_id_3"]').html();
	var anho=$(datosbtn).children('p[id="p_id_4"]').html();
	var curso=$(datosbtn).children('p[id="p_id_5"]').html();
	var semestre=$(datosbtn).children('p[id="p_id_6"]').html();
	var cod_carrera=$(datosbtn).children('p[id="p_id_7"]').html();
	var cod_filial=$(datosbtn).children('p[id="p_id_8"]').html();
	var cod_azar=$(datosbtn).children('p[id="p_id_9"]').html();
	var iddocente_catedraFK=$(datosbtn).children('p[id="p_id_10"]').html();
	


	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
    datos.append("funt", "crearlista")
	datos.append("idmalla", idmalla)
	datos.append("seccion", seccion)
	datos.append("turno", turno)
	datos.append("anho", anho)
	datos.append("curso", curso)
	datos.append("semestre", semestre)
	datos.append("cod_carrera", cod_carrera)
	datos.append("cod_filial", cod_filial)
	datos.append("iddocente_catedraFK", iddocente_catedraFK)
	
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCalificaciones.php",
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
		
                  var nro = datos["2"];
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					//document.getElementById("nroalumnos_"+cod_azar).innerHTML=nro
					//$(datosbtn).remove()
					BuscarReportCrearListadoNotas()

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});

}
var iddocentecatedra="";
var calificacioncargarlista="";
var codfilialcalificacioncargarlista="";
var codmallacalificacioncargarlista="";
var codCarreracalificacioncargarlista="";
var CodNroActaCalificacioncargarlista="";
var cod_AlumnoCalificaciones="";
var Semestre_AlumnoCalificaciones="";
var curso_AlumnoCalificaciones="";
function VerVistaCargarCalif(datosbtn){
	
 
	iddocentecatedra=$(datosbtn).children('p[id="p_id_1"]').html();
	cod_AlumnoCalificaciones=$(datosbtn).children('p[id="p_id_21"]').html();
	curso_AlumnoCalificaciones=$(datosbtn).children('p[id="p_id_7"]').html();
	Semestre_AlumnoCalificaciones=$(datosbtn).children('p[id="p_id_8"]').html();
	var docente=$(datosbtn).children('p[id="p_id_2"]').html();
	var catedra=$(datosbtn).children('p[id="p_id_3"]').html();
	var turno=$(datosbtn).children('p[id="p_id_4"]').html();
	var seccion=$(datosbtn).children('p[id="p_id_5"]').html();
	var anho=$(datosbtn).children('p[id="p_id_6"]').html();
	var curso=$(datosbtn).children('p[id="p_id_7"]').html();
	var semestre=$(datosbtn).children('p[id="p_id_8"]').html();
	document.getElementById("inptNroActaCargarCalificaciones").value=$(datosbtn).children('p[id="p_id_14"]').html();
	document.getElementById("inptFechaActaCargarCalificaciones").value=$(datosbtn).children('p[id="p_id_16"]').html();
	document.getElementById("inptHoraActaCargarCalificaciones").value=$(datosbtn).children('p[id="p_id_15"]').html();
	codfilialcalificacioncargarlista=$(datosbtn).children('p[id="p_id_9"]').html();
	codmallacalificacioncargarlista=$(datosbtn).children('p[id="p_id_10"]').html();
	 calificacioncargarlista=$(datosbtn).children('p[id="p_id_11"]').html();
	 codCarreracalificacioncargarlista=$(datosbtn).children('p[id="p_id_20"]').html();
	 CodNroActaCalificacioncargarlista=$(datosbtn).children('p[id="p_id_13"]').html();	
	BuscarAlumnosCargarNotasVisra(iddocentecatedra,calificacioncargarlista,cod_AlumnoCalificaciones,curso_AlumnoCalificaciones,Semestre_AlumnoCalificaciones)
	document.getElementById("divCargarCalifVista").style.display=""
	document.getElementById("inptCargarNotasVista1").innerHTML=turno
	document.getElementById("inptCargarNotasVista2").innerHTML=seccion
	document.getElementById("inptCargarNotasVista3").innerHTML=curso
	document.getElementById("inptCargarNotasVista4").innerHTML=semestre
	document.getElementById("inptCargarNotasVista5").innerHTML=anho
	document.getElementById("inptCargarNotasVista6").innerHTML=calificacioncargarlista
	document.getElementById("lblTituloCargarNotasVista").innerHTML=docente+" - "+catedra
	document.getElementById("inptNroActaCargarCalificaciones").focus()
	if(CodNroActaCalificacioncargarlista!=""){
	document.getElementById("btnEditarAplicarNroFactura").value="Editar"
	document.getElementById("btnGuardarNotasActas").style.display="none";
	document.getElementById("btnImprimirNotasActas").style.display="none";
	}else{
	document.getElementById("btnEditarAplicarNroFactura").value="Guardar"
	document.getElementById("btnGuardarNotasActas").style.display="none";
	document.getElementById("btnImprimirNotasActas").style.display="none";
	}
	
}
function CerrarVistaCargarCalif(){

	document.getElementById("divCargarCalifVista").style.display="none"
		
}

function next_focus_calif_1(datos)
{
	 var codElemento=Number(datos)+1;
	 var texto=$("input[name=calif_focus_"+datos+"]").val() 
	 if(texto==""){
		 document.getElementById("tbCaificacion_"+datos).style.backgroundColor="#ffeb3b"
	 }else{
		  document.getElementById("tbCaificacion_"+datos).style.backgroundColor="#fff"
	 }
  
	 $("input[name=calif_focus_"+codElemento+"]").focus();
	 document.getElementById("tbCaificacion_"+codElemento).style.backgroundColor="#c6ff85"
}
function pos_next_focus_calif_1(datos)
{

	 var codElemento=Number(datos)-1;
	 $("input[name=calif_focus_"+codElemento+"]").focus();
}
function auto_completar_calif(datos)
{
	
  var texto=$("input[name=calif_focus_"+datos+"]").val()
  var codElemento=Number(datos)+1;
  var nros=texto.length
  if(nros>=1){
	 $("input[name=calif_focus_"+codElemento+"]").focus();
	  document.getElementById("tbCaificacion_"+codElemento).style.backgroundColor="#c6ff85"
	 if(texto==""){
		 document.getElementById("tbCaificacion_"+datos).style.backgroundColor="#ffeb3b"
	 }else{
		  document.getElementById("tbCaificacion_"+datos).style.backgroundColor="#fff"
	 }
  }  
}

function obtener_datos_cargar_calif(datos)
{
 
  datos.style.backgroundColor="#c6ff85"
}
var elementocalifprimero="";
function buscadorofflineCalificacionCi(datos){
	texto=datos.value
	texto=texto.toLowerCase()
	elementocalifprimero="";
	if(texto!=""){
		
		$("table[name=trCalificacione]").each(function (i, elemento) {
	 elemento.style.display='none'
	});	
	
	$("td[name=tdBuscadorCi]").each(function (i, elemento) {
		var control=elemento.innerHTML.toLowerCase()		
		 control=control.indexOf(texto)		
	 if(control>=0){
		var codControl=elemento.id		
		if(elementocalifprimero==""){
			elementocalifprimero=codControl
		}
		 $("table[id=trCaificacion_"+codControl+"]").each(function (i, elemento) {
	 elemento.style.display=''
	});	
	 }
    
	});
	}else{
		
		$("table[name=trCalificacione]").each(function (i, elemento) {
	 elemento.style.display=''
	});	
	}
	
}

function buscadorofflineCalificacionNombre(datos){
	texto=datos.value
	texto=texto.toLowerCase()
	elementocalifprimero="";	
	if(texto!=""){
		
		$("table[name=trCalificacione]").each(function (i, elemento) {
	 elemento.style.display='none'
	});	
	
	$("td[name=tdBuscadorNombre]").each(function (i, elemento) {
		var control=elemento.innerHTML.toLowerCase()		
		 control=control.indexOf(texto)		
	 if(control>=0){
		var codControl=elemento.id	
if(elementocalifprimero==""){
			elementocalifprimero=codControl
		}		
		 $("table[id=trCaificacion_"+codControl+"]").each(function (i, elemento) {
	 elemento.style.display=''
	});	
	 }
    
	});
	}else{	
		
		$("table[name=trCalificacione]").each(function (i, elemento) {
	 elemento.style.display=''
	});	
	}
	
}

function next_focus_cargar_calificacion(){
	
		 $("input[id=inptBuscarCalif3]").focus();
	
}
function cargararcalificacion(datos){
	$("input[name=calif_focus_"+elementocalifprimero+"]").attr("value",datos.value);
	document.getElementById("inptBuscarCalif1").value=""
	document.getElementById("inptBuscarCalif2").value=""
	document.getElementById("inptBuscarCalif3").value=""
	document.getElementById("inptBuscarCalif1").focus()
	$("table[name=trCalificacione]").each(function (i, elemento) {
	 elemento.style.display=''
	});	
	elementocalifprimero="";
}




function BuscarAlumnosCargarNotasVisra(iddocente_catedra,calificacion,cod_AlumnoCalificaciones,curso,semestre) {

	
	
	document.getElementById("divBuscadorReportCargarNotasVista").innerHTML = imgCargandoA
    document.getElementById("inptRegistroCargarNotasVista").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"iddocente_catedra": iddocente_catedra,
		"calificacion": calificacion,
		"cod_AlumnoCalificaciones": cod_AlumnoCalificaciones,
		"semestre": semestre,
		"curso": curso,
		"funt": "buscarvistacarganotas"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCalificaciones.php",
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
			document.getElementById("divBuscadorReportCargarNotasVista").innerHTML = ''
			document.getElementById("inptRegistroCargarNotasVista").value = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportCargarNotasVista").innerHTML = ''
			document.getElementById("inptRegistroCargarNotasVista").value = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportCargarNotasVista").innerHTML = datos_buscados					
                   document.getElementById("inptRegistroCargarNotasVista").value=datos[3];
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


function imprimiractas(){
	buscaractasprint(iddocentecatedra,calificacioncargarlista)
}

function buscaractasprint(iddocente_catedra,calificacion) {
	
	document.getElementById("divTableActas").innerHTML = imgCargandoA
 
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"iddocente_catedra": iddocente_catedra,
		"calificacion": calificacion,
		"funt": "buscarprintactas"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCalificaciones.php",
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
			document.getElementById("divTableActas").innerHTML = ''
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divTableActas").innerHTML = ''
			
			
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divTableActas").innerHTML = datos_buscados					
                  var documento= document.getElementById("divreportActas").innerHTML;
     localStorage.setItem("contrato", documento);
	 var URL= "/GoodTechnologyEPNSA/system/reportactas.html"
        window.open(URL, 'Imprimir', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,left = 0');
				}
				try {
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}


function Aplicar_Cambios_Nro_Fecha_Actas(){	
	var Nro=document.getElementById("inptNroActaCargarCalificaciones").value
	var fecha=document.getElementById("inptFechaActaCargarCalificaciones").value
	var hora=document.getElementById("inptHoraActaCargarCalificaciones").value
	// if(Nro==""){
		// alertmensaje("FALTO INGRESAR EL NRO DE ACTA")
		// return
	// }
	if(fecha==""){
		alertmensaje("FALTO INGRESAR LA FECHA DEL EXAMEN")
		return
	}
	// if(hora==""){
			// alertmensaje("FALTO INGRESAR LA HORA DE LA ACTA")
		// return
	// }	
	if(CodNroActaCalificacioncargarlista==""){
	// if(controlacceso("INSERTARACTAS","accion")==false){ return;		}
	}else{
		// if(controlacceso("MODIFICARACTAS","accion")==false){ return;		}
	}
	
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
    datos.append("funt", "guardarnroacta")
	datos.append("Nro", Nro)
	datos.append("fecha", fecha)
	datos.append("hora", hora)
	datos.append("cod_filialFk", codfilialcalificacioncargarlista)
	datos.append("idmallacurricularFk", codmallacalificacioncargarlista)
	datos.append("Cod_listadecarrerasFk", codCarreracalificacioncargarlista)
	datos.append("iddocente_catedraFK", iddocentecatedra)
	datos.append("calificacion", calificacioncargarlista)
	datos.append("idAbm", CodNroActaCalificacioncargarlista)
		
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCalificaciones.php",
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
			
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				
               
			   Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
			
                    CodNroActaCalificacioncargarlista = datos["2"];
					if(CodNroActaCalificacioncargarlista!=""){
						document.getElementById("btnEditarAplicarNroFactura").value="Editar"
	                   document.getElementById("btnGuardarNotasActas").style.display="none";
	                   document.getElementById("btnImprimirNotasActas").style.display="none";
	                 }else{
	                 document.getElementById("btnEditarAplicarNroFactura").value="Guardar"
	                 document.getElementById("btnGuardarNotasActas").style.display="none";
	                 document.getElementById("btnImprimirNotasActas").style.display="none";
	                  }
					  EditarCalificacionFinal('1')
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					}
			try {} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});

}



function EditarCalificacionFinal(datos) {
     
	// if(controlacceso("MODIFICARACTAS","accion")==false){  return;		}
     var idlistadoalumnos=""
     var datos = new FormData();
	  obtener_datos_user();
	  if(CodNroActaCalificacioncargarlista==""){
		  alertmensaje("FALTO GUARDAR EL NRO DE ACTA")
		  return
	  }
	  
	  verCerrarEfectoCargando("1")
	   var controlCalif=0;
		$("td[id=notascalificacion]").each(function (i, tdElemento) {				
			var Elementos=$(tdElemento).children('input[id="inptCalificacionfinal"]')
			var idlistadoalumnos=$(tdElemento).children('p[id="idAlumnoLista"]').html()
		datos.append("calif"+controlCalif, $(Elementos).val())		
		datos.append("idlista"+controlCalif, idlistadoalumnos)
        controlCalif=controlCalif+1;
        });
         datos.append("NroCalif", controlCalif) 
		  
	 
		
			var controlEstado=0;
		$("td[id=estadocalif]").each(function (i, tdElemento) {
			var Elemento=$(tdElemento).children('input[id="inptEstado"]')
		
		datos.append("estado"+controlEstado, $(Elemento).val())
        controlEstado=controlEstado+1;
        });
         datos.append("NroEstado", controlEstado) 

	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("totalNro", controlCalif)
	datos.append("idnroactaFk", CodNroActaCalificacioncargarlista)
	datos.append("controledit", calificacioncargarlista)
    datos.append("funt", "editarcalificacion")
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCalificaciones.php",
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
// alertmensaje("DATOS EDITADOS CORRECTAMENTE")
BuscarAlumnosCargarNotasVisra(iddocentecatedra,calificacioncargarlista,cod_AlumnoCalificaciones,curso_AlumnoCalificaciones,Semestre_AlumnoCalificaciones)
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});


}


var controlordencargararchivos="1"
function ordenreportCrearListadoNotas(d){
	document.getElementById('tdOrdReportCargarArchivos1').className="td_registro_orden1"
		document.getElementById('tdOrdReportCargarArchivos2').className="td_registro_orden1"
		document.getElementById('tdOrdReportCargarArchivos3').className="td_registro_orden1"
		document.getElementById('tdOrdReportCargarArchivos4').className="td_registro_orden1"
		
	if(d=="1"){
		document.getElementById('tdOrdReportCargarArchivos1').className="td_registro_orden"
		controlordencargararchivos="1"
	}
	if(d=="2"){
		document.getElementById('tdOrdReportCargarArchivos2').className="td_registro_orden"
		controlordencargararchivos="2"
	}
	if(d=="3"){
		document.getElementById('tdOrdReportCargarArchivos3').className="td_registro_orden"
		controlordencargararchivos="3"
	}
	if(d=="4"){
		document.getElementById('tdOrdReportCargarArchivos4').className="td_registro_orden"
		controlordencargararchivos="4"
	}
	
	
	BuscarReportCargarArchivos()
}



/*SUBIR ARCHIVOS DE ALUMNOS MATRICULACION*/
function verCerrarOpcionesArchivoMatriculacion(){
	if(eventoArchivoMatriculaciones=="8"){
		ver_cerrar_cargar_archivo_carreras_posgrado("1")
	}else{
		ver_cerrar_cargar_archivo_carreras_grado("1")
	}
}

var idAlumnoFkSubirArchivoCarrera=""
var CodListadoCarreraFkSubirArchivoCarrera=""
var eventoArchivoMatriculaciones=""

function checkCargarArchivo(d){
	if(d=="1"){
	document.getElementById('divCargarArchivomasivogrado').style.display=""
	document.getElementById('divCargarArchivomasivoposgrado').style.display="none"
	document.getElementById('checkCargarArchivo1').checked=true
	document.getElementById('checkCargarArchivo2').checked=false	
	}else{
	document.getElementById('divCargarArchivomasivogrado').style.display="none"
	document.getElementById('divCargarArchivomasivoposgrado').style.display=""
	document.getElementById('checkCargarArchivo1').checked=false
	document.getElementById('checkCargarArchivo2').checked=true	
	}
	 
}

function BuscarReportCargarArchivos() {

	var filial = ""
	$("input[id=inptReporCargarArhivos1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         filial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
		var carrera = ""
	$("input[id=inptReporCargarArhivos2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         carrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
	
		
	var documento = document.getElementById('inptReporCargarArhivos3').value
	var nombreapellido = document.getElementById('inptReporCargarArhivos4').value
	
	document.getElementById("divBuscadorReportExistenciasArchivos").innerHTML = imgCargandoA
    document.getElementById("inptRegistroCargarArchivos").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": filial,
		"codCarrera": carrera,
		"nrodocumento": documento,
		"nombreapellido": nombreapellido,
		"ordenby": controlordencargararchivos,
		"funt": "crearlistadoparaarchivos"
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
			document.getElementById("divBuscadorReportExistenciasArchivos").innerHTML = ''
			document.getElementById("inptRegistroCargarArchivos").value = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportExistenciasArchivos").innerHTML = ''
			document.getElementById("inptRegistroCargarArchivos").value = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportExistenciasArchivos").innerHTML = datos_buscados					
                   document.getElementById("inptRegistroCargarArchivos").value=datos[3];
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

function BuscarReportCargarArchivosPosgrado() {

	var filial = ""
	$("input[id=inptReporCargarArhivosPosgrado1]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         filial=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
		var carrera = ""
	$("input[id=inptReporCargarArhivosPosgrado2]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         carrera=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
	
		
	var documento = document.getElementById('inptReporCargarArhivosPosgrado3').value
	var nombreapellido = document.getElementById('inptReporCargarArhivosPosgrado4').value
	
	document.getElementById("divBuscadorReportExistenciasArchivosPosgrado").innerHTML = imgCargandoA
    document.getElementById("inptRegistroCargarArchivosPosgrado").value="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": filial,
		"codCarrera": carrera,
		"nrodocumento": documento,
		"nombreapellido": nombreapellido,
		"ordenby": controlordencargararchivos,
		"funt": "crearlistadoparaarchivosposgrado"
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
			document.getElementById("divBuscadorReportExistenciasArchivosPosgrado").innerHTML = ''
			document.getElementById("inptRegistroCargarArchivosPosgrado").value = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorReportExistenciasArchivosPosgrado").innerHTML = ''
			document.getElementById("inptRegistroCargarArchivosPosgrado").value = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorReportExistenciasArchivosPosgrado").innerHTML = datos_buscados					
                   document.getElementById("inptRegistroCargarArchivosPosgrado").value=datos[3];
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
var elementoscargaraehivos="";
function ObtenerdatosListadoCargarArchivos(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
	elementoscargaraehivos=datostr;
	datostr.className = 'tableRegistroSelec'
	idAlumnoFkSubirArchivoCarrera = $(datostr).children('td[id="td_id_2"]').html();
	CodListadoCarreraFkSubirArchivoCarrera = $(datostr).children('td[id="td_id_3"]').html();
	
	
	}


/*SUBIR ARCHIVOS CARRERA*/

function ver_cerrar_cargar_archivo_carreras_grado(d){

	 document.getElementById("divAbmArchivosCarrerasGrado").style.display="none"	
	if (d == "1") {
		if(idAlumnoFkSubirArchivoCarrera=="" || CodListadoCarreraFkSubirArchivoCarrera==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
		
		document.getElementById("divAbmArchivosCarrerasGrado").style.display = ''
		buscararchivosgrado()
	}
	
}

var enlacearchivogradoCertificadoNac="";
var enlacearchivogradoFotoTipoCarnet="";
var enlacearchivogradoFichaAcademico="";
var enlacearchivogradoSolicitudMatriculacion="";
var enlacearchivogradoContratoMatricula="";
var enlacearchivogradoCertificadodeEstudio=""
var enlacearchivogradoTituloBachiller=""
var enlacearchivogradoCopiaCedula=""

function ver_cerrar_cargar_archivo_carreras_grado_masivo(d){

	 document.getElementById("divCrargarExistenciaArchivos").style.display="none"	
	if (d == "1") {
		
		document.getElementById("divCrargarExistenciaArchivos").style.display = ''
		
	}
	
}


function buscararchivosgrado() {

	verCerrarEfectoCargando("1")
	LimpiarCamposArchivoCarreraGrado()
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idalumnoFK": idAlumnoFkSubirArchivoCarrera,
		"Cod_listadecarrerasFK": CodListadoCarreraFkSubirArchivoCarrera,
		"funt": "buscararchivoa"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoGrado.php",
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
				verCerrarEfectoCargando("2")
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
           
		   document.getElementById("inptArchivosGradoCertificadoNac").value=datos["2"]
		   document.getElementById("inptArchivosGradoFotoTipoCarnet").value=datos["4"]
		   document.getElementById("inptArchivosGradoFichaAcademico").value=datos["6"]
		   document.getElementById("inptArchivosGradoSolicitudMatriculacion").value=datos["10"]
		   document.getElementById("inptArchivosGradoContratoMatricula").value=datos["8"]
		   document.getElementById("inptArchivosGradoCertificadodeEstudio").value=datos["14"]
		   document.getElementById("inptArchivosGradoTituloBachiller").value=datos["12"]
		   document.getElementById("inptArchivosGradoCopiaCedula").value=datos["16"]
		   document.getElementById("inptArchivosGradoCertificadodeEstudioFisico").value=datos["18"]
		   document.getElementById("inptArchivosGradoCopiaCedulaFisico").value=datos["19"]
		   enlacearchivogradoCertificadoNac=datos["3"];
          enlacearchivogradoFotoTipoCarnet=datos["5"];
          enlacearchivogradoFichaAcademico=datos["7"];
           enlacearchivogradoSolicitudMatriculacion=datos["11"];
         enlacearchivogradoContratoMatricula=datos["9"];
        enlacearchivogradoCertificadodeEstudio=datos["15"]
       enlacearchivogradoTituloBachiller=datos["13"]
       enlacearchivogradoCopiaCedula=datos["16"]
		  ControlArchivoCarreraGrado()
				
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

function descargararchivogrado(datos){
	if(datos=="enlacearchivogradoCertificadoNac"){
		window.open("http://localhost/"+enlacearchivogradoCertificadoNac)
	}
	if(datos=="enlacearchivogradoFotoTipoCarnet"){
			window.open("http://localhost/"+enlacearchivogradoFotoTipoCarnet)
	}
	if(datos=="enlacearchivogradoFichaAcademico"){
			window.open("http://localhost/"+enlacearchivogradoFichaAcademico)
	}
	if(datos=="enlacearchivogradoSolicitudMatriculacion"){
			window.open("http://localhost/"+enlacearchivogradoSolicitudMatriculacion)
	}
	if(datos=="enlacearchivogradoContratoMatricula"){
			window.open("http://localhost/"+enlacearchivogradoContratoMatricula)
	}
	if(datos=="enlacearchivogradoCertificadodeEstudio"){
			window.open("http://localhost/"+enlacearchivogradoCertificadodeEstudio)
	}
	if(datos=="enlacearchivogradoTituloBachiller"){
			window.open("http://localhost/"+enlacearchivogradoTituloBachiller)
	}
	if(datos=="enlacearchivogradoCopiaCedula"){
			window.open("http://localhost/"+enlacearchivogradoCopiaCedula)
	}



}

function LimpiarCamposArchivoCarreraGrado(){
	
	
			document.getElementById("btnExplArchivoCertificado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado1").style.display="none"
			document.getElementById("imgExplArchivoCertificado").style.display="none"
			archivogrado1="";
            extgrado1="";
		

		
			document.getElementById("btnExplArchivoFichaAcademico").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado2").style.display="none"
			document.getElementById("imgExplArchivoFichaAcademico").style.display="none"
			archivogrado2="";
            extgrado2="";
		
			document.getElementById("btnExplArchivoContratoMatricula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado3").style.display="none"
			document.getElementById("imgExplArchivoContratoMatricula").style.display="none"
			archivogrado3="";
            extgrado3="";
		
			document.getElementById("btnExplArchivoTituloBachiller").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado4").style.display="none"
			document.getElementById("imgExplArchivoTituloBachiller").style.display="none"
			archivogrado4="";
            extgrado4="";
		
			document.getElementById("btnExplArchivoCopiaCedula").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplArchivoCopiaCedula").style.display="none"
			document.getElementById("pTituloArchivoGrado5").style.display="none"
			archivogrado5="";
            extgrado5="";
		
			document.getElementById("btnExplArchivoFotoTipoCarnet").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado6").style.display="none"
			document.getElementById("imgExplArchivoFotoTipoCarnet").style.display="none"
			archivogrado6="";
            extgrado6="";
		
			document.getElementById("btnExplArchivoSolicitudMatriculacion").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado7").style.display="none"
			document.getElementById("imgExplArchivoSolicitudMatriculacion").style.display="none"
			archivogrado7="";
            extgrado7="";
		
			document.getElementById("btnExplArchivoCertificadodeEstudio").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplArchivoCertificadodeEstudio").style.display="none"
			document.getElementById("pTituloArchivoGrado8").style.display="none"
			archivogrado8="";
            extgrado8="";
	 
	
	
}


function ControlArchivoCarreraGrado(){
	
		if(document.getElementById("inptArchivosGradoCertificadoNac").value=="Si"){
			document.getElementById("btnExplArchivoCertificado").style.backgroundColor=""
			document.getElementById("imgExplArchivoCertificado").style.display=""
			document.getElementById("pTituloArchivoGrado1").style.display="none"
		}else{
			document.getElementById("btnExplArchivoCertificado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado1").style.display="none"
			document.getElementById("imgExplArchivoCertificado").style.display="none"
			archivogrado1="";
            extgrado1="";
		}
	
		if(document.getElementById("inptArchivosGradoFichaAcademico").value=="Si"){
			document.getElementById("btnExplArchivoFichaAcademico").style.backgroundColor=""
			document.getElementById("imgExplArchivoFichaAcademico").style.display=""
			document.getElementById("pTituloArchivoGrado2").style.display="none"
		}else{
			document.getElementById("btnExplArchivoFichaAcademico").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado2").style.display="none"
			document.getElementById("imgExplArchivoFichaAcademico").style.display="none"
			archivogrado2="";
            extgrado2="";
		}
	
		if( document.getElementById("inptArchivosGradoContratoMatricula").value=="Si"){
			document.getElementById("btnExplArchivoContratoMatricula").style.backgroundColor=""
			document.getElementById("imgExplArchivoContratoMatricula").style.display=""
			document.getElementById("pTituloArchivoGrado3").style.display="none"
		}else{
			document.getElementById("btnExplArchivoContratoMatricula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado3").style.display="none"
			document.getElementById("imgExplArchivoContratoMatricula").style.display="none"
			archivogrado3="";
            extgrado3="";
		}
	
		if( document.getElementById("inptArchivosGradoTituloBachiller").value=="Si"){
			document.getElementById("btnExplArchivoTituloBachiller").style.backgroundColor=""
			document.getElementById("imgExplArchivoTituloBachiller").style.display=""
			document.getElementById("pTituloArchivoGrado4").style.display="none"
		}else{
			document.getElementById("btnExplArchivoTituloBachiller").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado4").style.display="none"
			document.getElementById("imgExplArchivoTituloBachiller").style.display="none"
			archivogrado4="";
            extgrado4="";
		}
	
		if(document.getElementById("inptArchivosGradoCopiaCedula").value=="Si"){
			document.getElementById("btnExplArchivoCopiaCedula").style.backgroundColor=""
			document.getElementById("imgExplArchivoCopiaCedula").style.display=""
			document.getElementById("pTituloArchivoGrado5").style.display="none"
		}else{
			document.getElementById("btnExplArchivoCopiaCedula").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplArchivoCopiaCedula").style.display="none"
			document.getElementById("pTituloArchivoGrado5").style.display="none"
			archivogrado5="";
            extgrado5="";
		}
	
		if( document.getElementById("inptArchivosGradoFotoTipoCarnet").value=="Si"){
			document.getElementById("btnExplArchivoFotoTipoCarnet").style.backgroundColor=""
			document.getElementById("imgExplArchivoFotoTipoCarnet").style.display=""
			document.getElementById("pTituloArchivoGrado6").style.display="none"
		}else{
			document.getElementById("btnExplArchivoFotoTipoCarnet").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado6").style.display="none"
			document.getElementById("imgExplArchivoFotoTipoCarnet").style.display="none"
			archivogrado6="";
            extgrado6="";
		}
	
		if(document.getElementById("inptArchivosGradoSolicitudMatriculacion").value=="Si"){
			document.getElementById("btnExplArchivoSolicitudMatriculacion").style.backgroundColor=""
			document.getElementById("imgExplArchivoSolicitudMatriculacion").style.display=""
			document.getElementById("pTituloArchivoGrado7").style.display="none"
		}else{
			document.getElementById("btnExplArchivoSolicitudMatriculacion").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado7").style.display="none"
			document.getElementById("imgExplArchivoSolicitudMatriculacion").style.display="none"
			archivogrado7="";
            extgrado7="";
		}

	
		if(document.getElementById("inptArchivosGradoCertificadodeEstudio").value=="Si"){
			document.getElementById("btnExplArchivoCertificadodeEstudio").style.backgroundColor=""
			document.getElementById("imgExplArchivoCertificadodeEstudio").style.display=""
			document.getElementById("pTituloArchivoGrado8").style.display="none"
		}else{
			document.getElementById("btnExplArchivoCertificadodeEstudio").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplArchivoCertificadodeEstudio").style.display="none"
			document.getElementById("pTituloArchivoGrado8").style.display="none"
			archivogrado8="";
            extgrado8="";
	 
		}
	
	
}



var controlarchivocarrerasgrado="";
function ExploradorArchivoCarrerasGrado(File){	
controlarchivocarrerasgrado=File;
if(controlarchivocarrerasgrado=="file_certificado_carrera"){
	if(document.getElementById("inptArchivosGradoCertificadoNac").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_ficha_academica_carrera"){
	if(document.getElementById("inptArchivosGradoFichaAcademico").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_contrato_de_matri_carrera"){
	if(document.getElementById("inptArchivosGradoContratoMatricula").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_titulo_bachiller_carrera"){
	if(document.getElementById("inptArchivosGradoTituloBachiller").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_cedula_carrera"){
	if(document.getElementById("inptArchivosGradoCopiaCedula").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_foto_tipo_carne_carrera"){
	if(document.getElementById("inptArchivosGradoFotoTipoCarnet").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_solicitud_matriculacion_carrera"){
	if(document.getElementById("inptArchivosGradoSolicitudMatriculacion").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasgrado=="file_certificado_estudio_carrera"){
	if(document.getElementById("inptArchivosGradoCertificadodeEstudio").value=="No"){
	return false;	
	}
}
$("input[id="+File+"]").click();

}
var archivogrado1="";
var extgrado1="";
var archivogrado2="";
var extgrado2="";
var archivogrado3="";
var extgrado3="";
var archivogrado4="";
var extgrado4="";
var archivogrado5="";
var extgrado5="";
var archivogrado6="";
var extgrado6="";
var archivogrado7="";
var extgrado7="";
var archivogrado8="";
var extgrado8="";
var archivogrado9="";
var extgrado9="";
function readFileArchivosCarrerasGrado(input){		
var file=$("input[id="+input.id+"]")[0].files[0];
var filename= file.name;
var tamanho = file.size;
if (tamanho > 5000000){
alertmensaje("EL ARCHIVO NO PUEDE EXCEDER LOS 5Mb")
return false
}
file_extension=filename.substring(filename.lastIndexOf('.')+1).toLowerCase();
if ((file_extension=="pdf") || (file_extension=="PDF")){
}else{
alertmensaje("EL ARCHIVO SELECCIONADO NO ES PDF")
return false;
}
var reader = new FileReader();
reader.onload = function(e){
	
if(controlarchivocarrerasgrado=="file_certificado_carrera"){
	extgrado1=file_extension;
archivogrado1=e.target.result;
document.getElementById("pTituloArchivoGrado1").style.display=""
}
if(controlarchivocarrerasgrado=="file_ficha_academica_carrera"){
	extgrado2=file_extension;
archivogrado2=e.target.result;
document.getElementById("pTituloArchivoGrado2").style.display=""
}

if(controlarchivocarrerasgrado=="file_contrato_de_matri_carrera"){
extgrado3=file_extension;
archivogrado3=e.target.result;
document.getElementById("pTituloArchivoGrado3").style.display=""
}
if(controlarchivocarrerasgrado=="file_titulo_bachiller_carrera"){
	extgrado4=file_extension;
archivogrado4=e.target.result;
document.getElementById("pTituloArchivoGrado4").style.display=""
}
if(controlarchivocarrerasgrado=="file_cedula_carrera"){
		extgrado5=file_extension;
archivogrado5=e.target.result;
document.getElementById("pTituloArchivoGrado5").style.display=""
}
if(controlarchivocarrerasgrado=="file_foto_tipo_carne_carrera"){
	extgrado6=file_extension;
archivogrado6=e.target.result;
document.getElementById("pTituloArchivoGrado6").style.display=""
}
if(controlarchivocarrerasgrado=="file_solicitud_matriculacion_carrera"){
	extgrado7=file_extension;
archivogrado7=e.target.result;
document.getElementById("pTituloArchivoGrado7").style.display=""
}
if(controlarchivocarrerasgrado=="file_certificado_estudio_carrera"){
		extgrado8=file_extension;
archivogrado8=e.target.result;
	document.getElementById("pTituloArchivoGrado8").style.display=""
}


}
reader.readAsDataURL(input.files[0]);
}

function SeleccionarExistenciaArchivoCarreraGrado(datos){
	var control=datos.id
	if(control=="inptArchivosGradoCertificadoNac"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoCertificado").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoCertificado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado1").style.display="none"
			archivogrado1="";
      extgrado1="";
		}
	}
	
	if(control=="inptArchivosGradoFichaAcademico"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoFichaAcademico").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoFichaAcademico").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado2").style.display="none"
			archivogrado2="";
            extgrado2="";
		}
	}
	
	if(control=="inptArchivosGradoContratoMatricula"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoContratoMatricula").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoContratoMatricula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado3").style.display="none"
			archivogrado3="";
            extgrado3="";
		}
	}
	
	if(control=="inptArchivosGradoTituloBachiller"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoTituloBachiller").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoTituloBachiller").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado4").style.display="none"
			archivogrado4="";
            extgrado4="";
		}
	}
	
	if(control=="inptArchivosGradoCopiaCedula"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoCopiaCedula").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoCopiaCedula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado5").style.display="none"
			archivogrado5="";
            extgrado5="";
		}
	}
	
	if(control=="inptArchivosGradoFotoTipoCarnet"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoFotoTipoCarnet").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoFotoTipoCarnet").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado6").style.display="none"
			archivogrado6="";
            extgrado6="";
		}
	}
	
	if(control=="inptArchivosGradoSolicitudMatriculacion"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoSolicitudMatriculacion").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoSolicitudMatriculacion").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado7").style.display="none"
			archivogrado7="";
            extgrado7="";
		}
	}
	
	if(control=="inptArchivosGradoCertificadodeEstudio"){
		if(datos.value=="Si"){
			document.getElementById("btnExplArchivoCertificadodeEstudio").style.backgroundColor=""
		}else{
			document.getElementById("btnExplArchivoCertificadodeEstudio").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoGrado8").style.display="none"
			archivogrado8="";
            extgrado8="";
	 
		}
	}
	
}


function  subirArchivosGrado(){
	
	if(idAlumnoFkSubirArchivoCarrera=="" || CodListadoCarreraFkSubirArchivoCarrera==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
		var certificadonace=document.getElementById("inptArchivosGradoCertificadoNac").value
		var fichaacademica=document.getElementById("inptArchivosGradoFichaAcademico").value
		var contratomatricula=document.getElementById("inptArchivosGradoContratoMatricula").value
		var titulobachiller=document.getElementById("inptArchivosGradoTituloBachiller").value
		var copiacedula=document.getElementById("inptArchivosGradoCopiaCedula").value
		var fototipocarnet=document.getElementById("inptArchivosGradoFotoTipoCarnet").value
		var solicitudMatriculacion=document.getElementById("inptArchivosGradoSolicitudMatriculacion").value
		var certificadoestudio=document.getElementById("inptArchivosGradoCertificadodeEstudio").value
		var certificadoestudioFisico=document.getElementById("inptArchivosGradoCertificadodeEstudioFisico").value
		var copiacedulaFisico=document.getElementById("inptArchivosGradoCopiaCedulaFisico").value
		
	verCerrarEfectoCargando("1")
	  var datos = new FormData();
			obtener_datos_user();
			 datos.append("useru" , userid)
			 datos.append("passu" , passuser)
			 datos.append("navegador" , navegador)
			 datos.append("funt", "subirarchivo")
			 datos.append("certificado_nac" , certificadonace)
			  datos.append("ficha_academica" , fichaacademica)
			 datos.append("contrato_matriculacion" , contratomatricula)
			 datos.append("copia_autenticada_de_titulo_bachiller" , titulobachiller)
			 datos.append("copia_de_cedula_autenticada" , copiacedula)
			 datos.append("foto_tipo_carnet" , fototipocarnet)
			 datos.append("solicitud_matriculacion" , solicitudMatriculacion)
			 datos.append("certif_de_estudio_de_bachillerato_orinal_visado" , certificadoestudio)
			 datos.append("certif_de_estudio_de_bachillerato_orinal_visado_fisico" , certificadoestudioFisico)
			 datos.append("copia_de_cedula_autenticada_fisico" , copiacedulaFisico)
			 datos.append("idalumnoFK" , idAlumnoFkSubirArchivoCarrera)
			 datos.append("Cod_listadecarrerasFK" , CodListadoCarreraFkSubirArchivoCarrera)
			datos.append("archivogrado1", archivogrado1)
			datos.append("extgrado1", extgrado1)
			datos.append("archivogrado2", archivogrado2)
			datos.append("extgrado2", extgrado2)
			datos.append("archivogrado3", archivogrado3)
			datos.append("extgrado3", extgrado3)
			datos.append("archivogrado4", archivogrado4)
			datos.append("extgrado4", extgrado4)
			datos.append("archivogrado5", archivogrado5)
			datos.append("extgrado5", extgrado5)
			datos.append("archivogrado6", archivogrado6)
			datos.append("extgrado6", extgrado6)
			datos.append("archivogrado7", archivogrado7)
			datos.append("extgrado7", extgrado7)
			datos.append("archivogrado8", archivogrado8)
			datos.append("extgrado8", extgrado8)
			
			
			var OpAjax= $.ajax({
			
			data: datos,
			url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoGrado.php",
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
						verCerrarEfectoCargando("")
					manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					 return false;
			},
			success: function(responseText)
			{
			  	 verCerrarEfectoCargando("")
			Respuesta=responseText;			
				console.log(Respuesta)
		try{
				var datos = $.parseJSON(Respuesta); 
          Respuesta=datos["1"];  
		   Respuesta=respuestaJqueryAjax(Respuesta)
			if (Respuesta == true) {
				
				
				alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				buscararchivosgrado()
			}
			
			}catch(error)
				{
					 alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
				}
		 
					
			}
			});
			
	
}



/*SUBIR ARCHIVOS POSGRADO*/

function ver_cerrar_cargar_archivo_carreras_posgrado(d){

	 document.getElementById("divAbmArchivosCarrerasPosgrado").style.display="none"	
	if (d == "1") {
		if(idAlumnoFkSubirArchivoCarrera=="" || CodListadoCarreraFkSubirArchivoCarrera==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
		
		document.getElementById("divAbmArchivosCarrerasPosgrado").style.display = ''
		buscararchivosposgrado()
	}
	
}

var enlacearchivoposgradoCertificadoNac="";
var enlacearchivoposgradoFotoTipoCarnet="";
var enlacearchivoposgradoFichaAcademico="";
var enlacearchivoposgradoSolicitudMatriculacion="";
var enlacearchivoposgradoContratoMatricula="";
var enlacearchivoposgradoTitulodeGrado=""
var enlacearchivoposgradoCertificadoGrado=""
var enlacearchivoposgradoCopiaCedula=""

function buscararchivosposgrado() {

	verCerrarEfectoCargando("1")
	LimpiarCamposArchivoCarreraPosGrado()
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idalumnoFK": idAlumnoFkSubirArchivoCarrera,
		"Cod_listadecarrerasFK": CodListadoCarreraFkSubirArchivoCarrera,
		"funt": "buscararchivoa"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoPosGrado.php",
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
				verCerrarEfectoCargando("2")
		
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
           
		   document.getElementById("inptArchivosPosGradoCertificadoNac").value=datos["2"]
		   document.getElementById("inptArchivosPosGradoFotoTipoCarnet").value=datos["4"]
		   document.getElementById("inptArchivosPosGradoFichaAcademico").value=datos["6"]
		   document.getElementById("inptArchivosPosGradoSolicitudMatriculacion").value=datos["10"]
		   document.getElementById("inptArchivosPosGradoContratoMatricula").value=datos["8"]
		   document.getElementById("inptArchivosPosGradoTituloGrado").value=datos["12"]
		   document.getElementById("inptArchivosPosGradoCertificadoGrado").value=datos["14"]
		   document.getElementById("inptArchivosPosGradoCopiaCedula").value=datos["16"]
		   document.getElementById("inptArchivosPosGradoTituloGradoFisico").value=datos["20"]
		   document.getElementById("inptArchivosPosGradoCertificadoGradoFisico").value=datos["18"]
		   document.getElementById("inptArchivosPosGradoCopiaCedulaFisico").value=datos["19"]
		   enlacearchivoposgradoCertificadoNac=datos["3"];
           enlacearchivoposgradoFotoTipoCarnet=datos["5"];
           enlacearchivoposgradoFichaAcademico=datos["7"];
           enlacearchivoposgradoSolicitudMatriculacion=datos["11"];
           enlacearchivoposgradoContratoMatricula=datos["9"];
           enlacearchivoposgradoCertificadoGrado=datos["15"]
           enlacearchivoposgradoTitulodeGrado=datos["13"]
           enlacearchivoposgradoCopiaCedula=datos["17"]
		   ControlArchivoCarreraPosGrado()
				
				}
					try {
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

function descargararchivoposgrado(datos){
	if(datos=="enlacearchivoposgradoCertificadoNac"){
		window.open("http://localhost/"+enlacearchivoposgradoCertificadoNac)
	}
	if(datos=="enlacearchivoposgradoFotoTipoCarnet"){
			window.open("http://localhost/"+enlacearchivoposgradoFotoTipoCarnet)
	}
	if(datos=="enlacearchivoposgradoFichaAcademico"){
			window.open("http://localhost/"+enlacearchivoposgradoFichaAcademico)
	}
	if(datos=="enlacearchivoposgradoSolicitudMatriculacion"){
			window.open("http://localhost/"+enlacearchivoposgradoSolicitudMatriculacion)
	}
	if(datos=="enlacearchivoposgradoContratoMatricula"){
			window.open("http://localhost/"+enlacearchivoposgradoContratoMatricula)
	}
	if(datos=="enlacearchivoposgradoCertificadoGrado"){
			window.open("http://localhost/"+enlacearchivoposgradoCertificadoGrado)
	}
	if(datos=="enlacearchivoposgradoTituloGrado"){
			window.open("http://localhost/"+enlacearchivoposgradoTitulodeGrado)
	}
	if(datos=="enlacearchivoposgradoCopiaCedula"){
			window.open("http://localhost/"+enlacearchivoposgradoCopiaCedula)
	}



}

function LimpiarCamposArchivoCarreraPosGrado(){
	
	
			document.getElementById("btnExplPosArchivoCertificado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado1").style.display="none"
			document.getElementById("imgExplPosArchivoCertificado").style.display="none"
			archivoposgrado1="";
            extposgrado1="";
		

		
			document.getElementById("btnExplPosArchivoFichaAcademico").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado2").style.display="none"
			document.getElementById("imgExplPosArchivoFichaAcademico").style.display="none"
			archivoposgrado2="";
            extposgrado2="";
		
			document.getElementById("btnExplPosArchivoContratoMatricula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado3").style.display="none"
			document.getElementById("imgExplPosArchivoContratoMatricula").style.display="none"
			archivoposgrado3="";
            extposgrado3="";
		
			document.getElementById("btnExplPosArchivoTituloGrado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado4").style.display="none"
			document.getElementById("imgExplPosArchivoTituloGrado").style.display="none"
			archivoposgrado4="";
            extposgrado4="";
		
			document.getElementById("btnExplPosArchivoCopiaCedula").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplPosArchivoCopiaCedula").style.display="none"
			document.getElementById("pTituloArchivoPosGrado5").style.display="none"
			archivoposgrado5="";
            extposgrado5="";
		
			document.getElementById("btnExplPosArchivoFotoTipoCarnet").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado6").style.display="none"
			document.getElementById("imgExplPosArchivoFotoTipoCarnet").style.display="none"
			archivoposgrado6="";
            extposgrado6="";
		
			document.getElementById("btnExplPosArchivoSolicitudMatriculacion").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado7").style.display="none"
			document.getElementById("imgExplPosArchivoSolicitudMatriculacion").style.display="none"
			archivoposgrado7="";
            extposgrado7="";
		
			document.getElementById("btnExplPosArchivoCertificadoGrado").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplPosArchivoCertificadoGrado").style.display="none"
			document.getElementById("pTituloArchivoPosGrado8").style.display="none"
			archivoposgrado8="";
            extposgrado8="";
	 
	
	
}


function ControlArchivoCarreraPosGrado(){
	
		if(document.getElementById("inptArchivosPosGradoCertificadoNac").value=="Si"){
			document.getElementById("btnExplPosArchivoCertificado").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoCertificado").style.display=""
			document.getElementById("pTituloArchivoPosGrado1").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoCertificado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado1").style.display="none"
			document.getElementById("imgExplPosArchivoCertificado").style.display="none"
			archivoposgrado1="";
            extposgrado1="";
		}
	
		if(document.getElementById("inptArchivosPosGradoFichaAcademico").value=="Si"){
			document.getElementById("btnExplPosArchivoFichaAcademico").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoFichaAcademico").style.display=""
			document.getElementById("pTituloArchivoPosGrado2").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoFichaAcademico").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado2").style.display="none"
			document.getElementById("imgExplPosArchivoFichaAcademico").style.display="none"
			archivoposgrado2="";
            extposgrado2="";
		}
	
		if( document.getElementById("inptArchivosPosGradoContratoMatricula").value=="Si"){
			document.getElementById("btnExplPosArchivoContratoMatricula").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoContratoMatricula").style.display=""
			document.getElementById("pTituloArchivoPosGrado3").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoContratoMatricula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado3").style.display="none"
			document.getElementById("imgExplPosArchivoContratoMatricula").style.display="none"
			archivoposgrado3="";
            extposgrado3="";
		}
	
		if( document.getElementById("inptArchivosPosGradoTituloGrado").value=="Si"){
			document.getElementById("btnExplPosArchivoTituloGrado").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoTituloGrado").style.display=""
			document.getElementById("pTituloArchivoPosGrado4").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoTituloGrado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado4").style.display="none"
			document.getElementById("imgExplPosArchivoTituloGrado").style.display="none"
			archivoposgrado4="";
            extposgrado4="";
		}
	
		if(document.getElementById("inptArchivosPosGradoCopiaCedula").value=="Si"){
			document.getElementById("btnExplPosArchivoCopiaCedula").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoCopiaCedula").style.display=""
			document.getElementById("pTituloArchivoPosGrado5").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoCopiaCedula").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplPosArchivoCopiaCedula").style.display="none"
			document.getElementById("pTituloArchivoPosGrado5").style.display="none"
			archivoposgrado5="";
            extposgrado5="";
		}
	
		if( document.getElementById("inptArchivosPosGradoFotoTipoCarnet").value=="Si"){
			document.getElementById("btnExplPosArchivoFotoTipoCarnet").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoFotoTipoCarnet").style.display=""
			document.getElementById("pTituloArchivoPosGrado6").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoFotoTipoCarnet").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado6").style.display="none"
			document.getElementById("imgExplPosArchivoFotoTipoCarnet").style.display="none"
			archivoposgrado6="";
            extposgrado6="";
		}
	
		if(document.getElementById("inptArchivosPosGradoSolicitudMatriculacion").value=="Si"){
			document.getElementById("btnExplPosArchivoSolicitudMatriculacion").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoSolicitudMatriculacion").style.display=""
			document.getElementById("pTituloArchivoPosGrado7").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoSolicitudMatriculacion").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado7").style.display="none"
			document.getElementById("imgExplPosArchivoSolicitudMatriculacion").style.display="none"
			archivoposgrado7="";
            extposgrado7="";
		}

	
		if(document.getElementById("inptArchivosPosGradoCertificadoGrado").value=="Si"){
			document.getElementById("btnExplPosArchivoCertificadoGrado").style.backgroundColor=""
			document.getElementById("imgExplPosArchivoCertificadoGrado").style.display=""
			document.getElementById("pTituloArchivoPosGrado8").style.display="none"
		}else{
			document.getElementById("btnExplPosArchivoCertificadoGrado").style.backgroundColor="#cbcbcb"
			document.getElementById("imgExplPosArchivoCertificadoGrado").style.display="none"
			document.getElementById("pTituloArchivoPosGrado8").style.display="none"
			archivoposgrado8="";
            extposgrado8="";	 
		}
	
	
}



var controlarchivocarrerasposgrado="";
function ExploradorArchivoCarrerasPosGrado(File){	
controlarchivocarrerasposgrado=File;
if(controlarchivocarrerasposgrado=="file_certificado_carrera_pos"){
	if(document.getElementById("inptArchivosPosGradoCertificadoNac").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasposgrado=="file_ficha_academica_carrera_pos"){
	if(document.getElementById("inptArchivosPosGradoFichaAcademico").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasposgrado=="file_contrato_de_matri_carrera_pos"){
	if(document.getElementById("inptArchivosPosGradoContratoMatricula").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasposgrado=="file_titulo_grado_pos"){
	if(document.getElementById("inptArchivosPosGradoTituloGrado").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasposgrado=="file_cedula_carrera_pos"){
	if(document.getElementById("inptArchivosPosGradoCopiaCedula").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasposgrado=="file_foto_tipo_carne_carrera_pos"){
	if(document.getElementById("inptArchivosPosGradoFotoTipoCarnet").value=="No"){
	return false;	
	}
}
if(controlarchivocarrerasposgrado=="file_solicitud_matriculacion_carrera_pos"){
	if(document.getElementById("inptArchivosPosGradoSolicitudMatriculacion").value=="No"){
	return false;	
	}
}

if(controlarchivocarrerasposgrado=="file_certificado_grado_pos"){
	if(document.getElementById("inptArchivosPosGradoCertificadoGrado").value=="No"){
	return false;	
	}
}

$("input[id="+File+"]").click();

}
var archivoposgrado1="";
var extposgrado1="";
var archivoposgrado2="";
var extposgrado2="";
var archivoposgrado3="";
var extposgrado3="";
var archivoposgrado4="";
var extposgrado4="";
var archivoposgrado5="";
var extposgrado5="";
var archivoposgrado6="";
var extposgrado6="";
var archivoposgrado7="";
var extposgrado7="";
var archivoposgrado8="";
var extposgrado8="";
var archivoposgrado9="";
var extposgrado9="";
function readFileArchivosCarrerasPosGrado(input){		
var file=$("input[id="+input.id+"]")[0].files[0];
var filename= file.name;
var tamanho = file.size;
if (tamanho > 5000000){
alertmensaje("EL ARCHIVO NO PUEDE EXCEDER LOS 5Mb")
return false
}
file_extension=filename.substring(filename.lastIndexOf('.')+1).toLowerCase();
if ((file_extension=="pdf") || (file_extension=="PDF")){
}else{
alertmensaje("EL ARCHIVO SELECCIONADO NO ES PDF")
return false;
}
var reader = new FileReader();
reader.onload = function(e){
	
if(controlarchivocarrerasposgrado=="file_certificado_carrera_pos"){
	extposgrado1=file_extension;
archivoposgrado1=e.target.result;
document.getElementById("pTituloArchivoPosGrado1").style.display=""
}
if(controlarchivocarrerasposgrado=="file_ficha_academica_carrera_pos"){
	extposgrado2=file_extension;
archivoposgrado2=e.target.result;
document.getElementById("pTituloArchivoPosGrado2").style.display=""
}

if(controlarchivocarrerasposgrado=="file_contrato_de_matri_carrera_pos"){
extposgrado3=file_extension;
archivoposgrado3=e.target.result;
document.getElementById("pTituloArchivoPosGrado3").style.display=""
}
if(controlarchivocarrerasposgrado=="file_titulo_grado_pos"){
	extposgrado4=file_extension;
archivoposgrado4=e.target.result;
document.getElementById("pTituloArchivoPosGrado4").style.display=""
}
if(controlarchivocarrerasposgrado=="file_cedula_carrera_pos"){
		extposgrado5=file_extension;
archivoposgrado5=e.target.result;
document.getElementById("pTituloArchivoPosGrado5").style.display=""
}
if(controlarchivocarrerasposgrado=="file_foto_tipo_carne_carrera_pos"){
	extposgrado6=file_extension;
archivoposgrado6=e.target.result;
document.getElementById("pTituloArchivoPosGrado6").style.display=""
}
if(controlarchivocarrerasposgrado=="file_solicitud_matriculacion_carrera_pos"){
	extposgrado7=file_extension;
archivoposgrado7=e.target.result;
document.getElementById("pTituloArchivoPosGrado7").style.display=""
}
if(controlarchivocarrerasposgrado=="file_certificado_grado_pos"){
		extposgrado8=file_extension;
archivoposgrado8=e.target.result;
	document.getElementById("pTituloArchivoPosGrado8").style.display=""
}


}
reader.readAsDataURL(input.files[0]);
}

function SeleccionarExistenciaArchivoCarreraPosGrado(datos){
	var control=datos.id
	if(control=="inptArchivosPosGradoCertificadoNac"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoCertificado").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoCertificado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado1").style.display="none"
			archivoposgrado1="";
      extposgrado1="";
		}
	}
	
	if(control=="inptArchivosPosGradoFichaAcademico"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoFichaAcademico").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoFichaAcademico").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado2").style.display="none"
			archivoposgrado2="";
            extposgrado2="";
		}
	}
	
	if(control=="inptArchivosPosGradoContratoMatricula"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoContratoMatricula").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoContratoMatricula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado3").style.display="none"
			archivoposgrado3="";
            extposgrado3="";
		}
	}
	
	if(control=="inptArchivosPosGradoTituloGrado"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoTituloGrado").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoTituloGrado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado4").style.display="none"
			archivoposgrado4="";
            extposgrado4="";
		}
	}
	
	if(control=="inptArchivosPosGradoCopiaCedula"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoCopiaCedula").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoCopiaCedula").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado5").style.display="none"
			archivoposgrado5="";
            extposgrado5="";
		}
	}
	
	if(control=="inptArchivosPosGradoFotoTipoCarnet"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoFotoTipoCarnet").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoFotoTipoCarnet").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado6").style.display="none"
			archivoposgrado6="";
            extposgrado6="";
		}
	}
	
	if(control=="inptArchivosPosGradoSolicitudMatriculacion"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoSolicitudMatriculacion").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoSolicitudMatriculacion").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado7").style.display="none"
			archivoposgrado7="";
            extposgrado7="";
		}
	}
	
	if(control=="inptArchivosPosGradoCertificadoGrado"){
		if(datos.value=="Si"){
			document.getElementById("btnExplPosArchivoCertificadoGrado").style.backgroundColor=""
		}else{
			document.getElementById("btnExplPosArchivoCertificadoGrado").style.backgroundColor="#cbcbcb"
			document.getElementById("pTituloArchivoPosGrado8").style.display="none"
			archivoposgrado8="";
            extposgrado8="";
	 
		}
	}
	
}


function  subirArchivosPosGrado(){
	
	if(idAlumnoFkSubirArchivoCarrera=="" || CodListadoCarreraFkSubirArchivoCarrera==""){
			alertmensaje("FALTO SELECCIONAR UN REGISTRO")
			return
		}
		var certificadonace=document.getElementById("inptArchivosPosGradoCertificadoNac").value
		var fichaacademica=document.getElementById("inptArchivosPosGradoFichaAcademico").value
		var contratomatricula=document.getElementById("inptArchivosPosGradoContratoMatricula").value
		var titulogrado=document.getElementById("inptArchivosPosGradoTituloGrado").value
		var copiacedula=document.getElementById("inptArchivosPosGradoCopiaCedula").value
		var fototipocarnet=document.getElementById("inptArchivosPosGradoFotoTipoCarnet").value
		var solicitudMatriculacion=document.getElementById("inptArchivosPosGradoSolicitudMatriculacion").value
		var certificadoestudio=document.getElementById("inptArchivosPosGradoCertificadoGrado").value
		var titulogradofisico=document.getElementById("inptArchivosPosGradoTituloGradoFisico").value
		var certificadoestudioFisico=document.getElementById("inptArchivosPosGradoCertificadoGradoFisico").value
		var copiacedulaFisico=document.getElementById("inptArchivosPosGradoCopiaCedulaFisico").value
		
	verCerrarEfectoCargando("1")
	  var datos = new FormData();
			obtener_datos_user();
			 datos.append("useru" , userid)
			 datos.append("passu" , passuser)
			 datos.append("navegador" , navegador)
			 datos.append("funt", "subirarchivo")
			 datos.append("certificado_nac" , certificadonace)
			  datos.append("ficha_academica" , fichaacademica)
			 datos.append("contrato_matriculacion" , contratomatricula)
			 datos.append("copia_autenticada_de_titulo_grado" , titulogrado)
			 datos.append("copia_de_cedula_autenticada" , copiacedula)
			 datos.append("foto_tipo_carnet" , fototipocarnet)
			 datos.append("solicitud_matriculacion" , solicitudMatriculacion)
			 datos.append("certif_de_estudio_de_grado" , certificadoestudio)
			 datos.append("certif_de_estudio_de_grado_fisico" , certificadoestudioFisico)
			 datos.append("copia_autenticada_de_titulo_grado_fisico" , titulogradofisico)
			 datos.append("copia_de_cedula_autenticada_fisico" , copiacedulaFisico)
			 datos.append("idalumnoFK" , idAlumnoFkSubirArchivoCarrera)
			 datos.append("Cod_listadecarrerasFK" , CodListadoCarreraFkSubirArchivoCarrera)
			datos.append("archivogrado1", archivoposgrado1)
			datos.append("extgrado1", extposgrado1)
			datos.append("archivogrado2", archivoposgrado2)
			datos.append("extgrado2", extposgrado2)
			datos.append("archivogrado3", archivoposgrado3)
			datos.append("extgrado3", extposgrado3)
			datos.append("archivogrado4", archivoposgrado4)
			datos.append("extgrado4", extposgrado4)
			datos.append("archivogrado5", archivoposgrado5)
			datos.append("extgrado5", extposgrado5)
			datos.append("archivogrado6", archivoposgrado6)
			datos.append("extgrado6", extposgrado6)
			datos.append("archivogrado7", archivoposgrado7)
			datos.append("extgrado7", extposgrado7)
			datos.append("archivogrado8", archivoposgrado8)
			datos.append("extgrado8", extposgrado8)
			
			
			var OpAjax= $.ajax({
			
			data: datos,
			url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoPosGrado.php",
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
						verCerrarEfectoCargando("")
					manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					 return false;
			},
			success: function(responseText)
			{
			  	 verCerrarEfectoCargando("")
			Respuesta=responseText;			
				console.log(Respuesta)
		try{
				var datos = $.parseJSON(Respuesta); 
          Respuesta=datos["1"];  
		   Respuesta=respuestaJqueryAjax(Respuesta)
			if (Respuesta == true) {
				
				
				alertmensaje("DATOS CARGADO CORRECTAMENTE...")
				buscararchivosposgrado()
			}
			
			}catch(error)
				{
					 alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
				}
		 
					
			}
			});
			
	
}


function Aplicar_Cambios_Archivos_grado(datos) {
     
	 
	 if(elementoscargaraehivos==""){
		 alertmensaje("FALTO SELECCIONAR UN REGISTRO")
		 return false;
	 }
	
	var datos = new FormData();
	
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_9"]');
	var inpt=$(elemento).children('input[id="inp_solicitud_matriculacion"]');
    datos.append("solicitud_matriculacion", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_8"]');
	var inpt=$(elemento).children('input[id="inp_contrato_matriculacion"]');
    datos.append("contrato_matriculacion", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_6"]');
	var inpt=$(elemento).children('input[id="inp_foto_tipo_carnet"]');
    datos.append("foto_tipo_carnet", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_7"]');
	var inpt=$(elemento).children('input[id="inp_ficha_academica"]');
    datos.append("ficha_academica", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_12"]');
	var inpt=$(elemento).children('input[id="inp_copia_de_cedula_autenticada"]');
    datos.append("copia_de_cedula_autenticada", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_13"]');
	var inpt=$(elemento).children('input[id="inp_copia_de_cedula_autenticada_fisico"]');
    datos.append("copia_de_cedula_autenticada_fisico", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_10"]');
	var inpt=$(elemento).children('input[id="inp_copia_autenticada_de_titulo_bachiller"]');
    datos.append("copia_autenticada_de_titulo_bachiller", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_11"]');
	var inpt=$(elemento).children('input[id="inp_certif_de_estudio_de_bachillerato_orinal_visado"]');
    datos.append("certif_de_estudio_de_bachillerato_orinal_visado", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_14"]');
	var inpt=$(elemento).children('input[id="inp_certif_de_estudio_de_bachillerato_orinal_visado_fisico"]');
    datos.append("certif_de_estudio_de_bachillerato_orinal_visado_fisico", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_5"]');
	var inpt=$(elemento).children('input[id="inp_certificado_nac"]');
    datos.append("certificado_nac", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_15"]');
	var inpt=$(elemento).children('input[id="inp_ubicacion"]');
    datos.append("ubicacion", $(inpt).val())
 
   
	  obtener_datos_user();
	  verCerrarEfectoCargando("1")

	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("idalumnoFK", idAlumnoFkSubirArchivoCarrera)
	datos.append("Cod_listadecarrerasFK", CodListadoCarreraFkSubirArchivoCarrera)
    datos.append("funt", "editarexitencia2")
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoGrado.php",
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

function Aplicar_Cambios_Archivos_pos_grado(datos) {
     
	 
	 if(elementoscargaraehivos==""){
		 alertmensaje("FALTO SELECCIONAR UN REGISTRO")
		 return false;
	 }
	
	var datos = new FormData();
	
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_5"]');
	var inpt=$(elemento).children('input[id="inp_contrato_matriculacion"]');
    datos.append("contrato_matriculacion", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_6"]');
	var inpt=$(elemento).children('input[id="inp_solicitud_matriculacion"]');
    datos.append("solicitud_matriculacion", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_7"]');
	var inpt=$(elemento).children('input[id="inp_foto_tipo_carnet"]');
    datos.append("foto_tipo_carnet", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_8"]');
	var inpt=$(elemento).children('input[id="inp_ficha_academica"]');
    datos.append("ficha_academica", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_9"]');
	var inpt=$(elemento).children('input[id="inp_copia_de_cedula_autenticada"]');
    datos.append("copia_de_cedula_autenticada", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_10"]');
	var inpt=$(elemento).children('input[id="inp_copia_de_cedula_autenticada_fisico"]');
    datos.append("copia_de_cedula_autenticada_fisico", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_11"]');
	var inpt=$(elemento).children('input[id="inp_copia_autenticada_de_titulo_bachiller"]');
    datos.append("copia_autenticada_de_titulo_grado", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_12"]');
	var inpt=$(elemento).children('input[id="inp_copia_autenticada_de_titulo_grado_fisico"]');
    datos.append("copia_autenticada_de_titulo_grado_fisico", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_13"]');
	var inpt=$(elemento).children('input[id="inp_certif_de_estudio_de_grado"]');
    datos.append("certif_de_estudio_de_grado", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_14"]');
	var inpt=$(elemento).children('input[id="inp_certif_de_estudio_de_grado_fisico"]');
    datos.append("certif_de_estudio_de_grado_fisico", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_15"]');
	var inpt=$(elemento).children('input[id="inp_certificado_nac"]');
    datos.append("certificado_nac", $(inpt).val())
	var elemento=$(elementoscargaraehivos).children('td[id="td_datos_16"]');
	var inpt=$(elemento).children('input[id="inp_ubicacion"]');
    datos.append("ubicacion", $(inpt).val())
 
   
	  obtener_datos_user();
	  verCerrarEfectoCargando("1")

	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("idalumnoFK", idAlumnoFkSubirArchivoCarrera)
	datos.append("Cod_listadecarrerasFK", CodListadoCarreraFkSubirArchivoCarrera)
    datos.append("funt", "editarexitencia2")
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoPosGrado.php",
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



function editarExistenciaarchivogrado(datos) {
     
	
     var valor=datos.value
     var tablename=$(datos).attr("name")
	 
     var datos = new FormData();
	  obtener_datos_user();
	  verCerrarEfectoCargando("1")

	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("tablename", tablename)
	datos.append("valor", valor)
	datos.append("idalumnoFK", idAlumnoFkSubirArchivoCarrera)
	datos.append("Cod_listadecarrerasFK", CodListadoCarreraFkSubirArchivoCarrera)
    datos.append("funt", "editarexitencia")
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoGrado.php",
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

function editarExistenciaarchivoposgrado(datos) {
     
	
     var valor=datos.value
     var tablename=$(datos).attr("name")
	 
     var datos = new FormData();
	  obtener_datos_user();
	  verCerrarEfectoCargando("1")

	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("tablename", tablename)
	datos.append("valor", valor)
	datos.append("idalumnoFK", idAlumnoFkSubirArchivoCarrera)
	datos.append("Cod_listadecarrerasFK", CodListadoCarreraFkSubirArchivoCarrera)
    datos.append("funt", "editarexitencia")
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMCargaArchivoPosGrado.php",
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




/*
CARGAR NOTAS
*/
function vercerrarcrearcargarnotas(d){
	document.getElementById("divCargarNotas").style.display = 'none'
	if (d == "1") {
		document.getElementById("divCargarNotas").style.display = ''
	}
	
}
function MinimizarVentanaCargarNota(d){
	document.getElementById("divCargarNotas").style.display = 'none'
}


	 
/*OTROS*/
function QuitarSeparadorMil(inputs){
	var i=inputs.value;
i=i.toString().replace(/\./g,'');
	i=i.replace(',','.')
	return i;

	
}
function QuitarSeparadorMilValor(inputs) {
    if (!inputs) return 0; // vacíos, null o undefined se convierten a 0
    var i = inputs.toString().trim(); // eliminar espacios al inicio/final
    i = i.replace(/\./g,'');          // quitar separador de miles
    i = i.replace(',', '.');          // convertir coma decimal a punto
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


/*
Control de acceso 
*/
function controlacceso(frm,accion){
	
	return true;
	// if(accesosuser[frm][accion]!="SI"){
		
		  // alertmensaje("NO TIENES PERMISO PARA ACCEDER")
		  // return false;
	// }else{
		// return true;
	// }
	
	
	
}

function removeToMenu(){
	var controlacademico=0;
	var controlCalif=0;
	var controlalumno=0;
	//SISTEMA
	// if( accesosuser["VERUSUARIO"]["accion"]!="SI")
	// {
		// $("div[id=divMenuUsuario]").remove()
		
	// }
	// if( accesosuser["VERMISDATOS"]["accion"]!="SI")
	// {
		// $("div[id=divMenuMisDatos]").remove()
	
	// }
	// ACADEMICO
	// if( accesosuser["VERFILIAL"]["accion"]!="SI")
	// {
		// $("div[id=divMenuFilial]").remove()
		// controlacademico=controlacademico+1;
		
	// }
	// if( accesosuser["VERCARRERA"]["accion"]!="SI")
	// {
		// $("div[id=divMenuCarrera]").remove()
		// controlacademico=controlacademico+1;

	// }
	// if( accesosuser["VERFACULTAD"]["accion"]!="SI")
	// {
		// $("div[id=divMenuFacultad]").remove()
		// controlacademico=controlacademico+1;
	
	// }
	// if( accesosuser["VERDOCENTES"]["accion"]!="SI")
	// {
		// $("div[id=divMenuDocentes]").remove()
		// controlacademico=controlacademico+1;
		
	// }
	// if( accesosuser["VERCATEDRA"]["accion"]!="SI")
	// {
		// $("div[id=divMenuDatosdeCatedras]").remove()
		// controlacademico=controlacademico+1;
		
	// }
	// if( accesosuser["VERMALLA"]["accion"]!="SI")
	// {
		// $("div[id=divMenuAsignarMallaCurricular]").remove()
		// controlacademico=controlacademico+1;
		
		
	// }
	// if( accesosuser["VERASIGNARCARRERA"]["accion"]!="SI")
	// {
		// $("div[id=divMenuAsignarCarrera]").remove()
		// controlacademico=controlacademico+1;

	// }
	// if( accesosuser["VERASIGNARDOCENTES"]["accion"]!="SI")
	// {
		// $("div[id=divAbmAsignarDocente]").remove()
		// $("div[id=divAbmAsignarDocente2]").remove()
		// controlacademico=controlacademico+1;
		
	// }
	// if(controlacademico==8){
		// document.getElementById("divMenuAcademico").style.display="none"
	// }
	
	// CALIFICACIONES
	// if( accesosuser["VERCARGARCALIF"]["accion"]!="SI")
	// {
		// $("div[id=divMenuCrearListadoNotas1]").remove()
		// $("div[id=divMenuCrearListadoNotas2]").remove()
		// controlCalif=controlCalif+1;
		
	// }
	// if(controlCalif==1){
		// document.getElementById("divMenuCalificaciones").style.display="none"
	// }
	// ALUMNOS
	
	// if( accesosuser["VERALUMNOS"]["accion"]!="SI")
	// {
		// $("div[id=divMenuDatosdelAlumno1]").remove()
		
		// $("td[id=tdNuevoAlumno]").remove()
		// controlalumno=controlalumno+1;
	// }	
	// if( accesosuser["VERMATRICULACION"]["accion"]!="SI")
	// {
		// $("div[id=divMenuMatricularAlumno]").remove()
		// controlalumno=controlalumno+1;
		
	// }	
	// if( accesosuser["VERINFORMEMATRICULACION"]["accion"]!="SI")
	// {
		// $("div[id=divMenuConsultaAlumnosMatriculados]").remove()
		// controlalumno=controlalumno+1;
			
	// }	
	
	// if( accesosuser["CARGAARCHIVOSMATRICULADOS"]["accion"]!="SI")
	// {
		// $("div[id=divMenuCargarArchivos]").remove()
		// controlalumno=controlalumno+1;
		
	// }	
	// if( accesosuser["VERINFORMEMATRICULACION"]["accion"]!="SI")
	// {
		// $("div[id=divMenuConsultaAlumnosMatriculados]").remove()
		// controlalumno=controlalumno+1;
		
	// }
	
	
	// if(controlalumno==5){
		// document.getElementById("divMenuAlumnos").style.display="none"
	// }
	 
	
		
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
	
	if( accesosuser["VERESTADOALUMNOS"]["accion"]!="SI")
	{
		document.getElementById("trCheckListadoAlumno").style.display="none"
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
	if( accesosuser["VERLISTADONIVELES"]["accion"]!="SI")
	{
		document.getElementById("divMenuListadoNiveles").style.display="none"
		
	}
	if( accesosuser["VERLISTADOACCESO"]["accion"]!="SI")
	{
		document.getElementById("divMenuListadoAcceso").style.display="none"
		
	}
	
	
		
}

function removeToBtn(){
	
	
		
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
	var kb=obtenerTotalKbTables("divBuscadorListaCatedra");
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
	var pagina="";
   document.getElementById("divTbAdmin").innerHTML=""
   	var kb=obtenerTotalKbTables("divBuscadorUsuario");
	
	var porc=((kb*100)/totalkb).toFixed(2)
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		pagina="<table style='width:90%' id='Admin_divBuscadorUsuario'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Listado de Usuario ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorUsuario' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}
	
	var kb=obtenerTotalKbTables("divBuscadorAbmFilial");
	var porc=((kb*100)/totalkb).toFixed(2)
	
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		pagina="<table style='width:90%' id='Admin_divBuscadorAbmFilial'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Listado de Filial ("+kb+" / kb )</p>"
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
		pagina="<table style='width:90%' id='Admin_divBuscadorListaCarrera'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Listado de carreras ("+kb+" / kb )</p>"
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
		pagina="<table style='width:90%' id='Admin_divBuscadorListaFacultad'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Listado de Facultad ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorListaFacultad' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
+"</td>"
+"</tr>"
+"</table>";
document.getElementById("divTbAdmin").innerHTML+=pagina
	}

	var kb=obtenerTotalKbTables("divBuscadorListaCatedra");
	var porc=((kb*100)/totalkb).toFixed(2)	
	
	if(Number(porc)>Number(0)){
		var kb=((kb*1)/1024).toFixed(2)
		pagina="<table style='width:90%' id='Admin_divBuscadorListaCatedra'>"
+"<tr>"
+"<td style='width:1%'>"
+"<img src='/GoodTechnologyEPNSA/iconos/etiquetatrabajos.png' class='imgIconH' />"
+"</td>"
+"<td style='width:90%'>"
+"<p class='pTitulo5' style='margin-left:-23px' >Listado de Catedra ("+kb+" / kb )</p>"
+"<div class='divBarraAmin1'><div class='divBarraAmin2' style='width:"+porc+"%'></div></div>"
+"</td>"
+"<td style='width:10%;text-align:center'>"
+"<input name='divBuscadorListaCatedra' type='button' value='Finalizar' class='btnFinalizarAdmin' onclick='finalizarTarea(this)'>"
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
	
	return kbTotal
	
}	
function finalizarTarea(datos){
	var doc=$(datos).attr("name")
	document.getElementById(doc).innerHTML="";
	$("table[id=Admin_"+doc+"]").remove()
	cargarAdminTareas()
	
}


function ordenimpresion(ventana){
		var pagina=""
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
  var fechaimpresion=f.getFullYear()+"-"+mes+"-"+dia;
  document.getElementById("divCabeceraImpresiones").innerHTML=""
document.getElementById("divPieImpresiones").innerHTML=""
document.getElementById("tbTitulosImpresiones").innerHTML=""
document.getElementById("tbDatosImpresiones").innerHTML=""

if (ventana == "facturascargadas") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:15%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha Inicio</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarFacturasCargadas7").value+"</p>"
+"</td>"
+"<td style='width:15%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha Fin</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarFacturasCargadas8").value+"</p>"
+"</td>"
+"<td style='width:15%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarFacturasCargadas1").value+"</p>"
+"</td>"
+"<td style='width:15%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >FACTURAS CARGADAS</h1><br></center>"

paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Registro </b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroReportFacturasCargadas").value+"</p>"
+"</td>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Total</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptTotalReportFacturasCargadas").value+"</p>"
+"</td>"
+"<td style='width:60%;text-align:left'>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdTituloPrintFacturaCargada").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorReportFacturasCargadas").innerHTML

}
if (ventana == "listadeudores") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarDeudasAlumnos2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarDeudasAlumnos4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>C.I.</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarDeudasAlumnos1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Nombre y Apellido</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarDeudasAlumnos3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >LISTA DE DEUDORES</h1><br></center>"

paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Registro </b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroTotalDeudaAlumno").value+"</p>"
+"</td>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Total</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptTotalDeudaAlumno").value+"</p>"
+"</td>"
+"<td style='width:60%;text-align:left'>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdTituloImprimirListaDeudores").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorDeudasAlumnos").innerHTML

}
if (ventana == "listadealumnos") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAbmAlumnos2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAbmAlumnos3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>C.I.</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAbmAlumnos1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Nombre</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAbmAlumnos4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Apellido</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAbmAlumnos5").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >LISTA DE ALUMNOS</h1><br></center>"

paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Registro </b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroTotalAlumno").value+"</p>"
+"</td>"

+"<td style='width:60%;text-align:left'>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdImpresionlistaAlumnos").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorAbmAlumnos").innerHTML

}

if (ventana == "facturashabilitadas") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha Inicio</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas7").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha Fin</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas8").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Timbrado</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial Origen</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial Destino</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas5").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Estado</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscadorReportFacturasHabilitadas6").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >FACTURAS CARGADAS</h1><br></center>"

paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Registro </b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroReportFacturasHabilitadas").value+"</p>"
+"</td>"
+"<td style='width:60%;text-align:left'>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdImprimirNroFacturaHabilitadas").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorReportFacturasHabilitadas").innerHTML

}

if (ventana == "asignardocente") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Catedra</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Docente</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Año</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes5").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Curso</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes6").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Semestre</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes7").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Turno</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes8").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Sección</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarDocentes9").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >ASIGNACIÓN DE DOCENTES</h1><br></center>"

paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Registro </b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroAsignarDocentes").value+"</p>"
+"</td>"
+"<td style='width:60%;text-align:left'>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdImprimirAsignarDocente").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorAsignarDocentes").innerHTML

}

if (ventana == "alumnomatriculado") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>C.I.</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Alumno</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Año</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado5").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Curso</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado6").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Semestre</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptReporAlumnoMatriculado7").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >ALUMNOS MATRICULADOS</h1><br></center>"

paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Registro </b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroReportAlumnMatric").value+"</p>"
+"</td>"
+"<td style='width:60%;text-align:left'>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("TdTituloImprimirAlumnosMatriculados").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorReportAlumnosMatriculados").innerHTML

}

if (ventana == "malla") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarMalla2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Catedra</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarMalla1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Año</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarMalla3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Curso</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarMalla4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Semestre</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarMalla5").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >MALLA CURRICULAR</h1><br></center>"

paginaPie =""

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("TdTituloImprimirMalla").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorAsignarMalla").innerHTML

}

if (ventana == "asignarcarrera") {
		
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarCarrera1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Facultad</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarCarrera2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial Origen</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarCarrera3").value+"</p>"
+"</td>"
 
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >MALLA CURRICULAR</h1><br></center>"

paginaPie =""

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdImprimirAsignarCarrera").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorAsignarCarrera").innerHTML

}
if (ventana == "asignarAranceles") {
	if(document.getElementById('inptSeleccTipoAsignarArancel1').checked==true){	
		pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel1").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel2").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Concepto</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel3").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Semestre</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel4").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Curso</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel5").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Año</b> </p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel6").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >ARANCELES</h1><br></center>"

paginaPie =""

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdTituloImprimirTipoArancel1").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorAsignarArancel1").innerHTML
	}else{
	

	pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Filial</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel23").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Carrera</b></p>"
+"<p class='pTituloC' >"+document.getElementById("inptBuscarAsignarArancel21").value+"</p>"
+"</td>"
+"<td style='width:10%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table><br><center><h1 class='pTituloD' >ARANCELES</h1><br></center>"

paginaPie =""

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdTituloImprimirTipoArancel2").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("divBuscadorAsignarArancel2").innerHTML

	
	}
}

var documento=document.getElementById("DivImpresiones").innerHTML;

	 localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "reporte");
	 window.open("/GoodTechnologyEPNSA/system/reportInformes.html");

}


/*LIMPIAR CAMPOS*/
function vaciar(txt){
	document.getElementById(txt).value="";
}

function ExporarAsignacionDocentes() {
	$("#divBuscadorAsignarDocentes").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}

function ExporarFacturasCargadas() {
	$("#divBuscadorReportFacturasCargadas").table2excel({
       // exclude CSS class
       exclude: ".noExl",
       name: "Excel Document Name"
       }); 
}


///////////////////////js TITULO DOCENTE/////////////////////////

function verCerrarFrmTituloDocente(d){	
	// if(controlacceso("VERDOCENTES","accion")==false){ return;		}	
	if(d=="1" ){		
		if(idAbmListaDocente!=""){
		document.getElementById("divAbmTituloDocente").style.display="";
		BuscarAbmTituloDocente()
			
		}	
	}else{
	document.getElementById("divAbmTituloDocente").style.display="none";
	}
}

function BuscarAbmTituloDocente() {
// if(controlacceso("BUSCARDOCENTES","accion")==false){ return;		}

	document.getElementById("divBuscadorTituloDocente").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroTituloDocente").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAbmListaDocente,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMTituloDocente.php",
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
			document.getElementById("divBuscadorTituloDocente").innerHTML = ''
			document.getElementById("lblNroRegistroTituloDocente").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorTituloDocente").innerHTML = ''
			document.getElementById("lblNroRegistroTituloDocente").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorTituloDocente").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroTituloDocente").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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

var cod_titulo_docente="";
function ObtenerdatosTituloDocente(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});	
	cod_titulo_docente = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptTituloDocente').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptRegistroSeleccionadoTituloDocente').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptTipotituloDocente').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCarreraDocente').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById("btnAbmTituloDocente").value="Guardar Cambios"
    document.getElementById("btnEliminarTituloDocente").style.backgroundColor="#ff0000"
   
}


function LimpiarCampostituloDocente(){
	document.getElementById("inptTituloDocente").value=""
	document.getElementById("inptTipotituloDocente").value="Grado"
	document.getElementById("inptCarreraDocente").value=""
	document.getElementById('inptRegistroSeleccionadoTituloDocente').value = ""
	cod_titulo_docente=""
	document.getElementById("btnAbmTituloDocente").value="Guardar Datos"
    document.getElementById("btnEliminarTituloDocente").style.backgroundColor="#ffcece"
}



function VerificarDatosTituloDocente(){
	
	var inptTituloDocente = document.getElementById("inptTituloDocente").value
	var inptTipotituloDocente = document.getElementById("inptTipotituloDocente").value
	var inptCarreraDocente = document.getElementById("inptCarreraDocente").value
	
	if(inptTituloDocente==""){
		document.getElementById("inptTituloDocente").focus()
		alertmensaje("Falto ingresar el Titulo")
		return
	}
	if(inptCarreraDocente==""){
		document.getElementById("inptCarreraDocente").focus()
		alertmensaje("Falto ingresar a que carrera corresponde el titulo")
		return
	}

	
	var accion = "";
	if (idAbmListaDocente != "") {
		accion = "editar";
		// if(controlacceso("EDITARDOCENTES","accion")==false){ return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARDOCENTES","accion")==false){ return;		}
	}
	AbmTituloDocente(inptTituloDocente,inptTipotituloDocente,inptCarreraDocente,idAbmListaDocente,cod_titulo_docente, accion)
}
function AbmTituloDocente(titulo,tipo,carrera,IdDocente,IdTitulo, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("cod_titulo_docente", IdTitulo)
	datos.append("descripcion", titulo)
	datos.append("tipo", tipo)
	datos.append("cod_listadoProfesoresFK", IdDocente)
	datos.append("carrera", carrera)

	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMTituloDocente.php",
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
		
                   LimpiarCampostituloDocente()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmTituloDocente()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}



function EliminarTituloDecente() {
	verCerrarEfectoCargando("1")

	
	if (cod_titulo_docente=="") {
		alertmensaje("DEBES SELECCIONAR UN REGISTRO PARA ELIMINAR...")
		return;
		}
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "Eliminar")
	datos.append("cod_titulo_docente", cod_titulo_docente)

	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMTituloDocente.php",
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
		
					LimpiarCampostituloDocente()
					alertmensaje("DATOS ELIMINADO CORRECTAMENTE...")
					BuscarAbmTituloDocente()
					
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}

//Las dos funciones de abajo tenes que reemplazar con el que tenes luego por que ahi programe el boton que llama al titulo
// en html programe el boton en la vista de listadodocente 
//y el formilario esta en la linea 1510 al 1615


/*
function LimpiarCamposListaDocente(){
	document.getElementById("inptDocumentoListaDocente").value=""
	document.getElementById("inptNombreListaDocente").value=""
	document.getElementById("inptTelefListaDocente").value=""
	document.getElementById("inptCorreoListaDocente").value=""
	document.getElementById("inptRucListaDocente").value=""
	document.getElementById("inptEstadoListaDocente").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListadoDocente").value=""
	idAbmListaDocente=""
	document.getElementById("btnAbmListaDocente").value="Guardar Datos"
	document.getElementById("btnEditarDatosDocente").style.backgroundColor="#b5f5b7"
	document.getElementById("btnEliminarDatosDocente").style.backgroundColor="#ffcece"
	
	
	document.getElementById("btnTituloDatosDocente").style.backgroundColor="#b5f5b7"
    
}
function ObtenerdatosAbmListaDocente(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaDocente = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListadoDocente').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptDocumentoListaDocente').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaDocente').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptTelefListaDocente').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptCorreoListaDocente').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptRucListaDocente').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptEstadoListaDocente').value = $(datostr).children('td[id="td_datos_5"]').html();
     document.getElementById("btnAbmListaDocente").value="Editar Datos"
     document.getElementById("btnEditarDatosDocente").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosDocente").style.backgroundColor="red"
	 
	 document.getElementById("btnTituloDatosDocente").style.backgroundColor="#4CAF50"

}



*/



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////7
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////



/*
COBRAR ARANCELES
*/
function verCerrarFrmCobrarAranceles(d){
	document.getElementById("divMinimizadoCobranzas").style.display="none";
	document.getElementById("divMinimizadoCobranzas2").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERCOBRANZAS","accion")==false){ return;}

	if(d=="1"){
		minimizartodaventanaabierto()
		document.getElementById("divAbmCobrarAranceles").style.display="";
		document.getElementById("tdEfectoAbmCobrarAranceles").className="magictime slideDownReturn"
		limpiarCamposCobrarAranceles()
	}else{
	//document.getElementById("divAbmCobrarAranceles").style.display="none";
		document.getElementById("tdEfectoAbmCobrarAranceles").className="magictime vanishOut"
		$("div[id=divAbmCobrarAranceles]").fadeOut(500);	
		limpiarCamposCobrarAranceles()
	}
}
function verCerrarCambiarRazonSocial(d){
	
	if(d=="1"){
		
	document.getElementById("divCambiarRazonSocial").style.display="";
 document.getElementById("tdEfectoRazonSocial").className="magictime slideLeftReturn"
	
	}
	if(d=="2"){
	document.getElementById("tdEfectoRazonSocial").className="magictime slideRight"
	$("div[id=divCambiarRazonSocial]").fadeOut(500);	
	document.getElementById("btnCambiarRazonSocial").style.backgroundColor="#1766ed";
	}
	if(d=="3"){
	document.getElementById("tdEfectoRazonSocial").className="magictime slideRight"
	$("div[id=divCambiarRazonSocial]").fadeOut(500);	
	document.getElementById("btnCambiarRazonSocial").style.backgroundColor="#afafaf";
	}
}
function MinimizarVentanaCobranzas(){
	document.getElementById("tdEfectoAbmCobrarAranceles").className="magictime slideDown"
	$("div[id=divAbmCobrarAranceles]").fadeOut(500);	

	document.getElementById("divMinimizadoCobranzas").style.display="";
	document.getElementById("divMinimizadoCobranzas2").style.display="";
}


function ControlTipoArancelCobranzas(){
	document.getElementById("inptCodArancelCobrarAranceles").value="";
		document.getElementById("inptNomArancelCobrarAranceles").value="";
		controlNombreArancelCobranza="";
		document.getElementById("inptPrecioArancelCobrarAranceles").value="";
		document.getElementById("table_vista_aranceles_cobrar_aranceles").innerHTML="";
		document.getElementById("btnMasDetalleVenta").style.display="none";
		document.getElementById("btnAddToDetalleVenta").style.backgroundColor="#cccccc";
		document.getElementById("tdArancelesDeudasAnterior").style.display="none"
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
	// if(controlacceso("VERCARGADEFACTURAS","accion")==false){ return;		}

	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmCargarFacturas").style.display="";
	document.getElementById("tdEfectoAbmCargarFactura").className="magictime slideDownReturn"
	
	}else{
	//document.getElementById("divAbmCargarFacturas").style.display="none";
document.getElementById("tdEfectoAbmCargarFactura").className="magictime vanishOut"
	$("div[id=divAbmCargarFacturas]").fadeOut(500);	
	LimpiarCamposCargaFactura()
	}
}




var duracioncarreracobrarcobranzas=""

function buscardatosdealumnoCobrarAranceles(){	
	var buscador = document.getElementById('inptDocAlumnosCobrarAranceles').value
    document.getElementById("inptNombreAlumnoCobrarAranceles").value="Buscando...";
    document.getElementById("inptNombreApellidoRazonSocial").value="";
    document.getElementById("inptRucRazonSocial").value="";
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
	document.getElementById("inptCursoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptCursoCobrarAranceles").style.color=""
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptAnhoCobrarAranceles").style.color=""
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptSemestreCobrarAranceles").style.color=""
				document.getElementById("btnCambiarRazonSocial").style.backgroundColor="#afafaf";
	CursoCobrarArancel=""
    anhoCobrarArancel=""
    duracioncarreracobrarcobranzas=""
	semestreCobrarArancel=""
	var f = new Date();
	 var anho = f.getFullYear();
	document.getElementById('inptDocAlumnosCobrarAranceles').value="Buscando..."
	document.getElementById("divBuscadorVistaAsignarAlumnos").innerHTML =""
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
	document.getElementById("inptRucRazonSocial").value="";
	document.getElementById("inptNombreApellidoRazonSocial").value="";
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
	duracioncarreracobrarcobranzas = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptDocAlumnosCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptRucRazonSocial').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreAlumnoCobrarAranceles').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptNombreApellidoRazonSocial').value = $(datostr).children('td[id="td_datos_2"]').html();
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
			facturaNombreAlumno=$(datostr).children('td[id="td_datos_2"]').html();
	
 facturaCiAlumno=$(datostr).children('td[id="td_datos_1"]').html();
 facturaDireccionAlumno=$(datostr).children('td[id="td_datos_10"]').html();
 facturaTelefAlumno="";
	BuscarArancelesCobrarAranceles()
	buscarnroexpedicionb()
					}else{
					
						document.getElementById("divVistaAsignarAlumnos").style.display=""
					document.getElementById("inptBuscarVistaAsignarAlumnos1").value=buscador
					// document.getElementById("inptBuscarVistaAsignarAlumnos8").value=anho
					
					ControlVistaMatriculados="CobrarAranceles"
					BuscarVistaAsignarAlumnos()
					
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


var anhoCobrarArancel="";
var CursoCobrarArancel="";
var semestreCobrarArancel="";
var TipoCobrarArancel="";
function ObtenerdatosVistaCargarArancelCobrar(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	document.getElementById('inptCodArancelCobrarAranceles').value = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptNomArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	controlNombreArancelCobranza = $(datostr).children('td[id="td_datos_1"]').html();
	montopagadoArancel = $(datostr).children('td[id="td_datos_12"]').html();
	tituloDescuentoFactura = $(datostr).children('td[id="td_datos_13"]').html();
	TipoCobrarArancel = $(datostr).children('td[id="td_datos_14"]').html();
	document.getElementById('inptCantArancelCobrarAranceles').value = "1";
	document.getElementById('inptPrecioArancelCobrarAranceles').value = "0";
		document.getElementById('inptPrecioArancelCobrarAranceles').disabled=false
	document.getElementById('inptTotalArancelCobrarAranceles').value = "0";
	document.getElementById('inptDescuentoArancelCobrarAranceles').value = "0";
	document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#1490f2';
		document.getElementById('btnMasDetalleVenta').style.display='none';
	document.getElementById("inptTipoArancelNombreAranceles").value=""
		if(document.getElementById('inptCodArancelCobrarAranceles').value=="0"){
			
			if(CursoCobrarArancel==1){
				alertmensaje("LOS ALUMNOS DEL PRIMER CURSO NO PUEDEN PAGAR DEUDA ANTERIOR", "#")
				return false;
			}
			
			document.getElementById("tdArancelesDeudasAnterior").style.display=""			
			if(CursoCobrarArancel!="CULMINADO"){
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
	     }else{
			 if(CursoCobrarArancel=="CULMINADO"){
				if(duracioncarreracobrarcobranzas!=""){
				document.getElementById("inptCursoCobrarAranceles").value=duracioncarreracobrarcobranzas;
				var se=Number(duracioncarreracobrarcobranzas)*2;
				document.getElementById("inptSemestreCobrarAranceles").value=se;
				document.getElementById("inptAnhoCobrarAranceles").value=Number(anhoCobrarArancel)-1;
				document.getElementById("inptCursoCobrarAranceles").style.backgroundColor="red"
				document.getElementById("inptCursoCobrarAranceles").style.color="#fff"
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor="red"
				document.getElementById("inptAnhoCobrarAranceles").style.color="#fff"
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor="red"
				document.getElementById("inptSemestreCobrarAranceles").style.color="#fff"		
				}
			}
		 }
	
}else{
	document.getElementById("tdArancelesDeudasAnterior").style.display="none"
				document.getElementById("inptCursoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptCursoCobrarAranceles").style.color=""
				document.getElementById("inptAnhoCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptAnhoCobrarAranceles").style.color=""
				document.getElementById("inptSemestreCobrarAranceles").style.backgroundColor=""
				document.getElementById("inptSemestreCobrarAranceles").style.color=""
					document.getElementById("inptCursoCobrarAranceles").value=CursoCobrarArancel
				document.getElementById("inptAnhoCobrarAranceles").value=anhoCobrarArancel
				document.getElementById("inptSemestreCobrarAranceles").value=semestreCobrarArancel
				
				document.getElementById("inptPrecioArancelCobrarAranceles").value=$(datostr).children('td[id="td_datos_8"]').html();
				document.getElementById('inptTotalArancelCobrarAranceles').value=$(datostr).children('td[id="td_datos_8"]').html();
			
}

}
var montopagadoArancel=0;
var montounitariodelarancel=0;
var cantidaddelarancel=0;
var tituloDescuentoFactura=0;
function ObtenerdatosVistaCargarArancelCobrarCuota(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	document.getElementById('inptCodArancelCobrarAranceles').value = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptNomArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	controlNombreArancelCobranza = $(datostr).children('td[id="td_datos_1"]').html();
	montopagadoArancel= $(datostr).children('td[id="td_datos_11"]').html();
	montounitariodelarancel= $(datostr).children('td[id="td_datos_6"]').html();
	tituloDescuentoFactura= $(datostr).children('td[id="td_datos_13"]').html();
	cantidaddelarancel= $(datostr).children('td[id="td_datos_7"]').html();
	TipoCobrarArancel= $(datostr).children('td[id="td_datos_14"]').html();
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
				document.getElementById('divVistaArancelesCobrar').style.display='flex';
				document.getElementById("inptTipoArancelNombreAranceles").value=""
				document.getElementById("tdArancelesDeudasAnterior").style.display="none"
	buscarCuotasaranceles2()
	
}
function ObtenerdatosVistaCargarArancelCobrarDerecho(datostr) {

	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	datostr.className = 'tableRegistroSelec'	
	document.getElementById('inptCodArancelCobrarAranceles').value = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptNomArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
	controlNombreArancelCobranza = $(datostr).children('td[id="td_datos_1"]').html();
	tituloDescuentoFactura = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptCantArancelCobrarAranceles').value = "1";
	document.getElementById('inptPrecioArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_12"]').html(); 
	document.getElementById('inptTotalArancelCobrarAranceles').value = $(datostr).children('td[id="td_datos_12"]').html(); 
	document.getElementById('inptPrecioArancelCobrarAranceles').disabled=true
  
	document.getElementById('inptDescuentoArancelCobrarAranceles').value = "0";
	document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#1490f2';
	document.getElementById('btnMasDetalleVenta').style.display='';
	document.getElementById('divVistaArancelesCobrar').style.display='';
	montopagadoArancel=0;
	// buscarmateriasderechoexamenaranceles2()
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
				document.getElementById("inptTipoArancelNombreAranceles").value=""
				document.getElementById("tdArancelesDeudasAnterior").style.display="none"
	
}







function verCuotasPagadasDesdeCobranzas(){

	document.getElementById('divVistaArancelesCobrar').style.display='';
		buscarCuotasaranceles2()
}
function verCerrarFrmVistaArancelesCobrar(d){
	if(d=="1"){
		document.getElementById('divVistaArancelesCobrar').style.display='flex';
	}else{
		document.getElementById('divVistaArancelesCobrar').style.display='none';
	}
}
function calcularTotalCobranzasCosto() {
    // Obtener valores
    var totalcobrar = document.getElementById("inptPrecioArancelCobrarAranceles").value || 0;
    var descuento = document.getElementById("inptDescuentoArancelCobrarAranceles").value || 0;
	if(descuento==""){descuento=0;}
    // Quitar separadores de miles y convertir a número, si está vacío se toma 0
    totalcobrar = Number(QuitarSeparadorMilValor(totalcobrar)) ;
    descuento = Number(QuitarSeparadorMilValor(descuento)) ;

    // Calcular resultado
    var resultado = totalcobrar - descuento;

    // Asignar valores con separador de miles
    document.getElementById("inptPrecioArancelCobrarAranceles").value = separadordemilesnumero(totalcobrar);
    document.getElementById("inptTotalArancelCobrarAranceles").value = separadordemilesnumero(resultado);
}


function obtenerTotalPagarFacturaDerechos(d){
	
	var precio=$(d).attr("value")
	var titulo=$(d).attr("style")
	var codListaCatedra=$(d).attr("id")
	d.disabled=false
	anhadirAranacelEnDetalleFacturaDerechoExamen(titulo,precio,codListaCatedra);
 
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
		"idAsignarAlumnosFk": idAsignarAlumnosFk,
		"idalumnofk": idAlumnosFacturaFk,
		"cod_filialFK": idFilialFactura,
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
function controlarnrofacturaexist() {

	var	valor=document.getElementById("inptPuntoExpedicionCargarFacturas").value
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionCargarFacturas]").children(":selected").attr("id")
	if(valor==""){
		return
	}
	var nrofacturacontrol=document.getElementById("inptFacturaNroCargarFacturas").value
	var nrofacturab=document.getElementById("inptFacturaNroCargarFacturas").value
	nrofacturacontrol=Number(nrofacturacontrol)
	var nrofactura=zeroFill(nrofacturab, 7) 
	nrofacturab=zeroFill(nrofacturab, 7) 
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
		"nrofacturab": nrofacturab,
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
	var inptNomArancelCobrarAranceles = controlNombreArancelCobranza
	
	var inptCantArancelCobrarAranceles = document.getElementById('inptCantArancelCobrarAranceles').value
	var inptPrecioArancelCobrarAranceles = document.getElementById('inptPrecioArancelCobrarAranceles').value
	var inptDescuentoArancelCobrarAranceles = document.getElementById('inptDescuentoArancelCobrarAranceles').value
	var inptTotalArancelCobrarAranceles = document.getElementById('inptTotalArancelCobrarAranceles').value
	var extrafactura =""	
	if (inptCodArancelCobrarAranceles == "") {
		alertmensaje("FALTO SELECCIONAR EL ARANCEL", "#")
		return false;
	}
	var titulodetalle="";
	var controlcuota=0;
	if(controlNombreArancelCobranza=="CUOTA"){
		controlcuota=1;
		var totalCuota=0;
		var montopagar=document.getElementById("inptPrecioArancelCobrarAranceles").value;
		var descuento=document.getElementById("inptDescuentoArancelCobrarAranceles").value;
		
		montopagar=QuitarSeparadorMilValor(montopagar);
		descuento=QuitarSeparadorMilValor(descuento);
		$("input[name=checkboxDerechoCuotaArancel]").each(function(i, elementohtml){
			if ($(elementohtml).is(':checked') ){
			if(montopagar>0){
       var apagar=elementohtml.value;
       var cuotanro=$(elementohtml).attr("style");
	   
	   if((Number(apagar) - Number(descuento))<=Number(montopagar)){
		   if(titulodetalle==""){
			   titulodetalle+=" "+cuotanro
		   }else{
			  titulodetalle+=" / "+cuotanro 
		   }
		   totalCuota=Number(totalCuota)+Number(apagar);
		   montopagar=montopagar-apagar;
		 
	   }else{
		   
		  if(titulodetalle==""){
			   titulodetalle+=" PARCIAL CUOTA  "+cuotanro
		   }else{
			 titulodetalle+=" / PARCIAL CUOTA "+cuotanro
		   }
		   
		  		   totalCuota=Number(totalCuota)+Number(apagar);

		   montopagar=0;
	   
	   
	   }
			}
			}
	   });
	  
		var montopagar=document.getElementById("inptPrecioArancelCobrarAranceles").value;
		montopagar=QuitarSeparadorMilValor(montopagar);
	   if(Number(montopagar)>Number(totalCuota) && TipoCobrarArancel!="Interes"){
		   alertmensaje("EL monto supera a la deuda")
		   return;
	   }
		
	}else{
		if(montopagadoArancel!="0"){
		var totalcobranza=montopagadoArancel;
		totalcobranza=QuitarSeparadorMilValor(totalcobranza);
		var montopagar=document.getElementById("inptPrecioArancelCobrarAranceles").value;
		montopagar=QuitarSeparadorMilValor(montopagar);
	
	   if(Number(montopagar)>Number(totalcobranza)  && TipoCobrarArancel!="Interes" ){
		   alertmensaje("EL monto supera a la deuda")
		   return;
	   }
		}
	}
	
	
	
	if(controlcuota==1){
		if(titulodetalle==""){
			
			alertmensaje("Falto seleccionar en nro de cuotas")
			return
		}
		titulodetalle="("+titulodetalle+")"
	}
 
	if(tituloDescuentoFactura!=""){
		// tituloDescuentoFactura="*"+tituloDescuentoFactura+"*"
	}
var pagina="<table class='tableRegistroSearch' border='0' cellspacing='0' cellpadding='0'>"
+"<tr id='tbSelecRegistro' onclick='SeleccionarDetalleOpcionesFactura(this)'  name='tdDetalleCobranzasOffline'>"
+"<td id='td_id_1' style='display:none'>"+inptCodArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_1' style='width:20%;'>"+inptNomArancelCobrarAranceles+titulodetalle+"</td>"
+"<td  id='td_datos_3' style='width:10%'>"+inptPrecioArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_9' style='width:5%'>"+inptDescuentoArancelCobrarAranceles+"</td>"
+"<td  id='td_datos_4' style='width:5%'>"+inptCantArancelCobrarAranceles+"</td>"
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
controlNombreArancelCobranza="";
document.getElementById('inptCantArancelCobrarAranceles').value=""
document.getElementById('inptPrecioArancelCobrarAranceles').value=""
document.getElementById('inptDescuentoArancelCobrarAranceles').value=""
document.getElementById('inptTotalArancelCobrarAranceles').value=""
document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById('btnMasDetalleVenta').style.display='none';
document.getElementById('inptNomArancelCobrarAranceles').focus();
tituloDescuentoFactura="";
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

function cambiarFocusControlNroFacturab(){
	document.getElementById("inptNomArancelCobrarAranceles").focus();
}
function controlarnrofacturaexistb() {
	 
	var	valor=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").text()
	//var	valor=document.getElementById("inptPuntoExpedicionCobrarAranceles").value
	var codPuntoExpe=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").attr("id")
	if(valor==""){
		return
	}
	
	if(codPuntoExpe==""){
		return
	}
	var nrofacturacontrol=document.getElementById("inptFacturaNroCobrarAranceles").value
	var nrofacturab=document.getElementById("inptFacturaNroCobrarAranceles").value
	nrofacturacontrol=Number(nrofacturacontrol)
	var nrofactura=zeroFill(nrofacturab, 7) 
	nrofacturab=zeroFill(nrofacturab, 7) 
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
		"nrofacturab": nrofacturab,
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
					var nrof = datos[4];
					ControlNroFactura = datos[3];					
					if(ControlNroFactura=="facturarepetida"){
						document.getElementById("inptFacturaNroCobrarAranceles").value=""
						alertmensaje("NRO DE FACTURA YA ESTA UTILIZADO")
						return
					}
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
					document.getElementById("inptFacturaNroCobrarAranceles").value = nrof
				    if(datos_buscados>1){
						document.getElementById("inptControlCobrarAranceles").style.backgroundColor="#FF5722"
						alertmensaje("ESTE NRO DE FACTURA YA ESTA REGISTRADO DENTRO DEL SISTEMA")
					}else{
						document.getElementById("inptControlCobrarAranceles").style.backgroundColor="";
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



function daysInMonth() {
	
	var  inputmonthFactura = document.getElementById('inputmonthFactura').value
	var  inputyearFactura = document.getElementById('inputyearFactura').value
  return new Date( inputyearFactura || new Date().getFullYear() , inputmonthFactura, 0).getDate();
}

function ObtenerFechaSelect(){	
	var diferencia= daysInMonth();
	var n=1
	var pagina="";
	var pagina2="";
	while (n <= diferencia) {
			
			pagina="<option  value='"+n+"'>"+n+"</option>";
			pagina2=pagina2 + pagina ;
			n ++;
		}
	document.getElementById('inputdayFactura').innerHTML = pagina2 
	var fecha = new Date();
	var dia=fecha.getDate(); 
	document.getElementById('inputdayFactura').value=dia; 
	
}

function fechaActualSelect(){
	var fecha = new Date();
	var anhoActual = fecha.getFullYear();
	var mesActual = fecha.getMonth();
	var diaActual = fecha.getDate();
	
	//document.getElementById('inputyearFactura').selectedIndex=anhoActual
	document.getElementById('inputmonthFactura').selectedIndex=mesActual
	document.getElementById('inputdayFactura').value=diaActual
	
}

function daysInMonthHistoricos() {
	
	var  inputmonthFactura = document.getElementById('inputmonthFacturaHistoricos').value
	var  inputyearFactura = document.getElementById('inputyearFacturaHistoricos').value
  return new Date( inputyearFactura || new Date().getFullYear() , inputmonthFactura, 0).getDate();
}

function ObtenerFechaSelectHistoricos(){	
	var diferencia= daysInMonth();
	var n=1
	var pagina="";
	var pagina2="";
	while (n <= diferencia) {
			
			pagina="<option  value='"+n+"'>"+n+"</option>";
			pagina2=pagina2 + pagina ;
			n ++;
		}
	// document.getElementById('inputdayFacturaHistoricos').innerHTML = pagina2 
	var fecha = new Date();
	var dia=fecha.getDate(); 
	// document.getElementById('inputdayFacturaHistoricos').value=dia; 
	
	
}

function fechaActualSelectHistoricos(){
	var fecha = new Date();
	var anhoActual = fecha.getFullYear();
	var mesActual = fecha.getMonth();
	var diaActual = fecha.getDate();
	
	//document.getElementById('inputyearFactura').selectedIndex=anhoActual
	// document.getElementById('inputmonthFacturaHistoricos').selectedIndex=mesActual
	// document.getElementById('inputdayFacturaHistoricos').value=diaActual
	
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
	var inptNomArancelCobrarAranceles = controlNombreArancelCobranza + " - "+titulo
	var inptCantArancelCobrarAranceles = 1
	var inptPrecioArancelCobrarAranceles = separadordemilesnumero(precio)
	var inptDescuentoArancelCobrarAranceles = document.getElementById('inptDescuentoArancelCobrarAranceles').value
	var inptTotalArancelCobrarAranceles = separadordemilesnumero(precio)
	if (inptCodArancelCobrarAranceles == "") {
		alertmensaje("FALTO SELECCIONAR EL ARANCEL", "#")
		return false;
	}
	var f = new Date()
	if(tituloDescuentoFactura!=""){
		// tituloDescuentoFactura="*"+tituloDescuentoFactura+"*"
	}
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
function obtenertituloArancelCuota1(Control){
	titulo="";
	if(Control=="1"){
		titulo="1";
	}
	if(Control=="2"){
		titulo="2";
	}
	if(Control=="3"){
		titulo="3";
	}
	if(Control=="4"){
		titulo="4";
	}
	if(Control=="5"){
		titulo="5";
	}
	if(Control=="6"){
		titulo="6";
	}
	return titulo;
}



var totalPagarRecibo='0'
function selectCuotaPagarCobranzas(){
	  var apagar=0;
	$("input[name=checkboxDerechoCuotaArancel]").each(function(i, elementohtml){
			if ($(elementohtml).is(':checked') ){
		
        apagar=Number(apagar)+Number(elementohtml.value);
      	totalPagarRecibo=apagar
	   }
			 
	   });
	   apagar=separadordemilesnumero(apagar)
	   document.getElementById("inptPrecioArancelCobrarAranceles").value=apagar
	   calcularTotalCobranzasCosto()
}
var controlNombreArancelCobranza="";

 


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
 document.getElementById("tdEfectoOpcionesDetalles").className="magictime vanishIn"
	}else{
		//document.getElementById("divOpcionedDetalleFactura").style.display="none"
 document.getElementById("tdEfectoOpcionesDetalles").className="magictime vanishOut"
$("div[id=divOpcionedDetalleFactura]").fadeOut(500);
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
function checkTipodeCobro(d){
	if(d=="1"){
	document.getElementById('checkCobranzaEfectivo').checked=true
	document.getElementById('checkCobranzaDeposito').checked=false	
	}
	if(d=="2"){
	document.getElementById('checkCobranzaEfectivo').checked=false
	document.getElementById('checkCobranzaDeposito').checked=true
	}	 
}

function limpiarCamposCobrarAranceles(){
	
document.getElementById("btnFinalizarCobranzas").style.display="none"
document.getElementById("btnCancelarCobranzas").style.display="none"
document.getElementById("TdImprimirCobrarAranceles").style.display="none"

document.getElementById('btnAddToDetalleVenta').style.backgroundColor='#cccccc';
document.getElementById("inptControlCobrarAranceles").style.backgroundColor="";
document.getElementById('btnMasDetalleVenta').style.display='none';
document.getElementById('inptCodArancelCobrarAranceles').value=""
document.getElementById('inptNomArancelCobrarAranceles').value=""
controlNombreArancelCobranza="";
paginaRecibo="";
document.getElementById('inptCantArancelCobrarAranceles').value=""
document.getElementById('inptPrecioArancelCobrarAranceles').value=""
document.getElementById('inptDescuentoArancelCobrarAranceles').value=""
document.getElementById('inptTotalArancelCobrarAranceles').value=""
document.getElementById("inptSubTotalCobrarAranceles").value="";
document.getElementById("inptTotalCobrarAranceles2").innerHTML="0";
document.getElementById("inptTotalCobrarAranceles").value="";
document.getElementById('inptTotalDescuentoCobrarAranceles').value="";

document.getElementById("inptNombreApellidoRazonSocial").value="";
document.getElementById("inptRucRazonSocial").value="";
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
document.getElementById("btnCambiarRazonSocial").style.backgroundColor="#afafaf";
checkTipodeCobro(1);

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
	CursoCobrarArancel=""
    anhoCobrarArancel=""
    duracioncarreracobrarcobranzas=""
	semestreCobrarArancel=""
	tituloDescuentoFactura=""
}

function guardarDatosCobranzas(){
	
	if(document.getElementById('checkCobranzaEfectivo').checked==true){
		var TipoCobranza="Efectivo"
	}
	if(document.getElementById('checkCobranzaDeposito').checked==true){
		var TipoCobranza="Deposito"
	}
   var nombrerazon=document.getElementById("inptNombreApellidoRazonSocial").value
	var rucrazon=document.getElementById("inptRucRazonSocial").value
	
		var inptFechaCobrarAranceles =""
	var inputdayFactura = document.getElementById("inputdayFactura").value
	if(inputdayFactura==""){
	alertmensaje("Falto seleccionar el dia")
		return
	}
	var inputmonthFactura = document.getElementById("inputmonthFactura").value
	if(inputmonthFactura==""){
	alertmensaje("Falto seleccionar el mes")
		return
	}
	var inputyearFactura = document.getElementById("inputyearFactura").value
	if(inputyearFactura==""){
	alertmensaje("Falto seleccionar el año")
		return
	}
	inptFechaCobrarAranceles =
    inputyearFactura + "-" +
    String(inputmonthFactura).padStart(2, '0') + "-" +
    String(inputdayFactura).padStart(2, '0');

	var inptTotalCobrarAranceles = document.getElementById("inptTotalCobrarAranceles").value
	var inptControlCobrarAranceles = document.getElementById("inptControlCobrarAranceles").value
	var nrofactura = document.getElementById("inptFacturaNroCobrarAranceles").value
	var inptFacturaNroCobrarAranceles = document.getElementById("inptFacturaNroCobrarAranceles").value
	
	var inptPuntoExpedicionCobrarAranceles = document.getElementById("inptPuntoExpedicionCobrarAranceles").value
	
	 
		
	 var nrofactura="";	
		
		
	var	valor=document.getElementById("inptPuntoExpedicionCobrarAranceles").value
	var	tipoComprobante=document.getElementById("inptSeleccionImprimirCobranza").value
	
	
	
	var	codPuntoExpe=$("select[id=inptPuntoExpedicionCobrarAranceles]").children(":selected").attr("id")
	
	
	if(tipoComprobante=="FACTURA"){
		
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
	
   nrofactura=valor+"-"+nrofactura
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
		
	} else {
		accion = "nuevo";
		
	}
	abmguardarcobranzas(tipoComprobante,nombrerazon,rucrazon,inptFacturaNroCobrarAranceles,estadofactura,inptFechaCobrarAranceles,inptTotalCobrarAranceles,
	inptControlCobrarAranceles,nrofactura,idAsignarAlumnosFk,idFilialFactura,codPuntoExpe,TipoCobranza)
}

function abmguardarcobranzas(tipoComprobante,nombrerazonsocial,rucrazonsocial,controlnrofactura,estadofactura,fecha,totalcobranzas,cf,nrofactura,idcursosalumnoFk,codfiliafk,puntoexpedicionfk,TipoCobranza) {
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
	// datos.append("puntoexpedicionfk", puntoexpedicionfk)
	datos.append("puntoexpedicionfk", "1")
	datos.append("nrototal", control)
	datos.append("idcursosalumnoFk", idcursosalumnoFk)
	datos.append("estadofactura", estadofactura)
	datos.append("controlnrofactura", controlnrofactura)
	datos.append("TipoCobranza", TipoCobranza)
	datos.append("codfiliafk", codfiliafk)
	datos.append("rucrazonsocial", rucrazonsocial)
	datos.append("nombrerazonsocial", nombrerazonsocial)
	datos.append("tipoComprobante", tipoComprobante)
	
	
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
			console.error(jqXHR, textstatus, errorThrowm);
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
					facturanros=datos["2"]
					
					var CursoFactura=" - GRADO: "+ document.getElementById("inptCursoCobrarAranceles").value ;
					var SemestreFactura=" - SEMESTRE: "+ document.getElementById("inptSemestreCobrarAranceles").value ;
					
					var facturaCarreraAlumno=document.getElementById("inptCarreraCobrarAranceles").value ;
					
var t=QuitarSeparadorMilValor(totalcobranzas);
   facturaTotalLetras=numeroALetras(t, {
  plural: 'GUARANIES',
  singular: 'GUARANIES',
  centPlural: 'GUARANIES',
  centSingular: 'GUARANIES'
});
var paginaDetalle=""
paginaDetalleTicket= "";
var textoDetalleOffline= "";
$("tr[name=tdDetalleCobranzasOffline]").each(function(i, elementohtml){
 	paginaDetalle+="<table class='tableRegistroFactura'><tbody><tr>"
		+"<td style='text-align: center; width: 10%;'>"+$(elementohtml).children('td[id="td_id_1"]').html()+"</td>"
		+"<td class='TdCantidadFactura'>"+$(elementohtml).children('td[id="td_datos_4"]').html()+"</td>"
		+"<td class='TdDescripcionFactura'>"+$(elementohtml).children('td[id="td_datos_1"]').html()+"</td>"
		+"<td style='width: 10%;'>"+$(elementohtml).children('td[id="td_datos_5"]').html()+"</td>"
		+"<td style='width: 50%;'>"+$(elementohtml).children('td[id="td_datos_5"]').html()+"</td>"
		+"</tr>"
		+"</tbody>";

	paginaRecibo+="<table class='tableRegistroFactura' style='width:100%' ><tbody><tr>"
	+"<td style='text-align: left; width: 60%;'>"+$(elementohtml).children('td[id="td_datos_1"]').html()+"</td>"
	+"<td style='text-align: left; width: 20%;'>"+$(elementohtml).children('td[id="td_datos_9"]').html()+"</td>"
	+"<td style='text-align: left; width: 20%;'>"+$(elementohtml).children('td[id="td_datos_5"]').html()+"</td>"
	+"</tr>"
	 +"</tbody></table>";

	 descuentofactura = Number(descuentofactura)+Number(QuitarSeparadorMilValor($(elementohtml).children('td[id="td_datos_9"]').html())) 
});

 paginaDetalle+="<table class='tableRegistroFactura'><tbody><tr>"
+"<td style='text-align: center; width: 10%;'></td>"
+"<td class='TdCantidadFactura'></td>"
+"<td class='TdDescripcionFactura'>"+facturaCarreraAlumno+CursoFactura+SemestreFactura+"</td>"
+"<td style='width: 10%;'></td>"
+"<td style='width: 50%;'></td>"
+"</tr>"
+"</tbody>"
 
facturaDetalles=paginaDetalle



if(document.getElementById('inptSeleccionImprimirCobranza').value === 'FACTURA'){
	imprimirFactura()
}else{
  var Cajero = document.getElementById("lblUser").innerHTML
  var NroRecibo = facturanros
  var NombreAlumno = facturaNombreAlumno
  var CiAlumno = facturaCiAlumno
  var facTotal = facturaTotal
  var Fecha = fecha
  var paginaticket = paginaRecibo
  var grado = document.getElementById("inptCursoCobrarAranceles").value
  var turno = document.getElementById("inptTurnoCobrarAranceles").value
  var TotalLetras = facturaTotalLetras
  var descuento = separadordemilesnumero(descuentofactura)
  var tutor = document.getElementById("inptNombreApellidoRazonSocial").value 
	imprimirBoleta(descuento, tutor, NroRecibo, NombreAlumno , CiAlumno, Fecha, Cajero,  paginaticket, facTotal,grado,turno,TotalLetras)
}


alertmensaje("DATOS GUARDADOS CON EXITO")
		
limpiarCamposCobrarAranceles();
	  
		          
				}

			} catch (error) {
				console.error(error);
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
var paginaRecibo="";
var descuentofactura="";
var TutorFactura="";
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
	document.getElementById("PAlumnoRazonFactura1").innerHTML=""
	
	document.getElementById("pNroFactura2").innerHTML=facturanros
	document.getElementById("PfechaFactura2").innerHTML=facturaFecha
	document.getElementById("PNombreFactura2").innerHTML=facturaNombreAlumno
	document.getElementById("PCiFactura2").innerHTML=facturaCiAlumno
	document.getElementById("PDireccionFactura2").innerHTML=facturaDireccionAlumno
	document.getElementById("detalleFactura2").innerHTML=facturaDetalles
	document.getElementById("PTotalSubFactura2").innerHTML=facturaTotal
	document.getElementById("PTotalFactura2").innerHTML=facturaTotal
	document.getElementById("PLetrasFactura2").innerHTML=facturaTotalLetras
	document.getElementById("PAlumnoRazonFactura2").innerHTML=""
	
	 
	
	if(document.getElementById("inptRucRazonSocial").value!=document.getElementById("inptDocAlumnosCobrarAranceles").value){
		document.getElementById("PNombreFactura1").innerHTML=document.getElementById("inptNombreApellidoRazonSocial").value
	    document.getElementById("PCiFactura1").innerHTML=document.getElementById("inptRucRazonSocial").value
		document.getElementById("PNombreFactura2").innerHTML=document.getElementById("inptNombreApellidoRazonSocial").value
	    document.getElementById("PCiFactura2").innerHTML=document.getElementById("inptRucRazonSocial").value
		document.getElementById("PAlumnoRazonFactura1").innerHTML="*"+facturaCiAlumno+" - "+facturaNombreAlumno+"*"
	    document.getElementById("PAlumnoRazonFactura2").innerHTML="*"+facturaCiAlumno+" - "+facturaNombreAlumno+"*"
		
	 }
	

 var documento= document.getElementById("divreportfactura").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	

	 // if(filiaruser=="11" ){
			var URL= "/GoodTechnologyEPNSA/system/reportfacturasUV.html"
		// }else{
			// var URL= "/GoodTechnologyEPNSA/system/reportfacturas.html"
		// }
        window.open(URL, 'Imprimir', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,left = 0');
       
	
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
					// if(datos_buscados==""){
						// alertmensaje("EL NRO DE FACTURA ES INCORRECTO")
						// return
					// }
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

 
let paginaDetalleTicket= ""
 
function imprimirBoleta( descuento, tutor,  NroRecibo, facturaNombreAlumno, CiAlumno, Fecha, Cajero,  paginaticket, facturaTotal,grado,turno,TotalLetras){
   
    var pagina =   `
    <div class="ticket-container">
 
     <div class="imgmenbrete"></div>

		
<div class="ticket-titulo-documento">
    RECIBO DE DINERO
</div>

      <div class='ticket-section' style="display: flex; width: 90%; margin: 10px;gap: 10px;">

    <!-- COLUMNA IZQUIERDA -->
    <div style="width: 50%;">
        <table class="ticket-table">
            <tr><td><b>Recibi(mos)de:</b></td><td>${tutor}</td></tr>
            <tr><td><b>Alumno:</b></td><td>${facturaNombreAlumno}</td></tr>
            <tr><td><b>CI / RUC:</b></td><td>${CiAlumno}</td></tr>
            <tr><td><b>Grado:</b></td><td>${grado}</td></tr>
            <tr><td><b>Turno:</b></td><td>${turno}</td></tr>
        </table>
    </div>

    <!-- COLUMNA DERECHA -->
    <div style="width: 50%;">
        <table class="ticket-table">
            <tr><td><b>N° Recibo:</b></td><td>${NroRecibo}</td></tr>	
            <tr><td><b>Fecha:</b></td><td>${Fecha}</td></tr>
            <tr><td><b>Cajero:</b></td><td>${Cajero}</td></tr> 
        </table>
    </div>

</div>


        <h4 style="text-align:center;margin-top:0px;margin:0px;font-size:15px;">Detalle de Operación</h4>

        <!-- LISTA DE CONCEPTOS -->
        <table class="ticket-table">
            <tr>
                <th style="width:60%">DESCRIPCION</th> 
                <th style="width:20%">DESCUENTO</th> 
                <th style="width:20%">IMPORTE</th> 
            </tr>
        </table>

        ${paginaticket}
  
        <!-- TOTALES -->
        <div class="ticket-section" style='margin: 10px;'>
            <table class="ticket-table ticket-totales">
                <tr>
				 <td  style="width:80%"><b>TOTAL LETRAS:</b> ${TotalLetras}</td> 
                 <td  style="width:20%" ><b>TOTAL:</b> ${facturaTotal} Gs.</td>
				 </tr> 
				 <tr>
				 <td  style="width:80%"> </td> 
                 <td  style="width:20%" ><b>DESC.:</b> ${descuento} Gs.</td>
				 </tr> 
            </table>
        </div>

		<br><br><br>

<div class="ticket-firma">
    _______________________________<br>
    FIRMA
</div>

  
    </div>
    `;

document.getElementById("divreportfactura").innerHTML =
    pagina +
    "<div class='marcaFactura original'>ORIGINAL</div>" +
    "<div class='separador'></div>" +
    pagina +
    "<div class='marcaFactura duplicado'>DUPLICADO</div>";

	
	var documento= document.getElementById("divreportfactura").innerHTML;
	localStorage.setItem("reporte", documento);
	localStorage.setItem("tipo", "ticket");
 
		var URL= "/GoodTechnologyEPNSA/system/reportTicket.html"
 
	window.open(URL, 'Imprimir', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,left = 0');

}

 
/*
ASIGNAR NRO FACTURA
*/

var idAbmHabilitarCaja="";
var ControlVistaHabilitarCaja=""
function verCerrarFrmHabilitarCaja(d){
	document.getElementById("divMinimizadoNroFactura").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERHABILITARFACUTRAS","accion")==false){	   return;	 }

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divAbmHabilitarCaja").style.display="";
document.getElementById("tdEfectoFacturasHabilitadas").className="magictime slideDownReturn"
	
	}else{
//	document.getElementById("divAbmHabilitarCaja").style.display="none";
document.getElementById("tdEfectoFacturasHabilitadas").className="magictime vanishOut"
	$("div[id=divAbmHabilitarCaja]").fadeOut(500);	
	 LimpiarCamposHabilitarCaja()
	 LimpiarCamposBusquedaHabilitarCaja()
	}
}
function MinimizarVentanaHabilitarCaja(){
	//document.getElementById("divAbmHabilitarCaja").style.display="none";
	document.getElementById("divMinimizadoNroFactura").style.display="";
document.getElementById("tdEfectoFacturasHabilitadas").className="magictime slideDown"
	$("div[id=divAbmHabilitarCaja]").fadeOut(500);	

}
function NuevoHabilitarCajaFrm(){
		// if(controlacceso("INSERTARHABILITARFACUTRAS","accion")==false){	  return;	}
		document.getElementById("divAbmHabilitarCaja1").style.display="none"
		document.getElementById("divAbmHabilitarCaja2").style.display=""
		LimpiarCamposHabilitarCaja()
}
function EditarHabilitarCajaFrm(){
	// if(controlacceso("EDITARHABILITARFACUTRAS","accion")==false){	  return;	}
	if(idAbmHabilitarCaja==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmHabilitarCaja1").style.display="none"
		document.getElementById("divAbmHabilitarCaja2").style.display=""
		
}
function BuscarHabilitarCajaFrm(){
	
	
		document.getElementById("divAbmHabilitarCaja1").style.display=""
		document.getElementById("divAbmHabilitarCaja2").style.display="none"
}
function LimpiarCamposHabilitarCaja(){
	document.getElementById("inptFilialOrigenHabilitarCaja").value=""
	document.getElementById("inptFilialDestinoHabilitarCaja").value=""
	document.getElementById("inptNroCajaHabilitarCaja").value=""
	document.getElementById("inptNroInicioHabilitarCaja").value=""
	document.getElementById("inptNroFinHabilitarCaja").value=""
	document.getElementById("inptNroTimbradoHabilitarCaja").value=""
	document.getElementById("inptFechaVencHabilitarCaja").value=""
	document.getElementById("inptEstadoHabilitarCaja").value="Activo"
	document.getElementById("inptRegistroSeleccionadoHabilitarCaja").value=""
	idAbmHabilitarCaja=""
	document.getElementById("btnAbmHabilitarCaja").value="Guardar Datos"
	document.getElementById("btnEditarDatosHabilitarCaja").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosHabilitarCaja").style.backgroundColor="#ffcece"
}
function LimpiarCamposBusquedaHabilitarCaja(){
	document.getElementById("inptBuscarHabilitarCaja1").value=""
	document.getElementById("divBuscadorHabilitarCaja").innerHTML=""
	document.getElementById("lblNroRegistroHabilitarCaja").innerHTML=""
	
}
function ObtenerdatosAbmHabilitarCaja(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmHabilitarCaja = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoHabilitarCaja').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptFilialOrigenHabilitarCaja').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptFilialDestinoHabilitarCaja').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptNroCajaHabilitarCaja').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptNroInicioHabilitarCaja').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptNroFinHabilitarCaja').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptNroTimbradoHabilitarCaja').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptFechaVencHabilitarCaja').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptEstadoHabilitarCaja').value = $(datostr).children('td[id="td_datos_8"]').html();
     document.getElementById("btnAbmHabilitarCaja").value="Editar Datos"
     document.getElementById("btnEditarDatosHabilitarCaja").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosHabilitarCaja").style.backgroundColor="red"
BuscarListCajaSelectNroFactura()


}
function EliminarRegitroHabilitarCaja(){
		// if(controlacceso("ELIMINARHABILITARFACUTRAS","accion")==false){	  return;	}
	if(idAbmHabilitarCaja==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoHabilitarCaja").value="Inactivo";
	VerificarDatosHabilitarCaja()
	
	}

}
function VerificarDatosHabilitarCaja(){
	
	var inptNroInicioHabilitarCaja = document.getElementById("inptNroInicioHabilitarCaja").value
	var inptNroFinHabilitarCaja = document.getElementById("inptNroFinHabilitarCaja").value
	var inptNroTimbradoHabilitarCaja = document.getElementById("inptNroTimbradoHabilitarCaja").value
	var inptFechaVencHabilitarCaja = document.getElementById("inptFechaVencHabilitarCaja").value
	var inptEstadoHabilitarCaja = document.getElementById("inptEstadoHabilitarCaja").value
	
	var codLocalFk="";
	$("input[id=inptFilialOrigenHabilitarCaja]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codLocalFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});


if(codLocalFk==""){
	
		alertmensaje("Falto seleccionar un local")
		return
	}


var codCajaFk="";
	$("input[id=inptNroCajaHabilitarCaja]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codCajaFk=$(match).attr("id")
       } else {
           // value is not in list
       }
});


	

	if(codCajaFk==""){
	
		alertmensaje("Falto seleccionar una caja")
		return
	}
	
	
	if(inptNroInicioHabilitarCaja==""){
		document.getElementById("inptNroInicioHabilitarCaja").focus()
		alertmensaje("Falto ingresar el nro de inicio")
		return
	}
	if(inptNroFinHabilitarCaja==""){
		document.getElementById("inptNroFinHabilitarCaja").focus()
		alertmensaje("Falto ingresar el nro fin")
		return
	}
	if(inptNroTimbradoHabilitarCaja==""){
		document.getElementById("inptNroTimbradoHabilitarCaja").focus()
		alertmensaje("Falto ingresar el nro de timbrado")
		return
	}
	if(inptFechaVencHabilitarCaja==""){
		document.getElementById("inptFechaVencHabilitarCaja").focus()
		alertmensaje("Falto seleccionar la fecha de vencimiento")
		return
	}
	if(inptEstadoHabilitarCaja==""){
		document.getElementById("inptEstadoHabilitarCaja").focus()
		alertmensaje("Falto seleccionar el estado")
		return
	}
	
	var accion = "";
	if (idAbmHabilitarCaja != "") {
		accion = "editar";
			// if(controlacceso("EDITARHABILITARFACUTRAS","accion")==false){	  return;	}
	} else {
		accion = "nuevo";
			// if(controlacceso("INSERTARHABILITARFACUTRAS","accion")==false){	  return;	}
	}
	AbmHabilitarCaja(codLocalFk,codCajaFk,inptNroInicioHabilitarCaja,inptNroFinHabilitarCaja,inptNroTimbradoHabilitarCaja,inptFechaVencHabilitarCaja,inptEstadoHabilitarCaja,idAbmHabilitarCaja, accion)
}
function AbmHabilitarCaja(codLocalFk,codcajaFk,NroInicio,NroFin,nrotimbrado,fechavencimiento,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("codcajaFk", codcajaFk)
	datos.append("NroInicio", NroInicio)
	datos.append("NroFin", NroFin)
	datos.append("nrotimbrado", nrotimbrado)
	datos.append("fechavencimiento", fechavencimiento)
	datos.append("estado", estado)
	datos.append("codLocalFk", codLocalFk)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMHabilitarCaja.php",
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
		
                   LimpiarCamposHabilitarCaja()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmHabilitarCaja()
				
					

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoHabilitarCaja(d){
	if(d=="1"){
	document.getElementById('inptSeleccHabilitarCaja1').checked=true
	document.getElementById('inptSeleccHabilitarCaja2').checked=false	
	}else{
	document.getElementById('inptSeleccHabilitarCaja1').checked=false
	document.getElementById('inptSeleccHabilitarCaja2').checked=true
	}
}
function BuscarAbmHabilitarCaja() {
	// if(controlacceso("BUSCARHABILITARFACUTRAS","accion")==false){	  return;	}
	var filialorigen = document.getElementById('inptBuscarHabilitarCaja1').value
	var filialdestino = document.getElementById('inptBuscarHabilitarCaja2').value
	var nrocaja = document.getElementById('inptBuscarHabilitarCaja3').value
	var nroinico = document.getElementById('inptBuscarHabilitarCaja4').value
	var estado = ""
	if(document.getElementById('inptSeleccHabilitarCaja1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorHabilitarCaja").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroHabilitarCaja").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"filialorigen": filialorigen,
		"nrocaja": nrocaja,
		"nroinico": nroinico,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMHabilitarCaja.php",
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
			document.getElementById("divBuscadorHabilitarCaja").innerHTML = ''
			document.getElementById("lblNroRegistroHabilitarCaja").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorHabilitarCaja").innerHTML = ''
			document.getElementById("lblNroRegistroHabilitarCaja").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorHabilitarCaja").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroHabilitarCaja").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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
LISTA DE ARANCELES
*/
var idAbmListaAranceles="";
var ControlVistaListaAranceles=""
function verCerrarFrmListaAranceles(d){
	document.getElementById("divMinimizadoListadoAranceles").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERLISTADOARANCELES","accion")==false){	  return;		}
	
	if(d=="1"){
		minimizartodaventanaabierto()
	document.getElementById("divAbmListaAranceles").style.display="";
  document.getElementById("tdEfectoListaAranceles").className="magictime slideDownReturn"
	
	}else{
	//document.getElementById("divAbmListaAranceles").style.display="none";
document.getElementById("tdEfectoListaAranceles").className="magictime vanishOut"
	$("div[id=divAbmListaAranceles]").fadeOut(500);	
	LimpiarCamposListaAranceles()
	LimpiarCamposBusquedaListaAranceles()
	}
}
function MinimizarVentanaListadoArancel(){
	//document.getElementById("divAbmListaAranceles").style.display="none";
document.getElementById("tdEfectoListaAranceles").className="magictime slideDown"
	$("div[id=divAbmListaAranceles]").fadeOut(500);	
	document.getElementById("divMinimizadoListadoAranceles").style.display="";
}
function NuevoListaArancelesFrm(){
	// if(controlacceso("INSERTARLISTADOARANCELES","accion")==false){	  return;		}
		document.getElementById("divAbmListaAranceles1").style.display="none"
		document.getElementById("divAbmListaAranceles2").style.display=""
		LimpiarCamposListaAranceles()
}
function EditarListaArancelesFrm(){
	// if(controlacceso("EDITARLISTADOARANCELES","accion")==false){	  return;		}
	if(idAbmListaAranceles==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaAranceles1").style.display="none"
		document.getElementById("divAbmListaAranceles2").style.display=""
		
}
function BuscarListaArancelesFrm(){
	
		document.getElementById("divAbmListaAranceles1").style.display=""
		document.getElementById("divAbmListaAranceles2").style.display="none"
}
function LimpiarCamposListaAranceles(){
	document.getElementById("inptCodigoListaAranceles").value=""
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
	document.getElementById('inptCodigoListaAranceles').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptTipoListaAranceles').value = $(datostr).children('td[id="td_datos_4"]').html();
     document.getElementById("btnAbmListaAranceles").value="Editar Datos"
     document.getElementById("btnEditarDatosListaAranceles").style.backgroundColor="#4caf50"
     document.getElementById("btnEliminarDatosListaAranceles").style.backgroundColor="red"



}
function EliminarRegitroListaAranceles(){
	// if(controlacceso("ELIMINARLISTADOARANCELES","accion")==false){	  return;		}
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
	var inptCodigoListaAranceles = document.getElementById("inptCodigoListaAranceles").value
	var inptTipoListaAranceles = document.getElementById("inptTipoListaAranceles").value
	
	
	

	if(inptNombreListaAranceles==""){
		document.getElementById("inptNombreListaAranceles").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmListaAranceles != "") {
		accion = "editar";
		// if(controlacceso("EDITARLISTADOARANCELES","accion")==false){	  return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("EDITARLISTADOARANCELES","accion")==false){	  return;		}
	}
	AbmListaAranceles(inptCodigoListaAranceles,inptNombreListaAranceles,inptEstadoListaAranceles,inptTipoListaAranceles,idAbmListaAranceles, accion)
}
function AbmListaAranceles(codigoarancel,nombre,estado,tipo, idabm, accion) {
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
	datos.append("tipo", tipo)
	datos.append("codigoarancel", codigoarancel)
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
// if(controlacceso("BUSCARLISTADOARANCELES","accion")==false){	  return;		}
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
	document.getElementById("inptTipoArancelNombreAranceles").innerHTML = ""  
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
			document.getElementById("inptTipoArancelNombreAranceles").innerHTML = ''			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListArancel").innerHTML = ''
			document.getElementById("inptTipoArancelNombreAranceles").innerHTML = ''
			try {		
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados1 = datos[2];
					var datos_buscados2 = datos[3];
					var datos_buscados3 = datos[4];
					document.getElementById("ListArancel").innerHTML = datos_buscados1	
					document.getElementById("inptTipoArancelNombreAranceles").innerHTML = datos_buscados3	
				}					
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarSeleccListaArancelesPorTipoEnArancel(tipo) {	
	document.getElementById("ListArancelPorTipo").innerHTML = imgCargandoA  

	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"tipo": tipo,
		"funt": "buscarSelectTipo"
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
			document.getElementById("ListArancelPorTipo").innerHTML = ''			
		
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListArancelPorTipo").innerHTML = ''
			
			try {		
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
					var datos_buscados1 = datos[2];
				
					document.getElementById("ListArancelPorTipo").innerHTML = datos_buscados1	
					
				}					
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

var codAbmPorcentajeAsignar="";
function VerCerrarAsignarPorcentajeAranceles(d){
	
	
	if(idAbmListaAranceles==""){
		return false;
	}
	
	// if(controlacceso("VERASIGNARPORCENTAJE","accion")==false){	  return;		}
		
	
	if(d=="1"){
		
	document.getElementById("divAbmAsignarPorcentajeAranceles").style.display="";
  document.getElementById("tdEfectoAsignarPorcentajeAranceles").className="magictime slideLeftReturn"
  limpiarCamposAsignarPorcentaje()
  BuscarAbmPorcentajeAranceles()
	CargarListadoFilialEnAsignarArancel()
	}else{
	//document.getElementById("divAbmListaAranceles").style.display="none";
document.getElementById("tdEfectoAsignarPorcentajeAranceles").className="magictime slideRight"
	$("div[id=divAbmAsignarPorcentajeAranceles]").fadeOut(500);	
	
	
	}
}
function CargarListadoFilialEnAsignarArancel(){
		

	document.getElementById("ListFilialAsignarPorcentaje").innerHTML=""
	document.getElementById("inptFilialPorcentajeAranceles").value=""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idAbmListaAranceles": idAbmListaAranceles,
		"funt": "buscarListadoFilial"
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
			document.getElementById("ListFilialAsignarPorcentaje").innerHTML=""
			
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListFilialAsignarPorcentaje").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListFilialAsignarPorcentaje").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
function limpiarCamposAsignarPorcentaje(){
	document.getElementById("inptPorcentajePorcentajeAranceles").value=""
	document.getElementById("inptFilialPorcentajeAranceles").value=""
	document.getElementById("inptRegistroSeleccionadoAsignarPorcentajeAranceles").value=""
	 document.getElementById("btnEliminarAsignarPorcentajeAranceles").style.backgroundColor="#ffcece"
	codAbmPorcentajeAsignar=""
}
function VerificarAsignarArancel(){
	
	var inptPorcentajePorcentajeAranceles = document.getElementById("inptPorcentajePorcentajeAranceles").value
	if(inptPorcentajePorcentajeAranceles==""){
		document.getElementById("inptPorcentajePorcentajeAranceles").focus()
		alertmensaje("Falto ingresar el porcentaje")
		return
	}
	
	var codfilial="";
	$("input[id=inptFilialPorcentajeAranceles]").each(function (i, Elemento) {
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



	if(codfilial==""){	
		alertmensaje("Falto seleccionar la filial")
		return
	}
	
	var accion = "nuevoporcentaje";	
	abmAsignarPorcentaje(codfilial,inptPorcentajePorcentajeAranceles,accion)
}
function abmAsignarPorcentaje(cod_filialFk,porcentaje,accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("porcentaje", porcentaje)
	datos.append("cod_filialFk", cod_filialFk)
	datos.append("idAbmListaAranceles", idAbmListaAranceles)
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
				limpiarCamposAsignarPorcentaje()
				 CargarListadoFilialEnAsignarArancel()
				BuscarAbmPorcentajeAranceles()
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
function BuscarAbmPorcentajeAranceles() {


	document.getElementById("divBuscadorAsignarPorcentajeAranceles").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarPorcentajeAranceles").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAbmListaAranceles,
		"funt": "buscarPorcentajeFiliales"
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
			document.getElementById("divBuscadorAsignarPorcentajeAranceles").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarPorcentajeAranceles").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarPorcentajeAranceles").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarPorcentajeAranceles").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarPorcentajeAranceles").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroAsignarPorcentajeAranceles").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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
function ObtenerdatosAbmListaArancelesPorcentaje(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	codAbmPorcentajeAsignar = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarPorcentajeAranceles').value = $(datostr).children('td[id="td_datos_1"]').html();
 
     document.getElementById("btnEliminarAsignarPorcentajeAranceles").style.backgroundColor="red"



}
function EliminarAsignarPorcentaje() {
	if(codAbmPorcentajeAsignar==""){
		return
	}
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "eliminarporcentaje")
	datos.append("codAbmPorcentajeAsignar", codAbmPorcentajeAsignar)
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
				    CargarListadoFilialEnAsignarArancel()
				limpiarCamposAsignarPorcentaje()
				BuscarAbmPorcentajeAranceles()
				alertmensaje("DATOS ELIMINADOS CORRECTAMENTE...")
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
	// if(controlacceso("VARASIGNARARANCELES","accion")==false){	  return;		}

	
	if(d=="1"){
		
		minimizartodaventanaabierto()
	document.getElementById("divAbmAsignarArancel").style.display="";
document.getElementById("tdEfectoAsignarArancel").className="magictime slideDownReturn"
	
	}else{
	//document.getElementById("divAbmAsignarArancel").style.display="none";
document.getElementById("tdEfectoAsignarArancel").className="magictime vanishOut"
	$("div[id=divAbmAsignarArancel]").fadeOut(500);	
	 LimpiarCamposAsignarArancel()
	 LimpiarCamposAsignarArancelMasivo()
	 LimpiarCamposBusquedaAsignarArancel()
	}
}
function MinimizarVentanaAsignarArancel(){
//document.getElementById("divAbmAsignarArancel").style.display="none";
document.getElementById("tdEfectoAsignarArancel").className="magictime slideDown"
	$("div[id=divAbmAsignarArancel]").fadeOut(500);	
	document.getElementById("divMinimizadoAranceles").style.display="";
}
function verCerrarFrmVistaAsignarArancel(d,v){
	
	if(d=="1"){
		ControlVistaAsignarArancel=v;
		$("div[id=divVistaAsignarArancel]").fadeIn(500);
	}else{
		$("div[id=divVistaAsignarArancel]").fadeOut(500);
	}
}
function verCerrarTipoVistaAsignarArancel(d){
	if(d=="1"){
		document.getElementById("tbAsignarArancel1").style.display=""
		document.getElementById("tbAsignarArancel2").style.display="none"
		document.getElementById("DivVistaAsignarArancel1").style.display=""
		document.getElementById("DivVistaAsignarArancel2").style.display="none"
		document.getElementById("btnVistaAsignarAranceles1").style=""
		document.getElementById("btnVistaAsignarAranceles2").style="background-color:#ccc"
		LimpiarCamposBusquedaAsignarArancel()
	}
	if(d=="2"){
		document.getElementById("tbAsignarArancel1").style.display="none"
		document.getElementById("tbAsignarArancel2").style.display=""
		document.getElementById("DivVistaAsignarArancel1").style.display="none"
		document.getElementById("DivVistaAsignarArancel2").style.display=""
		document.getElementById("btnVistaAsignarAranceles1").style="background-color:#ccc"
		document.getElementById("btnVistaAsignarAranceles2").style=""
		LimpiarCamposBusquedaAsignarArancel()
		BuscarAsignarArancelCascada1();
	}
}
function NuevoAsignarArancelFrm(){
	// if(controlacceso("INSERTARASIGNARARANCELES","accion")==false){	  return;		}
		document.getElementById("divAbmAsignarArancel1").style.display="none"
		document.getElementById("divAbmAsignarArancel3").style.display="none"
		document.getElementById("divAbmAsignarArancel2").style.display=""
		LimpiarCamposAsignarArancel()
}
function NuevoAsignarArancelMasivoFrm(){
	// if(controlacceso("INSERTARASIGNARARANCELES","accion")==false){	  return;		}
		document.getElementById("divAbmAsignarArancel1").style.display="none"
		document.getElementById("divAbmAsignarArancel2").style.display="none"
		document.getElementById("divAbmAsignarArancel3").style.display=""
		LimpiarCamposAsignarArancel()
		
}
function EditarAsignarArancelFrm(){
	// if(controlacceso("EDITARASIGNARARANCELES","accion")==false){	  return;		}
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
	document.getElementById("inptSemestreAsignarArancel").value="1"
	document.getElementById("inptTipoArancelAsignarArancel").value=""
	document.getElementById("inptCostoAsignarArancel").value=""
	
	document.getElementById("inptEstadoAsignarArancel").value="Activo"
	document.getElementById("inptRegistroSeleccionadoAsignarArancel").value=""
	   document.getElementById("btneditarDatosAsignarCarrera").style.backgroundColor="#b5f5b7"
     document.getElementById("btneliminarDatosAsignarCarrera").style.backgroundColor="#ffcece"
	 CodCarreraAsignarArancel="";
 idAbmAsignarArancel="";
 ControlVistaAsignarArancel=""

 CargarCarrerasAsingarArancel()
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
	document.getElementById("divBuscadorAsignarArancelCascada").innerHTML=""
	
}
function LimpiarCamposAsignarArancelMasivo(){
	document.getElementById("inptTipoArancelAsignarArancelMasivo").value=""
	document.getElementById("inptFilialAsignarArancelMasivo").value=""
	document.getElementById("inptAnhoAsignarArancelMasivo").value=""
	document.getElementById("inptSemestreAsignarArancelMasivo").value=""
	document.getElementById("inptCursoAsignarArancelMasivo").value=""
	document.getElementById("inptNombreAsignarArancelMasivo").value=""
	document.getElementById("inptTipoArancelAsignarArancelMasivo").value=""
	document.getElementById("inptMontoAsignarArancelMasivo").value="0"
	document.getElementById("inptCantidadAsignarArancelMasivo").value="1"
	document.getElementById("inptTotalAsignarArancelMasivo").value="0"
	document.getElementById("ListArancelTipos").innerHTML=""
}
function ControlTipoArancel(d){
	if(d.value=="Especificos" || d.value=="Libros" || d.value=="Materiales Didacticos"){
		document.getElementById("divTipoAranceles").style.display=""
	}else{
		document.getElementById("divTipoAranceles").style.display="none"
	}
		var tipo= document.getElementById("inptTipoArancelAsignarArancel").value
	BuscarSeleccListaArancelesPorTipoEnArancel(tipo);
}
function ControlTipoArancelMasivo(d){
	if(d.value=="Especificos"){
		document.getElementById("divTipoArancelesMasivo").style.display=""
	}else{
		document.getElementById("divTipoArancelesMasivo").style.display="none"
	}
		var tipo= document.getElementById("inptTipoArancelAsignarArancelMasivo").value
		BuscarSeleccListaArancelesPorTipoEnArancel(tipo);
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
	document.getElementById('inptCostoAsignarArancel').value = $(datostr).children('td[id="td_datos_13"]').html();
     document.getElementById("btnAbmAsignarArancel").value="Editar Datos"
     document.getElementById("btneditarDatosAsignarCarrera").style.backgroundColor="#4CAF50"
     document.getElementById("btneliminarDatosAsignarCarrera").style.backgroundColor="red"
   
   if(document.getElementById('inptTipoArancelAsignarArancel').value=="Generales"){
	    document.getElementById("divTipoAranceles").style.display="None";
   }else{
	    document.getElementById("divTipoAranceles").style.display="";
   }

BuscarSeleccListaArancelesPorTipoEnArancel(document.getElementById('inptTipoArancelAsignarArancel').value);
}
function ObtenerdatosAbmAsignarArancelCascada(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	
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
     
   if(document.getElementById('inptTipoArancelAsignarArancel').value=="Generales"){
	    document.getElementById("divTipoAranceles").style.display="None";
   }else{
	    document.getElementById("divTipoAranceles").style.display="";
   }
BuscarSeleccListaArancelesPorTipoEnArancel(document.getElementById('inptTipoArancelAsignarArancel').value);
EditarAsignarArancelFrm()
}
function EliminarRegitroAsingarArancel(){
	// if(controlacceso("ELIMINARASIGNARARANCELES","accion")==false){	  return;		}
	if(idAbmAsignarArancel==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		
	 document.getElementById("inptEstadoAsignarArancel").value="Inactivo";
		AbmAsignarArancel("x","x","x","x","x","x","x","x","x","x","x","x",idAbmAsignarArancel, "eliminar")
		
	}

}

function CargarCarrerasAsingarArancel(){
  
	document.getElementById("ListCarrerasAsignarArancel").innerHTML=""
	
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": filiaruser,
		"codFacultad": "",
		"funt": "buscarcarreraporfilial3"
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
	var inptCostoAsignarArancel=document.getElementById("inptCostoAsignarArancel").value;


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
	if(inptEstadoAsignarArancel==""){
		alertmensaje("Falto seleccionar el estado del registro")
		return;
	}
	
	if(inptCostoAsignarArancel==""){
		alertmensaje("Falto Ingresar el Costo")
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
         CodCarreraAsignarArancel=$(match).attr("name")
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
         CodCarreraAsignarArancel=$(match).attr("name")
       } else {
           // value is not in list
       }
});

if(CodCarreraAsignarArancel==""){
		alertmensaje("Falto Seleccionar la carrera")
		return
	}
	
	}
	
	
var codFilial=filiaruser;
  
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
		// if(controlacceso("EDITARASIGNARARANCELES","accion")==false){	  return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("EDITARASIGNARARANCELES","accion")==false){	  return;		}
	}
	
	AbmAsignarArancel(inptCostoAsignarArancel,inptNombreAsignarArancel,inptTipoArancelAsignarArancel,inptEstadoAsignarArancel,inptAnhoAsignarArancel,inptCursoAsignarArancel,inptMontoAsignarArancel,inptCantidadAsignarArancel,inptTotalAsignarArancel,inptSemestreAsignarArancel,codFilial,CodCarreraAsignarArancel,codConcepto,idAbmAsignarArancel, accion)
}
function AbmAsignarArancel(costo,arancelname,tipo,estado,anho,curso,monto,cantidad,total,semestre,codFilialFk,cod_carreraFK,cod_listadearancelesFk,idAbm, accion) {
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
	datos.append("costo", costo)
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
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
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
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
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

var codCarrera="";
$("input[id=inptBuscarAsignarArancel24]").each(function (i, Elemento) {
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
var monto=document.getElementById("inptBuscarAsignarArancel25").value
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
		"codCarrera": codCarrera,
		"ordenby": controlordenasignararancel,
		"monto": monto,
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

function inptSeleccCarpetasAsignarArancel(d){
	if(d=="1"){
	document.getElementById('inptSeleccCarpetasAsignarArancel1').checked=true
	document.getElementById('inptSeleccCarpetasAsignarArancel2').checked=false	
	}else{
	document.getElementById('inptSeleccCarpetasAsignarArancel1').checked=false
	document.getElementById('inptSeleccCarpetasAsignarArancel2').checked=true
	}
}


function BuscarAsignarArancelCascada1() {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("divBuscadorAsignarArancelCascada").innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"funt": "buscarcascadafilialArancelesAsignados"
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
			document.getElementById("divBuscadorAsignarArancelCascada").innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarArancelCascada").innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarArancelCascada").innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararanceltipo(datos){
	var codfilial=$(datos).children('span[id="span1"]').html();
	var codcarrera=$(datos).children('span[id="span2"]').html();
	if(document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).style.display==""){
		document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_asignar_arancel_tipo_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetafilialasignararancel]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).style.display="";
	BuscarAsignarArancelCascada1_2(codfilial,codcarrera)
}
function BuscarAsignarArancelCascada1_2(codfilial,codcarrera) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"funt": "buscarcascadaTipoArancelesAsignados1"
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
			document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_asignar_arancel_tipo"+codfilial+codcarrera).innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararancelcarrera(datos){
		var codfilial=$(datos).children('span[id="span1"]').html();
	if(document.getElementById("div_asignar_arancel_carrera_"+codfilial).style.display==""){
		document.getElementById("div_asignar_arancel_carrera_"+codfilial).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_asignar_arancel_carrera_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetafilialasignararancel]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_asignar_arancel_carrera_"+codfilial).style.display="";
	BuscarAsignarArancelCascada2(codfilial)
}
function BuscarAsignarArancelCascada2(codfilial) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("div_asignar_arancel_carrera_"+codfilial).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"funt": "buscarcascadaCarrerasArancelesAsignados1"
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
			document.getElementById("div_asignar_arancel_carrera_"+codfilial).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_asignar_arancel_carrera_"+codfilial).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_asignar_arancel_carrera_"+codfilial).innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararancelAnho(datos){
			var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
	if(document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).style.display==""){
		document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_anho_asignar_arancel_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetaasignararancelcarrera]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).style.display="";
	BuscarAsignarArancelCascada3(codfilial,codcarrera)
}
function BuscarAsignarArancelCascada3(codfilial,codcarrera) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"funt": "buscarcascadaAnhoArancelesAsignados1"
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
			document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_anho_asignar_arancel_"+codfilial+codcarrera).innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararancelCurso(datos){
			var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
	if(document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).style.display==""){
		document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_curso_asignar_arancel_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetaasignararancelanho]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).style.display="";
	BuscarAsignarArancelCascada4(codfilial,codcarrera,anho)
}
function BuscarAsignarArancelCascada4(codfilial,codcarrera,anho) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"funt": "buscarcascadaCursoArancelesAsignados1"
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
			document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_curso_asignar_arancel_"+codfilial+codcarrera+anho).innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararancelSemestre(datos){
			var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
		var curso=$(datos).children('span[id="span4"]').html();
	if(document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).style.display==""){
		document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_semestre_asignar_arancel_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetaasignararancelSemestre]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).style.display="";
	BuscarAsignarArancelCascada5(codfilial,codcarrera,anho,curso)
}
function BuscarAsignarArancelCascada5(codfilial,codcarrera,anho,curso) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"curso": curso,
		"funt": "buscarcascadaSemestreArancelesAsignados1"
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
			document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
		document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_semestre_asignar_arancel_"+codfilial+codcarrera+anho+curso).innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararancelArancel(datos){
			var codfilial=$(datos).children('span[id="span1"]').html();
		var codcarrera=$(datos).children('span[id="span2"]').html();
		var anho=$(datos).children('span[id="span3"]').html();
		var curso=$(datos).children('span[id="span4"]').html();
		var semestre=$(datos).children('span[id="span5"]').html();
	if(document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).style.display==""){
		document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_arancel_asignar_arancel_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetaasignararancelArancel]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).style.display="";
	BuscarAsignarArancelCascada6(codfilial,codcarrera,anho,curso,semestre)
}
function BuscarAsignarArancelCascada6(codfilial,codcarrera,anho,curso,semestre) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"anho": anho,
		"curso": curso,
		"semestre": semestre,
		"funt": "buscarcascadaArancelArancelesAsignados1"
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
			document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
		document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("div_arancel_asignar_arancel_"+codfilial+codcarrera+anho+curso+semestre).innerHTML = datos_buscados			
                 
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

function vercerrarcascadaasignararancelarancelgeneral(datos){
			var codfilial=$(datos).children('span[id="span1"]').html();
			var codcarrera=$(datos).children('span[id="span2"]').html();
		
	if(document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).style.display==""){
		document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).style.display="none";
		$(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
		return
	}
	if(document.getElementById('inptSeleccCarpetasAsignarArancel1').checked==true){
$("div[name=div_asignar_arancel_general_1]").each(function (i, elemento) {
		elemento.style.display = 'none'

	});	
	
	$("img[name=iconocarpetaarancelgeneralasignararancel]").each(function (i, elemento) {
		$(elemento).attr('src', '/GoodTechnologyEPNSA/iconos/carpetacerrada.png');
     
	});	
	}
   $(datos).children('img[id="iconocarpeta"]').attr('src', '/GoodTechnologyEPNSA/iconos/carpetaabierta.png');

	document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).style.display="";
	BuscarAsignarArancelCascada7(codfilial,codcarrera)
}
function BuscarAsignarArancelCascada7(codfilial,codcarrera) {
// if(controlacceso("BUSCARASIGNARARANCELES","accion")==false){	  return;		}
	
	var estado = "Activo"
	
	

	document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).innerHTML = imgCargandoA
   
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"estado": estado,
		"codfilial": codfilial,
		"codcarrera": codcarrera,
		"funt": "buscarcascadaArancelGeneralArancelesAsignados1"
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
			document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).innerHTML = ''
			
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
		document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).innerHTML = ''
			
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 	Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {	
					var datos_buscados = datos[2];
				document.getElementById("div_asignar_arancel_general_"+codfilial+codcarrera).innerHTML = datos_buscados			
                 
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


/*FACTURAS CARGADAS*/

function verCerrarFrmReportFacturasCargadas(d){
	document.getElementById("divMinimizadoFacturasCargadas").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERHISTORIALDEFACTURAS","accion")==false){	  return;		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divReportFacturasCargadas").style.display="";
document.getElementById("tdEfectoFacturaCargada").className="magictime slideDownReturn"
	
	}else{
	//document.getElementById("divReportFacturasCargadas").style.display="none";
document.getElementById("tdEfectoFacturaCargada").className="magictime vanishOut"
	$("div[id=divReportFacturasCargadas]").fadeOut(500);	
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
	document.getElementById("inptTotalReportFacturasDeposito").value=""
	document.getElementById("inptRegistroReportFacturasEfectivo").value=""
	document.getElementById("inptRegistroReportFacturasCargadas").value=""
	document.getElementById("inptTotalReportFacturasCargadas").value=""
	document.getElementById("divBuscadorReportFacturasCargadas").innerHTML=""
}
function MinimizarVentanaFacturasCargadas(){
	//document.getElementById("divReportFacturasCargadas").style.display="none";
document.getElementById("tdEfectoFacturaCargada").className="magictime slideDown"
	$("div[id=divReportFacturasCargadas]").fadeOut(500);	
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
		document.getElementById('tdOrdReportFacturaCargada9').className="td_registro_orden1"
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
	if(d=="9"){
		document.getElementById('tdOrdReportFacturaCargada9').className="td_registro_orden"
		controlordenreportfacturacargada="9"
	}
	BuscarReportFacturasCargadas()
}
function BuscarReportFacturasCargadas() {
	
		// if(controlacceso("BUSCARHISTORIALDEFACTURAS","accion")==false){	  return;		}
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
var TipoCobranza =document.getElementById('inptBuscarFacturasCargadas13').value

	document.getElementById("divBuscadorReportFacturasCargadas").innerHTML = imgCargandoA
    document.getElementById("inptRegistroReportFacturasCargadas").value="";
    document.getElementById("inptTotalReportFacturasCargadas").value="";
	document.getElementById("inptTotalReportFacturasDeposito").value="";
    document.getElementById("inptRegistroReportFacturasEfectivo").value="";
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
		"TipoCobranza": TipoCobranza,
		
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
						document.getElementById("inptTotalReportFacturasDeposito").value=datos[6];
						document.getElementById("inptRegistroReportFacturasEfectivo").value=datos[5];
					if(datos[3]==0){
							alertmensaje("NO SE ENCONTRARON REGISTROS COINCIDENTES")
					}
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
var idFacturaSeleccionadoEsditar="";
var elementofacturasCargadas="";
var nrofacturaEditar="";
function ObtenerdatosFacturasCargadas(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
	datostr.className = 'tableRegistroSelec'
	
	idFacturaSeleccionadoEsditar = $(datostr).children('td[id="td_id"]').html();
	idFacturaSeleccionado = $(datostr).children('td[id="td_id"]').html();
	elementofacturasCargadas = datostr;
	document.getElementById('inptRegistroSeleccReportFacturasCargadas').value = $(datostr).children('td[id="td_datos_1"]').html();
document.getElementById('inptRegistroSeleccReportFacturasCargadas').value="";
	 var codarancel = $(datostr).children('td[id="td_id_3"]').html();
	
	 if(codarancel=="0"){
		 document.getElementById('trEditarArancel').style.display=""
	 }else{
		 document.getElementById('trEditarArancel').style.display="none"
	 }
	nrofacturaEditar= $(datostr).children('td[id="td_id_2"]').html();
	document.getElementById('inptFechaFacturaCambiarDatosFacturacion').value = "";
	document.getElementById('inptFechaFacturaCambiarDatosFacturacion').value = "";
	document.getElementById('bFacturaNro').innerHTML = $(datostr).children('td[id="td_id_2"]').html();
	document.getElementById('btneliminarDatosFacturasCargadas').style.backgroundColor="red";
	document.getElementById('btnAnularDatosFacturasCargadas').style.backgroundColor="#ff9800";
	document.getElementById('btnEditarDatosFacturasCargadas').style.backgroundColor="#2682ff";
	
}
function VerCerrarCambiarDatosFactura(d){
		// if(controlacceso("EDITARHISTORIALDEFACTURAS","accion")==false){	  return;		}
	if(d=="1"){
		if(elementofacturasCargadas==""){
			return
		}
		document.getElementById("divCambiarDatosFacturacion").style.display=""
document.getElementById("tdEfectoCambiarDatosFactura").className="magictime slideLeftReturn"

		
	}else{
//document.getElementById("divCambiarDatosFacturacion").style.display="none"
document.getElementById("tdEfectoCambiarDatosFactura").className="magictime slideRight"
$("div[id=divCambiarDatosFacturacion]").fadeOut(500);
}
	
}
function editarDatosFacturacion() {

	
// if(controlacceso("EDITARHISTORIALDEFACTURAS","accion")==false){	  return;		}
   
   if(confirm("Estas Seguro que quieres editar este registro")){
	if(elementofacturasCargadas==""){
		alertmensaje("FALTO SELECCIONAR UN REGISTRO")
		return
	}
	
	var fechanueva=document.getElementById("inptFechaFacturaCambiarDatosFacturacion").value
	var Detalles=document.getElementById("inptDetalleFacturaCambiarDatosFacturacion").value
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"nrofacturaEditar": nrofacturaEditar,
		"fechanueva": fechanueva,
		"Detalles": Detalles,
		"idfacturaspagadas": idFacturaSeleccionadoEsditar,
		"funt": "editardatosfactura"
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
					 alertmensaje("DATOS EDITADOS CORRECTAMENTE")
					var datos_buscados = datos[2];
					idFacturaSeleccionado="";
					elementofacturasCargadas="";
					document.getElementById('btnAnularDatosFacturasCargadas').style.backgroundColor="#efc382";
					document.getElementById('btneliminarDatosFacturasCargadas').style.backgroundColor="#ffcece";
					document.getElementById('btnEditarDatosFacturasCargadas').style.backgroundColor="#5eb8ff";
					document.getElementById("inptRegistroSeleccReportFacturasCargadas").value=""
	                document.getElementById("inptFechaFacturaCambiarDatosFacturacion").value=""
                    document.getElementById("inptDetalleFacturaCambiarDatosFacturacion").value=""
					VerCerrarCambiarDatosFactura("1")
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
function eliminarestafacturacargada() {

	// if(controlacceso("ELIMINARHISTORIALDEFACTURAS","accion")==false){	  return;	}

   
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
					elementofacturasCargadas="";
					document.getElementById('btnAnularDatosFacturasCargadas').style.backgroundColor="#efc382";
					document.getElementById('btneliminarDatosFacturasCargadas').style.backgroundColor="#ffcece";
					document.getElementById('btnEditarDatosFacturasCargadas').style.backgroundColor="#5eb8ff";
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
function anularestafacturacargada() {

	
   
   if(confirm("Estas Seguro que quieres anular este registro")){
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
		"funt": "anularfactura"
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
					elementofacturasCargadas="";
					document.getElementById('btnAnularDatosFacturasCargadas').style.backgroundColor="#efc382";
					document.getElementById('btneliminarDatosFacturasCargadas').style.backgroundColor="#ffcece";
					document.getElementById('btnEditarDatosFacturasCargadas').style.backgroundColor="#5eb8ff";
					
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
LISTA DE ARANCELES ESPECIALES
*/
var idAbmArancelesEspeciales="";
var ControlVistaArancelesEspeciales=""
function verCerrarFrmArancelesEspeciales(d){
	document.getElementById("divMinimizadoArancelesEspeciales").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERARANCELESESPECIALES","accion")==false){	  return;		}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divAbmArancelesEspeciales").style.display="";
  document.getElementById("tdEfectoArancelesEspeciales").className="magictime slideDownReturn"
	
	}else{
	//document.getElementById("divAbmArancelesEspeciales").style.display="none";
document.getElementById("tdEfectoArancelesEspeciales").className="magictime vanishOut"
	$("div[id=divAbmArancelesEspeciales]").fadeOut(500);	
	 LimpiarCamposArancelesEspeciales()
	 LimpiarCamposBusquedaArancelesEspeciales()
	}
}
function MinimizarVentanaListadoCatedras(){
	//document.getElementById("divAbmArancelesEspeciales").style.display="none";
	document.getElementById("tdEfectoArancelesEspeciales").className="magictime slideDown"
	$("div[id=divAbmArancelesEspeciales]").fadeOut(500);	
	document.getElementById("divMinimizadoArancelesEspeciales").style.display="";
}
function NuevoArancelesEspecialesFrm(){
	// if(controlacceso("INSERTARARANCELESESPECIALES","accion")==false){	  return;		}
		document.getElementById("divAbmArancelesEspeciales1").style.display="none"
		document.getElementById("divAbmArancelesEspeciales2").style.display=""
		LimpiarCamposArancelesEspeciales()
}
function EditarArancelesEspecialesFrm(){
	// if(controlacceso("EDIRARARANCELESESPECIALES","accion")==false){	  return;		}
	if(idAbmArancelesEspeciales==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmArancelesEspeciales1").style.display="none"
		document.getElementById("divAbmArancelesEspeciales2").style.display=""
		
}
function BuscarArancelesEspecialesFrm(){

		document.getElementById("divAbmArancelesEspeciales1").style.display=""
		document.getElementById("divAbmArancelesEspeciales2").style.display="none"
}
function LimpiarCamposArancelesEspeciales(){
	document.getElementById("inptNombreArancelesEspeciales").value=""
	document.getElementById("inptEstadoArancelesEspeciales").value="Activo"
	document.getElementById("inptRegistroSeleccionadoArancelesEspeciales").value=""
	idAbmArancelesEspeciales=""
	document.getElementById("btnAbmArancelesEspeciales").value="Guardar Datos"
	document.getElementById("btnAddDatosArancelesEspeciales").style.backgroundColor="#a2d2f9"
	document.getElementById("btnEditarDatosArancelesEspeciales").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosArancelesEspeciales").style.backgroundColor="#ffcece"
}
function LimpiarCamposBusquedaArancelesEspeciales(){
	document.getElementById("inptBuscarArancelesEspeciales1").value=""
	document.getElementById("divBuscadorArancelesEspeciales").innerHTML=""
	document.getElementById("lblNroRegistroArancelesEspeciales").innerHTML=""
	
}
function ObtenerdatosAbmArancelesEspeciales(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmArancelesEspeciales = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoArancelesEspeciales').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreArancelesEspeciales').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoArancelesEspeciales').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('bAsignarArancelArancelesEspeciales').innerHTML = document.getElementById('inptNombreArancelesEspeciales').value
     document.getElementById("btnAbmArancelesEspeciales").value="Editar Datos"
     document.getElementById("btnAddDatosArancelesEspeciales").style.backgroundColor="#2196f3"
     document.getElementById("btnEditarDatosArancelesEspeciales").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosArancelesEspeciales").style.backgroundColor="red"



}
function EliminarRegitroArancelesEspeciales(){
	// if(controlacceso("ELIMINARARANCELESESPECIALES","accion")==false){	  return;		}
	if(idAbmArancelesEspeciales==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoArancelesEspeciales").value="Inactivo";
	VerificarDatosArancelesEspeciales()
	}

}
function VerificarDatosArancelesEspeciales(){
	
	var inptNombreArancelesEspeciales = document.getElementById("inptNombreArancelesEspeciales").value
	var inptEstadoArancelesEspeciales = document.getElementById("inptEstadoArancelesEspeciales").value
	
	
	

	if(inptNombreArancelesEspeciales==""){
		document.getElementById("inptNombreArancelesEspeciales").focus()
		alertmensaje("Falto ingresar el nombre de la filial")
		return
	}
	
	var accion = "";
	if (idAbmArancelesEspeciales != "") {
		accion = "editar";
		// if(controlacceso("INSERTARARANCELESESPECIALES","accion")==false){	  return;		}
	} else {
		accion = "nuevo";
		// if(controlacceso("EDIRARARANCELESESPECIALES","accion")==false){	  return;		}
	}
	AbmArancelesEspeciales(inptNombreArancelesEspeciales,inptEstadoArancelesEspeciales,idAbmArancelesEspeciales, accion)
}
function AbmArancelesEspeciales(nombre,estado, idabm, accion) {
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
		url: "/GoodTechnologyEPNSA/php/ABMArancelesEspeciales.php",
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
		         
				 if(accion=="nuevo"){
					 idAbmArancelesEspeciales = datos["2"];
					 	document.getElementById('bAsignarArancelArancelesEspeciales').innerHTML = document.getElementById('inptNombreArancelesEspeciales').value
VerCerrarAsignarArancelesEspeciales("1")
				 }
                   LimpiarCamposArancelesEspeciales()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmArancelesEspeciales()
				

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function inptSeleccEstadoArancelesEspeciales(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoArancelesEspeciales1').checked=true
	document.getElementById('inptSeleccEstadoArancelesEspeciales2').checked=false	
	}else{
	document.getElementById('inptSeleccEstadoArancelesEspeciales1').checked=false
	document.getElementById('inptSeleccEstadoArancelesEspeciales2').checked=true
	}
}
function BuscarAbmArancelesEspeciales() {
// if(controlacceso("BUSCARARANCELESESPECIALES","accion")==false){	  return;		}
	var buscador = document.getElementById('inptBuscarArancelesEspeciales1').value
	var estado = ""
	if(document.getElementById('inptSeleccEstadoCatedra1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorArancelesEspeciales").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroArancelesEspeciales").innerHTML=imgCargandoB;
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
        url: "/GoodTechnologyEPNSA/php/ABMArancelesEspeciales.php",
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
			document.getElementById("divBuscadorArancelesEspeciales").innerHTML = ''
			document.getElementById("lblNroRegistroArancelesEspeciales").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorArancelesEspeciales").innerHTML = ''
			document.getElementById("lblNroRegistroArancelesEspeciales").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorArancelesEspeciales").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroArancelesEspeciales").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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

var idAbmAsignarArancelDetalle="";
function VerCerrarAsignarArancelesEspeciales(d){
	// if(controlacceso("ADDDETALLEARANCELESESPECIALES","accion")==false){	  return;		}
	if(d=="1"){
		if(idAbmArancelesEspeciales==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmAsignarArancelesEspeciales").style.display="";
		  document.getElementById("tdEfectoAsignarArancelesEspeciales").className="magictime slideLeftReturn"
		CargarArancelesEspecialesDetalles(idAbmArancelesEspeciales)
		BuscarAbmAsignarArancelesEspeciales()
	}else{
		//document.getElementById("divAbmAsignarCarreraCaja").style.display="none";
		document.getElementById("tdEfectoAsignarArancelesEspeciales").className="magictime slideRight"
	$("div[id=divAbmAsignarArancelesEspeciales]").fadeOut(500);	
	}
}
function CargarArancelesEspecialesDetalles(idArancelEspecial){
		

	
	document.getElementById("ListArancelArancelesEspeciales").innerHTML=""
	document.getElementById("inptAsignarArancelArancelesEspeciales").value=""
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idArancelEspecial": idArancelEspecial,
		"funt": "buscararancelesdisponibles"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMArancelesEspeciales.php",
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
			document.getElementById("ListArancelArancelesEspeciales").innerHTML=""
			verCerrarEfectoCargando("2")
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListArancelArancelesEspeciales").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListArancelArancelesEspeciales").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}

function LimpiarCamposAsignarArancelesEspeciales() {


	
	idAbmAsignarArancelDetalle = "";
	document.getElementById('inptAsignarArancelArancelesEspeciales').value = "";
	document.getElementById('inptMontoArancelesEspeciales').value = "";
	document.getElementById('inptRegistroSeleccionadoAsignarArancelesEspeciales').value = "";
    document.getElementById("btnEliminarAsignarArancelesEspeciales").style.backgroundColor="#ffcece"
    
}
function ObtenerdatosAbmAsignarArancelesEspeciales(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
    LimpiarCamposAsignarArancelesEspeciales()
	datostr.className = 'tableRegistroSelec'
	idAbmAsignarArancelDetalle = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoAsignarArancelesEspeciales').value = $(datostr).children('td[id="td_datos_1"]').html();
    document.getElementById("btnEliminarAsignarArancelesEspeciales").style.backgroundColor="red"
    
}

function VerificarDatosAsignarArancelesEspeciales(){
	

	var codarancel="";
	$("input[id=inptAsignarArancelArancelesEspeciales]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         codarancel=$(match).attr("id")
       } else {
           // value is not in list
       }
});

var inptMontoArancelesEspeciales=document.getElementById("inptMontoArancelesEspeciales").value
var inptAsignarTipoArancelesEspeciales=document.getElementById("inptAsignarTipoArancelesEspeciales").value
var inptAsignarOperacionArancelesEspeciales=document.getElementById("inptAsignarOperacionArancelesEspeciales").value

	if(inptMontoArancelesEspeciales==""){
	
		alertmensaje("Falto seleccionar el monto")
		return
	}
	if(codarancel==""){
	
		alertmensaje("Falto seleccionar el arancel")
		return
	}
	
	var accion = "nuevodetalle";
	// if(controlacceso("ADDDETALLEARANCELESESPECIALES","accion")==false){	  return;		}
	AbmAsignarrArancelDetalle(inptAsignarOperacionArancelesEspeciales,inptAsignarTipoArancelesEspeciales,inptMontoArancelesEspeciales,codarancel,"Activo",idAbmAsignarArancelDetalle, accion)
}
function eliminarDatosCarreraAsignarArancelesEspeciales(){
	if(idAbmAsignarArancelDetalle==""){
		
		return false;
	}
	// if(controlacceso("ADDDETALLEARANCELESESPECIALES","accion")==false){	  return;		}
	AbmAsignarrArancelDetalle("0","0","0","xx","Inactivo",idAbmAsignarArancelDetalle, "eliminardetalle")
}
function AbmAsignarrArancelDetalle(operacion,tipo,monto,cod_listadearancelesfk,estado,idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("idarancelesepecialesfk", idAbmArancelesEspeciales)
	datos.append("cod_listadearancelesfk", cod_listadearancelesfk)
	datos.append("monto", monto)
	datos.append("tipo", tipo)
	datos.append("operacion", operacion)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMArancelesEspeciales.php",
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
		
                LimpiarCamposAsignarArancelesEspeciales()
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					CargarArancelesEspecialesDetalles(idAbmArancelesEspeciales)
					BuscarAbmAsignarArancelesEspeciales()
				
					

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function BuscarAbmAsignarArancelesEspeciales() {
	// if(controlacceso("ADDDETALLEARANCELESESPECIALES","accion")==false){	  return;		}
	
	document.getElementById("divBuscadorAsignarArancelesEspeciales").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroAsignarArancelBecados").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": idAbmArancelesEspeciales,
		"funt": "buscardetallearancel"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMArancelesEspeciales.php",
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
			document.getElementById("divBuscadorAsignarArancelesEspeciales").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarArancelBecados").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorAsignarArancelesEspeciales").innerHTML = ''
			document.getElementById("lblNroRegistroAsignarArancelBecados").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorAsignarArancelesEspeciales").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroAsignarArancelBecados").innerHTML="Se encontraron "+datos[3]+" registro(s)";
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
LISTA DE CAJAS
*/
var idAbmListaCajas="";
var ControlVistaListaCajas=""
function verCerrarFrmListaCajas(d){
	document.getElementById("divMinimizadoListaCajas").style.display="none";
	  document.getElementById("divSegundoPlano").style.display="none"	
	// if(controlacceso("VERLISTADOCAJAS","accion")==false){return;}

	if(d=="1"){
	minimizartodaventanaabierto()	
	document.getElementById("divAbmListaCajas").style.display="";
document.getElementById("tdEfectoListadoCajas").className="magictime slideDownReturn"
	
	}else{
	//document.getElementById("divAbmListaCajas").style.display="none";
document.getElementById("tdEfectoListadoCajas").className="magictime vanishOut"
	$("div[id=divAbmListaCajas]").fadeOut(500);	
	 LimpiarCamposListaCajas()
	 LimpiarCamposBusquedaListaCajas()
	}
}
function MinimizarVentanaListaCajas(){
	//document.getElementById("divAbmListaCajas").style.display="none";
document.getElementById("tdEfectoListadoCajas").className="magictime slideDown"
	$("div[id=divAbmListaCajas]").fadeOut(500);	
	document.getElementById("divMinimizadoListaCajas").style.display="";
}
function NuevoListaCajasFrm(){
		// if(controlacceso("INSERTARLISTADOCAJAS","accion")==false){return;}
		document.getElementById("divAbmListaCajas1").style.display="none"
		document.getElementById("divAbmListaCajas2").style.display=""
		LimpiarCamposListaCajas()
}
function EditarListaCajasFrm(){
	// if(controlacceso("EDITARLISTADOCAJAS","accion")==false){return;}
	
	if(idAbmListaCajas==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
		document.getElementById("divAbmListaCajas1").style.display="none"
		document.getElementById("divAbmListaCajas2").style.display=""
		
}
function BuscarListaCajasFrm(){
	
		document.getElementById("divAbmListaCajas1").style.display=""
		document.getElementById("divAbmListaCajas2").style.display="none"
}
function LimpiarCamposListaCajas(){
	document.getElementById("inptNombreListaCajas").value=""
	document.getElementById("inptFilialDestinoListaCajas").value=""
	document.getElementById("inptFilialListaCajas").value=""
	document.getElementById("inptEstadoListaCajas").value="Activo"
	document.getElementById("inptRegistroSeleccionadoListaCajas").value=""
	idAbmListaCajas=""
	document.getElementById("btnAbmListaCajas").value="Guardar Datos"
	document.getElementById("btnEditarDatosListaCajas").style.backgroundColor="#b5f5b7"
     document.getElementById("btnEliminarDatosListaCajas").style.backgroundColor="#ffcece"
}
function LimpiarCamposBusquedaListaCajas(){
	document.getElementById("inptBuscarListaCajas1").value=""
	document.getElementById("divBuscadorListaCajas").innerHTML=""
	document.getElementById("lblNroRegistroListaCajas").innerHTML=""
	
}
function ObtenerdatosAbmListaCajas(datostr) {


	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''

	});
		
	datostr.className = 'tableRegistroSelec'
	idAbmListaCajas = $(datostr).children('td[id="td_id"]').html();
	document.getElementById('inptRegistroSeleccionadoListaCajas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptNombreListaCajas').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptEstadoListaCajas').value = $(datostr).children('td[id="td_datos_2"]').html();
	document.getElementById('inptFilialListaCajas').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptFilialDestinoListaCajas').value = $(datostr).children('td[id="td_datos_5"]').html();
     // document.getElementById("bAsignarCarreraCaja").innerHTML="CAJA "+document.getElementById('inptNombreListaCajas').value
     document.getElementById("btnAbmListaCajas").value="Editar Datos"
     document.getElementById("btnEditarDatosListaCajas").style.backgroundColor="#4CAF50"
     document.getElementById("btnEliminarDatosListaCajas").style.backgroundColor="red"



}
function EliminarRegitroListaCajas(){
	
	// if(controlacceso("ELIMINARLISTADOCAJAS","accion")==false){return;}
	
	if(idAbmListaCajas==""){		
		alertmensaje("Falto seleccionar un registro")
		return
	}
	if(confirm("Estas seguro que quieres eliminar el registro seleccionado")){
		 document.getElementById("inptEstadoListaCajas").value="Inactivo";
	VerificarDatosListaCajas()
	}

}
function CargarCarrerasAsingarCaja(idAbmListaCajas){
		
		var codFilial="";
$("input[id=inptFilialListaCajas]").each(function (i, Elemento) {
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
	
	document.getElementById("ListCarrerasAsignarCaja").innerHTML=""
	document.getElementById("inptAsignarCarreraCaja").value=""
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilial": codFilial,
		"idcajaFk": idAbmListaCajas,
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
			document.getElementById("ListCarrerasAsignarCaja").innerHTML=""
			verCerrarEfectoCargando("2")
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
					return false;
			
		},
		success: function (responseText) {
verCerrarEfectoCargando("2")
			var Respuesta = responseText;
			console.log(Respuesta)
				document.getElementById("ListCarrerasAsignarCaja").innerHTML=""
				
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
		         if (Respuesta == true) {	
					var datos_buscados1 = datos[2];
					document.getElementById("ListCarrerasAsignarCaja").innerHTML = datos_buscados1
				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)

			}
		}
	});
	
}
function VerificarDatosListaCajas(){
	
	var inptNombreListaCajas = document.getElementById("inptNombreListaCajas").value
	var inptEstadoListaCajas = document.getElementById("inptEstadoListaCajas").value
	
	var codFilial="";
	$("input[id=inptFilialListaCajas]").each(function (i, Elemento) {
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
	
		alertmensaje("Falto seleccionar filial Origen")
		return
	}

	
	if(inptNombreListaCajas==""){
		document.getElementById("inptNombreListaCajas").focus()
		alertmensaje("Falto ingresar el nombre de la sucursal")
		return
	}
	
	var accion = "";
	if (idAbmListaCajas != "") {
		accion = "editar";
		// if(controlacceso("EDITARLISTADOCAJAS","accion")==false){return;}
	} else {
		accion = "nuevo";
		// if(controlacceso("INSERTARLISTADOCAJAS","accion")==false){return;}
	}
	AbmListaCajas(codFilial,inptNombreListaCajas,inptEstadoListaCajas,idAbmListaCajas, accion)
}
function AbmListaCajas(cod_filialFkOrigen,nombre,estado, idabm, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("nro", nombre)
	datos.append("cod_filialFkOrigen", cod_filialFkOrigen)
	datos.append("estado", estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMListaCajas.php",
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
		
                 idAbmListaCajas = datos["2"];
				 if(accion=="nuevo"){
					   document.getElementById("bAsignarCarreraCaja").innerHTML="CAJA "+document.getElementById('inptNombreListaCajas').value
					 VerCerrarAsignarCarreraenCaja("1")
					 
				 }
					alertmensaje("DATOS CARGADO CORRECTAMENTE...")
					BuscarAbmListaCajas()
				
					

				}
			} catch (error) {
				alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function checkestadoListaCajas(d){
	if(d=="1"){
	document.getElementById('inptSeleccListaCajas1').checked=true
	document.getElementById('inptSeleccListaCajas2').checked=false	
	}else{
	document.getElementById('inptSeleccListaCajas1').checked=false
	document.getElementById('inptSeleccListaCajas2').checked=true
	}
}
function BuscarAbmListaCajas() {
	// if(controlacceso("BUSCARLISTADOCAJAS","accion")==false){return;}
	var filialorigen = document.getElementById('inptBuscarListaCajas1').value
	var filialdestino = document.getElementById('inptBuscarListaCajas3').value
	var nrocaja = document.getElementById('inptBuscarListaCajas2').value
	var estado = ""
	if(document.getElementById('inptSeleccListaCajas1').checked==true){
		estado = "Activo"
	}else{
		estado = "Inactivo"
	}
	document.getElementById("divBuscadorListaCajas").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroListaCajas").innerHTML=imgCargandoB;
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"filialorigen": filialorigen,
		"filialdestino": filialdestino,
		"nrocaja": nrocaja,
		"estado": estado,
		"funt": "buscar"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListaCajas.php",
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
			document.getElementById("divBuscadorListaCajas").innerHTML = ''
			document.getElementById("lblNroRegistroListaCajas").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorListaCajas").innerHTML = ''
			document.getElementById("lblNroRegistroListaCajas").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {

					var datos_buscados = datos[2];
					document.getElementById("divBuscadorListaCajas").innerHTML = datos_buscados					
                   document.getElementById("lblNroRegistroListaCajas").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   
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
function BuscarListCajaSelect() {
	var codFilialOrigen="";
	$("input[id=inptNombreAsignarFilial]").each(function (i, Elemento) {
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
	var codFilialDestino="";
	$("input[id=inptNombreAsignarFilia2]").each(function (i, Elemento) {
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
	if(codFilialDestino==""){
		
		return
	}
	document.getElementById("ListCaja").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilialOrigen": codFilialOrigen,
		"codFilialDestino": codFilialDestino,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListaCajas.php",
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
			document.getElementById("ListCaja").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListCaja").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("ListCaja").innerHTML=datos_buscados
					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarListCajaSelectNroFactura() {
	var codFilialOrigen="";
	$("input[id=inptFilialOrigenHabilitarCaja]").each(function (i, Elemento) {
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

	
	document.getElementById("listCajaNroFactura").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"codFilialOrigen": codFilialOrigen,
		"funt": "buscarSelect"
	};
	$.ajax({

		data: datos,
        url: "/GoodTechnologyEPNSA/php/ABMListaCajas.php",
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
			document.getElementById("listCajaNroFactura").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("listCajaNroFactura").innerHTML = ''
			
		
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
		       if (Respuesta == true) {
				   
					var datos_buscados = datos[2];
					document.getElementById("listCajaNroFactura").innerHTML=datos_buscados
					
				}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}

function buscarOptionCaja() {	
	document.getElementById("inptcajaAperturaCierreCaja").innerHTML = ""
	// document.getElementById("inptSeleccPuntoExpedicionVenta").innerHTML = ""
	//document.getElementById("inptCajalNroFactura").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"cod_local": filiaruser,
		"funt": "buscaroption"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmCaja.php",
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
			document.getElementById("inptcajaAperturaCierreCaja").innerHTML = ''
			// document.getElementById("inptSeleccPuntoExpedicionVenta").innerHTML = ''
			//document.getElementById("inptCajalNroFactura").innerHTML = ''
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("inptcajaAperturaCierreCaja").innerHTML = ''
			// document.getElementById("inptSeleccPuntoExpedicionVenta").innerHTML = ''
			//document.getElementById("inptCajalNroFactura").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				 Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {
					var datos_buscados = datos[2];
					var datos_expedicion = datos[4];
					document.getElementById("inptcajaAperturaCierreCaja").innerHTML = datos_buscados
					// document.getElementById("inptSeleccPuntoExpedicionVenta").innerHTML = datos_expedicion
					//document.getElementById("inptCajalNroFactura").innerHTML = datos_expedicion
					// document.getElementById("inptSeleccPuntoExpedicionVenta").value="";
					// seleccionarcaja()
					
					controldecaja()
					
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}


//HISTORIAL DE DESCARGA DE BASE DATOS
function verCerrarHistorialDescargaBD(){
	
if(document.getElementById("divHistorialDescargaBD").style.display==""){
		
// document.getElementById("tdEfectoHistorialDescargaBD").className="magictime vanishOut"
	$("div[id=divHistorialDescargaBD]").fadeOut(500);	
		limpiarCamposHistorialDescargaBD()
	}else{	
	// if(controlacceso("VERHISTORIALDB","accion")==false){return;}		
		document.getElementById("divHistorialDescargaBD").style.display=""
 // document.getElementById("tdEfectoHistorialDescargaBD").className="magictime slideDownReturn"
	buscarHistorialDescargaBD()
	}	
}
function limpiarCamposHistorialDescargaBD(){
	document.getElementById("divBuscadorHistorialDescargaBD").innerHTML = "";
}


function buscarHistorialDescargaBD() {
	document.getElementById("divBuscadorHistorialDescargaBD").innerHTML = ""
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscar"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmbackup.php",
		type: "post",
		
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorHistorialDescargaBD").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorHistorialDescargaBD").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
			   if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("inptTotalRegistrosHistorialDescargaBD").value = datos[3]
					document.getElementById("divBuscadorHistorialDescargaBD").innerHTML = datos_buscados
					}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}



function DescargarBaseDatos() {
	// if(controlacceso("VERHISTORIALDB","accion")==false){return;}
	verCerrarEfectoCargando("1")
	obtener_datos_user();
	var datos = {
			"useru": userid,
			"passu": passuser,
			"navegador": navegador,
			"cod_local": filiaruser,
			"funt": "descargarBD"
	};console.log(datos);
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmbackup.php",
		type: "post",
		 
		
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
			console.error("Error: ", errorThrowm)
			verCerrarEfectoCargando("")
			manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			verCerrarEfectoCargando("")
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
			   if (Respuesta == true) {
					var ruta = datos[2];
					var nombre_archivo = datos[3];
					console.log(ruta, nombre_archivo)
					var link = document.createElement('a');
					link.href = ruta + nombre_archivo;
					link.download = nombre_archivo; // Nombre del archivo que se descargará
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
					buscarHistorialDescargaBD()
					eliminarArchivoBD(nombre_archivo)
					}
			} catch (error) {
				console.error(error);
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function eliminarArchivoBD(nombre_archivo) {
	obtener_datos_user();
	var datos = {
			"useru": userid,
			"passu": passuser,
			"navegador": navegador,
			"nombre_archivo": nombre_archivo,
			"funt": "eliminarBD"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmbackup.php",
		type: "post",
		 
		
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
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}


function limpiarPuntoExpedicion(){
	
	if(document.getElementById('inptSeleccionImprimirCobranza').value=="FACTURA"){
		document.getElementById('inptSeleccionImprimirCobranza').style.backgroundColor=""
		
		buscarnroexpedicion()
	// buscarhistorialpagodesdefactura()
	 // BuscarArancelesAPagarList()
		 
	}else{
		document.getElementById("inptPuntoExpedicionCobrarAranceles").value=""
		document.getElementById("inptFacturaNroCobrarAranceles").value=""
		document.getElementById('inptSeleccionImprimirCobranza').style.backgroundColor="#c0e2fd"
		 
	}
	// buscarnrodeventas()
}

function generarDiplomas(tipo) {
	if (idAlumnoFkAsignar == "") {
		alertmensaje("Falta seleccionar un registro")
		return false;
	}
	const nombre_alumno= document.getElementById('inptNombreAsignarAlumnos').value;
	const carrera= document.getElementById('inptCarreraAsignarAlumnos').value;
	const fechaActual= new Date();
	const fecha= fechaActual.getDate() + " de " + fechaActual.toLocaleString('default', { month: 'long' }) + " de " + fechaActual.getFullYear();

	// Genera la estructura con los datos
	const pagina= "<div style= 'display:flex;align-item: center;width: 1480px; margin: 20px;border-style: solid; border-width: 3px;border-radius: 38px;'><div style='margin: 4px;margin-top: 7px;border-style: solid; border-width: 3px;border-radius: 34px;'><div style='border-width: 5px; border-style: solid;margin: 4px;margin-top: 5px;border-radius: 30px;width: 1445px'>"+
		"<div style='text-align: center;margin-top: 50px'><img src='../iconos/republicaTitulo.png' style='width: 85%;height: 110px;' /></div>"+
		

		"<table style='margin-left: 15px;margin-top: 25px;'><tr>"+
			"<td style='width:400px; padding-left: 15px'>"+
				"<div style='border-style: solid; border-width: 3px;border-radius: 25px;padding: 5px;    margin-top: 30px;'>"+
					"<table><tr>"+
						"<td style='width: 60%;font-weight: bold;font-size: 29pt;font-family: monospace;'>"+
							"CENTRO DE FORMACION Y CAPACITACION LABORAL"+
						"</td>"+
						"<td>"+
							"<img src='../iconos/iconoUV.jpg' style= 'margin: 10px;' height=150 />"+
						"</td>"+
					"</tr></table>"+
				"</div>"+
				"<p style= 'font-weight: bold;font-size: 29pt;'>Incorporado a la Enseñanza Oficial por Resolucion N° 335 del MEC.</p>"+
			"</td>"+
			"<td style='font-family: \"Pinyon Script\", cursive;font-size: 65pt;padding-left: 25px;'>"+
				"<h1 style='margin: 0;font-style: italic; font-size: 120pt;    margin-top: -90px;'>Diploma</h1>"+
				"<p style='font-size: 45px;'>Otorgado a: </p>"+
				"<h2 class='titulo-variables' style='font-size: 55pt;margin: 0;'>"+nombre_alumno.toLowerCase()+"</h2>" +
				"<p style='font-size: 37px;'>Por haber concluido satisfactoriamente el "+tipo+" de: </p>"+
			"</td>"+
		"</tr></table>"+
		
		"<div style='text-align: center;'>"+ 
				"<h1 class='titulo-variables' style='margin: 0px;font-size: 60pt;text-shadow: 4px 1px 3px #777777; font-family: \"Pinyon Script\", cursive;'>"+carrera.toLowerCase()+"</h1>" +
				"<p style='text-indent: 0px;font-size:30pt;margin-top: 15px'>Villarrica - Paraguay, "+fecha+"</p>"+
				"<pre style='font-family: calibri;font-size: 15pt;text-indent: 610px;margin-top: 130px; font-weight: 500; '>                                                        Lic. Felicita Urunaga de García.</pre>"+
				
				"<pre style='font-family: calibri;font-size: 20pt;text-indent: 500px;margin-top: -25px; font-weight: 800;font-family: \"Pinyon Script\", cursive;'>                                                        Director General</pre>"+
		"</div>"+
	"</div></div></div>";

	// Redirecciona y abre en una nueva pestaña
	document.getElementById("divCabeceraImpresiones").innerHTML = pagina
	var documento=pagina;

	localStorage.setItem("reporte", documento);
	localStorage.setItem("tipo", "reporte");
	window.open("/GoodTechnologyEPNSA/system/reportBlankHoriz.html");
}



function vercerrarventanamenu(nro){
	
	if(nro=="1"){
		document.getElementById("ContenedorAccesoDirecto").style.display="";
		document.getElementById("ContenedorListado").style.display="none";
		document.getElementById("ContenedorAdministrativo").style.display="none";
		document.getElementById("ContenedorInforme").style.display="none";
		document.getElementById("ContenedorAcademico").style.display="none";
		document.getElementById("ContenedorSistema").style.display="none";
	}
	
	
	if(nro=="2"){
		document.getElementById("ContenedorAccesoDirecto").style.display="none";
		document.getElementById("ContenedorListado").style.display="";
		document.getElementById("ContenedorAdministrativo").style.display="none";
		document.getElementById("ContenedorInforme").style.display="none";
		document.getElementById("ContenedorAcademico").style.display="none";
		document.getElementById("ContenedorSistema").style.display="none";
	}
	
	
	if(nro=="3"){
		document.getElementById("ContenedorAccesoDirecto").style.display="none";
		document.getElementById("ContenedorListado").style.display="none";
		document.getElementById("ContenedorAdministrativo").style.display="";
		document.getElementById("ContenedorInforme").style.display="none";
		document.getElementById("ContenedorAcademico").style.display="none";
		document.getElementById("ContenedorSistema").style.display="none";
	}
	
	
	if(nro=="4"){
		document.getElementById("ContenedorAccesoDirecto").style.display="none";
		document.getElementById("ContenedorListado").style.display="none";
		document.getElementById("ContenedorAdministrativo").style.display="none";
		document.getElementById("ContenedorAcademico").style.display="";
		document.getElementById("ContenedorInforme").style.display="none";
		document.getElementById("ContenedorSistema").style.display="none";
	}
	
	
	if(nro=="5"){
		document.getElementById("ContenedorAccesoDirecto").style.display="none";
		document.getElementById("ContenedorListado").style.display="none";
		document.getElementById("ContenedorAdministrativo").style.display="none";
		document.getElementById("ContenedorInforme").style.display="none";
		document.getElementById("ContenedorAcademico").style.display="none";
		document.getElementById("ContenedorSistema").style.display="";
	}


	if(nro=="6"){
		document.getElementById("ContenedorAccesoDirecto").style.display="none";
		document.getElementById("ContenedorListado").style.display="none";
		document.getElementById("ContenedorAdministrativo").style.display="none";
		document.getElementById("ContenedorAcademico").style.display="none";
		document.getElementById("ContenedorSistema").style.display="none";
		document.getElementById("ContenedorInforme").style.display="";
	}
	
	
}





function imprimirCalificaciones(){
	
	 if(verificarAlumnoCalificaciones==""){
		alertmensaje("Falta seleccionar un registro")
		return false;
	}
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idAbmAbmAlumnos": idAbmAbmAlumnos,
		"cod_carreraFK": cod_CarreraAlumno_Calificacion,
		"funt": "buscarListaCalificaciones"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/ABMCalificaciones.php",
		type: "post",
		
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

  			
      document.getElementById("CIActaCalificaciones").innerHTML=datos[3];
      document.getElementById("NombreActaCalificaciones").innerHTML=datos[4]+ " " +datos[5];
      document.getElementById("CarreraActaCalificaciones").innerHTML=datos[6]; 
      document.getElementById("FechaActaCalificaciones").innerHTML=getCurrentDate(); 
	  
      document.getElementById("DivContenidoCalificacioes").innerHTML=datos_buscados
      var documento= document.getElementById("ActaCalficaciones").innerHTML;
     localStorage.setItem("contrato", documento);
	 var URL= "/GoodTechnologyEPNSA/system/reportCalificaciones.html";
        window.open(URL, 'Imprimir', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,left = 0');	
					}
			} catch (error) {
alertmensaje("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	
	
	
}



function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = now.getDate();
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
}







/*
ABM APERTURA CIERRE CAJA
*/
function verCerrarVentanaAbmAperturaCierreCaja(){
	if(document.getElementById("divAbmAperturaCierreCaja").style.display==""){
		document.getElementById("tdEfectoAbmAperturaCierreCaja").className="magictime vanishOut"
	$("div[id=divAbmAperturaCierreCaja]").fadeOut(500);	
		
	}else{	
      if(controlacceso(controlaperturacierrecaja,"accion")==false){
			//SIN PERMISO
	  return;
		}
		
		var f = new Date();
	
	var anho = f.getFullYear()
	
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	var hora = f.getHours()
	if (hora < 10) {
		hora = "0" + hora;
	}
    var minuto = f.getMinutes()
	if (minuto < 10) {
		minuto = "0" + minuto;
	}
    var segundo = f.getSeconds()
	if (segundo < 10) {
		segundo = "0" + segundo;
	}
     
	  if(controlaperturacierrecaja!="ABRIRCERRARCAJA"){
	  document.getElementById('inptFechaCierreAperturaCierreCaja').value =  anho+"-" + mes + "-" +dia +"T"+hora+":"+minuto;
		  
	  }else{
		  document.getElementById('inptFechaAperturaCierreCaja').value =  anho+"-" + mes + "-" +dia +"T"+hora+":"+minuto;
		  
	  }		
		document.getElementById("divAbmAperturaCierreCaja").style.display=""
		 document.getElementById("tdEfectoAbmAperturaCierreCaja").className="magictime slideDownReturn"
		document.getElementById("imgVolverCerrarApCieCaja").style.display=""
		document.getElementById("imgVolverAtrasApCieCaja").style.display="none"
		 buscartotalmovimientos()
		
		
	}
}
function verCerrarVentanaAbmAperturaCierreCaja1(){
	if(document.getElementById("divAbmAperturaCierreCaja").style.display==""){
		//document.getElementById("divAbmAperturaCierreCaja").style.display="none"
		document.getElementById("tdEfectoAbmAperturaCierreCaja").className="magictime vanishOut"
	$("div[id=divAbmAperturaCierreCaja]").fadeOut(500);	
	}else{		
	if(controlacceso(controlaperturacierrecaja,"accion")==false){
			//SIN PERMISO
	  return;
		}
		document.getElementById("divAbmAperturaCierreCaja").style.display=""
		 document.getElementById("tdEfectoAbmAperturaCierreCaja").className="magictime slideDownReturn"
		document.getElementById("imgVolverCerrarApCieCaja").style.display="none"
		document.getElementById("imgVolverAtrasApCieCaja").style.display=""
	
			var f = new Date();
	
	var anho = f.getFullYear()
	
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	var hora = f.getHours()
	if (hora < 10) {
		hora = "0" + hora;
	}
    var minuto = f.getMinutes()
	if (minuto < 10) {
		minuto = "0" + minuto;
	}
    var segundo = f.getSeconds()
	if (segundo < 10) {
		segundo = "0" + segundo;
	}
     
	  if(controlaperturacierrecaja!="ABRIRCERRARCAJA"){
	  document.getElementById('inptFechaCierreAperturaCierreCaja').value =  anho+"-" + mes + "-" +dia +"T"+hora+":"+minuto;
		  
	  }else{
		  document.getElementById('inptFechaAperturaCierreCaja').value =  anho+"-" + mes + "-" +dia +"T"+hora+":"+minuto;
		  
	  }		
		
	}
}
var cajapredeterminada = '';
var controlaperturacierrecaja="ABRIRCERRARCAJA";
var codCajeroapertura="";
function controldecaja() {
	var caja = document.getElementById('inptcajaAperturaCierreCaja').value
	var codlocal = document.getElementById('inptlocalAperturaCierre').value
	document.getElementById('PTituloApCieCaja').innerHTML="Cargando datos de caja...";
	document.getElementById('btnAbmAperturaCierreCaja').value="Cargando...";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"cod_local": codlocal,
		"buscar": caja,
		"Usuario": userid,
		"funt": "controldecaja"
	};
	$.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmaperturacierrecaja.php",
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
					if(datos[2]=="1"){
						document.getElementById("inptEstadoAperturaCierreCaja").value="Cerrado"
						document.getElementById('inptMontoCierreCaja5').disabled= false;
						document.getElementById('inptMontoCierreCaja10').disabled= false;
						document.getElementById('inptMontoCierreCaja20').disabled= false;
						document.getElementById('inptMontoCierreCaja50').disabled= false;
						document.getElementById('inptMontoCierreCaja100').disabled= false;
						document.getElementById('inptMontoCierreCaja200').disabled= false;
						document.getElementById('inptMontoCierreCaja500').disabled= false;
						document.getElementById('inptMontoCierreCaja1000').disabled= false;
						document.getElementById('inptFechaCierreAperturaCierreCaja').disabled=true
						document.getElementById('inptFechaAperturaCierreCaja').disabled=true
						document.getElementById('inptMontoAperturaCierreCaja').disabled=true						
						idabmAperturacierrecaja=datos[3];
						$("input[id=inptFechaAperturaCierreCaja]").attr("type","text")
						document.getElementById('inptFechaAperturaCierreCaja').value=datos[7];
						document.getElementById('inptMontoAperturaCierreCaja').value=datos[5];
						document.getElementById('inptResumenInicialAperturaCierre').value=datos[5];
						document.getElementById('inptMontoRecaudadoCierreCaja').value=datos[10];
						document.getElementById('inptcajeroAperturaCierreCaja').value=datos[12];
						codCajeroapertura=datos[11];
						document.getElementById('btnAbmAperturaCierreCaja').value="Cerrar caja";
						document.getElementById('PTituloApCieCaja').innerHTML="Cerrar caja";
                        controlaperturacierrecaja="CERRARCERRARCAJA"
						cajapredeterminada = datos[4]			
					}else{
						document.getElementById("inptEstadoAperturaCierreCaja").value="Activo"
						document.getElementById('inptMontoCierreCaja5').disabled= true;
						document.getElementById('inptMontoCierreCaja10').disabled= true;
						document.getElementById('inptMontoCierreCaja20').disabled= true;
						document.getElementById('inptMontoCierreCaja50').disabled= true;
						document.getElementById('inptMontoCierreCaja100').disabled= true;
						document.getElementById('inptMontoCierreCaja200').disabled= true;
						document.getElementById('inptMontoCierreCaja500').disabled= true;
						document.getElementById('inptMontoCierreCaja1000').disabled= true;
						document.getElementById('inptFechaCierreAperturaCierreCaja').disabled=true
						document.getElementById('inptFechaAperturaCierreCaja').disabled=true
						document.getElementById('inptMontoAperturaCierreCaja').disabled=false
							 // if(accesosuser["CAMBIARMONTOAPERTURA"]["accion"]=="NO"){
	         // document.getElementById('inptMontoAperturaCierreCaja').disabled=true
	         // }
						document.getElementById('inptMontoAperturaCierreCaja').value=datos[3];
						document.getElementById('inptResumenInicialAperturaCierre').value=datos[3];
						document.getElementById('inptFechaCierreAperturaCierreCaja').value="";
						$("input[id=inptFechaAperturaCierreCaja]").attr("type","datetime-local")
						document.getElementById('inptMontoCierreCaja5').value= 0;
						document.getElementById('inptMontoCierreCaja10').value= 0;
						document.getElementById('inptMontoCierreCaja20').value= 0;
						document.getElementById('inptMontoCierreCaja50').value= 0;
						document.getElementById('inptMontoCierreCaja100').value= 0;
						document.getElementById('inptMontoCierreCaja200').value= 0;
						document.getElementById('inptMontoCierreCaja500').value= 0;
						document.getElementById('inptMontoCierreCaja1000').value= 0;
						document.getElementById('inptMontoRecaudadoCierreCaja').value="0";
						document.getElementById('inptcajeroAperturaCierreCaja').value=document.getElementById("lblUser").innerHTML;
						 controlaperturacierrecaja="ABRIRCERRARCAJA"	
						 codCajeroapertura=userid
						 document.getElementById('btnAbmAperturaCierreCaja').value="Iniciar caja";
						 document.getElementById('PTituloApCieCaja').innerHTML="Apertura de caja";
						 idabmAperturacierrecaja="";
						cajapredeterminada = '';
					}
					calcularMontoMovimientoAperturaCierreCaja();
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
						var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function buscartotalmovimientos() {
	if(idabmAperturacierrecaja==""){
		return
	}
	document.getElementById('inptMontoRecaudadoCierreCaja').value="...."
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idArqeoFk": idabmAperturacierrecaja,
		"funt": "buscarmoviemientocaja"
	};
	$.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmaperturacierrecaja.php",
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
				
				  document.getElementById('inptMontoRecaudadoCierreCaja').value=datos[2];
				  DetalleticketCaja=datos[3];
						
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
						var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}

function calcularMontoMovimientoAperturaCierreCaja() {
	let total= 0;
	// Obtiene las cantidades de tipos de monedas y valida
	const inptMontoCierreCaja5= parseInt(document.getElementById('inptMontoCierreCaja5').value || 0)*500;
	const inptMontoCierreCaja10= parseInt(document.getElementById('inptMontoCierreCaja10').value || 0)*1000;
	const inptMontoCierreCaja20= parseInt(document.getElementById('inptMontoCierreCaja20').value || 0)*2000;
	const inptMontoCierreCaja50= parseInt(document.getElementById('inptMontoCierreCaja50').value || 0)*5000;
	const inptMontoCierreCaja100= parseInt(document.getElementById('inptMontoCierreCaja100').value || 0)*10000;
	const inptMontoCierreCaja200= parseInt(document.getElementById('inptMontoCierreCaja200').value || 0)*20000;
	const inptMontoCierreCaja500= parseInt(document.getElementById('inptMontoCierreCaja500').value || 0)*50000;
	const inptMontoCierreCaja1000= parseInt(document.getElementById('inptMontoCierreCaja1000').value || 0)*100000;

	total= inptMontoCierreCaja5+inptMontoCierreCaja10+inptMontoCierreCaja20+inptMontoCierreCaja50+inptMontoCierreCaja100+inptMontoCierreCaja200+inptMontoCierreCaja500+inptMontoCierreCaja1000;
	document.getElementById('inptResumenCierreAperturaCierre').value= total.toString();
	separadordemiles(document.getElementById('inptResumenCierreAperturaCierre'));

	document.getElementById('inptMontoCierreCierreCaja').value= total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	var movimiento = document.getElementById("inptMontoRecaudadoCierreCaja").value
	movimiento= movimiento.replace('.', '');
	if(movimiento=="...." || movimiento==""){
		movimiento = 0;
	}
	movimiento= parseInt(movimiento)

	let montoApertura = document.getElementById("inptResumenInicialAperturaCierre").value.replace(/\./g, '');
	montoApertura= parseInt(montoApertura);

	document.getElementById('inptResumenTotalAperturaCierre').value= (total - montoApertura).toString();
	separadordemiles(document.getElementById('inptResumenTotalAperturaCierre'));
}

var idabmAperturacierrecaja="";
function verificarcamposaperturacierredecaja() {
	
	var movimiento = document.getElementById("inptMontoRecaudadoCierreCaja").value
	movimiento= movimiento.replace('.', '');
	if(movimiento=="...." || movimiento==""){
		return;
	}

	// Obtiene las cantidades de tipos de monedas y valida
	const inptMontoCierreCaja5= document.getElementById('inptMontoCierreCaja5').value || 0;
	const inptMontoCierreCaja10= document.getElementById('inptMontoCierreCaja10').value || 0;
	const inptMontoCierreCaja20= document.getElementById('inptMontoCierreCaja20').value || 0;
	const inptMontoCierreCaja50= document.getElementById('inptMontoCierreCaja50').value || 0;
	const inptMontoCierreCaja100= document.getElementById('inptMontoCierreCaja100').value || 0;
	const inptMontoCierreCaja200= document.getElementById('inptMontoCierreCaja200').value || 0;
	const inptMontoCierreCaja500= document.getElementById('inptMontoCierreCaja500').value || 0;
	const inptMontoCierreCaja1000= document.getElementById('inptMontoCierreCaja1000').value || 0;
	
	//var inptlocalAperturaCierre = document.getElementById('inptlocalAperturaCierre').value
	var inptlocalAperturaCierre = filiaruser
	var inptcajaAperturaCierreCaja = document.getElementById('inptcajaAperturaCierreCaja').value
	var inptMontoAperturaCierreCaja = document.getElementById('inptMontoAperturaCierreCaja').value
	var inptFechaAperturaCierreCaja = document.getElementById('inptFechaAperturaCierreCaja').value
	var inptFechaCierreAperturaCierreCaja = document.getElementById('inptFechaCierreAperturaCierreCaja').value
	var inptMontoCierreCierreCaja = document.getElementById('inptMontoCierreCierreCaja').value;
	var inptEstadoAperturaCierreCaja = document.getElementById('inptEstadoAperturaCierreCaja').value
	if (inptlocalAperturaCierre == "") {
		ver_vetana_informativa("FALTO SELECCIONAR UN LOCAL")
		return false;
	}
	if (codCajeroapertura == "") {
		ver_vetana_informativa("FALTO SELECCIONAR UN COBRADOR")
		return false;
	}

  if(controlacceso(controlaperturacierrecaja,"accion")==false){
			//SIN PERMISO
	  return;
		}
  
	var accion = "";
	if (idabmAperturacierrecaja != "") {
		accion = "editar";

		if(inptFechaCierreAperturaCierreCaja==""){
			
			ver_vetana_informativa("FALTO INGRESAR EL MONTO APERTURA")
		return false;
		}
	} else {
		accion = "nuevo";
		if(inptMontoAperturaCierreCaja==""){
			ver_vetana_informativa("FALTO INGRESAR EL MONTO APERTURA")
		return false;
		}
		
		if(inptFechaAperturaCierreCaja==""){
			ver_vetana_informativa("FALTO SELECCIONAR LA APERTURA")
		return false;
		}
	}
	abmaperturacierrecaja(codCajeroapertura,inptlocalAperturaCierre, inptcajaAperturaCierreCaja, inptMontoAperturaCierreCaja,inptFechaAperturaCierreCaja,inptMontoCierreCierreCaja,inptFechaCierreAperturaCierreCaja,inptEstadoAperturaCierreCaja,idabmAperturacierrecaja,inptMontoCierreCaja5,inptMontoCierreCaja10,inptMontoCierreCaja20,inptMontoCierreCaja50,inptMontoCierreCaja100,inptMontoCierreCaja200,inptMontoCierreCaja500,inptMontoCierreCaja1000,accion);
}

var loteCaja="";


function abmaperturacierrecaja(codusuarioap,cod_local, caja_idcaja, montoapertura,fechaapertura,montocierre,fechacierre,estado,idarqueocaja,cantMoneda5,cantMoneda10,cantMoneda20,cantMoneda50,cantMoneda100,cantMoneda200,cantMoneda500,cantMoneda1000,accion){
verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idarqueocaja", idarqueocaja)
	datos.append("cod_local", cod_local)
	datos.append("caja_idcaja", caja_idcaja)
	datos.append("montoapertura", montoapertura)
	datos.append("montocierre", montocierre)
	datos.append("fechaapertura", fechaapertura)
	datos.append("fechacierre", fechacierre)
	datos.append("estado", estado)
	datos.append("cant500", cantMoneda5);
	datos.append("cant1000", cantMoneda10);
	datos.append("cant2000", cantMoneda20);
	datos.append("cant5000", cantMoneda50);
	datos.append("cant10000", cantMoneda100);
	datos.append("cant20000", cantMoneda200);
	datos.append("cant50000", cantMoneda500);
	datos.append("cant100000", cantMoneda1000);
	datos.append("codusuarioap", codusuarioap)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmaperturacierrecaja.php",
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
					montocierre= parseInt(montocierre.replace('.', ''));

					let limite= document.getElementById('inptLimitecaja').value;
					limite= parseInt(limite.replace('.', ''));

					if (montocierre > limite) {
						ver_vetana_informativa("SE RECOMIENDA DEPOSITAR EN LA CENTRAL PARA EVITAR EXCESOS.");
					} else {
						ver_vetana_informativa("DATOS CARGADO CORRECTAMENTE...")
					}
					
					loteCaja=datos[2];
					if(estado=="Activo"){
						ImprimirTicketReportCaja()
					}else{
						ImprimirTicketReportCierreCaja()
					}
					controldecaja()
				} else {
					ver_vetana_informativa(datos[2], datos[3]);
					return false;
				}
			} catch (error) {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});

}
function vercerraropcioneimpresionapcie(d,v){
	if(d=="1"){
		document.getElementById("divOpcionesImpresionArpeturacierre").style.display=""
	}else{
		document.getElementById("divOpcionesImpresionArpeturacierre").style.display="none"
	}
}
function vercerrarvistaapcie(d,v){
	if(d=="1"){
		document.getElementById("divVistaArqueocierrecaja").style.display=""
		document.getElementById("tdEfectoArqueoCierroCaja").className="magictime slideLeftReturn"
	}else{
		//document.getElementById("divVistaArqueocierrecaja").style.display="none"
		document.getElementById("tdEfectoArqueoCierroCaja").className="magictime slideRight"
$("div[id=divVistaArqueocierrecaja]").fadeOut(500);	
	}
}

function vercerrarfiltrosBuscarVistaAperturaCierre(d,v){
	if(d=="1"){
		document.getElementById("divFiltrosAperturaCierreCaja").style.display=""
	
		if(v=="1"){
			bloquearBuscarVistaAperturaCaja("1")
		}
		if(v=="2"){
			bloquearBuscarVistaAperturaCaja("2")
		}
	}else{
		document.getElementById("divFiltrosAperturaCierreCaja").style.display="none"
	}
}

function buscarvistaaperturacierrecaja() {
	var caja = document.getElementById('inptBuscarVistaCaja1').value
	var estado = document.getElementById('inptBuscarVistaCaja2').value
	var local = document.getElementById('inptlocalVistaApCie').value
	var fechaapertura = document.getElementById('inptBuscarVistaCaja3').value
	var fechafin = document.getElementById('inptBuscarVistaCaja4').value
	var usuario = document.getElementById('inptBuscarVistaCaja5').value
	const lote= document.getElementById('inptBuscarVistaCaja6').value;
	
	document.getElementById("inptTotalAperturaArqueocierrecaja").value = ""
	document.getElementById("inptTotalCierreArqueocierrecaja").value = ""
	document.getElementById("inptCobradoArqueocierrecaja").value = ''
	document.getElementById("inptTotalIngresoArqueocierrecaja").value = ''
	document.getElementById("inptTotalEgresoArqueocierrecaja").value = ''
	document.getElementById("inptTotalDiferenciaArqueocierrecaja").value = ''
	
	vercerrarfiltrosBuscarVistaAperturaCierre("2","2")
	document.getElementById("table_vista_ap_cie").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"caja": caja,
		"estado": estado,
		"local": local,
		"fechaapertura": fechaapertura,
		"fechafin": fechafin,
		"usuario": usuario,
		"lote": lote,
		"funt": "buscarvista"
	};
	$.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmaperturacierrecaja.php",
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
		
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("table_vista_ap_cie").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("table_vista_ap_cie").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
                Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {	
					var datos_buscados = datos[2];
					document.getElementById("table_vista_ap_cie").innerHTML = datos_buscados
					
					document.getElementById("inptTotalAperturaArqueocierrecaja").value = datos[5];
					document.getElementById("inptTotalCierreArqueocierrecaja").value = datos[6];
					
					document.getElementById("inptCobradoArqueocierrecaja").value = datos[9];
					document.getElementById("inptTotalIngresoArqueocierrecaja").value = datos[7];
					document.getElementById("inptTotalEgresoArqueocierrecaja").value = datos[8];
					document.getElementById("inptTotalDiferenciaArqueocierrecaja").value = datos[4];
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
var idArqeoFk="";
function obtenerdatosaperturacierrecaja(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});
	datostr.className = 'tableRegistroSelec'
	document.getElementById('inptBuscarVistaApCie1').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptBuscarVistaApCie2').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptBuscarVistaApCie3').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptBuscarVistaApCie4').value = $(datostr).children('td[id="td_datos_8"]').html();
	document.getElementById('inptBuscarVistaApCie5').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptBuscarVistaApCie6').value = $(datostr).children('td[id="td_datos_4"]').html();
	document.getElementById('inptBuscarVistaApCie7').value = $(datostr).children('td[id="td_datos_9"]').html();
	document.getElementById('inptResumenAperturacaja').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptBuscarLoteVistaApCie').value = $(datostr).children('td[id="td_datos_10"]').html();

	document.getElementById('inptTotalCant500ConsultarCaja').value= $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptTotalCant1000ConsultarCaja').value= $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptTotalCant2000ConsultarCaja').value= $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptTotalCant5000ConsultarCaja').value= $(datostr).children('td[id="td_datos_14"]').html();
	document.getElementById('inptTotalCant10000ConsultarCaja').value= $(datostr).children('td[id="td_datos_15"]').html();
	document.getElementById('inptTotalCant20000ConsultarCaja').value= $(datostr).children('td[id="td_datos_16"]').html();
	document.getElementById('inptTotalCant50000ConsultarCaja').value= $(datostr).children('td[id="td_datos_17"]').html();
	document.getElementById('inptTotalCant100000ConsultarCaja').value= $(datostr).children('td[id="td_datos_18"]').html();

	idArqeoFk = $(datostr).children('td[id="td_id_1"]').html();
	buscarinformecaja()
	document.getElementById("divVistaArqueocierrecaja").style.display="none"
}
function ImprimirTicketDeCaja(){
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
if(idabmAperturacierrecaja==""){
	ver_vetana_informativa("NO TIENES UNA CAJA ABIERTA")
		return
	}
pagina="<div  style='background-color:#fff;'>"
+"<center>"
+"<div class='divTicket' >"
+"<p class='pTituloTicket1' >REPORTE DE CAJA</p>"
+"<div class='divSeparadorTicket' style='margin-bottom:5px'></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Imp.:</b></td>"
+"<td style=''>"+f.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Local:</b></td>"
+"<td style=''>"+ $("select[id=inptlocalAperturaCierre]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Caja:</b></td>"
+"<td style=''>"+ $("select[id=inptcajaAperturaCierreCaja]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Inicio :</b></td>"
+"<td style=''>"+ document.getElementById("inptFechaAperturaCierreCaja").value+"</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto Inicio:</b></td>"
+"<td style=''>"+document.getElementById("inptMontoAperturaCierreCaja").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Total en caja:</b></td>"
+"<td style=''>"+document.getElementById("inptMontoRecaudadoCierreCaja").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:75%'><b>Descripción</b></td>"
+"<td style='width:25%'><b>Monto</b></td>"
+"</tr>"
+"</table>"
+DetalleticketCaja
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Cajero :</b></td>"
+"<td style=''>"+document.getElementById("lblUser").innerHTML+"</td>"
+"</tr>"
+"</table>"
+"</div>"
+"</center>"
+"</div>"


var ficha=pagina;
document.getElementById("DivImprimir").innerHTML=ficha;
   var documento= document.getElementById("DivImprimir").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportTicket.html");
	 document.getElementById("DivImprimir").innerHTML = "";
//buscarDatosVentaticket(idabmVenta)
     
}

function ImprimirTicketReportCaja(){
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
pagina="<div  style='background-color:#fff;'>"
+"<center>"
+"<div class='divTicket' >"
+"<p class='pTituloTicket1' >REPORTE DE CAJA</p>"
+"<div class='divSeparadorTicket' style='margin-bottom:5px'></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Lote:</b></td>"
+"<td style=''>"+loteCaja+"</td>"
+"</tr>"
+"</table>"

+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Imp.:</b></td>"
+"<td style=''>"+f.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Local:</b></td>"
+"<td style=''>"+ $("select[id=inptlocalAperturaCierre]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Caja:</b></td>"
+"<td style=''>"+ $("select[id=inptcajaAperturaCierreCaja]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Inicio :</b></td>"
+"<td style=''>"+ document.getElementById("inptFechaAperturaCierreCaja").value+"</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto Inicio:</b></td>"
+"<td style=''>"+document.getElementById("inptMontoAperturaCierreCaja").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Cajero :</b></td>"
+"<td style=''>"+document.getElementById("lblUser").innerHTML+"</td>"
+"</tr>"
+"</table>"
+"</div>"
+"</center>"
+"</div>"


var ficha=pagina;
document.getElementById("DivImprimir").innerHTML=ficha;
   var documento= document.getElementById("DivImprimir").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportTicket.html");
	 document.getElementById("DivImprimir").innerHTML = "";
//buscarDatosVentaticket(idabmVenta)
     
}

function ImprimirTicketDespacho(){
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
pagina="<div  style='background-color:#fff;'>"
+"<div class='divTicket' >"
+"<p class='pTituloTicket1' >DESPACHO DE PRODUCTO</p>"
+"<div class='divSeparadorTicket' style='margin-bottom:5px'></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Imp.:</b></td>"
+"<td style=''>"+f.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Producto :</b></td>"
+"<td style=''>"+ document.getElementById("inptNombreProducto").value+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:150px'><b>Enviado de (Local):</b></td>"
+"<td style=''>"+ $("select[id=inptlocalProducto]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:150px'><b>Enviado a (Local):</b></td>"
+"<td style=''>"+ $("select[id=inptLocalProductoEnviarA]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Stock :</b></td>"
+"<td style=''>"+ document.getElementById("inptStockProductoEnviarA").value+"</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Usuario Responsable :</b></td>"
+"<td style=''>"+document.getElementById("lblUser").innerHTML+"</td>"
+"</tr>"
+"</table>"
+"</div>"
+"</div>"


var ficha=pagina;
document.getElementById("DivImprimir").innerHTML=ficha;
   var documento= document.getElementById("DivImprimir").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportTicket.html");
	 document.getElementById("DivImprimir").innerHTML = "";
//buscarDatosVentaticket(idabmVenta)
     
}

function ImprimirListadoDespacho(){
	
var pagina=""
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
  var fechaimpresion=f.getFullYear()+"-"+mes+"-"+dia;
  document.getElementById("divCabeceraImpresiones").innerHTML=""
document.getElementById("divPieImpresiones").innerHTML=""
document.getElementById("tbTitulosImpresiones").innerHTML=""
document.getElementById("tbDatosImpresiones").innerHTML=""
	pagina =
"<table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Encargado</b></p>"
+"<p class='pTituloC' >"+document.getElementById("ptituloUser2").innerHTML+"</p>"
+"</td>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Local de Carga</b></p>"
+"<p class='pTituloC' >"+ $("select[id=inptlocaluser]").children(":selected").text()+"</p>"
+"</td>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Fecha de impresión</b></p>"
+"<p class='pTituloC' >"+fechaimpresion+"</p>"
+"</td>"
+"</tr>"
+"</table>"
+"<br><br><center><h1 class='pTituloD' >LISTADO DE PRODUCTOS DESPACHADOS</h1><br></center>"
+"<br><br><br><table style='width:100%'>"
+"<tr>"
+"<td style='width:40%;text-align:center'>"
+"<p class='pTituloC'><b>Firma del Responsable</b></p>"
+"</td>"
+"<td style='width:40%;text-align:center'>"
+"<p class='pTituloC'><b>Firma del Repositor</b></p>"
+"</td>"
+"</tr>"
+"</table><br><br><br>"
paginaPie =
"<br><br><table class='TableRepor0' style='width:100%'>"
+"<tr>"
+"<td style='width:20%;text-align:left'>"
+"<p class='pTituloC'><b>Total Registro</b></p>"
+"<p class='pTituloC' >"+ document.getElementById("inptRegistroNroListadoDespacho").value+"</p>"
+"</td>"
+"</tr>"
+"</table>"

document.getElementById("divCabeceraImpresiones").innerHTML=pagina
document.getElementById("divPieImpresiones").innerHTML=paginaPie
document.getElementById("tbTitulosImpresiones").innerHTML=document.getElementById("tdImpresionDespachadoZ").innerHTML
document.getElementById("tbDatosImpresiones").innerHTML=document.getElementById("table_abm_listado_despacho").innerHTML

	var documento=document.getElementById("DivImpresiones").innerHTML;

	 localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "reporte");
	 window.open("/GoodTechnologyEPNSA/system/reportInformes.html");

     
}

function ImprimirTicketReportCierreCaja(){
	// Obtiene el total
	const inptMontoCierreCaja5= parseInt(document.getElementById('inptMontoCierreCaja5').value);
	const inptMontoCierreCaja10= parseInt(document.getElementById('inptMontoCierreCaja10').value);
	const inptMontoCierreCaja20= parseInt(document.getElementById('inptMontoCierreCaja20').value);
	const inptMontoCierreCaja50= parseInt(document.getElementById('inptMontoCierreCaja50').value);
	const inptMontoCierreCaja100= parseInt(document.getElementById('inptMontoCierreCaja100').value);
	const inptMontoCierreCaja200= parseInt(document.getElementById('inptMontoCierreCaja200').value);
	const inptMontoCierreCaja500= parseInt(document.getElementById('inptMontoCierreCaja500').value);
	const inptMontoCierreCaja1000= parseInt(document.getElementById('inptMontoCierreCaja1000').value);
	const total= inptMontoCierreCaja5+inptMontoCierreCaja10+inptMontoCierreCaja20+inptMontoCierreCaja50+inptMontoCierreCaja100+inptMontoCierreCaja200+inptMontoCierreCaja500+inptMontoCierreCaja1000;

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
pagina="<div  style='background-color:#fff;'>"
+"<center>"
+"<div class='divTicket' >"
+"<p class='pTituloTicket1' >REPORTE DE CAJA</p>"
+"<div class='divSeparadorTicket' style='margin-bottom:5px'></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Lote:</b></td>"
+"<td style=''>"+loteCaja+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Imp.:</b></td>"
+"<td style=''>"+f.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Local:</b></td>"
+"<td style=''>"+ $("select[id=inptlocalAperturaCierre]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Caja:</b></td>"
+"<td style=''>"+ $("select[id=inptcajaAperturaCierreCaja]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Inicio :</b></td>"
+"<td style=''>"+ document.getElementById("inptFechaAperturaCierreCaja").value+"</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto Inicio:</b></td>"
+"<td style=''>"+document.getElementById("inptMontoAperturaCierreCaja").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto Cierre:</b></td>"
+"<td style=''>"+total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+" Gs.</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Total en caja:</b></td>"
+"<td style=''>"+document.getElementById("inptMontoRecaudadoCierreCaja").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Cajero :</b></td>"
+"<td style=''>"+document.getElementById("lblUser").innerHTML+"</td>"
+"</tr>"
+"</table>"
+"</div>"
+"</center>"
+"</div>"


var ficha=pagina;
document.getElementById("DivImprimir").innerHTML=ficha;
   var documento= document.getElementById("DivImprimir").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportTicket.html");
	 document.getElementById("DivImprimir").innerHTML = "";
//buscarDatosVentaticket(idabmVenta)
     
}

function ImprimirTicketReportCaja2(){
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
pagina="<div  style='background-color:#fff;'>"
+"<center>"
+"<div class='divTicket' >"
+"<p class='pTituloTicket1' > RE-IMPRESION CAJA</p>"
+"<div class='divSeparadorTicket' style='margin-bottom:5px'></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Imp.:</b></td>"
+"<td style=''>"+f.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Local:</b></td>"
+"<td style=''>"+ $("select[id=inptlocalVistaApCie]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Caja:</b></td>"
+"<td style=''>"+ document.getElementById("inptBuscarVistaApCie1").value +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Apertura :</b></td>"
+"<td style=''>"+ document.getElementById("inptBuscarVistaApCie5").value+"</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto Apertura:</b></td>"
+"<td style=''>"+document.getElementById("inptBuscarVistaApCie3").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto Cierre:</b></td>"
+"<td style=''>"+document.getElementById("inptBuscarVistaApCie4").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Total en caja:</b></td>"
+"<td style=''>"+document.getElementById("inptTotalConsularCaja").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<div class='divSeparadorTicket' style='margin-top:5px;margin-bottom:5px' ></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Cajero :</b></td>"
+"<td style=''>"+document.getElementById("inptBuscarVistaApCie2").value+"</td>"
+"</tr>"
+"</table>"
+"</div>"
+"</center>"
+"</div>"


var ficha=pagina;
document.getElementById("DivImprimir").innerHTML=ficha;
   var documento= document.getElementById("DivImprimir").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportTicket.html");
	 document.getElementById("DivImprimir").innerHTML = "";
//buscarDatosVentaticket(idabmVenta)
     
}


/*
CONSULTA DE CAJA
*/
function verCerrarInformeConsultaCaja(){
	if(document.getElementById("divConsultaCaja").style.display==""){
		document.getElementById("divMinimizadoConsultarCaja").style.display="none"
			limpiarcamposbuscadorConsultarCaja() 
	$("div[id=divConsultaCaja]").fadeOut(500);			
	}else{		
	if(controlacceso("VERCONSULTADECAJA","accion")==false){return;}
		document.getElementById("divConsultaCaja").style.display="" 
	}
}
function limpiarcamposbuscadorConsultarCaja(){
	document.getElementById("inptTotalIngresoConsularCaja").value = ""
					document.getElementById("inptTotalEgresoConsularCaja").value = ""
					document.getElementById("inptTotalDesembolsoConsularCaja").value = ""
					document.getElementById("inptTotalConsularCaja").value = ""
					document.getElementById("inptTotalEfectivoConsultarCaja").value = ""
					document.getElementById("inptTotalTarjetaConsularCaja").value = ""
					
					document.getElementById("inptTotalMigradoConsularCaja").value = ""
					document.getElementById("inptTotalRecibidoConsularCaja").value = ""
					
					document.getElementById("inptResumenAperturacaja").value = ""
					document.getElementById("inptResumenTotalIngreso").value = ""
					document.getElementById("inptResumenTotalRecaudado").value = ""
					// document.getElementById("inptResumenCajaRecibido").value = ""
					// document.getElementById("inptResumenCajaMigrado").value = ""
					document.getElementById("inptResumenTotalEgreso").value = "" 
					// document.getElementById("inptResumenTransferencia").value = ""
					document.getElementById("inptResumenTotalCaja").value = ""
					
					document.getElementById("inptBuscarVistaApCie1").value = ""
					document.getElementById("inptBuscarVistaApCie7").value = ""
					document.getElementById("inptBuscarVistaApCie2").value = ""
					document.getElementById("inptBuscarVistaApCie3").value = ""
					document.getElementById("inptBuscarVistaApCie4").value = ""
					document.getElementById("inptBuscarVistaApCie5").value = ""
					document.getElementById("inptBuscarVistaApCie6").value = ""
					document.getElementById("table_Consultar_caja").innerHTML = ""
					document.getElementById('table_buscar_opciones_pago').innerHTML = "";
					document.getElementById('table_buscar_opciones_pago').style.display = "none";
}
function minimizarconsultacaja(){ 
	$("div[id=divConsultaCaja]").fadeOut(500);	
	document.getElementById("divMinimizadoConsultarCaja").style.display=""
}
var cobradorarqueo = "";var elemento="";
function buscarinformecaja() {
	if(controlacceso("VERCONSULTADECAJA","accion")==false){return;}
	document.getElementById("inptTotalIngresoConsularCaja").value = "..."
	document.getElementById("inptTotalDesembolsoConsularCaja").value = "..."
					document.getElementById("inptTotalEgresoConsularCaja").value = "..."
					document.getElementById("inptTotalConsularCaja").value = "..."
					document.getElementById("inptTotalEfectivoConsultarCaja").value = "..."
					document.getElementById("inptTotalTarjetaConsularCaja").value = "..."
					document.getElementById("inptTotalMigradoConsularCaja").value = "..."
					document.getElementById("inptTotalRecibidoConsularCaja").value = "..."
					 
					document.getElementById("inptResumenTotalIngreso").value = "..."
					document.getElementById("inptResumenTotalRecaudado").value = "..."
					document.getElementById("inptResumenCajaRecibido").value = "..."
					document.getElementById("inptResumenCajaMigrado").value = "..."
					document.getElementById("inptResumenTotalEgreso").value = "..."  
					document.getElementById("inptResumenTotalCaja").value = "..."  
					
	document.getElementById("table_Consultar_caja").innerHTML = imgCargandoA
	obtener_datos_user();
	
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idArqeoFk1": idArqeoFk,
		"funt": "buscarinformecaja"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abminforemcaja.php",
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
			document.getElementById("table_Consultar_caja").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("table_Consultar_caja").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
			   if (Respuesta == true) {				   
					var datos_buscados = datos[2];
					document.getElementById("table_Consultar_caja").innerHTML = datos_buscados
					document.getElementById("inptTotalEfectivoConsultarCaja").value = datos[7]
					document.getElementById("inptTotalTarjetaConsularCaja").value = datos[6]
					document.getElementById("inptTotalIngresoConsularCaja").value = datos[3]
					document.getElementById("inptTotalEgresoConsularCaja").value = datos[4]
					document.getElementById("inptTotalConsularCaja").value = datos[5]
					document.getElementById("inptTotalDesembolsoConsularCaja").value = datos[8]
					document.getElementById("inptTotalMigradoConsularCaja").value = datos[9]
					document.getElementById("inptTotalRecibidoConsularCaja").value = datos[10]
					
					 
					document.getElementById("inptResumenTotalCaja").value =  datos[5]
					document.getElementById("inptResumenTotalIngreso").value =  datos[3]
					document.getElementById("inptResumenTotalRecaudado").value = datos[7]
					document.getElementById("inptResumenCajaRecibido").value = datos[10]
					document.getElementById("inptResumenCajaMigrado").value = datos[9]
					document.getElementById("inptResumenTotalEgreso").value = datos[4]
					
					// buscar_recaudo_opciones_pago()
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function buscar_recaudo_opciones_pago() {
	document.getElementById("table_buscar_opciones_pago").innerHTML = imgCargandoA
	obtener_datos_user();
	
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"idArqeoFk1": idArqeoFk,
		"funt": "buscar_recaudo_opciones_pago"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmaperturacierrecaja.php",
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
			document.getElementById("table_buscar_opciones_pago").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("table_buscar_opciones_pago").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
			   if (Respuesta == true) {				   
					var datos_buscados = datos[2];
					document.getElementById("table_buscar_opciones_pago").innerHTML = datos_buscados
					document.getElementById("inptResumenTransferencia").value = datos[3];
					document.getElementById("table_buscar_opciones_pago").style.display = '';
					
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}






/* ABM GASTO */
function verCerrarAbmGasto(){
	document.getElementById("divSegundoPlano").style.display="none";
	if(document.getElementById("divAbmGastos").style.display==""){
	document.getElementById("divMinimizadoEgresoIngreso").style.display="none"
     //  
	$("div[id=divAbmGastos]").fadeOut(500);	
	limpiarcamposGasto()
	limpiarcamposbuscadoregresoingreso()
	}else{	
// if(controlacceso("VERLISTADOEGRESOINGRESO","accion")==false){return;}	
 		
		document.getElementById("divAbmGastos").style.display=""
       //  
	
	}
}
function limpiarcamposbuscadoregresoingreso(){
	document.getElementById("inptBuscarIngresoEgreso1").value=""
	document.getElementById("inptBuscarIngresoEgreso2").value=""
	document.getElementById("inptBuscarGastoF1").value=""
	document.getElementById("inptBuscarGastoF2").value=""
	document.getElementById("inptRegistroNroGastos").value=""
	document.getElementById("inptTotalGasto").value=""
	document.getElementById("inptRegistroSeleccGasto").value=""
	document.getElementById("table_abm_gasto").innerHTML=""
}
function minimizarventanaingresoegreso(){
	document.getElementById("divMinimizadoEgresoIngreso").style.display="" 
	$("div[id=divAbmGastos]").fadeOut(500);
}
function verCerrarVentanaAbmGasto(d, l) {
	if (d == "1") {
		if(idabmAperturacierrecaja==""){
			document.getElementById("divAbmGastos").style.display="none"
		   ver_vetana_informativa("FALTO INICIAR UNA CAJA")
		   verCerrarVentanaAbmAperturaCierreCaja1()
		   return
	   }
		
		if (l == "1") {
			limpiarcamposGasto()
			// if(controlacceso("INSERTARLISTADOEGRESOINGRESO","accion")==false){return;}	
		}
		$("div[id=divAbmGasto2]").fadeIn(250)
		document.getElementById('divAbmGasto1').style.display = "none"
	} else {
		$("div[id=divAbmGasto1]").fadeIn(250)
		document.getElementById('divAbmGasto2').style.display = "none"
	}
}
function verVentanaEditarGasto() {
		// if(controlacceso("EDITARLISTADOEGRESOINGRESO","accion")==false){return;}	
		if(idabmAperturacierrecaja==""){
			document.getElementById("divAbmGastos").style.display="none"
		   ver_vetana_informativa("FALTO INICIAR UNA CAJA")
		   verCerrarVentanaAbmAperturaCierreCaja1()
		   return
	   }
	if (idAbmGasto == "") {
		ver_vetana_informativa("FALTO SELECCIONAR UN REGISTRO")
		return;
	}
	verCerrarVentanaAbmGasto("1", "2")
}
var idAbmGasto = ""
function obtenerdatosabmGasto(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});
	
	datostr.className = 'tableRegistroSelec'
	document.getElementById('inptMontoGasto').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptRegistroSeleccGasto').value = $(datostr).children('td[id="td_datos_1"]').html();
	document.getElementById('inptMotivoGasto').value = $(datostr).children('td[id="td_datos_13"]').html();
	document.getElementById('inptFechaGasto').value = $(datostr).children('td[id="td_datos_3"]').html();
	document.getElementById('inptEstadoGasto').value = $(datostr).children('td[id="td_datos_5"]').html();
	document.getElementById('inptlocalMisGastos').value = $(datostr).children('td[id="td_datos_7"]').html();
	document.getElementById('inptNroBoletaGasto').value = $(datostr).children('td[id="td_datos_14"]').html();
	// document.getElementById('inptBancoGasto').value = $(datostr).children('td[id="td_datos_9"]').html();
	
	
	document.getElementById('inptCuentaGasto').value = $(datostr).children('td[id="td_datos_10"]').html();
	document.getElementById('inptTipoGasto').value = $(datostr).children('td[id="td_datos_6"]').html();
	document.getElementById('inptArregloGasto').value = $(datostr).children('td[id="td_datos_11"]').html();
	document.getElementById('inptMotivoMisGastos').value = $(datostr).children('td[id="td_datos_12"]').html();
	document.getElementById('inptFechaDepositoGasto').value = $(datostr).children('td[id="td_datos_18"]').html();
	document.getElementById('btnAbmGastos').value = "Editar datos";
	document.getElementById('btnEditarGastos').style.backgroundColor="";
	document.getElementById('btnConfirmarGasto').style.backgroundColor="#4caf50";
	idAbmGasto = $(datostr).children('td[id="td_id"]').html();
	$("div[id=imgFotoGastoIngresoEgreso]").css({"background-image":"url("+$(datostr).children('td[id="td_datos_15"]').html()+")"});
	fotogasto = $(datostr).children('td[id="td_datos_16"]').html() + "."+ $(datostr).children('td[id="td_datos_17"]').html()
	extgasto = $(datostr).children('td[id="td_datos_17"]').html()
	
}
function verificarcamposGasto() {
	var inptMotivoMisGastos = '';
	
	$("input[id=inptMotivoMisGastos]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         inptMotivoMisGastos=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
	var inptMontoGasto = document.getElementById('inptMontoGasto').value
	var inptMotivoGasto = document.getElementById('inptMotivoGasto').value
	var inptFechaGasto = document.getElementById('inptFechaGasto').value
	var inptEstadoGasto = document.getElementById('inptEstadoGasto').value
	var inptArregloGasto = document.getElementById('inptArregloGasto').value
	var inptlocalMisGastos = document.getElementById('inptlocalMisGastos').value
	var inptTipoGasto = document.getElementById('inptTipoGasto').value
	var inptNroBoletaGasto = document.getElementById('inptNroBoletaGasto').value
	// var inptBancoGasto = document.getElementById('inptBancoGasto') 
	var inptFechaDepositoGasto = document.getElementById('inptFechaDepositoGasto').value
    // inptBancoGasto = inptBancoGasto.options[inptBancoGasto.selectedIndex].text;
	// if(inptBancoGasto == 'SELECCIONAR'){
		// inptBancoGasto = '';
	// }
	
	
	if (inptArregloGasto == "" && inptTipoGasto=="Egreso") {
		ver_vetana_informativa("FALTO SELECCIONAR UN ARREGLO")
		return false;
	}
	
	
	var inptCuentaGasto = document.getElementById('inptCuentaGasto').value
	if (inptFechaDepositoGasto == "" && inptTipoGasto=="Deposito") {
		ver_vetana_informativa("FALTO SELECCIONAR UNA FECHA DE DEPOSITO")
		return false;
	}
	
	
	if (inptMontoGasto == "") {
		ver_vetana_informativa("FALTO INGRESAR EL MONTO DEL GASTO")
		return false;
	}
	if (inptMotivoMisGastos == "") {
		ver_vetana_informativa("FALTO SELECCIONAR EL MOTIVO")
		return false;
	}
	if (inptMotivoGasto == "") {
		ver_vetana_informativa("FALTO INGRESAR EL MOTIVO DEL GASTO")
		return false;
	}
	if (inptFechaGasto == "") {
		ver_vetana_informativa("FALTO SELECCIONAR LA FECHA DEL GASTO")
		return false;
	}
	
	if(inptTipoGasto == 'Deposito'){
		if(fotogasto == ''){
			ver_vetana_informativa("FALTO CARGAR UNA IMAGEN")
			return false;
		}
	}
	
	var accion = "";
	if (idAbmGasto != "") {
		accion = "editar";
		if(controlacceso("EDITARLISTADOEGRESOINGRESO","accion")==false){return;}	
	} else {
		if(controlacceso("INSERTARLISTADOEGRESOINGRESO","accion")==false){return;}	
		accion = "nuevo";
	}
	
	abmgastos(inptFechaDepositoGasto,inptMotivoMisGastos,inptArregloGasto,inptNroBoletaGasto , inptCuentaGasto ,inptMontoGasto, inptMotivoGasto, inptFechaGasto, inptEstadoGasto, idAbmGasto, inptTipoGasto, inptlocalMisGastos, accion);
}
function abmgastos(fechaDeposito,cod_motivo,Arreglo,nroboleta ,nrocuenta,monto, motivo, fecha, estado, idgastos, tipo, cod_local, accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idgastos", idgastos)
	datos.append("monto", monto)
	datos.append("motivo", motivo)
	datos.append("fecha", fecha)
	datos.append("estado", estado)
	datos.append("tipo", tipo)
	datos.append("cod_local", cod_local)
	datos.append("codcaja", cajapredeterminada)
	datos.append("idaperturacierrecaja", idabmAperturacierrecaja)
	datos.append("nroboleta", nroboleta)
	datos.append("Arreglo", Arreglo)
	datos.append("nrocuenta", nrocuenta)
	datos.append("cod_motivo", cod_motivo)
	datos.append("foto", fotogasto)
	datos.append("ext", extgasto)
	datos.append("fechaDeposito", fechaDeposito)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmgasto.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
 
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
				//    if(accion=="nuevo"){
				// 		ImprimirTicketEgreso()
				// 	}
					limpiarcamposGasto()
					ver_vetana_informativa("DATOS CARGADO CORRECTAMENTE...")
					idAbmGasto = ""
					buscarabmGasto()
					
				}				
			} catch (error) {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function cambiarFechaIngresoEgreso(datos){
	let fecha = obtenerFechaActual();
	if(controlacceso("CAMBIARFECHAINGRESOEGRESO","accion")==false){
		datos.value = fecha;
	return;
	}	
}
function confirmarGasto() {
	if(controlacceso("CONFIRMAREGRESOINGRESO","accion")==false){return;}
	if(idAbmGasto == ""){
		ver_vetana_informativa("FALTÓ SELECCIONAR EL GASTO A CONFIRMAR")
		return;
	}
	
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", "confirmarEgresoIngreso")
	datos.append("idgastos", idAbmGasto)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmgasto.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
			 
		
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
					ver_vetana_informativa("DATOS CARGADO CORRECTAMENTE...")
					idAbmGasto = ""
					buscarabmGasto()
					
				}				
			} catch (error) {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}

function ImprimirTicketEgreso(){
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

pagina="<div  style='background-color:#fff;'>"
+"<center>"
+"<div class='divTicket' >"
+"<p class='pTituloTicket1' >BOLETA DE CONTROL</p>"
+"<div class='divSeparadorTicket' style='margin-bottom:5px'></div>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Fecha Imp.:</b></td>"
+"<td style=''>"+f.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Usuario :</b></td>"
+"<td style=''>"+ document.getElementById("ptituloUser2").innerHTML+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Local:</b></td>"
+"<td style=''>"+ $("select[id=inptlocalMisGastos]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<br>"
+"<br>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:60px'><b>Caja:</b></td>"
+"<td style=''>"+ $("select[id=inptcajaAperturaCierreCaja]").children(":selected").text() +"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:100px'><b>Tipo :</b></td>"
+"<td style=''>"+ document.getElementById("inptTipoGasto").value+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Monto :</b></td>"
+"<td style=''>"+document.getElementById("inptMontoGasto").value+" Gs.</td>"
+"</tr>"
+"</table>"
+"<br>"
+"<br>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Motivo :</b></td>"
+"<td style=''>"+document.getElementById("inptMotivoGasto").value+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Boleta Nro :</b></td>"
+"<td style=''>"+document.getElementById("inptNroBoletaGasto").value+"</td>"
+"</tr>"
+"</table>"
+"<table class='tableTicket'>"
+"<tr>"
+"<td style='width:110px'><b>Cuenta :</b></td>"
+"<td style=''>"+document.getElementById("inptCuentaGasto").value+"</td>"
+"</tr>"
+"</table>"
+"</center>"
+"</div>"


var ficha=pagina;
document.getElementById("DivImprimir").innerHTML=ficha;
   var documento= document.getElementById("DivImprimir").innerHTML;
     localStorage.setItem("reporte", documento);
	   localStorage.setItem("tipo", "ticket");
	 window.open("/GoodTechnologyEPNSA/system/reportTicket.html");
	 document.getElementById("DivImprimir").innerHTML = "";
//buscarDatosVentaticket(idabmVenta)
     
}

function checkestadoGastos(d){
	if(d=="1"){
	document.getElementById('inptSeleccEstadoBuscarGasto1').checked=true
		document.getElementById('inptSeleccEstadoBuscarGasto2').checked=false	
	}else{
		
		document.getElementById('inptSeleccEstadoBuscarGasto1').checked=false
		document.getElementById('inptSeleccEstadoBuscarGasto2').checked=true
	}
}
function checkfiltroshistorialegresoingreso(d){
	if(d=="1"){
	document.getElementById('inptCheckingresoegreso1').checked=true
	document.getElementById('inptCheckingresoegreso2').checked=false	
     
	 	var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	document.getElementById('inptBuscarGastoF1').value = f.getFullYear() + "-" + mes + "-" + "01";
	document.getElementById('inptBuscarGastoF2').value = f.getFullYear() + "-" + mes + "-" + dia;
	 
	}else{		
		document.getElementById('inptCheckingresoegreso1').checked=false
		document.getElementById('inptCheckingresoegreso2').checked=true
		document.getElementById('inptBuscarGastoF1').value="";
		document.getElementById('inptBuscarGastoF2').value="";
	}
}
function buscarabmGasto() {
// if(controlacceso("BUSCARLISTADOEGRESOINGRESO","accion")==false){return;}	
	var fecha1 = document.getElementById('inptBuscarGastoF1').value
	var fecha2 = document.getElementById('inptBuscarGastoF2').value
	var estado =""
	if(document.getElementById('inptSeleccEstadoBuscarGasto1').checked==true){
		estado="Activo"
	}else{
		estado="Inactivo"
	}
	var tipo = document.getElementById('inptSeleccTipoBuscarGasto').value
	var arreglo = document.getElementById('inptSeleccArregloBuscarGasto').value
	var cod_local = document.getElementById('inptlocalMisGastosBusca').value
	var fecha = document.getElementById('inptBuscarIngresoEgreso2').value
	var usuario = document.getElementById('inptBuscarIngresoEgreso1').value
	var motivo = '';
	
	$("input[id=inptBuscarIngresoEgreso3]").each(function (i, Elemento) {
      var $input = $(this),
          val = $input.val();
		 
          list = $input.attr('list'),
          match = $('#'+list + ' option').filter(function() {
              return ($(this).val() === val);			 
          });

       if(match.length > 0) {
         motivo=$(match).attr("id")
       } else {
           // value is not in list
       }
});
	
	var nroboleta = document.getElementById('inptBuscarIngresoEgreso5').value
	var monto = document.getElementById('inptBuscarIngresoEgreso8').value
	var confirmado = document.getElementById('inptConfirmadoMisGastosBusca').value
	// var banco = document.getElementById('inptBuscarIngresoEgreso4').value
	// var banco = $('#inptBuscarIngresoEgreso4').find('option:selected').text();
	// if(banco == 'SELECCIONAR'){
		// banco = '';
	// }
	
	var permisover='SI';
	// if(controlacceso2("VERTODOSEGRESOINGRESO","accion")!=false){permisover="SI"}
	 
	document.getElementById("table_abm_gasto").innerHTML = imgCargandoA
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"fecha1": fecha1,
		"fecha2": fecha2,
		"estado": estado,
		"cod_local": cod_local,
		"tipo": tipo,
		"usuario": usuario,
		"fecha": fecha,
		"arreglo": arreglo,
		"motivo": motivo,
		"confirmado": confirmado,
		"nroboleta": nroboleta,
		"monto": monto,
		"agrupacionformulariogasto": agrupacionformulariogasto,
		"permisover": permisover,
		"funt": "buscar"
	};
	$.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmgasto.php",
		type: "post",
		 
		
		beforeSend: function () {

		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("table_abm_gasto").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("table_abm_gasto").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				if (Respuesta == "UI") {
					ir_a_login()
					ver_vetana_informativa("USUARIO INCORRECTO VUELVA A INICIAR SESION...")
					return false;
				}
				if (Respuesta == "NI") {
					ver_vetana_informativa("NO TIENES PERMISO PARA CONTINUA")
					return false;
                  }
				if (Respuesta == "exito") {
					var datos_buscados = datos[2];
					document.getElementById("table_abm_gasto").innerHTML = datos_buscados
					document.getElementById("inptTotalGasto").value = datos[4];
					document.getElementById("inptRegistroNroGastos").value = datos[3];
					document.getElementById('btnEditarGastos').style.backgroundColor="#b7b7b7";
					document.getElementById('btnConfirmarGasto').style.backgroundColor="#b7b7b7";
				}
			} catch (error) {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function limpiarcamposGasto() {
	var f = new Date();
	var dia = f.getDate()
	if (dia < 10) {
		dia = "0" + dia;
	}
	var mes = f.getMonth() + 1
	if (mes < 10) {
		mes = "0" + mes;
	}
	document.getElementById('inptFechaGasto').value = f.getFullYear() + "-" + mes + "-" + dia;
	document.getElementById('inptFechaDepositoGasto').value ="";
	document.getElementById('inptMotivoMisGastos').value ="";
	document.getElementById('inptMontoGasto').value = "";
	document.getElementById('inptRegistroSeleccGasto').value = "";
	document.getElementById('inptMotivoGasto').value = "";
	document.getElementById('inptPersonalGasto').value = "";
	document.getElementById('inptNroBoletaGasto').value = "";
	// document.getElementById('inptBancoGasto').value = "";
	document.getElementById('inptCuentaGasto').value = "";
	document.getElementById('inptArregloGasto').value = "";
	document.getElementById('btnEditarGastos').style.backgroundColor="#b7b7b7";
	document.getElementById('btnConfirmarGasto').style.backgroundColor="#b7b7b7";
	document.getElementById('inptEstadoGasto').value = "Activo";
	document.getElementById('btnAbmGastos').value = "Guardar datos";
	idAbmGasto = "";
	// seleccionarLocalUSer()
	
	$("div[id=imgFotoGastoIngresoEgreso]").css({"background-image":"url()"});
	fotogasto="";
	extgasto="";
}
var agrupacionformulariogasto = "1"
function cambiarTipoGasto(d){
document.getElementById("btnGasto1").style=""
document.getElementById("btnGasto2").style=""
if(d=="1"){
	document.getElementById("btnGasto1").style="background-color:#ff9800;color:#fff"
	agrupacionformulariogasto="1";
}else{
	document.getElementById("btnGasto2").style="background-color:#ff9800;color:#fff"
	agrupacionformulariogasto="2";
}
}
// CARGAR FOTO GASTO
function ExploradorImagenGasto(File){	
$("input[name="+File+"]").click();
}
var fotogasto="";
var extgasto="";
function readFileGasto(input){		
var file=$("input[name="+input.name+"]")[0].files[0];
var filename= file.name;
var tamanho = file.size;
if (tamanho > 5000000){
ver_vetana_informativa("LA FOTO NO PUEDE EXCEDER LOS 5Mb")
return false
}
file_extension=filename.substring(filename.lastIndexOf('.')+1).toLowerCase();
if ((file_extension=="jpeg") || (file_extension=="jpg") || (file_extension=="png") ){
}else{
ver_vetana_informativa("LA FOTO SELECCIONADO NO ES JPEG")
return false;
}
var reader = new FileReader();
reader.onload = function(e){
	extgasto=file_extension;
fotogasto=e.target.result;
 $("div[id=imgFotoGastoIngresoEgreso]").css({"background-image":"url("+fotogasto+")"})
}
reader.readAsDataURL(input.files[0]);
}

function ver_vetana_informativa(titulo) {

    const errores = [
        "FALTO INGRESAR",
        "LO SENTIMOS HA OCURRIDO UN ERROR",
        "FALTO SELECCIONAR",
        "CANCELE LA BUSQUEDA ACTUAL PARA CONTINUAR",
        "ERROR",
        "INVALIDO",
        "NO SE PUDO"
    ];

 
    const texto = titulo.toUpperCase(); 
    const esError = errores.some(patron => texto.includes(patron));

 
    if (!esError) { 
        showToast.success(titulo, {
            duration: 5000,
            progress: true,
            position: "top-left",
            transition: "bounceInDown",
            icon: "",
            sound: true,
        });
    } else { 
        showToast.error(titulo, {
            duration: 5000,
            progress: true,
            position: "top-left",
            transition: "slideInUp",
            icon: "",
            sound: true,
        });
    }
}



/* ABM MOTIVO EN EGRESO/INGRESO */
function verCerrarAbmNuevoMotivo(){
	// if(controlacceso("CREARNUEVOMOTIVO","accion")==false){return;}
	if(document.getElementById("divAbmNuevoMotivo").style.display==""){
		
		$("div[id=divAbmNuevoMotivo]").fadeOut(500);	
		
	}else{		
	
		document.getElementById("divAbmNuevoMotivo").style.display=""
BuscarAbmMotivoEgresoIngreso()
	}
}
function VerificarDatosMotivoEgresoIngreso() {
	var inptNuevoMotivo = document.getElementById('inptNuevoMotivoEgresoIngreso').value
	var inptEstadoMotivoEgresoIngreso = document.getElementById('inptEstadoMotivoEgresoIngreso').value
	
	if (inptNuevoMotivo == "") {
		ver_vetana_informativa("FALTO AGREGAR NUEVO MOTIVO")
		return false;
	}	


	if(idAbmMotivoEgresoIngreso != ''){
		accion = "editarMotivo";
	}else{
		accion = "NuevoMotivo";
	}
		
	
	abmNuevoMotivo(inptNuevoMotivo,inptEstadoMotivoEgresoIngreso, accion);
}
function abmNuevoMotivo(motivo, estado , accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("motivo", motivo)
	datos.append("estado", estado)
	datos.append("idabm", idAbmMotivoEgresoIngreso)


	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmgasto.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
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
					
					ver_vetana_informativa("DATOS CARGADO CORRECTAMENTE...")
					buscaroptionMotivoEgresoIngreso()
					// verCerrarAbmNuevoMotivo()
					BuscarAbmMotivoEgresoIngreso()
					limpiarcamposmotivoegresoingreso()
				}
			} catch (error) {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
				var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}


		}
	});


}
function buscaroptionMotivoEgresoIngreso() {

	document.getElementById("ListMotivoMisGastos").innerHTML = ""
	// document.getElementById("inptMotivoEgresoIngresoCobrador").innerHTML = ""
	// document.getElementById("inptBuscarIngresoEgreso3").innerHTML = ""
	// document.getElementById("inptBuscarEgresoIngresoCobradores3").innerHTML = ""
	document.getElementById("listBuscarIngresoEgreso3").innerHTML = ""

	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscaroption"
	};
	$.ajax({

		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmgasto.php",
		type: "post",
		
		beforeSend: function () {


		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("ListMotivoMisGastos").innerHTML = ''
			// document.getElementById("inptMotivoEgresoIngresoCobrador").innerHTML = ''
			// document.getElementById("inptBuscarIngresoEgreso3").innerHTML = ""
			// document.getElementById("inptBuscarEgresoIngresoCobradores3").innerHTML = ""
			document.getElementById("listBuscarIngresoEgreso3").innerHTML = ""
		},
		success: function (responseText) {

			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("ListMotivoMisGastos").innerHTML = ''
			// document.getElementById("inptMotivoEgresoIngresoCobrador").innerHTML = ''
			// document.getElementById("inptBuscarIngresoEgreso3").innerHTML = ""
			// document.getElementById("inptBuscarEgresoIngresoCobradores3").innerHTML = ""
			document.getElementById("listBuscarIngresoEgreso3").innerHTML = ""
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {
				   var datos_buscados = datos[2];
					document.getElementById("ListMotivoMisGastos").innerHTML = datos[4]
					// document.getElementById("inptMotivoEgresoIngresoCobrador").innerHTML = datos_buscados
					// document.getElementById("inptBuscarIngresoEgreso3").innerHTML = datos_buscados
					// document.getElementById("inptBuscarEgresoIngresoCobradores3").innerHTML = datos_buscados
					document.getElementById("listBuscarIngresoEgreso3").innerHTML = datos[4]

				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});


}
function BuscarAbmMotivoEgresoIngreso() {
	var buscador = document.getElementById("inptBuscarAbmMotivoEgresoIngreso").value
	var estado = "Activo"
	document.getElementById("divBuscadorMotivoEgresoIngreso").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroMotivoEgresoIngreso").innerHTML="";
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"buscar": buscador,
		"estado": estado,
		"funt": "buscarabmmotivoingresoegreso"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/abmgasto.php",
		type: "post",
		 
		
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorMotivoEgresoIngreso").innerHTML = ''
			document.getElementById("lblNroRegistroMotivoEgresoIngreso").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorMotivoEgresoIngreso").innerHTML = ''
			document.getElementById("lblNroRegistroMotivoEgresoIngreso").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorMotivoEgresoIngreso").innerHTML = datos_buscados
                   document.getElementById("lblNroRegistroMotivoEgresoIngreso").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   buscaroptionMotivoEgresoIngreso()
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
	}

var idAbmMotivoEgresoIngreso = "";
function ObtenerdatosAbmMotivoEgresoIngreso(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});
	ElementoSeleccMarca=datostr
	datostr.className = 'tableRegistroSelec'
    document.getElementById("inptNuevoMotivoEgresoIngreso").value = $(datostr).children('td[id="td_datos_1"]').html();
    document.getElementById("inptEstadoMotivoEgresoIngreso").value = $(datostr).children('td[id="td_datos_2"]').html();
	idAbmMotivoEgresoIngreso= $(datostr).children('td[id="td_id"]').html();
     document.getElementById("btnMotivoIngresoEgreso").value="Editar Datos"
}

function limpiarcamposmotivoegresoingreso(){
	  document.getElementById("inptNuevoMotivoEgresoIngreso").value = ''
    document.getElementById("inptEstadoMotivoEgresoIngreso").value = 'Activo'
	idAbmMotivoEgresoIngreso=''
     document.getElementById("btnMotivoIngresoEgreso").value="Guardar"
}


/* ABM DESCRIPCION ARREGLO INGRESO EGRESO */
var idAbmDescripcionArregloGastoEgresoIngreso="";
var ElementoSeleccDescripcionArregloGastoEgresoIngreso="";
function verCerrarFrmDescripcionArregloGastoEgresoIngreso(d){
	if(d=="1"){
		// if(controlacceso("CREARNUEVADESCRIPCIONARREGLOEGRESOINGRESO","accion")==false){return;}	
		$("div[id=divAbmDescripcionArregloGastoEgresoIngreso]").fadeIn(500);
		BuscarAbmDescripcionArregloGastoEgresoIngreso()
	}else{
		$("div[id=divAbmDescripcionArregloGastoEgresoIngreso]").fadeOut(500);
	}
}
function LimpiarCamposDescripcionArregloGastoEgresoIngreso(){
	document.getElementById("inptNombreDescripcionArregloGastoEgresoIngreso").value="";
	document.getElementById("inptEstadoDescripcionArregloGastoEgresoIngreso").value="";
	document.getElementById("btnDescripcionArregloGastoEgresoIngreso1").value="Guardar Datos"
	idAbmDescripcionArregloGastoEgresoIngreso="";
	ElementoSeleccDescripcionArregloGastoEgresoIngreso="";
}
function ObtenerdatosAbmDescripcionArregloGastoEgresoIngreso(datostr) {
	$("tr[id=tbSelecRegistro]").each(function (i, td) {
		td.className = ''
	});		
	ElementoSeleccDescripcionArregloGastoEgresoIngreso=datostr
	datostr.className = 'tableRegistroSelec'
    document.getElementById("inptNombreDescripcionArregloGastoEgresoIngreso").value = $(datostr).children('td[id="td_datos_1"]').html();
    document.getElementById("inptEstadoDescripcionArregloGastoEgresoIngreso").value = $(datostr).children('td[id="td_datos_2"]').html();
	

	
	idAbmDescripcionArregloGastoEgresoIngreso = $(datostr).children('td[id="td_id"]').html();
     document.getElementById("btnDescripcionArregloGastoEgresoIngreso1").value="Editar Datos"
}
function SeleccionarRegistroDescripcionArregloGastoEgresoIngreso(){
	if(ElementoSeleccDescripcionArregloGastoEgresoIngreso==""){
		ver_vetana_informativa("Falto Seleccionar un registro")
		return;
	}
    
	 document.getElementById("divAbmDescripcionArregloGastoEgresoIngreso").style.display="none";
	 LimpiarCamposDescripcionArregloGastoEgresoIngreso()
}
function VerificarDatosDescripcionArregloGastoEgresoIngreso(){
	var inptNombreDescripcionArregloGastoEgresoIngreso = document.getElementById("inptNombreDescripcionArregloGastoEgresoIngreso").value
	var inptEstadoDescripcionArregloGastoEgresoIngreso = document.getElementById("inptEstadoDescripcionArregloGastoEgresoIngreso").value	
	if(inptNombreDescripcionArregloGastoEgresoIngreso==""){
		document.getElementById("inptNombreDescripcionArregloGastoEgresoIngreso").focus()
		ver_vetana_informativa("Falto Ingresar el nombre")
		return
	}
	if(inptEstadoDescripcionArregloGastoEgresoIngreso==""){
		document.getElementById("inptEstadoDescripcionArregloGastoEgresoIngreso").focus()
		ver_vetana_informativa("Falto seleccionar el estado del registro")
		return
	}	
	var accion = "";
	if (idAbmDescripcionArregloGastoEgresoIngreso != "") {		
		accion = "editar";
	} else {		
		accion = "nuevo";
	}
	AbmDescripcionArregloGastoEgresoIngreso(inptNombreDescripcionArregloGastoEgresoIngreso,inptEstadoDescripcionArregloGastoEgresoIngreso,idAbmDescripcionArregloGastoEgresoIngreso,accion)
}
function AbmDescripcionArregloGastoEgresoIngreso(descripcion,Estado,idabm,accion) {
	verCerrarEfectoCargando("1")
	var datos = new FormData();
	obtener_datos_user();
	datos.append("useru", userid)
	datos.append("passu", passuser)
	datos.append("navegador", navegador)
	datos.append("funt", accion)
	datos.append("idabm", idabm)
	datos.append("descripcion", descripcion)
	datos.append("Estado", Estado)
	var OpAjax = $.ajax({
		data: datos,
		url: "/GoodTechnologyEPNSA/php/abmDescripcionArregloGastoEgresoIngreso.php",
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		  
		
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
				LimpiarCamposDescripcionArregloGastoEgresoIngreso()
				ver_vetana_informativa("DATOS CARGADO CORRECTAMENTE...")
				BuscarAbmDescripcionArregloGastoEgresoIngreso()
				BuscarSelecDescripcionArregloGastoEgresoIngreso()
				}
				else {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR")
				}
			} catch (error) {
				ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
						var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function BuscarAbmDescripcionArregloGastoEgresoIngreso() {
	var buscador = document.getElementById("inptBuscarAbmDescripcionArregloGastoEgresoIngresos").value
	var estado = document.getElementById("inptBuscarEstadoDescripcionArregloGastoEgresoIngreso").value
	if(estado == ''){
		estado = 'Activo';
	}
	document.getElementById("divBuscadorDescripcionArregloGastoEgresoIngreso").innerHTML = imgCargandoA
    document.getElementById("lblNroRegistroDescripcionArregloGastoEgresoIngreso").innerHTML="";
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
        url: "/GoodTechnologyEPNSA/php/abmDescripcionArregloGastoEgresoIngreso.php",
		type: "post",
		 
		
		beforeSend: function () {
		},
		error: function (jqXHR, textstatus, errorThrowm) {
manejadordeerroresjquery(jqXHR.status,textstatus,"abmventana")
			document.getElementById("divBuscadorDescripcionArregloGastoEgresoIngreso").innerHTML = ''
			document.getElementById("lblNroRegistroDescripcionArregloGastoEgresoIngreso").innerHTML = ''
		},
		success: function (responseText) {
			var Respuesta = responseText;
			console.log(Respuesta)
			document.getElementById("divBuscadorDescripcionArregloGastoEgresoIngreso").innerHTML = ''
			document.getElementById("lblNroRegistroDescripcionArregloGastoEgresoIngreso").innerHTML = ''
			try {
				var datos = $.parseJSON(Respuesta);
				Respuesta = datos["1"];
				Respuesta=respuestaJqueryAjax(Respuesta)
				if (Respuesta == true) {
					var datos_buscados = datos[2];
					document.getElementById("divBuscadorDescripcionArregloGastoEgresoIngreso").innerHTML = datos_buscados
                   document.getElementById("lblNroRegistroDescripcionArregloGastoEgresoIngreso").innerHTML="Se encontraron "+datos[3]+" registro(s)";
				   
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}
function BuscarSelecDescripcionArregloGastoEgresoIngreso() {
	document.getElementById("inptArregloGasto").innerHTML = ""
	document.getElementById("inptSeleccArregloBuscarGasto").innerHTML = ""
	
	obtener_datos_user();
	var datos = {
		"useru": userid,
		"passu": passuser,
		"navegador": navegador,
		"funt": "buscarOption"
	};
	$.ajax({
		data: datos,
        url: "/GoodTechnologyEPNSA/php/abmDescripcionArregloGastoEgresoIngreso.php",
		type: "post",
		
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
					document.getElementById("inptArregloGasto").innerHTML = "<option value=''>SELECCIONAR</option>"+datos_buscados
				document.getElementById("inptSeleccArregloBuscarGasto").innerHTML ="<option value=''>TODOS</option>"+ datos_buscados
					
				}
			} catch (error) {
ver_vetana_informativa("LO SENTIMOS HA OCURRIDO UN ERROR ")
					var titulo="Error: "+error+" \r\n Consola: "+responseText
				GuardarArchivosLog(titulo)
			}
		}
	});
}

