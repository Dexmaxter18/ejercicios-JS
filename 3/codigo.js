/*Utilizando un bucle, mostrar la suma y la media de los números
  introducidos hasta introducir un número negativo y ahí mostrar el
  resultado.*/
let número = document.getElementById('valor');
let botón = document.getElementById('botón');
let caja = [];

function ejecutar() {
  let ingresado = parseInt(número.value);
  while (ingresado >= 0) {
    caja.push(ingresado);
    console.log(`se suma ${caja} y se promedia por ${caja.length}`);
    break;
  }
  while (ingresado < 0) {
    let largo = caja.length;
    let suma = caja.reduce((a, b) => (a + b));
    let promedio = suma / largo;
    console.log(`la suma total es de ${suma}`);
    console.log(`el promedio es de ${promedio}`);
    break;
  }
  número.value = '';
}