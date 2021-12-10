/*1.Programa que pida 6 números por pantalla y los meta en un array.
  2.Mostrar el array anterior entero (todos sus elementos) en el cuerpo
  de la página y en la consola (usando funciones).
  3.Ordenar el array anterior y mostrarlo.
  4.Invertir el orden del array anterior y mostrarlo.
  5.Mostrar cuantos elementos tiene el array anterior.
  6.Búsqueda de un valor introducido por el usuario, que nos diga si lo
  encuentra en el array o no.*/
let conjunto = [];
let numero = document.getElementById('texto');
let valor = numero.addEventListener('keyup', e => {
  let ingresado = parseInt(numero.value);
  let tecla = e.keyCode;
  if (tecla == 13) {
    if (ingresado == null || ingresado == '' || /\D/.test(ingresado)) {
      numero.value = '';
      alert('ingresa un valor numérico positivo')
    } else {
      if (conjunto.length < 6) {
        conjunto.push(ingresado);
        numero.value = '';
      } else if (conjunto.length = 6) {
        alert('ya no puedes ingresar mas números');
        numero.value = '';
        conjunto.sort((a, b) => a - b);
        mostrar();
        conjunto.sort((a, b) => b - a);
        mostrar();
        elementos.innerHTML = `el array tienes ${conjunto.length} elementos`
      }
    }
  }
});
function mostrar() {
  for (a of conjunto) {
    egreso.innerHTML += `${a} <br />`
    console.log(a);
  }
}
let busqueda = document.getElementById('buscar')
let buscar = busqueda.addEventListener('keyup', e => {
  let keyCode = e.keyCode;
  if (keyCode == 13) {
    if (/\D/.test(busqueda.value)) {
      alert(`${busqueda.value} no se encuentra dentro del array`);
      busqueda.value = '';
    } else if (/\d/.test(busqueda.value)) {
      let number = parseInt(busqueda.value);
      let comprobante = conjunto.includes(number);
      if (comprobante == true) {
        alert(`${number} se encontró dentro del array`);
      } else {
        alert(`${number} no se encontró dentro del array`);
      }
      busqueda.value = '';
    }
  }
});