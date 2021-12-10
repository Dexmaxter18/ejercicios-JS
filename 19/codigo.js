//(() => {})();      Esta es la sintaxsis de una función autoejecutable
// (() => {
//   let res = new XMLHttpRequest();   //Se crea un objeto XMLHttpRequest
//   function respuesta() {    //Se crea una función la cual va a manejar la petición
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(this.responseText);
//     }
//   }

//   res.onload = respuesta;   //Se le pone el atributo onload a la variable res y se define con la función (por alguna razon si lo defino con los parentecis() no funciona)
//   res.open('GET'--'https://jsonplaceholder.typicode.com/users', true);    //Se abre la ruta a la API
//   res.send();   //Se envia el resulatado de la petición
// })();

//Haz una petición ajax a un api rest pública y muestra un listado de datos.
fetch('https://jsonplaceholder.typicode.com/users').then(respuesta => { //El metodo fetch usa promesas
  console.log(respuesta);
  return respuesta.json();
}).then(json => {
  console.log(json);
  for (x of json) {
    lista.innerHTML += `<li>${x.name} -- ${x.email} -- ${x.username}`;
  }
})
