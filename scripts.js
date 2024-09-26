//variables
let d = new Date();
let diaMesActual = d.getDate();
let mesActual = d.getMonth() + 1;
let anyActual = d.getFullYear();
let ultimaDiaMesActual = new Date(anyActual,mesActual + 1,0)
const diesSetmana = [   //declaro constant perque els dies de la setmana son fixos, els faig servir en un array per 
    "Diumenge",         //convertir el numero entre 0 i 6 que retorna la funcio getDay() en un dia de la setmana.
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte" ];
let diaSetmanaActual = diesSetmana[d.getDay()];

//funcio per modificar etiquetes del html a traves del seu id
function $(e) { return document.getElementById(e) }

//funcio per transformar el numero del mes en lletres
function nomMes(mesActual) {
    switch (mesActual) {
        case 1:
            return "Gener";
            break;
        case 2:
            return "Febrer";
            break;
        case 3:
            return "Març";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maig";
            break;
        case 6:
            return "Juny";
            break;
        case 7:
            return "Juliol";
            break;
        case 8:
            return "Agost";
            break;
        case 9:
            return "Setembre";
            break;
        case 10:
            return "Octubre";
            break;
        case 11:
            return "Novembre";
            break;
        case 12:
            return "Desembre";
            break;
    }
}
$("nomMes").innerHTML = nomMes(mesActual);
$("any").innerHTML = anyActual;

function onCauPrimerDiaMes() {
    
}

// while(diaMesActual <= 31 && ultimaDiaMesActual ){

// }