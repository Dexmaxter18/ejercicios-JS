/*Programa que nos diga si un número es par o impar:
  ~Ventana prompt.
  ~si no es válido que nos pida de nuevo el número.*/
function ejecutar() {
  let valor = prompt('introduce un número');
  if (valor == null || valor == '' || /\D/.test(valor)) {
    ejecutar();
  } else {
    if (valor % 2 == 0) {
      console.log(`${valor} es par`);
    } else {
      console.log(`${valor} es impar`);
    }
  }
}