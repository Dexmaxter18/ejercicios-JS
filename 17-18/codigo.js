'use strict';
/*1.Crea un formulario para guardar nombres de personas en el localstorage y
  muéstralos por pantalla en una lista de html.
  2.En la lista anterior añade un botón para poder eliminar elementos del
  localstorage.*/
let nombre = document.getElementById('nombre');
let borrarDato = document.getElementById('borrar_dato');
let eliminar = document.getElementById('eliminar');
let subir = document.getElementById('subir');
let mostrar = document.getElementById('mostrar');
let lista = document.getElementById('lista');
let dataBase = [];
dataBase = JSON.parse(localStorage.getItem('Nombre'));

function botonSubir() {
  dataBase.push(nombre.value);
  localStorage.setItem('Nombre', JSON.stringify(dataBase));
  nombre.value = '';
  console.log(typeof (dataBase));
}
function botonMostrar() {
  dataBase = JSON.parse(localStorage.getItem('Nombre'));
  for (const NOMBRES of dataBase) {
    lista.innerHTML += `<li id='${NOMBRES.id}'>${NOMBRES}<br /></li>`;
  }
  console.log(typeof (dataBase));
  localStorage.setItem('Nombre', JSON.stringify(dataBase));
}
function botonBorrarDato() {
  dataBase = JSON.parse(localStorage.getItem('Nombre'));
  let indice = dataBase.indexOf(nombre.value);
  if (indice == 0) {
    dataBase.shift();
    nombre.value = '';
  } else {
    dataBase.splice(indice, indice);
    nombre.value = '';
  }
  localStorage.setItem('Nombre', JSON.stringify(dataBase));
}
function botonEliminar() {
  localStorage.clear();
}