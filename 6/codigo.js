/*Programa que muestre todos los números divisores de un número
  que mete en el prompt.*/
function ejecutar() {
  let numero = prompt('introduce un número');
  if (numero == null || /\D/.test(numero) || numero == '') {
    ejecutar();
  } else {
    for (i = 1; i <= numero; i++) {
      if (numero % i == 0) { //el % corresponde al modulo (que es el residuo de una división)
        console.log(`${numero} es divisivle por: ${i}`);
      }
    }
  }
}