//variables
let d = new Date();
let diaMes = d.getDate();
let mes = d.getMonth() + 1;
const diesSetmana = [   //declaro constant perque els dies de la setmana son fixos, els faig servir en un array per 
    "Diumenge",         //convertir el numero entre 0 i 6 que retorna la funcio getDay() en un dia de la setmana.
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte" ];
let diaSetmana = diesSetmana[d.getDay()];

//funcio per modificar etiquetes del html a traves del seu id
function $(e) { return document.getElementById(e) }

