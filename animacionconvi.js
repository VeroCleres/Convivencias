const form = document.querySelector ("#infoconvi")

const nombre = document.querySelector ("#nombre")
const email = document.querySelector ("#email")
const nombrehelp = document.querySelector ("#nombrehelp")
const emailhelp = document.querySelector ("#emailhelp")


form.addEventListener ( "submit" , (event) => {
	event.preventDefault ()
	if (nombre.value === "" || email.value === "") {
		if (nombre.value === "") {
			nombrehelp.innerText = "Por favor completá con tu nombre"
		}
		else if (email.value === "") {
			emailhelp.innerText = "Necesitamos que ingreses tu mail"
		}
	
	} else {
		form.submit ();
	}

} )
