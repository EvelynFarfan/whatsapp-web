window.addEventListener("load", cargaPagina);

var chat = document.getElementById("chat");
var mensaje = document.getElementById("mensajes");


function cargaPagina(e){
	e.preventDefault();
	mensaje.addEventListener("keyup" , enviarMensaje);
}
function enviarMensaje(e){
	if(this.value.trim() != 0){
		if(e.keyCode == 13){
			e.preventDefault();
			var contenedor = document.createElement("div");
			var contMensaje = document.createElement("div");
			var parrafo = document.createElement("p");
			var time = document.createElement("div");

			parrafo.innerHTML = this.value;
			contenedor.appendChild(contMensaje).classList.add("w-message-text");
			contMensaje.appendChild(parrafo);
			chat.appendChild(contenedor).classList.add("w-message","w-message-out");

			var date = new Date();
			var hora = date.getHours();
			var min = date.getMinutes();
			var horaTotal = hora + ":" + min;
			time.innerHTML = horaTotal;

			contMensaje.appendChild(time).classList.add("time");

			this.value = " ";
		}	
	}
}

function cambiarHeader (e){
	e.preventDefault();
}