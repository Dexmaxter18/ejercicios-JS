//Muestra la fecha de hoy y un número aleatorio del 1 al 120 en la consola.
function aleatorio(min, max) {
  return Math.round(Math.random() * (min, max) + min);
}
let fecha = new Date();

console.log(fecha, aleatorio(1, 120));