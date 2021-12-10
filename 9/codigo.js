/*Calculadora:
   ~Pida dos números por pantalla.
   ~Si metemos uno mal que nos los vuelva a pedir.
   ~En el cuerpo de la página, en una alerta y por consola mostrar el
    resultado de la suma, resta, multiplicación y división de las sifras.
   ~Refactorizar el código para encapsularlo todo en funciones reutilizables.*/
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let valor = [];
function ejecutar() {
   let valor2 = parseInt(numero2.value);
   let valor1 = parseInt(numero1.value);
   if (valor1 == null || valor1 == '' || /\D/.test(valor1) || valor2 == null || valor2 == '' || /\D/.test(valor2)) {
      numero1.value = '';
      numero2.value = '';
      alert('los valores son núlos, porfavor vuelve a introducirlos');
   } else {
      valor.push(valor1, valor2);
      console.log(valor);
      suma();
      resta();
      multiplicacion();
      division();
      numero1.value = '';
      numero2.value = '';
      valor.splice(0, valor.length);
   }
}

function suma() {
   let resultado = valor[0] + valor[1];
   alert(resultado);
   texto.innerHTML += `${resultado} <br />`
   console.log(`${resultado}`);
}

function resta() {
   let resultado = valor[0] - valor[1];
   alert(resultado);
   texto.innerHTML += `${resultado} <br />`
   console.log(`${resultado}`);
}

function multiplicacion() {
   let resultado = valor[0] * valor[1];
   alert(resultado);
   texto.innerHTML += `${resultado} <br />`
   console.log(`${resultado}`);
}

function division() {
   let resultado = valor[0] / valor[1];
   alert(resultado);
   texto.innerHTML += `${resultado} <br />`
   console.log(`${resultado}`);
}