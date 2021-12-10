/*Hacer un programa que muestre todos los números entre dos números
  introducidos por el usuario.*/
let numero1 = document.getElementById('input1');
let numero2 = document.getElementById('input2');
let boton = document.getElementById('botón');

function ejecutar() {
  let valor1 = parseInt(numero1.value);
  let valor2 = parseInt(numero2.value);
  for (let i = valor1; i <= valor2; i++) {
    resultado.innerHTML += `${i}, `;
  }
  numero1.value = '';
  numero2.value = '';
}