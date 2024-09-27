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

$("mesSelect").value = nomMesActual;
$("anySelect").value = anyActual;

$("nomMes").innerHTML = $("mesSelect").value;
$("any").innerHTML = $("anySelect").value;

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