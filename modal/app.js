//Variables
const formulario = document.querySelector('#formulario')
const url = 'https://fdsdf'

const nombre = document.querySelector('[name = nombre]')
const email = document.querySelector('[name = email]')
const phone = document.querySelector('[name = phone]')

const mensVacio = 'Campo Obligatorio'
const mensError = 'Hay un error de escritura'

const expresionEmail = /^[a-zA-Z0-9.!#$%&' * +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const expresionPhone = /^\d{3}\d{3}\d{3}$/;


let formOk = true;

formulario.addEventListener('submit', e => {

	e.preventDefault()

	//Validamos
	validarMail()
	validarPhone()
	validarNombre()

	//Enviamos con la validacion en caso de que formOk sea true
	formOk ? enviaDatos(formulario, url) : null

})


//Validamos Email
function validarMail() {

	//Según expresion regular
	if (!expresionEmail.test(email.value)) {
		addElement(email, mensError)
		return formOk = false;
	}

	//Según si campo no esta vacio
	if (email.value === '') {
		addElement(email, mensVacio)
		return formOk = false;
	}

	return formOk;

}


//Validamos Phone
function validarPhone() {

	if (!expresionPhone.test(phone.value)) {
			addElement(phone, mensError)
		   return formOk = false;
		}

	if (phone.value === '') {
			addElement(phone, mensVacio)
		   return formOk = false;
		}

		return formOk;

}
	
//Validamos Nombre
function validarNombre() {


	if (nombre.value === '') {
			addElement(nombre, mensVacio)
		   return formOk = false;
		}

		return formOk;

	}



	//Enviamos Datos
function enviaDatos(form, url) {

const data = new FormData(form);

fetch(url, {method: 'POST',body: data})
	.then(function (response) {
			if (response.ok) {
				return response.text()
			} else {
				throw "Error en la llamada Ajax";
			}
		})

	.then(function (texto) {
		console.log(texto);
		})
	.catch(function (err) {
		console.log(err);
		});
}


	//Función que crea el elemento
function addElement(attr, mens) {
		const elemento = document.createElement('span')
		const texto = document.createTextNode(mens)
		elemento.appendChild(texto)
		attr.parentNode.appendChild(elemento)
	}