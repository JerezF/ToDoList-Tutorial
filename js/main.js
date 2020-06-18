(function(){

	//primero variables que vamos a usar

	// VARIABLES

	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");


	// Eventos van a ejecutar las acciones que son las funciones

	// FUNCIONES
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);


		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea validad");
			tareaInput.className = "error";
			return false;
		}

		//agregamos el contenido al enlace
		enlace.appendChild(contenido);
		//le establecemos un atributo href
		enlace.setAttribute("href", "#");
		//agregamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		//agremas la nuevaTarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1 ; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};

	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eliminarTarea = function(){
		this.parentNode.removeChild(this)
	};

	// EVENTOS
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	};

}());