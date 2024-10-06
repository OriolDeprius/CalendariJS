function $(e) { return document.getElementById(e) };

let d = new Date();
let numeroMesActual = d.getMonth();
let anyActual = d.getFullYear();
let nomMesActual = nomMes(numeroMesActual);
let a;

//bucle per generar els anys al select
for (let i = 1970; i <= 2100; i++) {
  $("anySelect").innerHTML += "<option>" + i + "</option>"
}

selectsActual();

//quan canvia el valor del select del mes canvia el mes pintat al calendari
$("mesSelect").onchange = canviarMesRespecteSelect;

//quan canvia el valor del select de l'any canvia el l'any pintat al calendari
$("anySelect").onchange = canviarAnyRespecteSelect;

$("btnEsquerra").onclick = clickBtnEsquerra;

$("btnDreta").onclick = clickBtnDreta;

$("btnAvui").onclick = clickAvui;

//posa els selects al mes i any actual
function selectsActual() {
  $("mesSelect").value = nomMesActual;
  $("anySelect").value = anyActual;
  canviarMesRespecteSelect();
  canviarAnyRespecteSelect();
}
//canvia el mes escrit al calendari respecte al mes del select
function canviarMesRespecteSelect() {
  $("nomMes").innerHTML = $("mesSelect").value;
  pintarCalendari($("anySelect").value, numeroMes($("mesSelect").value));
}
//canvia l'any del calendari respecte al mes del select
function canviarAnyRespecteSelect() {
  $("any").innerHTML = $("anySelect").value;
  pintarCalendari($("anySelect").value, numeroMes($("mesSelect").value));
}
//al fer clic al boto avui canvien els selects i el mes i any pintats al calendari
function clickAvui() {
  selectsActual();
  canviarMesRespecteSelect();
  canviarAnyRespecteSelect();
  pintarCalendari(anyActual, numeroMesActual);
  nomMes(numeroMesActual);
}

//funcionalitat boto per correr els mesos enrere
function clickBtnEsquerra() {
  let mes = numeroMes($("mesSelect").value) - 1;
  let any = $("anySelect").value;

  if (mes == -1) {
    mes = 11;
    any--;
    $("anySelect").value = any;
    $("mesSelect").value = "Gener";
  }

  $("mesSelect").value = nomMes(mes);
  canviarMesRespecteSelect();
  pintarCalendari(any, mes);
}

//funcionalitat boto per correr els mesos endevant
function clickBtnDreta() {
  let mes = numeroMes($("mesSelect").value) + 1;
  let any = $("anySelect").value;

  if (mes == 12) {
    mes = 0;
    any++;
    $("anySelect").value = any;
    $("mesSelect").value = "Gener";
  }

  $("mesSelect").value = nomMes(mes);
  canviarMesRespecteSelect();
  pintarCalendari(any, mes);
}

function pintarCalendari(any, mes) {
  let d = new Date(any, mes, 1);
  let dia1Mes = d.getDay();
  let ultimDiaMes = new Date(any, mes + 1, 0).getDate();
  let avui = new Date();
  let calendari = $("calendari");
  let cont = 1;

  calendari.innerHTML = "";

  if (dia1Mes == 0) {
    dia1Mes = 7;
  }
  //bucle per omplir amb espais buits fins al primer dia de mes
  for (let i = 1; i < dia1Mes; i++) {
    calendari.innerHTML += "<div class='diesCalendari'>&nbsp;</div>";
  }
  //bucle per omplir els espais amb els dies del mes
  while (cont <= ultimDiaMes) {
    if (d.getDay() == 0) {
      if (d.getFullYear() == avui.getFullYear() && d.getMonth() == avui.getMonth() && d.getDate() == avui.getDate()) 
        calendari.innerHTML += "<div class='diesCalendari' id='diaActual' style='background-color: khaki; color: red;'>" + cont + "</div>";
      else
        calendari.innerHTML += "<div class='diesCalendari' style='color: red;'>" + cont + "</div>";
    }
    else if (d.getFullYear() == avui.getFullYear() && d.getMonth() == avui.getMonth() && d.getDate() == avui.getDate()) {
      calendari.innerHTML += "<div class='diesCalendari' id='diaActual' style='background-color: khaki;'>" + cont + "</div>";
    }
    else if (d.getDay() != 0){
      calendari.innerHTML += "<div class='diesCalendari'>" + cont + "</div>";
    }

    cont++;
    d.setDate(cont);
  }

  if (d.getFullYear() == avui.getFullYear() && d.getMonth() - 1 == avui.getMonth()){
    clearInterval(a);
    a = setInterval(canviarColor, 1000);
  }
}

function canviarColor() {
  if ($("diaActual"))
    $("diaActual").style.backgroundColor = $("diaActual").style.backgroundColor == "khaki" ? "yellow" : "khaki";
}

//funcio per transformar el numero del mes en lletres
function nomMes(mesActual) {
  switch (mesActual) {
    case 0:
      $("cos").style.backgroundImage = "url('resources/gener.png')";
      return "Gener";
      break;
    case 1:
      $("cos").style.backgroundImage = "url('resources/febrer.png')";
      return "Febrer";
      break;
    case 2:
      $("cos").style.backgroundImage = "url('resources/març.png')";
      return "Març";
      break;
    case 3:
      $("cos").style.backgroundImage = "url('resources/abril.png')";
      return "Abril";
      break;
    case 4:
      $("cos").style.backgroundImage = "url('resources/maig.png')";
      return "Maig";
      break;
    case 5:
      $("cos").style.backgroundImage = "url('resources/juny.png')";
      return "Juny";
      break;
    case 6:
      $("cos").style.backgroundImage = "url('resources/juliol.png')";
      return "Juliol";
      break;
    case 7:
      $("cos").style.backgroundImage = "url('resources/agost.png')";
      return "Agost";
      break;
    case 8:
      $("cos").style.backgroundImage = "url('resources/setembre.png')";
      return "Setembre";
      break;
    case 9:
      $("cos").style.backgroundImage = "url('resources/octubre.png')";
      return "Octubre";
      break;
    case 10:
      $("cos").style.backgroundImage = "url('resources/novembre.png')";
      return "Novembre";
      break;
    case 11:
      $("cos").style.backgroundImage = "url('resources/desembre.png')";
      return "Desembre";
      break;
  }
}

function numeroMes(nom) {
  switch (nom) {
    case 'Gener':
      return 0;
      break;
    case 'Febrer':
      return 1;
      break;
    case 'Març':
      return 2;
      break;
    case 'Abril':
      return 3;
      break;
    case 'Maig':
      return 4;
      break;
    case 'Juny':
      return 5;
      break;
    case 'Juliol':
      return 6;
      break;
    case 'Agost':
      return 7;
      break;
    case 'Setembre':
      return 8;
      break;
    case 'Octubre':
      return 9;
      break;
    case 'Novembre':
      return 10;
      break;
    case 'Desembre':
      return 11;
      break;
  }
}