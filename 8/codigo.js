/*Mostrar la tabla de multiplicar de un número introducido por pantalla.*/
let numero = document.getElementById('valor');
function ejecutar() {
  let valor = numero.value;
  for (i = 1; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
  }
  numero.value = '';
}