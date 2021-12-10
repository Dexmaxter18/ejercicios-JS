/*Programa que pida dos números y que nos diga cual es el mayor,
  el menor y si son uguales.*/

/*Al programa anterior: Si los números no son un número o son menores
  o iguales a cero, nos los vuelva a pedir.*/

let input0 = document.getElementById('botón');
let input1 = document.getElementById('primero');
let input2 = document.getElementById('segundo');

function calcular() {
  let primero = input1.value;
  let segundo = input2.value;

  if (isNaN(primero) || isNaN(segundo)) {
    alert('introduce un valor numerico');
  } else if (primero < 1 || segundo < 1) {
    alert('introduce un número mayor a cero');
  } else {
    if (primero < segundo) {
      console.log(`${primero} es menor que ${segundo}`);
    } else if (primero > segundo) {
      console.log(`${primero} es mayor que ${segundo}`);
    } else if (primero == segundo) {
      console.log(`${primero} es igual a ${segundo}`);
    }
  }
}
// console.log(typeof (primero, segundo));