/*Ejercicio con DOM y eventos:
  ~formulario campos: Nombre, apellido y edad.
  ~Botón de enviar el formulario: eventos submit.
  ~Mostrar datos por pantalla.
  ~Validación del formulario para que no metan datos vacíos.*/
let nommbre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let vacio = document.getElementById('vacio');
let enviar = document.getElementById('enviar').addEventListener('click', funcionalidad);
let formulario = document.getElementById('formulario').addEventListener('submit', enviar);

function funcionalidad(e) {
  let algo = parseInt(edad.value);
  // e.preventDefault();
  if (isNaN(nommbre.value) && isNaN(apellido.value) && !isNaN(algo)) {
    vacio.innerHTML = `${nommbre.value} <br /> ${apellido.value} <br /> ${edad.value}`
    nommbre.value = '';
    apellido.value = '';
    edad.value = '';
  }
}