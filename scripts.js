function $(e){ return document.getElementById(e) };
//bucle per generar els anys al select
for(let i = 1970; i <= 2100; i++)
{
    $("anySelect").innerHTML += "<option>"+ i +"</option>"
}

let d = new Date();
let numeroMesActual = d.getMonth();
let anyActual = d.getFullYear();
let nomMesActual = nomMes(numeroMesActual);

selectsActual();

canviarMesRespecteSelect();
canviarAnyRespecteSelect();
pintarCalendari(anyActual, numeroMesActual);
//quan canvia el valor del select del mes canvia el mes pintat al calendari
$("mesSelect").onchange = canviarMesRespecteSelect;
//quan canvia el valor del select de l'any canvia el l'any pintat al calendari
$("anySelect").onchange = canviarAnyRespecteSelect;

$("btnAvui").onclick = clickAvui;

// $("btnEsquerra").onclick = clickBtnEsquerra;

//posa els selects al mes i any actual
function selectsActual(){
    $("mesSelect").value = nomMesActual;
    $("anySelect").value = anyActual;    
}
//canvia el mes escrit al calendari respecte al mes del select
function canviarMesRespecteSelect(){
    $("nomMes").innerHTML = $("mesSelect").value;
}
//canvia l'any del calendari respecte al mes del select
function canviarAnyRespecteSelect() {
    $("any").innerHTML = $("anySelect").value;
}
//al fer clic al boto avui canvien els selects i el mes i any pintats al calendari
function clickAvui() {
    selectsActual();
    canviarMesRespecteSelect();
    canviarAnyRespecteSelect();
}

// function clickBtnEsquerra(){

// }

function pintarCalendari(any, mes){
    let d = new Date(any, mes, 1);
    let dia1Mes = d.getDay();
    let ultimDiaMes = new Date (any, mes + 1, 0).getDate();
    let calendari = $("calendari");

    if (dia1Mes == 0){
        dia1Mes = 7;
    }

    for(let i = 1; i < dia1Mes; i++){
        calendari.innerHTML += "<div class='diesCalendari'>&nbsp;</div>";
    }
    for(let i = 1; i <= ultimDiaMes; i++ ){
        calendari.innerHTML += "<div class='diesCalendari'>"+ i +"</div>";
    }
}

//funcio per transformar el numero del mes en lletres
function nomMes(mesActual) {
    switch (mesActual) {
        case 0:
            return "Gener";
            break;
        case 1:
            return "Febrer";
            break;
        case 2:
            return "Març";
            break;
        case 3:
            return "Abril";
            break;
        case 4:
            return "Maig";
            break;
        case 5:
            return "Juny";
            break;
        case 6:
            return "Juliol";
            break;
        case 7:
            return "Agost";
            break;
        case 8:
            return "Setembre";
            break;
        case 9:
            return "Octubre";
            break;
        case 10:
            return "Novembre";
            break;
        case 11:
            return "Desembre";
            break;
    }
}