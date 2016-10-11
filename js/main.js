window.addEventListener("load", cargaPagina);

var chat = document.getElementById("chat");
var mensaje = document.getElementById("mensajes");

var imgPerfil = document.getElementById("imgPerfil");
var namePerfil = document.getElementById("namePerfil");
var estado = document.getElementById("estado");

function cargaPagina(e){
	e.preventDefault();
	mensaje.addEventListener("keyup" , enviarMensaje);

	var avatar = document.querySelectorAll(".w-recent-chats li .avatar");
	for(var i = 0; i < avatar.length; i++){
		avatar[i].addEventListener("click", cambiarHeader);
	}
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
			if(min<10){
				min = "0" + min;
			}
			var horaTotal = hora + ":" + min;
			time.innerHTML = horaTotal;

			contMensaje.appendChild(time).classList.add("time");

			this.value = " ";
		}	
	}
}

function cambiarHeader (){
	// e.preventDefault();
	var changePerfil = this.children[0].getAttribute("src");
	imgPerfil.setAttribute("src", changePerfil);
	var changeName = this.children[1].textContent;
	namePerfil.textContent = changeName;
	estado.style.display = "none";
}